import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  AtlasDetailPage,
  getAtlasSlugs,
  selectAtlasDetail,
} from "@/features/atlas";
import { ATLAS_COPY } from "@/features/atlas/copy";
import { requireLocale } from "@/i18n/server";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAtlasSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = requireLocale(localeParam);
  const work = selectAtlasDetail(locale, slug);

  if (!work) {
    return {};
  }

  const preview = work.images[0]?.preview;

  return createPageMetadata({
    locale,
    pathname: `/atlas/${slug}`,
    title: work.title,
    description: work.summary ?? ATLAS_COPY[locale].catalog.description,
    image: preview
      ? {
          src: preview.src,
          width: preview.width,
          height: preview.height,
          alt: work.images[0]?.alt ?? work.title,
        }
      : undefined,
  });
}

export default async function AtlasWorkPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = requireLocale(localeParam);
  const work = selectAtlasDetail(locale, slug);

  if (!work) {
    notFound();
  }

  return <AtlasDetailPage locale={locale} work={work} />;
}
