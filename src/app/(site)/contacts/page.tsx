import type { Metadata } from "next";
import Link from "next/link";
import { contacts } from "@/content/contacts";
import { LeadForm } from "@/components/blocks/LeadForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Mail, MapPin, Phone } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Контакты FinWhite",
  description: "Адрес, телефон и email FinWhite. Свяжитесь, чтобы обсудить задачи по финансовому контуру и отчетности.",
};

export default function ContactsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow="Контакты"
          title="Связаться с FinWhite"
          description="Оперативно отвечаем в рабочее время. Уточним задачу, предложим формат и сроки."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card
            title="Адрес"
            description={contacts.address}
            icon={<MapPin size={18} />}
            className="bg-[var(--color-surface)]"
          />
          <Card
            title="Телефон"
            description={contacts.phone}
            icon={<Phone size={18} />}
            className="bg-[var(--color-surface)]"
            footer={<Link href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`}>Позвонить</Link>}
          />
          <Card
            title="Email"
            description={contacts.email}
            icon={<Mail size={18} />}
            className="bg-[var(--color-surface)]"
            footer={<Link href={`mailto:${contacts.email}`}>Написать</Link>}
          />
        </div>
      </Container>
      <LeadForm />
    </div>
  );
}
