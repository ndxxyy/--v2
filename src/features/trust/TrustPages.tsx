import Image from "next/image";

import { ButtonLink, Notice, TextLink } from "@/components/ui";
import type { Locale } from "@/i18n/config";

import { CopyValueButton } from "./CopyValueButton";
import { TRUST_COPY } from "./copy";
import { LICENSING_PRICING_COPY } from "./licensing-pricing";
import {
  getPublishedAuthor,
  getPublishedContacts,
  getPublishedLicenseScenarios,
  type PublicContactChannel,
} from "./selectors";
import styles from "./TrustPages.module.css";

interface PageProps {
  readonly locale: Locale;
  readonly workReference?: string | null;
}

function PageHero({
  compact = false,
  context,
  lede,
  title,
  titleLines,
}: {
  readonly compact?: boolean;
  readonly context: string;
  readonly lede: string;
  readonly title: string;
  readonly titleLines?: readonly string[];
}) {
  return (
    <header
      className={`${styles.hero} ${compact ? styles.heroCompact : ""} ${
        titleLines ? styles.heroAbout : ""
      }`}
    >
      <div className={`catalog-container ${styles.heroGrid}`}>
        <p className={styles.heroContext}>{context}</p>
        <h1 className={styles.heroTitle}>
          {titleLines
            ? titleLines.map((line) => (
                <span className={styles.heroTitleLine} key={line}>{line}</span>
              ))
            : title}
        </h1>
        <p className={styles.heroLede}>{lede}</p>
      </div>
    </header>
  );
}

function WorkReference({ locale, value }: { readonly locale: Locale; readonly value: string }) {
  const copy = TRUST_COPY[locale];

  return (
    <section className={`catalog-container ${styles.workReference}`} aria-labelledby="work-reference-title">
      <div>
        <h2 className={styles.workReferenceTitle} id="work-reference-title">
          {copy.workReference.title}
        </h2>
        <p className={styles.workReferenceDescription}>{copy.workReference.description}</p>
      </div>
      <p className={styles.workCode}>{value}</p>
    </section>
  );
}

function licensingContactHref(locale: Locale, workReference?: string | null) {
  const query = workReference ? `?work=${encodeURIComponent(workReference)}` : "";
  return `/${locale}/contact${query}#licensing-contact`;
}

