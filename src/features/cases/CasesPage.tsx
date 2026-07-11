import Link from "next/link";
import type { Route } from "next";

import { Notice, TextLink } from "@/components/ui";
import type { Locale } from "@/i18n/config";

import { CASES_COPY } from "./copy";
import type { CaseDirectoryData, PublicCaseSummary } from "./selectors";
import styles from "./CasesPage.module.css";

interface ClinicalCasesPageProps {
  readonly locale: Locale;
  readonly data: CaseDirectoryData;
}

function CaseIndexEntry({
  actionLabel,
  clinicalCase,
}: {
  readonly actionLabel: string;
  readonly clinicalCase: PublicCaseSummary;
}) {
  return (
    <article className={styles.caseEntry}>
      <div className={styles.caseMeta}>
        <span>{clinicalCase.categoryName}</span>
        <time dateTime={clinicalCase.publishedAt}>{clinicalCase.publishedAtLabel}</time>
      </div>
      <div className={styles.caseText}>
        <h3 className={styles.caseTitle}>{clinicalCase.title}</h3>
        {clinicalCase.summary ? <p className={styles.caseSummary}>{clinicalCase.summary}</p> : null}
        <TextLink className={styles.caseAction} href={clinicalCase.href}>
          {actionLabel}
        </TextLink>
      </div>
    </article>
  );
}

export function ClinicalCasesPage({ data, locale }: ClinicalCasesPageProps) {
  const copy = CASES_COPY[locale];

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroIntro}>
            <h1 className={styles.heroTitle}>{copy.title}</h1>
            <p className={styles.heroDescription}>{copy.description}</p>
          </div>
          <div className={styles.heroPrinciple}>
            <p className={styles.heroPrincipleTitle}>{copy.principleTitle}</p>
            <p className={styles.heroPrincipleDescription}>{copy.principleDescription}</p>
          </div>
        </div>
      </header>

      <section className={styles.directory} aria-labelledby="case-directory-title">
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="case-directory-title">
              {copy.directoryTitle}
            </h2>
            <p className={styles.sectionDescription}>{copy.directoryDescription}</p>
          </header>

          {data.allCasesCount > 0 ? (
            <>
              <div className={styles.filterBar}>
                <nav aria-label={copy.filterLabel}>
                  <ul className={styles.filters}>
                    <li>
                      <Link
                        aria-current={data.activeCategory ? undefined : "page"}
                        className={styles.filterLink}
                        href={`/${locale}/cases` as Route}
                      >
                        {copy.allFilter}
                      </Link>
                    </li>
                    {data.filterCategories.map((category) => (
                      <li key={category.key}>
                        <Link
                          aria-current={data.activeCategory?.key === category.key ? "page" : undefined}
                          className={styles.filterLink}
                          href={`/${locale}/cases?category=${category.key}` as Route}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <p className={styles.filterStatus} aria-live="polite">
                  {data.activeCategory ? `${copy.currentFilter(data.activeCategory.name)} · ` : null}
                  {copy.resultCount(data.cases.length)}
                </p>
              </div>

              <div className={styles.caseIndex}>
                {data.cases.map((clinicalCase) => (
                  <CaseIndexEntry
                    actionLabel={copy.readCase}
                    clinicalCase={clinicalCase}
                    key={clinicalCase.id}
                  />
                ))}
              </div>
            </>
          ) : (
            <Notice className={styles.emptyNotice} title={copy.emptyTitle} tone="medical-boundary">
              <p>{copy.emptyDescription}</p>
              <p className={styles.noticeFollowup}>{copy.emptyPrivacy}</p>
              <div className={styles.linkCluster}>
                <TextLink href={`/${locale}/atlas`}>{copy.browseAtlas}</TextLink>
                <TextLink href={`/${locale}/about`}>{copy.aboutAuthor}</TextLink>
              </div>
            </Notice>
          )}
        </div>
      </section>

      <section className={styles.policy} aria-labelledby="case-policy-title">
        <div className={`${styles.container} ${styles.policyLayout}`}>
          <header className={styles.policyIntro}>
            <h2 className={styles.sectionTitle} id="case-policy-title">
              {copy.policyTitle}
            </h2>
            <p className={styles.sectionDescription}>{copy.policyDescription}</p>
          </header>
          <ol className={styles.policyList}>
            {copy.policyItems.map((item, index) => (
              <li className={styles.policyItem} key={item.title}>
                <span className={styles.policyNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className={styles.policyItemTitle}>{item.title}</h3>
                  <p className={styles.policyItemDescription}>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.medicalBoundary}>{copy.medicalBoundary}</p>
        </div>
      </section>
    </main>
  );
}
