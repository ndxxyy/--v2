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
  const copy = ATLAS_COPY[locale].catalog;

  return createPageMetadata({
    locale,
    pathname: "/atlas",
    title: copy.title,
    description: copy.description,
  });
}

export default async function AtlasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);

  return <AtlasCatalogPage data={selectAtlasCatalog(locale)} locale={locale} />;
}
