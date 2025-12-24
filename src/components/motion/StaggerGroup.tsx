"use client";

import { cn } from "@/lib/cn";
import type { PropsWithChildren } from "react";
import { Children } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface StaggerGroupProps extends PropsWithChildren {
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  y?: number;
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  duration = 0.3,
  y = 12,
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  const parentVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : stagger,
        delayChildren: prefersReducedMotion ? 0 : delay,
      },
    },
  };

  const childVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y },
    show: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      variants={parentVariants}
      viewport={{ once: true, amount: 0.25 }}
    >
      {Children.toArray(children).map((child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
