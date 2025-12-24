"use client";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Briefcase, Users } from "@/components/ui/icons";
import { TiltCard } from "@/components/ui/TiltCard";
import { motion, useReducedMotion } from "framer-motion";

const clientGroups = [
  "Малый и средний бизнес с потребностью в управляемой отчетности",
  "Руководители направлений и проектов, которым нужен контроль затрат",
  "Предприниматели и финансовые специалисты, ищущие внешнюю экспертизу",
  "Стартапы и растущие проекты, которым важно поставить финконтур",
];

export function Clients() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="clients" className="section-ambient py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Клиенты"
          title="Наши клиенты — это"
          description="Работаем с командами, где важны прозрачность, контроль и управляемость без перегрузки операцией."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {clientGroups.map((group, idx) => (
            <motion.div
              key={group}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: idx * 0.06 }}
            >
              <TiltCard className="h-full">
                <Card
                  description={group}
                  icon={idx % 2 === 0 ? <Briefcase size={18} /> : <Users size={18} />}
                  className="bg-[var(--color-surface)]"
                />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
