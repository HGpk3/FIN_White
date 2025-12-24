"use client";

import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";

type MagneticVariant = "primary" | "secondary" | "ghost";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: MagneticVariant;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<MagneticVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-contrast)] border border-[var(--color-border)] hover:shadow-lg hover:shadow-black/30",
  secondary:
    "bg-[var(--color-secondary)] text-[var(--color-secondary-contrast)] border border-[var(--color-border)] hover:border-[var(--color-accent)]",
  ghost:
    "bg-transparent text-[var(--color-foreground)] border border-transparent hover:border-[var(--color-border)] hover:bg-[var(--surface)]",
};

export function MagneticButton({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion) return;

    const handleMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      setOffset({
        x: Math.max(Math.min(x / 6, 8), -8),
        y: Math.max(Math.min(y / 6, 8), -8),
      });
    };

    const handleLeave = () => setOffset({ x: 0, y: 0 });

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [prefersReducedMotion]);

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
    variantStyles[variant],
    className,
  );

  const style = prefersReducedMotion ? undefined : { transform: `translate(${offset.x}px, ${offset.y}px)` };

  return (
    <span ref={ref} className="inline-flex">
      {href ? (
        <Link href={href} className={classes} style={style} aria-label={props["aria-label"]}>
          {children}
        </Link>
      ) : (
        <button className={classes} style={style} {...props}>
          {children}
        </button>
      )}
    </span>
  );
}
