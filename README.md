# LawBid website

Marketing site for the LawBid app: clients post legal cases for free, licensed US attorneys bid on them.

**Stack:** Next.js 16 (App Router, static pages), React 19, TypeScript, Tailwind CSS v4, Motion, Lenis smooth scroll, Phosphor icons. Fonts (Inter, Source Serif 4) are self-hosted through `next/font`.

## Getting started

Requires Node 20.9+ (see `.nvmrc`).

```bash
npm install
npm run dev            # http://localhost:3100
```

| Script                        | What it does                                                  |
| ----------------------------- | ------------------------------------------------------------- |
| `npm run dev`                 | Dev server with hot reload                                    |
| `npm run build` / `npm start` | Production build and Node server (sends the security headers) |
| `npm run build:static`        | Plain static site in `out/` for any static host               |
| `npm run check`               | ESLint, TypeScript and Prettier checks (same as CI)           |
| `npm run format`              | Format all files with Prettier                                |

## Configuration

All settings are optional public env vars (see `.env.example`). Values are validated: links must be `https://`, otherwise they are ignored.

| Variable                     | Purpose                                                         |
| ---------------------------- | --------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`       | Public site URL for canonical links, Open Graph and the sitemap |
| `NEXT_PUBLIC_APP_STORE_URL`  | App Store link; the button shows "Coming soon" until set        |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Google Play link; same as above                                 |
| `NEXT_PUBLIC_SUPPORT_EMAIL`  | Support address shown on the site                               |

## Project structure

```
src/
  app/                    routes, metadata, icons, robots, sitemap, OG image
    (legal)/              terms, privacy, cookies with a shared layout
  components/
    layout/               nav, footer, providers (reduced motion, smooth scroll)
    sections/             one file per home page section
    illustrations/        animated scales of justice, phone mockup screens
    ui/                   small reusable pieces (logo, buttons, cards, headings)
    seo/                  JSON-LD structured data
  content/                copy and data: FAQ, pricing, practice areas, how-it-works steps
  lib/                    site config and helpers
public/images/            static images (app icon)
```

To change text or prices, edit `src/content/`. Prices must match the app's subscription settings.

## Security

- Strict security headers on every response (`next.config.ts`): Content-Security-Policy locked to `'self'`, HSTS, `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy, Permissions-Policy, COOP/CORP.
- No third-party scripts, trackers, iframes or external fonts. No forms or user input on the site.
- Env-provided links are validated to `https://` and emails to a strict pattern before rendering.
- JSON-LD is serialized with `<` escaped so content cannot break out of the script tag.
- CI runs lint, typecheck, format check, `npm audit --audit-level=high` and a production build on every PR. Dependabot keeps dependencies and actions up to date.
- `npm run build:static` output does not carry headers by itself: configure the same headers (copy them from `next.config.ts`) on the static host.

## Accessibility

Skip-to-content link, visible keyboard focus, semantic landmarks, `aria-expanded` on the FAQ, and animations that respect the system "reduce motion" setting.

## Before launch

- Have a lawyer review `/terms`, `/privacy` and `/cookies` (they are drafts).
- Set the store links and support email.
- Attorney names and prices in the mockups are illustrative.
