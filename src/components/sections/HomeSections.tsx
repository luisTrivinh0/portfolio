import Link from "next/link";
import { profile, stack } from "@/data/profile";
import { caseStudies } from "@/data/cases";
import {
  archiveProjects,
  consultingEngagements,
  contentFor,
  education,
  fullTimeEmployment,
  languages,
} from "@/data/portfolio";
import type { Locale } from "@/lib/i18n";
import { resumeAvailability, resumeFiles } from "@/lib/resume";
import { TransactionFlow } from "@/components/visualizations/TransactionFlow";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

const prefixFor = (locale: Locale) => (locale === "pt-br" ? "/pt-br" : "");

export function Hero({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  const prefix = prefixFor(locale);
  return (
    <section className="container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[.82fr_1.18fr] lg:py-20">
      <Reveal>
        <div>
          <div className="mono mb-7 flex items-center gap-2 text-xs text-[var(--muted)]">
            <span className="size-1.5 rounded-full bg-[var(--success)]" />
            {copy.availability}
          </div>
          <h1 className="text-[clamp(3.4rem,7vw,6.7rem)] leading-[.88] font-semibold tracking-[-.075em]">
            Luís
            <br />
            Trivinho
          </h1>
          <p className="mono mt-6 text-base text-[var(--accent)] sm:text-lg">
            {copy.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted-strong)]">
            {copy.hero.statement}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button button-primary" href="#work">
              {copy.hero.explore} <span>→</span>
            </a>
            <a className="button" href="#contact">
              {copy.hero.contact}
            </a>
            <Link className="button" href={`${prefix}/resume`}>
              {copy.hero.resume}
            </Link>
          </div>
          <div className="mono mt-8 flex flex-wrap items-center gap-5 text-xs text-[var(--muted)]">
            <a
              className="hover:text-[var(--foreground)]"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub ↗
            </a>
            <a
              className="hover:text-[var(--foreground)]"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn ↗
            </a>
            <span>{profile.location}</span>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.12}>
        <TransactionFlow />
      </Reveal>
    </section>
  );
}

