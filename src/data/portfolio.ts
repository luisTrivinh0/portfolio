import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

export type Employment = {
  company: string;
  role: Localized;
  period: string;
  summary: Localized;
  stack: readonly string[];
  current?: boolean;
};

export type ConsultingEngagement = Employment & { firstSeniorRole?: boolean };

export const portfolioContent = {
  en: {
    navigation: [
      { label: "Work", href: "#work" },
      { label: "Experience", href: "#experience" },
      { label: "About", href: "#about" },
      { label: "Résumé", href: "/resume" },
      { label: "Contact", href: "#contact" },
    ],
    availability: "Available for international opportunities",
    role: "Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in SaaS, payments, APIs and transactional systems.",
    hero: {
      statement:
        "Senior Software Engineer with a Full Stack background and strong experience in payments, SaaS, APIs and production systems.",
      explore: "Explore my work",
      contact: "Get in touch",
      resume: "View résumé",
    },
    credibility: [
      "6+ years building production software",
      "Payments · SaaS · APIs · Web & Mobile",
      "Brazil · UTC-3",
      "English B2 · Spanish B2",
    ],
    experience: {
      label: "Experience / context",
      title: "Experience, with the context to read it correctly.",
      fullTime: "Full-time Employment",
      consulting: "Consulting & Contract Work",
      consultingRole: "Full Stack Software Engineer / Consultant",
      consultingPeriod: "Feb 2022 – Present",
      consultingDescription:
        "Independent Full Stack consulting across financial, enterprise, medical, security and SaaS products.",
      firstSenior: "First Senior role",
    },
    education: "Education",
    languages: "Languages",
    resume: {
      label: "Résumé",
      title: "A concise view of the work behind the portfolio.",
      english: "English résumé",
      portuguese: "Portuguese résumé",
      unavailable: "Available when the final PDF is added",
      download: "Download résumé",
    },
    archive: {
      label: "Earlier work / archive",
      title: "Earlier work, kept in its proper context.",
      intro:
        "Selected legacy projects that show technical progression without competing with the primary case studies.",
      return: "Back to selected work",
    },
    work: {
      label: "Selected work",
      title: "Systems designed for the moments that can’t fail.",
      intro:
        "Three views into production engineering: financial state, product ownership and integration under uncertainty.",
      view: "View case study",
    },
    overview: {
      label: "Overview",
      build: "What I build",
      buildText:
        "SaaS platforms, payment flows, API integrations and mobile applications.",
      stack: "Core stack",
      focus: "Engineering focus",
      focusText:
        "Reliability, maintainability, performance and transaction integrity.",
      current: "Currently",
      currentText:
        "Building production software and looking for the next international challenge.",
    },
    about: {
      label: "About",
      title: "Product sense.",
      emphasis: "Engineering depth.",
      body: "I work between product and technology, taking ownership of the entire path from an interface decision to backend rules, persistence, integrations and production behavior.",
      detail:
        "My approach is pragmatic: keep domain rules readable, design external integrations for failure and evolve systems without losing sight of the people using them.",
    },
    contact: {
      label: "Contact",
      title: "Let’s build something that matters.",
      body: "I’m open to international opportunities building dependable products with teams that care about the details.",
      email: "Email me",
    },
    command: {
      navigate: "Navigate",
      toggleTheme: "Toggle theme",
      openResume: "Open résumé",
    },
    notFound: {
      title: "Signal not found.",
      body: "The requested route does not exist on this surface.",
      action: "Return home",
    },
  },
  "pt-br": {
    navigation: [
      { label: "Trabalhos", href: "#work" },
      { label: "Experiência", href: "#experience" },
      { label: "Sobre", href: "#about" },
      { label: "Currículo", href: "/resume" },
      { label: "Contato", href: "#contact" },
    ],
    availability: "Disponível para oportunidades internacionais",
    role: "Engenheiro de Software Sênior",
    description:
      "Engenheiro de Software Sênior especializado em SaaS, pagamentos, APIs e sistemas transacionais.",
    hero: {
      statement:
        "Engenheiro de Software Sênior com background Full Stack e forte experiência em pagamentos, SaaS, APIs e sistemas em produção.",
      explore: "Explorar trabalhos",
      contact: "Entrar em contato",
      resume: "Ver currículo",
    },
    credibility: [
      "6+ anos criando software em produção",
      "Pagamentos · SaaS · APIs · Web & Mobile",
      "Brasil · UTC-3",
      "Inglês B2 · Espanhol B2",
    ],
    experience: {
      label: "Experiência / contexto",
      title: "Experiência, com o contexto certo para interpretá-la.",
      fullTime: "Emprego em tempo integral",
      consulting: "Consultoria e contratos",
      consultingRole: "Engenheiro de Software Full Stack / Consultor",
      consultingPeriod: "Fev 2022 – Atual",
      consultingDescription:
        "Consultoria Full Stack independente em produtos financeiros, corporativos, médicos, de segurança e SaaS.",
      firstSenior: "Primeiro cargo Sênior",
    },
    education: "Formação",
    languages: "Idiomas",
    resume: {
      label: "Currículo",
      title: "Uma visão concisa do trabalho por trás do portfólio.",
      english: "Résumé em inglês",
      portuguese: "Currículo em português",
      unavailable: "Disponível quando o PDF final for adicionado",
      download: "Baixar currículo",
    },
    archive: {
      label: "Trabalhos anteriores / arquivo",
      title: "Trabalhos anteriores, preservados no contexto adequado.",
      intro:
        "Projetos legados selecionados que mostram evolução técnica sem competir com os estudos de caso principais.",
      return: "Voltar aos trabalhos selecionados",
    },
    work: {
      label: "Trabalhos selecionados",
      title: "Sistemas desenhados para os momentos em que não se pode falhar.",
      intro:
        "Três visões da engenharia em produção: estado financeiro, ownership de produto e integrações sob incerteza.",
      view: "Ver estudo de caso",
    },
    overview: {
      label: "Visão geral",
      build: "O que eu construo",
      buildText:
        "Plataformas SaaS, fluxos de pagamento, integrações de APIs e aplicações mobile.",
      stack: "Stack principal",
      focus: "Foco de engenharia",
      focusText:
        "Confiabilidade, manutenibilidade, desempenho e integridade transacional.",
      current: "No momento",
      currentText:
        "Criando software em produção e em busca do próximo desafio internacional.",
    },
    about: {
      label: "Sobre",
      title: "Visão de produto.",
      emphasis: "Profundidade em engenharia.",
      body: "Trabalho entre produto e tecnologia, assumindo a responsabilidade por todo o caminho: de uma decisão de interface às regras de backend, persistência, integrações e comportamento em produção.",
      detail:
        "Minha abordagem é pragmática: manter regras de domínio legíveis, projetar integrações externas para falhas e evoluir sistemas sem perder de vista as pessoas que os utilizam.",
    },
    contact: {
      label: "Contato",
      title: "Vamos construir algo que importa.",
      body: "Estou aberto a oportunidades internacionais para construir produtos confiáveis com times que cuidam dos detalhes.",
      email: "Enviar e-mail",
    },
    command: {
      navigate: "Navegar",
      toggleTheme: "Alternar tema",
      openResume: "Abrir currículo",
    },
    notFound: {
      title: "Sinal não encontrado.",
      body: "A rota solicitada não existe nesta superfície.",
      action: "Voltar ao início",
    },
  },
} as const;

