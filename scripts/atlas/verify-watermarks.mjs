import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

import {
  ATLAS_ASSET_MANIFEST,
  ATLAS_ASSETS,
  ATLAS_ASSET_SUMMARY,
  ATLAS_DERIVATION_CONTRACT,
  ATLAS_ENCODING_CONTRACT_FINGERPRINT,
  ATLAS_VARIANT_SPECS,
  assertExactAssetIds,
  getAtlasVisibleWatermarkPolicy,
} from "./asset-manifest.mjs";
import {
  extractBlindWatermark,
  getWatermarkId,
  loadWatermarkKey,
  SUPPORTED_WATERMARK_SCHEMES,
  WATERMARK_BRAND,
  WATERMARK_ROLES,
  WATERMARK_SCHEME,
} from "./blind-watermark.mjs";
import {
  collectRelativeFiles,
  validateMasterLibrary,
} from "./master-library.mjs";
import {
  assertWatermarkRegistryContains,
  readWatermarkRegistry,
} from "./watermark-registry.mjs";
import {
  assertVisibleWatermarkDescriptor,
  VISIBLE_WATERMARK_SCHEME,
} from "./visible-watermark.mjs";
import { validateAtlasContentLinks } from "./validate-content-links.mjs";
import { getPublicAssetFilename } from "./public-asset-path.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "../..");
const atlasRoot = path.join(projectRoot, "public/images/atlas");
const manifestPath = path.join(
  projectRoot,
  "src/data/atlas-image-assets.generated.ts",
);
const defaultKeyPath = path.join(
  projectRoot,
  "content-assets/masters/.atlas-watermark-key",
);
const defaultMasterRoot = path.join(
  projectRoot,
  "content-assets/masters/works-watermarked",
);
const watermarkRegistryPath = path.join(
  projectRoot,
  "content-assets/masters/.atlas-watermark-registry.json",
);

function readArgument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

async function readAtlasManifest() {
  const source = await readFile(manifestPath, "utf8");
  const fingerprintMarker =
    "export const atlasImageEncodingContractFingerprint = ";
  const fingerprintStart = source.indexOf(fingerprintMarker);
  const fingerprintEnd = source.indexOf(
    " as const",
    fingerprintStart + fingerprintMarker.length,
  );
  const versionMarker = "export const atlasImageAssetManifestVersion = ";
  const versionStart = source.indexOf(versionMarker);
  const versionEnd = source.indexOf(" as const", versionStart + versionMarker.length);
  const marker = "export const atlasImageAssets = ";
  const start = source.indexOf(marker);

  if (
    versionStart === -1 ||
    versionEnd === -1 ||
    fingerprintStart === -1 ||
    fingerprintEnd === -1 ||
    JSON.parse(
      source.slice(
        fingerprintStart + fingerprintMarker.length,
        fingerprintEnd,
      ),
    ) !== ATLAS_ENCODING_CONTRACT_FINGERPRINT ||
    Number(source.slice(versionStart + versionMarker.length, versionEnd)) !==
      ATLAS_ASSET_MANIFEST.version ||
    start === -1
  ) {
    throw new Error(`无法读取图谱资源清单：${manifestPath}`);
  }

  const jsonStart = start + marker.length;
  const jsonEnd = source.indexOf(" as const satisfies", jsonStart);

  if (jsonEnd === -1) {
    throw new Error(`图谱资源清单结构无效：${manifestPath}`);
  }

  const manifest = JSON.parse(source.slice(jsonStart, jsonEnd));

  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    throw new Error(`图谱资源清单不是有效对象：${manifestPath}`);
  }

  return manifest;
}

async function decodeImage(imagePath) {
  return sharp(imagePath)
    .toColourspace("srgb")
    .raw()
    .toBuffer({ resolveWithObject: true });
}

