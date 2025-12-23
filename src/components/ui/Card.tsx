import { cn } from "@/lib/cn";
import type { PropsWithChildren, ReactNode } from "react";

interface CardProps extends PropsWithChildren {
  title?: string;
  icon?: ReactNode;
  description?: string;
  className?: string;
  footer?: ReactNode;
}

export function Card({ title, icon, description, className, footer, children }: CardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--surface)]/90 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]",
        className,
      )}
    >
      {icon && (
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--surface-strong)] text-[var(--color-accent)] shadow-inner">
          {icon}
        </div>
      )}
      {title && <h3 className="text-lg font-semibold text-[var(--color-foreground)]">{title}</h3>}
      {description && <p className="text-sm text-[var(--color-muted)]">{description}</p>}
      {children}
      {footer && <div className="pt-2 text-sm text-[var(--color-accent)]">{footer}</div>}
    </div>
  );
}