export const fullTimeEmployment: readonly Employment[] = [
  {
    company: "CaktoPay",
    role: {
      en: "Senior Frontend Software Engineer",
      "pt-br": "Engenheiro de Software Frontend Sênior",
    },
    period: "Mar 2025 – Present",
    summary: {
      en: "React applications for sales, affiliate and checkout/payment flows, integrated with Python APIs, Cielo, AWS and transactional states.",
      "pt-br":
        "Aplicações React para vendas, afiliados e checkout/pagamentos, integradas a APIs Python, Cielo, AWS e estados transacionais.",
    },
    stack: ["React", "Python APIs", "Cielo", "AWS"],
    current: true,
  },
  {
    company: "SignoTech",
    role: {
      en: "Information Systems Programmer",
      "pt-br": "Programador de Sistemas de Informação",
    },
    period: "Mar 2023 – Jun 2023",
    summary: {
      en: "APIs and back-office applications with PHP, Laravel, MySQL, React Native, IUGU and Firebase.",
      "pt-br":
        "APIs e back-offices com PHP, Laravel, MySQL, React Native, IUGU e Firebase.",
    },
    stack: ["PHP", "Laravel", "React Native", "MySQL"],
  },
  {
    company: "TIKS — Tecnologia da Informação",
    role: { en: "Junior PHP Developer", "pt-br": "Desenvolvedor PHP Júnior" },
    period: "Apr 2021 – Feb 2022",
    summary: {
      en: "PHP REST APIs for mobile and chatbot integrations, plus PHP 8 systems for NF-e and business processes.",
      "pt-br":
        "APIs REST em PHP para integrações mobile e chatbot, além de sistemas PHP 8 para NF-e e processos de negócio.",
    },
    stack: ["PHP 8", "REST APIs", "Mobile", "NF-e"],
  },
] as const;

