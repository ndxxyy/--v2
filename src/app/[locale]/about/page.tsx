import type { Metadata } from "next";

import { requireLocale } from "@/i18n/server";
import { AboutPage as AboutContent } from "@/features/trust";
import { TRUST_COPY } from "@/features/trust/copy";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);
  const copy = TRUST_COPY[locale].about;

  return createPageMetadata({
    locale,
    pathname: "/about",
    title: copy.title,
    description: copy.lede,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);

  return <AboutContent locale={locale} />;
}
