"use client";

import { cn } from "@/lib/cn";

interface SparklineProps {
  data: number[];
  className?: string;
}

const normalize = (value: number, min: number, max: number) => {
  if (max - min === 0) return 0;
  return (value - min) / (max - min);
};

export function Sparkline({ data, className }: SparklineProps) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - normalize(value, min, max) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" className={cn("h-12 w-full overflow-visible", className)}>
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
