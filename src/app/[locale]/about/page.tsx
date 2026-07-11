import { requireLocale } from "@/i18n/server";
import { AboutPage as AboutContent } from "@/features/trust";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);

  return <AboutContent locale={locale} />;
}
