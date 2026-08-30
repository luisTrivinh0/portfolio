import type { Metadata } from "next";
import { ResumePage } from "@/components/pages/ResumePage";
import { alternateLanguages } from "@/lib/i18n";
export const metadata: Metadata = {
  title: "Currículo",
  alternates: {
    canonical: "/pt-br/resume",
    languages: alternateLanguages("/pt-br/resume"),
  },
};
export default function Page() {
  return <ResumePage locale="pt-br" />;
}
