import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { contentFor } from "@/data/portfolio";
import { alternateLanguages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Luís Trivinho — Engenheiro de Software Sênior",
  description: contentFor("pt-br").description,
  alternates: { canonical: "/pt-br", languages: alternateLanguages("/pt-br") },
};
export default function Page() {
  return <HomePage locale="pt-br" />;
}
