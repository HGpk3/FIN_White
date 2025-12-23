import { faq } from "@/content/faq";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Вопросы и ответы"
          description="Коротко отвечаем на частые вопросы. Если остались детали — оставьте заявку, вернемся в рабочее время."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <Card key={item.question} title={item.question} description={item.answer} className="bg-[var(--color-surface)]" />
          ))}
        </div>
      </Container>
    </section>
  );
}
