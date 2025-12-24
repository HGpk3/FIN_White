"use client";

import { cn } from "@/lib/cn";
import type { PropsWithChildren } from "react";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface TiltCardProps extends PropsWithChildren {
  className?: string;
  maxRotate?: number;
}

export function TiltCard({ children, className, maxRotate = 5 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    // rAF throttling to keep mouse-driven tilt smooth.
    let frameId = 0;

    const handleMove = (event: MouseEvent) => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * maxRotate * 2;
        const rotateX = ((y / rect.height) - 0.5) * -maxRotate * 2;
        node.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        frameId = 0;
      });
    };

    const handleLeave = () => {
      node.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [maxRotate, prefersReducedMotion]);

  return (
    <div ref={ref} className={cn("transition-transform duration-300 ease-out will-change-transform", className)}>
      {children}
    </div>
  );
}
