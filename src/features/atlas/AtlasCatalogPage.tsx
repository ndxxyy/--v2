import Link from "next/link";

import type { Locale } from "@/i18n/config";

import { AtlasExplorer } from "./AtlasExplorer";
import { ATLAS_COPY } from "./copy";
import type { AtlasCatalogData } from "./selectors";
import styles from "./AtlasCatalog.module.css";

interface AtlasCatalogPageProps {
  readonly locale: Locale;
  readonly data: AtlasCatalogData;
}

function formatResultCount(
  copy: (typeof ATLAS_COPY)[Locale]["catalog"],
  count: number,
): string {
  return (count === 1 ? copy.resultCount.one : copy.resultCount.other).replace(
    "{count}",
    String(count),
  );
}

function formatTemplate(
  template: string,
  values: Readonly<Record<string, string | number>>,
): string {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, String(value)),
    template,
  );
}

function formatOrdinal(count: number, locale: Locale): string {
  if (locale === "en") {
    return String(count);
  }

  const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

  if (count < 10) {
    return digits[count];
  }
  if (count < 20) {
    return `十${count === 10 ? "" : digits[count % 10]}`;
  }
  if (count < 100) {
    return `${digits[Math.floor(count / 10)]}十${
      count % 10 === 0 ? "" : digits[count % 10]
    }`;
  }

  return String(count);
}

export function AtlasCatalogPage({ data, locale }: AtlasCatalogPageProps) {
  const copy = ATLAS_COPY[locale].catalog;
  const title =
    data.activeHerbTaxon?.name ?? data.activeCategory?.name ?? copy.title;
  const description =
    data.activeHerbTaxon?.summary ??
    data.activeCategory?.summary ??
    copy.description;
  const breadcrumbs = data.breadcrumbs ?? [];
  const herbNavigation = data.herbTaxonNavigation;

  return (
    <main className={styles.page}>
      {breadcrumbs.length > 0 ? (
        <nav className={styles.breadcrumbs} aria-label={copy.breadcrumbLabel}>
          <ol>
            {breadcrumbs.map((breadcrumb, index) => {
              const isCurrent = index === breadcrumbs.length - 1;

              return (
                <li key={breadcrumb.href}>
                  {isCurrent ? (
                    <span aria-current="page">{breadcrumb.name}</span>
                  ) : (
                    <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}

      <header className={styles.intro}>
        <div className={styles.introLead}>
          <p className={styles.introLabel}>{copy.label}</p>
          <h1 className={styles.pageTitle}>{title}</h1>
          <p className={styles.pageDescription}>{description}</p>
        </div>
        <p className={styles.totalCount}>
          {formatResultCount(copy, data.works.length)}
        </p>
      </header>

      <nav
        className={`${styles.categoryNav} ${
          data.activeCategory ? "" : styles.categoryNavAll
        }`}
        aria-label={copy.categoriesLabel}
      >
        <Link
          aria-current={!data.activeCategory ? "page" : undefined}
          className={styles.categoryLink}
          href={`/${locale}/atlas`}
        >
          <span>{copy.allWorks}</span>
          <span className={styles.categoryCount}>
            {data.categories.reduce((total, category) => total + category.count, 0)}
          </span>
        </Link>
        {data.categories.map((category) => (
          <Link
            aria-current={
              data.activeCategory?.key === category.key
                ? data.activeHerbTaxon
                  ? "location"
                  : "page"
                : undefined
            }
            className={styles.categoryLink}
            href={category.href}
            key={category.key}
          >
            <span>{category.name}</span>
            <span className={styles.categoryCount}>{category.count}</span>
          </Link>
        ))}
      </nav>

      {herbNavigation ? (
        <section
          className={`${styles.taxonNav} ${
            herbNavigation.isChapterDirectory
              ? styles.taxonNavChapterDirectory
              : ""
          }`}
          aria-labelledby="herb-taxonomy-title"
        >
          <header className={styles.taxonNavHeader}>
            <p>
              {herbNavigation.isChapterDirectory
                ? copy.herbChapterDirectory
                : copy.herbChapterContext}
            </p>
            <h2 id="herb-taxonomy-title">
              {herbNavigation.label}
            </h2>
            {herbNavigation.summary ? (
              <p className={styles.taxonNavSummary}>
                {herbNavigation.summary}
              </p>
            ) : null}
            <p className={styles.taxonNavMeta}>
              {formatTemplate(
                herbNavigation.isChapterDirectory
                  ? copy.herbChapterMeta
                  : copy.herbSectionMeta,
                {
                  chapters: herbNavigation.options.length,
                  sections: herbNavigation.options.length,
                  works: herbNavigation.count,
                },
              )}
            </p>
          </header>
          <div className={styles.taxonDirectory}>
            <p className={styles.taxonDirectoryLabel}>
              {herbNavigation.isChapterDirectory
                ? copy.herbChapterBrowse
                : copy.herbSectionBrowse}
            </p>
            <nav aria-label={copy.herbTaxonomyLabel}>
            <ul>
              {herbNavigation.options.map((option) => (
                <li key={option.key}>
                  <Link
                    aria-current={option.isActive ? "page" : undefined}
                    href={option.href}
                  >
                    <span className={styles.taxonOrdinal}>
                      {formatTemplate(
                        herbNavigation.isChapterDirectory
                          ? copy.herbChapterOrdinal
                          : copy.herbSectionOrdinal,
                        { count: formatOrdinal(option.ordinal, locale) },
                      )}
                    </span>
                    <span className={styles.taxonName}>{option.name}</span>
                    <span className={styles.taxonCount}>{option.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
            </nav>
          </div>
        </section>
      ) : null}

      <AtlasExplorer copy={copy} data={data} locale={locale} />
    </main>
  );
}
