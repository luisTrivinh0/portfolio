import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/data/cases";
import { CaseStudyPage } from "@/components/pages/CaseStudyPage";
import { alternateLanguages } from "@/lib/i18n";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) return {};
  return {
    title: item.title["pt-br"],
    description: item.summary["pt-br"],
    alternates: {
      canonical: `/pt-br/work/${slug}`,
      languages: alternateLanguages(`/pt-br/work/${slug}`),
    },
    openGraph: {
      type: "article",
      title: item.title["pt-br"],
      description: item.summary["pt-br"],
      url: `/pt-br/work/${slug}`,
      locale: "pt_BR",
    },
  };
}
export default async function Page({ params }: Props) {
  return <CaseStudyPage slug={(await params).slug} locale="pt-br" />;
}
