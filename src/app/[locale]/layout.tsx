import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFrame } from "@/components/layout";
import { LOCALES } from "@/i18n/config";
import { requireLocale } from "@/i18n/server";
import { getSiteName, SITE_URL } from "@/lib/seo";

import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = requireLocale(localeParam);
  const siteName = getSiteName(locale);

  return {
    metadataBase: SITE_URL,
    applicationName: siteName,
    creator: siteName,
    publisher: siteName,
    icons: {
      icon: [{ url: "/images/brand/xiao-zhong-qiyi-seal.png", type: "image/png" }],
      apple: [{ url: "/images/brand/xiao-zhong-qiyi-seal.png", type: "image/png" }],
    },
    formatDetection: {
      address: false,
      email: false,
      telephone: false,
    },
    referrer: "strict-origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
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
