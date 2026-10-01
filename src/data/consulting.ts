import type { Locale } from "@/lib/i18n";

type ConsultingService = {
  code: string;
  title: string;
  description: string;
  items: readonly string[];
  fit: string;
};

type ConsultingStep = {
  code: string;
  title: string;
  description: string;
};

type ConsultingContent = {
  label: string;
  title: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  imageAlt: string;
  profileLabel: string;
  profileTitle: string;
  trust: readonly string[];
  servicesLabel: string;
  servicesTitle: string;
  servicesIntro: string;
  services: readonly ConsultingService[];
  scenariosLabel: string;
  scenariosTitle: string;
  scenarios: readonly string[];
  processLabel: string;
  processTitle: string;
  process: readonly ConsultingStep[];
  technicalNote: string;
  contactLabel: string;
  contactTitle: string;
  contactBody: string;
  contactButton: string;
  contactNote: string;
};

export const consultingContent = {
  en: {
    label: "Business consulting",
    title: "Technology, AI and technical analysis for decisions that need clarity.",
    lead:
      "I help companies and law firms turn complex operational, financial and technical problems into auditable plans, automations and evidence.",
    primaryCta: "Discuss a project",
    secondaryCta: "Explore services",
    imageAlt: "Luís Trivinho in a formal suit",
    profileLabel: "Independent consulting",
    profileTitle: "Luís Trivinho",
    trust: [
      "Senior software engineering",
      "Payments · APIs · automation",
      "Remote consulting from Brazil",
    ],
    servicesLabel: "Areas of work",
    servicesTitle: "Three fronts, one technical foundation.",
    servicesIntro:
      "The engagement can be advisory, hands-on implementation or an independent technical assessment, depending on the problem.",
    services: [
      {
        code: "01",
        title: "AI, automation & operational efficiency",
        description:
          "I map repetitive processes, identify where AI creates measurable value and implement reliable automations connected to the systems the company already uses.",
        items: [
          "AI and LLM workflow design",
          "n8n, APIs, webhooks and integrations",
          "Internal assistants and operational agents",
          "Process mapping and automation strategy",
          "Observability, retries and failure handling",
        ],
        fit: "For teams that need less manual work without turning operations into a black box.",
      },
      {
        code: "02",
        title: "Finance, payments & operational intelligence",
        description:
          "Technical consulting for financial operations, payment flows and management information, with emphasis on traceability and decision-support data.",
        items: [
          "Payment and reconciliation flows",
          "Dashboards, indicators and cost visibility",
          "Financial data integrations",
          "Transactional rules and audit trails",
          "Diagnosis of inconsistencies and operational bottlenecks",
        ],
        fit: "For companies that need to understand where money, data and operational state diverge.",
      },
      {
        code: "03",
        title: "Legal technology & technical expert analysis",
        description:
          "Independent technical support for disputes and investigations involving software, integrations, digital evidence, transactions or system behavior.",
        items: [
          "System, API and integration analysis",
          "Log and transaction reconstruction",
          "Technical review of digital evidence",
          "Technical opinions and structured findings",
          "Technical support for lawyers and law firms",
        ],
        fit: "For legal teams that need a technical reading of what actually happened inside a system.",
      },
    ],
    scenariosLabel: "Typical scenarios",
    scenariosTitle: "Where this work tends to unlock the most value.",
    scenarios: [
      "A manual operation that grew faster than the team",
      "An AI initiative with no clear architecture or ROI path",
      "Payments that do not reconcile with internal records",
      "A system dispute where logs and integrations matter",
      "A law firm that needs technical support to question or validate evidence",
      "A company that needs an independent diagnosis before rebuilding a process",
    ],
    processLabel: "How I work",
    processTitle: "Evidence first. Implementation second.",
    process: [
      {
        code: "01",
        title: "Diagnosis",
        description:
          "I map the problem, systems, stakeholders, evidence and business impact before proposing changes.",
      },
      {
        code: "02",
        title: "Scope",
        description:
          "We define the deliverable, assumptions, access required, risks and what success looks like.",
      },
      {
        code: "03",
        title: "Execution",
        description:
          "I analyze, document and implement with traceability, preserving the evidence and constraints that matter.",
      },
      {
        code: "04",
        title: "Delivery",
        description:
          "You receive a practical output: implementation, technical report, decision map or prioritized action plan.",
      },
    ],
    technicalNote:
      "Legal engagements are technical in nature and do not replace legal advice or representation by a licensed attorney.",
    contactLabel: "Start a conversation",
    contactTitle: "Bring the problem. We can structure the technical side.",
    contactBody:
      "Send a short description of the scenario, what is at risk and what you need to decide. I will reply with the best next step for scoping the work.",
    contactButton: "Contact by email",
    contactNote: "Initial conversation focused on fit, scope and required evidence.",
  },
  "pt-br": {
    label: "Consultoria para empresas",
    title: "Tecnologia, IA e análise técnica para decisões que precisam de clareza.",
    lead:
      "Ajudo empresas e escritórios de advocacia a transformar problemas operacionais, financeiros e técnicos complexos em planos auditáveis, automações e evidências.",
    primaryCta: "Falar sobre um projeto",
    secondaryCta: "Ver áreas de atuação",
    imageAlt: "Luís Trivinho usando terno em uma foto profissional",
    profileLabel: "Consultoria independente",
    profileTitle: "Luís Trivinho",
    trust: [
      "Engenharia de software sênior",
      "Pagamentos · APIs · automação",
      "Consultoria remota a partir do Brasil",
    ],
    servicesLabel: "Áreas de atuação",
    servicesTitle: "Três frentes, uma mesma base técnica.",
    servicesIntro:
      "O trabalho pode ser consultivo, mão na massa ou uma análise técnica independente, de acordo com o problema.",
    services: [
      {
        code: "01",
        title: "IA, automação e eficiência operacional",
        description:
          "Mapeio processos repetitivos, identifico onde IA gera valor mensurável e implemento automações confiáveis conectadas aos sistemas que a empresa já utiliza.",
        items: [
          "Arquitetura de workflows com IA e LLMs",
          "n8n, APIs, webhooks e integrações",
          "Assistentes internos e agentes operacionais",
          "Mapeamento de processos e estratégia de automação",
          "Observabilidade, retentativas e tratamento de falhas",
        ],
        fit: "Para equipes que precisam reduzir trabalho manual sem transformar a operação em uma caixa-preta.",
      },
      {
        code: "02",
        title: "Finanças, pagamentos e inteligência operacional",
        description:
          "Consultoria técnica para operações financeiras, fluxos de pagamento e informação gerencial, com foco em rastreabilidade e dados que apoiem decisões.",
        items: [
          "Fluxos de pagamento e conciliação",
          "Dashboards, indicadores e visibilidade de custos",
          "Integrações de dados financeiros",
          "Regras transacionais e trilhas de auditoria",
          "Diagnóstico de inconsistências e gargalos operacionais",
        ],
        fit: "Para empresas que precisam entender onde dinheiro, dados e estado operacional deixaram de bater.",
      },
      {
        code: "03",
        title: "Tecnologia para o jurídico e perícia técnica",
        description:
          "Apoio técnico independente em demandas e investigações envolvendo software, integrações, evidências digitais, transações ou comportamento de sistemas.",
        items: [
          "Análise de sistemas, APIs e integrações",
          "Reconstrução de logs e transações",
          "Revisão técnica de evidências digitais",
          "Pareceres técnicos e achados estruturados",
          "Apoio técnico a advogados e escritórios",
        ],
        fit: "Para equipes jurídicas que precisam de uma leitura técnica do que realmente aconteceu dentro de um sistema.",
      },
    ],
    scenariosLabel: "Cenários comuns",
    scenariosTitle: "Onde esse trabalho costuma destravar mais valor.",
    scenarios: [
      "Uma operação manual que cresceu mais rápido do que a equipe",
      "Uma iniciativa de IA sem arquitetura ou caminho claro de retorno",
      "Pagamentos que não conciliam com os registros internos",
      "Uma disputa em que logs, APIs e integrações são parte central dos fatos",
      "Um escritório que precisa questionar ou validar evidências técnicas",
      "Uma empresa que precisa de diagnóstico independente antes de reconstruir um processo",
    ],
    processLabel: "Como funciona",
    processTitle: "Primeiro evidência. Depois implementação.",
    process: [
      {
        code: "01",
        title: "Diagnóstico",
        description:
          "Mapeio o problema, sistemas, envolvidos, evidências e impacto de negócio antes de propor mudanças.",
      },
      {
        code: "02",
        title: "Escopo",
        description:
          "Definimos entregável, premissas, acessos necessários, riscos e o que caracteriza uma entrega bem-sucedida.",
      },
      {
        code: "03",
        title: "Execução",
        description:
          "Analiso, documento e implemento com rastreabilidade, preservando evidências e restrições relevantes.",
      },
      {
        code: "04",
        title: "Entrega",
        description:
          "Você recebe uma saída prática: implementação, relatório técnico, mapa de decisão ou plano de ação priorizado.",
      },
    ],
    technicalNote:
      "Nas demandas jurídicas, a atuação é exclusivamente técnica e não substitui orientação ou representação jurídica por profissional habilitado.",
    contactLabel: "Iniciar conversa",
    contactTitle: "Traga o problema. Eu estruturo a parte técnica.",
    contactBody:
      "Envie um resumo do cenário, do que está em risco e da decisão que precisa ser tomada. A partir disso, definimos o melhor caminho para escopo e levantamento de evidências.",
    contactButton: "Entrar em contato por e-mail",
    contactNote: "Primeira conversa focada em aderência, escopo e evidências necessárias.",
  },
} satisfies Record<Locale, ConsultingContent>;

export function consultingContentFor(locale: Locale) {
  return consultingContent[locale];
}
