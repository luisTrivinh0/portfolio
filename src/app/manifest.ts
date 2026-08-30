import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luís Trivinho — Fullstack Software Engineer",
    short_name: "Luís Trivinho",
    description:
      "Portfolio focused on SaaS, payments, APIs and transactional systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#071018",
    theme_color: "#071018",
  };
}
