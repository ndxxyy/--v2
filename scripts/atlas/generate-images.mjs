import {
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { createHash, randomUUID } from "node:crypto";
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
  getAtlasAsset,
} from "./asset-manifest.mjs";
import {
  embedBlindWatermark,
  extractBlindWatermark,
  getWatermarkId,
  loadWatermarkKey,
  WATERMARK_BRAND,
  WATERMARK_SCHEME,
} from "./blind-watermark.mjs";
import {
  collectRelativeFiles,
  validateMasterLibrary,
} from "./master-library.mjs";
import { registerWatermarkAssets } from "./watermark-registry.mjs";
import {
  assertVisibleWatermarkDescriptor,
  getSourceVisibleWatermarkDescriptor,
  PRESERVED_SOURCE_WATERMARK_SCHEME,
  VISIBLE_WATERMARK_SCHEME,
  VISIBLE_WATERMARK_PROVENANCE,
} from "./visible-watermark.mjs";
import { validateAtlasContentLinks } from "./validate-content-links.mjs";
import { getPublicAssetFilename } from "./public-asset-path.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "../..");
const publicImagesRoot = path.join(projectRoot, "public/images");
const atlasRoot = path.join(publicImagesRoot, "atlas");
const manifestPath = path.join(
  projectRoot,
  "src/data/atlas-image-assets.generated.ts",
);
const defaultWatermarkKeyPath = path.join(
  projectRoot,
  "content-assets/masters/.atlas-watermark-key",
);
const watermarkRegistryPath = path.join(
  projectRoot,
  "content-assets/masters/.atlas-watermark-registry.json",
);
const transactionLockPath = path.join(
  publicImagesRoot,
  ".atlas-watermark-transaction.lock",
);
const GENERATED_VARIANT_KEYS = Object.freeze([
  "src",
  "width",
  "height",
  "byteSize",
  "format",
  "sha256",
  "visibleWatermark",
  "publicWatermark",
  "watermarkConfidence",
]);
const GENERATED_PAIR_KEYS = Object.freeze([
  "thumbnail",
  "preview",
  "watermark",
  "sourceRelativePath",
  "sourceSha256",
]);
const GENERATED_WATERMARK_KEYS = Object.freeze(["brand", "scheme", "id"]);

function readArgument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

function readArguments(name) {
  const values = [];

  for (let index = 0; index < process.argv.length; index += 1) {
    if (process.argv[index] === name) {
      const value = process.argv[index + 1];

      if (!value || value.startsWith("--")) {
        throw new Error(`参数 ${name} 缺少值。`);
      }

      values.push(...value.split(",").map((item) => item.trim()).filter(Boolean));
    }
  }

  return values;
}

async function preflightVisibleWatermarkSources(sourceRoot) {
  const validated = await validateMasterLibrary(sourceRoot);

  return {
    ...validated,
    descriptorById: new Map(
      validated.sources.map((source) => [
        source.id,
        getSourceVisibleWatermarkDescriptor(source.id),
      ]),
    ),
  };
}

