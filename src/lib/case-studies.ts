import fs from "node:fs";
import path from "node:path";
import { getCaseStudy } from "@/data/cases";
import type { Locale } from "@/lib/i18n";

export function readCaseStudy(slug: string, locale: Locale = "en") {
  const metadata = getCaseStudy(slug);
  if (!metadata) return null;
  const localizedPath = path.join(
    process.cwd(),
    "src",
    "content",
    "case-studies",
    locale,
    `${slug}.md`,
  );
  const filePath = fs.existsSync(localizedPath)
    ? localizedPath
    : path.join(process.cwd(), "src", "content", "case-studies", `${slug}.md`);
  return { metadata, content: fs.readFileSync(filePath, "utf8") };
}
