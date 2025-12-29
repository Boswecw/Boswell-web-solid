# Forge Seal Verification

## Where the seal appears

- Footer: decorative anvil mark next to the Boswell Digital Solutions label
- Home: Quality mark block below the hero section
- About: Quality mark block after the operating approach section
- Forge Ecosystem: Quality mark block near the top of the page

## How to enable the gold certified state

- Edit `dev/config/forge.ts`
- Set `certified: true`
- Only the quality mark block should render gold; the footer stays neutral

## Accessibility notes

- Decorative footer seal is `aria-hidden`
- Quality mark block includes explanatory text for meaning and boundaries
- Tagline mark includes an accessible title
