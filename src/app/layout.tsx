import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Header } from "@/components/layout/Header";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
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

const languageScript = `(function(){try{document.documentElement.lang=location.pathname==='/pt-br/'||location.pathname.startsWith('/pt-br/')?'pt-BR':'en'}catch(e){}})()`;
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var t=s||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl,
    sameAs: [profile.socials.github, profile.socials.linkedin],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Script id="language-init" strategy="beforeInteractive">
          {languageScript}
        </Script>
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
