import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Shield } from "@/components/ui/icons";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-ambient relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-strong)]/60 py-14 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-orb-primary left-[-6rem] top-[-4rem] animate-drift" />
        <div className="hero-orb hero-orb-secondary right-[-4rem] top-[10rem] animate-float-slow" />
        <div className="hero-orb hero-orb-gold right-[15%] top-[-6rem] animate-float" />
        <div className="hero-orb hero-orb-emerald left-[20%] bottom-[-8rem] animate-float-slow" />
        <div className="hero-beam" />
        <div className="hero-grain" />
      </div>
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] accent-pill">
              <Shield size={16} /> Финансовый консалтинг и аутсорсинг
            </div>
          </Reveal>
          <div className="space-y-4">
            <Reveal delay={0.05}>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Финансовый консалтинг и управленческий аутсорсинг{" "}
                <span className="accent-underline">для роста вашего бизнеса</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base text-[var(--color-muted)] sm:text-lg">
                Строим финконтур, управленческую отчетность и контроль ДДС. Помогаем владельцам и руководителям принимать решения на основе фактов, а не догадок.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#lead" variant="primary" className="accent-ring">
                Получить консультацию
              </Button>
              <Button href="#services" variant="secondary">
                Посмотреть услуги
              </Button>
            </div>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-muted)] card-sheen glass-panel">
              Управленческая отчетность, платежный календарь, бюджетирование и казначейство — в одном контуре.
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-muted)] card-sheen glass-panel">
              <ArrowUpRight className="text-[var(--color-accent)]" size={18} />
              Прозрачность, снижение рисков и +100 часов свободного времени руководителя.
            </div>
          </StaggerGroup>
        </div>

        <Reveal delay={0.12}>
          <div className="relative">
            <div className="pointer-events-none absolute -left-6 top-8 hidden w-40 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-4 text-xs text-[var(--color-muted)] shadow-xl shadow-black/40 backdrop-blur-xl lg:block">
              Быстрый аудит показателей и внятная финмодель.
            </div>
            <div className="pointer-events-none absolute -right-8 bottom-6 hidden w-44 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-4 text-xs text-[var(--color-muted)] shadow-xl shadow-black/40 backdrop-blur-xl lg:block animate-float-slow">
              Прозрачные процессы казначейства и контроля ДДС.
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-white/5 via-[var(--color-surface)] to-black/60 p-8 shadow-2xl shadow-black/40 card-sheen glass-panel animate-float">
              <div className="space-y-4 text-sm text-[var(--color-muted)]">
                <div className="flex items-center justify-between">
                  <span className="accent-label">Экспертиза</span>
                  <CountUp value={9} suffix="+ лет" className="text-lg font-semibold" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="accent-label">Проекты</span>
                  <CountUp value={50} suffix="+" className="text-lg font-semibold" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="accent-label">Резервы</span>
                  <CountUp value={15} prefix="от " suffix="% затрат" className="text-lg font-semibold" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="accent-label">Освобождаем</span>
                  <CountUp value={100} suffix="+ часов" className="text-lg font-semibold" />
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-strong)]/80 p-5 text-sm text-[var(--color-muted)] glass-panel">
                «Надежный финконтур — это управляемость, прозрачность и спокойствие руководителя».
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
