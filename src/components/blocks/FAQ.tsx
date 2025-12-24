"use client";

import { faq } from "@/content/faq";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion, useReducedMotion } from "framer-motion";

export function FAQ() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="section-ambient py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Вопросы и ответы"
          description="Коротко отвечаем на частые вопросы. Если остались детали — оставьте заявку, вернемся в рабочее время."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faq.map((item, index) => (
            <motion.div
              key={item.question}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.06 }}
            >
              <TiltCard className="h-full">
                <Card title={item.question} description={item.answer} className="bg-[var(--color-surface)]" />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
