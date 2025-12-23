import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowUpRight, Layers } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Услуги FinWhite — финансовый консалтинг и аутсорсинг",
  description:
    "Девять направлений FinWhite: налоговый консалтинг, отчетность, финменеджмент, казначейство, бюджетирование и инвестиционная экспертиза.",
};

export default function ServicesPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Услуги"
          title="Экспертиза FinWhite"
          description="Выберите направление — подготовим пакет работ и формат сопровождения."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group">
              <Card
                title={service.title}
                description={service.shortDescription}
                icon={<Layers size={18} />}
                className="h-full bg-[var(--color-surface)]"
                footer={
                  <span className="inline-flex items-center gap-2 text-[var(--color-accent)]">
                    Подробнее <ArrowUpRight size={16} />
                  </span>
                }
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
