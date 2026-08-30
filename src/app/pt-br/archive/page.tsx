import type { Metadata } from "next";
import { ArchiveSection } from "@/components/sections/HomeSections";
import { Footer } from "@/components/layout/Footer";
import { contentFor } from "@/data/portfolio";
import { alternateLanguages } from "@/lib/i18n";
export const metadata: Metadata = {
  title: "Trabalhos Anteriores",
  description: contentFor("pt-br").archive.intro,
  alternates: {
    canonical: "/pt-br/archive",
    languages: alternateLanguages("/pt-br/archive"),
  },
};
export default function Page() {
  return (
    <>
      <main id="main-content" className="pt-20">
        <ArchiveSection locale="pt-br" />
      </main>
      <Footer />
    </>
  );
}
