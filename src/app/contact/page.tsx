import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { alternateLanguages } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Contact Luís Trivinho about software integration, automation and technical projects. Based in Boituva, São Paulo.",
  alternates: {
    canonical: "/contact",
    languages: alternateLanguages("/contact"),
  },
};

export default function Page() {
  return <ContactPage locale="en" />;
}