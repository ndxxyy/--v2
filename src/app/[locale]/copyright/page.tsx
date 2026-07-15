import type { Metadata } from "next";

import { requireLocale } from "@/i18n/server";
import { CopyrightPage as CopyrightContent } from "@/features/trust";
import { TRUST_COPY } from "@/features/trust/copy";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);
  const copy = TRUST_COPY[locale].copyright;

  return createPageMetadata({
    locale,
    pathname: "/copyright",
    title: copy.title,
    description: copy.lede,
  });
}

export default async function CopyrightPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);

  return <CopyrightContent locale={locale} />;
}
