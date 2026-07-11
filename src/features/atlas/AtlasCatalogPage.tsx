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

export function AtlasCatalogPage({ data, locale }: AtlasCatalogPageProps) {
  const copy = ATLAS_COPY[locale].catalog;
  const title = data.activeCategory?.name ?? copy.title;
  const description = data.activeCategory?.summary ?? copy.description;

  return (
    <main className={styles.page}>
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
            aria-current={data.activeCategory?.key === category.key ? "page" : undefined}
            className={styles.categoryLink}
            href={category.href}
            key={category.key}
          >
            <span>{category.name}</span>
            <span className={styles.categoryCount}>{category.count}</span>
          </Link>
        ))}
      </nav>

      <AtlasExplorer copy={copy} data={data} locale={locale} />
    </main>
  );
}
