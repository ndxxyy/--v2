import { createHash, randomUUID } from "node:crypto";
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
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

import {
  assertSourceVisibleIdentifierBaseline,
  assertVisibleWatermarkInventory,
  getSourceVisibleWatermarkDescriptor,
  getVisibleWatermarkPolicy,
  PRESERVED_SOURCE_WATERMARK_SCHEME,
  VISIBLE_WATERMARK_SCHEME,
} from "./visible-watermark.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "../..");
const defaultOutputRoot = path.join(
  projectRoot,
  "content-assets/masters/works-watermarked",
);
const manifestName = ".atlas-visible-masters.json";
const MAXIMUM_CONTENT_MSE = 10;

const MERIDIAN_PREFIXES = Object.freeze([
  ["足太阳膀胱经", "bladder-meridian"],
  ["手阳明大肠经", "large-intestine-meridian"],
  ["手太阳小肠经", "small-intestine-meridian"],
  ["手厥阴心包经", "pericardium-meridian"],
  ["足少阳胆经", "gallbladder-meridian"],
  ["足少阴肾经", "kidney-meridian"],
  ["足太阴脾经", "spleen-meridian"],
  ["足阳明胃经", "stomach-meridian"],
  ["足厥阴肝经", "liver-meridian"],
  ["手少阳三焦经", "sanjiao-meridian"],
  ["手少阴心经", "heart-meridian"],
  ["手太阴肺经", "lung-meridian"],
  ["任脉", "ren-meridian"],
  ["督脉", "du-meridian"],
]);

function readArgument(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

async function collectImages(directory, relativeDirectory = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.posix.join(relativeDirectory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectImages(absolutePath, relativePath)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push({ absolutePath, relativePath });
    }
  }

  return files;
}

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function mapIncomingFilename(filename) {
  const stem = filename.replace(/\.jpe?g$/i, "");
  const prefixEntry = MERIDIAN_PREFIXES.find(([prefix]) =>
    stem.startsWith(prefix),
  );

  if (!prefixEntry) {
    throw new Error(`无法识别经络文件名：${filename}`);
  }

  const [prefix, directory] = prefixEntry;
  const suffix = stem.slice(prefix.length);
  let basename;
  let match;

  if ((match = /^局部解剖穴位(\d+)$/.exec(suffix))) {
    basename = `local-anatomy-${match[1]}`;
  } else if (directory === "lung-meridian" && suffix === "局部穴位1") {
    basename = "local-points-shoulder";
  } else if (directory === "lung-meridian" && suffix === "局部穴位2") {
    basename = "local-points-forearm";
  } else if ((match = /^局部穴位(\d+)(?:\.(\d+))?$/.exec(suffix))) {
    const number = match[2] ? `${match[1]}-${match[2]}` : match[1];
    basename = `local-points-${number}`;
  } else if ((match = /^局部穴(\d+)$/.exec(suffix))) {
    basename = `local-points-${match[1]}`;
  } else if (directory === "heart-meridian" && suffix === "内部经络循行") {
    basename = "internal-detail";
  } else if (
    directory === "liver-meridian" &&
    suffix === "体表内络循行"
  ) {
    basename = "surface-internal-route";
  } else if (
    directory === "gallbladder-meridian" &&
    suffix === "体体外经络循行"
  ) {
    basename = "external-route-alt";
  } else if (directory === "kidney-meridian" && suffix === "体表经络循行") {
    basename = "surface-route";
  } else if (
    (directory === "ren-meridian" || directory === "du-meridian") &&
    suffix === "体表经络循行"
  ) {
    basename = "external-route";
  } else if (suffix === "体内经络循行") {
    basename = "internal-route";
  } else if (
    suffix === "体外经络循行" ||
    suffix === "外部经络循行"
  ) {
    basename = "external-route";
  } else {
    throw new Error(`无法映射经络文件名：${filename}`);
  }

  return `${directory}/${basename}.jpg`;
}

async function perceptualFingerprint(imagePath) {
  return sharp(imagePath)
    .rotate()
    .resize(60, 80, { fit: "fill" })
    .greyscale()
    .blur(1.5)
    .raw()
    .toBuffer();
}

function meanSquaredError(left, right) {
  if (left.length !== right.length) {
    return Number.POSITIVE_INFINITY;
  }

  let sum = 0;

  for (let index = 0; index < left.length; index += 1) {
    const difference = left[index] - right[index];
    sum += difference * difference;
  }

  return sum / left.length;
}

