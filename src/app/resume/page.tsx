import type { Metadata } from "next";
import { ResumePage } from "@/components/pages/ResumePage";
import { alternateLanguages } from "@/lib/i18n";
export const metadata: Metadata = {
  title: "Résumé",
  alternates: {
    canonical: "/resume",
    languages: alternateLanguages("/resume"),
  },
};
export default function Page() {
  return <ResumePage locale="en" />;
}
