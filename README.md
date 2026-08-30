# Luís Trivinho — Engineering Portfolio

An international-facing software engineering portfolio focused on SaaS, payments, APIs, transactional systems, web and mobile work. The interface itself is treated as an engineering artifact: fast, accessible, content-led and intentionally free of external runtime dependencies.

## Stack

- Next.js 16.3 with App Router and React Server Components
- React 19 and strict TypeScript
- Tailwind CSS 4.3 with design tokens in CSS variables
- Motion for React with reduced-motion support
- Repository-owned Markdown case studies
- pnpm, ESLint and Prettier

## Architecture

The homepage is assembled from focused section components. Profile, navigation, project metadata and verified experience themes live in typed data modules. Long-form case studies remain Markdown and are read on the server during static generation. Client Components are limited to theme persistence, mobile navigation, the command palette, reveal motion and the transaction visualization.

```text
src/
├── app/                    # routes, metadata, sitemap, robots and OG image
├── components/             # layout, sections, UI, work and visualizations
├── content/case-studies/   # long-form Markdown content
├── data/                   # typed profile, cases and experience data
└── lib/                    # server-side content loading
```

## Local setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

For deployment, set `NEXT_PUBLIC_SITE_URL` to the final public origin so canonical URLs, the sitemap and robots metadata use the correct domain. A non-secret example is included in `.env.example`.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
pnpm format
pnpm format:check
```

## Content

Case-study metadata is defined in `src/data/cases.ts`; long-form content is stored under `src/content/case-studies`, with Portuguese translations in `src/content/case-studies/pt-br`. Career history, education, language labels, archive metadata and localized UI copy are centralized in `src/data/portfolio.ts`. Professional facts are intentionally limited to verified résumé and repository sources. Private URLs, client data and unverified metrics are not published.

## Languages

English is the primary public version at `/`. The fully localized Brazilian Portuguese version lives at `/pt-br`. The language selector preserves the equivalent route between locales, and each page publishes `hreflang` alternates and locale-specific metadata.

## Résumés

The application checks for final PDFs at runtime before rendering external résumé links:

```text
public/resume/Luis-Trivinho-Resume-EN.pdf
public/resume/Luis-Trivinho-Curriculo-PTBR.pdf
```

Place the final reviewed PDFs at these exact paths. Until then, résumé actions remain visibly unavailable rather than linking to a missing file.

## WordPress transition

The previous WordPress portfolio is a legacy-content source only. Before retirement:

1. Deploy this portfolio to Vercel and confirm its final domain.
2. Update LinkedIn, GitHub, résumé files and older public profiles.
3. Redirect or link the old WordPress site to the new portfolio during a transition period.
4. Confirm useful public material has been curated before considering removal.

The `/archive` route contains only verified earlier technical work and does not hotlink WordPress assets or pages.

## Design and accessibility

The internal direction, **Engineering Control Surface**, uses a dark-first graphite palette, subtle technical grid, restrained cyan/violet accents and code-native diagrams. A complete light theme is included. Navigation is semantic and keyboard-accessible, focus remains visible, the command palette supports `Cmd/Ctrl + K`, and motion respects `prefers-reduced-motion`.

The generated visual reference used during implementation is kept outside the public site at `design/engineering-control-surface-concept.png` for design traceability. It is a composition reference, not a source of factual portfolio content.

## Performance and deployment

The site uses Server Components by default, statically generates all case-study routes and avoids external APIs for primary content. It targets Vercel and can also run anywhere that supports the standard Next.js build/start lifecycle.

## Confidentiality

This repository demonstrates engineering decisions without exposing proprietary code, credentials, internal infrastructure, customer information or confidential implementation details.
