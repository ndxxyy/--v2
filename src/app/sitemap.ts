import type { MetadataRoute } from "next";

import {
  getAtlasSlugs,
  getHerbTaxonStaticParams,
  selectAtlasDetail,
} from "@/features/atlas";
import { selectCaseDirectory } from "@/features/cases";
import { LOCALES } from "@/i18n/config";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedPath,
} from "@/lib/seo";

const STATIC_PATHS = [
  "",
  "/atlas",
  "/atlas/meridians",
  "/atlas/herbs",
  "/atlas/formulas",
  "/cases",
  "/licensing",
  "/copyright",
  "/about",
  "/contact",
] as const;

function getPriority(pathname: string): number {
  if (!pathname) return 1;
  if (pathname === "/atlas") return 0.9;
  if (pathname.startsWith("/atlas/")) return 0.8;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const atlasPaths = getAtlasSlugs()
    .filter((slug) => Boolean(selectAtlasDetail("zh-CN", slug)))
    .map((slug) => `/atlas/${slug}`);
  const herbTaxonomyPaths = getHerbTaxonStaticParams().map(
    ({ taxonomy }) => `/atlas/herbs/${taxonomy.join("/")}`,
  );
  const casePaths = selectCaseDirectory("zh-CN").cases.map(
    (clinicalCase) => `/cases/${clinicalCase.slug}`,
  );
  const paths = [
    ...new Set([
      ...STATIC_PATHS,
      ...atlasPaths,
      ...herbTaxonomyPaths,
      ...casePaths,
    ]),
  ];

  return paths.flatMap((pathname) =>
    LOCALES.map((locale) => ({
      url: getAbsoluteUrl(getLocalizedPath(locale, pathname)),
      alternates: { languages: getLanguageAlternates(pathname) },
      changeFrequency: pathname.startsWith("/atlas") ? "monthly" : "yearly",
      priority: getPriority(pathname),
    })),
  );
}
