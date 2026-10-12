import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/pages/ContactForm";
import { localizePath, type Locale } from "@/lib/i18n";

const content = {
  en: {
    eyebrow: "Practical technology for growing businesses",
    title: "Less repetitive work. More time for customers.",
    intro:
      "I build focused integrations, automations and operational improvements for small and midsize businesses, working with the tools your team already uses.",
    region: "Based in Boituva, São Paulo · Remote projects across Brazil",
    mainCta: "Describe your challenge",
    secondaryCta: "See what I can solve",
    asideLabel: "A familiar situation?",
    asideTitle: "Your team does the same work twice.",
    asideItems: [
      "A quote arrives through WhatsApp and gets lost in a spreadsheet.",
      "An online order needs to be entered into another system.",
      "A manager spends hours assembling the same weekly report.",
    ],
    asideNote: "We can start with one process instead of replacing everything.",
    servicesLabel: "Where I can help",
    servicesTitle: "Small, valuable improvements to everyday operations.",
    services: [
      {
        code: "01",
        title: "Customer service & quotes",
        description:
          "Organize incoming requests, quotes, responsibilities and follow-ups, so opportunities do not depend entirely on manual reminders.",
        examples: "WhatsApp · Forms · Sales pipeline",
      },
      {
        code: "02",
        title: "Systems & integrations",
        description:
          "Connect e-commerce, ERP, CRM, payment platforms or internal tools through APIs and webhooks, with attention to reliability.",
        examples: "Orders · Inventory · Payments",
      },
      {
        code: "03",
        title: "Process automation",
        description:
          "Reduce copy-and-paste tasks with automatic notifications, updates and workflows designed around your actual routine.",
        examples: "Notifications · Scheduling · n8n",
      },
      {
        code: "04",
        title: "Dashboards & reports",
        description:
          "Bring important operational information into a clear, useful view without manually joining spreadsheets every day.",
        examples: "Sales · Pending tasks · Indicators",
      },
      {
        code: "05",
        title: "Technical support for agencies",
        description:
          "Implement backend features, fix integration issues and deliver scoped development for agencies and software teams.",
        examples: "APIs · Backend · Maintenance",
      },
    ],
    approachLabel: "How it works",
    approachTitle: "Start with the problem. Deliver only what is needed.",
    steps: [
      {
        number: "01",
        title: "Initial conversation",
        detail:
          "You explain the current workflow and what is taking time or causing errors.",
      },
      {
        number: "02",
        title: "Clear proposal",
        detail:
          "I assess feasibility and define the deliverable, timeline and price before development.",
      },
      {
        number: "03",
        title: "Implementation",
        detail:
          "We validate the improvement while preserving processes that already work.",
      },
    ],
    evidenceLabel: "Technical background",
    evidenceTitle: "Hands-on experience beyond simple websites.",
    evidenceBody:
      "My work includes production systems, payment flows, transactional platforms, APIs, SaaS products and web applications. Solutions are tailored to each situation; there is no one-size-fits-all package.",
    evidenceLink: "See selected engineering work",
    faqLabel: "Common questions",
    faqTitle: "Straight answers before we talk.",
    faq: [
      {
        q: "Do I need to replace my current system?",
        a: "Usually not. The first step is to assess whether an integration or a small change can solve the issue using what you already have.",
      },
      {
        q: "Can you handle a single small improvement?",
        a: "Yes. Focused, clearly scoped projects are often the best starting point.",
      },
      {
        q: "Do you work outside Boituva?",
        a: "Yes. I am based in Boituva and can work remotely with teams across Brazil.",
      },
      {
        q: "How much does a project cost?",
        a: "It depends on scope, access and complexity. After understanding the need, I can present a proposal with deliverables and a clear price.",
      },
    ],
    contactLabel: "Let's talk",
    contactTitle: "Tell me where your operation gets stuck.",
    contactIntro:
      "A few sentences are enough for an initial conversation. No need to know which technology you need.",
    contactAlt: "Prefer another way to reach me?",
    contactLink: "View all contact options",
  },
  "pt-br": {
    eyebrow: "Tecnologia prática para empresas de Boituva e região",
    title: "Menos trabalho manual. Mais tempo para vender e atender.",
    intro:
      "Crio integrações, automações e melhorias pontuais para pequenas e médias empresas, aproveitando os sistemas e ferramentas que sua equipe já utiliza.",
    region: "Em Boituva, SP · Atendimento remoto em todo o Brasil",
    mainCta: "Contar meu problema",
    secondaryCta: "Ver soluções",
    asideLabel: "Já aconteceu na sua empresa?",
    asideTitle: "Sua equipe faz o mesmo trabalho duas vezes.",
    asideItems: [
      "O orçamento chega pelo WhatsApp e se perde entre mensagens e planilhas.",
      "O pedido do site precisa ser digitado novamente em outro sistema.",
      "O relatório da semana exige horas copiando informações.",
    ],
    asideNote:
      "Podemos começar por um único processo, sem trocar tudo o que funciona.",
    servicesLabel: "Onde posso ajudar",
    servicesTitle: "Melhorias pequenas que fazem diferença na operação.",
    services: [
      {
        code: "01",
        title: "Atendimento e orçamentos",
        description:
          "Organização de solicitações, propostas, responsáveis e retornos para que oportunidades não dependam apenas da memória da equipe.",
        examples: "WhatsApp · Formulários · Comercial",
      },
      {
        code: "02",
        title: "Integração entre sistemas",
        description:
          "Conexão entre loja virtual, ERP, CRM, pagamentos e ferramentas internas por APIs e webhooks, com foco em confiabilidade.",
        examples: "Pedidos · Estoque · Pagamentos",
      },
      {
        code: "03",
        title: "Automação de rotinas",
        description:
          "Menos copiar e colar: notificações, atualizações e fluxos automáticos adaptados à rotina real da empresa.",
        examples: "Avisos · Agendamentos · n8n",
      },
      {
        code: "04",
        title: "Painéis e relatórios",
        description:
          "Informações importantes reunidas em um painel útil, sem depender de juntar planilhas manualmente todo dia.",
        examples: "Vendas · Pendências · Indicadores",
      },
      {
        code: "05",
        title: "Apoio técnico a agências",
        description:
          "Desenvolvimento de funcionalidades, correção de integrações e entregas técnicas pontuais para agências e equipes de software.",
        examples: "APIs · Backend · Manutenção",
      },
    ],
    approachLabel: "Como funciona",
    approachTitle: "Primeiro o problema. Depois, só o necessário.",
    steps: [
      {
        number: "01",
        title: "Conversa inicial",
        detail:
          "Você explica o processo atual e onde surgem atrasos, erros ou retrabalho.",
      },
      {
        number: "02",
        title: "Proposta clara",
        detail:
          "Avalio a viabilidade e defino entrega, prazo e preço antes de desenvolver.",
      },
      {
        number: "03",
        title: "Implementação",
        detail:
          "Validamos a melhoria preservando as rotinas que já estão funcionando.",
      },
    ],
    evidenceLabel: "Experiência técnica",
    evidenceTitle: "Experiência prática além da criação de sites.",
    evidenceBody:
      "Atuo com sistemas em produção, meios de pagamento, plataformas transacionais, APIs, produtos SaaS e aplicações web. Cada solução é pensada para o cenário real da empresa, sem pacote genérico.",
    evidenceLink: "Ver projetos e experiências",
    faqLabel: "Dúvidas frequentes",
    faqTitle: "Respostas diretas antes da conversa.",
    faq: [
      {
        q: "Preciso trocar o sistema que já utilizo?",
        a: "Não necessariamente. Primeiro avaliamos se uma integração ou melhoria pontual resolve o problema com as ferramentas atuais.",
      },
      {
        q: "Você aceita projetos pequenos?",
        a: "Sim. Uma melhoria bem delimitada costuma ser uma ótima forma de começar.",
      },
      {
        q: "Atende empresas fora de Boituva?",
        a: "Sim. Estou em Boituva e também trabalho remotamente com empresas de outras regiões do Brasil.",
      },
      {
        q: "Quanto custa?",
        a: "O valor depende do escopo, dos acessos e da complexidade. Após entender a necessidade, apresento uma proposta com entregas e preço definidos.",
      },
    ],
    contactLabel: "Vamos conversar",
    contactTitle: "Conte onde sua operação está travando.",
    contactIntro:
      "Bastam algumas linhas para começarmos. Você não precisa saber qual tecnologia contratar.",
    contactAlt: "Prefere outro canal?",
    contactLink: "Ver todas as opções de contato",
  },
} as const;

