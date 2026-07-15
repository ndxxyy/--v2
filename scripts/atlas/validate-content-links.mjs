import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import ts from "typescript";

import {
  ATLAS_ASSETS,
  assertExactAssetIds,
} from "./asset-manifest.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "../..");
const worksPath = path.join(projectRoot, "src/data/works.ts");
const imageGroupsPath = path.join(projectRoot, "src/data/image-groups.ts");
const herbTaxaPath = path.join(projectRoot, "src/data/herb-taxa.ts");
const ATLAS_CATEGORIES = new Set(["formulas", "herbs", "meridians"]);

function unwrap(node) {
  let current = node;

  while (
    ts.isAsExpression(current) ||
    ts.isSatisfiesExpression(current) ||
    ts.isParenthesizedExpression(current)
  ) {
    current = current.expression;
  }

  return current;
}

function propertyName(node) {
  if (
    ts.isIdentifier(node) ||
    ts.isStringLiteral(node) ||
    ts.isNumericLiteral(node)
  ) {
    return node.text;
  }

  return undefined;
}

function getProperty(object, name) {
  const property = object.properties.find(
    (candidate) =>
      ts.isPropertyAssignment(candidate) &&
      propertyName(candidate.name) === name,
  );

  return property ? unwrap(property.initializer) : undefined;
}

function getString(object, name, label) {
  const value = getProperty(object, name);

  if (!value || !ts.isStringLiteral(value) || value.text.trim() === "") {
    throw new Error(`图谱内容链接字段无效：${label}.${name}`);
  }

  return value.text;
}

function getOptionalString(object, name, label) {
  const value = getProperty(object, name);

  if (value === undefined) {
    return undefined;
  }

  if (!ts.isStringLiteral(value) || value.text.trim() === "") {
    throw new Error(`图谱内容链接可选字段无效：${label}.${name}`);
  }

  return value.text;
}

function parseSource(source, filename) {
  return ts.createSourceFile(
    filename,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
}

function parseWorks(source) {
  const sourceFile = parseSource(source, worksPath);
  const works = [];

  function visit(node) {
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === "defineWork" &&
      node.arguments.length === 1
    ) {
      const definition = unwrap(node.arguments[0]);

      if (!ts.isObjectLiteralExpression(definition)) {
        throw new Error("defineWork 必须使用可审核的对象字面量。");
      }

      const id = getString(definition, "id", "work");
      const slug = getString(definition, "slug", id);
      const code = getOptionalString(definition, "code", id);
      const category = getString(definition, "category", id);
      const herbTaxonKey = getOptionalString(definition, "herbTaxonKey", id);
      const publication = getProperty(definition, "publication");
      const title = getProperty(definition, "title");
      const summary = getProperty(definition, "summary");

      if (
        !publication ||
        !ts.isObjectLiteralExpression(publication) ||
        !title ||
        !ts.isObjectLiteralExpression(title) ||
        !summary ||
        !ts.isObjectLiteralExpression(summary)
      ) {
        throw new Error(`作品缺少显式发布状态、三语言标题或简介：${id}`);
      }

      works.push({
        id,
        slug,
        code,
        category,
        herbTaxonKey,
        publicationStatus: getString(publication, "status", `${id}.publication`),
        title: {
          "zh-CN": getString(title, "zh-CN", `${id}.title`),
          "zh-Hant": getString(title, "zh-Hant", `${id}.title`),
          en: getString(title, "en", `${id}.title`),
        },
        summary: {
          "zh-CN": getOptionalString(summary, "zh-CN", `${id}.summary`),
          "zh-Hant": getOptionalString(summary, "zh-Hant", `${id}.summary`),
          en: getOptionalString(summary, "en", `${id}.summary`),
        },
      });
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return works;
}

function parseImageGroups(source) {
  const sourceFile = parseSource(source, imageGroupsPath);
  let groupArray;

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) {
      continue;
    }

    for (const declaration of statement.declarationList.declarations) {
      if (
        ts.isIdentifier(declaration.name) &&
        declaration.name.text === "groupDefinitions" &&
        declaration.initializer
      ) {
        groupArray = unwrap(declaration.initializer);
      }
    }
  }

  if (!groupArray || !ts.isArrayLiteralExpression(groupArray)) {
    throw new Error("无法读取可审核的 groupDefinitions 数组。");
  }

  return groupArray.elements.map((element, groupIndex) => {
    const group = unwrap(element);

    if (!ts.isObjectLiteralExpression(group)) {
      throw new Error(`图组定义必须使用对象字面量：${groupIndex}`);
    }

    const workId = getString(group, "workId", `groupDefinitions[${groupIndex}]`);
    const images = getProperty(group, "images");

    if (!images || !ts.isArrayLiteralExpression(images)) {
      throw new Error(`图组必须显式列出 images：${workId}`);
    }

    return {
      workId,
      assetIds: images.elements.map((element, imageIndex) => {
        const call = unwrap(element);

        if (
          !ts.isCallExpression(call) ||
          !ts.isIdentifier(call.expression) ||
          call.expression.text !== "image" ||
          call.arguments.length < 1 ||
          !ts.isStringLiteral(call.arguments[0])
        ) {
          throw new Error(`图组图片必须显式调用 image：${workId}/${imageIndex}`);
        }

        return call.arguments[0].text;
      }),
    };
  });
}

