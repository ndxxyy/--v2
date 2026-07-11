import type { Locale } from "@/i18n/config";

export type LocalizedText = Readonly<Record<Locale, string>>;
export type OptionalLocalizedText = Readonly<Partial<Record<Locale, string>>>;

export type PublicationStatus = "draft" | "review" | "published" | "archived";

export interface PublicationRecord {
  readonly status: PublicationStatus;
  readonly publishedAt?: string;
  readonly updatedAt?: string;
}

export type ContentBlock =
  | { readonly type: "paragraph"; readonly text: string }
  | { readonly type: "heading"; readonly level: 2 | 3; readonly text: string }
  | {
      readonly type: "list";
      readonly style: "ordered" | "unordered";
      readonly items: readonly string[];
    }
  | {
      readonly type: "notice";
      readonly tone: "information" | "medical-boundary" | "rights";
      readonly text: string;
    }
  | { readonly type: "image"; readonly imageId: string; readonly caption?: string };

export type LocalizedRichText = Readonly<
  Partial<Record<Locale, readonly ContentBlock[]>>
>;

export type WorkCategoryKey = "meridians" | "herbs" | "formulas";

export type CaseCategoryKey =
  | "internal-medicine"
  | "gynecology"
  | "pediatrics"
  | "acupuncture"
  | "care-notes"
  | "other-clinical-notes";

export interface Category<Key extends string> {
  readonly key: Key;
  readonly name: LocalizedText;
  readonly summary?: OptionalLocalizedText;
  readonly order: number;
  readonly publication: PublicationRecord;
}

export type ImageVariantKind = "thumbnail" | "preview" | "social";
export type PublicImageFormat = "webp" | "avif" | "jpg" | "png";

export interface ImageVariant {
  readonly kind: ImageVariantKind;
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly format: PublicImageFormat;
  readonly byteSize?: number;
}

export interface WorkImage {
  readonly id: string;
  readonly role: "cover" | "plate" | "detail";
  readonly title?: OptionalLocalizedText;
  readonly alt: LocalizedText;
  readonly order: number;
  readonly variants: readonly ImageVariant[];
}

export interface ImageGroup {
  readonly id: string;
  readonly workId: string;
  readonly images: readonly WorkImage[];
}

export interface RightsRecord {
  readonly ownership: "unverified" | "author-owned" | "licensed";
  readonly copyrightStatus: "hidden" | "pending" | "registered";
  readonly registrationNumber?: string;
  readonly evidenceRef?: string;
}

export type LicenseScenarioKey =
  | "personal-study"
  | "clinic-display"
  | "course-lecture"
  | "social-media"
  | "publishing-commercial"
  | "custom-creation";

export interface Work {
  readonly id: string;
  readonly slug: string;
  readonly code?: string;
  readonly category: WorkCategoryKey;
  readonly title: LocalizedText;
  readonly summary?: OptionalLocalizedText;
  readonly description?: LocalizedRichText;
  readonly imageGroupId?: string;
  readonly tags: readonly string[];
  readonly featured: boolean;
  readonly rights: RightsRecord;
  readonly licenseScenarioIds: readonly LicenseScenarioKey[];
  readonly publication: PublicationRecord;
}

export type LicensePricing =
  | { readonly mode: "quote" }
  | {
      readonly mode: "fixed";
      readonly amount: number;
      readonly currency: string;
    };

export interface LicenseScenario {
  readonly id: LicenseScenarioKey;
  readonly title: LocalizedText;
  readonly summary?: OptionalLocalizedText;
  readonly terms?: LocalizedRichText;
  readonly pricing: LicensePricing;
  readonly publication: PublicationRecord;
}

export type ReviewStatus = "pending" | "approved" | "rejected";

export interface ReviewRecord {
  readonly status: ReviewStatus;
  readonly reviewedAt?: string;
  readonly evidenceRef?: string;
}

export interface AuthorizationRecord extends ReviewRecord {
  readonly scope?: "web-publication";
}

export interface ClinicalCase {
  readonly id: string;
  readonly slug: string;
  readonly category: CaseCategoryKey;
  readonly title: LocalizedText;
  readonly summary?: OptionalLocalizedText;
  readonly content: LocalizedRichText;
  readonly clinicalDate?: {
    readonly precision: "year" | "month";
    readonly value: string;
  };
  readonly anonymization: ReviewRecord;
  readonly patientAuthorization: AuthorizationRecord;
  readonly editorialReview: ReviewRecord;
  readonly publication: PublicationRecord;
}

export type ContactKind =
  | "phone"
  | "email"
  | "wechat"
  | "xiaohongshu"
  | "douyin";

export type ContactAudience = "consultation" | "learning" | "licensing";

export interface ContactChannel {
  readonly id: string;
  readonly kind: ContactKind;
  readonly audience: readonly ContactAudience[];
  readonly label: LocalizedText;
  readonly value?: string;
  readonly href?: string;
  readonly qrImage?: ImageVariant;
  readonly verifiedAt?: string;
  readonly publication: PublicationRecord;
}

export interface Credential {
  readonly id: string;
  readonly title: LocalizedText;
  readonly issuer?: LocalizedText;
  readonly evidenceRef: string;
  readonly review: ReviewRecord;
}

export interface AuthorProfile {
  readonly displayName: LocalizedText;
  readonly biography?: LocalizedRichText;
  readonly credentials: readonly Credential[];
  readonly publication: PublicationRecord;
}

