import type { Route } from "next";

import { caseCategories } from "@/data/case-categories";
import { clinicalCases } from "@/data/cases";
import type { CaseCategoryKey, ClinicalCase, ContentBlock } from "@/domain/content";
import { isPublishableClinicalCase, isPublished } from "@/domain/publication";
import type { Locale } from "@/i18n/config";

export type PublicCaseContentBlock = Exclude<ContentBlock, { readonly type: "image" }>;

export interface PublicCaseSummary {
  readonly id: string;
  readonly slug: string;
  readonly href: Route;
  readonly title: string;
  readonly summary?: string;
  readonly categoryKey: CaseCategoryKey;
  readonly categoryName: string;
  readonly publishedAt: string;
  readonly publishedAtLabel: string;
}

export interface PublicCaseDetail extends PublicCaseSummary {
  readonly content: readonly PublicCaseContentBlock[];
}

export interface PublicCaseCategory {
  readonly key: CaseCategoryKey;
  readonly name: string;
  readonly summary?: string;
  readonly count: number;
}

export interface CaseDirectoryData {
  readonly cases: readonly PublicCaseSummary[];
  readonly allCasesCount: number;
  readonly categories: readonly PublicCaseCategory[];
  readonly filterCategories: readonly PublicCaseCategory[];
  readonly activeCategory?: PublicCaseCategory;
}

function hasSafePublicContent(
  blocks: readonly ContentBlock[] | undefined,
): blocks is readonly PublicCaseContentBlock[] {
  return Boolean(blocks?.length) && blocks!.every((block) => block.type !== "image");
}

function hasValidPublicationDate(clinicalCase: ClinicalCase): clinicalCase is ClinicalCase & {
  readonly publication: ClinicalCase["publication"] & { readonly publishedAt: string };
} {
  const publishedAt = clinicalCase.publication.publishedAt;

  return Boolean(publishedAt && !Number.isNaN(Date.parse(publishedAt)));
}

function formatPublicationDate(locale: Locale, value: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}

function selectPublishedCategories(locale: Locale): readonly PublicCaseCategory[] {
  return caseCategories
    .filter((category) => isPublished(category.publication))
    .sort((left, right) => left.order - right.order)
    .map((category) => ({
      key: category.key,
      name: category.name[locale].trim(),
      summary: category.summary?.[locale]?.trim() || undefined,
      count: 0,
    }));
}

function selectAllPublicCases(locale: Locale): readonly PublicCaseDetail[] {
  const categories = new Map(
    selectPublishedCategories(locale).map((category) => [category.key, category]),
  );

  return clinicalCases
    .flatMap((clinicalCase): PublicCaseDetail[] => {
      const title = clinicalCase.title[locale]?.trim();
      const content = clinicalCase.content[locale];
      const category = categories.get(clinicalCase.category);

      if (
        !title ||
        !category ||
        !isPublishableClinicalCase(clinicalCase) ||
        !hasValidPublicationDate(clinicalCase) ||
        !hasSafePublicContent(content)
      ) {
        return [];
      }

      return [
        {
          id: clinicalCase.id,
          slug: clinicalCase.slug,
          href: `/${locale}/cases/${clinicalCase.slug}` as Route,
          title,
          summary: clinicalCase.summary?.[locale]?.trim() || undefined,
          categoryKey: clinicalCase.category,
          categoryName: category.name,
          publishedAt: clinicalCase.publication.publishedAt,
          publishedAtLabel: formatPublicationDate(locale, clinicalCase.publication.publishedAt),
          content,
        },
      ];
    })
    .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));
}

export function selectCaseDirectory(
  locale: Locale,
  requestedCategory?: string,
): CaseDirectoryData {
  const allCases = selectAllPublicCases(locale);
  const counts = new Map<CaseCategoryKey, number>();

  for (const clinicalCase of allCases) {
    counts.set(clinicalCase.categoryKey, (counts.get(clinicalCase.categoryKey) ?? 0) + 1);
  }

  const categories = selectPublishedCategories(locale).map((category) => ({
    ...category,
    count: counts.get(category.key) ?? 0,
  }));
  const filterCategories = categories.filter((category) => category.count > 0);
  const activeCategory = filterCategories.find((category) => category.key === requestedCategory);

  return {
    cases: activeCategory
      ? allCases.filter((clinicalCase) => clinicalCase.categoryKey === activeCategory.key)
      : allCases,
    allCasesCount: allCases.length,
    categories,
    filterCategories,
    activeCategory,
  };
}

export function selectPublicCaseBySlug(locale: Locale, slug: string): PublicCaseDetail | null {
  return selectAllPublicCases(locale).find((clinicalCase) => clinicalCase.slug === slug) ?? null;
}