async function verifyFile(file, role, key, expected, watermark) {
  const expectedKeys = [
    "src",
    "width",
    "height",
    "byteSize",
    "format",
    "sha256",
    "visibleWatermark",
    "publicWatermark",
    "watermarkConfidence",
  ].sort();
  const actualKeys = Object.keys(expected ?? {}).sort();
  const spec = ATLAS_VARIANT_SPECS[role];

  if (
    actualKeys.length !== expectedKeys.length ||
    actualKeys.some((keyName, index) => keyName !== expectedKeys[index]) ||
    expected.format !== spec.format ||
    !Number.isInteger(expected.width) ||
    expected.width < 1 ||
    expected.width > spec.width ||
    !Number.isInteger(expected.height) ||
    expected.height < 1 ||
    expected.height > spec.height ||
    !Number.isInteger(expected.byteSize) ||
    expected.byteSize < 1 ||
    !/^[a-f0-9]{64}$/.test(expected.sha256) ||
    !Number.isFinite(expected.watermarkConfidence) ||
    expected.watermarkConfidence < 0 ||
    expected.watermarkConfidence > 1
  ) {
    throw new Error(`生成的公开变体字段或格式无效：${role}/${file.assetId}`);
  }

  const [decoded, fileStat, contents] = await Promise.all([
    decodeImage(file.absolutePath),
    stat(file.absolutePath),
    readFile(file.absolutePath),
  ]);
  const visibleWatermark = assertVisibleWatermarkDescriptor(
    expected.visibleWatermark,
    {
      width: expected.width,
      height: expected.height,
    },
    { assetId: file.assetId },
  );
  const publicWatermarkValid =
    JSON.stringify(expected.publicWatermark) ===
    JSON.stringify(ATLAS_DERIVATION_CONTRACT.publicVisibleWatermark);
  const detected = extractBlindWatermark({
    data: decoded.data,
    info: decoded.info,
    role,
    key,
    scheme: watermark.scheme,
  });
  const expectedFingerprint = getWatermarkId(file.assetId, key);

  return {
    assetId: file.assetId,
    confidence: detected.confidence,
    detectedFingerprint: detected.fingerprint,
    expectedFingerprint,
    minimumVotes: detected.minimumVotes,
    path: file.absolutePath,
    role,
    visibleWatermarkApplied: visibleWatermark.applied,
    valid:
      detected.valid &&
      publicWatermarkValid &&
      detected.scheme === watermark.scheme &&
      (watermark.scheme !== WATERMARK_SCHEME ||
        detected.brand === WATERMARK_BRAND) &&
      detected.role === role &&
      detected.fingerprint === expectedFingerprint &&
      decoded.info.width === expected.width &&
      decoded.info.height === expected.height &&
      fileStat.size === expected.byteSize &&
      createHash("sha256").update(contents).digest("hex") === expected.sha256,
  };
}

function assertVisibleWatermarkCounts(results) {
  const counts = {
    appliedFalse: 0,
    appliedTrue: 0,
    total: results.length,
  };

  for (const result of results) {
    if (result.visibleWatermarkApplied === true) {
      counts.appliedTrue += 1;
    } else if (result.visibleWatermarkApplied === false) {
      counts.appliedFalse += 1;
    } else {
      throw new Error(
        `条件式明水印缺少 applied 状态：${result.role}/${result.assetId}`,
      );
    }
  }

  if (
    counts.appliedTrue !==
      ATLAS_ASSET_SUMMARY.visibleWatermarkVariants.appliedTrue ||
    counts.appliedFalse !==
      ATLAS_ASSET_SUMMARY.visibleWatermarkVariants.appliedFalse ||
    counts.total !== ATLAS_ASSET_SUMMARY.variants
  ) {
    throw new Error(
      `条件式明水印公开变体计数异常：applied=true ${counts.appliedTrue}/${ATLAS_ASSET_SUMMARY.visibleWatermarkVariants.appliedTrue}，applied=false ${counts.appliedFalse}/${ATLAS_ASSET_SUMMARY.visibleWatermarkVariants.appliedFalse}，总数 ${counts.total}/${ATLAS_ASSET_SUMMARY.variants}。`,
    );
  }

  return counts;
}

async function mapInBatches(items, concurrency, mapper) {
  const results = [];

  for (let index = 0; index < items.length; index += concurrency) {
    results.push(
      ...(await Promise.all(items.slice(index, index + concurrency).map(mapper))),
    );
  }

  return results;
}

function attributionKey(scheme, fingerprint) {
  return `${scheme}:${fingerprint}`;
}

