import Link from "next/link";
import type { Route } from "next";

import { Notice } from "@/components/ui";
import type { Locale } from "@/i18n/config";

import { AtlasGallery } from "./AtlasGallery";
import { AtlasRightsNotice } from "./AtlasRightsNotice";
import { ATLAS_COPY } from "./copy";
import { ResilientImage } from "./ResilientImage";
import type { AtlasDetailData } from "./selectors";
import styles from "./AtlasDetailPage.module.css";

interface AtlasDetailPageProps {
  readonly locale: Locale;
  readonly work: AtlasDetailData;
}

export function AtlasDetailPage({ locale, work }: AtlasDetailPageProps) {
  const copy = ATLAS_COPY[locale].detail;
  const workReference = work.code ?? work.title;
  const query = `work=${encodeURIComponent(workReference)}`;
  const herbClassification = work.herbTaxonPath
    ?.map((taxon) => taxon.name)
    .join(" · ");
  const categoryPath = [work.categoryName, herbClassification]
    .filter(Boolean)
    .join(" · ");

  return (
    <main className={styles.page}>
      <Link className={styles.backLink} href={work.backHref}>
        {copy.backTo.replace("{name}", work.backLabel)}
      </Link>

      <div className={styles.detailGrid}>
        <header className={styles.workInfo}>
          <p className={styles.category}>{categoryPath}</p>
          <h1>{work.title}</h1>

          <dl className={styles.metadata}>
            <div>
              <dt>{copy.categoryLabel}</dt>
              <dd>{work.categoryName}</dd>
            </div>
            {herbClassification ? (
              <div>
                <dt>{copy.classificationLabel}</dt>
                <dd>{herbClassification}</dd>
              </div>
            ) : null}
            {work.code ? (
              <div>
                <dt>{copy.codeLabel}</dt>
                <dd>{work.code}</dd>
              </div>
            ) : null}
            {work.registrationNumber ? (
              <div>
                <dt>{copy.registrationLabel}</dt>
                <dd>{work.registrationNumber}</dd>
              </div>
            ) : null}
          </dl>

          {work.summary ? <p className={styles.summary}>{work.summary}</p> : null}

          <Notice title={copy.previewNoticeTitle} tone="medical-boundary">
            {copy.previewNotice}
          </Notice>

          <div className={styles.actions}>
            <Link
              className={styles.primaryAction}
              href={`/${locale}/licensing?${query}`}
            >
              {copy.licensingAction}
            </Link>
            <Link
              className={styles.secondaryAction}
              href={`/${locale}/contact?${query}`}
            >
              {copy.contactAction}
            </Link>
          </div>
        </header>

        <AtlasGallery copy={copy} images={work.images} workTitle={work.title} />
      </div>

      <AtlasRightsNotice
        code={work.code}
        licensingHref={`/${locale}/licensing?${query}` as Route}
        locale={locale}
        series={categoryPath}
        title={work.title}
      />

      {work.relatedWorks.length > 0 ? (
        <section className={styles.related} aria-labelledby="related-atlas-title">
          <header>
            <h2 id="related-atlas-title">{copy.relatedTitle}</h2>
            <p>{copy.relatedDescription}</p>
          </header>
          <ul>
            {work.relatedWorks.map((related) => (
              <li key={related.id}>
                <Link className={styles.relatedImage} href={related.href}>
                  <ResilientImage
                    alt={related.image.alt}
                    errorMessage={copy.imageError}
                    height={related.image.thumbnail.height}
                    retryLabel={copy.retryImage}
                    sizes="(max-width: 767px) calc(100vw - 36px), 28vw"
                    src={related.image.thumbnail.src}
                    width={related.image.thumbnail.width}
                  />
                </Link>
                <p>
                  {related.categoryName}
                  {related.herbTaxonPath
                    ? ` · ${related.herbTaxonPath
                        .map((taxon) => taxon.name)
                        .join(" · ")}`
                    : ""}
                </p>
                <h3>{related.title}</h3>
                <Link className={styles.relatedAction} href={related.href}>
                  {copy.viewRelated}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
