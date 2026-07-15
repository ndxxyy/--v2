import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AtlasCatalogPage, selectHerbCatalog } from "@/features/atlas";
import { ATLAS_COPY } from "@/features/atlas/copy";
import { requireLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);
  const data = selectHerbCatalog(locale);
  const copy = ATLAS_COPY[locale].catalog;

  return createPageMetadata({
    locale,
    pathname: "/atlas/herbs",
    title: data?.activeCategory?.name ?? copy.title,
    description: data?.activeCategory?.summary ?? copy.description,
  });
}

export default async function HerbAtlasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);

  const data = selectHerbCatalog(locale);

  if (!data) {
    notFound();
  }

  return <AtlasCatalogPage data={data} locale={locale} />;
}
