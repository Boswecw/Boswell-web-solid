# Render Deployment

## Render Type
- Web Service

## Commands
- Build: `pnpm install --frozen-lockfile && pnpm run build`
- Start: `pnpm run start`

## Health Check
- Path: `/health`

## Required Environment Variables
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `INTAKE_EMAIL`

## Notes
- Intake submissions append to `public/forge/intake/intake-submissions.jsonl`.
- This storage is non-durable on Render; email is the primary notification.