async function renderVariant(
  sourcePath,
  outputPath,
  dimensions,
  quality,
  watermark,
) {
  await mkdir(path.dirname(outputPath), { recursive: true });

  let sourcePipeline = sharp(sourcePath);

  if (ATLAS_DERIVATION_CONTRACT.autoOrient) {
    sourcePipeline = sourcePipeline.rotate();
  }

  const resized = await sourcePipeline
    .resize({
      width: dimensions.width,
      height: dimensions.height,
      fit: ATLAS_DERIVATION_CONTRACT.resizeFit,
      kernel: sharp.kernel[ATLAS_DERIVATION_CONTRACT.resizeKernel],
      withoutEnlargement:
        ATLAS_DERIVATION_CONTRACT.withoutEnlargement,
    })
    .toColourspace(ATLAS_DERIVATION_CONTRACT.colourspace)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const publicWatermark = ATLAS_DERIVATION_CONTRACT.publicVisibleWatermark;
  const padding = Math.max(18, Math.round(resized.info.width * 0.028));
  const brandSize = Math.max(17, Math.round(resized.info.width * 0.022));
  const domainSize = Math.max(11, Math.round(resized.info.width * 0.014));
  const lineGap = Math.max(5, Math.round(resized.info.width * 0.005));
  const domainBaseline = resized.info.height - padding;
  const brandBaseline = domainBaseline - domainSize - lineGap;
  const watermarkSvg = Buffer.from(`
    <svg width="${resized.info.width}" height="${resized.info.height}" xmlns="http://www.w3.org/2000/svg">
      <g opacity="${publicWatermark.opacity}" text-anchor="end" font-family="PingFang SC, Microsoft YaHei, sans-serif" fill="#173943" stroke="#ffffff" stroke-opacity="0.55" stroke-width="1.5" paint-order="stroke">
        <text x="${resized.info.width - padding}" y="${brandBaseline}" font-size="${brandSize}" font-weight="600">${publicWatermark.brand}</text>
        <text x="${resized.info.width - padding}" y="${domainBaseline}" font-size="${domainSize}" letter-spacing="0.4">${publicWatermark.domain}</text>
      </g>
    </svg>
  `);
  const composited = await sharp(resized.data, {
    raw: {
      width: resized.info.width,
      height: resized.info.height,
      channels: resized.info.channels,
    },
  })
    .composite([{ input: watermarkSvg, blend: "over" }])
    .removeAlpha()
    .toColourspace(ATLAS_DERIVATION_CONTRACT.colourspace)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const embedded = embedBlindWatermark({
    data: composited.data,
    info: composited.info,
    assetId: watermark.assetId,
    role: watermark.role,
    key: watermark.key,
  });

  await sharp(embedded.data, {
    raw: {
      width: resized.info.width,
      height: resized.info.height,
      channels: resized.info.channels,
    },
  })
    .webp({
      quality,
      effort: ATLAS_DERIVATION_CONTRACT.webpEffort,
      smartSubsample: ATLAS_DERIVATION_CONTRACT.webpSmartSubsample,
    })
    .toFile(outputPath);

  const [metadata, fileStat, decodedOutput, encodedOutput] = await Promise.all([
    sharp(outputPath).metadata(),
    stat(outputPath),
    sharp(outputPath)
      .toColourspace(ATLAS_DERIVATION_CONTRACT.colourspace)
      .raw()
      .toBuffer({ resolveWithObject: true }),
    readFile(outputPath),
  ]);

  if (
    !metadata.width ||
    !metadata.height ||
    metadata.width > dimensions.width ||
    metadata.height > dimensions.height
  ) {
    throw new Error(`无法读取派生图片尺寸：${outputPath}`);
  }

  const detected = extractBlindWatermark({
    data: decodedOutput.data,
    info: decodedOutput.info,
    role: watermark.role,
    key: watermark.key,
  });
  const expectedWatermarkId = getWatermarkId(
    watermark.assetId,
    watermark.key,
  );

  if (
    !detected.valid ||
    detected.brand !== WATERMARK_BRAND ||
    detected.role !== watermark.role ||
    detected.fingerprint !== expectedWatermarkId
  ) {
    throw new Error(
      `派生图片的盲水印验证失败：${outputPath}`,
    );
  }

  return {
    width: metadata.width,
    height: metadata.height,
    byteSize: fileStat.size,
    sha256: createHash("sha256").update(encodedOutput).digest("hex"),
    visibleWatermark: watermark.visibleWatermark,
    publicWatermark,
    watermarkConfidence: detected.confidence,
  };
}

