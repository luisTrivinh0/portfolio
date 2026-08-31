"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { contentFor } from "@/data/portfolio";
import { localeFromPathname, localizePath } from "@/lib/i18n";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";
  const locale = localeFromPathname(pathname);
  const copy = contentFor(locale);
  const base = localizePath("/", locale);
  const actions = [
    ...copy.navigation.map((item) => ({
      label: `${locale === "en" ? "Go to" : "Ir para"} ${item.label}`,
      href: item.href.startsWith("#")
        ? `${base}${item.href}`
        : localizePath(item.href, locale),
      external: false,
    })),
    { label: "Open GitHub", href: profile.socials.github, external: true },
    { label: "Open LinkedIn", href: profile.socials.linkedin, external: true },
  ] as const;
  useEffect(() => {
    const keyboard = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    const custom = () => setOpen(true);
    window.addEventListener("keydown", keyboard);
    window.addEventListener("open-command-palette", custom);
    return () => {
      window.removeEventListener("keydown", keyboard);
      window.removeEventListener("open-command-palette", custom);
    };
  }, []);
  useEffect(() => {
    if (open) dialog.current?.focus();
  }, [open]);
  if (!open) return null;
  const run = (index: number) => {
    const action = actions[index];
    if (action.external)
      window.open(action.href, "_blank", "noopener,noreferrer");
    else window.location.assign(action.href);
    setOpen(false);
  };
  const keydown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((value) => (value + 1) % (actions.length + 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive(
        (value) => (value - 1 + actions.length + 1) % (actions.length + 1),
      );
    }
    if (event.key === "Enter") {
      if (active === actions.length)
        document
          .querySelector<HTMLButtonElement>("[aria-label^='Switch to']")
          ?.click();
      else run(active);
      setOpen(false);
    }
  };
  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-start bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) setOpen(false);
      }}
    >
      <div
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        tabIndex={-1}
        onKeyDown={keydown}
        className="panel w-full max-w-xl overflow-hidden bg-[var(--surface)] p-2 shadow-[var(--shadow)] outline-none"
      >
        <div className="mono flex items-center justify-between border-b border-[var(--border)] px-3 py-3 text-xs text-[var(--muted)]">
          <span>{copy.command.navigate}</span>
          <span>↑↓ · Enter · Esc</span>
        </div>
        <div className="grid gap-1 p-2" role="listbox" aria-label="Commands">
          {actions.map((action, index) => (
            <button
              key={action.label}
              role="option"
              aria-selected={active === index}
              onMouseEnter={() => setActive(index)}
              onClick={() => run(index)}
              className={`flex items-center justify-between rounded px-3 py-3 text-left text-sm ${active === index ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-[var(--muted-strong)]"}`}
            >
              <span>{action.label}</span>
              <span className="mono text-xs">↗</span>
            </button>
          ))}
          <button
            role="option"
            aria-selected={active === actions.length}
            onMouseEnter={() => setActive(actions.length)}
            onClick={() => {
              document
                .querySelector<HTMLButtonElement>("[aria-label^='Switch to']")
                ?.click();
              setOpen(false);
            }}
            className={`flex items-center justify-between rounded px-3 py-3 text-left text-sm ${active === actions.length ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-[var(--muted-strong)]"}`}
          >
            <span>{copy.command.toggleTheme}</span>
            <span className="mono text-xs">◐</span>
          </button>
        </div>
      </div>
    </div>
  );
}
