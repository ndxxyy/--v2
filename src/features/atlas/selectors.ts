import type { Route } from "next";

import { herbTaxa } from "@/data/herb-taxa";
import { imageGroups } from "@/data/image-groups";
import { workCategories } from "@/data/work-categories";
import { works } from "@/data/works";
import type {
  HerbTaxonKey,
  ImageVariant,
  WorkCategoryKey,
  WorkImage,
} from "@/domain/content";
import { isPublished } from "@/domain/publication";
import type { Locale } from "@/i18n/config";

export interface AtlasPublicImage {
  readonly id: string;
  readonly title: string;
  readonly alt: string;
  readonly thumbnail: ImageVariant;
  readonly preview: ImageVariant;
}

export interface AtlasHerbTaxonReference {
  readonly key: HerbTaxonKey;
  readonly name: string;
  readonly href: Route;
}

export interface AtlasCatalogWork {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly summary?: string;
  readonly code?: string;
  readonly category: WorkCategoryKey;
  readonly categoryName: string;
  readonly herbTaxonKey?: HerbTaxonKey;
  readonly herbTaxonPath?: readonly AtlasHerbTaxonReference[];
  readonly href: Route;
  readonly searchText: string;
  readonly image: Omit<AtlasPublicImage, "preview">;
}

export interface AtlasCategoryOption {
  readonly key: WorkCategoryKey;
  readonly name: string;
  readonly summary?: string;
  readonly href: Route;
  readonly count: number;
}

export interface AtlasBreadcrumb {
  readonly name: string;
  readonly href: Route;
}

export interface AtlasHerbTaxonOption {
  readonly key: HerbTaxonKey;
  readonly name: string;
  readonly summary?: string;
  readonly href: Route;
  readonly count: number;
  readonly isActive: boolean;
  readonly ordinal: number;
}

export interface AtlasHerbTaxonNavigation {
  readonly label: string;
  readonly summary?: string;
  readonly count: number;
  readonly isChapterDirectory: boolean;
  readonly options: readonly AtlasHerbTaxonOption[];
}

export interface AtlasCatalogData {
  readonly works: readonly AtlasCatalogWork[];
  readonly categories: readonly AtlasCategoryOption[];
  readonly activeCategory?: AtlasCategoryOption;
  readonly activeHerbTaxon?: {
    readonly key: HerbTaxonKey;
    readonly name: string;
    readonly summary?: string;
    readonly path: readonly AtlasHerbTaxonReference[];
  };
  readonly breadcrumbs?: readonly AtlasBreadcrumb[];
  readonly herbTaxonNavigation?: AtlasHerbTaxonNavigation;
}

export interface AtlasDetailData {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly summary?: string;
  readonly code?: string;
  readonly category: WorkCategoryKey;
  readonly categoryName: string;
  readonly herbTaxonPath?: readonly AtlasHerbTaxonReference[];
  readonly backHref: Route;
  readonly backLabel: string;
  readonly registrationNumber?: string;
  readonly images: readonly AtlasPublicImage[];
  readonly relatedWorks: readonly AtlasCatalogWork[];
}

interface ResolvedHerbTaxon {
  readonly key: HerbTaxonKey;
  readonly slug: string;
  readonly parentKey?: HerbTaxonKey;
  readonly name: string;
  readonly summary?: string;
  readonly order: number;
  readonly segments: readonly string[];
  readonly path: readonly AtlasHerbTaxonReference[];
  readonly href: Route;
}

interface HerbTaxonContext {
  readonly taxa: readonly ResolvedHerbTaxon[];
  readonly byKey: ReadonlyMap<HerbTaxonKey, ResolvedHerbTaxon>;
}

function findVariant(
  image: WorkImage,
  kind: "thumbnail" | "preview",
): ImageVariant | undefined {
  return image.variants.find(
    (variant) =>
      variant.kind === kind &&
      (variant.format === "webp" || variant.format === "avif"),
  );
}

