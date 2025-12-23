'use client';

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Mail, Phone } from "@/components/ui/icons";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="lead" className="py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Связаться"
          title="Получить консультацию"
          description="Оставьте контакты, чтобы обсудить задачи и подобрать формат работы: консалтинг или аутсорсинг."
        />
        <form
          className="grid grid-cols-1 gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-lg"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm text-[var(--color-muted)]" htmlFor="name">
                Имя и компания
              </label>
              <input
                id="name"
                name="name"
                className="h-11 rounded-lg px-3 text-sm"
                placeholder="Иван, FinWhite"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[var(--color-muted)]" htmlFor="phone">
                Телефон
              </label>
              <div className="relative">
                <Phone size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
                <input
                  id="phone"
                  name="phone"
                  className="h-11 w-full rounded-lg px-3 pl-9 text-sm"
                  placeholder="+7 (999) 000-00-00"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[var(--color-muted)]" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <Mail size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-11 w-full rounded-lg px-3 pl-9 text-sm"
                  placeholder="name@company.ru"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[var(--color-muted)]" htmlFor="message">
                Задача или запрос
              </label>
              <input
                id="message"
                name="message"
                className="h-11 rounded-lg px-3 text-sm"
                placeholder="Отчетность, казначейство, финмодель"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="flex items-start gap-2 text-xs text-[var(--color-muted)]">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-[var(--color-border)]" />
              <span>Согласен на обработку персональных данных и получение информации от FinWhite.</span>
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" variant="primary">
                Отправить заявку
              </Button>
              {submitted && (
                <span className="text-xs text-[var(--color-muted)]">Заявка сохранена. Мы свяжемся в рабочее время.</span>
              )}
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
}
