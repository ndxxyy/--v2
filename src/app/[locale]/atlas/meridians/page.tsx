import type { Metadata } from "next";

import { AtlasCatalogPage, selectAtlasCatalog } from "@/features/atlas";
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
  const data = selectAtlasCatalog(locale, "meridians");
  const copy = ATLAS_COPY[locale].catalog;

  return createPageMetadata({
    locale,
    pathname: "/atlas/meridians",
    title: data.activeCategory?.name ?? copy.title,
    description: data.activeCategory?.summary ?? copy.description,
  });
}

export default async function MeridianAtlasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);

  return (
    <AtlasCatalogPage
      data={selectAtlasCatalog(locale, "meridians")}
      locale={locale}
    />
  );
}