async function buildFingerprintIndex(key) {
  const [registry, manifest] = await Promise.all([
    readWatermarkRegistry(watermarkRegistryPath),
    readAtlasManifest(),
  ]);
  const index = new Map();
  const add = (scheme, fingerprint, assetId) => {
    const keyValue = attributionKey(scheme, fingerprint);
    const existing = index.get(keyValue);

    if (existing && existing !== assetId) {
      throw new Error(
        `盲水印归因表冲突：${scheme}/${fingerprint} 同时指向 ${existing} 与 ${assetId}`,
      );
    }

    index.set(keyValue, assetId);
  };

  const currentRecords = Object.entries(manifest).map(([assetId, assets]) => ({
    assetId,
    fingerprint: assets.watermark?.id,
    scheme: assets.watermark?.scheme,
  }));
  assertWatermarkRegistryContains(
    registry,
    currentRecords,
    "当前公开资源清单",
  );
  registry.entries
    .filter((entry) => SUPPORTED_WATERMARK_SCHEMES.includes(entry.scheme))
    .forEach((entry) =>
      add(entry.scheme, entry.fingerprint, entry.assetId),
    );
  Object.entries(manifest).forEach(([assetId, assets]) =>
    add(assets.watermark.scheme, getWatermarkId(assetId, key), assetId),
  );
  return index;
}

async function detectSingleImage(imagePath, requestedRole, key) {
  const decoded = await decodeImage(imagePath);
  const fingerprintIndex = await buildFingerprintIndex(key);
  const roles = requestedRole
    ? [requestedRole]
    : Object.keys(WATERMARK_ROLES);
  const attempts = roles.flatMap((role) =>
    SUPPORTED_WATERMARK_SCHEMES.map((scheme) => {
      const detected = extractBlindWatermark({
        data: decoded.data,
        info: decoded.info,
        role,
        key,
        scheme,
      });

      return {
        ...detected,
        assetId: fingerprintIndex.get(
          attributionKey(detected.scheme, detected.fingerprint),
        ),
        attemptedRole: role,
        attemptedScheme: scheme,
      };
    }),
  );
  const match = attempts.find(
    (attempt) =>
      attempt.valid &&
      attempt.scheme === attempt.attemptedScheme &&
      attempt.role === attempt.attemptedRole &&
      Boolean(attempt.assetId),
  );

  return { attempts, match };
}

async function verifyLibrary(key, masterRoot) {
  const [manifest, registry] = await Promise.all([
    readAtlasManifest(),
    readWatermarkRegistry(watermarkRegistryPath),
    validateMasterLibrary(masterRoot),
    validateAtlasContentLinks(),
  ]);
  const manifestEntries = Object.entries(manifest);

  assertExactAssetIds(
    manifestEntries.map(([assetId]) => assetId),
    "生成的公开资源清单资产 ID",
  );

  const publicFiles = await collectRelativeFiles(atlasRoot);
  const actualPublicPaths = publicFiles
    .map((file) => file.relativePath)
    .sort();
  const expectedPublicPaths = [
    ...Object.values(ATLAS_VARIANT_SPECS).map(
      (spec) => `${spec.directory}/.gitkeep`,
    ),
    ...ATLAS_ASSETS.flatMap((asset) =>
      asset.variants.map((role) => {
        const spec = ATLAS_VARIANT_SPECS[role];
        return `${spec.directory}/${getPublicAssetFilename(
          asset.id,
          role,
          spec.format,
          key,
        )}`;
      }),
    ),
  ].sort();

  if (
    actualPublicPaths.length !== expectedPublicPaths.length ||
    actualPublicPaths.some(
      (relativePath, index) => relativePath !== expectedPublicPaths[index],
    )
  ) {
    throw new Error("公开图谱目录存在缺失、未登记或冲突文件。");
  }

  const publicFileByPath = new Map(
    publicFiles.map((file) => [file.relativePath, file]),
  );

  const tasks = [];

  for (const asset of ATLAS_ASSETS) {
    const assets = manifest[asset.id];
    const expectedKeys = [
      ...asset.variants,
      "watermark",
      "sourceRelativePath",
      "sourceSha256",
    ].sort();
    const actualKeys = Object.keys(assets ?? {}).sort();

    if (
      actualKeys.length !== expectedKeys.length ||
      actualKeys.some((keyName, index) => keyName !== expectedKeys[index]) ||
      assets.sourceRelativePath !== asset.relativePath ||
      assets.sourceSha256 !== asset.sourceSha256 ||
      Object.keys(assets.watermark ?? {}).sort().join(",") !==
        "brand,id,scheme" ||
      assets.watermark?.brand !== WATERMARK_BRAND ||
      assets.watermark?.scheme !== WATERMARK_SCHEME ||
      assets.watermark?.id !== getWatermarkId(asset.id, key)
    ) {
      throw new Error(`生成的公开资源清单与审核资产冲突：${asset.id}`);
    }

    getAtlasVisibleWatermarkPolicy(asset.id);

    for (const role of asset.variants) {
      const spec = ATLAS_VARIANT_SPECS[role];
      const filename = getPublicAssetFilename(
        asset.id,
        role,
        spec.format,
        key,
      );
      const expectedSrc =
        `/images/atlas/${spec.directory}/${filename}`;
      const expected = assets[role];
      const relativePath = `${spec.directory}/${filename}`;
      const publicFile = publicFileByPath.get(relativePath);

      if (!expected || expected.src !== expectedSrc || !publicFile) {
        throw new Error(`生成的公开变体路径不一致：${role}/${asset.id}`);
      }

      tasks.push({
        expected,
        file: { ...publicFile, assetId: asset.id },
        role,
        watermark: assets.watermark,
      });
    }
  }

  assertWatermarkRegistryContains(
    registry,
    ATLAS_ASSETS.map((asset) => ({
      assetId: asset.id,
      fingerprint: manifest[asset.id].watermark.id,
      scheme: manifest[asset.id].watermark.scheme,
    })),
    "当前版本化资产",
  );

  const results = await mapInBatches(
    tasks,
    4,
    ({ expected, file, role, watermark }) =>
      verifyFile(file, role, key, expected, watermark),
  );
  const visibleWatermarkCounts = assertVisibleWatermarkCounts(results);

  return { results, visibleWatermarkCounts };
}

