import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { contentFor } from "@/data/portfolio";
import { alternateLanguages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Luís Trivinho — Senior Software Engineer",
  description: contentFor("en").description,
  alternates: { canonical: "/", languages: alternateLanguages("/") },
};
export default function Page() {
  return <HomePage locale="en" />;
}
