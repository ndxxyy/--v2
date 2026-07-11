import { HomePage as HomePageView, selectHomePageData } from "@/features/home";
import { requireLocale } from "@/i18n/server";

export default async function HomeRoutePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);
  const data = selectHomePageData(locale);

  return <HomePageView data={data} locale={locale} />;
}
