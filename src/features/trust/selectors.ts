import type {
  ContactAudience,
  ContactKind,
  ImageVariant,
  LicenseScenarioKey,
} from "@/domain/content";
import { isPublishableContact, isPublished } from "@/domain/publication";
import { authorProfile } from "@/data/author";
import { contactChannels } from "@/data/contacts";
import { licenseScenarios } from "@/data/license-scenarios";
import type { Locale } from "@/i18n/config";

export interface PublicLicenseScenario {
  readonly id: LicenseScenarioKey;
  readonly title: string;
  readonly summary: string;
  readonly terms: readonly string[];
}

export interface PublicContactChannel {
  readonly id: string;
  readonly kind: ContactKind;
  readonly label: string;
  readonly value?: string;
  readonly href?: string;
  readonly qrImage?: ImageVariant;
}

export interface PublicAuthorProfile {
  readonly displayName: string;
  readonly biography: readonly string[];
}

export type QueryValue = string | readonly string[] | undefined;

export function getWorkReference(value: QueryValue): string | null {
  const candidate = Array.isArray(value) ? value[0] : value;

  if (!candidate) {
    return null;
  }

  const normalized = candidate.trim().replace(/\s+/g, " ");

  if (
    normalized.length === 0 ||
    normalized.length > 80 ||
    /[\u0000-\u001f\u007f]/u.test(normalized)
  ) {
    return null;
  }

  return normalized;
}

export function getPublishedLicenseScenarios(
  locale: Locale,
): readonly PublicLicenseScenario[] {
  return licenseScenarios.flatMap((scenario) => {
    const summary = scenario.summary?.[locale];

    if (!isPublished(scenario.publication) || !summary || scenario.pricing.mode !== "quote") {
      return [];
    }

    const terms =
      scenario.terms?.[locale]?.flatMap((block) =>
        block.type === "list" ? block.items : [],
      ) ?? [];

    return [
      {
        id: scenario.id,
        title: scenario.title[locale],
        summary,
        terms,
      },
    ];
  });
}

export function getPublishedContacts(
  locale: Locale,
  audience: ContactAudience,
): readonly PublicContactChannel[] {
  return contactChannels.flatMap((channel) => {
    if (!channel.audience.includes(audience) || !isPublishableContact(channel)) {
      return [];
    }

    return [
      {
        id: channel.id,
        kind: channel.kind,
        label: channel.label[locale],
        value: channel.value,
        href: channel.href,
        qrImage: channel.qrImage,
      },
    ];
  });
}

export function getPublishedAuthor(locale: Locale): PublicAuthorProfile | null {
  if (!authorProfile || !isPublished(authorProfile.publication)) {
    return null;
  }

  const biography =
    authorProfile.biography?.[locale]?.flatMap((block) =>
      block.type === "paragraph" ? [block.text] : [],
    ) ?? [];

  if (biography.length === 0) {
    return null;
  }

  return {
    displayName: authorProfile.displayName[locale],
    biography,
  };
}

export function getLicensingEmail(locale: Locale): PublicContactChannel | null {
  return (
    getPublishedContacts(locale, "licensing").find(
      (channel) => channel.kind === "email" && channel.href,
    ) ?? null
  );
}
