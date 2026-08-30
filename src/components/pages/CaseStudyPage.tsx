import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { caseStudies } from "@/data/cases";
import { contentFor } from "@/data/portfolio";
import { readCaseStudy } from "@/lib/case-studies";
import type { Locale } from "@/lib/i18n";
import { ProjectDiagram } from "@/components/visualizations/ProjectDiagram";
import { Footer } from "@/components/layout/Footer";

export function CaseStudyPage({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const study = readCaseStudy(slug, locale);
  if (!study) notFound();
  const copy = contentFor(locale);
  const prefix = locale === "pt-br" ? "/pt-br" : "";
  const index = caseStudies.findIndex((entry) => entry.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.metadata.title[locale],
    description: study.metadata.summary[locale],
    author: { "@type": "Person", name: "Luís Trivinho" },
    inLanguage: locale === "pt-br" ? "pt-BR" : "en",
  };
  return (
    <>
      <main id="main-content">
        <section className="container pt-20 pb-14 sm:pt-28">
          <Link
            href={`${prefix}/#work`}
            className="mono text-xs text-[var(--accent)]"
          >
            ←{" "}
            {locale === "en"
              ? "All selected work"
              : "Todos os trabalhos selecionados"}
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <p className="mono text-xs text-[var(--muted)]">
                {study.metadata.eyebrow[locale]}
              </p>
              <h1 className="mt-6 max-w-4xl text-[clamp(3rem,7vw,6.3rem)] leading-[.92] font-semibold tracking-[-.065em]">
                {study.metadata.title[locale]}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-strong)]">
                {study.metadata.summary[locale]}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {study.metadata.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="panel overflow-hidden">
              <ProjectDiagram type={study.metadata.accent} />
            </div>
          </div>
        </section>
        <article className="container grid gap-10 border-t border-[var(--border)] py-16 lg:grid-cols-[13rem_1fr]">
          <aside className="mono text-xs leading-6 text-[var(--muted)] lg:sticky lg:top-24 lg:self-start">
            <p>CASE / {String(index + 1).padStart(2, "0")}</p>
            <p>DOMAIN / {study.metadata.eyebrow[locale]}</p>
            <p className="mt-5 text-[var(--success)]">
              ●{" "}
              {locale === "en"
                ? "CONFIDENTIALITY-AWARE"
                : "ATENTO À CONFIDENCIALIDADE"}
            </p>
          </aside>
          <div className="prose">
            <ReactMarkdown>{study.content}</ReactMarkdown>
          </div>
        </article>
        <section className="container py-16">
          <div className="panel p-8 sm:p-12">
            <p className="mono text-xs text-[var(--muted)]">
              {locale === "en" ? "Continue exploring" : "Continue explorando"}
            </p>
            <h2 className="mt-5 text-3xl tracking-[-.04em] sm:text-4xl">
              {next.title[locale]}
            </h2>
            <Link href={`${prefix}/work/${next.slug}`} className="button mt-8">
              {locale === "en" ? "View next case" : "Ver próximo case"}{" "}
              <span>→</span>
            </Link>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
      </main>
      <Footer />
    </>
  );
}
