export const profile = {
  name: "Luís Trivinho",
  role: "Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in SaaS, payments, APIs and transactional systems.",
  location: "BRA · UTC-3 · Remote",
  availability: "Available for international opportunities",
  email: "luis.trivinho@icloud.com",
  socials: {
    github: "https://github.com/luisTrivinh0",
    linkedin: "https://www.linkedin.com/in/lu%C3%ADs-trivinho-897942224/",
  },
} as const;

export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "Laravel",
  "React Native",
  "SQL",
] as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
