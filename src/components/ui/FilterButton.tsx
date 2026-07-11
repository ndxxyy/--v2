import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "./cn";

export interface FilterButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  readonly children: ReactNode;
  readonly selected?: boolean;
  readonly count?: number;
}

export function FilterButton({
  children,
  className,
  count,
  selected = false,
  type = "button",
  ...props
}: FilterButtonProps) {
  return (
    <button
      {...props}
      aria-pressed={selected}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 rounded-hair border px-4 py-2 text-body-sm font-medium transition-colors [transition-duration:var(--duration-fast)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus disabled:cursor-not-allowed disabled:opacity-45",
        selected
          ? "border-porcelain-700 bg-porcelain-100 text-porcelain-950"
          : "border-rule bg-transparent text-foreground hover:border-porcelain-500 hover:bg-xuan-100",
        className,
      )}
      type={type}
    >
      <span>{children}</span>
      {count !== undefined ? (
        <span className="tabular-numbers text-caption text-muted" aria-label={`${count} 项`}>
          {count}
        </span>
      ) : null}
    </button>
  );
}