function toPublicImage(
  image: WorkImage,
  locale: Locale,
): AtlasPublicImage | null {
  const title = image.title?.[locale]?.trim() || image.alt[locale]?.trim();
  const alt = image.alt[locale]?.trim();
  const thumbnail = findVariant(image, "thumbnail");
  const preview = findVariant(image, "preview");

  if (!title || !alt || !thumbnail || !preview) {
    return null;
  }

  return { id: image.id, title, alt, thumbnail, preview };
}

function getHerbTaxonContext(locale: Locale): HerbTaxonContext {
  const publishedTaxa = herbTaxa
    .filter((taxon) => isPublished(taxon.publication))
    .sort((left, right) => left.order - right.order);
  const rawByKey = new Map(publishedTaxa.map((taxon) => [taxon.key, taxon]));
  const resolvedByKey = new Map<HerbTaxonKey, ResolvedHerbTaxon>();
  const resolving = new Set<HerbTaxonKey>();

  function resolve(key: HerbTaxonKey): ResolvedHerbTaxon {
    const existing = resolvedByKey.get(key);

    if (existing) {
      return existing;
    }

    const taxon = rawByKey.get(key);

    if (!taxon) {
      throw new Error(`本草分类不存在或尚未发布：${key}`);
    }
    if (resolving.has(key) || taxon.parentKey === key) {
      throw new Error(`本草分类形成循环：${key}`);
    }

    resolving.add(key);
    const parent = taxon.parentKey ? resolve(taxon.parentKey) : undefined;
    const name = taxon.name[locale]?.trim();
    const summary = taxon.summary?.[locale]?.trim() || undefined;

    if (!name) {
      throw new Error(`本草分类缺少当前语言名称：${key}/${locale}`);
    }

    const segments = [...(parent?.segments ?? []), taxon.slug];
    const href = `/${locale}/atlas/herbs/${segments.join("/")}` as Route;
    const reference: AtlasHerbTaxonReference = { key, name, href };
    const resolved: ResolvedHerbTaxon = {
      key,
      slug: taxon.slug,
      parentKey: taxon.parentKey,
      name,
      summary,
      order: taxon.order,
      segments,
      path: [...(parent?.path ?? []), reference],
      href,
    };

    resolving.delete(key);
    resolvedByKey.set(key, resolved);
    return resolved;
  }

  const taxa = publishedTaxa.map((taxon) => resolve(taxon.key));
  const pathKeys = new Set<string>();

  for (const taxon of taxa) {
    const pathKey = taxon.segments.join("/");

    if (pathKeys.has(pathKey)) {
      throw new Error(`本草分类路径重复：${pathKey}`);
    }
    pathKeys.add(pathKey);
  }

  return { taxa, byKey: resolvedByKey };
}

