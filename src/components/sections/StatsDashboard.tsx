"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CountUp } from "@/components/ui/CountUp";
import { Sparkline } from "@/components/ui/Sparkline";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/cn";

const segments = ["Месяц", "Год", "Все время"] as const;

const metrics = {
  "Месяц": [
    {
      label: "Экономия затрат",
      value: 12,
      suffix: "%",
      trend: [12, 14, 13, 15, 16, 18, 17],
    },
    {
      label: "Скорость решений",
      value: 42,
      suffix: "%",
      trend: [18, 22, 28, 31, 33, 38, 42],
    },
    {
      label: "Контроль ДДС",
      value: 96,
      suffix: "%",
      trend: [78, 80, 84, 88, 90, 93, 96],
    },
    {
      label: "Свободное время",
      value: 28,
      suffix: "ч",
      trend: [10, 12, 16, 18, 20, 24, 28],
    },
  ],
  "Год": [
    {
      label: "Экономия затрат",
      value: 18,
      suffix: "%",
      trend: [8, 10, 11, 13, 14, 16, 18],
    },
    {
      label: "Скорость решений",
      value: 65,
      suffix: "%",
      trend: [20, 25, 31, 39, 47, 55, 65],
    },
    {
      label: "Контроль ДДС",
      value: 98,
      suffix: "%",
      trend: [82, 85, 88, 92, 94, 96, 98],
    },
    {
      label: "Свободное время",
      value: 120,
      suffix: "ч",
      trend: [40, 55, 70, 80, 95, 110, 120],
    },
  ],
  "Все время": [
    {
      label: "Экономия затрат",
      value: 22,
      suffix: "%",
      trend: [6, 8, 12, 15, 18, 20, 22],
    },
    {
      label: "Скорость решений",
      value: 78,
      suffix: "%",
      trend: [15, 20, 28, 38, 50, 64, 78],
    },
    {
      label: "Контроль ДДС",
      value: 99,
      suffix: "%",
      trend: [80, 86, 90, 94, 96, 98, 99],
    },
    {
      label: "Свободное время",
      value: 210,
      suffix: "ч",
      trend: [50, 70, 90, 120, 150, 180, 210],
    },
  ],
};

export function StatsDashboard() {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState<(typeof segments)[number]>("Месяц");
  const data = useMemo(() => metrics[active], [active]);

  return (
    <section id="metrics" className="section-ambient py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Цифры"
          title="Мини-дэшборд эффективности FinWhite"
          description="Сигнализируем метрики, которые важны владельцу: экономия, скорость, прозрачность."
        />
        <div className="flex flex-wrap gap-3">
          {segments.map((segment) => (
            <button
              key={segment}
              type="button"
              onClick={() => setActive(segment)}
              className={cn(
                "rounded-full border border-[var(--color-border)] px-4 py-2 text-sm transition-all",
                segment === active
                  ? "bg-[var(--color-surface)] text-[var(--color-foreground)] shadow-lg shadow-black/30"
                  : "bg-[var(--color-surface)]/60 text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
              )}
            >
              {segment}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {data.map((metric, index) => {
            const isPrimary = index === 0;

            return (
              <TiltCard key={metric.label} className={cn("h-full", isPrimary && "lg:col-span-2")}>
                <motion.div
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
                  className={cn(
                    "card-sheen card-border-glow rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm glass-panel",
                    isPrimary && "primary-metric primary-metric-glow",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">{metric.label}</h3>
                    <span className="text-xs text-[var(--color-muted)]"># {index + 1}</span>
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <CountUp value={metric.value} suffix={metric.suffix} className="text-3xl font-semibold" />
                    <div className="text-xs text-[var(--color-muted)]">+{Math.round(metric.value / 3)}%</div>
                  </div>
                  <Sparkline data={metric.trend} className="mt-4 text-[var(--color-accent)]" />
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
