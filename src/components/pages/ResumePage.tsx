import Link from "next/link";
import {
  contentFor,
  consultingEngagements,
  fullTimeEmployment,
} from "@/data/portfolio";
import type { Locale } from "@/lib/i18n";
import { resumeAvailability, resumeFiles } from "@/lib/resume";
import { Footer } from "@/components/layout/Footer";

export function ResumePage({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  const files = resumeAvailability();
  const prefix = locale === "pt-br" ? "/pt-br" : "";
  return (
    <>
      <main id="main-content" className="container py-20 sm:py-28">
        <Link href={`${prefix}/`} className="mono text-xs text-[var(--accent)]">
          ← {locale === "en" ? "Portfolio" : "Portfólio"}
        </Link>
        <section className="mt-12">
          <p className="section-label">{copy.resume.label}</p>
          <h1 className="section-title">
            Luís Trivinho
            <br />
            <span className="text-[var(--accent)]">{copy.role}</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted-strong)]">
            {copy.hero.statement}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {files.en ? (
              <a
                className="button button-primary"
                href={resumeFiles.en}
                target="_blank"
                rel="noreferrer"
              >
                {copy.resume.english} ↗
              </a>
            ) : null}
            {files["pt-br"] ? (
              <a
                className="button"
                href={resumeFiles["pt-br"]}
                target="_blank"
                rel="noreferrer"
              >
                {copy.resume.portuguese} ↗
              </a>
            ) : null}
          </div>
        </section>
        <section className="mt-20">
          <p className="section-label">{copy.experience.fullTime}</p>
          <div className="grid gap-4">
            {fullTimeEmployment.map((item) => (
              <article
                className="border-b border-[var(--border)] pb-6"
                key={item.company}
              >
                <p className="mono text-xs text-[var(--accent)]">
                  {item.period}
                </p>
                <h2 className="mt-3 text-2xl">
                  {item.company} · {item.role[locale]}
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">
                  {item.summary[locale]}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-20">
          <p className="section-label">{copy.experience.consulting}</p>
          <h2 className="text-3xl">{copy.experience.consultingRole}</h2>
          <div className="mt-7 grid gap-4">
            {consultingEngagements.map((item) => (
              <article
                className="border-b border-[var(--border)] pb-5"
                key={item.company}
              >
                <p className="mono text-xs text-[var(--accent-secondary)]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl">
                  {item.company} · {item.role[locale]}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]">
                  {item.summary[locale]}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
