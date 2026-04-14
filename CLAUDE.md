# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio/marketing website for Web Inventions, a web development agency based in Warsaw. Polish-language site deployed to GitHub Pages at webinv.github.io.

## Commands

- `npm run dev` — local dev server (localhost:4321)
- `npm run build` — production build to ./dist/
- `npm run preview` — preview production build locally

No test runner or linter is configured.

## Tech Stack

- **Astro 6** — static site generation, no SSR
- **Tailwind CSS v4** — integrated via `@tailwindcss/vite` plugin
- **TypeScript** — strict mode (`astro/tsconfigs/strict`)
- **Node >=22.12.0**

## Architecture

Single layout (`Layout.astro`) wraps all pages with Header and Footer. Pages live in `src/pages/` (file-based routing). Reusable UI in `src/components/`.

Portfolio projects and services are defined as typed arrays in `src/data/` (projects.ts, services.ts) — no CMS, no markdown content collections.

Static images served from `public/` (portfolio screenshots organized by project slug in `public/portfolio/`). Component-referenced images in `src/assets/`.

## Styling

Custom theme defined in `src/styles/global.css` using Tailwind v4 `@theme` directive:
- Primary color palette: navy-to-sky-blue gradient (50–950 shades, base `#0f1d4e`)
- Fonts: Inter (body), Raleway (headings) — loaded from Google Fonts in Layout

## Deployment

GitHub Actions (`.github/workflows/pages.yml`) builds and deploys to GitHub Pages on push to `main`. Uses Node 24.
