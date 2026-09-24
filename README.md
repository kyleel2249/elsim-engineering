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

"Technical Premium" — ELSIM's current design system. Engineering precision,
industrial authority, modern energy, West African presence.

| Role | Hex | Token |
|---|---|---|
| Primary — Deep Engineering Navy | `#082B45` | `elnavy`, `--theme-accent` |
| Secondary — Industrial Blue | `#0B5A82` | `elblue`, `--theme-accent-hover` |
| Accent — Electrical Cyan | `#00A9D6` | `elcyan`, `--theme-accent-2` |
| Energy accent — Controlled Amber | `#F5A623` | `elamber`, `--theme-energy` |
| Background — Technical Off-White | `#F5F7F9` | `eloffwhite`, `--theme-bg` |
| Dark — Graphite | `#111C24` | `elgraphite` |
| Text — Slate | `#263746` | `elslate`, `--theme-text` |

Target mix is roughly 60% white/off-white, 25% navy/graphite, 10% blue/cyan,
5% amber. Amber is reserved for CTAs and energy/power motifs — not a general
highlight colour, and never the dominant tone. Cyan is the text-safe accent
for light surfaces (`text-accent-2-ink` / `#066E8C`); raw cyan text on white
is fine, raw amber text on white is not (`text-energy-ink` / `#7A4E0F`).

Typography: **Manrope** (display/headings, 600–800 weight) and **Inter**
(body, 400–500 weight), via `lib/fonts.ts`. Technical labels (eyebrows,
kickers) use the `.label-technical` utility — uppercase, small, letter-spaced.

The recurring engineering motif is a single-line-diagram accent —
`components/brand/EngineeringLine.tsx` — a thin conductor with 2–4 node
markers, used sparingly as a section accent, never as a literal schematic.

An earlier navy `#0F3156` / gold `#FAB617` identity predates this system —
it is not preserved as a selectable theme (the closest, `blue`, uses a
related but distinct navy `#2A5A94`). The `red` theme still carries the
original burgundy `#941A1D` identity that predates the logo entirely.

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
