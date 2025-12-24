"use client";

import { cn } from "@/lib/cn";
import { useEffect, useMemo, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1200,
  className,
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);
  const formattedValue = useMemo(() => Math.round(value), [value]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplay(formattedValue);
      return;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(formattedValue * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, formattedValue]);

  return (
    <span className={cn("metric-number inline-flex items-baseline gap-1 animate-breathe", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