export function CredibilityRail({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  return (
    <section className="container -mt-4 pb-8" aria-label="Professional profile">
      <div className="grid border-y border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
        {copy.credibility.map((item, index) => (
          <div
            key={item}
            className="mono flex items-center gap-3 border-b border-[var(--border)] px-4 py-4 text-[.68rem] text-[var(--muted-strong)] sm:odd:border-l lg:border-b-0 lg:not-first:border-l"
          >
            <span className="text-[var(--accent)]">0{index + 1}</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export function BentoOverview({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  return (
    <section className="section container" aria-labelledby="overview-title">
      <p className="section-label" id="overview-title">
        {copy.overview.label}
      </p>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <Reveal className="panel p-7 md:row-span-2 lg:p-9">
          <span className="mono text-xs text-[var(--accent)]">01 / BUILD</span>
          <h2 className="mt-20 text-3xl tracking-[-.04em]">
            {copy.overview.build}
          </h2>
          <p className="mt-4 max-w-sm leading-7 text-[var(--muted-strong)]">
            {copy.overview.buildText}
          </p>
        </Reveal>
        <Reveal className="panel p-7">
          <span className="mono text-xs text-[var(--accent)]">02 / STACK</span>
          <h2 className="mt-10 text-2xl tracking-[-.03em]">
            {copy.overview.stack}
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="panel p-7">
          <span className="mono text-xs text-[var(--accent)]">03 / FOCUS</span>
          <h2 className="mt-10 text-2xl tracking-[-.03em]">
            {copy.overview.focus}
          </h2>
          <p className="mt-4 leading-7 text-[var(--muted-strong)]">
            {copy.overview.focusText}
          </p>
        </Reveal>
        <Reveal className="panel p-7 md:col-span-2">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <span className="mono text-xs text-[var(--accent)]">
                04 / STATUS
              </span>
              <h2 className="mt-8 text-2xl tracking-[-.03em]">
                {copy.overview.current}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[var(--muted-strong)]">
                {copy.overview.currentText}
              </p>
            </div>
            <div className="mono rounded border border-[var(--border)] p-4 text-[.68rem] leading-5 text-[var(--muted)]">
              <span className="text-[var(--accent)]">const</span> next = &#123;
              <br />
              &nbsp;scope:{" "}
              <span className="text-[var(--success)]">
                &quot;international&quot;
              </span>
              ,<br />
              &nbsp;remote:{" "}
              <span className="text-[var(--accent-secondary)]">true</span>
              <br />
              &#125;
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WorkSection({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  return (
    <section
      className="section container"
      id="work"
      aria-labelledby="work-title"
    >
      <p className="section-label">{copy.work.label}</p>
      <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <h2 id="work-title" className="section-title">
          {copy.work.title}
        </h2>
        <p className="max-w-md leading-7 text-[var(--muted)]">
          {copy.work.intro}
        </p>
      </div>
      <div className="grid gap-5">
        {caseStudies.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            locale={locale}
            action={copy.work.view}
          />
        ))}
      </div>
    </section>
  );
}

function EmploymentCard({
  item,
  locale,
  compact = false,
}: {
  item:
    | (typeof fullTimeEmployment)[number]
    | (typeof consultingEngagements)[number];
  locale: Locale;
  compact?: boolean;
}) {
  return (
    <article
      className={`relative border border-[var(--border)] ${item.current ? "bg-[var(--accent-soft)]" : "bg-[var(--surface)]/40"} p-5 ${compact ? "border-x-0 border-t-0 last:border-b-0" : "rounded-[var(--radius)]"}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mono text-xs text-[var(--accent)]">{item.period}</div>
          <h3 className="mt-3 text-xl tracking-[-.03em]">{item.company}</h3>
          <p className="mt-1 text-sm text-[var(--muted-strong)]">
            {item.role[locale]}
          </p>
        </div>
        {"firstSeniorRole" in item && item.firstSeniorRole && (
          <span className="mono rounded border border-[var(--accent-secondary)] px-2 py-1 text-[.62rem] tracking-[.12em] text-[var(--accent-secondary)] uppercase">
            {contentFor(locale).experience.firstSenior}
          </span>
        )}
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">
        {item.summary[locale]}
      </p>
      {!compact && (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.map((value) => (
            <span className="tag" key={value}>
              {value}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export function ExperienceSection({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  return (
    <section
      className="section container"
      id="experience"
      aria-labelledby="experience-title"
    >
      <p className="section-label">{copy.experience.label}</p>
      <h2 id="experience-title" className="section-title">
        {copy.experience.title}
      </h2>
      <div className="mt-12 grid gap-5 xl:grid-cols-[.95fr_1.05fr]">
        <Reveal className="panel p-5 sm:p-7">
          <div className="mono mb-6 flex items-center gap-3 text-xs text-[var(--accent)]">
            <span>01</span>
            {copy.experience.fullTime}
          </div>
          <div className="grid gap-3">
            {fullTimeEmployment.map((item) => (
              <EmploymentCard item={item} locale={locale} key={item.company} />
            ))}
          </div>
        </Reveal>
        <Reveal className="panel p-5 sm:p-7">
          <div className="mono mb-6 flex items-center gap-3 text-xs text-[var(--accent-secondary)]">
            <span>02</span>
            {copy.experience.consulting}
          </div>
          <div className="border-b border-[var(--border)] pb-6">
            <h3 className="text-2xl tracking-[-.035em]">
              {copy.experience.consultingRole}
            </h3>
            <p className="mono mt-2 text-xs text-[var(--accent-secondary)]">
              {copy.experience.consultingPeriod}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
              {copy.experience.consultingDescription}
            </p>
          </div>
          <div className="mt-2">
            {consultingEngagements.map((item) => (
              <EmploymentCard
                item={item}
                locale={locale}
                compact
                key={item.company}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ResumeSection({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  const available = resumeAvailability();
  const prefix = prefixFor(locale);
  const primary = locale === "en" ? "en" : "pt-br";
  const secondary = primary === "en" ? "pt-br" : "en";
  const button = (key: "en" | "pt-br", primaryButton: boolean) =>
    available[key] ? (
      <a
        className={`button ${primaryButton ? "button-primary" : ""}`}
        href={resumeFiles[key]}
        download={
          key === "en"
            ? "Luis-Trivinho-Resume-EN.pdf"
            : "Luis-Trivinho-Curriculo-PTBR.pdf"
        }
      >
        {key === "en" ? copy.resume.english : copy.resume.portuguese} ↓
      </a>
    ) : (
      <span
        className="button max-w-full cursor-not-allowed opacity-60"
        aria-disabled="true"
        title={copy.resume.unavailable}
      >
        {key === "en" ? copy.resume.english : copy.resume.portuguese}
        <span className="text-[.62rem] font-normal tracking-[.12em] text-[var(--muted)] uppercase">
          PDF
        </span>
      </span>
    );
  return (
    <section className="container pb-8">
      <div className="panel grid gap-8 p-7 sm:p-10 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:items-end">
        <div>
          <p className="section-label">{copy.resume.label}</p>
          <h2 className="max-w-2xl text-3xl tracking-[-.04em] sm:text-4xl">
            {copy.resume.title}
          </h2>
        </div>
        <div className="flex min-w-0 flex-wrap gap-3 lg:justify-end">
          {button(primary, true)}
          {button(secondary, false)}
          <Link href={`${prefix}/resume`} className="button">
            {copy.resume.download}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function EducationLanguages({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  return (
    <section className="section container">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <Reveal className="panel p-6 sm:p-8">
          <p className="section-label">{copy.education}</p>
          <div className="divide-y divide-[var(--border)]">
            {education.map((item) => (
              <div
                key={item.title}
                className="grid gap-1 py-5 sm:grid-cols-[1.2fr_1fr_auto] sm:items-center"
              >
                <h3 className="text-base">
                  {locale === "pt-br" ? item.pt : item.title}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  {item.institution}
                </p>
                <span className="mono text-xs text-[var(--accent)]">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="panel p-6 sm:p-8">
          <p className="section-label">{copy.languages}</p>
          <div className="divide-y divide-[var(--border)]">
            {languages.map((item) => (
              <div
                key={item.name.en}
                className="flex items-center justify-between py-5"
              >
                <span>{item.name[locale]}</span>
                <span className="mono text-sm text-[var(--accent-secondary)]">
                  {typeof item.level === "string"
                    ? item.level
                    : item.level[locale]}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const principles = [
  "Simple systems scale better than premature abstractions.",
  "Transactions require explicit states.",
  "Integrations must be designed for failure.",
  "Production debugging starts with evidence.",
  "Maintainability is a feature.",
];
export function EngineeringPrinciples() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)]/40">
      <div className="section container">
        <p className="section-label">Engineering principles</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5">
          {principles.map((item, index) => (
            <div
              key={item}
              className="border-b border-[var(--border)] p-5 md:odd:border-r lg:border-b-0 lg:not-last:border-r"
            >
              <span className="mono text-xs text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-8 leading-7 text-[var(--muted-strong)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  return (
    <section
      className="section container"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="section-label">{copy.about.label}</p>
          <h2 id="about-title" className="section-title">
            {copy.about.title}
            <br />
            <span className="text-[var(--accent)]">{copy.about.emphasis}</span>
          </h2>
        </div>
        <Reveal className="panel p-7 sm:p-10">
          <p className="text-xl leading-9 text-[var(--muted-strong)]">
            {copy.about.body}
          </p>
          <p className="mt-6 leading-8 text-[var(--muted)]">
            {copy.about.detail}
          </p>
          <div className="mono mt-10 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)]">
            <span>focus / production systems</span>
            <span>mode / fullstack ownership</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  const prefix = prefixFor(locale);
  return (
    <section
      className="section container"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="panel overflow-hidden p-7 sm:p-12 lg:p-16">
        <p className="section-label">{copy.contact.label}</p>
        <h2
          id="contact-title"
          className="max-w-5xl text-[clamp(2.7rem,6vw,6rem)] leading-[.96] tracking-[-.06em]"
        >
          {copy.contact.title}
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-strong)]">
          {copy.contact.body}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            {copy.contact.email}
          </a>
          <a
            className="button"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn ↗
          </a>
          <a
            className="button"
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub ↗
          </a>
          <Link className="button" href={`${prefix}/resume`}>
            {copy.resume.download}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ArchiveSection({ locale }: { locale: Locale }) {
  const copy = contentFor(locale);
  const prefix = prefixFor(locale);
  return (
    <section className="container pb-20">
      <div className="border-t border-[var(--border)] pt-10">
        <p className="section-label">{copy.archive.label}</p>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-3xl text-3xl tracking-[-.04em] sm:text-4xl">
              {copy.archive.title}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
              {copy.archive.intro}
            </p>
          </div>
          <Link className="button" href={`${prefix}/#work`}>
            {copy.archive.return}
          </Link>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {archiveProjects.map((project) => (
            <article className="panel p-6" key={project.slug}>
              <span className="mono text-xs text-[var(--accent)]">
                ARCHIVE / {project.slug.toUpperCase()}
              </span>
              <h3 className="mt-8 text-2xl">{project.title}</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {project.summary[locale]}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((value) => (
                  <span className="tag" key={value}>
                    {value}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
