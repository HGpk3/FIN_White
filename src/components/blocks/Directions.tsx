import Link from "next/link";
import { services } from "@/content/services";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowUpRight, Layers } from "@/components/ui/icons";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/motion/TiltCard";

export function Directions() {
  return (
    <section id="services" className="section-ambient py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Услуги"
          title="Ключевые направления FinWhite"
          description="Девять экспертиз: от налогового и управленческого контура до казначейства и инвестиционных проектов."
        />
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
          {services.map((service) => (
            <TiltCard key={service.slug} className="h-full">
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <Card
                  title={service.title}
                  description={service.shortDescription}
                  icon={<Layers size={18} />}
                  className="h-full cursor-pointer bg-[var(--color-surface)]"
                  footer={
                    <span className="inline-flex items-center gap-2 text-[var(--color-accent)]">
                      Подробнее <ArrowUpRight size={16} />
                    </span>
                  }
                >
                  <ul className="mt-3 space-y-1 text-sm text-[var(--color-muted)]">
                    {service.outcomes.slice(0, 3).map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Link>
            </TiltCard>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
