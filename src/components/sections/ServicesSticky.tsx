"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/cn";

const services = [
  {
    title: "Управленческая отчетность",
    subtitle: "Четкая картина финансов и KPI в реальном времени.",
    bullets: ["P&L, Cash Flow, Баланс", "Единые правила консолидации", "Регулярный управленческий цикл"],
    accent: "from-sky-500/20 via-slate-900/60 to-slate-950",
  },
  {
    title: "Казначейство и ДДС",
    subtitle: "Контроль платежей и предотвращение кассовых разрывов.",
    bullets: ["Платежный календарь", "Контроль лимитов и приоритетов", "Прозрачные правила согласования"],
    accent: "from-emerald-500/15 via-slate-900/70 to-slate-950",
  },
  {
    title: "Бюджетирование",
    subtitle: "Связь стратегии и операционного плана.",
    bullets: ["Бюджеты подразделений", "Сценарное моделирование", "Контроль исполнения"],
    accent: "from-amber-500/15 via-slate-900/70 to-slate-950",
  },
  {
    title: "Финансовый директор на аутсорсе",
    subtitle: "Экспертное управление финансами без нагрузки на штат.",
    bullets: ["Регламентированный финконтур", "Рекомендации по улучшению маржи", "Риск-менеджмент"],
    accent: "from-indigo-500/15 via-slate-900/70 to-slate-950",
  },
];

export function ServicesSticky() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = useMemo(() => services[activeIndex], [activeIndex]);

  return (
    <section id="services" className="section-ambient py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            eyebrow="Услуги"
            title="Фокус на ключевых финансовых сценариях"
            description="Собрали направления, которые дают самый быстрый эффект для владельцев и руководителей."
          />
          <div className="space-y-3">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={cn(
                  "w-full rounded-2xl border border-[var(--color-border)] px-5 py-4 text-left transition-all",
                  "hover:-translate-y-0.5 hover:border-[var(--color-accent)]",
                  activeIndex === index
                    ? "bg-[var(--color-surface)] text-[var(--color-foreground)] shadow-lg shadow-black/30"
                    : "bg-[var(--color-surface)]/60 text-[var(--color-muted)]",
                )}
              >
                <div className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">0{index + 1}</div>
                <div className="mt-2 text-lg font-semibold text-[var(--color-foreground)]">{service.title}</div>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{service.subtitle}</p>
                {activeIndex === index && (
                  <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)] lg:hidden">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[320px] lg:sticky lg:top-28 lg:self-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.title}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={cn(
                "rounded-3xl border border-[var(--color-border)] bg-gradient-to-br p-6 shadow-2xl shadow-black/40 glass-panel",
                activeService.accent,
              )}
            >
              <div className="space-y-4">
                <div className="inline-flex rounded-full border border-[var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Фокус
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--color-foreground)]">{activeService.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{activeService.subtitle}</p>
                </div>
                <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                  {activeService.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
