"use client";

import { cn } from "@/lib/cn";
import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export function Reveal({ children, className, delay = 0, duration = 0.4, y = 14 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
