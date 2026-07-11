import type { ClinicalCase, ContactChannel, PublicationRecord } from "./content";

export function isPublished(publication: PublicationRecord): boolean {
  return publication.status === "published";
}

export function isPublishableClinicalCase(clinicalCase: ClinicalCase): boolean {
  return (
    isPublished(clinicalCase.publication) &&
    clinicalCase.anonymization.status === "approved" &&
    clinicalCase.patientAuthorization.status === "approved" &&
    clinicalCase.editorialReview.status === "approved"
  );
}

export function isPublishableContact(channel: ContactChannel): boolean {
  const hasReachableValue = Boolean(channel.value || channel.href || channel.qrImage);

  return isPublished(channel.publication) && hasReachableValue;
}

