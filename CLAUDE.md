# CLAUDE.md

This file gives Claude Code the operating context for the Grace Precious Metals website project. Read this first on every session, before touching any code.

---

## What this project is

Grace Precious Metals is a faith-based Gold IRA company built on radical fee transparency. The website is the load-bearing expression of the brand's strategic differentiator — Grace publishes its 11.1% all-in spread on gold before any phone call, refuses numismatic upsells permanently, buys back at spot price with no markup, and pays advisors a flat salary with no commissions. Every architectural and visual decision in the build resolves in favor of those four operational commitments.

The reader is a 50–75-year-old conservative Christian retiree who has been marketed to by the Gold IRA industry for decades. They recognize infomercial voice on arrival and reject it. Every implementation decision honors that calibration.

This repository builds the launch website using Next.js 14+ (App Router), MDX for content, Tailwind plus a custom token layer for styling, Klaviyo for email capture, and GA4 for analytics. No CMS at launch.

---

## Source of truth hierarchy

When files conflict, resolve in this order:

1. **`homepage_copy_v3_6.md`** — authoritative copy source for the **homepage only** (every block in §1–§13). Supersedes `homepage_copy_fragments_v3_5.md` for homepage content, which retains in-repo corrections (a) William quote phrasing and (d) four operational promises.
2. **`Grace_Precious_Metals_Homepage_Production_Brief.md`** (in `/Users/duncancumming/Downloads/`) — authoritative layout, visual system, and component spec for the homepage. Per CMO Option A authorisation on 2026-04-29, this brief overrides the in-repo `DESIGN_BRIEF.md` for homepage section conflicts. The override is scoped to the homepage; non-homepage pages still defer to `DESIGN_BRIEF.md`.
3. **`DESIGN_BRIEF.md`** — authoritative specification for the visual system, page-level direction (other than homepage), and build configuration. Version 1.1, 38 sections in five parts. Consult by section number.
4. **`/content/**/*.mdx`** — launch copy from v3.5. Don't rewrite without explicit instruction; the copy is brand-cleared. Homepage TSX (`app/(marketing)/page.tsx`) reads from `homepage_copy_v3_6.md`, not from `/content/`.
5. **`tokens.ts`** — design tokens. Source of truth for color, typography, spacing, sizing, radius, motion.
6. **`tailwind.config.ts`** — imports `tokens.ts`. Generates utility classes from tokens.
7. **`app/globals.css`** — CSS custom property layer; mirrors `tokens.ts` for component code that doesn't use Tailwind.

If a file appears to conflict with the brief, the brief wins. Do not silently reconcile. Surface the conflict.

If the brief has gaps, ask the CMO. Do not invent brand decisions to fill them.

---

## Non-negotiables

These constraints cannot be violated under any circumstances. They are operational expressions of the brand's strategic position; breaking them undermines the foundation the brand is built on.

