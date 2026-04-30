# Launch blockers

Pre-launch readiness register. Single source of truth for items that
must be resolved before public launch. Items are grouped by owner;
items with multiple owners list both, with the primary owner listed
first.

Distributed flags in the codebase — component source comments,
[STOCK_IMAGERY_PROVISIONAL.md](STOCK_IMAGERY_PROVISIONAL.md), the
[brief's Section 38 open-decisions log](DESIGN_BRIEF.md) — remain in
place as in-context reminders. They point back here for the aggregate
view. When an item resolves, update both the entry below and the
distributed flag.

Compliance flags remain attached to individual pages
(`app/(marketing)/homepage.meta.ts`, `lib/route-meta.ts`, MDX
frontmatter) as tracking metadata for the items below, but no UI
element renders from them — the site-wide pre-launch banner mechanism
was removed on 2026-04-30 per CMO direction. The flag arrays still
serve the audit purpose; the banner that previously surfaced them
visually no longer exists.

---

## Counsel

### LB-01 · William's prior-role phrasing — re-clearance

- **Owner(s):** External counsel
- **Date raised:** 2026-04-27 (Phase 2 import)
- **Status:** open
- **Description.** v3.5 launch copy updated William's prior-role
  framing site-wide from "a large Gold IRA firm" to "the Gold IRA
  industry." External counsel re-clearance pending on the new wording
  for Genesis non-compete safety. Tracked in MDX frontmatter under
  the `pending-counsel-reclearance-prior-role-phrasing` flag.
- **References.**
  [content/who-we-are/williams-story.mdx](content/who-we-are/williams-story.mdx),
  [content/who-we-are/index.mdx](content/who-we-are/index.mdx),
  [content/briefing.mdx](content/briefing.mdx), homepage Block 3
  pull-quote and Block 2 Card 1 in
  [app/(marketing)/page.tsx](app/(marketing)/page.tsx). Trigger flag
  registered in [lib/route-meta.ts](lib/route-meta.ts).

### LB-02 · William's Genesis non-compete exposure

- **Owner(s):** External counsel
- **Date raised:** 2026-04-27 (Phase 2 import)
- **Status:** open
- **Description.** Any reference to William's specific prior role at
  Genesis Gold Group requires external counsel clearance. Generic
  pastoral framing is fine; specifics are gated. Frontmatter flag:
  `william-non-compete-genesis-exposure`. Coupled with LB-01.
- **References.** Same as LB-01. CLAUDE.md "Compliance gates"
  section.

### LB-03 · TrustBlock copy review

- **Owner(s):** External counsel, Andrew (CFO)
- **Date raised:** 2026-04-28
- **Status:** open
- **Description.** During the structural restructure of the homepage
  Trust block from one paragraph to three architectural lines, the
  three line strings ("IRS-approved custodian for Gold IRA holdings",
  "IRS-approved depository for storage", "State dealer licensing
  where required") were authored as placeholder copy. They are NOT
  from v3.5 launch copy. Counsel review required before launch;
  custodian and depository naming is contract-dependent (see LB-09)
  and the state-licensing line depends on the final state list (see
  LB-04).
- **References.**
  [components/content/TrustBlock.tsx](components/content/TrustBlock.tsx)
  (PENDING COUNSEL REVIEW comment in source).

### LB-04 · State dealer licensing list

- **Owner(s):** Andrew (CFO), External counsel
- **Date raised:** 2026-04-15 (Phase 1 brief, Section 38)
- **Status:** open
- **Description.** State list confirms which states Grace is licensed
  to operate as a precious metals dealer in. Used by the TrustBlock
  third line, the SiteFooter Compliance column ("State Licenses"
  link), and `/legal/licenses`. Marketing copy targeting specific
  states must verify Grace is licensed in those states.
- **References.**
  [components/content/TrustBlock.tsx](components/content/TrustBlock.tsx)
  third line, [components/nav/SiteFooter.tsx](components/nav/SiteFooter.tsx)
  Compliance column, [content/legal/licenses.mdx](content/legal/licenses.mdx).
  Trigger flag: `state-licensing-list-pending-counsel-delivery`.

---

## Andrew (CFO)

### LB-05 · Footer address, phone, hours

- **Owner(s):** Andrew (CFO)
- **Date raised:** 2026-04-15 (Phase 1 brief, Section 38)
- **Status:** open
- **Description.** SiteFooter renders "Office hours and phone —
  pending confirmation" and "[address — pending confirmation]"
  placeholders. Andrew's confirmation needed before launch.
- **References.**
  [components/nav/SiteFooter.tsx](components/nav/SiteFooter.tsx)
  Talk-to-us column and footer base.

### LB-06 · Custodian and depository partner naming

- **Owner(s):** Andrew (CFO), External counsel
- **Date raised:** 2026-04-27 (Phase 2 import)
- **Status:** open (contract-dependent)
- **Description.** Specific custodian and depository partner names
  appear only on `/who-we-are/compliance` and only after contracts
  are signed. The TrustBlock and the homepage refer at category level
  ("IRS-approved custodian", "IRS-approved depository"). When
  contracts close, partner names land on `/who-we-are/compliance` and
  the TrustBlock copy may be updated to name them — at counsel's
  discretion.
- **References.** Brief Architecture Decision 1.
  [content/who-we-are/compliance.mdx](content/who-we-are/compliance.mdx).
  Trigger flag: `partner-naming-deferred-pending-contract-close`.

### LB-07 · Hosting target (production)

- **Owner(s):** Andrew (CFO), CMO
- **Date raised:** 2026-04-15 (Phase 1 brief, Section 38)
- **Status:** open (production hosting still pending)
- **Description.** Vercel / Cloudflare Pages / Netlify decision for
  production. Build is target-agnostic per brief Section 37.7 — no
  hosting-specific features used (other than `@vercel/og`, which has
  alternatives). Decision blocks DNS configuration and production
  environment variable setup.
- **Preview hosting (interim, 2026-04-30):** GitHub Pages enabled at
  `https://drobertcumming-cmyk.github.io/gpm-website/` via
  `.github/workflows/deploy.yml`. Auto-deploys on push to
  `phase-2-content-import`. Build mode: static export with
  `basePath: /gpm-website`, image optimisation off. Forms 404 on submit
  by design (API routes incompatible with static export — the build
  workflow removes `app/api` before building). Preview is partner-
  shareable for visual review; real form delivery requires production
  hosting decision (this LB) plus LB-13 Klaviyo dashboard config.
- **References.** Brief Section 38.5 build decisions table;
  `.github/workflows/deploy.yml`; `next.config.js` GitHub-Pages branch.

---

## Ops

### LB-08 · The Secret Gold Briefing PDF asset

- **Owner(s):** Ops team
- **Date raised:** 2026-04-15 (Phase 1 brief, Section 38)
- **Renamed:** 2026-04-29 from "Just Weight Briefing" per the production brief
  (CMO Option A authorisation).
- **Status:** open
- **Description.** The Secret Gold Briefing PDF is produced separately by
  ops and hosted at a static URL. Form submissions trigger Klaviyo flow
  delivery; `BRIEFING_PDF_URL` env var resolves to the PDF location. PDF
  must exist and be accessible at the configured URL before either of the
  two homepage forms (hero + briefing section) or `/briefing` can deliver.
- **Constraint.** PDF must document four operational promises (matching the
  homepage's four foundational commitments), not five. v3.6 §10 list item
  08 in the WHAT'S INSIDE list cross-references "the four operational
  promises this company is built on" — keep these in sync.
- **Local-dev workaround.** Per the production brief, a placeholder PDF
  named `the-secret-gold-briefing.pdf` may be checked in to `public/` for
  local form-flow testing. Real PDF replaces this before launch.
- **References.** [content/briefing.mdx](content/briefing.mdx),
  [.env.local.example](.env.local.example) `BRIEFING_PDF_URL`,
  [lib/klaviyo.ts](lib/klaviyo.ts), [homepage_copy_v3_6.md](homepage_copy_v3_6.md) §10.

---

## William

### LB-09 · William's commissioned portrait

- **Owner(s):** William, CMO (commissioning)
- **Date raised:** 2026-04-15 (Phase 1 brief, Section 38)
- **Status:** open (provisional placeholder shipped — updated 2026-04-30 to a new
  Manus-bundle provisional)
- **Description.** William's pulled-quote section §7 renders a provisional
  circular portrait. The 2026-04-30 Manus image bundle delivered
  `william-portrait.png` (pre-cropped circular) and the source
  `william-portrait-source-original.jpg`; CMO confirmed on 2026-04-30 that
  the new file is also provisional, not commissioned. William's actual
  commissioned portrait — documentary-editorial register, real environment,
  no smile-for-camera — must replace the provisional before launch. Phase
  2D wires the new provisional in; LB-09 stays open.
- **References.**
  [components/content/PullQuote.tsx](components/content/PullQuote.tsx) (Phase 2D refactor),
  [public/images/homepage/william-portrait.png](public/images/homepage/william-portrait.png) (working provisional from Manus bundle),
  [public/images/homepage/william-portrait-source-original.jpg](public/images/homepage/william-portrait-source-original.jpg) (source archive),
  [STOCK_IMAGERY_PROVISIONAL.md](STOCK_IMAGERY_PROVISIONAL.md).

### LB-10 · William testimonial copy (four slots, stricter launch rule)

- **Owner(s):** William, CMO
- **Date raised:** 2026-04-27 (Phase 2 import / fragments Block 4)
- **Updated:** 2026-04-30 — scope expanded from two placeholders to four
  named testimonials per v3.6 §8. Stricter launch rule applies.
- **Status:** open
- **Description.** The §8 testimonials grid on the homepage renders
  a 2×2 grid of four named testimonials (Robert Haines / Linda Prescott /
  Pastor David Chen / James & Carol Whitfield) per `homepage_copy_v3_6.md`
  §8. Per the v3.6 launch note, William has not yet given consent on
  these names. The four are placeholders for development and preview.
- **Stricter launch rule (v3.6 §8 launch note).** Implementation may ship
  the four named placeholders to dev/preview. Public launch requires
  William's redline and consent on record for ALL four. If William
  confirms fewer than four, render only the confirmed count, or pull the
  whole §8 testimonials section off the homepage entirely. Do not ship
  four named testimonials publicly without all four consents on file.
- **References.**
  [components/content/TestimonialsGrid.tsx](components/content/TestimonialsGrid.tsx) (Phase 2E build, replaces WilliamTestimonyBand),
  [homepage_copy_v3_6.md](homepage_copy_v3_6.md) §8 — testimonial copy + launch note.

### LB-11 · William's video hosting

- **Owner(s):** William, CMO
- **Date raised:** 2026-04-15 (Phase 1 brief, Section 38)
- **Status:** open
- **Description.** YouTube embed / Vimeo / self-hosted decision for
  William's full-length video testimony. The /williams-story page is
  scaffolded with a poster placeholder pending the decision.
- **References.** Brief Section 25.2 (three versions specified).
  [content/who-we-are/williams-story.mdx](content/who-we-are/williams-story.mdx).

---

## Build team / CMO

### LB-12 · Logomark production artwork

- **Owner(s):** CMO, designer
- **Date raised:** 2026-04-15 (Phase 1 brief, Section 38)
- **Status:** open (direction-only SVG shipped)
- **Description.** The current Logomark SVG in
  [components/nav/Logomark.tsx](components/nav/Logomark.tsx) is a
  direction-only approximation per brief Section 6 geometry.
  Production-grade artwork is a designer task — final lockup, kerning
  pass, hinted SVG paths, registered trademark filing.
- **References.**
  [components/nav/Logomark.tsx](components/nav/Logomark.tsx).
  Brief Section 6 (geometry) and Section 38.1.

---

## Build / Ops (production-brief homepage rebuild)

### LB-13 · Homepage form delivery flow (Klaviyo)

- **Owner(s):** Ops, CMO
- **Date raised:** 2026-04-30 (Phase 2A foundation; production-brief homepage)
- **Status:** open (Session 3 work — Phase 2G in the plan)
- **Description.** Both homepage forms (hero panel + briefing section) submit
  to a shared endpoint and trigger Klaviyo profile creation + briefing-flow
  delivery. CMO confirmed Klaviyo on 2026-04-29; the existing
  [lib/klaviyo.ts](lib/klaviyo.ts) is a Phase 1 stub. Build work pending:
    - `app/api/briefing/route.ts` POST handler
    - Klaviyo profile create + list-subscribe + flow-trigger calls
    - Form-submission server-side validation
    - Email template (transactional via Klaviyo flow) with PDF attachment
    - Confirmation block UI replacing the form on success
    - Error block UI on failure
- **Form payload.** v3.6 specifies:
  `{ name, email, phone, source: 'hero' | 'briefing_section', submitted_at }`.
- **References.**
  [homepage_copy_v3_6.md](homepage_copy_v3_6.md) "Form Submission Behaviour" section,
  [lib/klaviyo.ts](lib/klaviyo.ts), [.env.local.example](.env.local.example)
  `KLAVIYO_PRIVATE_KEY` and `BRIEFING_PDF_URL`.

### LB-14 · Trust strip custodian/depository signal flag

- **Owner(s):** Ops, CMO (flag flip), Andrew (CFO) (partner contracts)
- **Date raised:** 2026-04-30 (Phase 2A foundation)
- **Resolved:** 2026-04-30. CMO confirmed a custodian partnership and
  authorised flipping the source default to render four signals.
- **Status:** resolved
- **Description.** The §3 Trust Strip renders four signals by default
  (the fourth being "IRS-APPROVED CUSTODIAN & DEPOSITORY"). The
  `TRUST_STRIP_CUSTODIAN_PARTNERSHIPS_CONFIRMED` env var remains as a
  kill switch — set to the literal string `"false"` to hide the fourth
  signal. The signal copy is category-level (no partner names), so it
  reads as a category-compliant claim rather than a partner-naming
  claim. LB-06 (specific custodian and depository partner names on
  `/who-we-are/compliance`) remains separate and contract-dependent.
- **References.**
  [.env.local.example](.env.local.example),
  [components/content/TrustStrip.tsx](components/content/TrustStrip.tsx),
  LB-06 (partner naming).

## Backlog (post-launch deferrals — not blockers)

These items are tracked elsewhere and listed here only so they don't
get added to this register by mistake:

- Today's Price live spot display ([brief Section 34.1](DESIGN_BRIEF.md))
- Round-Trip Cost calculator ([brief Section 34.2](DESIGN_BRIEF.md))
- Resources library promotion to primary nav ([brief Section 38.6](DESIGN_BRIEF.md))
- Reviews block surfacing ([brief Section 38.6](DESIGN_BRIEF.md))
- Blog / magazine surface ([brief Section 38.6](DESIGN_BRIEF.md))
- MTG ambassador surfacing — contingent on signing
  ([brief Section 35](DESIGN_BRIEF.md))
- Ad-pixel integration ([brief Section 38.6](DESIGN_BRIEF.md))
- Booking-system selection for `/advisor` (Calendly / Cal.com /
  custom) — open per brief Section 23.2 but the page is functional
  with a placeholder; not strictly blocking.

---

## Resolution workflow

When an item resolves:

1. Update the item's `Status` to `resolved` here, with the resolution
   date.
2. Update the corresponding distributed flag — remove the
   `PENDING …` comment in component source, remove the entry from
   `STOCK_IMAGERY_PROVISIONAL.md`, or update the brief's Section 38
   row.
3. If the item drove a `complianceFlags` entry on any page's
   frontmatter or in [lib/route-meta.ts](lib/route-meta.ts), remove
   that flag too. The pre-launch banner stops firing on a route once
   no trigger flags remain on it.
4. Commit the resolution and the flag-removal together.

---

*Created 2026-04-28. Last updated 2026-04-28.*
