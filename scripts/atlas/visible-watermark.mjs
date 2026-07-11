import { createHash } from "node:crypto";

import { WATERMARK_BRAND } from "./blind-watermark.mjs";
import { SOURCE_VISIBLE_IDENTIFIER_BASELINES } from "./visible-source-baselines.mjs";

export const VISIBLE_WATERMARK_SCHEME = "xqy-visible-mesh-v2";
export const PRESERVED_SOURCE_WATERMARK_SCHEME =
  "source-visible-preserved-v1";
export const VISIBLE_WATERMARK_PROVENANCE = "user-provided-master";

const EXPECTED_INVENTORY = Object.freeze({
  meridian: 95,
  preserved: 18,
  total: 113,
});

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

export function getVisibleWatermarkPolicy(assetId) {
  if (/^[^/]+-meridian\/.+/.test(assetId)) {
    return Object.freeze({
      applied: true,
      sourceIdentifier: "provided-mesh",
    });
  }

  const baseline = SOURCE_VISIBLE_IDENTIFIER_BASELINES[assetId];

  if (baseline) {
    return Object.freeze({
      applied: false,
      sourceIdentifier: baseline.sourceIdentifier,
    });
  }

  throw new Error(`明水印资源分类未审核：${assetId}`);
}

export function assertVisibleWatermarkInventory(assetIds) {
  if (new Set(assetIds).size !== assetIds.length) {
    throw new Error("明水印源资源存在重复资产 ID。");
  }

  const counts = { meridian: 0, preserved: 0, total: assetIds.length };

  for (const assetId of assetIds) {
    const policy = getVisibleWatermarkPolicy(assetId);
    counts[policy.applied ? "meridian" : "preserved"] += 1;
  }

  if (
    counts.total !== EXPECTED_INVENTORY.total ||
    counts.meridian !== EXPECTED_INVENTORY.meridian ||
    counts.preserved !== EXPECTED_INVENTORY.preserved
  ) {
    throw new Error(
      `明水印资源范围异常：经络 ${counts.meridian}/${EXPECTED_INVENTORY.meridian}，保留源标识 ${counts.preserved}/${EXPECTED_INVENTORY.preserved}，总数 ${counts.total}/${EXPECTED_INVENTORY.total}。`,
    );
  }

  return counts;
}

export function assertSourceVisibleIdentifierBaseline(assetId, contents) {
  const policy = getVisibleWatermarkPolicy(assetId);
  const baseline = SOURCE_VISIBLE_IDENTIFIER_BASELINES[assetId];

  if (
    policy.applied ||
    !baseline ||
    baseline.sourceIdentifier !== policy.sourceIdentifier ||
    sha256(contents) !== baseline.sha256
  ) {
    throw new Error(`源图已有标识基线不一致：${assetId}`);
  }

  return baseline;
}

export function getSourceVisibleWatermarkDescriptor(assetId) {
  const policy = getVisibleWatermarkPolicy(assetId);

  if (!policy.applied) {
    return {
      applied: false,
      brand: WATERMARK_BRAND,
      reason: "source-identifier-preserved",
      scheme: PRESERVED_SOURCE_WATERMARK_SCHEME,
      sourceIdentifier: policy.sourceIdentifier,
    };
  }

  return {
    applied: true,
    brand: WATERMARK_BRAND,
    color: "#ffffff",
    opacity: 0.5,
    pattern: "tiled",
    provenance: VISIBLE_WATERMARK_PROVENANCE,
    scheme: VISIBLE_WATERMARK_SCHEME,
  };
}

export function assertVisibleWatermarkDescriptor(
  descriptor,
  _image,
  { assetId },
) {
  const expected = getSourceVisibleWatermarkDescriptor(assetId);

  if (
    !descriptor ||
    Object.keys(expected).some((key) => descriptor[key] !== expected[key]) ||
    Object.keys(descriptor).length !== Object.keys(expected).length
  ) {
    throw new Error(
      `${expected.applied ? "经络网状" : "源图已有"}明水印描述无效：${assetId}`,
    );
  }

  return descriptor;
}