async function processImage(
  source,
  watermarkKey,
  outputRoots,
  visibleWatermark,
) {
  const variants = Object.fromEntries(
    await Promise.all(
      source.variants.map(async (role) => {
        const spec = ATLAS_VARIANT_SPECS[role];
        const outputRelativePath = getPublicAssetFilename(
          source.id,
          role,
          spec.format,
          watermarkKey,
        );
        const outputPath = path.join(
          outputRoots[role],
          outputRelativePath,
        );
        const generated = await renderVariant(
          source.absolutePath,
          outputPath,
          { width: spec.width, height: spec.height },
          spec.quality,
          {
            assetId: source.id,
            role,
            key: watermarkKey,
            visibleWatermark,
          },
        );

        return [
          role,
          {
            src: `/images/atlas/${spec.directory}/${outputRelativePath}`,
            width: generated.width,
            height: generated.height,
            byteSize: generated.byteSize,
            format: spec.format,
            sha256: generated.sha256,
            visibleWatermark: generated.visibleWatermark,
            publicWatermark: generated.publicWatermark,
            watermarkConfidence: generated.watermarkConfidence,
          },
        ];
      }),
    ),
  );

  return [
    source.id,
    {
      ...variants,
      watermark: {
        brand: WATERMARK_BRAND,
        scheme: WATERMARK_SCHEME,
        id: getWatermarkId(source.id, watermarkKey),
      },
      sourceRelativePath: source.relativePath,
      sourceSha256: source.sourceSha256,
    },
  ];
}

async function readGeneratedManifest() {
  let source;

  try {
    source = await readFile(manifestPath, "utf8");
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return null;
    }

    throw error;
  }

  const marker = "export const atlasImageAssets = ";
  const start = source.indexOf(marker);
  const end = source.indexOf(" as const satisfies", start + marker.length);

  if (start === -1 || end === -1) {
    throw new Error(`既有公开资源清单结构无效：${manifestPath}`);
  }

  const readGeneratedScalar = (scalarMarker) => {
    const scalarStart = source.indexOf(scalarMarker);

    if (scalarStart === -1) {
      return undefined;
    }

    const valueStart = scalarStart + scalarMarker.length;
    const valueEnd = source.indexOf(" as const", valueStart);

    if (valueEnd === -1) {
      throw new Error(`既有公开资源清单标量结构无效：${scalarMarker}`);
    }

    return JSON.parse(source.slice(valueStart, valueEnd));
  };

  return {
    assets: JSON.parse(source.slice(start + marker.length, end)),
    encodingContractFingerprint: readGeneratedScalar(
      "export const atlasImageEncodingContractFingerprint = ",
    ),
    manifestVersion: readGeneratedScalar(
      "export const atlasImageAssetManifestVersion = ",
    ),
  };
}

function expectedVariantSrc(assetId, role, watermarkKey) {
  const spec = ATLAS_VARIANT_SPECS[role];
  const filename = getPublicAssetFilename(
    assetId,
    role,
    spec.format,
    watermarkKey,
  );
  return `/images/atlas/${spec.directory}/${filename}`;
}

function hasExactKeys(value, expectedKeys) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const actualKeys = Object.keys(value).sort();
  const sortedExpectedKeys = [...expectedKeys].sort();

  return (
    actualKeys.length === sortedExpectedKeys.length &&
    actualKeys.every((key, index) => key === sortedExpectedKeys[index])
  );
}

function hasReusableVariantMetadata(source, role, variant, watermarkKey) {
  const spec = ATLAS_VARIANT_SPECS[role];

  if (
    !hasExactKeys(variant, GENERATED_VARIANT_KEYS) ||
    variant.src !== expectedVariantSrc(source.id, role, watermarkKey) ||
    variant.format !== spec.format ||
    !Number.isInteger(variant.width) ||
    variant.width < 1 ||
    variant.width > spec.width ||
    !Number.isInteger(variant.height) ||
    variant.height < 1 ||
    variant.height > spec.height ||
    !Number.isInteger(variant.byteSize) ||
    variant.byteSize < 1 ||
    !/^[a-f0-9]{64}$/.test(variant.sha256) ||
    !Number.isFinite(variant.watermarkConfidence) ||
    variant.watermarkConfidence < 0 ||
    variant.watermarkConfidence > 1
  ) {
    return false;
  }

  try {
    if (
      JSON.stringify(variant.publicWatermark) !==
      JSON.stringify(ATLAS_DERIVATION_CONTRACT.publicVisibleWatermark)
    ) {
      return false;
    }
    assertVisibleWatermarkDescriptor(
      variant.visibleWatermark,
      { width: variant.width, height: variant.height },
      { assetId: source.id },
    );
  } catch {
    return false;
  }

  return true;
}

