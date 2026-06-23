# Grace Precious Metals — Homepage Design Reference

**Status:** Authoritative snapshot of the live homepage as deployed to `https://drobertcumming-cmyk.github.io/gpm-website/`
**Last updated:** 2026-05-01
**Stack:** Next.js 14 (App Router), Tailwind 3.4, MDX, Klaviyo, GA4
**Audience for this doc:** any AI assistant (claude.ai or otherwise) that needs the current state of the brand to design or write on-brand new work

---

## 1. Brand identity and audience

Grace Precious Metals is a faith-based Gold IRA company built on radical fee transparency. The four operational commitments that drive every design choice:

1. Published 11.1% all-in spread on gold — visible before any phone call, identical for every customer
2. Buyback at spot price with no markup
3. Standard IRS-eligible bullion only — no numismatic, "rare," "exclusive," "premium," or proof coins
4. Salaried advisors, no commissions

**The reader** is a 50–75-year-old conservative Christian retiree who has been marketed to by the Gold IRA industry for decades. They recognize infomercial voice on arrival and reject it. Pastoral framing is permitted; sermonizing is not. Faith-grounded but never preachy.

**Public-facing leadership:** William Armour (Co-Founder & CEO), Andrew Armour (Co-Founder & CFO), Duncan Cumming (Co-Founder & CMO). No other names appear on the site.

---

## 2. Plain Counsel — the brand voice

Plain Counsel is the voice of a trusted pastor or family accountant who knows the numbers and does not hide behind them.

- Calm, plain-spoken, confident, pastoral without being sermonic, precise, short sentences
- Treats the reader as an adult capable of handling the truth
- Does not flatter, inflate, warn, or hustle

**Three failure modes to refuse:**
- Drifting up into sermon (faith framing as decoration)
- Drifting sideways into reassurance (qualifying, softening, comforting)
- Drifting down into sales (urgency, manufactured contrast, infomercial register)

**Three governing tests for any copy:**
- **Just Weight test:** would the design still be honest if a customer experienced what the page promised?
- **Golden Rule test:** could this copy appear in a Gold IRA infomercial? If yes, refuse it.
- **Standing test:** would a credible economist roll their eyes? Would a 65-year-old church trustee raise an eyebrow?

**Voice exception (logged):** the Secret Gold Briefing eyebrow ("THE SECRET GOLD BRIEFING") and subtitle ("What the Other IRA Companies Hide From You.") use a curiosity-hook framing adjacent to infomercial register. Cleared by the CMO specifically for the briefing artefact and the corresponding hero form panel and homepage briefing section. Plain Counsel still governs everywhere else.

**Editorial conventions (every piece of copy):**
- American English (recognize, labor, favor — never recognise, labour, favour)
- Curly typographic quotation marks (' ' " ") — never straight ASCII
- Real em-dashes (—). Real en-dashes (–) for ranges. Never two hyphens.
- Real arrow glyphs (→). Never `->` or `>>`.
- Real ellipses (…). Never three periods.
- Sentence case for body and most headlines. Eyebrows render in ALL CAPS via the typed copy itself, never via CSS `text-transform`.
- Non-breaking spaces inside protected phrases (per section)

---

## 3. Color palette

The system is **cream + warm gold + walnut**, end of story. **No blue tones anywhere on the site, even as accents, even in error states, even in data visualization.** No navy-and-gold corporate-finance palette. No dark mode.

### Primary roles

| Token | Hex | Use |
|---|---|---|
| `canvas` | `#F2EDE0` | Page background (linen-light) |
| `canvasDeep` | `#F8F5EB` | Hover states, table row stripes |
| `inkBody` | `#1F1B16` | Body copy, primary text |
| `inkDisplay` | `#2D2620` | Headings, display type (brief alias: walnut) |
| `goldPrimary` | `#C9A96C` | Muted gold — eyebrows, hairlines, wordmark; Proverbs eyebrow |
| `goldDeep` | `#B8962E` | Tier 1 / Tier 2 CTA fill |
| `walnut` | `#3B342A` | Tier 3 outlined CTAs, refusal blocks |

### Production-brief extensions

