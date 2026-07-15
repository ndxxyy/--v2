import { createHash, randomUUID } from "node:crypto";
import {
  copyFile,
  lstat,
  mkdir,
  mkdtemp,
  readFile,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

import {
  ATLAS_ASSETS,
  ATLAS_ASSET_SUMMARY,
  getAtlasAsset,
  getAtlasVisibleWatermarkPolicy,
} from "./asset-manifest.mjs";
import {
  collectRelativeFiles,
  PRIVATE_MASTER_MANIFEST_NAME,
  validateMasterLibrary,
} from "./master-library.mjs";
import {
  assertSourceVisibleIdentifierBaseline,
  assertVisibleWatermarkDescriptor,
  getSourceVisibleWatermarkDescriptor,
  PRESERVED_SOURCE_WATERMARK_SCHEME,
  VISIBLE_WATERMARK_SCHEME,
} from "./visible-watermark.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "../..");
const publicRoot = path.join(projectRoot, "public");
const protectedMastersRoot = path.join(
  projectRoot,
  "content-assets/masters",
);
const defaultOutputRoot = path.join(
  projectRoot,
  "content-assets/masters/works-watermarked",
);
const MAXIMUM_CONTENT_MSE = 10;
const USER_WATERMARKED_SOURCE_TYPE = "user-provided-watermarked";

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

function assignSingleOption(options, key, value, optionName) {
  if (options[key] !== undefined) {
    throw new Error(`参数不能重复：${optionName}`);
  }

  options[key] = value;
}

function parseArguments(argv) {
  const options = { assetValues: [] };

  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index];
    const value = argv[index + 1];

    if (!option.startsWith("--")) {
      throw new Error(`未知参数：${option}`);
    }
    if (!value || value.startsWith("--")) {
      throw new Error(`参数缺少值：${option}`);
    }

    index += 1;

    if (option === "--asset") {
      options.assetValues.push(value);
    } else if (option === "--incoming") {
      assignSingleOption(options, "incoming", value, option);
    } else if (option === "--incoming-file") {
      assignSingleOption(options, "incomingFile", value, option);
    } else if (option === "--clean-source") {
      assignSingleOption(options, "cleanSource", value, option);
    } else if (option === "--output") {
      assignSingleOption(options, "output", value, option);
    } else {
      throw new Error(`未知参数：${option}`);
    }
  }

  const assetIds = options.assetValues.flatMap((value) =>
    value.split(",").map((assetId) => assetId.trim()),
  );

  if (assetIds.some((assetId) => assetId === "")) {
    throw new Error("--asset 不能包含空资产 ID。");
  }

  const duplicateAssetIds = assetIds.filter(
    (assetId, index) => assetIds.indexOf(assetId) !== index,
  );

  if (duplicateAssetIds.length > 0) {
    throw new Error(
      `--asset 存在重复资产 ID：${[...new Set(duplicateAssetIds)].join(", ")}`,
    );
  }

  return { ...options, assetIds };
}

function isPathWithin(root, candidate) {
  const relativePath = path.relative(root, candidate);

  return (
    relativePath === "" ||
    (!relativePath.startsWith(`..${path.sep}`) &&
      relativePath !== ".." &&
      !path.isAbsolute(relativePath))
  );
}

function assertNoPathOverlap(left, right, label) {
  if (isPathWithin(left, right) || isPathWithin(right, left)) {
    throw new Error(`路径冲突：${label}（${left} / ${right}）`);
  }
}

function assertSafeOutputRoot(outputRoot) {
  const filesystemRoot = path.parse(outputRoot).root;
  const insideProject = isPathWithin(projectRoot, outputRoot);
  const insideProtectedMasters = isPathWithin(
    protectedMastersRoot,
    outputRoot,
  );

  if (
    outputRoot === filesystemRoot ||
    isPathWithin(outputRoot, projectRoot) ||
    (insideProject &&
      (!insideProtectedMasters || outputRoot === protectedMastersRoot))
  ) {
    throw new Error(`拒绝不安全的母版输出目录：${outputRoot}`);
  }
}

