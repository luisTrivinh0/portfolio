import type { Metadata } from "next";
import { ArchiveSection } from "@/components/sections/HomeSections";
import { Footer } from "@/components/layout/Footer";
import { contentFor } from "@/data/portfolio";
import { alternateLanguages } from "@/lib/i18n";
export const metadata: Metadata = {
  title: "Earlier Work",
  description: contentFor("en").archive.intro,
  alternates: {
    canonical: "/archive",
    languages: alternateLanguages("/archive"),
  },
};
export default function Page() {
  return (
    <>
      <main id="main-content" className="pt-20">
        <ArchiveSection locale="en" />
      </main>
      <Footer />
    </>
  );
}
