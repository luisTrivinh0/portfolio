import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { alternateLanguages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Business Automation, Integrations & Software Solutions",
  description:
    "Practical automations, integrations and software improvements for growing businesses. Based in Boituva, São Paulo. Remote service across Brazil.",
  alternates: {
    canonical: "/services",
    languages: alternateLanguages("/services"),
  },
  openGraph: {
    title: "Business Solutions | Luís Trivinho",
    description:
      "Reduce repetitive work through focused automation and software integrations.",
    url: "/services",
  },
};

export default function Page() {
  return <ServicesPage locale="en" />;
}