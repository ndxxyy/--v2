import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const manifestPath = fileURLToPath(
  new URL("./asset-manifest.json", import.meta.url),
);
const ASSET_ID_PATTERN =
  /^(?:[a-z0-9]+(?:-[a-z0-9]+)*\/)*[a-z0-9]+(?:-[a-z0-9]+)*$/;
const WORK_ID_PATTERN = /^work-[0-9]+$/;
const SHA256_PATTERN = /^[a-f0-9]{64}$/;
const ALLOWED_CATEGORIES = new Set(["formulas", "herbs", "meridians"]);
const SUPPORTED_VARIANT_NAMES = Object.freeze(["thumbnail", "preview"]);
export const SUPPORTED_ASSET_MANIFEST_VERSION = 2;

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function deepFreeze(value) {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) {
    return value;
  }

  Object.freeze(value);
  Object.values(value).forEach(deepFreeze);
  return value;
}

function assertNonEmptyString(value, label) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`版本化资产清单字段无效：${label}`);
  }
}

function assertExactSet(actualValues, expectedValues, label) {
  const duplicates = actualValues.filter(
    (value, index) => actualValues.indexOf(value) !== index,
  );
  const actual = new Set(actualValues);
  const expected = new Set(expectedValues);
  const missing = expectedValues.filter((value) => !actual.has(value));
  const unexpected = actualValues.filter((value) => !expected.has(value));

  if (duplicates.length > 0 || missing.length > 0 || unexpected.length > 0) {
    throw new Error(
      [
        `${label}与版本化资产清单不一致。`,
        duplicates.length > 0
          ? `重复：${[...new Set(duplicates)].slice(0, 10).join(", ")}`
          : null,
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
}

function assertExactKeys(value, expectedKeys, label) {
  if (!isRecord(value)) {
    throw new Error(`版本化资产清单对象无效：${label}`);
  }

  assertExactSet(Object.keys(value), expectedKeys, `${label} 字段`);
}

function assertNonEmptyUniqueSubset(values, allowedValues, label) {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error(`版本化资产清单列表不能为空：${label}`);
  }

  const duplicates = values.filter(
    (value, index) => values.indexOf(value) !== index,
  );
  const unexpected = values.filter((value) => !allowedValues.includes(value));

  if (duplicates.length > 0 || unexpected.length > 0) {
    throw new Error(
      `${label}存在重复或未登记项：${[
        ...new Set([...duplicates, ...unexpected]),
      ].join(", ")}`,
    );
  }
}

function canonicalJson(value) {
  if (Array.isArray(value)) {
    return `[${value.map(canonicalJson).join(",")}]`;
  }

  if (isRecord(value)) {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`)
      .join(",")}}`;
  }

  return JSON.stringify(value);
}

export function validateAssetManifest(manifest, label = manifestPath) {
  if (
    !isRecord(manifest) ||
    manifest.version !== SUPPORTED_ASSET_MANIFEST_VERSION ||
    !Array.isArray(manifest.assets) ||
    manifest.assets.length === 0 ||
    !isRecord(manifest.review) ||
    manifest.review.status !== "approved" ||
    !isRecord(manifest.sourceTypes) ||
    !isRecord(manifest.variantSpecs) ||
    !isRecord(manifest.derivationContract) ||
    !isRecord(manifest.visibleWatermarkSources) ||
    !isRecord(manifest.visibleWatermarkPolicies)
  ) {
    throw new Error(`版本化资产清单结构或审核状态无效：${label}`);
  }

  assertExactKeys(
    manifest,
    [
      "version",
      "release",
      "review",
      "sourceTypes",
      "variantSpecs",
      "derivationContract",
      "visibleWatermarkSources",
      "visibleWatermarkPolicies",
      "assets",
    ],
    "清单根对象",
  );
  assertExactKeys(
    manifest.review,
    ["status", "baseline", "reviewedAt", "evidence"],
    "review",
  );

  assertNonEmptyString(manifest.release, "release");
  assertNonEmptyString(manifest.review.baseline, "review.baseline");
  assertNonEmptyString(manifest.review.reviewedAt, "review.reviewedAt");
  assertNonEmptyString(manifest.review.evidence, "review.evidence");

  if (
    Number.isNaN(Date.parse(manifest.review.reviewedAt)) ||
    new Date(manifest.review.reviewedAt).toISOString() !==
      manifest.review.reviewedAt
  ) {
    throw new Error("版本化资产清单审核时间必须是真实 ISO 时间。");
  }

  const sourceTypeNames = Object.keys(manifest.sourceTypes);
  const variantNames = Object.keys(manifest.variantSpecs);
  const visibleSourceNames = Object.keys(manifest.visibleWatermarkSources);
  const policyNames = Object.keys(manifest.visibleWatermarkPolicies);

  if (
    sourceTypeNames.length === 0 ||
    variantNames.length === 0 ||
    visibleSourceNames.length === 0 ||
    policyNames.length === 0
  ) {
    throw new Error(`版本化资产清单审核表不能为空：${label}`);
  }

  assertExactSet(
    variantNames,
    SUPPORTED_VARIANT_NAMES,
    "当前生成器支持的公开变体角色",
  );
  assertExactKeys(
    manifest.derivationContract,
    [
      "autoOrient",
      "resizeFit",
      "resizeKernel",
      "withoutEnlargement",
      "colourspace",
      "webpEffort",
      "webpSmartSubsample",
      "blindWatermarkScheme",
      "publicVisibleWatermark",
    ],
    "derivationContract",
  );

  if (
    manifest.derivationContract.autoOrient !== true ||
    manifest.derivationContract.resizeFit !== "inside" ||
    manifest.derivationContract.resizeKernel !== "lanczos3" ||
    manifest.derivationContract.withoutEnlargement !== true ||
    manifest.derivationContract.colourspace !== "srgb" ||
    manifest.derivationContract.webpEffort !== 5 ||
    manifest.derivationContract.webpSmartSubsample !== true ||
    manifest.derivationContract.blindWatermarkScheme !== "xqy-dct-qim-v2" ||
    !isRecord(manifest.derivationContract.publicVisibleWatermark)
  ) {
    throw new Error("版本化资产清单的派生编码契约不受当前生成器支持。");
  }

  assertExactKeys(
    manifest.derivationContract.publicVisibleWatermark,
    ["brand", "domain", "opacity", "position", "scheme"],
    "derivationContract.publicVisibleWatermark",
  );

  const publicWatermark = manifest.derivationContract.publicVisibleWatermark;

  if (
    publicWatermark.brand !== "小钟岐医" ||
    publicWatermark.domain !== "xiaozhongqiyi.com" ||
    publicWatermark.opacity !== 0.12 ||
    publicWatermark.position !== "bottom-right" ||
    publicWatermark.scheme !== "xqy-public-corner-v1"
  ) {
    throw new Error("公开派生图角落版权标识配置无效。");
  }

  for (const sourceType of sourceTypeNames) {
    const definition = manifest.sourceTypes[sourceType];
    assertExactKeys(
      definition,
      ["description", "allowedVisibleWatermarkPolicies"],
      `sourceTypes.${sourceType}`,
    );
    assertNonEmptyString(
      definition.description,
      `sourceTypes.${sourceType}.description`,
    );
    assertNonEmptyUniqueSubset(
      definition.allowedVisibleWatermarkPolicies,
      policyNames,
      `sourceTypes.${sourceType}.allowedVisibleWatermarkPolicies`,
    );
  }

  for (const visibleSource of visibleSourceNames) {
    const definition = manifest.visibleWatermarkSources[visibleSource];
    assertExactKeys(
      definition,
      ["description"],
      `visibleWatermarkSources.${visibleSource}`,
    );
    assertNonEmptyString(
      definition.description,
      `visibleWatermarkSources.${visibleSource}.description`,
    );
  }

  const outputDirectories = new Set();

  for (const variantName of variantNames) {
    const spec = manifest.variantSpecs[variantName];

    assertExactKeys(
      spec,
      ["directory", "width", "height", "quality", "format"],
      `variantSpecs.${variantName}`,
    );

    if (
      !ASSET_ID_PATTERN.test(variantName) ||
      !isRecord(spec) ||
      !ASSET_ID_PATTERN.test(spec.directory) ||
      !Number.isInteger(spec.width) ||
      spec.width < 1 ||
      !Number.isInteger(spec.height) ||
      spec.height < 1 ||
      !Number.isInteger(spec.quality) ||
      spec.quality < 1 ||
      spec.quality > 100 ||
      spec.format !== "webp" ||
      outputDirectories.has(spec.directory)
    ) {
      throw new Error(`版本化资产清单公开变体无效：${variantName}`);
    }

    outputDirectories.add(spec.directory);
  }

  for (const policyName of policyNames) {
    const policy = manifest.visibleWatermarkPolicies[policyName];

    assertExactKeys(
      policy,
      ["reviewStatus", "source", "description", "descriptor"],
      `visibleWatermarkPolicies.${policyName}`,
    );

    if (
      !isRecord(policy) ||
      policy.reviewStatus !== "approved" ||
      !visibleSourceNames.includes(policy.source) ||
      !isRecord(policy.descriptor) ||
      typeof policy.descriptor.applied !== "boolean"
    ) {
      throw new Error(`版本化资产清单存在未审核的明水印策略：${policyName}`);
    }

    assertNonEmptyString(policy.description, `${policyName}.description`);
    assertNonEmptyString(policy.descriptor.brand, `${policyName}.brand`);
    assertNonEmptyString(policy.descriptor.scheme, `${policyName}.scheme`);

    if (policy.descriptor.applied) {
      assertExactKeys(
        policy.descriptor,
        [
          "applied",
          "brand",
          "color",
          "opacity",
          "pattern",
          "provenance",
          "scheme",
        ],
        `visibleWatermarkPolicies.${policyName}.descriptor`,
      );

      if (
        policy.descriptor.brand !== "小钟岐医" ||
        policy.descriptor.color !== "#ffffff" ||
        policy.descriptor.opacity !== 0.5 ||
        policy.descriptor.pattern !== "tiled" ||
        policy.descriptor.provenance !== "user-provided-master" ||
        policy.descriptor.scheme !== "xqy-visible-mesh-v2"
      ) {
        throw new Error(`已应用明水印策略描述无效：${policyName}`);
      }
    } else {
      assertExactKeys(
        policy.descriptor,
        ["applied", "brand", "reason", "scheme", "sourceIdentifier"],
        `visibleWatermarkPolicies.${policyName}.descriptor`,
      );

      if (
        policy.descriptor.brand !== "小钟岐医" ||
        policy.descriptor.reason !== "source-identifier-preserved" ||
        policy.descriptor.scheme !== "source-visible-preserved-v1" ||
        !["existing-mesh", "existing-seal"].includes(
          policy.descriptor.sourceIdentifier,
        )
      ) {
        throw new Error(`保留源标识的明水印策略无效：${policyName}`);
      }
    }
  }

  const ids = new Set();
  const relativePaths = new Set();
  const sourceHashes = new Set();
  const outputPaths = new Set();
  let previousId = "";

  for (const asset of manifest.assets) {
    assertExactKeys(
      asset,
      [
        "id",
        "relativePath",
        "workId",
        "category",
        "sourceType",
        "sourceSha256",
        "sourceReviewStatus",
        "publicReleaseStatus",
        "visibleWatermarkPolicy",
        "visibleWatermarkSource",
        "variants",
        "review",
      ],
      `assets.${asset?.id ?? "未知"}`,
    );

    if (
      !isRecord(asset) ||
      !ASSET_ID_PATTERN.test(asset.id) ||
      !WORK_ID_PATTERN.test(asset.workId) ||
      !ALLOWED_CATEGORIES.has(asset.category) ||
      !sourceTypeNames.includes(asset.sourceType) ||
      asset.sourceReviewStatus !== "approved" ||
      asset.publicReleaseStatus !== "approved" ||
      !SHA256_PATTERN.test(asset.sourceSha256) ||
      !policyNames.includes(asset.visibleWatermarkPolicy) ||
      !visibleSourceNames.includes(asset.visibleWatermarkSource) ||
      !Array.isArray(asset.variants) ||
      !isRecord(asset.review) ||
      asset.review.status !== "approved"
    ) {
      throw new Error(`版本化资产记录结构或审核状态无效：${asset?.id ?? "未知"}`);
    }

    assertExactKeys(asset.review, ["status", "evidence"], `${asset.id}.review`);
    assertNonEmptyString(asset.review.evidence, `${asset.id}.review.evidence`);

    const sourceType = manifest.sourceTypes[asset.sourceType];
    const policy = manifest.visibleWatermarkPolicies[asset.visibleWatermarkPolicy];

    if (
      !sourceType.allowedVisibleWatermarkPolicies.includes(
        asset.visibleWatermarkPolicy,
      ) ||
      policy.source !== asset.visibleWatermarkSource
    ) {
      throw new Error(`资产来源类型与明水印审核策略冲突：${asset.id}`);
    }

    const normalizedRelativePath = path.posix.normalize(asset.relativePath);
    const expectedStem = asset.relativePath.replace(/\.[^.]+$/, "");

    if (
      normalizedRelativePath !== asset.relativePath ||
      !/\.(?:jpe?g|png)$/i.test(asset.relativePath) ||
      expectedStem !== asset.id ||
      asset.relativePath.startsWith("/") ||
      asset.relativePath.includes("..")
    ) {
      throw new Error(`版本化资产相对路径无效：${asset.id}`);
    }

    assertExactSet(asset.variants, variantNames, `${asset.id} 的公开变体`);

    if (
      ids.has(asset.id) ||
      relativePaths.has(asset.relativePath) ||
      sourceHashes.has(asset.sourceSha256)
    ) {
      throw new Error(`版本化资产存在重复 ID、路径或源哈希：${asset.id}`);
    }

    if (previousId && previousId.localeCompare(asset.id, "en") >= 0) {
      throw new Error(`版本化资产必须按稳定 ID 排序：${asset.id}`);
    }

    ids.add(asset.id);
    relativePaths.add(asset.relativePath);
    sourceHashes.add(asset.sourceSha256);
    previousId = asset.id;

    for (const variant of asset.variants) {
      const spec = manifest.variantSpecs[variant];
      const outputPath = `${spec.directory}/${asset.id}.${spec.format}`;

      if (outputPaths.has(outputPath)) {
        throw new Error(`版本化资产公开路径冲突：${outputPath}`);
      }

      outputPaths.add(outputPath);
    }
  }

  return manifest;
}

const parsedManifest = validateAssetManifest(
  JSON.parse(readFileSync(manifestPath, "utf8")),
);

export const ATLAS_ASSET_MANIFEST = deepFreeze(parsedManifest);
export const ATLAS_ASSETS = ATLAS_ASSET_MANIFEST.assets;
export const ATLAS_ASSET_BY_ID = new Map(
  ATLAS_ASSETS.map((asset) => [asset.id, asset]),
);
export const ATLAS_VARIANT_SPECS = ATLAS_ASSET_MANIFEST.variantSpecs;
export const ATLAS_DERIVATION_CONTRACT =
  ATLAS_ASSET_MANIFEST.derivationContract;
export const ATLAS_VISIBLE_WATERMARK_POLICIES =
  ATLAS_ASSET_MANIFEST.visibleWatermarkPolicies;
export const ATLAS_VISIBLE_WATERMARK_SOURCES =
  ATLAS_ASSET_MANIFEST.visibleWatermarkSources;
export const ATLAS_ENCODING_CONTRACT_FINGERPRINT = createHash("sha256")
  .update(
    canonicalJson({
      derivationContract: ATLAS_DERIVATION_CONTRACT,
      variantSpecs: ATLAS_VARIANT_SPECS,
    }),
  )
  .digest("hex");

export function getAtlasAsset(assetId) {
  const asset = ATLAS_ASSET_BY_ID.get(assetId);

  if (!asset) {
    throw new Error(`资产未在版本化审核清单登记：${assetId}`);
  }

  return asset;
}

export function getAtlasVisibleWatermarkPolicy(assetId) {
  const asset = getAtlasAsset(assetId);
  const policy = ATLAS_VISIBLE_WATERMARK_POLICIES[asset.visibleWatermarkPolicy];

  if (!policy || policy.reviewStatus !== "approved") {
    throw new Error(`明水印策略未审核：${assetId}`);
  }

  return policy;
}

export function assertExactAssetIds(assetIds, label = "资产 ID") {
  assertExactSet(
    assetIds,
    ATLAS_ASSETS.map((asset) => asset.id),
    label,
  );
}

export function assertExactAssetRelativePaths(relativePaths, label = "资产路径") {
  assertExactSet(
    relativePaths,
    ATLAS_ASSETS.map((asset) => asset.relativePath),
    label,
  );
}

export function summarizeAssetManifest() {
  const summary = {
    assets: ATLAS_ASSETS.length,
    variants: 0,
    byCategory: {},
    bySourceType: {},
    byVariant: {},
    byVisibleWatermarkPolicy: {},
    byVisibleWatermarkSource: {},
    visibleWatermarkAssets: { appliedFalse: 0, appliedTrue: 0 },
    visibleWatermarkVariants: { appliedFalse: 0, appliedTrue: 0 },
  };

  for (const asset of ATLAS_ASSETS) {
    summary.byCategory[asset.category] =
      (summary.byCategory[asset.category] ?? 0) + 1;
    summary.bySourceType[asset.sourceType] =
      (summary.bySourceType[asset.sourceType] ?? 0) + 1;
    summary.byVisibleWatermarkPolicy[asset.visibleWatermarkPolicy] =
      (summary.byVisibleWatermarkPolicy[asset.visibleWatermarkPolicy] ?? 0) + 1;
    summary.byVisibleWatermarkSource[asset.visibleWatermarkSource] =
      (summary.byVisibleWatermarkSource[asset.visibleWatermarkSource] ?? 0) + 1;
    const policy = getAtlasVisibleWatermarkPolicy(asset.id);
    const appliedKey = policy.descriptor.applied
      ? "appliedTrue"
      : "appliedFalse";
    summary.visibleWatermarkAssets[appliedKey] += 1;
    summary.visibleWatermarkVariants[appliedKey] += asset.variants.length;

    for (const variant of asset.variants) {
      summary.variants += 1;
      summary.byVariant[variant] = (summary.byVariant[variant] ?? 0) + 1;
    }
  }

  return deepFreeze(summary);
}

export const ATLAS_ASSET_SUMMARY = summarizeAssetManifest();

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  console.log(
    JSON.stringify(
      {
        manifest: path.relative(process.cwd(), manifestPath),
        release: ATLAS_ASSET_MANIFEST.release,
        version: ATLAS_ASSET_MANIFEST.version,
        encodingContractFingerprint: ATLAS_ENCODING_CONTRACT_FINGERPRINT,
        ...ATLAS_ASSET_SUMMARY,
      },
      null,
      2,
    ),
  );
}
