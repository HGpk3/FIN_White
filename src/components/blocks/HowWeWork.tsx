"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Calendar, Check, Target } from "@/components/ui/icons";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Диагностика",
    description: "Разбираем текущие процессы, данные и риски. Формируем карту приоритетов.",
  },
  {
    title: "План",
    description: "Согласуем план внедрения финконтура: роли, регламенты, сроки.",
  },
  {
    title: "Внедрение",
    description: "Запускаем управленческую отчетность, платежный календарь и контроль ДДС.",
  },
  {
    title: "Сопровождение",
    description: "Поддерживаем команду, ведем бюджетирование, казначейство и учет.",
  },
  {
    title: "Отчет и результат",
    description: "Регулярно показываем цифры, отклонения и рекомендации для руководства.",
  },
];

export function HowWeWork() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-step"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 },
    );

    stepRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section id="how" className="section-ambient py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Процесс"
          title="Как мы работаем"
          description="Пять шагов: от диагностики до сопровождаемого результата. Каждый этап прозрачен и контролируем."
          action={
            <div className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-xs text-[var(--color-muted)] sm:flex">
              <Calendar size={16} /> Согласуем удобный график
            </div>
          }
        />
        {prefersReducedMotion ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card
                key={step.title}
                title={`${index + 1}. ${step.title}`}
                description={step.description}
                icon={index === steps.length - 1 ? <Target size={18} /> : <Check size={18} />}
                className="bg-[var(--color-surface)]"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  ref={(node) => {
                    stepRefs.current[index] = node;
                  }}
                  data-step={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.04 }}
                >
                  <TiltCard className="h-full">
                    <Card
                      title={`${index + 1}. ${step.title}`}
                      description={step.description}
                      icon={index === steps.length - 1 ? <Target size={18} /> : <Check size={18} />}
                      className="bg-[var(--color-surface)]"
                    />
                  </TiltCard>
                </motion.div>
              ))}
            </div>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xl shadow-black/40 glass-panel">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">Этап</div>
                <div className="mt-3 text-2xl font-semibold text-[var(--color-foreground)]">
                  {steps[activeIndex]?.title}
                </div>
                <p className="mt-3 text-sm text-[var(--color-muted)]">{steps[activeIndex]?.description}</p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
