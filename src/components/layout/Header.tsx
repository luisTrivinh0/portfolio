"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { contentFor } from "@/data/portfolio";
import { localeFromPathname, localizePath } from "@/lib/i18n";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const externalProps = { target: "_blank", rel: "noreferrer noopener" } as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const locale = localeFromPathname(pathname);
  const copy = contentFor(locale);
  const isSection = (href: string) => href.startsWith("#");
  const href = (value: string) =>
    isSection(value)
      ? `${localizePath("/", locale)}${value}`
      : `${localizePath(value, locale)}`;
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_84%,transparent)] backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-3">
        <a
          href={localizePath("/", locale)}
          aria-label="Luís Trivinho — home"
          className="mono grid size-9 place-items-center rounded border border-[var(--accent)] text-sm text-[var(--accent)]"
        >
          LT
        </a>
        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Primary navigation"
        >
          {copy.navigation.map((item) => (
            <a
              key={item.href}
              href={href(item.href)}
              className="text-sm text-[var(--muted-strong)] transition hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-3 md:flex">
          <a
            href={profile.socials.github}
            {...externalProps}
            className="mono text-xs text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            {...externalProps}
            className="mono text-xs text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            LinkedIn
          </a>
          <button
            className="mono hidden rounded border border-[var(--border)] px-2 py-1.5 text-[.65rem] text-[var(--muted)] xl:block"
            onClick={() =>
              window.dispatchEvent(new Event("open-command-palette"))
            }
            aria-label="Open command palette"
          >
            Ctrl K
          </button>
          <LanguageSwitcher />
          <ThemeToggle compact />
          <span className="mono hidden items-center gap-2 rounded border border-[var(--border)] px-3 py-2 text-[.64rem] text-[var(--muted)] 2xl:flex">
            <i className="size-1.5 rounded-full bg-[var(--success)] shadow-[0_0_9px_var(--success)]" />
            {copy.availability}
          </span>
        </div>
        <button
          className="grid size-10 place-items-center rounded border border-[var(--border)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          <span className="mono text-sm">{open ? "×" : "≡"}</span>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="container grid gap-1 border-t border-[var(--border)] py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          {copy.navigation.map((item) => (
            <a
              key={item.href}
              href={href(item.href)}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-3 text-sm hover:bg-[var(--accent-soft)]"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-3 border-t border-[var(--border)] px-3 pt-3">
            <a
              href={profile.socials.github}
              {...externalProps}
              className="text-sm"
            >
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              {...externalProps}
              className="text-sm"
            >
              LinkedIn
            </a>
            <LanguageSwitcher />
            <ThemeToggle compact />
          </div>
        </nav>
      )}
    </header>
  );
}
