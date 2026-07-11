import type { Route } from "next";

import type { RouteLabelKey } from "@/i18n/route-labels";
import type { Locale } from "@/i18n/config";

export interface NavigationItem {
  readonly key: RouteLabelKey;
  readonly path: string;
}

export const PRIMARY_NAV_ITEMS: readonly NavigationItem[] = [
  { key: "home", path: "" },
  { key: "atlas", path: "/atlas" },
  { key: "cases", path: "/cases" },
  { key: "licensing", path: "/licensing" },
  { key: "about", path: "/about" },
  { key: "contact", path: "/contact" },
];

export const CONTENT_NAV_ITEMS = PRIMARY_NAV_ITEMS.slice(0, 3);
export const TRUST_NAV_ITEMS = PRIMARY_NAV_ITEMS.slice(3);

export function localizedPath(locale: Locale, path: string): Route {
  return `/${locale}${path}` as Route;
}

export function replaceLocale(pathname: string, locale: Locale): Route {
  const segments = pathname.split("/");

  if (segments.length < 2) {
    return `/${locale}` as Route;
  }

  segments[1] = locale;
  return (segments.join("/") || `/${locale}`) as Route;
}

export function isCurrentPath(pathname: string, href: string): boolean {
  if (pathname === href) {
    return true;
  }

  const pathSegmentCount = href.split("/").filter(Boolean).length;

  return pathSegmentCount > 1 && pathname.startsWith(`${href}/`);
}