function hasReusableMetadata(
  source,
  previous,
  watermarkKey,
  encodingContractFingerprint,
  manifestVersion,
) {
  if (
    encodingContractFingerprint !== ATLAS_ENCODING_CONTRACT_FINGERPRINT ||
    manifestVersion !== ATLAS_ASSET_MANIFEST.version ||
    !previous ||
    !hasExactKeys(previous, GENERATED_PAIR_KEYS) ||
    previous.sourceRelativePath !== source.relativePath ||
    previous.sourceSha256 !== source.sourceSha256 ||
    !hasExactKeys(previous.watermark, GENERATED_WATERMARK_KEYS) ||
    previous.watermark?.brand !== WATERMARK_BRAND ||
    previous.watermark?.scheme !== WATERMARK_SCHEME ||
    previous.watermark?.id !== getWatermarkId(source.id, watermarkKey)
  ) {
    return false;
  }

  try {
    for (const role of source.variants) {
      if (!hasReusableVariantMetadata(source, role, previous[role], watermarkKey)) {
        return false;
      }
    }
  } catch {
    return false;
  }

  return true;
}

async function copyAndVerifyExistingVariant({
  source,
  role,
  expected,
  outputRoots,
  watermarkKey,
}) {
  const spec = ATLAS_VARIANT_SPECS[role];

  if (!hasReusableVariantMetadata(source, role, expected, watermarkKey)) {
    throw new Error(`既有公开变体元数据不可复用：${role}/${source.id}`);
  }

  const relativeOutputPath = getPublicAssetFilename(
    source.id,
    role,
    spec.format,
    watermarkKey,
  );
  const currentPath = path.join(atlasRoot, spec.directory, relativeOutputPath);
  const outputPath = path.join(outputRoots[role], relativeOutputPath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await copyFile(currentPath, outputPath);
  const [metadata, fileStat, decodedOutput, encodedOutput] = await Promise.all([
    sharp(outputPath).metadata(),
    stat(outputPath),
    sharp(outputPath)
      .toColourspace(ATLAS_DERIVATION_CONTRACT.colourspace)
      .raw()
      .toBuffer({ resolveWithObject: true }),
    readFile(outputPath),
  ]);
  const detected = extractBlindWatermark({
    data: decodedOutput.data,
    info: decodedOutput.info,
    role,
    key: watermarkKey,
  });
  const actualSha256 = createHash("sha256").update(encodedOutput).digest("hex");

  assertVisibleWatermarkDescriptor(
    expected.visibleWatermark,
    { width: expected.width, height: expected.height },
    { assetId: source.id },
  );

  if (
    expected.src !== expectedVariantSrc(source.id, role, watermarkKey) ||
    expected.format !== spec.format ||
    metadata.width !== expected.width ||
    metadata.height !== expected.height ||
    fileStat.size !== expected.byteSize ||
    actualSha256 !== expected.sha256 ||
    !detected.valid ||
    detected.scheme !== WATERMARK_SCHEME ||
    detected.brand !== WATERMARK_BRAND ||
    detected.role !== role ||
    detected.fingerprint !== getWatermarkId(source.id, watermarkKey)
  ) {
    throw new Error(`未选中公开变体复用验证失败：${role}/${source.id}`);
  }
}

async function reuseImage(
  source,
  previous,
  watermarkKey,
  outputRoots,
  previousEncodingContractFingerprint,
  previousManifestVersion,
) {
  if (
    !hasReusableMetadata(
      source,
      previous,
      watermarkKey,
      previousEncodingContractFingerprint,
      previousManifestVersion,
    )
  ) {
    throw new Error(
      `未选中资产不可复用，请把它加入 --asset 或先完成全量迁移：${source.id}`,
    );
  }

  await Promise.all(
    source.variants.map((role) =>
      copyAndVerifyExistingVariant({
        source,
        role,
        expected: previous[role],
        outputRoots,
        watermarkKey,
      }),
    ),
  );

  const sanitizedVariants = Object.fromEntries(
    source.variants.map((role) => {
      const variant = previous[role];

      return [
        role,
        {
          src: variant.src,
          width: variant.width,
          height: variant.height,
          byteSize: variant.byteSize,
          format: variant.format,
          sha256: variant.sha256,
          visibleWatermark: variant.visibleWatermark,
          publicWatermark: variant.publicWatermark,
          watermarkConfidence: variant.watermarkConfidence,
        },
      ];
    }),
  );

  return [
    source.id,
    {
      ...sanitizedVariants,
      watermark: {
        brand: previous.watermark.brand,
        scheme: previous.watermark.scheme,
        id: previous.watermark.id,
      },
      sourceRelativePath: source.relativePath,
      sourceSha256: source.sourceSha256,
    },
  ];
}

async function assertStagingInventory(stagingRoot, watermarkKey) {
  const files = await collectRelativeFiles(stagingRoot);
  const actual = files.map((file) => file.relativePath).sort();
  const expected = [
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
          watermarkKey,
        )}`;
      }),
    ),
  ].sort();

  if (
    actual.length !== expected.length ||
    actual.some((value, index) => value !== expected[index])
  ) {
    throw new Error("暂存公开资源与版本化资产清单不一致。");
  }
}

function previousRegistryRecords(previousManifest) {
  if (!previousManifest) {
    throw new Error("既有公开清单缺失，拒绝在无法核对历史指纹时生成。");
  }

  return Object.entries(previousManifest).map(([assetId, assets]) => {
    if (
      assets?.watermark?.brand !== WATERMARK_BRAND ||
      typeof assets?.watermark?.scheme !== "string" ||
      typeof assets?.watermark?.id !== "string"
    ) {
      throw new Error(`既有公开清单盲水印记录无效：${assetId}`);
    }

    return {
      assetId,
      fingerprint: assets.watermark.id,
      scheme: assets.watermark.scheme,
    };
  });
}

async function assertNoResidualPublishArtifacts() {
  const [publicEntries, manifestEntries] = await Promise.all([
    readdir(publicImagesRoot),
    readdir(path.dirname(manifestPath)),
  ]);
  const lockName = path.basename(transactionLockPath);
  const manifestName = path.basename(manifestPath);
  const residual = [
    ...publicEntries
      .filter(
        (name) =>
          name === lockName ||
          name.startsWith(".atlas-watermark-build-") ||
          name.startsWith(".atlas-watermark-previous-"),
      )
      .map((name) => path.join(publicImagesRoot, name)),
    ...manifestEntries
      .filter(
        (name) =>
          name.startsWith(`.${manifestName}.`) &&
          (name.endsWith(".next") || name.endsWith(".previous")),
      )
      .map((name) => path.join(path.dirname(manifestPath), name)),
  ];

  if (residual.length > 0) {
    throw new Error(
      [
        "检测到上次图谱原子替换或并发生成的事务残留，拒绝继续。",
        ...residual.slice(0, 10).map((item) => `残留：${item}`),
        "请先核对 public/images/atlas、generated TS 与 .previous/.next 内容，人工恢复一致状态后再移除残留；不要直接重跑或删除历史登记。",
      ].join("\n"),
    );
  }
}

async function acquirePublishTransactionLock() {
  await assertNoResidualPublishArtifacts();

  try {
    await writeFile(
      transactionLockPath,
      `${JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() })}\n`,
      { encoding: "utf8", flag: "wx", mode: 0o600 },
    );
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "EEXIST"
    ) {
      throw new Error(
        `图谱生成事务锁已存在，拒绝并发生成：${transactionLockPath}`,
      );
    }

    throw error;
  }

  return async () => {
    await rm(transactionLockPath, { force: true });
  };
}

function serializeManifest(entries) {
  const manifest = Object.fromEntries(entries);

  return `// 此文件由 scripts/atlas/generate-images.mjs 生成，请勿手工编辑。\n\nexport interface AtlasGeneratedProvidedMeshWatermark {\n  readonly applied: true;\n  readonly brand: "${WATERMARK_BRAND}";\n  readonly color: "#ffffff";\n  readonly opacity: 0.5;\n  readonly pattern: "tiled";\n  readonly provenance: "${VISIBLE_WATERMARK_PROVENANCE}";\n  readonly scheme: "${VISIBLE_WATERMARK_SCHEME}";\n}\n\nexport interface AtlasGeneratedPreservedWatermark {\n  readonly applied: false;\n  readonly brand: "${WATERMARK_BRAND}";\n  readonly reason: "source-identifier-preserved";\n  readonly scheme: "${PRESERVED_SOURCE_WATERMARK_SCHEME}";\n  readonly sourceIdentifier: "existing-mesh" | "existing-seal";\n}\n\nexport type AtlasGeneratedVisibleWatermark =\n  | AtlasGeneratedProvidedMeshWatermark\n  | AtlasGeneratedPreservedWatermark;\n\nexport interface AtlasGeneratedPublicWatermark {\n  readonly brand: "${ATLAS_DERIVATION_CONTRACT.publicVisibleWatermark.brand}";\n  readonly domain: "${ATLAS_DERIVATION_CONTRACT.publicVisibleWatermark.domain}";\n  readonly opacity: ${ATLAS_DERIVATION_CONTRACT.publicVisibleWatermark.opacity};\n  readonly position: "${ATLAS_DERIVATION_CONTRACT.publicVisibleWatermark.position}";\n  readonly scheme: "${ATLAS_DERIVATION_CONTRACT.publicVisibleWatermark.scheme}";\n}\n\nexport interface AtlasGeneratedImageAsset {\n  readonly src: string;\n  readonly width: number;\n  readonly height: number;\n  readonly byteSize: number;\n  readonly format: "webp";\n  readonly sha256: string;\n  readonly visibleWatermark: AtlasGeneratedVisibleWatermark;\n  readonly publicWatermark: AtlasGeneratedPublicWatermark;\n  readonly watermarkConfidence: number;\n}\n\nexport interface AtlasGeneratedWatermark {\n  readonly brand: "${WATERMARK_BRAND}";\n  readonly scheme: "${WATERMARK_SCHEME}";\n  readonly id: string;\n}\n\nexport interface AtlasGeneratedImagePair {\n  readonly thumbnail: AtlasGeneratedImageAsset;\n  readonly preview: AtlasGeneratedImageAsset;\n  readonly watermark: AtlasGeneratedWatermark;\n  readonly sourceRelativePath: string;\n  readonly sourceSha256: string;\n}\n\nexport const atlasImageEncodingContractFingerprint = ${JSON.stringify(ATLAS_ENCODING_CONTRACT_FINGERPRINT)} as const;\n\nexport const atlasImageAssetManifestVersion = ${ATLAS_ASSET_MANIFEST.version} as const;\n\nexport const atlasImageAssets = ${JSON.stringify(manifest, null, 2)} as const satisfies Readonly<Record<string, AtlasGeneratedImagePair>>;\n`;
}

