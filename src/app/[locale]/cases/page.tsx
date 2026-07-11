import { ClinicalCasesPage, selectCaseDirectory } from "@/features/cases";
import { requireLocale } from "@/i18n/server";

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
