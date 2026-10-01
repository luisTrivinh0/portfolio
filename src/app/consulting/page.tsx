import type { Metadata } from "next";
import { ConsultingPage } from "@/components/pages/ConsultingPage";
import { alternateLanguages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Business Consulting, AI & Technical Assistance",
  description:
    "Consulting in AI, automation, financial operations and independent technical analysis for companies and law firms.",
  alternates: {
    canonical: "/consulting",
    languages: alternateLanguages("/consulting"),
  },
};

export default function Page() {
  return <ConsultingPage locale="en" />;
}
