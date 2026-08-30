import fs from "node:fs";
import path from "node:path";

const files = {
  en: "/resume/Luis-Trivinho-Resume-EN.pdf",
  "pt-br": "/resume/Luis-Trivinho-Curriculo-PTBR.pdf",
} as const;

export function resumeAvailability() {
  return Object.fromEntries(
    Object.entries(files).map(([locale, file]) => [
      locale,
      fs.existsSync(path.join(process.cwd(), "public", file)),
    ]),
  ) as Record<keyof typeof files, boolean>;
}

export { files as resumeFiles };
