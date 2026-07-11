import { TextLink } from "./TextLink";

export interface ClinicalCaseSummaryProps {
  readonly title: string;
  readonly href: string;
  readonly category?: string;
  readonly publishedAt?: string;
  readonly summary?: string;
  readonly actionLabel?: string;
}

export function ClinicalCaseSummary({
  actionLabel = "阅读全文",
  category,
  href,
  publishedAt,
  summary,
  title,
}: ClinicalCaseSummaryProps) {
  return (
    <article className="grid gap-4 border-t border-rule py-6 md:grid-cols-12 md:gap-8 md:py-8">
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-caption text-muted md:col-span-3">
        {category ? <span>{category}</span> : null}
        {publishedAt ? <time dateTime={publishedAt}>{publishedAt}</time> : null}
      </div>
      <div className="md:col-span-9">
        <h3 className="text-heading-3">{title}</h3>
        {summary ? (
          <p className="reading-measure mt-3 text-body-sm text-muted">{summary}</p>
        ) : null}
        <TextLink className="mt-5 inline-block" href={href}>
          {actionLabel}
        </TextLink>
      </div>
    </article>
  );
}
