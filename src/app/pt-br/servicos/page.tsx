import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { alternateLanguages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Automação e Integração de Sistemas em Boituva",
  description:
    "Automações, integrações, dashboards e melhorias pontuais para pequenas e médias empresas em Boituva e região. Solicite uma conversa com Luís Trivinho.",
  alternates: {
    canonical: "/pt-br/servicos",
    languages: alternateLanguages("/pt-br/servicos"),
  },
  openGraph: {
    title: "Automações e Integrações para Empresas em Boituva | Luís Trivinho",
    description: "Menos trabalho manual. Mais tempo para vender e atender.",
    url: "/pt-br/servicos",
  },
};

export default function Page() {
  return <ServicesPage locale="pt-br" />;
}