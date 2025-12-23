import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 text-left",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex w-fit rounded-full border border-[var(--color-border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
          {eyebrow}
        </span>
      )}
      <div className="flex w-full flex-wrap items-center justify-between gap-4">
        <div className={cn(align === "center" && "w-full")}>
          <h2 className="text-2xl font-semibold leading-tight text-[var(--color-foreground)] sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
              {description}
            </p>
          )}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>
    </div>
  );
}
