import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";

import { ButtonLink, ImageFrame, TextLink } from "@/components/ui";
import type { Locale } from "@/i18n/config";

import { HOME_COPY } from "./copy";
import type { HomePageData } from "./selectors";
import styles from "./HomePage.module.css";

interface HomePageProps {
  readonly locale: Locale;
  readonly data: HomePageData;
}

export function HomePage({ data, locale }: HomePageProps) {
  const copy = HOME_COPY[locale];
  const featuredCase = data.featuredCases[0];
  const compactArtworkLabel = locale !== "en";
  const stats = [
    { value: data.stats.totalWorks, label: copy.stats.totalWorks },
    { value: data.stats.meridianWorks, label: copy.stats.meridianWorks },
    { value: data.stats.herbWorks, label: copy.stats.herbWorks },
    { value: data.stats.imagePlates, label: copy.stats.imagePlates },
  ];
  const caseCategoryMarks = ["脉", "女", "童", "针", "养", "录"] as const;

  return (
    <main className={styles.home} data-entrance="orchestrated">
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroIntro}>
          <p className={styles.heroLabel}>{copy.hero.label}</p>
          <h1 className={styles.heroTitle} id="home-title">
            {copy.hero.title}
          </h1>
          <p className={styles.heroStatement}>{copy.hero.statement}</p>
          <p className={styles.heroDescription}>{copy.hero.description}</p>
          <div className={styles.heroActions}>
            <ButtonLink href={`/${locale}/atlas`}>
              {copy.hero.primaryAction}
              <span aria-hidden="true" className={styles.actionArrow}>→</span>
            </ButtonLink>
            <ButtonLink href={`/${locale}/contact#consultation`} variant="secondary">
              {copy.hero.secondaryAction}
              <span aria-hidden="true" className={styles.actionArrow}>→</span>
            </ButtonLink>
          </div>
        </div>

        <div className={styles.heroWorks} aria-label={copy.catalog.title}>
          {data.heroWorks.length > 0 ? (
            data.heroWorks.map((work) => (
              <Link
                aria-label={`${copy.hero.viewWork}：${work.title}`}
                className={styles.heroArtwork}
                data-work={work.id}
                href={work.href}
                key={work.id}
              >
                <figure className={styles.heroArtworkFigure}>
                  <Image
                    alt={work.image.alt}
                    className={styles.heroArtworkImage}
                    height={work.image.height}
                    priority
                    sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1279px) 50vw, 31vw"
                    src={work.image.src}
                    unoptimized
                    width={work.image.width}
                  />
                </figure>
                <div
                  className={`${styles.artworkPlaque} ${
                    compactArtworkLabel ? styles.artworkPlaqueVertical : ""
                  }`}
                >
                  <h2
                    className={`${styles.artworkTitle} ${
                      compactArtworkLabel && work.id === "work-003"
                        ? styles.artworkTitleColumns
                        : ""
                    }`}
                  >
                    {compactArtworkLabel && work.id === "work-003" ? (
                      <>
                        <span>{work.title.slice(0, -2)}</span>
                        <span>{work.title.slice(-2)}</span>
                      </>
                    ) : work.title}
                  </h2>
                </div>
              </Link>
            ))
          ) : (
            <div className={styles.heroEmpty} role="note">
              <h2 className={styles.heroEmptyTitle}>{copy.hero.emptyTitle}</h2>
              <p className={styles.heroEmptyDescription}>{copy.hero.emptyDescription}</p>
            </div>
          )}
        </div>

        <div className={styles.heroLedger}>
          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.caseIndex}>
            <div className={styles.caseIndexIntro}>
              <h2 className={styles.caseIndexTitle}>{copy.cases.title}</h2>
              <p>{copy.cases.description}</p>
            </div>
            <ul className={styles.caseCategories}>
              {data.caseCategoryNames.map((category, index) => (
                <li key={category}>
                  <span aria-hidden="true" className={styles.caseCategoryMark}>
                    {caseCategoryMarks[index] ?? "录"}
                  </span>
                  <span>{category}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.portals} aria-label={copy.hero.label}>
        <article className={`${styles.portal} ${styles.portalAtlas}`}>
          <div className={styles.portalCopy}>
            <h2>{copy.catalog.title}</h2>
            <p>{copy.catalog.description}</p>
            <TextLink className={styles.portalAction} href={`/${locale}/atlas`}>
              {copy.catalog.viewAll}
            </TextLink>
          </div>
          {data.featuredWorks[0] ? (
            <div aria-hidden="true" className={styles.portalAtlasArtwork}>
              <Image
                alt=""
                fill
                sizes="(min-width: 1280px) 28vw, (min-width: 768px) 33vw, 100vw"
                src={data.featuredWorks[0].image.src}
                unoptimized
              />
            </div>
          ) : null}
        </article>

        <article className={`${styles.portal} ${styles.portalCases}`}>
          <div className={styles.portalCopy}>
            <h2>{copy.cases.title}</h2>
            {featuredCase ? (
              <>
                <p>{featuredCase.title}</p>
                <TextLink className={styles.portalAction} href={featuredCase.href}>
                  {copy.cases.action}
                </TextLink>
              </>
            ) : (
              <>
                <p>{copy.cases.emptyDescription}</p>
                <TextLink className={styles.portalAction} href={`/${locale}/cases`}>
                  {copy.cases.viewAll}
                </TextLink>
              </>
            )}
          </div>
          <ul className={styles.portalCaseIndex} aria-label={copy.cases.description}>
            {data.caseCategoryNames.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </article>

        <article className={`${styles.portal} ${styles.portalLicensing}`}>
          <div className={styles.portalCopy}>
            <h2>{copy.licensing.title}</h2>
            <p>{copy.licensing.description}</p>
            <TextLink className={styles.portalAction} href={`/${locale}/licensing`}>
              {copy.licensing.action}
            </TextLink>
          </div>
          <div aria-hidden="true" className={styles.licenseFolio}>
            <span className={styles.folioLine} />
            <Image
              alt=""
              className={styles.folioSeal}
              height={44}
              src="/images/brand/xiao-zhong-qiyi-seal.png"
              width={44}
            />
          </div>
        </article>
      </section>

      <section className={styles.sectionDark} aria-labelledby="catalog-title">
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="catalog-title">
              {copy.catalog.title}
            </h2>
            <p className={styles.sectionDescription}>{copy.catalog.description}</p>
          </header>

          {data.featuredWorks.length > 0 ? (
            <ul className={styles.gallery}>
              {data.featuredWorks.map((work) => (
                <li className={styles.galleryItem} key={work.id}>
                  <article>
                    <Link className={styles.galleryImageLink} href={work.href}>
                      <ImageFrame ratio={work.image.ratio}>
                        <Image
                          alt={work.image.alt}
                          className={styles.galleryImage}
                          height={work.image.height}
                          loading="lazy"
                          sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1279px) 30vw, 25vw"
                          src={work.image.src}
                          unoptimized
                          width={work.image.width}
                        />
                      </ImageFrame>
                    </Link>
                    {work.category || work.code ? (
                      <p className={styles.galleryMeta}>
                        {[work.category, work.code ? `${copy.hero.codeLabel} ${work.code}` : null]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    ) : null}
                    <h3 className={styles.galleryTitle}>{work.title}</h3>
                    <Link className={styles.galleryTextLink} href={work.href}>
                      {copy.catalog.viewWork}
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.catalogBody}>
              <div>
                <p className={styles.emptyCopy}>{copy.catalog.empty}</p>
                <Link className={styles.catalogAction} href={`/${locale}/atlas` as Route}>
                  {copy.catalog.viewAll}
                </Link>
              </div>
              <ul className={styles.categoryList}>
                {copy.catalog.categories.map((category) => (
                  <li key={category.path}>
                    <Link
                      className={styles.categoryLink}
                      href={`/${locale}${category.path}` as Route}
                    >
                      <span className={styles.categoryTitle}>{category.title}</span>
                      <span className={styles.categoryDescription}>{category.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className={styles.directionsSection} aria-labelledby="directions-title">
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="directions-title">
              {copy.directions.title}
            </h2>
            <p className={styles.sectionDescription}>{copy.directions.description}</p>
          </header>
          <ul className={styles.directions}>
            {copy.directions.items.map((item) => (
              <li className={styles.direction} key={item.title}>
                <p className={styles.directionTitle}>{item.title}</p>
                <p className={styles.directionDescription}>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <div className={`${styles.sectionInner} ${styles.contactGrid}`}>
          <header className={styles.contactIntro}>
            <h2 className={styles.sectionTitle} id="contact-title">
              {copy.contact.title}
            </h2>
            <p className={styles.sectionDescription}>{copy.contact.description}</p>
          </header>
          <div className={styles.contactOptions}>
            <article className={styles.contactOption} id="consultation">
              <h3 className={styles.contactOptionTitle}>{copy.contact.consultationTitle}</h3>
              <p className={styles.contactOptionDescription}>
                {copy.contact.consultationDescription}
              </p>
              <TextLink
                className={styles.contactAction}
                href={`/${locale}/contact#consultation`}
              >
                {copy.contact.consultationAction}
              </TextLink>
            </article>
            <article className={styles.contactOption} id="learning">
              <h3 className={styles.contactOptionTitle}>{copy.contact.learningTitle}</h3>
              <p className={styles.contactOptionDescription}>
                {copy.contact.learningDescription}
              </p>
              <TextLink className={styles.contactAction} href={`/${locale}/contact#learning`}>
                {copy.contact.learningAction}
              </TextLink>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
