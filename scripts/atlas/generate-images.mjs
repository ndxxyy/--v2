import {
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
  embedBlindWatermark,
  extractBlindWatermark,
  getWatermarkId,
  loadWatermarkKey,
  WATERMARK_BRAND,
  WATERMARK_SCHEME,
} from "./blind-watermark.mjs";
import { registerWatermarkAssets } from "./watermark-registry.mjs";
import {
  assertSourceVisibleIdentifierBaseline,
  assertVisibleWatermarkDescriptor,
  assertVisibleWatermarkInventory,
  getSourceVisibleWatermarkDescriptor,
  getVisibleWatermarkPolicy,
  PRESERVED_SOURCE_WATERMARK_SCHEME,
  VISIBLE_WATERMARK_SCHEME,
  VISIBLE_WATERMARK_PROVENANCE,
} from "./visible-watermark.mjs";

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
const visibleMasterManifestName = ".atlas-visible-masters.json";

function readArgument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

async function collectSourceImages(directory, relativeDirectory = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.posix.join(relativeDirectory, entry.name);
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectSourceImages(absolutePath, relativePath)));
      continue;
    }

    if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push({ absolutePath, relativePath });
    }
  }

  return files;
}

async function readVisibleMasterManifest(sourceRoot) {
  let source;

  try {
    source = await readFile(
      path.join(sourceRoot, visibleMasterManifestName),
      "utf8",
    );
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      throw new Error(
        "公开图必须从已审核的全分辨率明水印副本生成；缺少导入清单。",
      );
    }

    throw error;
  }

  const manifest = JSON.parse(source);

  if (
    !manifest ||
    typeof manifest !== "object" ||
    !Array.isArray(manifest.records) ||
    manifest.total !== manifest.records.length
  ) {
    throw new Error("全分辨率明水印导入清单结构无效。");
  }

  return manifest;
}

