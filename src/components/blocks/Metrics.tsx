import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Chart, Clock, FileCheck, Shield } from "@/components/ui/icons";

const metrics = [
  {
    label: "Экспертиза",
    value: 9,
    suffix: "+ лет",
    description: "Практический опыт финдиректоров и аналитиков",
    icon: <Clock size={18} />,
  },
  {
    label: "Проекты",
    value: 50,
    suffix: "+",
    description: "Завершенные внедрения финконтуров для МСП",
    icon: <Chart size={18} />,
  },
  {
    label: "Резервы",
    value: 15,
    prefix: "от ",
    suffix: "% затрат",
    description: "Помогаем находить и фиксировать экономию",
    icon: <Shield size={18} />,
  },
  {
    label: "Время",
    value: 100,
    suffix: "+ часов",
    description: "Освобождаем руководителя от рутинных согласований",
    icon: <FileCheck size={18} />,
  },
];

export function Metrics() {
  return (
    <section id="metrics" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Цифры"
          title="Премиальный сервис с измеримым результатом"
          description="Работаем на стыке консалтинга и операционного аутсорсинга, чтобы цифры были точными, а решения — быстрыми."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Card
              key={metric.label}
              title={metric.label}
              description={metric.description}
              icon={metric.icon}
              className="bg-[var(--color-surface)] animate-fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
              footer={
                <AnimatedNumber
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  className="text-lg font-semibold"
                />
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
