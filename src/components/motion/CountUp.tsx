"use client";

import { cn } from "@/lib/cn";
import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1000,
  className,
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const targetValue = useMemo(() => Math.round(value), [value]);

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion) {
      // Respect reduced motion by skipping animation.
      setDisplayValue(targetValue);
      return;
    }

    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(targetValue * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, inView, prefersReducedMotion, targetValue]);

  return (
    <span ref={ref} className={cn("metric-number inline-flex items-baseline gap-1", className)}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