function assertControlledIncomingPath(incomingPath) {
  if (
    isPathWithin(publicRoot, incomingPath) ||
    isPathWithin(incomingPath, publicRoot)
  ) {
    throw new Error(`受控来图不得位于 public 或包含 public：${incomingPath}`);
  }
}

function assertApprovedAsset(asset) {
  const policy = getAtlasVisibleWatermarkPolicy(asset.id);

  if (
    asset.publicReleaseStatus !== "approved" ||
    asset.sourceReviewStatus !== "approved" ||
    asset.review?.status !== "approved" ||
    policy.reviewStatus !== "approved"
  ) {
    throw new Error(`资产或明水印策略尚未审核通过：${asset.id}`);
  }

  return policy;
}

function expectedLibraryCounts() {
  return {
    assets: ATLAS_ASSET_SUMMARY.assets,
    variants: ATLAS_ASSET_SUMMARY.variants,
    byCategory: { ...ATLAS_ASSET_SUMMARY.byCategory },
    bySourceType: { ...ATLAS_ASSET_SUMMARY.bySourceType },
    byVisibleWatermarkPolicy: {
      ...ATLAS_ASSET_SUMMARY.byVisibleWatermarkPolicy,
    },
    visibleWatermarkAssets: {
      ...ATLAS_ASSET_SUMMARY.visibleWatermarkAssets,
    },
    visibleWatermarkVariants: {
      ...ATLAS_ASSET_SUMMARY.visibleWatermarkVariants,
    },
  };
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
  } else if (directory === "liver-meridian" && suffix === "体表内络循行") {
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
  } else if (suffix === "体外经络循行" || suffix === "外部经络循行") {
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

async function assertRegularNonSymlinkFile(filePath, label) {
  const fileStat = await lstat(filePath);

  if (fileStat.isSymbolicLink() || !fileStat.isFile()) {
    throw new Error(`拒绝符号链接或非普通文件：${label}（${filePath}）`);
  }
}

async function collectImageFiles(directory) {
  const files = await collectRelativeFiles(directory);
  const unexpected = files.filter(
    (file) => !/\.(?:jpe?g|png)$/i.test(file.relativePath),
  );

  if (unexpected.length > 0) {
    throw new Error(
      `受控来图目录包含未登记的非图片文件：${unexpected
        .slice(0, 10)
        .map((file) => file.relativePath)
        .join(", ")}`,
    );
  }

  return files;
}

function assertExactRelativePaths(files, assets, label) {
  const actualPaths = files.map((file) => file.relativePath);
  const expectedPaths = assets.map((asset) => asset.relativePath);
  const actual = new Set(actualPaths);
  const expected = new Set(expectedPaths);
  const duplicates = actualPaths.filter(
    (relativePath, index) => actualPaths.indexOf(relativePath) !== index,
  );
  const missing = expectedPaths.filter((relativePath) => !actual.has(relativePath));
  const unexpected = actualPaths.filter((relativePath) => !expected.has(relativePath));

  if (duplicates.length > 0 || missing.length > 0 || unexpected.length > 0) {
    throw new Error(
      [
        `${label}与版本化资产清单不一致。`,
        duplicates.length > 0
          ? `重复：${[...new Set(duplicates)].slice(0, 10).join(", ")}`
          : null,
        missing.length > 0 ? `缺图：${missing.slice(0, 10).join(", ")}` : null,
        unexpected.length > 0
          ? `未知：${unexpected.slice(0, 10).join(", ")}`
          : null,
      ]
        .filter(Boolean)
        .join("\n"),
    );
  }
}

async function validateSourceBaseline(asset, source, label) {
  const policy = assertApprovedAsset(asset);
  await assertRegularNonSymlinkFile(source.absolutePath, label);
  const [contents, metadata] = await Promise.all([
    readFile(source.absolutePath),
    sharp(source.absolutePath).metadata(),
  ]);
  const actualHash = sha256(contents);

  if (actualHash !== asset.sourceSha256) {
    throw new Error(
      `来图 SHA-256 与清单基线不一致：${asset.id}（${actualHash}）`,
    );
  }
  if (!metadata.width || !metadata.height) {
    throw new Error(`来图不是可识别的完整图片：${asset.id}`);
  }

  if (!policy.descriptor.applied) {
    assertSourceVisibleIdentifierBaseline(asset.id, contents);
  }

  return { metadata, sha256: actualHash };
}

async function copyAndRecord({
  asset,
  contentMse,
  outputRoot,
  source,
  sourceOriginalName,
}) {
  const outputPath = path.join(outputRoot, asset.relativePath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await copyFile(source.absolutePath, outputPath);

  const [sourceFileStat, sourceContents, outputContents, metadata, outputStat] =
    await Promise.all([
      lstat(source.absolutePath),
      readFile(source.absolutePath),
      readFile(outputPath),
      sharp(outputPath).metadata(),
      stat(outputPath),
    ]);
  const sourceHash = sha256(sourceContents);
  const outputHash = sha256(outputContents);

  if (
    sourceFileStat.isSymbolicLink() ||
    !sourceFileStat.isFile() ||
    sourceHash !== asset.sourceSha256 ||
    outputHash !== asset.sourceSha256 ||
    sourceContents.length !== outputStat.size ||
    !metadata.width ||
    !metadata.height
  ) {
    throw new Error(`全分辨率导入不是清单基线的逐字节复制：${asset.id}`);
  }

  if (!getAtlasVisibleWatermarkPolicy(asset.id).descriptor.applied) {
    assertSourceVisibleIdentifierBaseline(asset.id, sourceContents);
  }

  return {
    assetId: asset.id,
    byteSize: outputStat.size,
    contentMse,
    height: metadata.height,
    metadataPreserved: "byte-for-byte",
    outputSha256: outputHash,
    sourceKind: asset.sourceType,
    sourceOriginalName,
    sourceRelativePath: asset.relativePath,
    sourceSha256: sourceHash,
    visibleWatermark: getSourceVisibleWatermarkDescriptor(asset.id),
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

function parsePrivateManifest(source, label) {
  let privateManifest;

  try {
    privateManifest = JSON.parse(source);
  } catch {
    throw new Error(`私有导入证据清单不是有效 JSON：${label}`);
  }

  if (
    !privateManifest ||
    typeof privateManifest !== "object" ||
    !Array.isArray(privateManifest.records) ||
    privateManifest.total !== privateManifest.records.length ||
    !privateManifest.counts ||
    typeof privateManifest.counts !== "object"
  ) {
    throw new Error(`私有导入证据清单结构无效：${label}`);
  }

  if (
    ("assets" in privateManifest.counts &&
      privateManifest.counts.assets !== privateManifest.total) ||
    ("total" in privateManifest.counts &&
      privateManifest.counts.total !== privateManifest.total)
  ) {
    throw new Error(`私有导入证据清单历史计数无效：${label}`);
  }

  return privateManifest;
}

function indexPrivateRecords(privateManifest) {
  const recordById = new Map();
  const recordPaths = new Set();

  for (const record of privateManifest.records) {
    if (
      !record ||
      typeof record !== "object" ||
      typeof record.assetId !== "string" ||
      typeof record.sourceRelativePath !== "string"
    ) {
      throw new Error("私有导入证据包含无效记录。");
    }

    const asset = getAtlasAsset(record.assetId);

    if (
      recordById.has(record.assetId) ||
      recordPaths.has(record.sourceRelativePath)
    ) {
      throw new Error(`私有导入证据包含重复资产或路径：${record.assetId}`);
    }
    if (record.sourceRelativePath !== asset.relativePath) {
      throw new Error(`私有导入证据路径与清单冲突：${record.assetId}`);
    }

    recordById.set(record.assetId, record);
    recordPaths.add(record.sourceRelativePath);
  }

  return recordById;
}

async function validateExistingRecord(asset, file, record) {
  const policy = assertApprovedAsset(asset);
  await assertRegularNonSymlinkFile(file.absolutePath, asset.id);
  const [contents, fileStat, metadata] = await Promise.all([
    readFile(file.absolutePath),
    stat(file.absolutePath),
    sharp(file.absolutePath).metadata(),
  ]);
  const actualHash = sha256(contents);

  if (
    !record ||
    record.assetId !== asset.id ||
    record.sourceRelativePath !== asset.relativePath ||
    record.sourceKind !== asset.sourceType ||
    record.sourceSha256 !== asset.sourceSha256 ||
    record.outputSha256 !== asset.sourceSha256 ||
    record.metadataPreserved !== "byte-for-byte" ||
    actualHash !== asset.sourceSha256 ||
    record.byteSize !== fileStat.size ||
    record.width !== metadata.width ||
    record.height !== metadata.height ||
    (record.contentMse !== null &&
      (typeof record.contentMse !== "number" ||
        !Number.isFinite(record.contentMse) ||
        record.contentMse < 0)) ||
    (record.sourceOriginalName !== null &&
      (typeof record.sourceOriginalName !== "string" ||
        record.sourceOriginalName === ""))
  ) {
    throw new Error(`未选中母版与清单或私有证据冲突：${asset.id}`);
  }

  assertVisibleWatermarkDescriptor(
    record.visibleWatermark,
    { width: metadata.width, height: metadata.height },
    { assetId: asset.id },
  );

  if (!policy.descriptor.applied) {
    assertSourceVisibleIdentifierBaseline(asset.id, contents);
  }

  return { contents, record };
}

async function readExistingLibrary(outputRoot, selectedAssetIds) {
  let files;

  try {
    files = await collectRelativeFiles(outputRoot);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      throw new Error(`小批次导入需要现有母版整库：${outputRoot}`);
    }

    throw error;
  }

  const evidenceFiles = files.filter(
    (file) => file.relativePath === PRIVATE_MASTER_MANIFEST_NAME,
  );
  const masterFiles = files.filter(
    (file) => file.relativePath !== PRIVATE_MASTER_MANIFEST_NAME,
  );

  if (evidenceFiles.length !== 1) {
    throw new Error("现有母版整库必须且只能包含一份私有导入证据清单。");
  }

  const privateManifest = parsePrivateManifest(
    await readFile(evidenceFiles[0].absolutePath, "utf8"),
    evidenceFiles[0].absolutePath,
  );
  const recordById = indexPrivateRecords(privateManifest);
  const assetByPath = new Map(
    ATLAS_ASSETS.map((asset) => [asset.relativePath, asset]),
  );
  const fileByPath = new Map();

  for (const file of masterFiles) {
    if (!assetByPath.has(file.relativePath)) {
      throw new Error(`现有母版整库包含未知文件：${file.relativePath}`);
    }
    if (fileByPath.has(file.relativePath)) {
      throw new Error(`现有母版整库包含重复路径：${file.relativePath}`);
    }

    fileByPath.set(file.relativePath, file);
  }

  const validatedById = new Map();

  for (const asset of ATLAS_ASSETS) {
    if (selectedAssetIds.has(asset.id)) {
      continue;
    }

    const file = fileByPath.get(asset.relativePath);
    const record = recordById.get(asset.id);

    if (!file || !record) {
      throw new Error(`未选中母版或私有证据缺失：${asset.id}`);
    }

    validatedById.set(
      asset.id,
      await validateExistingRecord(asset, file, record),
    );
  }

  return { privateManifest, validatedById };
}

async function copyValidatedExistingAsset(asset, validated, outputRoot) {
  const outputPath = path.join(outputRoot, asset.relativePath);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, validated.contents);
  const outputContents = await readFile(outputPath);

  if (sha256(outputContents) !== asset.sourceSha256) {
    throw new Error(`未选中母版暂存复制校验失败：${asset.id}`);
  }

  return validated.record;
}

function buildPrivateManifest({
  cleanSourceRoot,
  incomingRoot,
  records,
}) {
  const counts = expectedLibraryCounts();
  const privateManifest = {
    counts,
    generatedAt: new Date().toISOString(),
    incomingRoot,
    preservedScheme: PRESERVED_SOURCE_WATERMARK_SCHEME,
    records,
    scheme: VISIBLE_WATERMARK_SCHEME,
    total: records.length,
  };

  if (typeof cleanSourceRoot === "string" && cleanSourceRoot !== "") {
    return { cleanSourceRoot, ...privateManifest };
  }

  return privateManifest;
}

async function writeValidateAndPublish({
  cleanSourceRoot,
  incomingRoot,
  outputRoot,
  records,
  stagingRoot,
}) {
  const recordById = new Map(records.map((record) => [record.assetId, record]));
  const orderedRecords = ATLAS_ASSETS.map((asset) => recordById.get(asset.id));

  if (
    records.length !== ATLAS_ASSET_SUMMARY.assets ||
    recordById.size !== ATLAS_ASSET_SUMMARY.assets ||
    orderedRecords.some((record) => !record)
  ) {
    throw new Error("暂存母版私有证据未覆盖版本化资产清单全集。");
  }

  await writeFile(
    path.join(stagingRoot, PRIVATE_MASTER_MANIFEST_NAME),
    `${JSON.stringify(
      buildPrivateManifest({
        cleanSourceRoot,
        incomingRoot,
        records: orderedRecords,
      }),
      null,
      2,
    )}\n`,
    { encoding: "utf8", mode: 0o600 },
  );

  await validateMasterLibrary(stagingRoot);
  await publish(stagingRoot, outputRoot);
}

async function makeStagingRoot(outputRoot) {
  await mkdir(path.dirname(outputRoot), { recursive: true });

  return mkdtemp(
    path.join(path.dirname(outputRoot), `.${path.basename(outputRoot)}-import-`),
  );
}

async function prepareBatchSources(selectedAssets, options, outputRoot) {
  if (Boolean(options.incoming) === Boolean(options.incomingFile)) {
    throw new Error(
      "小批次用法：--asset <id>（可重复或逗号分隔）并且只提供 --incoming-file <file> 或 --incoming <受控目录> 之一。",
    );
  }
  if (options.cleanSource) {
    throw new Error("小批次导入不能同时提供 --clean-source。");
  }

  const sourceById = new Map();
  let incomingRoot;

  if (options.incomingFile) {
    if (selectedAssets.length !== 1) {
      throw new Error("--incoming-file 只能与一个 --asset 配合使用。");
    }

    const absolutePath = path.resolve(options.incomingFile);
    incomingRoot = path.dirname(absolutePath);
    assertControlledIncomingPath(absolutePath);
    assertNoPathOverlap(absolutePath, outputRoot, "来图文件与母版输出目录重叠");
    await assertRegularNonSymlinkFile(absolutePath, "小批次来图");
    sourceById.set(selectedAssets[0].id, {
      absolutePath,
      relativePath: path.basename(absolutePath),
    });
  } else {
    incomingRoot = path.resolve(options.incoming);
    assertControlledIncomingPath(incomingRoot);
    assertNoPathOverlap(incomingRoot, outputRoot, "受控来图目录与母版输出目录重叠");
    const files = await collectRelativeFiles(incomingRoot);
    assertExactRelativePaths(files, selectedAssets, "小批次受控来图目录");
    const fileByPath = new Map(
      files.map((file) => [file.relativePath, file]),
    );

    for (const asset of selectedAssets) {
      sourceById.set(asset.id, fileByPath.get(asset.relativePath));
    }
  }

  for (const asset of selectedAssets) {
    const source = sourceById.get(asset.id);

    if (!source) {
      throw new Error(`小批次缺图：${asset.id}`);
    }

    await validateSourceBaseline(asset, source, "小批次来图");
  }

  return { incomingRoot, sourceById };
}

async function runBatchMode(options, outputRoot) {
  const selectedAssets = options.assetIds.map((assetId) => getAtlasAsset(assetId));
  selectedAssets.forEach(assertApprovedAsset);
  const selectedAssetIds = new Set(selectedAssets.map((asset) => asset.id));
  const { incomingRoot, sourceById } = await prepareBatchSources(
    selectedAssets,
    options,
    outputRoot,
  );
  const existing = await readExistingLibrary(outputRoot, selectedAssetIds);
  const stagingRoot = await makeStagingRoot(outputRoot);

  try {
    const records = [];

    for (const asset of ATLAS_ASSETS) {
      if (selectedAssetIds.has(asset.id)) {
        const source = sourceById.get(asset.id);
        records.push(
          await copyAndRecord({
            asset,
            contentMse: null,
            outputRoot: stagingRoot,
            source,
            sourceOriginalName: path.basename(source.relativePath),
          }),
        );
      } else {
        records.push(
          await copyValidatedExistingAsset(
            asset,
            existing.validatedById.get(asset.id),
            stagingRoot,
          ),
        );
      }
    }

    await writeValidateAndPublish({
      cleanSourceRoot: existing.privateManifest.cleanSourceRoot,
      incomingRoot,
      outputRoot,
      records,
      stagingRoot,
    });
  } finally {
    await rm(stagingRoot, { recursive: true, force: true });
  }

  console.log(
    `已按版本化清单逐字节导入 ${selectedAssets.length} 张母版：${selectedAssets
      .map((asset) => asset.id)
      .join(", ")}`,
  );
  console.log(
    `整库 ${ATLAS_ASSET_SUMMARY.assets} 张母版已验证并原子替换：${outputRoot}`,
  );
  console.log("受控来图、未选中母版和私有证据均未被修改。");
}

async function prepareFullImport(options, outputRoot) {
  if (!options.incoming || !options.cleanSource || options.incomingFile) {
    throw new Error(
      "全量经络用法：node scripts/atlas/generate-visible-masters.mjs --incoming <用户水印经络图目录> --clean-source <旧站干净源图目录> [--output <母版目录>]",
    );
  }

  const incomingRoot = path.resolve(options.incoming);
  const cleanSourceRoot = path.resolve(options.cleanSource);
  assertNoPathOverlap(incomingRoot, cleanSourceRoot, "经络来图与干净源图目录重叠");
  assertNoPathOverlap(incomingRoot, outputRoot, "经络来图与母版输出目录重叠");
  assertNoPathOverlap(cleanSourceRoot, outputRoot, "干净源图与母版输出目录重叠");

  const [incoming, cleanSources] = await Promise.all([
    collectImageFiles(incomingRoot),
    collectImageFiles(cleanSourceRoot),
  ]);
  incoming.sort((left, right) =>
    left.relativePath.localeCompare(right.relativePath, "zh-Hans-CN"),
  );
  cleanSources.sort((left, right) =>
    left.relativePath.localeCompare(right.relativePath, "en"),
  );

  assertExactRelativePaths(cleanSources, ATLAS_ASSETS, "旧站干净源图目录");
  const cleanByRelativePath = new Map(
    cleanSources.map((source) => [source.relativePath, source]),
  );
  const incomingAssets = ATLAS_ASSETS.filter(
    (asset) => asset.sourceType === USER_WATERMARKED_SOURCE_TYPE,
  );
  const incomingAssetByPath = new Map(
    incomingAssets.map((asset) => [asset.relativePath, asset]),
  );
  const mappedIncoming = incoming.map((source) => ({
    source,
    targetRelativePath: mapIncomingFilename(path.basename(source.relativePath)),
  }));
  const mappedPaths = mappedIncoming.map((entry) => entry.targetRelativePath);
  const mappedPathSet = new Set(mappedPaths);
  const missing = incomingAssets
    .map((asset) => asset.relativePath)
    .filter((relativePath) => !mappedPathSet.has(relativePath));
  const unexpected = mappedPaths.filter(
    (relativePath) => !incomingAssetByPath.has(relativePath),
  );

  if (
    mappedPaths.length !== incomingAssets.length ||
    mappedPathSet.size !== mappedPaths.length ||
    missing.length > 0 ||
    unexpected.length > 0
  ) {
    throw new Error(
      `用户经络图映射不完整：收到 ${mappedPaths.length}/${incomingAssets.length}，缺失 ${missing.join(", ") || "无"}，未知或冲突 ${unexpected.join(", ") || "无"}。`,
    );
  }

  const incomingByAssetId = new Map();

  for (const entry of mappedIncoming) {
    const asset = incomingAssetByPath.get(entry.targetRelativePath);
    const clean = cleanByRelativePath.get(entry.targetRelativePath);

    if (!asset || !clean) {
      throw new Error(`找不到对应的清单资产或干净源图：${entry.targetRelativePath}`);
    }

    const contentMse = await validateIncomingMatch(entry.source, clean);
    await validateSourceBaseline(asset, entry.source, "用户经络来图");
    incomingByAssetId.set(asset.id, { ...entry, contentMse });
  }

  for (const asset of ATLAS_ASSETS) {
    assertApprovedAsset(asset);

    if (asset.sourceType !== USER_WATERMARKED_SOURCE_TYPE) {
      await validateSourceBaseline(
        asset,
        cleanByRelativePath.get(asset.relativePath),
        "旧站干净源图",
      );
    }
  }

  return {
    cleanByRelativePath,
    cleanSourceRoot,
    incomingByAssetId,
    incomingRoot,
    incomingAssets,
  };
}

async function runFullImportMode(options, outputRoot) {
  const prepared = await prepareFullImport(options, outputRoot);
  const stagingRoot = await makeStagingRoot(outputRoot);

  try {
    const records = [];

    for (const asset of ATLAS_ASSETS) {
      const incoming = prepared.incomingByAssetId.get(asset.id);

      if (incoming) {
        records.push(
          await copyAndRecord({
            asset,
            contentMse: incoming.contentMse,
            outputRoot: stagingRoot,
            source: incoming.source,
            sourceOriginalName: path.basename(incoming.source.relativePath),
          }),
        );
      } else {
        records.push(
          await copyAndRecord({
            asset,
            contentMse: null,
            outputRoot: stagingRoot,
            source: prepared.cleanByRelativePath.get(asset.relativePath),
            sourceOriginalName: null,
          }),
        );
      }
    }

    await writeValidateAndPublish({
      cleanSourceRoot: prepared.cleanSourceRoot,
      incomingRoot: prepared.incomingRoot,
      outputRoot,
      records,
      stagingRoot,
    });
  } finally {
    await rm(stagingRoot, { recursive: true, force: true });
  }

  const cleanSourceCount =
    ATLAS_ASSET_SUMMARY.assets -
    (ATLAS_ASSET_SUMMARY.bySourceType[USER_WATERMARKED_SOURCE_TYPE] ?? 0);
  console.log(
    `已逐字节导入 ${prepared.incomingAssets.length} 张用户提供的经络水印原图。`,
  );
  console.log(`已从干净源图恢复 ${cleanSourceCount} 张清单母版。`);
  console.log(
    `整库 ${ATLAS_ASSET_SUMMARY.assets} 张母版已验证并原子替换：${outputRoot}`,
  );
  console.log("用户来图与旧站干净源图均未被修改。");
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const outputRoot = path.resolve(options.output ?? defaultOutputRoot);
  assertSafeOutputRoot(outputRoot);

  if (options.assetIds.length > 0) {
    await runBatchMode(options, outputRoot);
  } else {
    await runFullImportMode(options, outputRoot);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
