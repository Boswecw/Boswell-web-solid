# Render Deployment

## Web Service Configuration
- Build Command: `pnpm install --frozen-lockfile && pnpm run build`
- Start Command: `pnpm run start`
- Health Check Path: `/health`

## Build Output
- Vite outputs to `dist/` in the repo root.
- The Node server serves static assets from `dist/`.

## Required Environment Variables
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `INTAKE_EMAIL`

## Notes
- Intake submissions append to `public/forge/intake/intake-submissions.jsonl` (ephemeral disk on Render).
