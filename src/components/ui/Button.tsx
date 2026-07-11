import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { forwardRef } from "react";

import { cn } from "./cn";

export type ButtonVariant = "primary" | "secondary" | "quiet";

const baseClassName =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-hair border px-5 py-3 text-label font-semibold no-underline transition-[background-color,border-color,color,transform] [transition-duration:var(--duration-fast)] [transition-timing-function:var(--ease-catalog)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-focus active:translate-y-px disabled:cursor-not-allowed disabled:opacity-45 disabled:active:translate-y-0";

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "border-primary bg-primary text-xuan-50 hover:border-primary-hover hover:bg-primary-hover active:border-porcelain-950 active:bg-porcelain-950",
  secondary:
    "border-primary bg-transparent text-primary hover:bg-porcelain-100 active:border-porcelain-950 active:bg-porcelain-100 active:text-porcelain-950",
  quiet:
    "border-transparent bg-transparent px-2 text-primary underline decoration-1 underline-offset-4 hover:text-primary-hover active:text-porcelain-950",
};

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly isLoading?: boolean;
  readonly loadingLabel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className,
    disabled,
    isLoading = false,
    loadingLabel = "处理中",
    type = "button",
    variant = "primary",
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      aria-busy={isLoading || undefined}
      className={cn(baseClassName, variantClassNames[variant], className)}
      disabled={disabled || isLoading}
      ref={ref}
      type={type}
    >
      <span aria-live="polite">{isLoading ? loadingLabel : children}</span>
    </button>
  );
});

export interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly disabled?: boolean;
}

export function ButtonLink({
  children,
  className,
  disabled = false,
  href,
  onClick,
  tabIndex,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...props}
      aria-disabled={disabled || undefined}
      className={cn(
        baseClassName,
        variantClassNames[variant],
        disabled && "pointer-events-none cursor-not-allowed opacity-45",
        className,
      )}
      href={disabled ? undefined : href}
      onClick={disabled ? undefined : onClick}
      tabIndex={disabled ? -1 : tabIndex}
    >
      {children}
    </a>
  );
}
