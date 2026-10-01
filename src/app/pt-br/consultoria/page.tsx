import type { Metadata } from "next";
import { ConsultingPage } from "@/components/pages/ConsultingPage";
import { alternateLanguages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Consultoria em IA, Finanças e Perícia Técnica",
  description:
    "Consultoria para empresas em IA, automação, operações financeiras e perícia técnica para demandas jurídicas envolvendo tecnologia.",
  alternates: {
    canonical: "/pt-br/consultoria",
    languages: alternateLanguages("/pt-br/consultoria"),
  },
};

export default function Page() {
  return <ConsultingPage locale="pt-br" />;
}
