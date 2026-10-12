import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/pages/ContactForm";
import { profile } from "@/data/profile";
import { localizePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    label: "Contact",
    title: "Tell me what you need to solve.",
    lead: "Have a manual process, an integration issue or a scoped software project? Share the context and we can discuss a practical next step.",
    availability: "Based in Boituva, São Paulo · Remote service across Brazil",
    directLabel: "Direct channels",
    email: "Send an email",
    linkedin: "Connect on LinkedIn",
    other: "Looking for solutions for a small or midsize business?",
    otherLink: "Explore business services",
  },
  "pt-br": {
    label: "Contato comercial",
    title: "Me conte o que sua empresa precisa resolver.",
    lead: "Tem um processo manual, uma integração problemática ou um projeto de software pontual? Explique o cenário para conversarmos sobre um próximo passo viável.",
    availability: "Boituva, São Paulo · Atendimento remoto em todo o Brasil",
    directLabel: "Canais diretos",
    email: "Enviar um e-mail",
    linkedin: "Conversar pelo LinkedIn",
    other: "Quer entender quais soluções posso desenvolver para sua empresa?",
    otherLink: "Ver serviços para empresas",
  },
} as const;

export function ContactPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <>
      <main id="main-content">
        <section className="container grid min-h-[calc(100vh-4rem)] gap-12 py-16 lg:grid-cols-[.84fr_1.16fr] lg:items-start lg:py-24">
          <div>
            <div className="section-label">{t.label}</div>
            <h1 className="text-[clamp(3rem,6vw,5.6rem)] leading-[.96] font-semibold tracking-[-.065em]">
              {t.title}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted-strong)]">
              {t.lead}
            </p>
            <p className="mono mt-6 text-xs leading-6 text-[var(--muted)]">
              {t.availability}
            </p>
            <div className="mt-10 border-t border-[var(--border)] pt-7">
              <h2 className="mono text-xs tracking-widest text-[var(--muted)] uppercase">
                {t.directLabel}
              </h2>
              <div className="mt-5 grid gap-4">
                <a
                  className="block text-base font-medium break-all text-[var(--accent)] hover:underline"
                  href={`mailto:${profile.email}`}
                >
                  {t.email}: {profile.email} ↗
                </a>
                <a
                  className="text-base font-medium text-[var(--accent)] hover:underline"
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t.linkedin} ↗
                </a>
              </div>
            </div>
            <div className="panel mt-10 p-6">
              <p className="text-sm leading-7 text-[var(--muted-strong)]">
                {t.other}
              </p>
              <a
                className="mono mt-4 inline-flex text-sm text-[var(--accent)] hover:underline"
                href={localizePath("/services", locale)}
              >
                {t.otherLink} →
              </a>
            </div>
          </div>
          <ContactForm locale={locale} />
        </section>
      </main>
      <Footer />
    </>
  );
}