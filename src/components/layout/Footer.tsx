"use client";

import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { contentFor } from "@/data/portfolio";
import { localeFromPathname, localizePath } from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname() || "/";
  const locale = localeFromPathname(pathname);
  const copy = contentFor(locale);
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container flex flex-col gap-5 sm:flex-row sm:items-center">
        <span className="mono grid size-8 place-items-center rounded border border-[var(--accent)] text-xs text-[var(--accent)]">
          LT
        </span>
        <p className="mono text-[.65rem] text-[var(--muted)]">
          © {new Date().getFullYear()} {profile.name}. Built with care for the
          production details.
        </p>
        <nav
          className="ml-auto flex flex-wrap gap-5"
          aria-label="Footer navigation"
        >
          {copy.navigation.slice(0, 4).map((item) => (
            <a
              key={item.href}
              href={
                item.href.startsWith("#")
                  ? `${localizePath("/", locale)}${item.href}`
                  : localizePath(item.href, locale)
              }
              className="text-xs text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
