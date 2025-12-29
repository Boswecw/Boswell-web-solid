# Render Deployment

## Render Type
- Web Service (Node)
- Reason: intake form writes JSONL server-side and sends SMTP email

## Commands
- Build: `pnpm install && pnpm run build`
- Start: `node server/index.cjs`

## Health Check
- Path: `/healthz`
- Expected: `200 {"ok": true}`

## Publish Directory
- Not applicable (web service serves `dist/`)

## Required Environment Variables
- `NODE_ENV=production`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `INTAKE_EMAIL`

Note: if SMTP vars are missing, intake still succeeds and logs a warning.

## Data Storage Notes
- Intake submissions append to `public/forge/intake/intake-submissions.jsonl`.
- This is local disk storage and is not durable across deploys or instance restarts.

## Post-Deploy Smoke Test
1. `GET /healthz` returns 200 JSON.
2. Load `/how-we-help` and `/intake` pages.
3. Submit intake with required fields.
4. Confirm `POST /api/intake` returns `{"ok": true}`.
5. Verify intake email logs send or warn (depending on SMTP vars).
6. Confirm the JSONL line is appended on the instance filesystem.