- **The homepage carries the Secret Gold Briefing capture** (hero form panel + briefing-section form), per the production brief and CMO Option A authorisation on 2026-04-29. Email-capture surfaces beyond these two on the homepage, or any new form on the rest of the site, require explicit CMO sign-off. No exit-intent modals.
- **No celebrity endorsements at launch.** No "as seen on" badges. No celebrity photos. Marjorie Taylor Greene as ambassador is verbal-interest only; she does not appear on the launch site. The `AmbassadorBand` component is reserved but not wired up.
- **No aspirational stock-couple photography.** Photography is documentary-editorial register. Never beach scenes, golden-hour couples, hands-holding-gold, or generic financial-services stock.
- **No manufactured urgency.** No countdown timers, no banner alerts, no "limited time" framing, no "act now" CTAs.
- **No fabricated fear.** Do not invent confiscation scenarios, "imminent collapse" predictions, or manufactured-urgency claims. The line is truth-vs-fabrication, not fear-vs-no-fear; legitimate truthful concerns about dollar devaluation are fine, fabricated panic is not.
- **No competitor names in published copy.** Comparative claims appear at category level only ("typical industry round-trip cost," "documented predatory cases"). Never name Augusta, Goldco, AHG, Birch, Lear, Genesis, or any other competitor in published surfaces.
- **No navy-and-gold corporate-finance palette.** Cream + warm gold + walnut only. Do not introduce blue tones anywhere in the site, even as accents, even in error states, even in data visualization.
- **No motion that performs.** No parallax, no scroll-triggered reveals, no hover-lift cards, no animated counters, no carousels. Only the three transitions specified in `DESIGN_BRIEF.md` Section 15.
- **No browser storage APIs without sign-off.** localStorage, sessionStorage, IndexedDB — use only when specifically required by a feature spec and after compliance review. Cookies are jurisdiction-dependent and require counsel sign-off (see brief Section 16.9).
- **No new components without sign-off.** The component library is specified in Section 14 of the brief. New components require explicit instruction from the CMO. Do not extend the library on implementer judgement.
- **No dark mode at launch.** The brand is built around the cream canvas; dark-mode tokens are deliberately not in the system. Do not add them.
- **Body text holds at 16px on mobile and scales to 17px on desktop via fluid clamp().** Use `.text-body-fluid` for production-brief homepage components (clamp 16-17px). Use `.text-body` for legacy and non-homepage components (fixed 16px). Never reduce below 16px on any viewport. The 16px floor is a non-negotiable accessibility constraint.

---

## Brand voice — Plain Counsel

Any copy you write — microcopy, error states, helper text, OG image titles, alt text — must hold this voice.

Plain Counsel is the voice of a trusted pastor or family accountant who knows the numbers and does not hide behind them. Calm, pastoral, confident, plain-spoken, faith-grounded without being sermonic, precise, short sentences. The voice treats the reader as an adult capable of handling the truth. It does not flatter, inflate, warn, or hustle.

Three failure modes to refuse: drifting up into sermon (faith framing as decoration); drifting sideways into reassurance (qualifying, softening, comforting); drifting down into sales (urgency, manufactured contrast, infomercial register).

If a copy decision feels ambiguous, ask. Do not invent.

**Voice exceptions logged on the homepage.** The Secret Gold Briefing eyebrow ("THE SECRET GOLD BRIEFING") and subtitle ("What the Other IRA Companies Hide From You.") use a curiosity-hook framing that sits adjacent to infomercial register. CMO has cleared this register specifically for the briefing artefact and the corresponding hero form panel and briefing section on the homepage. The Golden Rule test does not refuse this framing; it is the named exception. Do not flag this copy in future audits. The exception is scoped to the briefing surface; Plain Counsel still governs everywhere else.

Three governing tests apply to any copy you write:

- **The Just Weight test:** would the design still be honest if a customer experienced what the page promised?
- **The Golden Rule test:** could this copy appear in a Gold IRA infomercial? If yes, refuse it.
- **The Standing Test:** would a credible economist roll their eyes? Would a 65-year-old church trustee raise an eyebrow? If yes, revise.

---

## Compliance gates

Surface (do not silently address) whenever a build task touches one of the following:

- **Pricing claims** require CFO sign-off and a date stamp. The 11.1% figure on the homepage is currently approved; any other pricing assertion requires a counsel/CFO check before publication.
- **Comparative claims** like "about a third more" or "lower than industry typical" require counsel review and a substantiation file reference. The substantiation lives in `Memo_to_Andrew_Substantiation_File_Refresh.docx` and is updated on cadence.
- **William's Genesis non-compete exposure** — any reference to William's specific prior role at Genesis Gold Group requires external counsel clearance. Generic pastoral framing is fine; specifics are gated.
- **FTC ambassador disclosures** — required if MTG or any creator content surfaces. Material-connection disclosure is non-negotiable per the brand's compliance policy. The launch site does not surface ambassador content; this gate is forward-looking.
- **State licensing** — copy targeting specific states must verify Grace is licensed in those states. The state list is owned by Andrew (CFO).
- **Custodian and depository naming** — partner names appear only on `/who-we-are/compliance` and only after contracts are signed. Don't insert partner names anywhere else.
- **Standard disclaimer** — final language is counsel-cleared. Don't paraphrase, modify, or rewrite the standard disclaimer. Reproduce it verbatim from the v3.5 copy.

