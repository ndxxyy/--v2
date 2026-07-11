import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "./cn";

export type ImageRatio = "portrait" | "landscape" | "square";

const ratioClassNames: Record<ImageRatio, string> = {
  portrait: "aspect-work-portrait",
  landscape: "aspect-work-landscape",
  square: "aspect-work-square",
};

export interface ImageFrameProps extends HTMLAttributes<HTMLDivElement> {
  readonly children?: ReactNode;
  readonly ratio: ImageRatio;
  readonly loading?: boolean;
  readonly loadingLabel?: string;
}

export function ImageFrame({
  children,
  className,
  loading = false,
  loadingLabel = "图像加载中",
  ratio,
  ...props
}: ImageFrameProps) {
  return (
    <div
      {...props}
      aria-busy={loading || undefined}
      aria-label={loading ? loadingLabel : undefined}
      className={cn(
        "relative overflow-hidden border border-rule bg-xuan-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover",
        ratioClassNames[ratio],
        loading && "animate-pulse motion-reduce:animate-none",
        className,
      )}
      role={loading ? "status" : undefined}
    >
      {loading ? <span className="sr-only">{loadingLabel}</span> : children}
    </div>
  );
}
