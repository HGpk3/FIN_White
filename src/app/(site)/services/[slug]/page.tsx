import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ArrowUpRight, Check, Layers, Users } from "@/components/ui/icons";
import { LeadForm } from "@/components/blocks/LeadForm";

type Props = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Услуга не найдена | FinWhite",
    };
  }

  return {
    title: `${service.title} — FinWhite`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <section className="py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionTitle
          eyebrow="Услуга"
          title={service.title}
          description={service.shortDescription}
          action={<Button href="#lead">Обсудить задачу</Button>}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card
            title="Что делаем"
            icon={<Layers size={18} />}
            className="bg-[var(--color-surface)]"
          >
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              {service.whatWeDo.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 text-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card
            title="Кому подходит"
            icon={<Users size={18} />}
            className="bg-[var(--color-surface)]"
          >
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card
          title="Результат и эффект"
          icon={<ArrowUpRight size={18} />}
          className="bg-[var(--color-surface)]"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-lg border border-[var(--color-border)]/80 bg-[var(--color-surface-strong)]/50 px-4 py-3 text-sm text-[var(--color-muted)]">
                {outcome}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button href="#lead" variant="primary">
              Получить консультацию
            </Button>
            <Link href="/services" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)]">
              Вернуться ко всем услугам
            </Link>
          </div>
        </Card>

        <LeadForm />
      </Container>
    </section>
  );
}
