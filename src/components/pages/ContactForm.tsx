"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import type { Locale } from "@/lib/i18n";

const content = {
  en: {
    name: "Your name",
    namePlaceholder: "How should I address you?",
    email: "Work email",
    company: "Company (optional)",
    companyPlaceholder: "Your company or project",
    subject: "What do you need help with?",
    choices: [
      ["", "Select a topic"],
      ["Automation and workflows", "Automation and workflows"],
      ["System integration", "System integration"],
      ["Technical fix or scoped project", "Technical fix or scoped project"],
      ["Agency partnership", "Agency partnership"],
      ["Other", "Other"],
    ],
    message: "Tell me a little about the challenge",
    messagePlaceholder:
      "What happens today, and what would you like to improve?",
    submit: "Open email with my message",
    notice:
      "This opens your email app with a prefilled message. Review and send it there. Nothing is submitted automatically.",
  },
  "pt-br": {
    name: "Seu nome",
    namePlaceholder: "Como posso chamar você?",
    email: "Seu e-mail",
    company: "Empresa (opcional)",
    companyPlaceholder: "Nome da empresa ou projeto",
    subject: "Como posso ajudar?",
    choices: [
      ["", "Selecione um assunto"],
      ["Automação de processos", "Automação de processos"],
      ["Integração de sistemas", "Integração de sistemas"],
      ["Correção ou projeto pontual", "Correção ou projeto pontual"],
      ["Parceria com agência", "Parceria com agência"],
      ["Outro assunto", "Outro assunto"],
    ],
    message: "Conte um pouco sobre o desafio",
    messagePlaceholder:
      "O que acontece hoje e o que você gostaria de melhorar?",
    submit: "Abrir e-mail com a mensagem",
    notice:
      "O formulário abre seu aplicativo de e-mail com a mensagem preenchida. Revise e confirme o envio por lá. Nenhum dado é enviado automaticamente.",
  },
} as const;

const inputClass =
  "mt-2 w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface-elevated)] px-4 py-3 text-base text-[var(--foreground)] outline-offset-4 focus:border-[var(--accent)] focus:outline focus:outline-2 focus:outline-[var(--accent)]";
const labelClass = "block text-sm font-medium text-[var(--foreground)]";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const utms = ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
      .filter((key) => params.has(key))
      .map((key) => `${key}: ${params.get(key)}`);
    const body = [
      `Nome: ${name.trim()}`,
      `E-mail: ${email.trim()}`,
      company.trim() ? `Empresa: ${company.trim()}` : "",
      `Assunto: ${subject}`,
      "",
      message.trim(),
      ...(utms.length ? ["", "Origem:", ...utms] : []),
    ]
      .filter((line) => line !== null)
      .join("\n");
    const mailSubject =
      locale === "pt-br"
        ? `Novo contato pelo site — ${subject}`
        : `Website inquiry — ${subject}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="panel grid gap-6 p-6 sm:p-9">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className={labelClass}>
          {t.name}
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            className={inputClass}
          />
        </label>
        <label className={labelClass}>
          {t.email}
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={160}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@empresa.com.br"
            className={inputClass}
          />
        </label>
      </div>
      <label className={labelClass}>
        {t.company}
        <input
          name="organization"
          autoComplete="organization"
          maxLength={160}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={t.companyPlaceholder}
          className={inputClass}
        />
      </label>
      <label className={labelClass}>
        {t.subject}
        <select
          name="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
        >
          {t.choices.map(([value, label]) => (
            <option key={value} value={value} disabled={!value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label className={labelClass}>
        {t.message}
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={2500}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.messagePlaceholder}
          rows={5}
          className={inputClass}
        />
      </label>
      <button type="submit" className="button button-primary w-full sm:w-fit">
        {t.submit} <span>↗</span>
      </button>
      <p className="text-xs leading-6 text-[var(--muted)]">{t.notice}</p>
    </form>
  );
}