function parseHerbTaxa(source) {
  const sourceFile = parseSource(source, herbTaxaPath);
  let taxonArray;

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) {
      continue;
    }

    for (const declaration of statement.declarationList.declarations) {
      if (
        ts.isIdentifier(declaration.name) &&
        declaration.name.text === "herbTaxa" &&
        declaration.initializer
      ) {
        taxonArray = unwrap(declaration.initializer);
      }
    }
  }

  if (!taxonArray || !ts.isArrayLiteralExpression(taxonArray)) {
    throw new Error("无法读取可审核的 herbTaxa 数组。");
  }

  return taxonArray.elements.map((element, index) => {
    const taxon = unwrap(element);

    if (!ts.isObjectLiteralExpression(taxon)) {
      throw new Error(`本草分类必须使用对象字面量：${index}`);
    }

    const key = getString(taxon, "key", `herbTaxa[${index}]`);
    const slug = getString(taxon, "slug", key);
    const parentKey = getOptionalString(taxon, "parentKey", key);
    const publication = getProperty(taxon, "publication");

    if (!publication || !ts.isObjectLiteralExpression(publication)) {
      throw new Error(`本草分类缺少显式发布状态：${key}`);
    }

    return {
      key,
      slug,
      parentKey,
      publicationStatus: getString(publication, "status", `${key}.publication`),
    };
  });
}

function validateHerbTaxa(taxa) {
  const byKey = new Map();
  const pathByKey = new Map();
  const resolving = new Set();

  for (const taxon of taxa) {
    if (
      byKey.has(taxon.key) ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(taxon.slug)
    ) {
      throw new Error(`本草分类 key 重复或 slug 无效：${taxon.key}`);
    }

    byKey.set(taxon.key, taxon);
  }

  function resolvePath(key) {
    const existing = pathByKey.get(key);

    if (existing) {
      return existing;
    }

    const taxon = byKey.get(key);

    if (!taxon) {
      throw new Error(`本草分类父节点不存在：${key}`);
    }
    if (resolving.has(key) || taxon.parentKey === key) {
      throw new Error(`本草分类形成循环：${key}`);
    }

    resolving.add(key);
    const path = taxon.parentKey
      ? [...resolvePath(taxon.parentKey), taxon.slug]
      : [taxon.slug];
    resolving.delete(key);
    pathByKey.set(key, path);
    return path;
  }

  const fullPaths = new Set();

  for (const taxon of taxa) {
    const fullPath = resolvePath(taxon.key).join("/");

    if (fullPaths.has(fullPath)) {
      throw new Error(`本草分类路径重复：${fullPath}`);
    }
    fullPaths.add(fullPath);
  }

  const childrenByKey = new Map(
    taxa.map((taxon) => [
      taxon.key,
      taxa.filter((candidate) => candidate.parentKey === taxon.key),
    ]),
  );
  const leafBySlug = new Map();

  for (const taxon of taxa) {
    if ((childrenByKey.get(taxon.key) ?? []).length > 0) {
      continue;
    }
    if (leafBySlug.has(taxon.slug)) {
      throw new Error(`本草叶分类 slug 重复：${taxon.slug}`);
    }
    leafBySlug.set(taxon.slug, taxon);
  }

  return { byKey, childrenByKey, leafBySlug };
}

