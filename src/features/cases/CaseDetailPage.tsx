import { Notice, TextLink } from "@/components/ui";
import type { Locale } from "@/i18n/config";

import { CASES_COPY } from "./copy";
import type { PublicCaseContentBlock, PublicCaseDetail } from "./selectors";
import styles from "./CasesPage.module.css";

interface ClinicalCaseDetailPageProps {
  readonly locale: Locale;
  readonly clinicalCase: PublicCaseDetail;
}

function ContentBlockView({
  block,
  index,
  locale,
}: {
  readonly block: PublicCaseContentBlock;
  readonly index: number;
  readonly locale: Locale;
}) {
  const copy = CASES_COPY[locale];

  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "heading": {
      const id = `case-section-${index + 1}`;

      return block.level === 2 ? <h2 id={id}>{block.text}</h2> : <h3 id={id}>{block.text}</h3>;
    }
    case "list": {
      const List = block.style === "ordered" ? "ol" : "ul";

      return (
        <List>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    }
    case "notice":
      return (
        <Notice title={copy.detail.noticeTitles[block.tone]} tone={block.tone}>
          <p>{block.text}</p>
        </Notice>
      );
  }
}

export function ClinicalCaseDetailPage({ clinicalCase, locale }: ClinicalCaseDetailPageProps) {
  const copy = CASES_COPY[locale];

  return (
    <main className={styles.detailPage}>
      <header className={styles.detailHeader}>
        <div className={styles.detailHeaderInner}>
          <TextLink className={styles.backLink} href={`/${locale}/cases`}>
            {copy.detail.back}
          </TextLink>
          <dl className={styles.detailMeta}>
            <div>
              <dt>{copy.detail.categoryLabel}</dt>
              <dd>{clinicalCase.categoryName}</dd>
            </div>
            <div>
              <dt>{copy.detail.publishedLabel}</dt>
              <dd>
                <time dateTime={clinicalCase.publishedAt}>{clinicalCase.publishedAtLabel}</time>
              </dd>
            </div>
          </dl>
          <h1 className={styles.detailTitle}>{clinicalCase.title}</h1>
          {clinicalCase.summary ? <p className={styles.detailSummary}>{clinicalCase.summary}</p> : null}
        </div>
      </header>

      <div className={`${styles.container} ${styles.detailLayout}`}>
        <article className={styles.caseArticle}>
          <div className={styles.prose}>
            {clinicalCase.content.map((block, index) => (
              <ContentBlockView block={block} index={index} key={`${block.type}-${index}`} locale={locale} />
            ))}
          </div>
        </article>

        <aside className={styles.detailAside}>
          <Notice title={copy.detail.boundaryTitle} tone="medical-boundary">
            <p>{copy.detail.boundaryDescription}</p>
          </Notice>
          <nav className={styles.related} aria-label={copy.detail.relatedLabel}>
            <h2 className={styles.relatedTitle}>{copy.detail.relatedTitle}</h2>
            <ul className={styles.relatedLinks}>
              <li>
                <TextLink href={`/${locale}/about`}>{copy.aboutAuthor}</TextLink>
              </li>
              <li>
                <TextLink href={`/${locale}/contact#consultation`}>{copy.detail.consultation}</TextLink>
              </li>
              <li>
                <TextLink href={`/${locale}/cases`}>{copy.detail.moreCases}</TextLink>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </main>
  );
}
