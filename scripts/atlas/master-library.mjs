import { createHash } from "node:crypto";
import { lstat, readFile, readdir, realpath, stat } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

import {
  ATLAS_ASSETS,
  assertExactAssetIds,
  assertExactAssetRelativePaths,
  getAtlasVisibleWatermarkPolicy,
  ATLAS_ASSET_SUMMARY,
} from "./asset-manifest.mjs";
import {
  assertSourceVisibleIdentifierBaseline,
  assertVisibleWatermarkDescriptor,
} from "./visible-watermark.mjs";

export const PRIVATE_MASTER_MANIFEST_NAME = ".atlas-visible-masters.json";

function sha256(contents) {
  return createHash("sha256").update(contents).digest("hex");
}

export async function collectRelativeFiles(
  directory,
  relativeDirectory = "",
  traversal,
) {
  let state = traversal;

  if (!state) {
    const rootStat = await lstat(directory);

    if (rootStat.isSymbolicLink()) {
      throw new Error(`拒绝符号链接资源根目录：${directory}`);
    }

    state = { root: await realpath(directory) };
  }

  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries.sort((left, right) =>
    left.name.localeCompare(right.name, "en"),
  )) {
    const relativePath = path.posix.join(relativeDirectory, entry.name);
    const absolutePath = path.join(directory, entry.name);
    const resolvedPath = await realpath(absolutePath);
    const relativeToRoot = path.relative(state.root, resolvedPath);

    if (
      entry.isSymbolicLink() ||
      relativeToRoot.startsWith(`..${path.sep}`) ||
      relativeToRoot === ".." ||
      path.isAbsolute(relativeToRoot)
    ) {
      throw new Error(`拒绝符号链接或根目录越界资源：${relativePath}`);
    }

    if (entry.isDirectory()) {
      files.push(
        ...(await collectRelativeFiles(absolutePath, relativePath, state)),
      );
    } else if (entry.isFile()) {
      files.push({ absolutePath, relativePath });
    } else {
      throw new Error(`拒绝特殊类型资源：${relativePath}`);
    }
  }

  return files;
}

async function readPrivateMasterManifest(sourceRoot) {
  const privateManifestPath = path.join(
    sourceRoot,
    PRIVATE_MASTER_MANIFEST_NAME,
  );
  let source;

  try {
    source = await readFile(privateManifestPath, "utf8");
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      throw new Error(
        "公开图必须从已审核的全分辨率明水印副本生成；缺少私有导入证据清单。",
      );
    }

    throw error;
  }

  const privateManifest = JSON.parse(source);

  if (
    !privateManifest ||
    typeof privateManifest !== "object" ||
    !Array.isArray(privateManifest.records) ||
    privateManifest.total !== privateManifest.records.length
  ) {
    throw new Error("全分辨率母版私有导入证据清单结构无效。");
  }

  return privateManifest;
}

function expectedLibraryCounts() {
  return {
    assets: ATLAS_ASSET_SUMMARY.assets,
    variants: ATLAS_ASSET_SUMMARY.variants,
    byCategory: ATLAS_ASSET_SUMMARY.byCategory,
    bySourceType: ATLAS_ASSET_SUMMARY.bySourceType,
    byVisibleWatermarkPolicy:
      ATLAS_ASSET_SUMMARY.byVisibleWatermarkPolicy,
    visibleWatermarkAssets: ATLAS_ASSET_SUMMARY.visibleWatermarkAssets,
    visibleWatermarkVariants: ATLAS_ASSET_SUMMARY.visibleWatermarkVariants,
  };
}

function assertPrivateCountsCompatible(privateManifest, expectedCounts) {
  const counts = privateManifest.counts;

  if (
    privateManifest.total !== expectedCounts.assets ||
    !counts ||
    typeof counts !== "object"
  ) {
    throw new Error("私有导入证据计数与版本化资产清单不一致。");
  }

  if ("assets" in counts) {
    if (JSON.stringify(counts) !== JSON.stringify(expectedCounts)) {
      throw new Error("私有导入证据的动态计数与版本化资产清单不一致。");
    }

    return;
  }

  // 兼容 1.0 私有证据中的历史字段名；它们不再作为分类或策略事实源。
  if (
    counts.total !== expectedCounts.assets ||
    !Number.isInteger(counts.meridian) ||
    !Number.isInteger(counts.preserved) ||
    counts.meridian < 0 ||
    counts.preserved < 0 ||
    counts.meridian + counts.preserved !== counts.total
  ) {
    throw new Error("1.0 私有导入证据的兼容计数无效。");
  }
}

export async function validateMasterLibrary(sourceRoot) {
  const [files, privateManifest] = await Promise.all([
    collectRelativeFiles(sourceRoot),
    readPrivateMasterManifest(sourceRoot),
  ]);
  const evidenceFiles = files.filter(
    (file) => file.relativePath === PRIVATE_MASTER_MANIFEST_NAME,
  );
  const masterFiles = files.filter(
    (file) => file.relativePath !== PRIVATE_MASTER_MANIFEST_NAME,
  );

  if (evidenceFiles.length !== 1) {
    throw new Error("全分辨率母版目录必须且只能包含一份私有导入证据清单。");
  }

  assertExactAssetRelativePaths(
    masterFiles.map((file) => file.relativePath),
    "全分辨率母版目录",
  );
  assertExactAssetIds(
    privateManifest.records.map((record) => record.assetId),
    "私有导入证据资产 ID",
  );
  assertExactAssetRelativePaths(
    privateManifest.records.map((record) => record.sourceRelativePath),
    "私有导入证据资产路径",
  );

  const expectedCounts = expectedLibraryCounts();
  assertPrivateCountsCompatible(privateManifest, expectedCounts);

  const fileByPath = new Map(
    masterFiles.map((file) => [file.relativePath, file]),
  );
  const privateRecordById = new Map(
    privateManifest.records.map((record) => [record.assetId, record]),
  );
  const sources = [];

  for (const asset of ATLAS_ASSETS) {
    const file = fileByPath.get(asset.relativePath);
    const privateRecord = privateRecordById.get(asset.id);
    const policy = getAtlasVisibleWatermarkPolicy(asset.id);

    if (!file || !privateRecord) {
      throw new Error(`全分辨率母版或私有导入证据缺失：${asset.id}`);
    }

    const [contents, fileStat, metadata] = await Promise.all([
      readFile(file.absolutePath),
      stat(file.absolutePath),
      sharp(file.absolutePath).metadata(),
    ]);
    const actualSha256 = sha256(contents);

    if (
      privateRecord.assetId !== asset.id ||
      privateRecord.sourceRelativePath !== asset.relativePath ||
      privateRecord.sourceKind !== asset.sourceType ||
      privateRecord.sourceSha256 !== asset.sourceSha256 ||
      privateRecord.outputSha256 !== asset.sourceSha256 ||
      actualSha256 !== asset.sourceSha256 ||
      privateRecord.byteSize !== fileStat.size ||
      privateRecord.width !== metadata.width ||
      privateRecord.height !== metadata.height
    ) {
      throw new Error(`全分辨率母版与版本化清单或私有证据冲突：${asset.id}`);
    }

    assertVisibleWatermarkDescriptor(
      privateRecord.visibleWatermark,
      { width: metadata.width, height: metadata.height },
      { assetId: asset.id },
    );

    if (!policy.descriptor.applied) {
      assertSourceVisibleIdentifierBaseline(asset.id, contents);
    }

    sources.push({
      ...asset,
      absolutePath: file.absolutePath,
      privateRecord,
    });
  }

  return {
    counts: expectedCounts,
    privateManifest,
    sources,
  };
}