function getPublishedCatalogWorks(locale: Locale): readonly AtlasCatalogWork[] {
  const categoryNames = new Map(
    workCategories
      .filter((category) => isPublished(category.publication))
      .map((category) => [category.key, category.name[locale]?.trim()]),
  );
  const herbContext = getHerbTaxonContext(locale);

  return works.flatMap((work): AtlasCatalogWork[] => {
    if (!isPublished(work.publication)) {
      return [];
    }

    const title = work.title[locale]?.trim();
    const categoryName = categoryNames.get(work.category);
    const herbTaxon =
      work.category === "herbs" && work.herbTaxonKey
        ? herbContext.byKey.get(work.herbTaxonKey)
        : undefined;
    const group = imageGroups.find(
      (candidate) =>
        candidate.id === work.imageGroupId || candidate.workId === work.id,
    );
    const orderedImages = group
      ? [...group.images].sort((left, right) => left.order - right.order)
      : [];
    const cover = orderedImages
      .map((image) => toPublicImage(image, locale))
      .find((image): image is AtlasPublicImage => Boolean(image));

    if (
      !title ||
      !categoryName ||
      !cover ||
      (work.category === "herbs" && !herbTaxon)
    ) {
      return [];
    }

    const summary = work.summary?.[locale]?.trim() || undefined;

    return [
      {
        id: work.id,
        slug: work.slug,
        title,
        summary,
        code: work.code,
        category: work.category,
        categoryName,
        herbTaxonKey: work.herbTaxonKey,
        herbTaxonPath: herbTaxon?.path,
        href: `/${locale}/atlas/${work.slug}` as Route,
        searchText: [
          title,
          summary,
          work.slug,
          work.code,
          categoryName,
          ...work.tags,
          ...orderedImages.map((image) => image.title?.[locale]),
          ...(herbTaxon?.path.map((item) => item.name) ?? []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLocaleLowerCase(locale),
        image: {
          id: cover.id,
          title: cover.title,
          alt: cover.alt,
          thumbnail: cover.thumbnail,
        },
      },
    ];
  });
}

function getCategories(
  locale: Locale,
  allWorks: readonly AtlasCatalogWork[],
): readonly AtlasCategoryOption[] {
  return workCategories
    .filter((category) => isPublished(category.publication))
    .sort((left, right) => left.order - right.order)
    .map((category) => ({
      key: category.key,
      name: category.name[locale],
      summary: category.summary?.[locale],
      href: `/${locale}/atlas/${category.key}` as Route,
      count: allWorks.filter((work) => work.category === category.key).length,
    }));
}

function resolveTaxonomyPath(
  context: HerbTaxonContext,
  taxonomySlugs: readonly string[],
): ResolvedHerbTaxon | undefined | null {
  if (taxonomySlugs.length === 0) {
    return undefined;
  }

  let parentKey: HerbTaxonKey | undefined;
  let current: ResolvedHerbTaxon | undefined;

  for (const slug of taxonomySlugs) {
    current = context.taxa.find(
      (taxon) => taxon.parentKey === parentKey && taxon.slug === slug,
    );

    if (!current) {
      return null;
    }

    parentKey = current.key;
  }

  return current;
}

function includesTaxon(
  work: AtlasCatalogWork,
  taxonKey: HerbTaxonKey,
): boolean {
  return Boolean(
    work.herbTaxonPath?.some((taxon) => taxon.key === taxonKey),
  );
}

export function selectAtlasCatalog(
  locale: Locale,
  fixedCategory?: WorkCategoryKey,
): AtlasCatalogData {
  const allWorks = getPublishedCatalogWorks(locale);
  const categories = getCategories(locale, allWorks);

  return {
    works: fixedCategory
      ? allWorks.filter((work) => work.category === fixedCategory)
      : allWorks,
    categories,
    activeCategory: fixedCategory
      ? categories.find((category) => category.key === fixedCategory)
      : undefined,
  };
}

export function selectHerbCatalog(
  locale: Locale,
  taxonomySlugs: readonly string[] = [],
): AtlasCatalogData | null {
  const allWorks = getPublishedCatalogWorks(locale);
  const categories = getCategories(locale, allWorks);
  const activeCategory = categories.find((category) => category.key === "herbs");
  const context = getHerbTaxonContext(locale);
  const activeTaxon = resolveTaxonomyPath(context, taxonomySlugs);

  if (!activeCategory || activeTaxon === null) {
    return null;
  }

  const herbWorks = allWorks.filter((work) => work.category === "herbs");
  const visibleWorks = activeTaxon
    ? herbWorks.filter((work) => includesTaxon(work, activeTaxon.key))
    : herbWorks;
  const navigationParent = activeTaxon
    ? context.taxa.some((taxon) => taxon.parentKey === activeTaxon.key)
      ? activeTaxon
      : activeTaxon.parentKey
        ? context.byKey.get(activeTaxon.parentKey)
        : activeTaxon
    : undefined;
  const navigationTaxa = navigationParent
    ? context.taxa.filter(
        (taxon) => taxon.parentKey === navigationParent.key,
      )
    : context.taxa.filter((taxon) => !taxon.parentKey);
  const breadcrumbs: AtlasBreadcrumb[] = [
    {
      name: activeCategory.name,
      href: `/${locale}/atlas/herbs` as Route,
    },
    ...(activeTaxon?.path ?? []),
  ];

  return {
    works: visibleWorks,
    categories,
    activeCategory,
    activeHerbTaxon: activeTaxon
      ? {
          key: activeTaxon.key,
          name: activeTaxon.name,
          summary: activeTaxon.summary,
          path: activeTaxon.path,
        }
      : undefined,
    breadcrumbs,
    herbTaxonNavigation: {
      label: navigationParent?.name ?? activeCategory.name,
      summary: navigationParent?.summary ?? activeCategory.summary,
      count: navigationParent
        ? herbWorks.filter((work) => includesTaxon(work, navigationParent.key))
            .length
        : herbWorks.length,
      isChapterDirectory: !navigationParent,
      options: navigationTaxa.map((taxon, index) => ({
        key: taxon.key,
        name: taxon.name,
        summary: taxon.summary,
        href: taxon.href,
        count: herbWorks.filter((work) => includesTaxon(work, taxon.key)).length,
        isActive: activeTaxon?.key === taxon.key,
        ordinal: index + 1,
      })),
    },
  };
}

export function getHerbTaxonStaticParams(): {
  taxonomy: string[];
}[] {
  const context = getHerbTaxonContext("zh-CN");

  return context.taxa.map((taxon) => ({
    taxonomy: [...taxon.segments],
  }));
}

export function selectAtlasDetail(
  locale: Locale,
  slug: string,
): AtlasDetailData | null {
  const work = works.find(
    (candidate) => candidate.slug === slug && isPublished(candidate.publication),
  );

  if (!work) {
    return null;
  }

  const title = work.title[locale]?.trim();
  const category = workCategories.find(
    (candidate) =>
      candidate.key === work.category && isPublished(candidate.publication),
  );
  const categoryName = category?.name[locale]?.trim();
  const herbContext = getHerbTaxonContext(locale);
  const herbTaxon =
    work.category === "herbs" && work.herbTaxonKey
      ? herbContext.byKey.get(work.herbTaxonKey)
      : undefined;
  const group = imageGroups.find(
    (candidate) =>
      candidate.id === work.imageGroupId || candidate.workId === work.id,
  );
  const images = group
    ? [...group.images]
        .sort((left, right) => left.order - right.order)
        .map((image) => toPublicImage(image, locale))
        .filter((image): image is AtlasPublicImage => Boolean(image))
    : [];

  if (
    !title ||
    !categoryName ||
    images.length === 0 ||
    (work.category === "herbs" && !herbTaxon)
  ) {
    return null;
  }

  const registrationNumber =
    work.rights.copyrightStatus === "registered" &&
    work.rights.registrationNumber &&
    work.rights.evidenceRef
      ? work.rights.registrationNumber
      : undefined;
  const relatedWorks = getPublishedCatalogWorks(locale)
    .filter(
      (candidate) =>
        candidate.id !== work.id &&
        candidate.category === work.category &&
        (!work.herbTaxonKey ||
          candidate.herbTaxonKey === work.herbTaxonKey),
    )
    .slice(0, 3);

  return {
    id: work.id,
    slug: work.slug,
    title,
    summary: work.summary?.[locale]?.trim() || undefined,
    code: work.code,
    category: work.category,
    categoryName,
    herbTaxonPath: herbTaxon?.path,
    backHref:
      herbTaxon?.href ??
      (`/${locale}/atlas/${work.category}` as Route),
    backLabel: herbTaxon?.name ?? categoryName,
    registrationNumber,
    images,
    relatedWorks,
  };
}

export function getAtlasSlugs(): readonly string[] {
  return works
    .filter((work) => isPublished(work.publication))
    .map((work) => work.slug);
}
