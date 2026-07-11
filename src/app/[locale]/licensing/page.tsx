import { requireLocale } from "@/i18n/server";
import { getWorkReference, LicensingPage as LicensingContent } from "@/features/trust";

export default async function LicensingPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ work?: string | string[] }>;
}) {
  const { locale: localeParam } = await params;
  const query = await searchParams;
  const locale = requireLocale(localeParam);

  return <LicensingContent locale={locale} workReference={getWorkReference(query.work)} />;
}
