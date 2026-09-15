# Cloudflare Pages

## Exact settings

| Setting | Value |
|---------|--------|
| **Root directory** | *leave empty* |
| **Build command** | `npm run build:cf` |
| **Build output directory** | `out` |
| **Production branch** | `main` |
| **Node version** | `20` (env `NODE_VERSION=20`) |

`build:cf` removes `app/api` (API routes cannot ship with static export) then runs:

```bash
CF_PAGES_STATIC=1 next build
```

That writes the site to **`out/`**.

## Optional env vars

| Name | Purpose |
|------|--------|
| `CF_PAGES_STATIC` | Set automatically by `build:cf` |
| `NODE_VERSION` | `20` recommended |

## Quotation API on static hosting

The `app/api/quotation` route is omitted from static Cloudflare builds. Point the form at an external endpoint or deploy the API as a Cloudflare Worker later.
