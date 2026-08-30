"use client";

import { useEffect, useState } from "react";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "light" ? "light" : "dark",
    );
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };
  return (
    <button
      className="flex size-10 items-center justify-center rounded-md border border-[var(--border)] text-[var(--muted-strong)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title="Toggle theme"
    >
      {theme === "dark" ? "☼" : "◐"}
      {!compact && <span className="sr-only">Toggle theme</span>}
    </button>
  );
}