async function main() {
  const keyPath = path.resolve(
    readArgument("--watermark-key-file") ??
      process.env.ATLAS_WATERMARK_KEY_FILE ??
      defaultKeyPath,
  );
  const key = await loadWatermarkKey(keyPath);
  const imageArgument = readArgument("--image");
  const requestedRole = readArgument("--role");
  const outputJson = process.argv.includes("--json");
  const masterRoot = path.resolve(readArgument("--source") ?? defaultMasterRoot);

  if (
    ATLAS_DERIVATION_CONTRACT.blindWatermarkScheme !== WATERMARK_SCHEME
  ) {
    throw new Error("派生编码契约与当前盲水印方案不一致。");
  }

  if (requestedRole && !WATERMARK_ROLES[requestedRole]) {
    throw new Error(`不支持的图片角色：${requestedRole}`);
  }

  if (imageArgument) {
    const imagePath = path.resolve(imageArgument);
    const result = await detectSingleImage(imagePath, requestedRole, key);

    if (outputJson) {
      console.log(JSON.stringify(result, null, 2));
      if (!result.match) {
        process.exitCode = 1;
      }
    } else if (result.match) {
      console.log(`已检出 ${result.match.scheme} 盲水印。`);
      if (result.match.brand) {
        console.log(`品牌：${result.match.brand}`);
      }
      console.log(`资产：${result.match.assetId}`);
      console.log(`变体：${result.match.role}`);
      console.log(`置信度：${result.match.confidence.toFixed(3)}`);
    } else {
      console.error("未检出可验证的图谱盲水印。");
      process.exitCode = 1;
    }

    return;
  }

  const { results, visibleWatermarkCounts } = await verifyLibrary(
    key,
    masterRoot,
  );
  const failures = results.filter((result) => !result.valid);
  const minimumConfidence = Math.min(
    ...results.map((result) => result.confidence),
  );
  const minimumVotes = Math.min(...results.map((result) => result.minimumVotes));

  if (outputJson) {
    console.log(
      JSON.stringify(
        {
          failures,
          minimumConfidence,
          minimumVotes,
          scheme: WATERMARK_SCHEME,
          total: results.length,
          valid: results.length - failures.length,
          visibleWatermarkCounts,
          visibleScheme: VISIBLE_WATERMARK_SCHEME,
        },
        null,
        2,
      ),
    );
  } else {
    console.log(
      `图谱图片验证（明水印描述、文件哈希与盲水印）：${results.length - failures.length}/${results.length} 通过。`,
    );
    console.log(`最低置信度：${minimumConfidence.toFixed(3)}`);
    console.log(`每位最少载体数：${minimumVotes}`);
    console.log(
      `条件式明水印：applied=true ${visibleWatermarkCounts.appliedTrue}，applied=false ${visibleWatermarkCounts.appliedFalse}。`,
    );

    failures.slice(0, 10).forEach((failure) => {
      console.error(`验证失败：${failure.role}/${failure.assetId}`);
    });
  }

  if (failures.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