export async function validateAtlasContentLinks() {
  const [worksSource, imageGroupsSource, herbTaxaSource] = await Promise.all([
    readFile(worksPath, "utf8"),
    readFile(imageGroupsPath, "utf8"),
    readFile(herbTaxaPath, "utf8"),
  ]);
  const works = parseWorks(worksSource);
  const groups = parseImageGroups(imageGroupsSource);
  const herbTaxa = parseHerbTaxa(herbTaxaSource);
  const herbTaxonomy = validateHerbTaxa(herbTaxa);
  const workById = new Map();
  const slugs = new Set();
  const codes = new Set();

  for (const work of works) {
    if (
      workById.has(work.id) ||
      slugs.has(work.slug) ||
      (work.code !== undefined && codes.has(work.code)) ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(work.slug)
    ) {
      throw new Error(`作品 ID、slug 或编号重复/无效：${work.id}`);
    }

    workById.set(work.id, work);
    slugs.add(work.slug);
    if (work.code !== undefined) {
      codes.add(work.code);
    }

    if (
      (work.category === "herbs" && !work.herbTaxonKey) ||
      (work.category !== "herbs" && work.herbTaxonKey)
    ) {
      throw new Error(`作品与本草分类绑定无效：${work.id}`);
    }

    if (work.category === "herbs") {
      const taxon = herbTaxonomy.byKey.get(work.herbTaxonKey);
      const children = herbTaxonomy.childrenByKey.get(work.herbTaxonKey) ?? [];

      if (
        !taxon ||
        taxon.publicationStatus !== "published" ||
        children.length > 0
      ) {
        throw new Error(`本草作品必须绑定已发布的叶分类：${work.id}`);
      }

      let ancestor = taxon;

      while (ancestor) {
        if (ancestor.publicationStatus !== "published") {
          throw new Error(`本草作品分类路径包含未发布节点：${work.id}`);
        }
        ancestor = ancestor.parentKey
          ? herbTaxonomy.byKey.get(ancestor.parentKey)
          : undefined;
      }
    }
  }

  const manifestWorkIds = new Set(ATLAS_ASSETS.map((asset) => asset.workId));
  const publishedAtlasWorkIds = works
    .filter(
      (work) =>
        ATLAS_CATEGORIES.has(work.category) &&
        work.publicationStatus === "published",
    )
    .map((work) => work.id);
  const missingPublishedWork = publishedAtlasWorkIds.filter(
    (workId) => !manifestWorkIds.has(workId),
  );

  if (missingPublishedWork.length > 0) {
    throw new Error(
      `已发布图谱作品尚未进入版本化审核清单：${missingPublishedWork.join(", ")}`,
    );
  }

  for (const asset of ATLAS_ASSETS) {
    const work = workById.get(asset.workId);

    if (
      !work ||
      work.category !== asset.category ||
      work.publicationStatus !== "published" ||
      Object.values(work.title).some((value) => value.trim() === "") ||
      Object.values(work.summary).some(
        (value) => typeof value !== "string" || value.trim() === "",
      )
    ) {
      throw new Error(
        `资产绑定作品未发布、分类冲突或三语言标题/简介缺失：${asset.id}`,
      );
    }

    if (asset.category === "herbs") {
      const pathSegments = asset.relativePath.split("/");

      if (
        pathSegments.length !== 3 ||
        pathSegments[0] !== "herbs" ||
        pathSegments[2].trim() === ""
      ) {
        throw new Error(`本草资产路径必须为 herbs/<叶分类>/<文件>：${asset.id}`);
      }

      const pathTaxon = pathSegments[1];
      const expectedTaxon = herbTaxonomy.leafBySlug.get(pathTaxon);

      if (!expectedTaxon || work.herbTaxonKey !== expectedTaxon.key) {
        throw new Error(`本草资产路径与分类冲突：${asset.id}`);
      }
    }

    if (
      asset.category === "formulas" &&
      !asset.relativePath.startsWith("formulas/")
    ) {
      throw new Error(`方剂资产路径必须位于 formulas/：${asset.id}`);
    }
  }

  const groupWorkIds = groups.map((group) => group.workId);
  const duplicateGroupWorkIds = groupWorkIds.filter(
    (workId, index) => groupWorkIds.indexOf(workId) !== index,
  );

  if (duplicateGroupWorkIds.length > 0) {
    throw new Error(`图组作品 ID 重复：${[...new Set(duplicateGroupWorkIds)].join(", ")}`);
  }

  const groupAssetIds = groups.flatMap((group) => group.assetIds);
  assertExactAssetIds(groupAssetIds, "图组资产 ID");
  const groupWorkByAssetId = new Map(
    groups.flatMap((group) =>
      group.assetIds.map((assetId) => [assetId, group.workId]),
    ),
  );

  for (const asset of ATLAS_ASSETS) {
    if (groupWorkByAssetId.get(asset.id) !== asset.workId) {
      throw new Error(`资产与图组所属作品冲突：${asset.id}`);
    }
  }

  return Object.freeze({
    assets: ATLAS_ASSETS.length,
    groups: groups.length,
    herbTaxa: herbTaxa.length,
    publishedWorks: publishedAtlasWorkIds.length,
  });
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  console.log(JSON.stringify(await validateAtlasContentLinks(), null, 2));
}
