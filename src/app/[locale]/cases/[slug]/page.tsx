import { notFound } from "next/navigation";

import { ClinicalCaseDetailPage, selectPublicCaseBySlug } from "@/features/cases";
import { requireLocale } from "@/i18n/server";

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
