"use client";

import { usePathname } from "next/navigation";
import { localeFromPathname, localizePath } from "@/lib/i18n";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const locale = localeFromPathname(pathname);
  return (
    <div
      className="mono flex rounded border border-[var(--border)] p-0.5 text-[.65rem]"
      aria-label="Language selector"
    >
      <a
        href={localizePath(pathname, "en")}
        aria-current={locale === "en" ? "page" : undefined}
        className={`rounded px-2 py-1.5 ${locale === "en" ? "bg-[var(--accent)] text-[#041016]" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}
      >
        EN
      </a>
      <a
        href={localizePath(pathname, "pt-br")}
        lang="pt-BR"
        aria-current={locale === "pt-br" ? "page" : undefined}
        className={`rounded px-2 py-1.5 ${locale === "pt-br" ? "bg-[var(--accent)] text-[#041016]" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}
      >
        PT
      </a>
    </div>
  );
}
