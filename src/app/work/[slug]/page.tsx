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
    title: item.title.en,
    description: item.summary.en,
    alternates: {
      canonical: `/work/${slug}`,
      languages: alternateLanguages(`/work/${slug}`),
    },
    openGraph: {
      type: "article",
      title: item.title.en,
      description: item.summary.en,
      url: `/work/${slug}`,
    },
  };
}
export default async function Page({ params }: Props) {
  return <CaseStudyPage slug={(await params).slug} locale="en" />;
}
