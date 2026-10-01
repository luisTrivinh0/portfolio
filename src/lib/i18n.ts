export const locales = ["en", "pt-br"] as const;
export type Locale = (typeof locales)[number];

const localizedRoutes = [
  { en: "/consulting", "pt-br": "/consultoria" },
] as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/pt-br" || pathname.startsWith("/pt-br/")
    ? "pt-br"
    : "en";
}

function cleanPath(pathname: string) {
  return pathname.replace(/^\/pt-br(?=\/|$)/, "") || "/";
}

function translateRoute(pathname: string, target: Locale) {
  for (const route of localizedRoutes) {
    for (const source of locales) {
      const sourcePath = route[source];
      if (pathname === sourcePath || pathname.startsWith(`${sourcePath}/`)) {
        const suffix = pathname.slice(sourcePath.length);
        return `${route[target]}${suffix}`;
      }
    }
  }
  return pathname;
}

export function localizePath(pathname: string, target: Locale) {
  const clean = cleanPath(pathname);
  const translated = translateRoute(clean, target);
  return target === "pt-br"
    ? `/pt-br${translated === "/" ? "" : translated}`
    : translated;
}

export function alternateLanguages(pathname: string) {
  return {
    en: localizePath(pathname, "en"),
    "pt-BR": localizePath(pathname, "pt-br"),
  };
}
