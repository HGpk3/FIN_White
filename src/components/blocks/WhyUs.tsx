"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Layers, Shield, Target } from "@/components/ui/icons";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion, useReducedMotion } from "framer-motion";

const reasons = [
  {
    title: "Комплексное решение задач",
    description: "От диагностики до сопровождения и регулярной отчетности: один подрядчик, единый финконтур.",
    icon: <Layers size={18} />,
    className: "whyus-premium",
  },
  {
    title: "Экспертиза 9+ лет",
    description: "Практикующие финдиректора и аналитики с опытом внедрения в МСП и проектных бизнесах.",
    icon: <Shield size={18} />,
    className: "whyus-contrast",
  },
  {
    title: "Результат под ключ",
    description: "Настраиваем регламенты, отчетность и контроль ДДС, передаем и поддерживаем работу команды.",
    icon: <Target size={18} />,
    className: "whyus-gold",
  },
];

export function WhyUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="whyus" className="section-ambient py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Почему FinWhite"
          title="Премиальный подход к финансовому управлению"
          description="Работаем с владельцами и руководителями, которым нужна точность, скорость и управляемость без лишних слов."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.06 }}
            >
              <TiltCard className="h-full">
                <Card
                  title={reason.title}
                  description={reason.description}
                  icon={reason.icon}
                  className={`${reason.className} h-full text-[var(--color-foreground)]`}
                />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
