# Boswell Digital Solutions

> Service-Disabled Veteran-Owned Small Business (SDVOSB)
> Public trust surface for product status, boundaries, and contact.

[![WCAG 2.1 AA](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-blue)](docs/DUE_DILIGENCE_REPORT.md#3-accessibility-compliance-wcag-21-aa)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Forge-built](https://img.shields.io/badge/Forge--built-standard-1a1a2e)](https://boswelldigitalsolutions.com/forge/charter)

This repository powers the Boswell Digital Solutions public business website. It provides conservative product status, clear boundaries, and a bounded shop.

**Live Site**: https://boswelldigitalsolutions.com
**Owner**: Charles Boswell, U.S. Navy Veteran
**Location**: Lexington, Kentucky

---

## Overview

- **Framework**: SolidJS + Vite
- **Routing**: @solidjs/router
- **Deployment**: Render Web Service (Node)
- **Backend**: Lightweight Node server for health and contact endpoints

**Product truth**:
- VibeForge 1.0 is not finished.
- VibeForge 1.0 will be refactored via Forge:SMITH.
- Public claims remain conservative and factual.

---

## Quick Start

### Prerequisites

- Node.js 18+ (prefer 22)
- pnpm 9+

```bash
npm install -g pnpm
```

### Install

```bash
git clone https://github.com/Boswecw/Boswell-web-solid.git
cd Boswell-web-solid
pnpm install
```

### Development

```bash
# Dev server
pnpm dev

# Build
pnpm build

# Preview
pnpm preview
```

### Production (Render)

```bash
# Build
pnpm build

# Start server (serves dist + API + /healthz)
pnpm start
```

---

## Project Structure

```
Boswell-web-solid/
├── dev/                           # Frontend source
│   ├── components/                # Shared UI components
│   ├── config/                    # Meta + shop config
│   ├── pages/                     # Route components
│   ├── styles/                    # CSS architecture
│   ├── App.tsx                    # Router configuration
│   └── index.tsx                  # Entry point
├── server/                        # Node web service
│   └── index.cjs                  # /healthz + /api/contact + static
├── data/                          # Contact submissions (local)
├── public/                        # Static assets
├── docs/                          # Specifications + reports
├── render.yaml                    # Render deployment config
└── package.json                   # Scripts and dependencies
```

---

## Routes

Required public routes:

- `/` Home
- `/products` Products overview
- `/products/vibeforge` VibeForge 1.0
- `/shop` Shop landing
- `/shop/[slug]` Shop product detail
- `/forge/charter` Forge Charter
- `/about` About
- `/contact` Contact
- `/terms` Terms
- `/privacy` Privacy
- `/support` Support

---

## Contact Endpoint

The site uses a bounded POST endpoint:

- `POST /api/contact`
- JSON body: `{ name, email, message, bot-field }`
- Server-side validation, honeypot, rate limiting
- Stores submissions to `data/contact-submissions.jsonl`

Responses are structured JSON:

```json
{ "error": { "code": "...", "message": "...", "details": {} } }
```

---

## Shop Data

Shop listings live in `dev/config/shop.ts`. Each product page includes:

- What it is
- Who it is for
- What you receive
- What you do NOT receive
- License/terms snippet
- Refund policy
- Purchase CTA (placeholder when checkout is not wired)

---

## Render Deployment

`render.yaml` configures a Render Web Service:

- Build: `pnpm install && pnpm build`
- Start: `node server/index.cjs`
- Health check: `GET /healthz` returns `{ "ok": true }`

---

## Documentation

Authoritative specs:

- `docs/specs/WEBSITE_REFACTOR_FORGE_ALIGNED.md`
- `docs/specs/PUBLIC_PRODUCT_EXPOSURE_RULES.md`

Supporting docs:

- `docs/DUE_DILIGENCE_REPORT.md`
- `docs/COMPONENTS.md`
- `docs/CSS_REFACTORING.md`

---

## License

MIT License. See `LICENSE`.
