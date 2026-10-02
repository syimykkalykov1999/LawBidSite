# LawBid website

Marketing site for the LawBid app: clients post legal cases, verified attorneys bid.

Built with Next.js (App Router), Tailwind CSS v4, Motion and Lenis smooth scroll. Icons: Phosphor.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3100
```

## Build

```bash
npm run build && npm start          # Node server
STATIC_EXPORT=1 npm run build       # plain static site in out/ (any static host)
```

## Settings

Set these env vars when the apps are live (until then the store buttons say "Coming soon"):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public site URL, used for SEO tags and sitemap |
| `NEXT_PUBLIC_APP_STORE_URL` | App Store link |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Google Play link |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Support address shown on the site |

## Structure

- `app/` pages: home, `/terms`, `/privacy`, `/cookies`, plus icon, OG image, robots and sitemap
- `components/hero.tsx` + `components/scales.tsx` scroll-driven scales of justice
- `components/phone.tsx` app screens drawn in HTML for the "How it works" section
- `lib/site.ts` site name, links, practice areas

The legal pages are drafts and must be reviewed by a lawyer before launch.
