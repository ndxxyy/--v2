import { imageGroups } from "@/data/image-groups";
import type { Route } from "next";
import { workCategories } from "@/data/work-categories";
import { works } from "@/data/works";
import type {
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

export interface AtlasCatalogWork {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly summary?: string;
  readonly code?: string;
  readonly category: WorkCategoryKey;
  readonly categoryName: string;
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

export interface AtlasCatalogData {
  readonly works: readonly AtlasCatalogWork[];
  readonly categories: readonly AtlasCategoryOption[];
  readonly activeCategory?: AtlasCategoryOption;
}

export interface AtlasDetailData {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly summary?: string;
  readonly code?: string;
  readonly category: WorkCategoryKey;
  readonly categoryName: string;
  readonly registrationNumber?: string;
  readonly images: readonly AtlasPublicImage[];
  readonly relatedWorks: readonly AtlasCatalogWork[];
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

function getPublishedCatalogWorks(locale: Locale): readonly AtlasCatalogWork[] {
  const categoryNames = new Map(
    workCategories
      .filter((category) => isPublished(category.publication))
      .map((category) => [category.key, category.name[locale]?.trim()]),
  );

  return works.flatMap((work): AtlasCatalogWork[] => {
    if (!isPublished(work.publication)) {
      return [];
    }

    const title = work.title[locale]?.trim();
    const categoryName = categoryNames.get(work.category);
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

    if (!title || !categoryName || !cover) {
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
        href: `/${locale}/atlas/${work.slug}` as Route,
        searchText: [
          title,
          summary,
          work.code,
          categoryName,
          ...work.tags,
          ...orderedImages.map((image) => image.title?.[locale]),
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

export function selectAtlasCatalog(
  locale: Locale,
  fixedCategory?: WorkCategoryKey,
): AtlasCatalogData {
  const allWorks = getPublishedCatalogWorks(locale);
  const categories = workCategories
    .filter((category) => isPublished(category.publication))
    .map((category) => ({
      key: category.key,
      name: category.name[locale],
      summary: category.summary?.[locale],
      href: `/${locale}/atlas/${category.key}` as Route,
      count: allWorks.filter((work) => work.category === category.key).length,
    }));

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

  if (!title || !categoryName || images.length === 0) {
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
        candidate.id !== work.id && candidate.category === work.category,
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
