import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

import {
  extractBlindWatermark,
  getWatermarkId,
  loadWatermarkKey,
  SUPPORTED_WATERMARK_SCHEMES,
  WATERMARK_BRAND,
  WATERMARK_ROLES,
  WATERMARK_SCHEME,
} from "./blind-watermark.mjs";
import { readWatermarkRegistry } from "./watermark-registry.mjs";
import {
  assertVisibleWatermarkDescriptor,
  VISIBLE_WATERMARK_SCHEME,
} from "./visible-watermark.mjs";

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
const watermarkRegistryPath = path.join(
  projectRoot,
  "content-assets/masters/.atlas-watermark-registry.json",
);
const EXPECTED_VISIBLE_WATERMARK_COUNTS = Object.freeze({
  appliedFalse: 36,
  appliedTrue: 190,
  total: 226,
});

function readArgument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

async function readAtlasManifest() {
  const source = await readFile(manifestPath, "utf8");
  const marker = "export const atlasImageAssets = ";
  const start = source.indexOf(marker);

  if (start === -1) {
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

async function collectWebpFiles(directory, relativeDirectory = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.posix.join(relativeDirectory, entry.name);
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectWebpFiles(absolutePath, relativePath)));
    } else if (/\.webp$/i.test(entry.name)) {
      files.push({
        absolutePath,
        assetId: relativePath.replace(/\.webp$/i, ""),
      });
    }
  }

  return files.sort((left, right) =>
    left.assetId.localeCompare(right.assetId, "en"),
  );
}

async function decodeImage(imagePath) {
  return sharp(imagePath)
    .toColourspace("srgb")
    .raw()
    .toBuffer({ resolveWithObject: true });
}

async function verifyFile(file, role, key, expected, watermark) {
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
    counts.appliedTrue !== EXPECTED_VISIBLE_WATERMARK_COUNTS.appliedTrue ||
    counts.appliedFalse !== EXPECTED_VISIBLE_WATERMARK_COUNTS.appliedFalse ||
    counts.total !== EXPECTED_VISIBLE_WATERMARK_COUNTS.total
  ) {
    throw new Error(
      `条件式明水印公开变体计数异常：applied=true ${counts.appliedTrue}/${EXPECTED_VISIBLE_WATERMARK_COUNTS.appliedTrue}，applied=false ${counts.appliedFalse}/${EXPECTED_VISIBLE_WATERMARK_COUNTS.appliedFalse}，总数 ${counts.total}/${EXPECTED_VISIBLE_WATERMARK_COUNTS.total}。`,
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

async function verifyLibrary(key) {
  const manifest = await readAtlasManifest();
  const manifestEntries = Object.entries(manifest);

  if (manifestEntries.length === 0) {
    throw new Error("图谱资源清单为空，拒绝跳过盲水印验证。");
  }

  const tasks = [];

  for (const role of Object.keys(WATERMARK_ROLES)) {
    const directory = path.join(atlasRoot, `${role}s`);
    const files = await collectWebpFiles(directory);
    const actualById = new Map(files.map((file) => [file.assetId, file]));
    const expectedIds = new Set();
    const expectedPrefix = `/images/atlas/${role}s/`;

    for (const [assetId, assets] of manifestEntries) {
      const variant = assets?.[role];
      const expectedSrc = `${expectedPrefix}${assetId}.webp`;

      if (
        assets?.watermark?.brand !== WATERMARK_BRAND ||
        assets?.watermark?.scheme !== WATERMARK_SCHEME ||
        assets?.watermark?.id !== getWatermarkId(assetId, key)
      ) {
        throw new Error(`图谱资源清单水印标识无效：${assetId}`);
      }

      if (!variant || variant.src !== expectedSrc) {
        throw new Error(
          `图谱资源清单路径不一致：${role}/${assetId}`,
        );
      }

      expectedIds.add(assetId);
    }

    const missing = Array.from(expectedIds).filter(
      (assetId) => !actualById.has(assetId),
    );
    const unexpected = files
      .map((file) => file.assetId)
      .filter((assetId) => !expectedIds.has(assetId));

    if (missing.length > 0 || unexpected.length > 0) {
      throw new Error(
        [
          `${role} 资源与清单不一致。`,
          missing.length > 0
            ? `缺失：${missing.slice(0, 10).join(", ")}`
            : null,
          unexpected.length > 0
            ? `未登记：${unexpected.slice(0, 10).join(", ")}`
            : null,
        ]
          .filter(Boolean)
          .join("\n"),
      );
    }

    tasks.push(
      ...Array.from(expectedIds, (assetId) => ({
        expected: manifest[assetId][role],
        file: actualById.get(assetId),
        role,
        watermark: manifest[assetId].watermark,
      })),
    );
  }

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

  const { results, visibleWatermarkCounts } = await verifyLibrary(key);
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