async function publishGeneratedAssets(stagingRoot, manifestContent) {
  const transactionId = randomUUID();
  const previousAtlasRoot = path.join(
    publicImagesRoot,
    `.atlas-watermark-previous-${transactionId}`,
  );
  const nextManifestPath = path.join(
    path.dirname(manifestPath),
    `.${path.basename(manifestPath)}.${transactionId}.next`,
  );
  const previousManifestPath = path.join(
    path.dirname(manifestPath),
    `.${path.basename(manifestPath)}.${transactionId}.previous`,
  );
  let atlasBackedUp = false;
  let atlasPublished = false;
  let manifestBackedUp = false;
  let manifestPublished = false;

  await writeFile(nextManifestPath, manifestContent, "utf8");

  try {
    await rename(atlasRoot, previousAtlasRoot);
    atlasBackedUp = true;
    await rename(stagingRoot, atlasRoot);
    atlasPublished = true;
    await rename(manifestPath, previousManifestPath);
    manifestBackedUp = true;
    await rename(nextManifestPath, manifestPath);
    manifestPublished = true;
  } catch (publishError) {
    const rollbackErrors = [];
    const attemptRollback = async (operation) => {
      try {
        await operation();
      } catch (error) {
        rollbackErrors.push(error);
      }
    };

    if (manifestPublished) {
      await attemptRollback(() => rm(manifestPath, { force: true }));
    }
    if (manifestBackedUp) {
      await attemptRollback(() => rename(previousManifestPath, manifestPath));
    }
    if (atlasPublished) {
      await attemptRollback(() => rm(atlasRoot, { recursive: true, force: true }));
    }
    if (atlasBackedUp) {
      await attemptRollback(() => rename(previousAtlasRoot, atlasRoot));
    }

    if (rollbackErrors.length > 0) {
      throw new AggregateError(
        [publishError, ...rollbackErrors],
        "图谱资源发布失败，且自动回滚未完全成功。",
      );
    }

    throw publishError;
  } finally {
    await rm(nextManifestPath, { force: true });
  }

  await Promise.all([
    rm(previousAtlasRoot, { recursive: true, force: true }),
    rm(previousManifestPath, { force: true }),
  ]);
}

