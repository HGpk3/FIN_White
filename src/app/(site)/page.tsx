import type { Metadata } from "next";
import { Clients } from "@/components/blocks/Clients";
import { Directions } from "@/components/blocks/Directions";
import { FAQ } from "@/components/blocks/FAQ";
import { Hero } from "@/components/blocks/Hero";
import { HowWeWork } from "@/components/blocks/HowWeWork";
import { LeadForm } from "@/components/blocks/LeadForm";
import { Metrics } from "@/components/blocks/Metrics";
import { Problems } from "@/components/blocks/Problems";
import { WhyUs } from "@/components/blocks/WhyUs";

export const metadata: Metadata = {
  title: "FinWhite — финансовый консалтинг и аутсорсинг для роста бизнеса",
  description:
    "Финансовый консалтинг, управленческая отчетность, казначейство и бюджетирование. Помогаем МСП видеть цифры, управлять рисками и экономить время руководителя.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Problems />
      <Metrics />
      <Directions />
      <WhyUs />
      <Clients />
      <HowWeWork />
      <LeadForm />
      <FAQ />
    </>
  );
}
