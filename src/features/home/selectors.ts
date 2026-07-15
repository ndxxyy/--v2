import { caseCategories } from "@/data/case-categories";
import { clinicalCases } from "@/data/cases";
import { imageGroups } from "@/data/image-groups";
import { workCategories } from "@/data/work-categories";
import { works } from "@/data/works";
import { isPublishableClinicalCase, isPublished } from "@/domain/publication";
import type { ImageVariant, WorkImage } from "@/domain/content";
import type { Locale } from "@/i18n/config";

export type HomeImageRatio = "portrait" | "landscape" | "square";

export interface HomeWork {
  readonly id: string;
  readonly title: string;
  readonly href: Route;
  readonly category?: string;
  readonly code?: string;
  readonly summary?: string;
  readonly image: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
    readonly ratio: HomeImageRatio;
  };
}

export interface HomeClinicalCase {
  readonly id: string;
  readonly title: string;
  readonly href: Route;
  readonly category?: string;
  readonly publishedAt?: string;
  readonly summary?: string;
}

export interface HomePageData {
  readonly heroWorks: readonly HomeWork[];
  readonly featuredWorks: readonly HomeWork[];
  readonly featuredCases: readonly HomeClinicalCase[];
  readonly caseCategoryNames: readonly string[];
  readonly stats: {
    readonly totalWorks: number;
    readonly meridianWorks: number;
    readonly herbWorks: number;
    readonly imagePlates: number;
  };
}

function classifyRatio(variant: ImageVariant): HomeImageRatio {
  const ratio = variant.width / variant.height;

  if (ratio > 1.1) {
    return "landscape";
  }

  if (ratio < 0.9) {
    return "portrait";
  }

  return "square";
}

function selectThumbnail(images: readonly WorkImage[]): {
  readonly image: WorkImage;
  readonly variant: ImageVariant;
} | null {
  const orderedImages = [...images].sort((left, right) => {
    if (left.role === "cover" && right.role !== "cover") {
      return -1;
    }

    if (right.role === "cover" && left.role !== "cover") {
      return 1;
    }

    return left.order - right.order;
  });

  for (const image of orderedImages) {
    const variant = image.variants.find(
      (candidate) =>
        candidate.kind === "thumbnail" &&
        (candidate.format === "webp" || candidate.format === "avif"),
    );

    if (variant) {
      return { image, variant };
    }
  }

  return null;
}

function mapWorkToHome(
  work: (typeof works)[number],
  locale: Locale,
  categoryNames: ReadonlyMap<string, string>,
): HomeWork | null {
  const imageGroup = imageGroups.find(
    (group) => group.id === work.imageGroupId || group.workId === work.id,
  );
  const selectedImage = imageGroup ? selectThumbnail(imageGroup.images) : null;
  const title = work.title[locale]?.trim();

  if (!selectedImage || !title) {
    return null;
  }

  const { image, variant } = selectedImage;
  const alt = image.alt[locale]?.trim();

  if (!alt) {
    return null;
  }

  return {
    id: work.id,
    title,
    href: `/${locale}/atlas/${work.slug}` as Route,
    category: categoryNames.get(work.category),
    code: work.code,
    summary: work.summary?.[locale],
    image: {
      src: variant.src,
      width: variant.width,
      height: variant.height,
      alt,
      ratio: classifyRatio(variant),
    },
  };
}

function selectPublicWorks(locale: Locale): readonly HomeWork[] {
  const categoryNames = new Map(
    workCategories
      .filter((category) => isPublished(category.publication))
      .map((category) => [category.key, category.name[locale]]),
  );

  return works
    .filter((work) => isPublished(work.publication))
    .flatMap((work) => {
      const mapped = mapWorkToHome(work, locale, categoryNames);
      return mapped ? [mapped] : [];
    });
}

function selectFeaturedCases(locale: Locale, limit: number): readonly HomeClinicalCase[] {
  const categoryNames = new Map(
    caseCategories
      .filter((category) => isPublished(category.publication))
      .map((category) => [category.key, category.name[locale]]),
  );

  return clinicalCases
    .filter(
      (clinicalCase) =>
        isPublishableClinicalCase(clinicalCase) &&
        Boolean(clinicalCase.content[locale]?.length),
    )
    .map((clinicalCase) => ({
      id: clinicalCase.id,
      title: clinicalCase.title[locale],
      href: `/${locale}/cases/${clinicalCase.slug}` as Route,
      category: categoryNames.get(clinicalCase.category),
      publishedAt: clinicalCase.publication.publishedAt,
      summary: clinicalCase.summary?.[locale],
    }))
    .slice(0, limit);
}

export function selectHomePageData(locale: Locale): HomePageData {
  const publicWorks = selectPublicWorks(locale);
  const preferredHeroSlugs = [
    "stomach-meridian-atlas",
    "cinnamon-twig-herb-atlas",
    "nine-needles-atlas",
    "mint-herb-atlas",
    "decoction-dosage-form-atlas",
    "home-decoction-guide",
  ] as const;
  const heroWorks = preferredHeroSlugs.flatMap((slug) => {
    const work = works.find((candidate) => candidate.slug === slug);
    const selected = work ? publicWorks.find((candidate) => candidate.id === work.id) : null;
    return selected ? [selected] : [];
  });
  const heroIds = new Set(heroWorks.map((work) => work.id));
  const featuredIds = new Set(
    works
      .filter((work) => work.featured && isPublished(work.publication))
      .map((work) => work.id),
  );
  const visibleWorkIds = new Set(publicWorks.map((work) => work.id));
  const imagePlates = imageGroups
    .filter((group) => visibleWorkIds.has(group.workId))
    .reduce((total, group) => total + group.images.length, 0);

  return {
    heroWorks,
    featuredWorks: publicWorks
      .filter((work) => featuredIds.has(work.id) && !heroIds.has(work.id))
      .slice(0, 3),
    featuredCases: selectFeaturedCases(locale, 3),
    caseCategoryNames: caseCategories
      .filter((category) => isPublished(category.publication))
      .sort((left, right) => left.order - right.order)
      .map((category) => category.name[locale]),
    stats: {
      totalWorks: publicWorks.length,
      meridianWorks: works.filter(
        (work) =>
          visibleWorkIds.has(work.id) && work.category === "meridians",
      ).length,
      herbWorks: works.filter(
        (work) => visibleWorkIds.has(work.id) && work.category === "herbs",
      ).length,
      imagePlates,
    },
  };
}
import type { Route } from "next";
