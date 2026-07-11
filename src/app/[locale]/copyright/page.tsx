import { requireLocale } from "@/i18n/server";
import { CopyrightPage as CopyrightContent } from "@/features/trust";

export default async function CopyrightPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);

  return <CopyrightContent locale={locale} />;
}
