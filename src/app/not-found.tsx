"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contentFor } from "@/data/portfolio";

export default function NotFound() {
  const pathname = usePathname() || "/";
  const locale =
    pathname === "/pt-br" || pathname.startsWith("/pt-br/") ? "pt-br" : "en";
  const copy = contentFor(locale).notFound;
  const home = locale === "pt-br" ? "/pt-br/" : "/";

  return (
    <main
      id="main-content"
      className="container grid min-h-[75vh] place-items-center py-20"
    >
      <div className="text-center">
        <p className="mono text-sm text-[var(--accent)]">ERROR / 404</p>
        <h1 className="mt-6 text-6xl tracking-[-.06em]">{copy.title}</h1>
        <p className="mt-5 text-[var(--muted)]">{copy.body}</p>
        <Link className="button button-primary mt-8" href={home}>
          {copy.action}
        </Link>
      </div>
    </main>
  );
}
