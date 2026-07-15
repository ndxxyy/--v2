import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClinicalCaseDetailPage, selectPublicCaseBySlug } from "@/features/cases";
import { CASES_COPY } from "@/features/cases/copy";
import { requireLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = requireLocale(localeParam);
  const clinicalCase = selectPublicCaseBySlug(locale, slug);

  if (!clinicalCase) {
    return {};
  }

  return createPageMetadata({
    locale,
    pathname: `/cases/${slug}`,
    title: clinicalCase.title,
    description: clinicalCase.summary ?? CASES_COPY[locale].description,
  });
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = requireLocale(localeParam);
  const clinicalCase = selectPublicCaseBySlug(locale, slug);

  if (!clinicalCase) {
    notFound();
  }

  return <ClinicalCaseDetailPage clinicalCase={clinicalCase} locale={locale} />;
}
