import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CountUp } from "@/components/motion/CountUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { TiltCard } from "@/components/motion/TiltCard";
import { Chart, Clock, FileCheck, Shield } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

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
    <section id="metrics" className="section-ambient py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Цифры"
          title="Премиальный сервис с измеримым результатом"
          description="Работаем на стыке консалтинга и операционного аутсорсинга, чтобы цифры были точными, а решения — быстрыми."
        />
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {metrics.map((metric, index) => {
            const isPrimary = index === 0;

            return (
              <TiltCard key={metric.label} className={cn("h-full", isPrimary && "lg:col-span-2")}>
                <Card
                  title={metric.label}
                  description={metric.description}
                  icon={metric.icon}
                  className={cn("bg-[var(--color-surface)]", isPrimary && "primary-metric primary-metric-glow")}
                  footer={
                    <CountUp
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      className="text-lg font-semibold"
                    />
                  }
                />
              </TiltCard>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
