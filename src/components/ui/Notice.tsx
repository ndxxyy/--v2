import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./cn";

export type NoticeTone = "information" | "medical-boundary" | "rights" | "critical";

const toneClassNames: Record<NoticeTone, string> = {
  information: "border-porcelain-300 bg-porcelain-50 text-ink-950",
  "medical-boundary": "border-celadon-500 bg-celadon-50 text-ink-950",
  rights: "border-ink-300 bg-xuan-100 text-ink-950",
  critical: "border-cinnabar-500 bg-cinnabar-100 text-cinnabar-900",
};

export interface NoticeProps extends HTMLAttributes<HTMLDivElement> {
  readonly title: string;
  readonly children: ReactNode;
  readonly tone?: NoticeTone;
}

export function Notice({
  children,
  className,
  title,
  tone = "information",
  ...props
}: NoticeProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-soft border p-5 md:p-6",
        toneClassNames[tone],
        className,
      )}
      role={tone === "critical" ? "alert" : "note"}
    >
      <p className="font-display text-heading-3">{title}</p>
      <div className="reading-measure mt-2 text-body-sm leading-relaxed">{children}</div>
    </div>
  );
}
