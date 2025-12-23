import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Calendar, Check, Target } from "@/components/ui/icons";

const steps = [
  {
    title: "Диагностика",
    description: "Разбираем текущие процессы, данные и риски. Формируем карту приоритетов.",
  },
  {
    title: "План",
    description: "Согласуем план внедрения финконтура: роли, регламенты, сроки.",
  },
  {
    title: "Внедрение",
    description: "Запускаем управленческую отчетность, платежный календарь и контроль ДДС.",
  },
  {
    title: "Сопровождение",
    description: "Поддерживаем команду, ведем бюджетирование, казначейство и учет.",
  },
  {
    title: "Отчет и результат",
    description: "Регулярно показываем цифры, отклонения и рекомендации для руководства.",
  },
];

export function HowWeWork() {
  return (
    <section id="how" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Процесс"
          title="Как мы работаем"
          description="Пять шагов: от диагностики до сопровождаемого результата. Каждый этап прозрачен и контролируем."
          action={
            <div className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-xs text-[var(--color-muted)] sm:flex">
              <Calendar size={16} /> Согласуем удобный график
            </div>
          }
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              title={`${index + 1}. ${step.title}`}
              description={step.description}
              icon={index === steps.length - 1 ? <Target size={18} /> : <Check size={18} />}
              className="bg-[var(--color-surface)]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