async function main() {
  const sourceArgument = readArgument("--source");
  const requestedAssetIds = readArguments("--asset");
  const duplicateRequestedIds = requestedAssetIds.filter(
    (assetId, index) => requestedAssetIds.indexOf(assetId) !== index,
  );
  const watermarkKeyPath = path.resolve(
    readArgument("--watermark-key-file") ??
      process.env.ATLAS_WATERMARK_KEY_FILE ??
      defaultWatermarkKeyPath,
  );

  if (!sourceArgument) {
    throw new Error(
      "缺少 --source。用法：node scripts/atlas/generate-images.mjs --source <只读源图目录> [--asset <稳定资产 ID>]",
    );
  }

  if (duplicateRequestedIds.length > 0) {
    throw new Error(
      `--asset 存在重复 ID：${[...new Set(duplicateRequestedIds)].join(", ")}`,
    );
  }

  requestedAssetIds.forEach(getAtlasAsset);

  const sourceRoot = path.resolve(sourceArgument);
  const watermarkKey = await loadWatermarkKey(watermarkKeyPath);
  const releaseTransactionLock = await acquirePublishTransactionLock();

  try {
  if (
    ATLAS_DERIVATION_CONTRACT.blindWatermarkScheme !== WATERMARK_SCHEME
  ) {
    throw new Error("派生编码契约与当前盲水印方案不一致。");
  }

  const [validated, previousGenerated] = await Promise.all([
    preflightVisibleWatermarkSources(sourceRoot),
    readGeneratedManifest(),
    validateAtlasContentLinks(),
  ]);
  const previousManifest = previousGenerated?.assets;
  const { descriptorById, sources } = validated;
  const requiredRegistryRecords = previousRegistryRecords(previousManifest);
  Object.keys(previousManifest).forEach(getAtlasAsset);
  const requestedAssetSet = new Set(requestedAssetIds);
  const previousContractCompatible =
    previousGenerated?.encodingContractFingerprint ===
      ATLAS_ENCODING_CONTRACT_FINGERPRINT &&
    previousGenerated?.manifestVersion === ATLAS_ASSET_MANIFEST.version;
  const explicitSelectionCoversLibrary =
    requestedAssetSet.size === ATLAS_ASSETS.length;

  if (
    requestedAssetIds.length > 0 &&
    !explicitSelectionCoversLibrary &&
    !previousContractCompatible
  ) {
    throw new Error(
      "既有公开资源的编码契约或清单版本已变化；部分 --asset 不能复用，请不带 --asset 全量生成，或显式覆盖清单全部资产。",
    );
  }

  const entries = [];
  let regeneratedAssets = 0;
  let reusedAssets = 0;
  const concurrency = 4;
  const stagingRoot = await mkdtemp(
    path.join(publicImagesRoot, ".atlas-watermark-build-"),
  );
  const stagingOutputRoots = Object.fromEntries(
    Object.entries(ATLAS_VARIANT_SPECS).map(([role, spec]) => [
      role,
      path.join(stagingRoot, spec.directory),
    ]),
  );

  try {
    for (let index = 0; index < sources.length; index += concurrency) {
      const batch = sources.slice(index, index + concurrency);
      const results = await Promise.all(
        batch.map(async (source) => {
          const previous = previousManifest[source.id];
          const regenerate =
            requestedAssetIds.length > 0
              ? requestedAssetSet.has(source.id)
              : !hasReusableMetadata(
                  source,
                  previous,
                  watermarkKey,
                  previousGenerated.encodingContractFingerprint,
                  previousGenerated.manifestVersion,
                );

          if (regenerate) {
            return {
              entry: await processImage(
                source,
                watermarkKey,
                stagingOutputRoots,
                descriptorById.get(source.id),
              ),
              regenerated: true,
            };
          }

          return {
            entry: await reuseImage(
              source,
              previous,
              watermarkKey,
              stagingOutputRoots,
              previousGenerated.encodingContractFingerprint,
              previousGenerated.manifestVersion,
            ),
            regenerated: false,
          };
        }),
      );

      for (const result of results) {
        entries.push(result.entry);
        regeneratedAssets += result.regenerated ? 1 : 0;
        reusedAssets += result.regenerated ? 0 : 1;
      }
    }

    await Promise.all(
      Object.values(stagingOutputRoots).map(async (outputRoot) => {
        await mkdir(outputRoot, { recursive: true });
        await writeFile(path.join(outputRoot, ".gitkeep"), "", "utf8");
      }),
    );
    await assertStagingInventory(stagingRoot, watermarkKey);
    // 先把完整暂存结果登记到追加式历史表，再发布公开文件。若后续发布失败，
    // 新记录作为未完成发布的审计痕迹保留，绝不回删；事务残留守卫会阻止静默重跑。
    await registerWatermarkAssets(
      watermarkRegistryPath,
      entries.map(([assetId, assets]) => ({
        assetId,
        fingerprint: assets.watermark.id,
        scheme: assets.watermark.scheme,
      })),
      { requiredRecords: requiredRegistryRecords },
    );
    await publishGeneratedAssets(stagingRoot, serializeManifest(entries));
  } finally {
    await rm(stagingRoot, { recursive: true, force: true });
  }
  console.log(
    `版本化资产清单：${ATLAS_ASSET_SUMMARY.assets} 张母版、${ATLAS_ASSET_SUMMARY.variants} 个公开变体。`,
  );
  console.log(
    `本次重新编码 ${regeneratedAssets} 张资产，验证并复用 ${reusedAssets} 张资产；公开变体统一叠加右下角版权标识。`,
  );
  console.log(
    `全库 ${ATLAS_ASSET_SUMMARY.variants} 个公开变体均验证 ${WATERMARK_SCHEME} 盲水印。`,
  );
  console.log(`资源清单：${path.relative(projectRoot, manifestPath)}`);
  } finally {
    await releaseTransactionLock();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
