import type { ReactNode } from "react";

import { TextLink } from "./TextLink";

export interface WorkEntryProps {
  readonly title: string;
  readonly href: string;
  readonly image: ReactNode;
  readonly category?: string;
  readonly code?: string;
  readonly summary?: string;
  readonly actionLabel?: string;
}

export function WorkEntry({
  actionLabel = "查看作品",
  category,
  code,
  href,
  image,
  summary,
  title,
}: WorkEntryProps) {
  const hasMetadata = Boolean(category || code);

  return (
    <article className="grid gap-6 border-t border-rule py-6 md:grid-cols-12 md:gap-8 md:py-8">
      <div className="md:col-span-5">{image}</div>
      <div className="flex flex-col items-start md:col-span-7 md:py-2">
        {hasMetadata ? (
          <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-caption text-muted">
            {category ? <span>{category}</span> : null}
            {code ? <span className="tabular-numbers">作品编号 {code}</span> : null}
          </div>
        ) : null}
        <h3 className="text-heading-2">{title}</h3>
        {summary ? (
          <p className="reading-measure mt-4 text-body-sm text-muted">{summary}</p>
        ) : null}
        <TextLink className="mt-6" href={href}>
          {actionLabel}
        </TextLink>
      </div>
    </article>
  );
}