export const consultingEngagements: readonly ConsultingEngagement[] = [
  {
    company: "AML Consulting",
    role: {
      en: "Senior Full Stack Software Engineer",
      "pt-br": "Engenheiro de Software Full Stack Sênior",
    },
    period: "Aug 2024 – Feb 2025",
    summary: {
      en: "Security, antifraud, counter-terrorism and anti-money-laundering workflows with Laravel 10, PHP and MySQL.",
      "pt-br":
        "Fluxos de segurança, antifraude, prevenção ao terrorismo e combate à lavagem de dinheiro com Laravel 10, PHP e MySQL.",
    },
    stack: ["Laravel 10", "PHP", "MySQL"],
    firstSeniorRole: true,
  },
  {
    company: "AppFactory",
    role: {
      en: "Full Stack Development",
      "pt-br": "Desenvolvimento Full Stack",
    },
    period: "Jan 2023 – Present",
    summary: {
      en: "Banking and financial systems with React, PHP/Laravel, SQL Server, AppsFlyer and selected .NET components.",
      "pt-br":
        "Sistemas bancários e financeiros com React, PHP/Laravel, SQL Server, AppsFlyer e componentes .NET selecionados.",
    },
    stack: ["React", "Laravel", "SQL Server"],
  },
  {
    company: "VIP Systems",
    role: { en: "Full Stack Consulting", "pt-br": "Consultoria Full Stack" },
    period: "Feb 2022 – Present",
    summary: {
      en: "Administrative and retail systems, legacy modernization and technical project management with Microsoft Azure.",
      "pt-br":
        "Sistemas administrativos e comerciais, modernização de legados e gestão técnica com Microsoft Azure.",
    },
    stack: ["PHP", "Laravel", "React", "Azure"],
  },
  {
    company: "Expermed",
    role: {
      en: "Full Stack Development",
      "pt-br": "Desenvolvimento Full Stack",
    },
    period: "Jul 2023 – May 2024",
    summary: {
      en: "Mobile APIs and medical-examination workflows with Laravel/PHP, React, PostgreSQL and GraphQL.",
      "pt-br":
        "APIs mobile e fluxos de perícias médicas com Laravel/PHP, React, PostgreSQL e GraphQL.",
    },
    stack: ["Laravel", "React", "PostgreSQL", "GraphQL"],
  },
  {
    company: "Clube da Cotação",
    role: {
      en: "Full Stack Development",
      "pt-br": "Desenvolvimento Full Stack",
    },
    period: "Jan 2023 – Mar 2023",
    summary: {
      en: "Laravel 8 and MySQL API work for a price-quotation platform.",
      "pt-br":
        "Trabalho com API em Laravel 8 e MySQL para uma plataforma de cotação de preços.",
    },
    stack: ["Laravel 8", "MySQL"],
  },
  {
    company: "Quantum",
    role: { en: "Full Stack Consulting", "pt-br": "Consultoria Full Stack" },
    period: "Aug 2022 – Dec 2022",
    summary: {
      en: "Human-resources systems with PHP, CodeIgniter 3, MySQL and JavaScript.",
      "pt-br":
        "Sistemas de recursos humanos com PHP, CodeIgniter 3, MySQL e JavaScript.",
    },
    stack: ["PHP", "CodeIgniter 3", "MySQL"],
  },
] as const;

export const education = [
  {
    title: "Technology Degree in Internet Systems",
    institution: "Universidade Anhembi Morumbi",
    period: "2022–2024",
    pt: "Tecnologia em Sistemas para Internet",
  },
  {
    title: "Technical Diploma in Internet Computing",
    institution: "ETEC Lauro Gomes",
    period: "2016–2017",
    pt: "Técnico em Informática para Internet",
  },
  {
    title: "Full Cycle 3 — Professional Program",
    institution: "Full Cycle",
    period: "2024",
    pt: "Full Cycle 3 — Formação Profissional",
  },
] as const;

export const languages = [
  {
    name: { en: "Portuguese", "pt-br": "Português" },
    level: { en: "Native", "pt-br": "Nativo" },
  },
  { name: { en: "English", "pt-br": "Inglês" }, level: "B2" },
  { name: { en: "Spanish", "pt-br": "Espanhol" }, level: "B2" },
] as const;

export const archiveProjects = [
  {
    slug: "colisoes",
    title: "Colisões",
    technologies: ["Laravel", "React Native"],
    summary: {
      en: "A legacy project combining a Laravel backoffice/API with a React Native mobile application.",
      "pt-br":
        "Projeto legado que combina backoffice/API em Laravel com aplicação mobile em React Native.",
    },
  },
  {
    slug: "portal-condominium",
    title: "Portal Condominium",
    technologies: ["PHP", "Lumen"],
    summary: {
      en: "A legacy PHP and Lumen project retained as an earlier backend reference.",
      "pt-br":
        "Projeto legado em PHP e Lumen preservado como referência anterior de backend.",
    },
  },
] as const;

export function contentFor(locale: Locale) {
  return portfolioContent[locale];
}