async function validateIncomingMatch(incoming, clean) {
  const [incomingMetadata, cleanMetadata, incomingFingerprint, cleanFingerprint] =
    await Promise.all([
      sharp(incoming.absolutePath).metadata(),
      sharp(clean.absolutePath).metadata(),
      perceptualFingerprint(incoming.absolutePath),
      perceptualFingerprint(clean.absolutePath),
    ]);
  const contentMse = meanSquaredError(incomingFingerprint, cleanFingerprint);

  if (
    incomingMetadata.width !== cleanMetadata.width ||
    incomingMetadata.height !== cleanMetadata.height ||
    contentMse > MAXIMUM_CONTENT_MSE
  ) {
    throw new Error(
      `提供图与原经络图不匹配：${incoming.relativePath} -> ${clean.relativePath} (MSE=${contentMse.toFixed(3)})`,
    );
  }

  return Number(contentMse.toFixed(6));
}

async function copyAndRecord({
  assetId,
  contentMse,
  outputRoot,
  source,
  sourceKind,
  sourceOriginalName,
  sourceRelativePath,
}) {
  const outputPath = path.join(outputRoot, sourceRelativePath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await copyFile(source.absolutePath, outputPath);

  const [sourceContents, outputContents, metadata, outputStat] =
    await Promise.all([
      readFile(source.absolutePath),
      readFile(outputPath),
      sharp(outputPath).metadata(),
      stat(outputPath),
    ]);
  const sourceHash = sha256(sourceContents);
  const outputHash = sha256(outputContents);

  if (
    sourceHash !== outputHash ||
    sourceContents.length !== outputStat.size ||
    !metadata.width ||
    !metadata.height
  ) {
    throw new Error(`全分辨率导入不是逐字节复制：${sourceRelativePath}`);
  }

  return {
    assetId,
    byteSize: outputStat.size,
    contentMse,
    height: metadata.height,
    metadataPreserved: "byte-for-byte",
    outputSha256: outputHash,
    sourceKind,
    sourceOriginalName,
    sourceRelativePath,
    sourceSha256: sourceHash,
    visibleWatermark: getSourceVisibleWatermarkDescriptor(assetId),
    width: metadata.width,
  };
}

async function publish(stagingRoot, outputRoot) {
  const previousRoot = path.join(
    path.dirname(outputRoot),
    `.${path.basename(outputRoot)}.previous-${randomUUID()}`,
  );
  let previousExists = false;
  let published = false;

  try {
    try {
      await rename(outputRoot, previousRoot);
      previousExists = true;
    } catch (error) {
      if (
        !error ||
        typeof error !== "object" ||
        !("code" in error) ||
        error.code !== "ENOENT"
      ) {
        throw error;
      }
    }

    await rename(stagingRoot, outputRoot);
    published = true;
  } catch (publishError) {
    if (published) {
      await rm(outputRoot, { recursive: true, force: true });
    }
    if (previousExists) {
      await rename(previousRoot, outputRoot);
    }
    throw publishError;
  }

  if (previousExists) {
    await rm(previousRoot, { recursive: true, force: true });
  }
}

async function main() {
  const incomingArgument = readArgument("--incoming");
  const cleanSourceArgument = readArgument("--clean-source");

  if (!incomingArgument || !cleanSourceArgument) {
    throw new Error(
      "用法：node scripts/atlas/generate-visible-masters.mjs --incoming <用户水印经络图目录> --clean-source <旧站干净源图目录>",
    );
  }

  const incomingRoot = path.resolve(incomingArgument);
  const cleanSourceRoot = path.resolve(cleanSourceArgument);
  const outputRoot = path.resolve(
    readArgument("--output") ?? defaultOutputRoot,
  );
  const incoming = (await collectImages(incomingRoot)).sort((left, right) =>
    left.relativePath.localeCompare(right.relativePath, "zh-Hans-CN"),
  );
  const cleanSources = (await collectImages(cleanSourceRoot)).sort(
    (left, right) => left.relativePath.localeCompare(right.relativePath, "en"),
  );
  const cleanByRelativePath = new Map(
    cleanSources.map((source) => [source.relativePath, source]),
  );
  const cleanAssetIds = cleanSources.map((source) =>
    source.relativePath.replace(/\.[^.]+$/, ""),
  );
  const counts = assertVisibleWatermarkInventory(cleanAssetIds);
  const mappedIncoming = incoming.map((source) => ({
    source,
    targetRelativePath: mapIncomingFilename(path.basename(source.relativePath)),
  }));
  const mappedPaths = mappedIncoming.map((entry) => entry.targetRelativePath);
  const expectedMeridianPaths = cleanSources
    .filter((source) =>
      getVisibleWatermarkPolicy(
        source.relativePath.replace(/\.[^.]+$/, ""),
      ).applied,
    )
    .map((source) => source.relativePath);
  const missing = expectedMeridianPaths.filter(
    (relativePath) => !mappedPaths.includes(relativePath),
  );
  const unexpected = mappedPaths.filter(
    (relativePath) => !expectedMeridianPaths.includes(relativePath),
  );

  if (
    incoming.length !== counts.meridian ||
    new Set(mappedPaths).size !== mappedPaths.length ||
    missing.length > 0 ||
    unexpected.length > 0
  ) {
    throw new Error(
      `用户经络图映射不完整：收到 ${incoming.length}/${counts.meridian}，缺失 ${missing.join(", ") || "无"}，多余 ${unexpected.join(", ") || "无"}。`,
    );
  }

  const validatedIncoming = await Promise.all(
    mappedIncoming.map(async (entry) => {
      const clean = cleanByRelativePath.get(entry.targetRelativePath);

      if (!clean) {
        throw new Error(`找不到对应的干净经络源图：${entry.targetRelativePath}`);
      }

      return {
        ...entry,
        contentMse: await validateIncomingMatch(entry.source, clean),
      };
    }),
  );

  const preservedSources = cleanSources.filter((source) => {
    const assetId = source.relativePath.replace(/\.[^.]+$/, "");
    const policy = getVisibleWatermarkPolicy(assetId);

    if (!policy.applied) {
      return true;
    }

    return false;
  });

  await Promise.all(
    preservedSources.map(async (source) => {
      const assetId = source.relativePath.replace(/\.[^.]+$/, "");
      assertSourceVisibleIdentifierBaseline(
        assetId,
        await readFile(source.absolutePath),
      );
    }),
  );

  await mkdir(path.dirname(outputRoot), { recursive: true });
  const stagingRoot = await mkdtemp(
    path.join(path.dirname(outputRoot), ".works-watermarked-import-"),
  );
  const records = [];

  try {
    for (let index = 0; index < validatedIncoming.length; index += 4) {
      records.push(
        ...(await Promise.all(
          validatedIncoming.slice(index, index + 4).map((entry) => {
            const assetId = entry.targetRelativePath.replace(/\.[^.]+$/, "");

            return copyAndRecord({
              assetId,
              contentMse: entry.contentMse,
              outputRoot: stagingRoot,
              source: entry.source,
              sourceKind: "user-provided-watermarked",
              sourceOriginalName: path.basename(entry.source.relativePath),
              sourceRelativePath: entry.targetRelativePath,
            });
          }),
        )),
      );
    }

    for (let index = 0; index < preservedSources.length; index += 4) {
      records.push(
        ...(await Promise.all(
          preservedSources.slice(index, index + 4).map((source) => {
            const assetId = source.relativePath.replace(/\.[^.]+$/, "");

            return copyAndRecord({
              assetId,
              contentMse: null,
              outputRoot: stagingRoot,
              source,
              sourceKind: "clean-source-preserved",
              sourceOriginalName: null,
              sourceRelativePath: source.relativePath,
            });
          }),
        )),
      );
    }

    records.sort((left, right) => left.assetId.localeCompare(right.assetId, "en"));

    await writeFile(
      path.join(stagingRoot, manifestName),
      `${JSON.stringify(
        {
          cleanSourceRoot,
          counts,
          generatedAt: new Date().toISOString(),
          incomingRoot,
          preservedScheme: PRESERVED_SOURCE_WATERMARK_SCHEME,
          records,
          scheme: VISIBLE_WATERMARK_SCHEME,
          total: records.length,
        },
        null,
        2,
      )}\n`,
      { encoding: "utf8", mode: 0o600 },
    );
    await publish(stagingRoot, outputRoot);
  } finally {
    await rm(stagingRoot, { recursive: true, force: true });
  }

  console.log(
    `已逐字节导入 ${counts.meridian} 张用户提供的经络水印原图。`,
  );
  console.log(
    `已从干净源图恢复 ${counts.preserved} 张本草/九针图，保留其原有标识。`,
  );
  console.log(`全分辨率副本：${outputRoot}`);
  console.log("用户来图与旧站干净源图均未被修改。");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
