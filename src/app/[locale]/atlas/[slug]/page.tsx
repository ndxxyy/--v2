import { notFound } from "next/navigation";

import {
  AtlasDetailPage,
  getAtlasSlugs,
  selectAtlasDetail,
} from "@/features/atlas";
import { requireLocale } from "@/i18n/server";

export function generateStaticParams() {
  return getAtlasSlugs().map((slug) => ({ slug }));
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
