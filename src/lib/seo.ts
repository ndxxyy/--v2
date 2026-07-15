import type { Metadata } from "next";

import type { Locale } from "@/i18n/config";
import { LOCALES } from "@/i18n/config";

const DEFAULT_SITE_ORIGIN =
  "https://xiao-zhong-qi-yi-v2.zhongzhaoyuan165.workers.dev";

const SITE_NAMES: Readonly<Record<Locale, string>> = {
  "zh-CN": "小钟岐医",
  "zh-Hant": "小鐘岐醫",
  en: "Xiao Zhong Qi Yi",
};

const OPEN_GRAPH_LOCALES: Readonly<Record<Locale, string>> = {
  "zh-CN": "zh_CN",
  "zh-Hant": "zh_TW",
  en: "en_US",
};

const DEFAULT_SHARE_IMAGE = {
  src: "/images/brand/xiao-zhong-qiyi-seal.png",
  width: 1024,
  height: 1024,
} as const;

function resolveSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = new URL(configured || DEFAULT_SITE_ORIGIN);

  if (url.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL 必须使用 https:// 地址。");
  }

  url.pathname = "/";
  url.search = "";
  url.hash = "";
  return url;
}

export const SITE_URL = resolveSiteUrl();

export function getSiteName(locale: Locale): string {
  return SITE_NAMES[locale];
}

export function getAbsoluteUrl(pathname: string): string {
  return new URL(pathname, SITE_URL).toString();
}

export function getLocalizedPath(locale: Locale, pathname = ""): string {
  const suffix = pathname && pathname !== "/" ? `/${pathname.replace(/^\/+/, "")}` : "";
  return `/${locale}${suffix}`;
}

export function getLanguageAlternates(pathname = ""): Record<string, string> {
  const languages = Object.fromEntries(
    LOCALES.map((locale) => [locale, getAbsoluteUrl(getLocalizedPath(locale, pathname))]),
  );

  return {
    ...languages,
    "x-default": getAbsoluteUrl(getLocalizedPath("zh-CN", pathname)),
  };
}

interface PageMetadataInput {
  readonly locale: Locale;
  readonly pathname?: string;
  readonly title: string;
  readonly description: string;
  readonly image?: {
    readonly src: string;
    readonly width: number;
    readonly height: number;
    readonly alt?: string;
  };
}

export function createPageMetadata({
  description,
  image = DEFAULT_SHARE_IMAGE,
  locale,
  pathname = "",
  title,
}: PageMetadataInput): Metadata {
  const siteName = getSiteName(locale);
  const separator = locale === "en" ? " | " : "｜";
  const fullTitle = title.includes(siteName) ? title : `${title}${separator}${siteName}`;
  const canonicalPath = getLocalizedPath(locale, pathname);
  const imageAlt = image.alt ?? fullTitle;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: getLanguageAlternates(pathname),
    },
    openGraph: {
      type: "website",
      siteName,
      title: fullTitle,
      description,
      url: canonicalPath,
      locale: OPEN_GRAPH_LOCALES[locale],
      alternateLocale: LOCALES.filter((candidate) => candidate !== locale).map(
        (candidate) => OPEN_GRAPH_LOCALES[candidate],
      ),
      images: [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.src],
    },
  };
}
