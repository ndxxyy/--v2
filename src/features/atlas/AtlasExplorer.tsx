"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { FilterButton } from "@/components/ui";
import type { WorkCategoryKey } from "@/domain/content";
import type { Locale } from "@/i18n/config";

import type { AtlasCatalogData } from "./selectors";
import type { AtlasCopy } from "./copy";
import { ResilientImage } from "./ResilientImage";
import styles from "./AtlasCatalog.module.css";

interface AtlasExplorerProps {
  readonly locale: Locale;
  readonly data: AtlasCatalogData;
  readonly copy: AtlasCopy["catalog"];
}

function normalize(value: string, locale: Locale): string {
  return value.normalize("NFKC").trim().toLocaleLowerCase(locale);
}

function formatResultCount(
  copy: AtlasCopy["catalog"],
  count: number,
): string {
  return (count === 1 ? copy.resultCount.one : copy.resultCount.other).replace(
    "{count}",
    String(count),
  );
}

export function AtlasExplorer({ copy, data, locale }: AtlasExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<WorkCategoryKey | "all">(
    data.activeCategory?.key ?? "all",
  );
  const normalizedQuery = normalize(query, locale);
  const filteredWorks = useMemo(
    () =>
      data.works.filter(
        (work) =>
          (category === "all" || work.category === category) &&
          (!normalizedQuery || work.searchText.includes(normalizedQuery)),
      ),
    [category, data.works, normalizedQuery],
  );
  const selectedCategory = data.categories.find(
    (candidate) => candidate.key === category,
  );
  const hasFilters = category !== "all" || Boolean(normalizedQuery);

  return (
    <section className={styles.explorer} aria-labelledby="atlas-results-title">
      <div className={styles.controls}>
        <div className={styles.searchGroup}>
          <label className={styles.searchLabel} htmlFor="atlas-search">
            {copy.searchLabel}
          </label>
          <div className={styles.searchField}>
            <input
              autoComplete="off"
              className={styles.searchInput}
              id="atlas-search"
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
              type="search"
              value={query}
            />
            {query ? (
              <button
                className={styles.clearSearch}
                onClick={() => setQuery("")}
                type="button"
              >
                {copy.clearSearch}
              </button>
            ) : null}
          </div>
        </div>

        {!data.activeCategory ? (
          <fieldset className={styles.filters}>
            <legend>{copy.filtersLabel}</legend>
            <div className={styles.filterList}>
              <FilterButton
                onClick={() => setCategory("all")}
                selected={category === "all"}
              >
                {copy.allWorks} · {data.works.length}
              </FilterButton>
              {data.categories.map((option) => (
                <FilterButton
                  key={option.key}
                  onClick={() => setCategory(option.key)}
                  selected={category === option.key}
                >
                  {option.name} · {option.count}
                </FilterButton>
              ))}
            </div>
          </fieldset>
        ) : null}
      </div>

      <div className={styles.resultsHeader} aria-live="polite">
        <div>
          <p className={styles.currentFilter}>
            {selectedCategory
              ? `${copy.currentCategory}：${selectedCategory.name}`
              : copy.currentAll}
            {normalizedQuery ? ` · ${copy.currentSearch}：${query.trim()}` : ""}
          </p>
          <h2 className={styles.resultsTitle} id="atlas-results-title">
            {formatResultCount(copy, filteredWorks.length)}
          </h2>
        </div>
        {hasFilters ? (
          <button
            className={styles.resetFilters}
            onClick={() => {
              setQuery("");
              setCategory(data.activeCategory?.key ?? "all");
            }}
            type="button"
          >
            {data.activeCategory ? copy.clearSearch : copy.resetFilters}
          </button>
        ) : null}
      </div>

      {filteredWorks.length > 0 ? (
        <ul className={styles.workGrid}>
          {filteredWorks.map((work, index) => (
            <li className={styles.workItem} key={work.id}>
              <article>
                <Link
                  aria-label={`${copy.viewWork}：${work.title}`}
                  className={styles.imageLink}
                  href={work.href}
                >
                  <ResilientImage
                    alt={work.image.alt}
                    errorMessage={copy.imageError}
                    height={work.image.thumbnail.height}
                    priority={index < 3}
                    retryLabel={copy.retryImage}
                    sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1279px) 45vw, 28vw"
                    src={work.image.thumbnail.src}
                    width={work.image.thumbnail.width}
                  />
                </Link>
                <div className={styles.workBody}>
                  <p className={styles.workMeta}>
                    {work.categoryName}
                    {work.code ? ` · ${copy.codeLabel} ${work.code}` : ""}
                  </p>
                  <h3 className={styles.workTitle}>{work.title}</h3>
                  {work.summary ? (
                    <p className={styles.workSummary}>{work.summary}</p>
                  ) : null}
                  <Link className={styles.workAction} href={work.href}>
                    {copy.viewWork}
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyState} role="status">
          <h3>
            {data.works.length === 0
              ? copy.categoryEmptyTitle
              : copy.noResultsTitle}
          </h3>
          <p>
            {data.works.length === 0
              ? copy.categoryEmptyDescription
              : copy.noResultsDescription}
          </p>
          {data.activeCategory ? (
            <Link className={styles.emptyAction} href={`/${locale}/atlas`}>
              {copy.resetFilters}
            </Link>
          ) : hasFilters ? (
            <button
              className={styles.emptyAction}
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              type="button"
            >
              {copy.resetFilters}
            </button>
          ) : null}
        </div>
      )}
    </section>
  );
}
