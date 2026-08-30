import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import { headers } from "next/headers";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Header } from "@/components/layout/Header";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import { contentFor } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.role}`,
    description: profile.description,
    url: "/",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.description,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg" },
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var t=s||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t}catch(e){}})()`;

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale =
    (await headers()).get("x-portfolio-locale") === "pt-br" ? "pt-br" : "en";
  const copy = contentFor(locale);
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: copy.role,
    url: siteUrl,
    sameAs: [profile.socials.github, profile.socials.linkedin],
  };
  return (
    <html lang={locale === "pt-br" ? "pt-BR" : "en"} suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <CommandPalette />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </body>
    </html>
  );
}
