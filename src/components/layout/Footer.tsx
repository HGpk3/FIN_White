import Link from "next/link";
import { navigation } from "@/content/navigation";
import { contacts } from "@/content/contacts";
import { Container } from "@/components/ui/Container";
import { Mail, MapPin, Phone } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border)] bg-[var(--color-surface-strong)]/80">
      <Container className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="text-lg font-semibold">FinWhite</div>
          <p className="text-sm text-[var(--color-muted)]">
            Финансовый консалтинг и аутсорсинг для роста бизнеса. Управленческая отчетность, контроль ДДС и устойчивость решений.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-[var(--color-foreground)]">Навигация</div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-[var(--color-muted)]">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--color-foreground)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2 text-sm text-[var(--color-muted)]">
          <div className="flex items-start gap-2">
            <MapPin size={18} className="text-[var(--color-foreground)]" />
            <span>{contacts.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-[var(--color-foreground)]" />
            <Link href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`}>{contacts.phone}</Link>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-[var(--color-foreground)]" />
            <Link href={`mailto:${contacts.email}`}>{contacts.email}</Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-foreground)]">Сайт:</span>
            <Link href={`https://${contacts.site}`} target="_blank" rel="noreferrer">
              {contacts.site}
            </Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-[var(--color-border)] py-4 text-center text-xs text-[var(--color-muted)]">
        © {new Date().getFullYear()} FinWhite. Финансовый консалтинг и аутсорсинг.
      </div>
    </footer>
  );
}
