import type { Metadata } from "next";

import { requireLocale } from "@/i18n/server";
import { getWorkReference, LicensingPage as LicensingContent } from "@/features/trust";
import { TRUST_COPY } from "@/features/trust/copy";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);
  const copy = TRUST_COPY[locale].licensing;

  return createPageMetadata({
    locale,
    pathname: "/licensing",
    title: copy.title,
    description: copy.lede,
  });
}

export default async function LicensingPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ work?: string | string[] }>;
}) {
  const { locale: localeParam } = await params;
  const query = await searchParams;
  const locale = requireLocale(localeParam);

  return <LicensingContent locale={locale} workReference={getWorkReference(query.work)} />;
}
