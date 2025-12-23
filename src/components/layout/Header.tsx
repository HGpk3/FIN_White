import Link from "next/link";
import { navigation } from "@/content/navigation";
import { contacts } from "@/content/contacts";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Phone } from "@/components/ui/icons";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-background)]/85 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-contrast)] shadow-lg shadow-black/30">
            FW
          </span>
          <div className="leading-tight">
            <div>FinWhite</div>
            <div className="text-xs font-normal text-[var(--color-muted)]">Финансовый консалтинг</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[var(--color-muted)] lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--color-foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`}
            className="hidden items-center gap-2 text-sm text-[var(--color-muted)] sm:flex"
            aria-label="Позвонить FinWhite"
          >
            <Phone size={18} />
            <span>{contacts.phone}</span>
          </Link>
          <Button href="#lead" variant="primary">
            Получить консультацию
          </Button>
        </div>
      </Container>
    </header>
  );
}
