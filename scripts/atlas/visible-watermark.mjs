import { createHash } from "node:crypto";

import {
  ATLAS_ASSET_SUMMARY,
  ATLAS_VISIBLE_WATERMARK_POLICIES,
  assertExactAssetIds,
  getAtlasAsset,
  getAtlasVisibleWatermarkPolicy,
} from "./asset-manifest.mjs";

function uniquePolicyValue(policies, key, label) {
  const values = [
    ...new Set(
      policies.map((policy) => policy.descriptor[key]).filter(Boolean),
    ),
  ];

  if (values.length !== 1) {
    throw new Error(`版本化资产清单的${label}不唯一。`);
  }

  return values[0];
}

const policies = Object.values(ATLAS_VISIBLE_WATERMARK_POLICIES);
const appliedPolicies = policies.filter(
  (policy) => policy.descriptor.applied === true,
);
const preservedPolicies = policies.filter(
  (policy) => policy.descriptor.applied === false,
);

export const VISIBLE_WATERMARK_SCHEME = uniquePolicyValue(
  appliedPolicies,
  "scheme",
  "已应用明水印方案",
);
export const PRESERVED_SOURCE_WATERMARK_SCHEME = uniquePolicyValue(
  preservedPolicies,
  "scheme",
  "保留源标识方案",
);
export const VISIBLE_WATERMARK_PROVENANCE = uniquePolicyValue(
  appliedPolicies,
  "provenance",
  "明水印来源",
);

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

export function getVisibleWatermarkPolicy(assetId) {
  const asset = getAtlasAsset(assetId);
  const policy = getAtlasVisibleWatermarkPolicy(assetId);

  return Object.freeze({
    applied: policy.descriptor.applied,
    description: policy.description,
    policyId: asset.visibleWatermarkPolicy,
    sourceIdentifier: policy.descriptor.sourceIdentifier ?? "provided-mesh",
  });
}

export function assertVisibleWatermarkInventory(assetIds) {
  assertExactAssetIds(assetIds, "明水印源资源");

  return Object.freeze({
    meridian: ATLAS_ASSET_SUMMARY.visibleWatermarkAssets.appliedTrue,
    preserved: ATLAS_ASSET_SUMMARY.visibleWatermarkAssets.appliedFalse,
    total: ATLAS_ASSET_SUMMARY.assets,
  });
}

export function assertSourceVisibleIdentifierBaseline(assetId, contents) {
  const asset = getAtlasAsset(assetId);
  const policy = getAtlasVisibleWatermarkPolicy(assetId);

  if (
    policy.descriptor.applied ||
    sha256(contents) !== asset.sourceSha256
  ) {
    throw new Error(`源图已有标识基线不一致：${assetId}`);
  }

  return Object.freeze({
    sha256: asset.sourceSha256,
    sourceIdentifier: policy.descriptor.sourceIdentifier,
  });
}

export function getSourceVisibleWatermarkDescriptor(assetId) {
  return getAtlasVisibleWatermarkPolicy(assetId).descriptor;
}

export function assertVisibleWatermarkDescriptor(
  descriptor,
  _image,
  { assetId },
) {
  const expected = getSourceVisibleWatermarkDescriptor(assetId);

  if (
    !descriptor ||
    typeof descriptor !== "object" ||
    Object.keys(expected).some((key) => descriptor[key] !== expected[key]) ||
    Object.keys(descriptor).length !== Object.keys(expected).length
  ) {
    throw new Error(
      `${expected.applied ? "经络网状" : "源图已有"}明水印描述无效：${assetId}`,
    );
  }

  return descriptor;
}