| Token | Hex | Use |
|---|---|---|
| `linenBase` | `#EDE5D2` | Hero cream surface — slightly deeper than canvas |
| `linenWarm` | `#FFFDF5` | Trust strip background — warmer than canvas-deep |
| `walnutDeep` | `#3D2817` | Footer background; section headlines on cream |
| `goldHover` | `#9A7D26` | Tier 1 / Tier 2 button hover |
| `goldSecondary` | `#9C7322` | Eyebrows; Tier 4 link resting; section headlines |
| `oxblood` | `#5C2A2A` | Briefing cover face artwork (single-purpose) |
| `creamWarm` | `#FAF6EC` | Form input backgrounds (single-purpose) |

### Semantic states

| Token | Hex | Use |
|---|---|---|
| `stateError` | `#A03A28` | Warm rust — form validation errors (never red) |
| `stateSuccess` | `#5C7A3E` | Warm olive — submission success (never green) |
| `stateWarning` | `#A07028` | Deep amber — caution states |

---

## 4. Typography

**Two families, both via `next/font/google`:**

- **Source Serif 4** — display + editorial. Headlines, pull-quotes, italic subtitles, body copy in pull-quotes and disclaimers.
- **Inter** — body + UI. Eyebrows, nav, buttons, form fields, footer links.

**Body copy floor: 16px on mobile, scaling to 17px on desktop via `clamp(16px, 1.4vw, 17px)`. Never reduce below 16px on any viewport — non-negotiable accessibility constraint.**

### Type scale (current homepage values)

| Element | Family | Weight | Size | Notes |
|---|---|---|---|---|
| Hero H1 | Source Serif 4 | 600 | 28px base · 36px ≥768 · **39px ≥1200 (single line, `white-space: nowrap`)** | Color `#FFFFFF` on dark backdrop, line-height 1.18, letter-spacing -0.005em. Stepped sizing in `.gpm-hero-h1` (globals.css). 39px is the largest size that holds "A Gold IRA at 11.1% spread, all-in." on one line in the 644px left column; nowrap engages at 1200px where the container is maxed. Wraps below 1200px. (Revised 2026-06-07; was `clamp(28px, 4.6vw, 48px)`.) |
| Hero Proverbs eyebrow | Inter | 600 | 14px | `goldPrimary` `#C9A96C`, letter-spacing 0.10em |
| Hero sub ("No admin fee. No setup fee.") | Inter | 500 | 18px | White, line-height 1.4 |
| Section headline (e.g. "Standard bullion. Nothing else.") | Source Serif 4 | 500–600 | 32–36px (fluid) | `walnutDeep` `#3D2817` |
| Section eyebrow ("OUR PROMISE", "WHAT WE SELL", etc.) | Inter | 500–600 | 12px | `goldSecondary` `#9C7322`, letter-spacing 0.10–0.12em |
| Section lead paragraph | Source Serif 4 | 400 | 17–18px | `inkBody` |
| Card description | Source Serif 4 | 400 | 16px | line-height 1.55 |
| Pull-quote | Source Serif 4 italic | 400 | `clamp(20px, 2vw, 24px)` | `walnutDeep`, line-height 1.45 |
| Testimonial body | Source Serif 4 italic | 400 | 15px | `inkBody` |
| Disclaimer | Source Serif 4 | 400 | 13px | `inkBody` at 0.75 alpha, line-height 1.6 |
| Footer column header | Inter | 600 | 12px | `goldPrimary` on `walnutDeep`, letter-spacing 0.12em |
| Footer link | Inter | 400 | 14px | `canvas` on `walnutDeep`, line-height 1.8 |
| Tier 4 link (reading-flow) | Inter | 500 | 14px | `goldSecondary` resting, `#7E5C10` hover |

### Hero form panel typography (locked)

| Element | Family | Weight | Size | Color |
|---|---|---|---|---|
| Form eyebrow ("GET THE SECRET GOLD BRIEFING") | Inter | 600 | 13px | `goldPrimary`, letter-spacing 0.10em, line-height 1.4 |
| Subtitle ("What the Other IRA Companies Hide From You.") | Source Serif 4 italic | 500 | 16px | `canvas` `#F2EDE0`, line-height 1.4 |
| Field labels (Name, Email, Phone) | Inter | 500 | 13px | `rgba(242,237,224,0.85)`, margin-bottom 6px |
| Field inputs and placeholders | Inter | 400 | 14px | `inkDisplay` on `creamWarm`, padding 11px 14px |
| Submit CTA ("Send me the briefing") | Inter | 500 | 14px | white on `goldDeep`, padding 14px 0 |
| Disclosure | Source Serif 4 italic | 400 | 12px | `rgba(242,237,224,0.70)`, line-height 1.55 |

