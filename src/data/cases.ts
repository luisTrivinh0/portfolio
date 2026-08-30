import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

export type CaseStudy = {
  slug: string;
  title: Localized;
  summary: Localized;
  eyebrow: Localized;
  stack: readonly string[];
  accent: "cyan" | "violet" | "blue";
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "payments-transactional-systems",
    title: {
      en: "Payments & Transactional Systems",
      "pt-br": "Pagamentos e Sistemas Transacionais",
    },
    summary: {
      en: "Production payment flows built around explicit states, idempotent processing, observable integrations and failure-aware experiences.",
      "pt-br":
        "Fluxos de pagamento em produção construídos com estados explícitos, processamento idempotente, integrações observáveis e experiências preparadas para falhas.",
    },
    eyebrow: {
      en: "Payments · Webhooks · Reliability",
      "pt-br": "Pagamentos · Webhooks · Confiabilidade",
    },
    stack: ["React", "TypeScript", "Node.js", "Webhooks", "SQL"],
    accent: "cyan",
  },
  {
    slug: "retorna",
    title: { en: "Retorna", "pt-br": "Retorna" },
    summary: {
      en: "End-to-end ownership of a SaaS product and service marketplace across product discovery, authentication, APIs and deployment.",
      "pt-br":
        "Ownership ponta a ponta de um produto SaaS e marketplace de serviços, da descoberta de produto à autenticação, APIs e deploy.",
    },
    eyebrow: {
      en: "SaaS · Marketplace · Ownership",
      "pt-br": "SaaS · Marketplace · Ownership",
    },
    stack: ["Web", "APIs", "OAuth", "SQL", "Deployment"],
    accent: "violet",
  },
  {
    slug: "mobile-pos-enterprise-integrations",
    title: {
      en: "Mobile POS & Enterprise Integrations",
      "pt-br": "POS Mobile e Integrações Corporativas",
    },
    summary: {
      en: "Fault-tolerant mobile sales and payment flows coordinating devices, APIs, fiscal processing and legacy enterprise systems.",
      "pt-br":
        "Fluxos de vendas e pagamentos mobile tolerantes a falhas, coordenando dispositivos, APIs, processamento fiscal e sistemas corporativos legados.",
    },
    eyebrow: {
      en: "Mobile · POS · Recovery",
      "pt-br": "Mobile · POS · Recuperação",
    },
    stack: ["React Native", "PHP", "REST APIs", "SQL", "Payments"],
    accent: "blue",
  },
] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((entry) => entry.slug === slug);
}