If a build task touches one of these, flag it before proceeding. The CMO has final authority on compliance calls; your job is to surface the question, not to resolve it.

---

## Working conventions

### Project structure

```
/grace-precious-metals
├── /app                    # Next.js App Router
│   ├── /(marketing)        # public-facing pages
│   ├── /api                # API routes (Klaviyo, contact)
│   ├── layout.tsx          # root layout, font loading, GA4
│   ├── globals.css         # CSS custom property layer
│   ├── not-found.tsx       # 404 page
│   └── error.tsx           # 500 page
├── /components
│   ├── /nav
│   ├── /hero
│   ├── /content
│   ├── /forms
│   ├── /cta
│   └── /compliance
├── /content                # MDX content (mirrors URL hierarchy)
│   ├── /pricing
│   ├── /rollover            # parent + inherited-ira + transfer
│   ├── /who-we-are          # parent + williams-story + compliance
│   ├── /resources           # hub + 3 pillars + 6 supporting
│   ├── /legal               # 4 legal pages
│   ├── briefing.mdx
│   ├── faq.mdx
│   └── contact.mdx
├── /lib
│   ├── klaviyo.ts          # Klaviyo client
│   ├── og-template.tsx     # shared OG image template
│   └── mdx-utils.ts        # MDX rendering utilities
├── /public
│   ├── /images
│   ├── /icons
│   └── favicon.svg, etc.
├── tokens.ts               # design tokens (source of truth)
├── tailwind.config.ts      # imports tokens.ts
├── next.config.js          # MDX configuration
├── DESIGN_BRIEF.md         # authoritative spec
├── CLAUDE.md               # this file
└── package.json
```

The `/content` directory mirrors the URL hierarchy. A page at `/pricing` reads from `/content/pricing/index.mdx`; a page at `/who-we-are/williams-story` reads from `/content/who-we-are/williams-story.mdx`. This makes the content addressable from the URL without a CMS.

### MDX frontmatter schema

Every MDX file requires:

```yaml
---
title: "Page or article title"
slug: "url-slug"
description: "Meta description, 155 char max"
template: "pillar-hub" | "supporting-article" | "narrative-testimony" | "compliance-disclosure" | "homepage" | "briefing-landing" | "faq" | "contact"
eyebrow: "Section eyebrow text"
author: "Grace Precious Metals" | "William Armour" | etc.
date: "2026-04-15"
counselReviewDate: "2026-04-12"
complianceFlags:
  - "pricing-cfo-cleared"
  - "comparative-claim-counsel-cleared"
ogImage: "/og/[slug].png"
---
```

The `complianceFlags` array surfaces in the build log; if any flag is missing for a page that requires it, the build warns.

### Build commands

```bash
npm run dev          # local development at http://localhost:3000
npm run build        # production build
npm run start        # serve production build locally
npm run lint         # ESLint with project config
npm run typecheck    # TypeScript verification
npm run test:a11y    # accessibility tests (when configured)
```

Lighthouse score must be ≥ 95 on every page (performance, accessibility, best practices, SEO) before any merge to main. Run Lighthouse against the production build, not the dev server.

### First-session bootstrap

If this is the first session and the repo is empty:

1. Initialize: `npx create-next-app@latest . --typescript --tailwind --app --src-dir=false --import-alias '@/*'`
2. Install MDX: `npm install @next/mdx @mdx-js/loader @mdx-js/react next-mdx-remote`
3. Install integrations: `npm install @vercel/og klaviyo-api @next/third-parties`
4. Configure MDX in `next.config.js` per Next.js docs
5. Replace the default `tailwind.config.ts` with the version in this repo
6. Replace the default `app/globals.css` with the version in this repo
7. Copy `tokens.ts` to repo root
8. Copy `.env.local.example` to `.env.local` and fill in (or leave blank for now)
9. Run `npm run dev` to verify the foundation builds before writing any pages