Form panel max-width: 360px on desktop. Stacks below copy on mobile.

---

## 5. CTA tier system (four tiers)

| Tier | Visual | Use |
|---|---|---|
| **Tier 1** — page-primary | Gold-filled `goldDeep` `#B8962E`, white text, 6px radius, Inter 500 14px, 14px 32px padding. Hover: `goldHover`. | "See our pricing" (hero), "Talk to a Salaried Advisor" (comparison block), mobile header CTA |
| **Tier 2** — form submit | Gold-filled, white, 4px radius, Inter 500 13–14px, 12–14px 0 padding, full container width. **Hero and briefing forms render byte-identical Tier 2 CTAs.** | "Send me the briefing" on both forms |
| **Tier 3** — header outlined | Outlined `walnut`, transparent bg, 2px radius, Inter 500 14px, 10px 20px padding. Hover fills walnut + flips text to canvas. | Header desktop CTAs ("Get the Briefing", "Talk to an advisor") |
| **Tier 4** — reading-flow link | Inline `goldSecondary` `#9C7322` resting / `#7E5C10` hover, no container, trailing `→` arrow. | Card "Read more" links, "Why we refuse numismatics →", "Read William's story →" |

Known accessibility issue: Tier 1 white-on-`#B8962E` is 2.82:1 (below AA). Recommended fix is to swap the label color from white to `walnutDeep`, but this is awaiting a CMO call.

---

## 6. Layout, spacing, and section rhythm

- **Page max-width:** 1200px for content sections, 1280px for the header (room for nav + CTA cluster), 1440px for full-page bounding
- **Horizontal padding:** 32px desktop, 24px tablet, 16–24px mobile
- **Vertical section padding:** **96px top + 96px bottom** for every padded content section. Disclaimer is 64/64 (intentional fine-print density). TrustStrip and Hero are 0/0 (full-bleed bands).
- **Breakpoints:** `sm: 640px`, `md: 768px`, `lg: 1024px`. Desktop = `lg:`, tablet = `md:` to before `lg:`, mobile = before `md:`.

### Section divider rhythm — uniform

Every transition between padded content sections carries one **70%-width centered hairline rule** (`0.5px solid rgba(184, 150, 46, 0.50)`), wrapped in the same 1200px container as the sections so the rule's pixel width matches the section block.

This produces a uniform **96px cream / hairline / 96px cream** rhythm at every section boundary. **Total nine SectionDividers** on the homepage, between every adjacent pair of padded content sections.

