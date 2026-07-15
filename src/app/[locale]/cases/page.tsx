import type { Metadata } from "next";

import { ClinicalCasesPage, selectCaseDirectory } from "@/features/cases";
import { CASES_COPY } from "@/features/cases/copy";
import { requireLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);
  const copy = CASES_COPY[locale];

  return createPageMetadata({
    locale,
    pathname: "/cases",
    title: copy.title,
    description: copy.description,
  });
}

export default async function CasesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);
  const { category } = await searchParams;
  const requestedCategory = typeof category === "string" ? category : undefined;

  return <ClinicalCasesPage data={selectCaseDirectory(locale, requestedCategory)} locale={locale} />;
}
