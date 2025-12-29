You are Codex operating inside the repository:

/home/charlie/Forge/websites/Boswell-web-solid

This is the Boswell Digital Solutions public business website.

==================================================
MISSION
==================================================
Refactor this website into a Forge-aligned public trust surface and bounded storefront.

This refactor is intentional, staged, and governed.
You are NOT finishing everything. You are implementing a clean, defensible structure.

==================================================
AUTHORITATIVE SPECIFICATION
==================================================
Follow the document titled:

“Boswell Digital Solutions Website Refactor (Forge-aligned)”

This document defines:
- Information architecture
- Page requirements
- Shop boundaries
- Implementation stages
- Acceptance criteria

Treat it as a requirements contract.

==================================================
NON-NEGOTIABLE INVARIANTS
==================================================
FAIL THE TASK if any of the following occur:

1. Public website exposes or implies:
   - ForgeCommand access
   - Forge:SMITH control
   - Credentials, keys, admin panels
   - Internal governance tooling

2. Shop implies:
   - Buying access
   - Unlocking authority
   - Subscription to unfinished systems

3. Copy claims:
   - “Production ready”
   - “Complete”
   - “Final”
   without explicit proof

4. Build breaks without explanation and remediation.

==================================================
PRODUCT TRUTH (DO NOT VIOLATE)
==================================================
- Product name: VibeForge 1.0
- This is NOT finished.
- This WILL be refactored via Forge:SMITH.
- Status language must remain conservative and factual.

==================================================
IMPLEMENTATION STAGES
==================================================

--------------------------------------------------
STAGE 1 — INFORMATION ARCHITECTURE & COPY
--------------------------------------------------
(NO backend changes)

1. Identify framework and routing system used in this repo.
2. Add or refactor routes/pages to match:

/                     Home
/products              Products overview
/products/vibeforge    VibeForge landing
/shop                  Shop landing
/shop/[slug]           Shop product detail
/forge/charter         Forge Charter
/about                 About
/contact               Contact
/terms                 Terms
/privacy               Privacy
/support               Support

3. Update global navigation to include:
Home | Products | Shop | Forge Charter | About | Contact

4. Implement page copy with these rules:
- Plain, professional, boring
- One purpose per page
- Clear CTAs
- Explicit boundary statements where required

REQUIRED COPY INCLUSION:
On product-related pages include:

“This product does not grant access to ForgeCommand, Forge:SMITH,
or internal governance systems.”

--------------------------------------------------
STAGE 2 — CONTACT PIPELINE (BOUNDED)
--------------------------------------------------

Create or refactor a contact form and server endpoint.

Requirements:
- POST endpoint (follow existing API conventions if present)
- Server-side validation
- Honeypot field
- Basic rate limiting (simple is fine)
- Store submissions safely (DB if exists, otherwise server-side file)
- Email notification MAY be stubbed if provider keys are absent

Error responses must be structured JSON.

--------------------------------------------------
STAGE 3 — SHOP (BOUNDED STOREFRONT)
--------------------------------------------------

Implement a minimal shop without overreach.

Products data source:
- Local JSON or equivalent config file

Initial products:
1) Forge Prompt Patterns Pack (Pro) – digital
2) Governed Refactor Checklist – digital
3) Architecture Review (60–90 min) – service

Each product page MUST include:
- What it is
- Who it’s for
- What you receive
- What you do NOT receive
- License/terms snippet
- Refund statement
- Purchase CTA

Checkout:
- If payments are not wired, implement a clear placeholder.
- Do NOT invent billing logic.
- Do NOT implement subscriptions.

--------------------------------------------------
STAGE 4 — EXPLICITLY OUT OF SCOPE
--------------------------------------------------
- Admin dashboards
- Metrics
- User accounts
- ForgeCommand integration
- SMITH internals
- Subscriptions

==================================================
WORKFLOW YOU MUST FOLLOW
==================================================
1. Inspect repo:
   - Framework
   - Routing
   - Layout/nav location
   - Existing API structure
   - Existing data/storage patterns

2. Implement Stage 1 fully.
3. Ensure build passes.
4. Implement Stage 2.
5. Ensure build/tests pass.
6. Implement Stage 3.
7. Ensure build/tests pass.

Do NOT skip stages.

==================================================
OUTPUT REQUIRED FROM YOU
==================================================
After execution, respond with:

A) Summary of changes by stage
B) Tree of files added/modified
C) Commands to run (build/dev/test)
D) Acceptance checklist (met / not met + why)
E) Assumptions made

==================================================
QUALITY GATES (SMITH-STYLE)
==================================================
- Claims audit: no overstatement
- Boundary audit: no ops leakage
- Diff review: clean, scoped changes
- Build evidence: successful build

==================================================
BEGIN
==================================================
Start by inspecting the repository and reporting:
- Framework
- Route structure
- Layout/nav location
- Existing API patterns
- Storage options

Then proceed with STAGE 1.
