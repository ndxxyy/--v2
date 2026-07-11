"use client";

import {
  useEffect,
  useId,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";

import { Button } from "./Button";
import { cn } from "./cn";

export interface ModalDialogProps {
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
  readonly title: string;
  readonly description?: string;
  readonly children: ReactNode;
  readonly footer?: ReactNode;
  readonly closeLabel?: string;
  readonly returnFocusRef?: RefObject<HTMLElement | null>;
  readonly className?: string;
}

export function ModalDialog({
  children,
  className,
  closeLabel = "关闭",
  description,
  footer,
  onOpenChange,
  open,
  returnFocusRef,
  title,
}: ModalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const wasOpenRef = useRef(false);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
      wasOpenRef.current = true;
    } else if (!open && dialog.open) {
      dialog.close();
    }

    if (!open && wasOpenRef.current) {
      returnFocusRef?.current?.focus();
      wasOpenRef.current = false;
    }
  }, [open, returnFocusRef]);

  function requestClose() {
    onOpenChange(false);
  }

  return (
    <dialog
      aria-describedby={description ? descriptionId : undefined}
      aria-labelledby={titleId}
      className={cn(
        "fixed inset-0 m-auto max-h-[calc(100dvh-36px)] w-[min(640px,calc(100vw-36px))] rounded-dialog border border-rule bg-surface p-0 text-foreground shadow-dialog backdrop:bg-ink-950/55 open:flex open:flex-col",
        className,
      )}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          requestClose();
        }
      }}
      onClose={() => {
        if (open) {
          onOpenChange(false);
        }
      }}
      ref={dialogRef}
    >
      <header className="flex items-start justify-between gap-6 border-b border-rule p-5 md:p-8">
        <div>
          <h2 className="text-heading-2" id={titleId}>
            {title}
          </h2>
          {description ? (
            <p className="reading-measure mt-2 text-body-sm text-muted" id={descriptionId}>
              {description}
            </p>
          ) : null}
        </div>
        <Button autoFocus className="shrink-0" onClick={requestClose} variant="quiet">
          {closeLabel}
        </Button>
      </header>
      <div className="min-h-0 overflow-y-auto p-5 md:p-8">{children}</div>
      {footer ? (
        <footer className="flex flex-wrap justify-end gap-3 border-t border-rule p-5 md:px-8 md:py-6">
          {footer}
        </footer>
      ) : null}
    </dialog>
  );
}
