# Forge Brand Assets

## Canonical Source
- **SVG source of truth:** `assets/anvil-seal.svg` (32×32, `currentColor`)

## Derivatives
- `assets/anvil-seal-16px.svg` — simplified for sub-24px UI
- `assets/anvil-seal-decorative.svg` — decorative use (`aria-hidden`)
- `assets/anvil-seal-with-tagline.svg` — **must convert text to paths before shipping**

## Rules
- All 32×32 variants must share identical geometry (derive from `anvil-seal.svg`).
- PNG exports are **derivatives**; SVG is the source of truth.
- No gradients, filters, or embedded fonts in canonical marks.

## Exporting
Run: `scripts/export-pngs.sh` (requires ImageMagick).