The two intentional outliers:
- **Hero → TrustStrip:** no divider — both are full-bleed bands that touch by design
- **FindWhatFits → Disclaimer:** 96px + 64px = 160px gap (Disclaimer's tighter padding is fine-print density)

The earlier "deliberate 60% Pullquote rule" exception was rescinded 2026-04-30 in favour of uniform rhythm.

### Motion

**No motion that performs.** No parallax, no scroll-triggered reveals, no hover-lift cards, no animated counters, no carousels. Three approved transitions only:

- Color transitions on hover (200ms ease-out)
- Outline focus ring (instant)
- Form submit button state changes (150ms ease-out)

`prefers-reduced-motion` honored absolutely.

---

## 7. Image direction

- **Documentary-editorial register only.** Real environments, real moments. Never beach scenes, golden-hour couples, hands-holding-gold, or generic financial-services stock.
- **No aspirational stock-couple photography.**
- **No celebrity endorsements at launch.** No "as seen on" badges. No celebrity photos.
- The hero uses Manus-delivered stacked-coin photography on a dark studio backdrop with a left-zone gradient overlay carrying the headline copy. **Not** cream linen surface with a single coin (the brief's earlier spec is superseded).
- Bullion product images are clean, neutral-background photographs of standard IRS-eligible products (American Gold Eagle, Canadian Gold Maple Leaf, American Silver Eagle, LBMA-approved gold bar).
- Lifestyle images (Find What Fits, Comparison block, briefing cover photograph zone) feature mature, plainspoken Americans in real environments — at a kitchen table reviewing documents, at a desk with a book and pen, etc.
- William's portrait is currently a provisional placeholder. Final commissioned portrait is documentary-editorial — real environment, no smile-for-camera.

---

## 8. Homepage IA — current section sequence

```
§1  SiteHeader     — sticky, full-bleed canvas, 0.5px gold-with-alpha bottom border
§2  Hero           — three-zone: dark studio backdrop + left copy zone + right form panel
§3  TrustStrip     — full-bleed linen-warm band, 4 signals with hairline gold dividers
       ───
§4  America's First — two-column 50/50, eyebrow + headline + body
       ───
§5  Foundational Commitments — 4 cards, eyebrow + heading + lead + grid
       ───
§6  What We Sell    — eyebrow + heading + lead + 4 product images + closing paragraph
       ───
§7  William's Pull-Quote — circular 120px portrait + 24px italic quote
       ───
§8  Testimonials    — 2×2 grid of 4 named testimonials with gold left-rule per card
       ───
§9  Already Spoken to Another — 60/40 split, italic provocation + bullets + Tier 1 CTA
       ───
§10 The Secret Gold Briefing — 58/42 split, WHAT'S INSIDE list + cover artwork + form
       Cover artwork (2026-06-23): single approved **Direction 1 flat render**
       at `public/images/briefing/secret-gold-briefing-cover.png` (all cover
       text baked in). Used as a flat image in both `components/content/
       CoverArtwork.tsx` (homepage §10) and `app/(marketing)/briefing/page.tsx`
       (/briefing). The prior live-text 3D composed cover (oxblood face +
       layered wordmark/title/subtitle/photo over `briefing-cover-photo.jpg`)
       is retired; the old photo asset was removed. object-fit: contain,
       container footprints preserved (homepage 320/414 box; /briefing 300×400,
       240×320 mobile).
       ───
§11 Find What Fits — 3 cards: New / Already hold / Inheriting
       ───
§12 Disclaimer     — italic lead phrase + upright body, 13px serif at 0.75 alpha
§13 SiteFooter     — full-bleed walnut-deep, 4 columns desktop / accordion mobile
```

### Locked headline copy (current state)

- **Hero H1:** "A Gold IRA at 11.1%&nbsp;spread,&nbsp;all-in." (non-breaking spaces lock the price phrase against a mid-line break when the headline wraps below 1200px). _Second sentence "Buyback at spot." removed 2026-06-07 for a single-line desktop headline; the buyback-at-spot commitment still appears in the TrustStrip immediately below the hero and in the foundational-commitments cards._
- **Hero sub:** "No admin fee. No setup fee."
- **Hero CTA:** "See our pricing" (links to `/pricing`, which must remain gateless — no form, no phone capture required)
- **Hero form eyebrow:** "GET THE SECRET GOLD BRIEFING"
- **Hero form subtitle:** "What the Other IRA Companies Hide From You." (italic serif, title-cased intentionally)
- **William's quote:** *"I left the Gold IRA industry because I couldn't reconcile what I was selling with what I preached. This is the company I built to change that."* — phrasing locked at "the Gold IRA industry" (preserves counsel-cleared scope on William's prior-role framing)
- **Foundational commitment 5 ("No phone-gate on pricing") is removed.** The framework is exactly four commitments — do not reintroduce.
- **Briefing artifact name:** "The Secret Gold Briefing" everywhere on live surfaces. The earlier "Just Weight Briefing" name is fully retired.
- **Path 3 in Find What Fits:** "Inheriting a Gold IRA" → `/rollover/inherited-ira`. (Not "Financial advisor or CPA".)
- **Pull-quote link:** "Read William's story →" (shortened from "Read William's full story →")
- **Footer bottom row:** single line with center-dot separators — "Grace Precious Metals · [address — pending] · © 2026 Grace Precious Metals. All rights reserved."

---

## 9. Form behavior

Two forms (hero panel + briefing section). Both submit to `/api/briefing` with shared schema:

```
{ name, email, phone, source: 'hero' | 'briefing_section', submitted_at: ISO }
```

Three required fields — Name, Email, Phone (phone required, not optional). Validation runs on blur per field after first touch, and on submit. Server-side validation re-runs in the API route — server rejects any payload that fails the same checks regardless of what the client sent.

Backend wired through Klaviyo: profile create/upsert + custom event "GPM Secret Gold Briefing Requested." The Klaviyo dashboard config (list, flow, email template, PDF attachment) is an ops dependency before real PDF delivery happens.

### Validation messages

- "Please enter your name." / "Please enter your email." / "Please enter a valid email address." / "Please enter your phone number." / "Please enter a valid phone number." / "Something went wrong. Please try again or call us."

### Success state

Replaces the form with:
- Headline: *"Check your email. The briefing is on its way."* (Source Serif 4 italic)
- Sub: "If you don't see it within five minutes, check your spam folder."

`role="status" aria-live="polite"`. Same panel container so visual position doesn't jump.

---

## 10. Non-negotiables

These cannot be violated:

- **The homepage carries the Secret Gold Briefing capture** (hero form + briefing section form). Email-capture surfaces beyond these two on the homepage, or any new form on the rest of the site, require explicit CMO sign-off. No exit-intent modals.
- **No celebrity endorsements at launch. No "as seen on" badges. No celebrity photos.**
- **No aspirational stock-couple photography.**
- **No manufactured urgency.** No countdown timers, no "limited time," no "act now" CTAs.
- **No fabricated fear.** Truth-vs-fabrication, not fear-vs-no-fear. Truthful concerns about dollar devaluation are fine; manufactured panic is not.
- **No competitor names in published copy.** Comparative claims at category level only. Never name Augusta, Goldco, AHG, Birch, Lear, Genesis, or any other competitor.
- **No navy-and-gold corporate-finance palette.** Cream + warm gold + walnut only.
- **No motion that performs.**
- **No new components or new color tokens without sign-off.**
- **No dark mode at launch.**
- **Body text holds at 16px floor on mobile.**

---

## 11. Compliance gates (surface, do not silently address)

- **Pricing claims** require CFO sign-off and a date stamp. The 11.1% figure is approved.
- **Comparative claims** ("about a third more," "lower than industry typical") require counsel review and a substantiation file reference (the 17%–33% category range is substantiated from published research and enforcement records).
- **William's Genesis non-compete exposure** — any reference to William's specific prior role at Genesis Gold Group requires external counsel clearance. Generic pastoral framing is fine; specifics are gated. The current quote phrasing "the Gold IRA industry" is the counsel-cleared scope.
- **State licensing** — copy targeting specific states must verify Grace is licensed there. State list is owned by Andrew (CFO).
- **Custodian and depository naming** — partner names appear only on `/who-we-are/compliance` and only after contracts are signed. Don't insert partner names anywhere else.
- **Standard disclaimer** — final language is counsel-cleared. Don't paraphrase, modify, or rewrite.

---

## 12. Outstanding placeholders (live on the site today)

- **William's portrait** — provisional Manus-bundle placeholder, awaiting commissioned final
- **Four named testimonials** (Robert Haines / Linda Prescott / Pastor David Chen / James & Carol Whitfield) — placeholders for dev/preview only; public launch requires William's redline and consent on file for ALL four, or the section comes off the homepage
- **Footer address** — "[address — pending confirmation]"
- **Footer office hours and phone** — italic "Office hours and phone — pending confirmation."
- **Trust strip 4th signal** — "IRS-APPROVED CUSTODIAN & DEPOSITORY" rendering by default; gated by env flag if partnerships unwind
- **Briefing PDF asset** — placeholder OK in `public/` for local form testing; real PDF delivered through Klaviyo flow once configured
- **Three legal pages and license list** — `/legal/{privacy,terms,disclosures,licenses}` are routing scaffolds awaiting counsel-delivered final copy
- **Logomark** — direction-only SVG; production artwork pending designer

---

## 13. Audience language

When writing about the reader, use:
- "faithful stewards"
- "hardworking families"
- "conservative Christian retirees"

Never use:
- "everyday Americans"
- "regular folks"
- "ordinary people"
- "investors" (the audience self-identifies as savers, retirees, families — not as investors)

---

## 14. What's NOT on the homepage (and won't be at launch)

- Today's spot price live ticker (deferred post-launch)
- Round-trip cost calculator (deferred post-launch)
- Reviews / ratings block (deferred)
- Blog or magazine surface (deferred)
- Ambassador surface (MTG verbal-interest only; the `AmbassadorBand` component is reserved but not wired)
- Newsletter signup separate from the briefing form
- Cookie consent banner (jurisdiction-dependent, awaiting counsel sign-off)

---

*End of homepage design reference. This document captures the live state at the time of writing. When the live site changes, this doc must be updated alongside.*
