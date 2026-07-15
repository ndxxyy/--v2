import type { Metadata } from "next";

import { HomePage as HomePageView, selectHomePageData } from "@/features/home";
import { HOME_COPY } from "@/features/home/copy";
import { requireLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);
  const copy = HOME_COPY[locale].hero;

  return createPageMetadata({
    locale,
    title: copy.statement,
    description: copy.description,
  });
}

export default async function HomeRoutePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);
  const data = selectHomePageData(locale);
  const initialNow = new Date().toISOString();

  return <HomePageView data={data} initialNow={initialNow} locale={locale} />;
}