export function LicensingPage({ locale, workReference }: PageProps) {
  const copy = TRUST_COPY[locale].licensing;
  const pricingCopy = LICENSING_PRICING_COPY[locale];
  const scenarios = getPublishedLicenseScenarios(locale);

  return (
    <main className={styles.page}>
      <PageHero compact context={copy.context} lede={copy.lede} title={copy.title} />
      {workReference ? <WorkReference locale={locale} value={workReference} /> : null}

      <section
        className={`catalog-container ${styles.contentSection} ${styles.licensingScenarioSection}`}
        aria-labelledby="license-scenarios-title"
      >
        <div className={styles.sectionHeading}>
          <h2 id="license-scenarios-title">{copy.scenariosTitle}</h2>
          <p>{copy.scenariosIntro}</p>
        </div>
        <div className={styles.scenarioGrid}>
          {scenarios.map((scenario) => {
            const cardCopy = pricingCopy.scenarioCards[scenario.id];
            const cardToneClass =
              scenario.id === "personal-study"
                ? styles.scenarioCardFriendly
                : scenario.id === "social-media"
                  ? styles.scenarioCardFrequent
                  : scenario.id === "publishing-commercial"
                    ? styles.scenarioCardEmphasis
                    : scenario.id === "custom-creation"
                      ? styles.scenarioCardPremium
                      : "";

            return (
              <article
                className={`${styles.scenarioCard} ${cardToneClass}`}
                key={scenario.id}
              >
                {scenario.id === "publishing-commercial" ||
                scenario.id === "custom-creation" ? (
                  <p className={styles.scopeReviewLabel}>{copy.scopeReviewLabel}</p>
                ) : null}
                <header className={styles.scenarioCardHeader}>
                  <h3>{scenario.title}</h3>
                  <p>{scenario.summary}</p>
                </header>
                <div className={styles.quoteBlock}>
                  <p className={styles.quoteModeLabel}>{copy.quoteModeLabel}</p>
                  <p className={styles.quoteValue}>{cardCopy.method}</p>
                  <ButtonLink
                    className={styles.quoteAction}
                    href={licensingContactHref(locale, workReference)}
                    variant="secondary"
                  >
                    {cardCopy.action}
                  </ButtonLink>
                  <div className={styles.referenceFeeBlock}>
                    <p className={styles.referenceFeeTitle}>{pricingCopy.referenceFeeTitle}</p>
                    <p className={styles.referenceFeeNote}>{pricingCopy.referenceFeeNote}</p>
                    <ul className={styles.referenceFeeList}>
                      {cardCopy.fees.map((fee) => (
                        <li key={`${fee.label}-${fee.value}`}>
                          <span>{fee.label}</span>
                          <strong>{fee.value}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.scenarioDetails}>
                  <div className={styles.supplementBlock}>
                    <h4>{pricingCopy.supplementTitle}</h4>
                    <p className={styles.supplementApplicable}>{pricingCopy.applicableTitle}</p>
                    <ul className={styles.supplementUseList}>
                      {cardCopy.uses.map((use) => <li key={use}>{use}</li>)}
                    </ul>
                    <p className={styles.supplementNote}>{cardCopy.note}</p>
                  </div>
                  <h4>{copy.requirementsTitle}</h4>
                  {scenario.terms.length > 0 ? (
                    <ul className={styles.compactList}>
                      {scenario.terms.map((term) => <li key={term}>{term}</li>)}
                    </ul>
                  ) : null}
                </div>
                <div className={styles.activationRow}>
                  <span>{cardCopy.conditionLabel}</span>
                  <strong>{cardCopy.condition}</strong>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className={`catalog-container ${styles.priceNotesSection}`}
        aria-labelledby="price-notes-title"
      >
        <div className={styles.policyHeading}>
          <h2 id="price-notes-title">{pricingCopy.priceNotes.title}</h2>
        </div>
        <div className={styles.priceNotesBody}>
          <p>{pricingCopy.priceNotes.intro}</p>
          <div className={styles.authorizationScopeGrid}>
            <div>
              <h3>{pricingCopy.priceNotes.permissionTypesTitle}</h3>
              <ul>
                {pricingCopy.priceNotes.permissionTypes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3>{pricingCopy.priceNotes.factorsTitle}</h3>
              <ul>
                {pricingCopy.priceNotes.factors.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <p className={styles.priceNotesEmphasis}>{pricingCopy.priceNotes.emphasis}</p>
        </div>
      </section>

      <section className={`catalog-container ${styles.processSection}`} aria-labelledby="licensing-process-title">
        <h2 id="licensing-process-title">{copy.processTitle}</h2>
        <ol className={styles.processList}>
          {copy.steps.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={`catalog-container ${styles.faqSection}`} aria-labelledby="licensing-faq-title">
        <div className={styles.faqHeading}>
          <h2 id="licensing-faq-title">{copy.faqTitle}</h2>
          <p>{copy.faqIntro}</p>
        </div>
        <div className={styles.faqList}>
          {copy.faqs.map((faq) => (
            <details className={styles.faqItem} key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <div className={`catalog-container ${styles.noticeWrap}`}>
        <Notice title={copy.boundaryTitle} tone="rights">
          <p>{copy.boundary}</p>
          <p className={styles.noticeFollowup}>{copy.boundaryRights}</p>
        </Notice>
      </div>
    </main>
  );
}

export function CopyrightPage({ locale }: PageProps) {
  const copy = TRUST_COPY[locale].copyright;

  return (
    <main className={styles.page}>
      <PageHero context={copy.context} lede={copy.lede} title={copy.title} />
      <div className={`catalog-container ${styles.editorialSections}`}>
        <section className={styles.editorialSection} aria-labelledby="preview-boundary-title">
          <h2 id="preview-boundary-title">{copy.previewTitle}</h2>
          <p>{copy.previewBody}</p>
        </section>
        <section className={styles.editorialSection} aria-labelledby="copyright-restrictions-title">
          <h2 id="copyright-restrictions-title">{copy.restrictionsTitle}</h2>
          <ul className={styles.ruleList}>
            {copy.restrictions.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section className={styles.editorialSection} aria-labelledby="license-scope-title">
          <h2 id="license-scope-title">{copy.licenseTitle}</h2>
          <p>{copy.licenseBody}</p>
        </section>
        <section className={styles.editorialSection} aria-labelledby="rights-records-title">
          <h2 id="rights-records-title">{copy.recordsTitle}</h2>
          <p>{copy.recordsBody}</p>
        </section>
      </div>
      <div className={`catalog-container ${styles.bottomAction}`}>
        <ButtonLink href={`/${locale}/licensing`} variant="primary">{copy.licensingLink}</ButtonLink>
      </div>
    </main>
  );
}

export function AboutPage({ locale }: PageProps) {
  const copy = TRUST_COPY[locale].about;
  const author = getPublishedAuthor(locale);
  const titleLines =
    locale === "zh-CN"
      ? ["关于", "小钟岐医"]
      : locale === "zh-Hant"
        ? ["關於", "小鐘岐醫"]
        : ["About", "Xiao Zhong Qi Yi"];

  return (
    <main className={styles.page}>
      <PageHero
        context={copy.context}
        lede={copy.lede}
        title={copy.title}
        titleLines={titleLines}
      />
      {author ? (
        <section className={`catalog-container ${styles.biography}`} aria-labelledby="author-name">
          <h2 id="author-name">{author.displayName}</h2>
          <div className={styles.biographyCopy}>
            {author.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
      ) : null}
      <section className={`catalog-container ${styles.directionSection}`} aria-labelledby="creative-direction-title">
        <h2 id="creative-direction-title">{copy.directionTitle}</h2>
        <div className={styles.directionList}>
          {copy.directions.map((direction) => (
            <article key={direction.title}>
              <h3>{direction.title}</h3>
              <p>{direction.text}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={`catalog-container ${styles.noticeWrap}`}>
        <Notice title={copy.boundaryTitle} tone="medical-boundary">
          <p>{copy.boundary}</p>
        </Notice>
      </div>
      <nav className={`catalog-container ${styles.bottomAction}`} aria-label={copy.title}>
        <ButtonLink href={`/${locale}/atlas`} variant="primary">{copy.atlasLink}</ButtonLink>
        <ButtonLink href={`/${locale}/contact`} variant="secondary">{copy.contactLink}</ButtonLink>
      </nav>
    </main>
  );
}

function ContactChannelList({
  channels,
  locale,
}: {
  readonly channels: readonly PublicContactChannel[];
  readonly locale: Locale;
}) {
  const copy = TRUST_COPY[locale].contact;

  if (channels.length === 0) {
    return <p className={styles.emptyState}>{copy.channelEmpty}</p>;
  }

  return (
    <ul className={styles.channelList}>
      {channels.map((channel) => (
        <li className={channel.qrImage ? styles.qrChannel : styles.channelRow} key={channel.id}>
          {channel.qrImage ? (
            <>
              <div className={styles.qrCopy}>
                <h3>{channel.label}</h3>
                <p>{copy.wechatInstruction}</p>
              </div>
              <div className={styles.qrFrame}>
                <Image
                  alt={copy.qrAlt}
                  height={channel.qrImage.height}
                  sizes="(max-width: 767px) 176px, 208px"
                  src={channel.qrImage.src}
                  width={channel.qrImage.width}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <p className={styles.channelLabel}>{channel.label}</p>
                <p className={styles.channelValue}>{channel.value}</p>
                {channel.kind === "email" ? (
                  <p className={styles.channelDescription}>{copy.emailDescription}</p>
                ) : null}
              </div>
              <div className={styles.channelActions}>
                {channel.href ? (
                  <TextLink href={channel.href}>
                    {channel.kind === "phone" ? copy.call : copy.email}
                  </TextLink>
                ) : null}
                {channel.value ? (
                  <CopyValueButton
                    copiedLabel={copy.copied}
                    copyLabel={
                      channel.kind === "phone"
                        ? copy.copyPhone
                        : channel.kind === "email"
                          ? copy.copyEmail
                          : copy.copyAccount
                    }
                    errorLabel={copy.copyFailed}
                    value={channel.value}
                  />
                ) : null}
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ContactPage({ locale, workReference }: PageProps) {
  const copy = TRUST_COPY[locale].contact;
  const pricingCopy = LICENSING_PRICING_COPY[locale];
  const consultationChannels = getPublishedContacts(locale, "consultation");
  const learningChannels = getPublishedContacts(locale, "learning");
  const licensingChannels = getPublishedContacts(locale, "licensing");
  const emailChannels = learningChannels.filter((channel) => channel.kind === "email");
  const wechatChannels = learningChannels.filter((channel) => channel.kind === "wechat");
  const socialChannels = learningChannels.filter(
    (channel) => channel.kind === "xiaohongshu" || channel.kind === "douyin",
  );

  return (
    <main className={styles.page}>
      <PageHero context={copy.context} lede={copy.lede} title={copy.title} />
      {workReference ? <WorkReference locale={locale} value={workReference} /> : null}

      <section className={`catalog-container ${styles.contactSection}`} id="consultation" aria-labelledby="consultation-title">
        <div className={styles.contactHeading}>
          <h2 id="consultation-title">{copy.consultationTitle}</h2>
          <p>{copy.consultationIntro}</p>
        </div>
        <ContactChannelList channels={consultationChannels} locale={locale} />
        <Notice title={copy.consultationBoundaryTitle} tone="medical-boundary">
          <p>{copy.consultationBoundary}</p>
        </Notice>
      </section>

      <section className={`catalog-container ${styles.contactSection}`} id="learning" aria-labelledby="learning-title">
        <div className={styles.contactHeading}>
          <h2 id="learning-title">{copy.learningTitle}</h2>
          <p>{copy.learningIntro}</p>
        </div>
        <ContactChannelList channels={emailChannels} locale={locale} />
        <ContactChannelList channels={wechatChannels} locale={locale} />
      </section>

      <section className={`catalog-container ${styles.contactSection}`} aria-labelledby="social-title">
        <div className={styles.contactHeading}>
          <h2 id="social-title">{copy.socialTitle}</h2>
          <p>{copy.socialIntro}</p>
        </div>
        <ContactChannelList channels={socialChannels} locale={locale} />
      </section>

      <section
        className={`catalog-container ${styles.contactSection}`}
        id="licensing-contact"
        aria-labelledby="contact-licensing-title"
      >
        <div className={styles.contactHeading}>
          <h2 id="contact-licensing-title">{copy.licensingTitle}</h2>
          <p>{pricingCopy.contactIntro}</p>
        </div>
        <ContactChannelList channels={licensingChannels} locale={locale} />
      </section>

      <section className={`catalog-container ${styles.contactSection}`} aria-labelledby="exchange-guidelines-title">
        <div className={styles.groupRules}>
          <h2 id="exchange-guidelines-title">{copy.groupRulesTitle}</h2>
          <p className={styles.groupRulesIntro}>{copy.groupRulesIntro}</p>
          <ul className={styles.ruleList}>
            {copy.groupRules.map((rule) => <li key={rule}>{rule}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
