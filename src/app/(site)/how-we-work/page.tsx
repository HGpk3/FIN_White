import type { Metadata } from "next";
import { HowWeWork } from "@/components/blocks/HowWeWork";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Calendar, Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Как мы работаем — FinWhite",
  description:
    "Пять шагов FinWhite: диагностика, план, внедрение, сопровождение и отчетность. Прозрачный процесс для руководителей.",
};

export default function HowWeWorkPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Процесс"
          title="Как FinWhite включает финконтур"
          description="Показываем, как строим работу: кто отвечает, какие данные нужны и когда вы увидите первые результаты."
          action={
            <div className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-xs text-[var(--color-muted)] sm:flex">
              <Calendar size={16} /> Встреча 30 минут
            </div>
          }
        />
        <HowWeWork />
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-muted)]">
          <div className="mb-3 text-base font-semibold text-[var(--color-foreground)]">Что потребуется от вас</div>
          <ul className="space-y-2">
            {[
              "Доступ к текущим отчетам и учетным системам",
              "Контакты ответственных по платежам и договорам",
              "Согласование регламентов и ролей",
              "Регулярная обратная связь по итогам спринтов",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={16} className="mt-0.5 text-[var(--color-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
