# ELSIM Engineering

Production website for ELSIM Engineering — electrical, energy and technical
engineering services in Ghana and West Africa.

Next.js 14 (App Router) · TypeScript · Tailwind CSS · deployed to Cloudflare Pages.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev            # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Detects the target: static export on Cloudflare Pages, Next server build elsewhere |
| `npm run build:node` | Force the Next server build, API routes included |
| `npm run build:cf` | Force the static export → `out/` |
| `npm run build:offline` | Build without fetching Google Fonts |
| `npm run build:cf:offline` | Static export without fetching Google Fonts |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run check` | Typecheck then lint |
| `npm run assets` | Regenerate derived brand assets from the master logo |

## Brand

The palette is sampled from the master logo, not chosen independently:

| Role | Hex | Token |
|---|---|---|
| Navy (primary) | `#0F3156` | `navy-600`, `--theme-accent` |
| Gold (secondary) | `#FAB617` | `gold-500`, `--theme-accent-2` |

Gold is a highlight and mark colour. It fails contrast as body text on light
surfaces, so use `text-accent-2-ink` (`#7B530C`) where gold-coloured text is
wanted.

An earlier burgundy `#941A1D` identity predates this logo. It has not been
removed — it survives as the selectable `red` theme.

## Theming

Seven runtime themes (`white`, `black`, `blue`, `red`, `orange`, `green`,
`violet`), defined as CSS custom properties in `app/globals.css` and switched by
`components/theme/ThemeSwitcher.tsx`. The choice persists in `localStorage`,
syncs across tabs, and is applied before first paint by an inline script so the
page never flashes.

Components should style surfaces with `var(--theme-*)` or the `accent`
utilities rather than fixed colours, so they follow the active theme.

## Project structure

```
app/                 routes, metadata, robots, sitemap, manifest, API
components/
  3d/                WebGL scenes (gated — see components/3d/BrandField.tsx)
  brand/             logo lockup
  forms/             quotation form
  hero/              hero slideshow
  layout/            header, footer, page header, legal document
  media/             image components that contain rather than crop
  motion/            reveal, scroll progress, counters, transitions
  projects/          filterable project explorer
  search/            ⌘K command palette
  theme/             theme provider and switcher
  ui/                button, badge, card
hooks/               WebGL support, reduced motion, scroll reveal
lib/
  3d/                quality tiers and 3D brand constants
  data/              company, services, projects, media, legal — the content layer
  validation/        shared Zod schemas
public/assets/elsim/ all imagery — see docs/ASSET_INSTALL.md
scripts/             asset generation and build wrappers
```

Content lives in `lib/data/`. Copy changes should happen there, not in
components.

## Accessibility

Skip link, visible focus rings, keyboard-complete theme switcher, command
palette and carousel, a pause control on the auto-advancing slideshow, live
regions on form and filter results, and `prefers-reduced-motion` honoured
throughout — reveals resolve to visible rather than staying hidden.

## Known items

- The four originally-supplied photographs (engineer-panel-inspection,
  solar-team-review, technician-panel-work, site-engineer-laptop) are low
  resolution. Images are contained, never cropped, so nothing is distorted,
  but higher-resolution originals would improve the hero considerably. The
  24 field-work photos and both infrastructure shots are full resolution.
- `next@14.2.35` is the latest 14.x. Open advisories against the 14 line are
  only fixed in Next 16, which is a breaking upgrade. Nearly all of them require
  a running Next server (image optimizer, server actions, rewrites, RSC cache);
  this site ships as a static export with no Next runtime, so practical exposure
  is minimal. Worth scheduling the Next 16 migration deliberately rather than as
  part of an unrelated change.
- Service descriptions marked `[REQUIRES ELSIM APPROVAL]` in
  `lib/data/services.ts` are provisional and need sign-off before launch.
- `company.email` is `null` pending confirmation; the contact page handles this
  and does not show a placeholder address.

## Documentation

- [`docs/CLOUDFLARE.md`](docs/CLOUDFLARE.md) — deployment, build settings, troubleshooting
- [`docs/ASSET_INSTALL.md`](docs/ASSET_INSTALL.md) — replacing imagery
- [`docs/3D_HUMAN_ASSET_PIPELINE.md`](docs/3D_HUMAN_ASSET_PIPELINE.md) — optional GLB characters
- [`docs/WEBGL_ANIMATION_LIBRARIES.md`](docs/WEBGL_ANIMATION_LIBRARIES.md) — 3D library notes
