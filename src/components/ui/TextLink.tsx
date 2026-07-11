import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "./cn";

export interface TextLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  readonly children: ReactNode;
  readonly quiet?: boolean;
}

export function TextLink({
  children,
  className,
  quiet = false,
  ...props
}: TextLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "rounded-hair underline decoration-1 underline-offset-[0.2em] transition-colors [transition-duration:var(--duration-fast)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus",
        quiet
          ? "text-muted hover:text-foreground"
          : "text-primary decoration-porcelain-500 hover:text-primary-hover hover:decoration-primary-hover",
        className,
      )}
    >
      {children}
    </a>
  );
}
