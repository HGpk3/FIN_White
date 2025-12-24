"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AlertTriangle, Shield, Target } from "@/components/ui/icons";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion, useReducedMotion } from "framer-motion";

const problems = [
  {
    title: "Нет единой картины",
    description: "Отчетность разрозненная, цифры не сходятся между отделами.",
    icon: <AlertTriangle size={18} />,
  },
  {
    title: "Сжатая маржа",
    description: "Затраты растут быстрее выручки, причины неочевидны.",
    icon: <Target size={18} />,
  },
  {
    title: "Кассовые разрывы",
    description: "Платежи управляются вручную, нет прозрачного календаря.",
    icon: <Shield size={18} />,
  },
];

export function Problems() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="problems" className="section-ambient py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Знакомые проблемы?"
          title="Финансовые вопросы, которые тормозят рост"
          description="Помогаем владельцам и руководителям навести порядок в цифрах, убрать ручной труд и снизить риски."
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <TiltCard className="h-full">
              <Card
                title="Структура теряется"
                description="Система отчетности не выстроена, решения принимаются на ощущениях."
                icon={<AlertTriangle size={18} />}
                className="h-full bg-[var(--color-surface)] primary-metric primary-metric-glow"
              >
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    Нет единого источника данных
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    Метрики не синхронизированы между отделами
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    Сложно прогнозировать денежный поток
                  </li>
                </ul>
              </Card>
            </TiltCard>
          </motion.div>
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.06 }}
            >
              <TiltCard className="h-full">
                <Card
                  title={problem.title}
                  description={problem.description}
                  icon={problem.icon}
                  className="h-full bg-[var(--color-surface)]"
                >
                  <ul className="card-details mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                    <li>Данные не доходят вовремя</li>
                    <li>Сложно управлять приоритетами</li>
                  </ul>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
