import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Layers, Shield, Target } from "@/components/ui/icons";

const reasons = [
  {
    title: "Комплексное решение задач",
    description: "От диагностики до сопровождения и регулярной отчетности: один подрядчик, единый финконтур.",
    icon: <Layers size={18} />,
    className: "whyus-premium",
  },
  {
    title: "Экспертиза 9+ лет",
    description: "Практикующие финдиректора и аналитики с опытом внедрения в МСП и проектных бизнесах.",
    icon: <Shield size={18} />,
    className: "whyus-contrast",
  },
  {
    title: "Результат под ключ",
    description: "Настраиваем регламенты, отчетность и контроль ДДС, передаем и поддерживаем работу команды.",
    icon: <Target size={18} />,
    className: "whyus-gold",
  },
];

export function WhyUs() {
  return (
    <section id="whyus" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Почему FinWhite"
          title="Премиальный подход к финансовому управлению"
          description="Работаем с владельцами и руководителями, которым нужна точность, скорость и управляемость без лишних слов."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              title={reason.title}
              description={reason.description}
              icon={reason.icon}
              className={`${reason.className} h-full text-[var(--color-foreground)]`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
