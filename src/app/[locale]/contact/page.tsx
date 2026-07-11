import { requireLocale } from "@/i18n/server";
import { ContactPage as ContactContent, getWorkReference } from "@/features/trust";

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ work?: string | string[] }>;
}) {
  const { locale: localeParam } = await params;
  const query = await searchParams;
  const locale = requireLocale(localeParam);

  return <ContactContent locale={locale} workReference={getWorkReference(query.work)} />;
}
