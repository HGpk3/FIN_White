import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-contrast)] border border-[var(--color-border)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30",
  secondary:
    "bg-[var(--color-secondary)] text-[var(--color-secondary-contrast)] border border-[var(--color-border)] hover:border-[var(--color-accent)]",
  ghost:
    "bg-transparent text-[var(--color-foreground)] border border-transparent hover:border-[var(--color-border)] hover:bg-[var(--surface)]",
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={props["aria-label"]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