### Accessibility

WCAG 2.1 AA minimum, AAA where it doesn't compromise design. Touch targets 44×44px minimum at mobile. All interactive elements keyboard-reachable. `prefers-reduced-motion` honored absolutely (rule in `globals.css`).

---

## When you're uncertain

1. Consult `DESIGN_BRIEF.md` — most decisions are specified.
2. Consult the relevant canonical document if referenced in the brief (Tone of Voice, Brand DNA, Website Content Architecture).
3. If still uncertain, ask the CMO before proceeding. Do not invent brand decisions.

The brand has spent significant effort on strategic and visual foundation. Implementer judgement should resolve ambiguity within the foundation, not around it.

---

## Communication conventions

The CMO (Duncan Cumming) reviews work in chat before it ships. For meaningful changes — a new component, a new copy decision, a new visual treatment — show the proposed change in chat before applying it. Iterate from review, not from rebuild.

The CMO operates in sparring-partner mode. Challenge assumptions when a build instruction conflicts with the brief or with the brand foundation. Don't rubber-stamp.

If a request would violate a non-negotiable, say so. Don't quietly comply with something that breaks the brand.

---

## Known open decisions

The following are unresolved at the time this file was written. Surface them when relevant; don't invent answers.

- Hosting target (Vercel / Cloudflare Pages / Netlify)
- William's portrait — commissioned, not yet delivered. Use a neutral placeholder until then.
- Production logo redrawing — current SVG in `tokens.ts` is direction-only; a designer is producing final artwork.
- William's video hosting (YouTube embed / Vimeo / self-hosted) — pending CMO call.
- Advisor booking system (Calendly / Cal.com / custom) — pending CMO call.
- The italic emphasis on "His" in the verse band — pending William's call. Implementer ships with italic; flag is config-controllable.
- State licensing list for footer — pending Andrew's confirmation.
- Custodian and depository names — pending contract signature.
- The Secret Gold Briefing PDF asset — produced by ops team and hosted at static URL. Renamed from "Just Weight Briefing" on 2026-04-29 per the production brief. PDF must document four operational promises (matching the homepage's four foundational commitments), not five.
- **"Just Weight Briefing" naming is fully retired site-wide as of 2026-04-30.** The canonical name is **"The Secret Gold Briefing"** on every live surface — homepage hero form, homepage briefing section, briefing cover artwork, the standalone `/briefing` page (`content/briefing.mdx`), the `/advisor` page (`content/advisor.mdx`), the briefing PDF asset, and any other downstream cross-reference. Historical session notes, changelog entries, and `LAUNCH_BLOCKERS.md` LB-08 retain "Just Weight Briefing" intentionally as deprecation context — those are not live copy. Do not reintroduce "Just Weight Briefing" anywhere on a live surface. The "Just Weight test" — a separate brand-vocabulary item, the visible/accurate/constant test from Proverbs 11:1 — is unrelated to the briefing artefact and stays as written.
- **Four foundational commitments is the site-wide standard as of 2026-04-30.** Every live surface that documents the commitment framework lists exactly four: 01 Published spread, 11.1% all-in / 02 Buyback at spot, never below / 03 Standard IRS-eligible bullion only / 04 Salaried advisors, no commission. Commitment 5 ("No phone-gate on pricing") is removed entirely from the framework. Surfaces affected: homepage cards section, `/pricing` page, `/who-we-are` page, `/briefing` page summary, briefing PDF authoring (LB-08). Do not reintroduce a fifth commitment or "No phone-gate on pricing" framing anywhere on a live surface. The commitment that pricing is on the website without a phone-gate remains an operational truth of the business — it just isn't enumerated as one of the four foundational commitments.
- Cookie consent banner — required jurisdictions identified by counsel.

See `DESIGN_BRIEF.md` Section 38 for the canonical open-decisions log.