async function preflightVisibleWatermarkSources(sourceRoot, sources) {
  const records = sources.map((source) => ({
    assetId: source.relativePath.replace(/\.[^.]+$/, ""),
    source,
  }));
  const counts = assertVisibleWatermarkInventory(
    records.map((record) => record.assetId),
  );
  const masterManifest = await readVisibleMasterManifest(sourceRoot);
  const masterById = new Map(
    masterManifest.records.map((record) => [record.assetId, record]),
  );

  if (
    masterById.size !== records.length ||
    masterManifest.scheme !== VISIBLE_WATERMARK_SCHEME ||
    masterManifest.preservedScheme !== PRESERVED_SOURCE_WATERMARK_SCHEME
  ) {
    throw new Error("全分辨率明水印导入清单的数量或方案不一致。");
  }

  await Promise.all(
    records.map(async ({ assetId, source }) => {
      const contents = await readFile(source.absolutePath);
      const master = masterById.get(assetId);

      if (
        !master ||
        master.sourceRelativePath !== source.relativePath ||
        master.outputSha256 !==
          createHash("sha256").update(contents).digest("hex")
      ) {
        throw new Error(`全分辨率明水印副本与导入清单不一致：${assetId}`);
      }

      assertVisibleWatermarkDescriptor(
        master.visibleWatermark,
        { width: master.width, height: master.height },
        { assetId },
      );
      const policy = getVisibleWatermarkPolicy(assetId);

      if (!policy.applied) {
        assertSourceVisibleIdentifierBaseline(
          assetId,
          contents,
        );
      }
    }),
  );

  return {
    counts,
    descriptorById: new Map(
      records.map(({ assetId }) => [
        assetId,
        getSourceVisibleWatermarkDescriptor(assetId),
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

  const resized = await sharp(sourcePath)
    .rotate()
    .resize({
      width: dimensions.width,
      height: dimensions.height,
      fit: "inside",
      withoutEnlargement: true,
    })
    .toColourspace("srgb")
    .raw()
    .toBuffer({ resolveWithObject: true });
  const embedded = embedBlindWatermark({
    data: resized.data,
    info: resized.info,
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
    .webp({ quality, effort: 5, smartSubsample: true })
    .toFile(outputPath);

  const [metadata, fileStat, decodedOutput, encodedOutput] = await Promise.all([
    sharp(outputPath).metadata(),
    stat(outputPath),
    sharp(outputPath)
      .toColourspace("srgb")
      .raw()
      .toBuffer({ resolveWithObject: true }),
    readFile(outputPath),
  ]);

  if (!metadata.width || !metadata.height) {
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
    watermarkConfidence: detected.confidence,
  };
}

async function processImage(
  source,
  watermarkKey,
  outputRoots,
  visibleWatermark,
) {
  const relativeBase = source.relativePath.replace(/\.[^.]+$/, "");
  const outputRelativePath = `${relativeBase}.webp`;
  const thumbnailPath = path.join(outputRoots.thumbnail, outputRelativePath);
  const previewPath = path.join(outputRoots.preview, outputRelativePath);

  const [thumbnail, preview] = await Promise.all([
    renderVariant(
      source.absolutePath,
      thumbnailPath,
      { width: 960, height: 1280 },
      78,
      {
        assetId: relativeBase,
        role: "thumbnail",
        key: watermarkKey,
        visibleWatermark,
      },
    ),
    renderVariant(
      source.absolutePath,
      previewPath,
      { width: 1440, height: 1440 },
      88,
      {
        assetId: relativeBase,
        role: "preview",
        key: watermarkKey,
        visibleWatermark,
      },
    ),
  ]);

  return [
    relativeBase,
    {
      thumbnail: {
        src: `/images/atlas/thumbnails/${outputRelativePath}`,
        ...thumbnail,
        format: "webp",
      },
      preview: {
        src: `/images/atlas/previews/${outputRelativePath}`,
        ...preview,
        format: "webp",
      },
      watermark: {
        brand: WATERMARK_BRAND,
        scheme: WATERMARK_SCHEME,
        id: getWatermarkId(relativeBase, watermarkKey),
      },
      sourceRelativePath: source.relativePath,
    },
  ];
}

export function serializeLegacyManifest(entries) {
  const manifest = Object.fromEntries(entries);

  return `// 此文件由 scripts/atlas/generate-images.mjs 生成，请勿手工编辑。\n\nexport interface AtlasGeneratedMeshWatermark {\n  readonly angle: -26;\n  readonly applied: true;\n  readonly assetSha256: string;\n  readonly brand: \"${WATERMARK_BRAND}\";\n  readonly changedPixelRatio: number;\n  readonly color: \"#ffffff\";\n  readonly columnSpacingRatio: 0.44;\n  readonly darkOverlapRatio: number;\n  readonly encodedMaskMeanAbsoluteChange: number;\n  readonly encodedOutsideMeanAbsoluteChange: number;\n  readonly markCount: number;\n  readonly meanAbsoluteChange: number;\n  readonly meshCoverageRatio: number;\n  readonly nonWhiteIntersectionRatio: number;\n  readonly opacity: 0.5;\n  readonly phaseXIndex: number;\n  readonly phaseYIndex: number;\n  readonly purpleOverlapRatio: number;\n  readonly rowSpacingRatio: 0.24;\n  readonly rowStaggerRatio: 0.5;\n  readonly scheme: \"${VISIBLE_WATERMARK_SCHEME}\";\n  readonly wordmarkWidthRatio: 0.22;\n}\n\nexport interface AtlasGeneratedPreservedWatermark {\n  readonly applied: false;\n  readonly brand: \"${WATERMARK_BRAND}\";\n  readonly reason: \"source-identifier-preserved\";\n  readonly scheme: \"${PRESERVED_SOURCE_WATERMARK_SCHEME}\";\n  readonly sourceIdentifier: \"existing-mesh\" | \"existing-seal\";\n}\n\nexport type AtlasGeneratedVisibleWatermark =\n  | AtlasGeneratedMeshWatermark\n  | AtlasGeneratedPreservedWatermark;\n\nexport interface AtlasGeneratedImageAsset {\n  readonly src: string;\n  readonly width: number;\n  readonly height: number;\n  readonly byteSize: number;\n  readonly format: \"webp\";\n  readonly sha256: string;\n  readonly visibleWatermark: AtlasGeneratedVisibleWatermark;\n  readonly watermarkConfidence: number;\n}\n\nexport interface AtlasGeneratedWatermark {\n  readonly brand: \"${WATERMARK_BRAND}\";\n  readonly scheme: \"${WATERMARK_SCHEME}\";\n  readonly id: string;\n}\n\nexport interface AtlasGeneratedImagePair {\n  readonly thumbnail: AtlasGeneratedImageAsset;\n  readonly preview: AtlasGeneratedImageAsset;\n  readonly watermark: AtlasGeneratedWatermark;\n  readonly sourceRelativePath: string;\n}\n\nexport const atlasImageAssets = ${JSON.stringify(manifest, null, 2)} as const satisfies Readonly<Record<string, AtlasGeneratedImagePair>>;\n`;
}

function serializeManifest(entries) {
  const manifest = Object.fromEntries(entries);

  return `// 此文件由 scripts/atlas/generate-images.mjs 生成，请勿手工编辑。\n\nexport interface AtlasGeneratedProvidedMeshWatermark {\n  readonly applied: true;\n  readonly brand: "${WATERMARK_BRAND}";\n  readonly color: "#ffffff";\n  readonly opacity: 0.5;\n  readonly pattern: "tiled";\n  readonly provenance: "${VISIBLE_WATERMARK_PROVENANCE}";\n  readonly scheme: "${VISIBLE_WATERMARK_SCHEME}";\n}\n\nexport interface AtlasGeneratedPreservedWatermark {\n  readonly applied: false;\n  readonly brand: "${WATERMARK_BRAND}";\n  readonly reason: "source-identifier-preserved";\n  readonly scheme: "${PRESERVED_SOURCE_WATERMARK_SCHEME}";\n  readonly sourceIdentifier: "existing-mesh" | "existing-seal";\n}\n\nexport type AtlasGeneratedVisibleWatermark =\n  | AtlasGeneratedProvidedMeshWatermark\n  | AtlasGeneratedPreservedWatermark;\n\nexport interface AtlasGeneratedImageAsset {\n  readonly src: string;\n  readonly width: number;\n  readonly height: number;\n  readonly byteSize: number;\n  readonly format: "webp";\n  readonly sha256: string;\n  readonly visibleWatermark: AtlasGeneratedVisibleWatermark;\n  readonly watermarkConfidence: number;\n}\n\nexport interface AtlasGeneratedWatermark {\n  readonly brand: "${WATERMARK_BRAND}";\n  readonly scheme: "${WATERMARK_SCHEME}";\n  readonly id: string;\n}\n\nexport interface AtlasGeneratedImagePair {\n  readonly thumbnail: AtlasGeneratedImageAsset;\n  readonly preview: AtlasGeneratedImageAsset;\n  readonly watermark: AtlasGeneratedWatermark;\n  readonly sourceRelativePath: string;\n}\n\nexport const atlasImageAssets = ${JSON.stringify(manifest, null, 2)} as const satisfies Readonly<Record<string, AtlasGeneratedImagePair>>;\n`;
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
  const watermarkKeyPath = path.resolve(
    readArgument("--watermark-key-file") ??
      process.env.ATLAS_WATERMARK_KEY_FILE ??
      defaultWatermarkKeyPath,
  );

  if (!sourceArgument) {
    throw new Error(
      "缺少 --source。用法：node scripts/atlas/generate-images.mjs --source <只读源图目录>",
    );
  }

  const sourceRoot = path.resolve(sourceArgument);
  const watermarkKey = await loadWatermarkKey(watermarkKeyPath);
  const sources = (await collectSourceImages(sourceRoot)).sort((left, right) =>
    left.relativePath.localeCompare(right.relativePath, "en"),
  );

  if (sources.length === 0) {
    throw new Error(`源目录没有可处理的 JPG/PNG：${sourceRoot}`);
  }

  const { counts: visibleCounts, descriptorById } =
    await preflightVisibleWatermarkSources(sourceRoot, sources);

  const entries = [];
  const concurrency = 4;
  const stagingRoot = await mkdtemp(
    path.join(publicImagesRoot, ".atlas-watermark-build-"),
  );
  const stagingOutputRoots = {
    thumbnail: path.join(stagingRoot, "thumbnails"),
    preview: path.join(stagingRoot, "previews"),
  };

  try {
    for (let index = 0; index < sources.length; index += concurrency) {
      const batch = sources.slice(index, index + concurrency);
      entries.push(
        ...(await Promise.all(
          batch.map((source) =>
            processImage(
              source,
              watermarkKey,
              stagingOutputRoots,
              descriptorById.get(
                source.relativePath.replace(/\.[^.]+$/, ""),
              ),
            ),
          ),
        )),
      );
    }

    await Promise.all([
      writeFile(path.join(stagingOutputRoots.thumbnail, ".gitkeep"), "", "utf8"),
      writeFile(path.join(stagingOutputRoots.preview, ".gitkeep"), "", "utf8"),
    ]);
    await registerWatermarkAssets(
      watermarkRegistryPath,
      entries.map(([assetId, assets]) => ({
        assetId,
        fingerprint: assets.watermark.id,
        scheme: assets.watermark.scheme,
      })),
    );
    await publishGeneratedAssets(stagingRoot, serializeManifest(entries));
  } finally {
    await rm(stagingRoot, { recursive: true, force: true });
  }
  console.log(
    `已从用户提供的 ${visibleCounts.meridian} 张经络水印原图生成 ${visibleCounts.meridian * 2} 个公开变体，未叠加第二层明水印。`,
  );
  console.log(
    `${visibleCounts.preserved} 张本草/九针图保留源图已有标识（${visibleCounts.preserved * 2} 个公开变体），未叠加新明水印。`,
  );
  console.log(`全部 ${entries.length * 2} 个公开变体均写入 ${WATERMARK_SCHEME} 盲水印。`);
  console.log(`资源清单：${path.relative(projectRoot, manifestPath)}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
