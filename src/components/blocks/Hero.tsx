import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Shield } from "@/components/ui/icons";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-strong)]/60 py-14 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-orb-primary left-[-6rem] top-[-4rem] animate-drift" />
        <div className="hero-orb hero-orb-secondary right-[-4rem] top-[10rem] animate-float-slow" />
      </div>
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <Shield size={16} /> Финансовый консалтинг и аутсорсинг
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl animate-fade-up" style={{ animationDelay: "120ms" }}>
              Финансовый консалтинг и управленческий аутсорсинг для роста вашего бизнеса
            </h1>
            <p className="text-base text-[var(--color-muted)] sm:text-lg animate-fade-up" style={{ animationDelay: "200ms" }}>
              Строим финконтур, управленческую отчетность и контроль ДДС. Помогаем владельцам и руководителям принимать решения на основе фактов, а не догадок.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up" style={{ animationDelay: "280ms" }}>
            <Button href="#lead" variant="primary">
              Получить консультацию
            </Button>
            <Button href="#services" variant="secondary">
              Посмотреть услуги
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-fade-up" style={{ animationDelay: "360ms" }}>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-muted)] card-sheen">
              Управленческая отчетность, платежный календарь, бюджетирование и казначейство — в одном контуре.
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-muted)] card-sheen">
              <ArrowUpRight className="text-[var(--color-accent)]" size={18} />
              Прозрачность, снижение рисков и +100 часов свободного времени руководителя.
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-white/5 via-[var(--color-surface)] to-black/60 p-8 shadow-2xl shadow-black/40 card-sheen animate-float">
          <div className="space-y-4 text-sm text-[var(--color-muted)]">
            <div className="flex items-center justify-between">
              <span>Экспертиза</span>
              <span className="text-lg font-semibold text-[var(--color-foreground)]">9+ лет</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Проекты</span>
              <span className="text-lg font-semibold text-[var(--color-foreground)]">50+</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Резервы</span>
              <span className="text-lg font-semibold text-[var(--color-foreground)]">от 15% затрат</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Освобождаем</span>
              <span className="text-lg font-semibold text-[var(--color-foreground)]">100+ часов</span>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)]/80 p-5 text-sm text-[var(--color-muted)]">
            «Надежный финконтур — это управляемость, прозрачность и спокойствие руководителя».
          </div>
        </div>
      </Container>
    </section>
  );
}
