import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Briefcase, Users } from "@/components/ui/icons";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/motion/TiltCard";

const clientGroups = [
  "Малый и средний бизнес с потребностью в управляемой отчетности",
  "Руководители направлений и проектов, которым нужен контроль затрат",
  "Предприниматели и финансовые специалисты, ищущие внешнюю экспертизу",
  "Стартапы и растущие проекты, которым важно поставить финконтур",
];

export function Clients() {
  return (
    <section id="clients" className="section-ambient py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Клиенты"
          title="Наши клиенты — это"
          description="Работаем с командами, где важны прозрачность, контроль и управляемость без перегрузки операцией."
        />
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
          {clientGroups.map((group, idx) => (
            <TiltCard key={group} className="h-full">
              <Card
                description={group}
                icon={idx % 2 === 0 ? <Briefcase size={18} /> : <Users size={18} />}
                className="bg-[var(--color-surface)]"
              />
            </TiltCard>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
