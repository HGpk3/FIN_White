import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AlertTriangle } from "@/components/ui/icons";

const problems = [
  "Нет прозрачной управленческой отчетности и единого источника данных",
  "Маржинальность падает, затраты растут, а причины неочевидны",
  "Платежи и обязательства управляются вручную, высокий риск кассовых разрывов",
  "Руководитель тратит время на операционные согласования вместо развития",
];

export function Problems() {
  return (
    <section id="problems" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Знакомые проблемы?"
          title="Финансовые вопросы, которые тормозят рост"
          description="Помогаем владельцам и руководителям навести порядок в цифрах, убрать ручной труд и снизить риски."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.map((item) => (
            <Card
              key={item}
              icon={<AlertTriangle size={18} />}
              description={item}
              className="bg-[var(--color-surface)]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
