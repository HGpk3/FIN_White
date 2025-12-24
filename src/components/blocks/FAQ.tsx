import { faq } from "@/content/faq";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/motion/TiltCard";

export function FAQ() {
  return (
    <section id="faq" className="section-ambient py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Вопросы и ответы"
          description="Коротко отвечаем на частые вопросы. Если остались детали — оставьте заявку, вернемся в рабочее время."
        />
        <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-2" stagger={0.08}>
          {faq.map((item) => (
            <TiltCard key={item.question} className="h-full">
              <Card title={item.question} description={item.answer} className="bg-[var(--color-surface)]" />
            </TiltCard>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
