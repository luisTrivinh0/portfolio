import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { alternateLanguages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contato Comercial — Tecnologia e Automações em Boituva",
  description:
    "Fale com Luís Trivinho sobre automações, integrações, dashboards e desenvolvimento de sistemas para sua empresa em Boituva ou remotamente.",
  alternates: {
    canonical: "/pt-br/contato",
    languages: alternateLanguages("/pt-br/contato"),
  },
};

export default function Page() {
  return <ContactPage locale="pt-br" />;
}