export function ServicesPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <>
      <main id="main-content">
        <section className="container grid gap-12 py-16 lg:min-h-[39rem] lg:grid-cols-[1.16fr_.84fr] lg:items-center lg:py-24">
          <div>
            <div className="section-label">{t.eyebrow}</div>
            <h1 className="max-w-4xl text-[clamp(3rem,6vw,5.9rem)] leading-[.98] font-semibold tracking-[-.065em]">
              {t.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-strong)] sm:text-xl">
              {t.intro}
            </p>
            <p className="mono mt-6 text-xs leading-6 text-[var(--muted)]">
              {t.region}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button button-primary" href="#conversar">
                {t.mainCta} <span>→</span>
              </a>
              <a className="button" href="#solucoes">
                {t.secondaryCta}
              </a>
            </div>
          </div>
          <div className="panel p-6 sm:p-9">
            <div className="mono text-xs tracking-[.15em] text-[var(--accent)] uppercase">
              {t.asideLabel}
            </div>
            <h2 className="mt-6 text-3xl leading-tight font-semibold tracking-[-.05em]">
              {t.asideTitle}
            </h2>
            <ul className="mt-7 grid gap-4">
              {t.asideItems.map((item, i) => (
                <li
                  key={item}
                  className="flex gap-4 border-t border-[var(--border)] pt-4 text-sm leading-7 text-[var(--muted-strong)]"
                >
                  <span className="mono text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-md bg-[var(--accent-soft)] p-4 text-sm leading-6 text-[var(--foreground)]">
              {t.asideNote}
            </p>
          </div>
        </section>

        <section
          id="solucoes"
          className="section border-y border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_28%,transparent)]"
        >
          <div className="container">
            <div className="section-label">{t.servicesLabel}</div>
            <h2 className="section-title">{t.servicesTitle}</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.services.map((service) => (
                <article key={service.code} className="panel flex flex-col p-7">
                  <span className="mono text-xs text-[var(--accent)]">
                    {service.code}
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-.04em]">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted-strong)]">
                    {service.description}
                  </p>
                  <p className="mono mt-7 border-t border-[var(--border)] pt-5 text-xs leading-5 text-[var(--muted)]">
                    {service.examples}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="section-label">{t.approachLabel}</div>
          <h2 className="section-title">{t.approachTitle}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.steps.map((step) => (
              <article
                key={step.number}
                className="border-t border-[var(--border-strong)] pt-6"
              >
                <span className="mono text-xs text-[var(--accent)]">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted-strong)]">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="container pb-20">
          <div className="panel grid gap-8 p-7 sm:p-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div className="section-label !mb-0">{t.evidenceLabel}</div>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-.05em]">
                {t.evidenceTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted-strong)]">
                {t.evidenceBody}
              </p>
              <a
                href={locale === "pt-br" ? "/pt-br/#work" : "/#work"}
                className="mono mt-6 inline-flex text-sm text-[var(--accent)] hover:underline"
              >
                {t.evidenceLink} ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section border-y border-[var(--border)]">
          <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="section-label">{t.faqLabel}</div>
              <h2 className="section-title">{t.faqTitle}</h2>
            </div>
            <div className="grid gap-3">
              {t.faq.map((item) => (
                <details key={item.q} className="panel group p-5 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold marker:hidden">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="mono text-lg text-[var(--accent)] group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-strong)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="conversar" className="section container">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
              <div className="section-label">{t.contactLabel}</div>
              <h2 className="section-title">{t.contactTitle}</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--muted-strong)]">
                {t.contactIntro}
              </p>
              <p className="mt-8 text-sm text-[var(--muted)]">
                {t.contactAlt}{" "}
                <a
                  className="text-[var(--accent)] hover:underline"
                  href={localizePath("/contact", locale)}
                >
                  {t.contactLink} ↗
                </a>
              </p>
            </div>
            <ContactForm locale={locale} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}