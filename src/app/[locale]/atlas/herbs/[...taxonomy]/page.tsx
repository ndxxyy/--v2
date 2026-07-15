import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  AtlasCatalogPage,
  getHerbTaxonStaticParams,
  selectHerbCatalog,
} from "@/features/atlas";
import { ATLAS_COPY } from "@/features/atlas/copy";
import { requireLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getHerbTaxonStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; taxonomy: string[] }>;
}): Promise<Metadata> {
  const { locale: localeParam, taxonomy } = await params;
  const locale = requireLocale(localeParam);
  const data = selectHerbCatalog(locale, taxonomy);
  const copy = ATLAS_COPY[locale].catalog;

  if (!data) {
    return {};
  }

  return createPageMetadata({
    locale,
    pathname: `/atlas/herbs/${taxonomy.join("/")}`,
    title: data.activeHerbTaxon?.name ?? data.activeCategory?.name ?? copy.title,
    description:
      data.activeHerbTaxon?.summary ??
      data.activeCategory?.summary ??
      copy.description,
  });
}

export default async function HerbTaxonPage({
  params,
}: {
  params: Promise<{ locale: string; taxonomy: string[] }>;
}) {
  const { locale: localeParam, taxonomy } = await params;
  const locale = requireLocale(localeParam);
  const data = selectHerbCatalog(locale, taxonomy);

  if (!data) {
    notFound();
  }

  return <AtlasCatalogPage data={data} locale={locale} />;
}
