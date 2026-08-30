import { Footer } from "@/components/layout/Footer";
import {
  AboutSection,
  BentoOverview,
  ContactSection,
  CredibilityRail,
  EducationLanguages,
  EngineeringPrinciples,
  ExperienceSection,
  Hero,
  ResumeSection,
  WorkSection,
} from "@/components/sections/HomeSections";
import type { Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <main id="main-content">
        <Hero locale={locale} />
        <CredibilityRail locale={locale} />
        <BentoOverview locale={locale} />
        <WorkSection locale={locale} />
        <ExperienceSection locale={locale} />
        <ResumeSection locale={locale} />
        <EducationLanguages locale={locale} />
        <EngineeringPrinciples />
        <AboutSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer />
    </>
  );
}
