# ELSIM Engineering – Premium 3D Engineering Website

**Provisional production-ready website** for ELSIM Engineering (Ghana).

> **Important**: The original Scribd company profile could not be fully accessed (CAPTCHA / paywall). No authentic logo, brand colours, project photographs, contact details, certifications or leadership bios were extractable. All content is clearly marked as provisional and requires ELSIM management approval before public launch.

**Live repository**: https://github.com/kyleel2249/elsim-engineering

---

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** – provisional engineering palette (deep navy + steel + electric cyan)
- **React Three Fiber + Drei** – interactive 3D hero energy field
- **Framer Motion** – UI transitions
- Fully accessible (keyboard, reduced-motion, focus states, skip link)
- SEO-ready metadata, semantic HTML
- Multi-step quotation form with client-side validation (dev-mode submit)

---

## Quick Start

```bash
git clone https://github.com/kyleel2249/elsim-engineering.git
cd elsim-engineering
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command          | Description                |
|------------------|----------------------------|
| `npm run dev`    | Development server         |
| `npm run build`  | Production build           |
| `npm run start`  | Start production server    |
| `npm run lint`   | ESLint                     |
| `npm run typecheck` | TypeScript check        |

---

## Project Structure

```
app/                  # Next.js App Router pages
  page.tsx            # Homepage + 3D hero
  about/
  services/           # Listing + [slug] detail
  projects/
  quotation/          # Multi-step form
  ...
components/
  3d/                 # HeroEnergyField (R3F)
  layout/             # Header, Footer
  forms/              # QuotationForm
lib/data/             # Typed services & projects (provisional)
types/                # Shared TypeScript interfaces
```

---

## Current Status & Blockers

| Item                         | Status                                      |
|------------------------------|---------------------------------------------|
| Core architecture            | ✅ Complete                                 |
| 3D hero + reduced-motion     | ✅ Complete                                 |
| Navigation + responsive      | ✅ Complete                                 |
| Services pages               | ✅ Provisional content                      |
| Quotation form               | ✅ Multi-step + validation (dev mode)        |
| Official logo & colours      | ❌ Missing – using provisional palette      |
| Project photographs          | ❌ None available from source               |
| Contact details / address    | ❌ Not extractable                          |
| Leadership / certifications  | ❌ Pending official profile                 |
| Backend for form submissions | ⚠️ Dev mode only – integrate Supabase/Firebase |

**Required from ELSIM management to go production:**

1. High-resolution company profile PDF or image exports
2. Official logo (SVG preferred) + exact brand colour codes
3. Verified address, phone, email, WhatsApp Business number
4. Approved project photos + short verified descriptions
5. Leadership photos + bios (publication permission)
6. Any public certifications
7. Confirmation of exact service list and geographic claims

---

## Environment Variables

Copy `.env.example` (to be added) for future backend:

```
# Example – not yet required
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# SUPABASE_URL=
# SUPABASE_ANON_KEY=
```

---

## Deployment

Recommended: **Vercel** or **Cloudflare Pages**.

```bash
npm run build
# Deploy the .next output / connect the GitHub repo for automatic deploys
```

---

## Accessibility & Performance Notes

- `prefers-reduced-motion` disables continuous 3D animation and substitutes a calm static composition.
- Skip-to-content link, visible focus rings, semantic headings, ARIA labels on mobile menu.
- 3D scene uses limited geometry, DPR capped, transparent background, lazy-friendly structure.
- Images will use Next.js Image optimisation once real assets are supplied.

---

## Licence & Usage

Provisional internal development build. Do not present as final ELSIM brand identity until official assets and content are approved.

---

Built with care for ELSIM Engineering – Ghana.
