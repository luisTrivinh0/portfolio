import { Footer } from "@/components/layout/Footer";
import { consultingContentFor } from "@/data/consulting";
import { profile } from "@/data/profile";
import type { Locale } from "@/lib/i18n";
import Image from "next/image";

export function ConsultingPage({ locale }: { locale: Locale }) {
  const copy = consultingContentFor(locale);
  const subject =
    locale === "pt-br"
      ? "Consultoria — IA, Finanças ou Perícia Técnica"
      : "Consulting — AI, Finance or Technical Expert Analysis";
  const contactHref = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;

  return (
    <>
      <main id="main-content">
        <section className="container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
          <div>
            <div className="section-label">{copy.label}</div>
            <h1 className="max-w-4xl text-[clamp(3.15rem,7vw,6.25rem)] leading-[.91] font-semibold tracking-[-.065em]">
              {copy.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-strong)] sm:text-xl">
              {copy.lead}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button button-primary" href={contactHref}>
                {copy.primaryCta} <span>→</span>
              </a>
              <a className="button" href="#areas">
                {copy.secondaryCta}
              </a>
            </div>
          </div>

          <div className="panel overflow-hidden p-3 sm:p-4">
            <div className="relative aspect-[2/3] overflow-hidden rounded-[calc(var(--radius)-.25rem)] bg-[var(--surface-elevated)]">
              <Image
                src="/consultoria/luis-trivinho.webp"
                alt={copy.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050b11] via-[#050b11]/80 to-transparent p-5 pt-20 sm:p-7 sm:pt-28">
                <div className="mono text-[.68rem] tracking-[.12em] text-[var(--accent)] uppercase">
                  {copy.profileLabel}
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-[-.03em] text-white">
                  {copy.profileTitle}
                </div>
                <div className="mono mt-3 text-xs text-white/65">
                  IA · Finanças · Perícia técnica
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container pb-10" aria-label="Consulting profile">
          <div className="grid border-y border-[var(--border)] md:grid-cols-3">
            {copy.trust.map((item, index) => (
              <div
                key={item}
                className="mono flex items-center gap-3 border-b border-[var(--border)] px-4 py-4 text-[.7rem] text-[var(--muted-strong)] md:border-b-0 md:not-first:border-l"
              >
                <span className="text-[var(--accent)]">0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="areas" className="section container">
          <div className="section-label">{copy.servicesLabel}</div>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <h2 className="section-title">{copy.servicesTitle}</h2>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted-strong)] lg:justify-self-end">
              {copy.servicesIntro}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {copy.services.map((service) => (
              <article key={service.code} className="panel flex h-full flex-col p-6 sm:p-7">
                <div className="mono text-xs text-[var(--accent)]">{service.code}</div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-.035em]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--muted-strong)]">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-[var(--muted-strong)]"
                    >
                      <span className="mono mt-[.05rem] text-[var(--accent)]">↳</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mono mt-auto border-t border-[var(--border)] pt-6 text-[.7rem] leading-5 text-[var(--muted)]">
                  {service.fit}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section border-y border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_32%,transparent)]">
          <div className="container">
            <div className="section-label">{copy.scenariosLabel}</div>
            <h2 className="section-title">{copy.scenariosTitle}</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">
              {copy.scenarios.map((scenario, index) => (
                <div key={scenario} className="bg-[var(--surface)] p-6">
                  <span className="mono text-xs text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 leading-7 text-[var(--muted-strong)]">{scenario}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="section-label">{copy.processLabel}</div>
          <h2 className="section-title">{copy.processTitle}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.process.map((step) => (
              <article key={step.code} className="panel p-6">
                <div className="mono text-xs text-[var(--accent)]">{step.code}</div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mono mt-8 max-w-4xl text-[.72rem] leading-6 text-[var(--muted)]">
            {copy.technicalNote}
          </p>
        </section>

        <section className="container pb-20 sm:pb-28">
          <div className="panel overflow-hidden p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
              <div>
                <div className="section-label">{copy.contactLabel}</div>
                <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,4.7rem)] leading-[.96] font-semibold tracking-[-.055em]">
                  {copy.contactTitle}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-strong)]">
                  {copy.contactBody}
                </p>
              </div>
              <div className="lg:justify-self-end">
                <a className="button button-primary w-full sm:w-auto" href={contactHref}>
                  {copy.contactButton} <span>→</span>
                </a>
                <p className="mono mt-4 max-w-sm text-[.68rem] leading-5 text-[var(--muted)]">
                  {copy.contactNote}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
