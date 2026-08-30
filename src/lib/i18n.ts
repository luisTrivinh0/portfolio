export const locales = ["en", "pt-br"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/pt-br" || pathname.startsWith("/pt-br/")
    ? "pt-br"
    : "en";
}

export function localizePath(pathname: string, target: Locale) {
  const clean = pathname.replace(/^\/pt-br(?=\/|$)/, "") || "/";
  return target === "pt-br" ? `/pt-br${clean === "/" ? "" : clean}` : clean;
}

export function alternateLanguages(pathname: string) {
  const clean = pathname.replace(/^\/pt-br(?=\/|$)/, "") || "/";
  return {
    en: clean,
    "pt-BR": `/pt-br${clean === "/" ? "" : clean}`,
  };
}
