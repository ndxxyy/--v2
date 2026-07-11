import type { ReactNode } from "react";

import { SiteFrame } from "@/components/layout";
import { LOCALES } from "@/i18n/config";
import { requireLocale } from "@/i18n/server";

import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);

  return (
    <html data-scroll-behavior="smooth" lang={locale}>
      <body className="min-w-0">
        <SiteFrame locale={locale}>{children}</SiteFrame>
      </body>
    </html>
  );
}
