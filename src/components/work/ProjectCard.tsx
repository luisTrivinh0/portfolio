import Link from "next/link";
import type { CaseStudy } from "@/data/cases";
import type { Locale } from "@/lib/i18n";
import { ProjectDiagram } from "@/components/visualizations/ProjectDiagram";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectCard({
  project,
  index,
  locale,
  action,
}: {
  project: CaseStudy;
  index: number;
  locale: Locale;
  action: string;
}) {
  const prefix = locale === "pt-br" ? "/pt-br" : "";
  return (
    <Reveal>
      <article className="panel grid overflow-hidden lg:grid-cols-2">
        <div
          className={`diagram order-1 min-h-[16rem] border-b border-[var(--border)] lg:min-h-[24rem] lg:border-b-0 ${index % 2 ? "lg:order-2 lg:border-l" : "lg:border-r"}`}
        >
          <ProjectDiagram type={project.accent} />
        </div>
        <div
          className={`order-2 flex flex-col justify-center p-6 sm:p-10 lg:p-14 ${index % 2 ? "lg:order-1" : ""}`}
        >
          <div className="mono mb-6 flex items-center gap-3 text-xs text-[var(--accent)]">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="text-[var(--muted)]">
              {project.eyebrow[locale]}
            </span>
          </div>
          <h3 className="max-w-xl text-3xl leading-tight font-semibold tracking-[-.04em] sm:text-4xl">
            {project.title[locale]}
          </h3>
          <p className="mt-5 max-w-xl leading-7 text-[var(--muted-strong)]">
            {project.summary[locale]}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
          <Link
            href={`${prefix}/work/${project.slug}`}
            className="mono mt-9 inline-flex items-center gap-2 self-start text-sm text-[var(--accent)] hover:gap-3"
          >
            {action} <span aria-hidden>→</span>
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
