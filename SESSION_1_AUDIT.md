# Session 1 Audit — Homepage Production Brief Delta Report

Date: 2026-04-29
Author: Claude (Opus 4.7) under Duncan Cumming's direction
Branch: phase-2-content-import (untouched — audit only, no code written)
Authoritative spec: `/Users/duncancumming/Downloads/Grace_Precious_Metals_Homepage_Production_Brief.md`
Authorization: Option A — production brief overrides in-repo non-negotiables (CLAUDE.md, DESIGN_BRIEF.md, homepage_copy_fragments_v3_5.md)

---

## 1. Topline assessment

The existing homepage at `app/(marketing)/page.tsx` was built faithfully against the in-repo brief (Section 18) and the v3.5 fragments. There is no Manus drift to clean up. The production brief is a deliberate, substantial rewrite of the page architecture, copy, and visual register.

Net effort:
- ~30–40% existing component reuse (layout primitives, Logomark scaling, EntryCard inside ThreePathsGrid, ImagePlaceholder, DisclaimerStack)
- ~60–70% refactor or net-new code (new hero with form, trust strip, America's First block, bullion grid, comparison block, briefing section with cover artwork and form, header with side-panel mobile menu, footer with dark walnut bg and mobile accordion, four-card commitment grid replacing five, four-card testimonial grid replacing two-card band)
- New backend work: API route for both forms, transactional email integration, briefing PDF placeholder, optional form-submission storage

Render observations from current implementation (1440 / 768 / 380 stills captured):
- Desktop renders cleanly.
- Tablet (768) overflows horizontally — display-xl verse and display-lg H1 stay at fixed 72px / 56px because the responsive `textMobile` values in `tokens.ts` are tokens for reference only, not applied responsively in `tailwind.config.ts`. This is a bug in the current type system and the production brief's fluid clamp() typography is the right fix.
- Mobile (380) renders without overflow but the verse/H1 dominate the viewport at fixed 72/56px.
- No browser console errors. Server runs clean.

---

## 2. Component reuse map

### Keep as-is or near-as-is
| Component | Notes |
|---|---|
| `components/layout/PageContainer.tsx` | 1440 max-width matches; production brief uses 1200px wide / 1280px header — adjustable via prop or new variant |
| `components/layout/ContentContainer.tsx`, `ProseContainer.tsx`, `WideContainer.tsx`, `SectionContainer.tsx` | Still useful for Phase 2 content pages even if unused on homepage |
| `components/content/ImagePlaceholder.tsx` | Conditional image vs placeholder remains the right pattern |
| `components/compliance/PreLaunchBanner.tsx`, `TopBanner.tsx` | Compliance banner stays firing on homepage until LB-01/02/03 close |
| `app/(marketing)/homepage.meta.ts` | Compliance flags stay; review the list once new copy lands (some may resolve, e.g. dropping references that triggered them) |

### Refactor (significant changes, same conceptual home)
| Component | Refactor scope |
|---|---|
| `components/nav/SiteHeader.tsx` | Switch full-screen mobile takeover → 80vw side-panel from right with focus trap. Switch CTAs from secondary outline to Tier 3 outlined-walnut with hover-fill. Mobile primary CTA becomes Tier 1 gold-filled, not Tier 3. Sticky positioning. 1280px inner. New padding spec. |
| `components/nav/SiteFooter.tsx` | Dark walnut bg (#3D2817) replacing cream. Mobile 4-col grid → accordion (client-side, one-open-at-a-time). Type sizes change. |
| `components/nav/Logomark.tsx` | Wordmark size 26px desktop / 22px mobile. New tagline color #9C7322 at 10px Inter weight 600 letter-spacing 0.20em (current renders at body-ink — needs swap to gold-secondary). The existing `size` prop scaling math holds. |
| `components/content/CommitmentBlock.tsx` | 5 commitments → 4 (drop "No phone-gate on pricing" entirely). 3-col-with-span layout → 4-col equal-height grid with subgrid (or min-height match). Numeral switches from text-h3 serif → 14px Inter weight 600. Add eyebrow + lead paragraph above grid. |
| `components/content/PullQuote.tsx` | 33/67 split with rectangular headshot → circular 120px portrait with attribution beneath, quote right of portrait. Add hairline rules above and below at 60% width. Quote size 32px → 24px. Add curly quote glyphs. Mobile reorders portrait → attribution → quote → link. |
| `components/content/ThreePathsGrid.tsx`, `components/content/EntryCard.tsx` | Add eyebrow above section heading. Card image height 240px (currently aspect-ratio-driven). Border-radius only top corners. Tag prefix "PATH N" stays. Equal-height enforcement. Move card text styles to match brief. |
| `components/content/DisclaimerStack.tsx` | Change `text-body-sm` (14px) → 13px. Otherwise correct (italic lead phrase + upright body). |
| `components/cta/CTAButton.tsx` | Refactor `variant: primary | secondary` + `tone: default | inverse` → explicit `tier: 1 | 2 | 3` variants matching brief. Tier 1 gold-filled, Tier 2 form-submit, Tier 3 outlined-walnut hover-fill. |
| `components/cta/LinkArrow.tsx` | Already at #9C7322 / #7E5C10 colours per the 2026-04-28 audience-tiebreaker patch — matches Tier 4 spec. Keep as-is. |

### Replace / retire
| Component | Replacement |
|---|---|
| `components/hero/VerseHero.tsx` | New three-zone Hero component (left dark zone with copy + Tier 1 CTA; centre photographic; right walnut translucent form panel) |
| `components/content/TrustBlock.tsx` | New TrustStrip — icon row with hairline gold dividers, config flag for 3-vs-4 signals |
| `components/content/WilliamTestimonyBand.tsx` | New TestimonialsGrid — 2×2 grid of four named testimonials, no image, gold left-rule per card |
| `components/content/VerseAnchor.tsx` | Removed. The verse anchor block is gone in the production brief; verse appears only in the hero eyebrow as "PROVERBS 11:1 — A JUST WEIGHT IS HIS DELIGHT." |
| `components/content/EntryCardGrid.tsx` for top-of-page IA | Removed from homepage. The three editorial-card block (William's story / Five commitments / Briefing) is replaced by the Trust Strip + America's First two-column block. EntryCardGrid remains in use by ThreePathsGrid for the "Find what fits" section. |
| `ENTRY_CARDS` array in `app/(marketing)/page.tsx` | Removed. The card-1/card-2/card-3 imagery becomes orphaned (see Imagery audit, §6). |

### Net-new components
- `Hero` (composition wrapper for the three-zone layout)
- `HeroBriefingForm` (client component — name/email/phone fields, validation, submit state, success replacement)
- `TrustStrip` + four pictogram SVGs (walnut single-stroke, 22px)
- `AmericasFirstBlock` (two-column copy block)
- `BullionGrid` (4-product image row with captions and trailing inline link)
- `TestimonialsGrid` (4-card 2×2 with subgrid equal heights)
- `ComparisonBlock` ("Already spoken to another Gold IRA company?")
- `BriefingSection` (eyebrow + headline + WHAT'S INSIDE list + cover + form + page-count caption)
- `CoverArtwork` (CSS 3D transform with oxblood face, page edges, drop shadow, internal layout)
- `BriefingForm` (full version mirroring HeroBriefingForm, shared payload schema, distinct `source` field)
- `MobileMenuPanel` (slide-in with focus trap, escape close, dim-background close)
- `FooterAccordion` (mobile-only accordion controller)
- `WhatsInsideList` (8-item numbered list with hairline rules)

---

## 3. Section-by-section delta (production brief order)

### §1 Site Header
**Existing:** cream bg, py-8 (32px vertical), border-b border-light, 4 nav links text-body-lg, two-button cluster (Get the Briefing secondary, Talk to an advisor primary). Mobile = full-screen overlay takeover.
**Brief:** Sticky, full-bleed bg #F2EDE0, 0.5px gold-with-alpha bottom border. 1280px inner, 22px/32px padding. Nav 14px Inter medium, gap 24px, hover #9C7322 200ms. Hairline rule between nav and CTAs. CTAs Tier 3 outlined-walnut hover-fill. Mobile: 16/20 padding; logo + Talk-to-an-advisor (Tier 1 gold-filled) + 24×24 hamburger in 44×44 area. Hamburger opens 80vw side-panel from right with focus trap.
**Delta items:**
- Sticky positioning (new)
- Inner container 1440 → 1280 (header only — page stays at 1200 elsewhere)
- Reduced vertical padding 32 → 22
- Nav font-size body-lg → 14px Inter; hover treatment underline → colour shift
- Hairline separator between nav and CTAs (new)
- All CTAs to Tier 3 outlined-walnut hover-fill (existing has no hover-fill behaviour)
- Mobile primary CTA promoted from outline to Tier 1 gold-filled (visual register change for mobile)
- Mobile menu mechanism: full-screen takeover → 80vw side-panel from right
- Focus trap inside panel (new — existing has no focus management beyond tab order)
- Escape-to-close + click-dim-to-close (new)
- aria-expanded on hamburger (verify; current has aria-label only)
**Risk:** Side-panel + focus trap is the most accessibility-sensitive piece. Plan for axe-core verification at completion.

### §2 Hero — net new
**Existing:** VerseHero (verse band + H1 + deck + dual CTAs + side image, all on cream).
**Brief:** Three-zone composition. Full-bleed cream surface end-to-end. Photographic gold-coin imagery inside. Dark gradient overlay over left zone. Inside 1200 container: left zone (eyebrow PROVERBS 11:1 — A JUST WEIGHT IS HIS DELIGHT. + H1 48px white "A Gold IRA at 11.1%&nbsp;spread,&nbsp;all-in. Buyback&nbsp;at&nbsp;spot." with non-breaking spaces locking the phrases + sub 18px white "No admin fee. No setup fee." + Tier 1 "See our pricing"); centre zone (photographic content, no text); right zone (translucent walnut card 280–320px with form). Min-height 520px desktop. Tablet compresses (36/16). Mobile stacks (dark zone → cream-imagery zone → form card; 32px gaps; H1 28px).
**Delta items:**
- Replace VerseHero entirely
- New copy: hero H1 + sub + CTA (cleared per Option A authorization)
- Photographic backdrop with gradient overlay — reuse `public/images/homepage/hero-gold-coins.jpg` for the centre zone; left zone needs darker imagery or a solid dark gradient (the spec is ambiguous on whether the same image sits behind both zones or only the centre zone — recommend the same image with the gradient masking the left)
- Right zone: HeroBriefingForm (new client component, see §14)
- Non-breaking spaces in headline phrases — implement as `&nbsp;` literals or ` ` to lock "11.1% spread, all-in." and "Buyback at spot." against mid-line breaks
- Mobile reorder logic
**Risk:** The translucent walnut form panel sitting on cream with photographic content visible beside it is a strong visual departure from anything elsewhere on site. It will be the first thing a partner sees. Recommend Duncan reviews after Phase 2C.

### §3 Trust Strip
**Existing:** TrustBlock — three architectural lines on cream with hairline gold rules, "On the record." H2 + subhead + linked items.
**Brief:** Full-bleed bg #FFFDF5, 0.5px gold-with-alpha top border. 1200 inner, 16/32 padding. Flex justify-around align-center 12px gap. Each signal: 22px walnut pictogram + two-line text label (Inter 11px medium 0.08em letter-spacing). Hairline gold dividers (0.5px, 26px tall) between adjacent signals. Tablet scales to 10px text / 20px icons. Mobile vertical stack with horizontal icon+text inside each signal, 0.5px hairline horizontals between. Config flag `TRUST_STRIP_CUSTODIAN_PARTNERSHIPS_CONFIRMED` toggles 3-vs-4 signals (default false).
**Delta items:**
- Replace TrustBlock visual treatment entirely (link list → icon strip)
- Source/draw four pictogram SVGs (single-stroke walnut)
- Implement config flag — recommend reading from `process.env.TRUST_STRIP_CUSTODIAN_PARTNERSHIPS_CONFIRMED === 'true'` on server, defaulting false; document in `.env.local.example`
- Cross-link to LB-06 (custodian/depository naming) — flag default-false matches LB status
**Risk:** Pictogram source. If we don't have SVG icons in-repo, we either commission or use a tasteful icon set (Phosphor / Heroicons / Lucide — the package is installed already, `lucide-react ^1.11.0`, available for stroke-only icons). Recommend Lucide for the four signals.

### §4 "America's First" two-column block — net new
**Existing:** not present.
**Brief:** 1200 container, 50/50 split, 48px gap. Left col: eyebrow "A FIRST IN THE INDUSTRY" + headline 36px Source Serif 4 weight 500. Right col: lead paragraph 18px Source Serif 4 400. Mobile stacks; headline 28px / paragraph 17px.
**Delta items:**
- New section component
- **DEPENDENCY:** Need exact copy from v3.5. Duncan has stated this claim is in v3.5 already as cleared. I have not located it in `homepage_copy_fragments_v3_5.md` — likely lives in the broader v3.5 corpus (the `.docx` source). Surface for Duncan to paste in or point me to the exact text.

### §5 Foundational Commitments
**Existing:** CommitmentBlock — 5 commitments (3-col grid with #5 spanning full-width).
**Brief:** 4 cards (#5 removed entirely) in 4-col grid with subgrid equal heights. Eyebrow "OUR PROMISE" + headline + lead paragraph above. Numeral 14px Inter weight 600 #9C7322 / headline 18px Source Serif 4 600 #3D2817 / description 16px Source Serif 4 400 #2D2620 1.55 / Tier 4 link mt-16. Tablet 2×2; mobile 1-col gap 24.
**Delta items:**
- Drop Commitment 5 from `COMMITMENTS` array (remove "No phone-gate on pricing" — this is an authorized brand decision per Option A)
- Refactor layout 3-col-with-span → 4-col equal-height (subgrid or min-height)
- Numeral type switches from serif → Inter
- Add eyebrow + lead paragraph above grid
- Update `homepage_copy_fragments_v3_5.md` to drop Block 6 commitment 5
- Update `DESIGN_BRIEF.md` Section 18.2 to spec four commitments

### §6 "What we sell" section — net new
**Existing:** not present.
**Brief:** Headline "Standard bullion. Nothing else." Lead paragraph above 4-product image row (American Gold Eagle, Canadian Gold Maple Leaf, American Silver Eagle, LBMA-approved gold bar). 24% column / 1.33% gap, 4px image radius. Captions Inter 13px medium 0.65 alpha. Closing paragraph below row with inline Tier 4 link "Why we refuse numismatics →". Tablet 2×2; mobile 1×4.
**Delta items:**
- New BullionGrid component
- **DEPENDENCY:** four bullion product images — not in `public/images/homepage/`. Confirm whether prior Manus deliveries have these (worth checking `Brands/Grace Precious Metals/` outside the repo for a `Manus deliveries` or similar folder; if not, source from Wikimedia Commons or commission)
- Closing copy: in v3.5? Need source.

### §7 William's Pulled-Quote
**Existing:** PullQuote with provisional headshot, 33/67 split, italic serif quote.
**Brief:** Hairline rules above and below at 60% width centred. 120px circular portrait left + attribution beneath portrait centred ("William Armour" 16px Source Serif 4 600 + "CO-FOUNDER & CEO" 11px Inter 600 0.18em #9C7322 mt-4) + quote right at 24px italic max-width 580 with curly quote glyphs in #9C7322 + "Read William's story →" Tier 4 link beneath quote. Tablet 96px portrait; mobile 80px stacked (portrait → attribution → 20px quote left-aligned → link).
**Delta items:**
- Heavy refactor of PullQuote
- Existing v3.5 quote copy ("I spent a decade inside the Gold IRA industry…") stays — already counsel-cleared
- Production brief uses "Read William's story →" as the link text. Existing uses "Read William's full story →". Production brief wins.
- Maintain LB-09 (provisional portrait) — circular crop on the existing `pullquote-headshot-provisional.jpg`

### §8 Testimonials
**Existing:** WilliamTestimonyBand — surface band with 280px image left + heading + 2-card grid (placeholder testimonials, no names).
**Brief:** Eyebrow TESTIMONIALS + section headline + lead paragraph + italic line above grid. 2×2 grid of four named testimonials. Each card 24px padding, border-left 2px gold-with-alpha, gap 32px, equal heights via subgrid. Body 15px Source Serif 4 italic + name Inter 14px 600 + location small text 0.65 alpha. Tablet 1×4 stack; mobile 1×4 with 20px padding. "Read William's story →" Tier 4 below grid centred.
**Delta items:**
- Replace WilliamTestimonyBand with TestimonialsGrid (no image to the left in the new layout — the lifestyle image is removed)
- 4 placeholder testimonials with named attributions ("[Name pending]" + "[Location pending]")
- Add eyebrow + headline + lead paragraph + italic line above grid (need copy text)
- Update LB-10 to require four named testimonials with locations (was two unnamed)
- The existing `william-portrait-provisional.jpg` (the lifestyle image used inside WilliamTestimonyBand) becomes orphaned — leave in place; do not delete in case a future section reclaims it

### §9 "Already spoken to another" — net new
**Existing:** not present.
**Brief:** 1200 container, 60/40 split, 48px gap. Left col: eyebrow COMPARE + headline 32px Source Serif 4 600 "Already spoken to another Gold IRA company?" + italic provocation 18px gold-secondary + 2 body paragraphs 17px + "What you will probably find:" 14px Inter 600 + 4-bullet list 17px Source Serif 4 with gold dot bullets + Tier 1 "Talk to a Salaried Advisor". Right col: image of older couple at desk, 6px radius. Tablet 2-col; mobile stacked image-first.
**Delta items:**
- New ComparisonBlock component
- **DEPENDENCY (copy):** italic provocation text, two body paragraphs, four-bullet list — Duncan to confirm v3.5 source location
- **DEPENDENCY (imagery):** "older couple at desk" — Duncan said use existing Manus imagery from prior deliveries. Not in `public/images/homepage/`. Need pointer to the right folder / file.
- "Bring us the quote. We will tell you what it actually costs." comparative claim — likely needs counsel review against the substantiation file (this is a category-level claim implying you can demonstrate cost differences; substantiation file exists per LB-03 / current disclaimer copy). Defer to counsel — flag in LAUNCH_BLOCKERS as a new item if not already covered.

### §10 The Secret Gold Briefing — net new
**Existing:** not present on homepage. The /briefing page exists separately (`content/briefing.mdx`).
**Brief:** Hairline rules above and below at 70% width centred. 1200 container, 58/42 split, 80px gap. Left col: eyebrow THE SECRET GOLD BRIEFING + headline 32px "What the Other IRA Companies Hide From You." + WHAT'S INSIDE label + 8-item numbered list with hairline rules between (numeral 13px Inter 600 #9C7322 / description 15px Source Serif 4 1.55, 12px gap, 12px padding). Right col: cover artwork 320×414px with CSS 3D `transform: perspective(2400px) rotateY(-15deg) rotateX(3deg)`, oxblood face #5C2A2A, page edges striped texture, drop shadow `-4px 8px 28px rgba(45,38,32,0.32)`. Cover internal: wordmark + "PRECIOUS METALS" + "The Secret Gold Briefing" + italic subtitle + photograph zone + footer with verse line + "GRACE PRECIOUS METALS · First edition · 2026". Page-count caption "12 PAGES · PDF" beneath cover. Form below caption (max 360, centred): three required fields + Tier 2 "Send me the briefing" + disclosure. Tablet stacks; mobile stacks with cover at 240×312, list items 14px.
**Delta items:**
- New BriefingSection (composition)
- New CoverArtwork component (CSS 3D transform; pure CSS or layered background-image with stripe pattern)
- New WhatsInsideList component
- New BriefingForm component (Tier 2 submit, mirrors HeroBriefingForm payload with `source: 'briefing_section'`)
- **DEPENDENCY (copy):** the 8 WHAT'S INSIDE list items, the italic subtitle on the cover, the cover photograph zone content, the disclosure text variant. Duncan to confirm.
- **DEPENDENCY (asset):** the photograph that lives on the cover's photograph zone — needs sourcing or specifying as a CSS gradient mask
- **RENAME EVERYWHERE:** "Just Weight Briefing" → "Secret Gold Briefing" across:
  - `content/briefing.mdx` (page H1, body text, frontmatter title/description)
  - `app/(marketing)/briefing/page.tsx` (any literal references)
  - `homepage_copy_fragments_v3_5.md` (multiple references in Block 2 Card 3, Block 9 disclaimer, Block 10 footer)
  - `DESIGN_BRIEF.md` (multiple references in narrative)
  - `LAUNCH_BLOCKERS.md` LB-08 description
  - `.env.local.example` BRIEFING_PDF_URL comment ("the Just Weight Briefing PDF" → "the Secret Gold Briefing PDF")
  - `lib/klaviyo.ts` `BriefingSubmission` interface comment if any
  - Any image alt text or aria-labels referencing "Just Weight Briefing"

### §11 "Find what fits where you are"
**Existing:** ThreePathsGrid + EntryCard rendering 3 cards with images, tags, titles, body, links.
**Brief:** Eyebrow YOUR STARTING POINT + section headline above grid. 3-col grid, 32px gap. Each card: lifestyle image 240px tall 6px radius top corners only / content area 24px padding bg #F2EDE0 (warmer? same as canvas — needs clarification) / PATH N label Inter 11px 600 #9C7322 0.12em / 22px Source Serif 4 600 headline / 16px Source Serif 4 400 description / Tier 4 bottom link mt-18. Equal heights. Tablet/mobile: stack.
**Delta items:**
- Add eyebrow above heading (existing has heading only)
- Image height fixed to 240px
- Border-radius top-only on image; content-area border-radius zero or matching bottom-only
- Verify equal-height enforcement
- Existing `/images/homepage/path-1-elderly-woman-window.jpg`, `path-2-older-man-writing.jpg`, `path-3-desk-book-pen.jpg` are the lifestyle images — confirmed available
- Existing tag prop "Path N" matches; uppercase the label rendering ("PATH N")

### §12 Disclaimer
**Existing:** DisclaimerStack — italic lead first paragraph, upright body, second paragraph all upright, text-body-sm (14px).
**Brief:** Source Serif 4 weight 400, 13px, 0.75 alpha, 1.6 line-height, 32px container padding.
**Delta items:**
- Type size 14 → 13 (one-line CSS change)
- Existing copy stays — already counsel-cleared
- The 11.1% disclaimer + comparative-claim disclaimer both stay and remain canonical

### §13 Site Footer
**Existing:** SiteFooter — cream bg, 4-col desktop / 2-col tablet / 1-col mobile, link list per column, py-12 lg:py-16.
**Brief:** Full-bleed bg #3D2817 (walnut-deep). Padding 48/32/32. 1200 inner. 4-col grid with column header Inter 12px 600 #C9A96C 0.12em + links Inter 14px 400 #F2EDE0 1.8 line-height (hover #C9A96C). Bottom row: copyright Inter 12px 400 0.50 alpha centred. Tablet 2×2. Mobile: 4 columns become accordion (one-open-at-a-time, chevron indicator, closed by default), copyright full-width below.
**Delta items:**
- Background switch cream → walnut-deep #3D2817 (visual register departure — first dark surface on the page)
- Type colours invert (cream on dark)
- Type spec changes (smaller column header, lighter footer link weight, tighter line-height)
- Mobile accordion behaviour (new client component)
- New token decision: introduce `walnut-deep` as a colour token (vs current `walnut` #3B342A) — see Cross-cutting deltas §4

---

## 4. Cross-cutting deltas

### 4.1 Design tokens
The production brief introduces colour values not in `tokens.ts`:

| Brief token | Brief hex | Existing equivalent | Action |
|---|---|---|---|
| `--linen-light` | #F2EDE0 | `canvas` ✓ | Keep as `canvas` |
| `--linen-base` | #EDE5D2 | (none) | New: `canvas-warm` or `linen-base` |
| `--linen-warm` | #FFFDF5 | (none — `canvas-deep` is #F8F5EB) | New: `linen-warm` (trust strip bg) |
| `--walnut` | #2D2620 | `ink-display` ✓ | Existing token — production brief calls this "walnut" but our token vocabulary calls it ink-display. Recommend keeping `ink-display` and noting the alias in code comments. |
| `--walnut-deep` | #3D2817 | (none — current `walnut` is #3B342A) | New: `walnut-deep`. Keep existing `walnut` for CTA outlines. |
| `--gold-primary` | #B8962E | `gold-deep` ✓ | Existing token — alias in comments |
| `--gold-hover` | #9A7D26 | (none) | New: `gold-hover` (button hover) |
| `--gold-secondary` | #9C7322 | (used in LinkArrow, not a token) | Promote to token: `gold-secondary` |
| `--gold-muted` | #C9A96C | `gold` (DEFAULT) ✓ | Existing token — alias |
| `--oxblood` | #5C2A2A | (none) | New: `oxblood` (briefing cover face) |
| `--cream-warm` | #FAF6EC | (none — `canvas-deep` is #F8F5EB, close but not identical) | Recommend reuse `canvas-deep` and document the 2-hex-point delta as acceptable; or add `cream-warm`. Trade-off below. |

**Recommendation:** add `linen-base`, `linen-warm`, `walnut-deep`, `gold-hover`, `gold-secondary`, `oxblood` as new tokens. For `cream-warm` vs `canvas-deep`: add `cream-warm` as a separate token because the form input bg has a specific role and reusing `canvas-deep` (which already names hover/zebra-stripe states) is semantic muddling. Net seven new colour tokens.

This breaks the in-repo CLAUDE.md rule: "Do not add new color tokens without sign-off. The seven-role system is intentionally restricted." Per Option A, this is rescinded for the homepage extension. Document the additions in CLAUDE.md and DESIGN_BRIEF.md Section 7 in the same commit.

### 4.2 Typography
Brief calls for fluid `clamp()` typography (e.g. `clamp(16px, 1.4vw, 17px)` for body base) and explicitly uses Inter (Google Fonts) where the existing system uses Source Sans 3. Brief enumerates these sizes:

- Body base 17px desktop / 16px mobile (FLUID)
- Section lead 18px
- Card descriptions 16px
- Testimonial body 15px
- WHAT'S INSIDE list 15px
- Footer links 14px
- Disclaimers 13px

The existing eight type tokens cover most of this but the system has no fluid behaviour and no responsive scaling on display sizes. The `textMobile` block in `tokens.ts` (lines 151–156) is referenced by the comment "Mobile breakpoint scaling for display sizes only" but is never wired into Tailwind config — it's a token without a consumer.

**Decisions for Duncan to confirm before Session 2:**

1. **Inter vs Source Sans 3:** The two fonts are visually similar (both geometric humanist sans). Switching to Inter requires a one-line change in `app/layout.tsx` and a token rename. Worth doing if the production brief is treated as canonical. Source Sans 3 is what's currently shipped. Recommendation: **switch to Inter** to match brief verbatim, which removes a "close but not identical" footgun for any partner reading the brief alongside the build.

2. **Fluid clamp() typography:** Add to the type system. This is a strict superset of the current fixed-size system. Existing `text-display-xl` etc. become `clamp(...)` values with sensible min/max. Fixes the tablet overflow bug at the same time.

3. **Type size additions:** 12px (eyebrow alt), 13px (disclaimer / form input), 15px (testimonial body, WHAT'S INSIDE), 22px (h3 alt), 36px (americas-first), 48px (hero h1) — recommend extending the `fontSize` map in tailwind.config.ts and adding utility classes `.text-eyebrow-sm` / `.text-disclaimer` / `.text-testimonial` / `.text-card-h` / `.text-section-h` / `.text-hero-h`. Each composed from family + weight + size + line-height + tracking per the brief's tables.

### 4.3 CTA system
Refactor `CTAButton` to four explicit tiers:

| Tier | Visual | Use |
|---|---|---|
| 1 | Gold-filled #B8962E, white, 6px radius, Inter 500 14px, 14px 32px padding | Page-primary CTAs ("See our pricing", "Talk to a Salaried Advisor", mobile header CTA) |
| 2 | Gold-filled #B8962E, white, 4px radius, Inter 500 13px, 12px 0 padding (full container width) | Form submit ("Send me the briefing" — both forms must be visually identical, criterion 4) |
| 3 | Outlined walnut, transparent bg, 2px radius, Inter 500 13px, 9px 18px padding, hover fills walnut | Header CTAs (Get the Briefing, Talk to an advisor on desktop) |
| 4 | Inline gold #9C7322 / hover #7E5C10, trailing arrow, no container | Reading-flow links (card "Read more", "Find what fits" links, "Read William's story →") |

LinkArrow stays as Tier 4. CTAButton becomes a `tier`-prop component. Form-submit button can be a separate `<FormSubmitButton>` to keep the loading-spinner / disabled-state logic isolated.

### 4.4 Imagery audit
**Reusable from existing public/images/homepage/:**
- `hero-gold-coins.jpg` — hero centre zone (and possibly left zone behind the gradient)
- `pullquote-headshot-provisional.jpg` — circular crop for William's pull-quote portrait (LB-09 still applies — production portrait pending)
- `path-1-elderly-woman-window.jpg`, `path-2-older-man-writing.jpg`, `path-3-desk-book-pen.jpg` — Find-what-fits cards

**Will be orphaned** (stay on disk, not deleted; image assets are cheap):
- `card-1-man-reading-study.jpg`, `card-2-hands-writing.jpg`, `card-3-lamp-paper-desk.jpg` — top-of-page entry cards block is removed
- `verse-anchor-coins-wood.jpg` — VerseAnchor block is removed
- `william-portrait-provisional.jpg` — was the lifestyle image left of the testimonial band; not used in 2×2 testimonials grid

**Required and not yet present:**
- 4 bullion product images (American Gold Eagle, Canadian Gold Maple Leaf, American Silver Eagle, LBMA gold bar)
- "Older couple at desk" lifestyle image for the comparison section
- (Optional) cover photograph for the briefing cover artwork's "photograph zone"

**Open question for Duncan:** where do the prior Manus deliveries with the older-couple-at-desk image and any bullion product photography live? Not in the repo's `public/images/`. Possible locations: somewhere under `Brands/Grace Precious Metals/` outside `Website/gpm-website/`, or in a Manus delivery folder I haven't been pointed to. If they don't exist, recommend Wikimedia Commons for bullion (American Eagle, Maple Leaf, Silver Eagle, and LBMA-bar imagery is well-represented under public-domain or CC licenses) and a stock service for the comparison-section image.

### 4.5 Forms (Session 3 candidate)
Both forms share endpoint and payload schema (`source: 'hero' | 'briefing_section'` discriminator). Required:

- API route `app/api/briefing/route.ts` (POST handler)
- Server-side validation (re-validate name/email/phone on the server, never trust client-only)
- Submission storage — brief calls for "secure database with encryption at rest"; the project doesn't have a database wired up. Options:
  - Klaviyo profile creation (+ subscribe to a list, + trigger a flow that delivers the PDF). The repo already has `klaviyo-api ^9.0.0` installed and `lib/klaviyo.ts` stub. **Recommended**: Klaviyo handles the storage, the email send, and the PDF attachment in one flow.
  - Postmark / SendGrid / Resend for transactional email — only needed if Klaviyo's flow editor isn't sufficient for the email template
- Briefing PDF: `BRIEFING_PDF_URL` env var already exists; placeholder PDF needs to be uploaded to a static host (or rename to "The-Secret-Gold-Briefing.pdf" and check in to `public/`)
- Privacy: confirm Cookie/consent banner status (LB-12 not present, but cookie consent for EU traffic is mentioned in CLAUDE.md known-open-decisions); for the form itself, the disclosure copy in the brief covers basic GDPR-style language

Recommend Session 3 for forms wiring to keep Session 2 focused on layout and visual implementation.

### 4.6 Source-of-truth file updates (must commit alongside code)
Per Duncan's authorization, every change to the homepage requires updating CLAUDE.md / DESIGN_BRIEF.md / homepage_copy_fragments_v3_5.md in the same commits. Specific edits required:

**CLAUDE.md:**
- Rescind the "No lead-capture-first homepage" non-negotiable. Replace with: "Homepage carries the Secret Gold Briefing forms (hero and briefing section) per the production brief. Email-capture forms beyond these two require CMO sign-off."
- Update body-text rule: current "Body text holds at 16px" stays as a floor; add "17px is the desktop body baseline; 16px holds at mobile via fluid clamp()"
- Update the "Briefing PDF asset" known-open-decision text: "Just Weight Briefing PDF" → "Secret Gold Briefing PDF"
- Update Plain Counsel voice section context — note that the briefing eyebrow ("THE SECRET GOLD BRIEFING") and subtitle ("What the Other IRA Companies Hide From You.") are CMO-cleared as in-register copy; the Golden Rule test does not refuse them.

**DESIGN_BRIEF.md:**
- Section 7 (colour): add new tokens (linen-base, linen-warm, walnut-deep, gold-hover, gold-secondary, oxblood, cream-warm)
- Section 8 (typography): document Inter substitution for Source Sans 3 (if confirmed); document fluid clamp() spec; add new size tokens (12, 13, 15, 22, 36, 48)
- Section 14 (component library): add the new components listed in §2 of this audit
- Section 18 (homepage): rewrite end-to-end to match production brief's 13-section IA. The current Section 18.2 sub-specs all change.

**homepage_copy_fragments_v3_5.md:**
- Replace Block 1 (verse band hero) with production-brief hero copy
- Remove Block 2 (entry cards) entirely
- Replace Block 3 PullQuote layout description (circular portrait now)
- Replace Block 4 (testimony band) with 2×2 testimonials block
- Replace Block 5 (trust architecture) with new Trust Strip with config flag
- Replace Block 6 (commitments) with 4-card spec
- Add new blocks: America's First, What We Sell, Already Spoken to Another, The Secret Gold Briefing
- Update Block 7 (verse anchor) — remove (the verse-anchor block is gone)
- Update Block 8 (three-paths) — add eyebrow, update card spec
- Update Block 9 (disclaimer) — 13px spec
- Replace Block 10 (footer) with dark-walnut + mobile accordion spec
- Rename "Just Weight Briefing" → "Secret Gold Briefing" throughout

**LAUNCH_BLOCKERS.md:**
- Update LB-08 ("Briefing PDF asset"): rename "Just Weight Briefing" → "Secret Gold Briefing"; PDF filename in brief is "The-Secret-Gold-Briefing.pdf"
- Update LB-10 (William testimonial copy): scope from 2 placeholders to 4 placeholders with named attributions and locations
- Add LB-13: bullion product imagery (4 images) — Owner: CMO / designer
- Add LB-14: comparison-section lifestyle image ("older couple at desk") — Owner: CMO (Manus delivery folder pointer needed)
- Add LB-15: transactional email service / Klaviyo flow for Secret Gold Briefing delivery — Owner: Ops / CMO
- Add LB-16: form-submission storage decision (Klaviyo profile vs separate database) — Owner: CMO / Andrew
- Update LB-03 (TrustBlock copy): note that the TrustBlock component is removed in favour of the icon-strip TrustStrip; the four trust signals' two-line text labels become the new copy under counsel review

**content/briefing.mdx + app/(marketing)/briefing/page.tsx:**
- Rename "Just Weight Briefing" → "Secret Gold Briefing" (page H1, frontmatter title, frontmatter description, body text)
- This is a separate page from the homepage but the rename must happen in the same set of commits or the cross-link copy goes inconsistent

**.env.local.example:**
- Update `BRIEFING_PDF_URL` comment from "Just Weight Briefing" → "Secret Gold Briefing"
- Add `TRUST_STRIP_CUSTODIAN_PARTNERSHIPS_CONFIRMED=false` with a comment explaining the flag (defaults false; flip to `true` once contracts close)

**lib/klaviyo.ts:**
- Update `BriefingSubmission` interface: extend with `phone: string` and `source: 'hero' | 'briefing_section'`
- Add a `submitBriefing()` server function (Phase 2D / Session 3)

---

## 5. Verification gate scope

Per Duncan's confirmed scope:

**In-environment (I deliver):**
- Annotated stills at 1440 / 768 / 380 (criteria 1, 2, 3)
- Side-by-side hero CTA / briefing CTA proof of pixel-equality (criterion 4)
- Equal-height verification for 4-card commitment grid, 2×2 testimonial grid, 3-card paths grid (criteria 5, 6, 7)
- Mobile menu open/close / focus-trap / escape-close annotated stills (criterion 8 — replacing recording with stills)
- Form validation states (empty / invalid email / invalid phone / valid loading / success / error) — annotated stills (criterion 9)
- Trust strip both flag states (criterion 11)
- axe-core accessibility audit report on the dev server (criterion 12)
- Tab-order keyboard-navigation annotated stills (criterion 13 — replacing recording with stills)

**Out-of-band (Duncan handles on live preview):**
- Lighthouse 90+ Performance / Accessibility / Best Practices on deployed build (criterion 10)
- Real-device iPhone Safari + Android Chrome (criterion 14)

---

## 6. Recommended Session 2 phasing (each phase ends with a Duncan review pause)

**Phase 2A — Tokens, type system, source-of-truth file alignment**
- Update tokens.ts (new colours, fluid clamp())
- Update tailwind.config.ts (new utility classes, fluid sizes, font swap to Inter)
- Update globals.css (new CSS custom properties)
- Update CLAUDE.md, DESIGN_BRIEF.md, homepage_copy_fragments_v3_5.md, LAUNCH_BLOCKERS.md, .env.local.example
- Verify project still builds clean
- → Pause for review

**Phase 2B — Header + Footer chrome**
- Refactor SiteHeader (sticky, three-element mobile, side-panel menu with focus trap)
- Refactor SiteFooter (dark walnut bg, mobile accordion)
- Build MobileMenuPanel and FooterAccordion client components
- → Pause for review

**Phase 2C — Hero + Trust Strip**
- Build new Hero (three-zone composition, photographic backdrop, gradient overlay, Tier 1 CTA — form panel as visual placeholder until Phase 2G)
- Build TrustStrip with config flag and four pictograms (Lucide icons)
- → Pause for review

**Phase 2D — Mid-page content sections**
- Build AmericasFirstBlock (two-column copy)
- Refactor CommitmentBlock to 4-card subgrid equal-height
- Build BullionGrid (with placeholder imagery if not yet sourced)
- Refactor PullQuote to circular portrait + quote-right layout with hairline rules
- → Pause for review

**Phase 2E — Testimonials + Comparison**
- Replace WilliamTestimonyBand with TestimonialsGrid (4 cards, 2×2)
- Build ComparisonBlock (using existing Manus imagery once Duncan points to it)
- → Pause for review

**Phase 2F — Briefing + Find-what-fits + Disclaimer**
- Build CoverArtwork (CSS 3D)
- Build WhatsInsideList
- Build BriefingSection (without form yet — form panel is Phase 2G)
- Refactor ThreePathsGrid + EntryCard to new card design
- Update DisclaimerStack to 13px
- → Pause for review

**Phase 2G — Forms wiring (Session 3 candidate)**
- HeroBriefingForm + BriefingForm (client components, validation, loading, success, error)
- API route `app/api/briefing/route.ts`
- Klaviyo wiring for profile + flow + PDF delivery
- Placeholder PDF check-in
- → Pause for review

**Phase 2H — Accessibility + Verification gate**
- Skip-to-main link
- aria-expanded on hamburger
- aria-live regions on form errors
- Run axe-core; resolve all critical/serious issues
- Capture all in-environment verification stills
- Update PR description draft (held locally pending Duncan's go-ahead to push)

---

## 7. Open questions for Duncan before Session 2 begins

### Resolved by `homepage_copy_v3_6.md` delivered 2026-04-30

- ~~Q2 America's First copy~~ → §4 of v3.6
- ~~Q3 Comparison section copy~~ → §9 of v3.6
- ~~Q4 WHAT'S INSIDE list copy~~ → §10 list items 01–08 of v3.6
- ~~Q5 Briefing cover internal copy~~ → §10 cover artwork block of v3.6
- ~~Q9 Briefing PDF placeholder~~ → v3.6 §"Open Items" implicitly approves a placeholder PDF in `public/` for local form testing

### Still outstanding (these block Phase 2A/2B/2C work)

1. **Inter vs Source Sans 3.** Switch to Inter or document Source Sans 3 as a substitute? Recommendation: **switch to Inter** to match brief verbatim.

2. **Imagery dependencies.** v3.6 confirms the comparison section needs an "older couple at desk" lifestyle image (§9) and the briefing cover needs a "mature couple at a kitchen table reviewing documents with a small bullion coin or bar present" photograph (§10). Two distinct lifestyle assets. Plus four bullion product images for §6 (American Gold Eagle, Canadian Gold Maple Leaf, American Silver Eagle, LBMA gold bar). Where do prior Manus deliveries live? If they don't have these, recommend Wikimedia Commons for bullion (well-represented under public-domain or CC) and a stock service for the two lifestyle images.

3. **Briefing email service.** Klaviyo (already partially wired in `lib/klaviyo.ts` + `klaviyo-api` package installed) or a separate transactional service? Klaviyo handles profile + flow + PDF in one tool — recommended.

### Smaller decisions

4. **`canvas-deep` vs new `cream-warm` token.** Tiny hex difference (#F8F5EB vs #FAF6EC). Recommend separate `cream-warm` token for semantic clarity (form input bg has its own role).

5. **Phase 2A first commit shape.** Bundle tokens + source-of-truth file updates into a single foundation commit ("Phase 4 — homepage production brief: foundation"), or break into a tokens commit and a source-of-truth-docs commit?

### New items v3.6 introduces that should be flagged

a. **William's pull-quote rewritten.** v3.6 §7 replaces the existing in-repo quote ("I spent a decade inside the Gold IRA industry…") with a two-sentence rewrite: `"I left the gold industry because I couldn't reconcile what I was selling with what I preached. This is the company I built to change that."` Phrasing shifts from "the Gold IRA industry" to "the gold industry" (lowercase, no "IRA"). LB-01 / LB-02 (Genesis non-compete) cleared the broader phrasing; the narrower "the gold industry" phrasing should be re-checked by counsel under the same flag rather than silently absorbed.

b. **Find What Fits Path 3 changed.** v3.6 §11 replaces "Financial advisor or CPA" → /advisor with "Inheriting a Gold IRA" → /rollover/inherited-ira. Destination page exists. The Advisor pillar still gets a primary nav slot, a footer link, and a section-9 CTA — it's not orphaned, just no longer carried in the bottom-of-page three-card grid. Worth confirming this audience-shift is intentional (existing IA carried Advisor in the three-card grid; v3.6 gives that slot to inherited IRAs instead).

c. **Foundational Commitments section uses title case in the headline.** v3.6 §5 specifies "Grace Precious Metals: Our Foundational Commitments" — title case is one of the editorial-convention exceptions. No conflict, just a register note for implementation.

d. **Testimonials launch caveat.** v3.6 §8 launch note explicitly says implementation can ship the four named placeholders to dev/preview, but public launch requires William's redline and consent on record for all four. If William confirms fewer than four, render however many he confirms or pull the section off the homepage entirely. This is stricter than the existing LB-10 framing — update LB-10 to reflect the all-or-nothing-public-launch rule.

e. **List item 08** in the WHAT'S INSIDE list references "five operational promises" — Duncan flagged this in-line as internal language for the briefing PDF's content, distinct from the four homepage foundational commitments. Do not reconcile.

f. **Footer bottom row format change.** v3.6 §13 collapses the two-line bottom row into one line with center-dot separators: "Grace Precious Metals · [address — pending confirmation] · © 2026 …". Existing SiteFooter renders this as two lines.

---

## 8. Session 1 closing state

- ✅ Memory file `gpm_homepage_override.md` written and indexed in `MEMORY.md` so Session 2 inherits the Option A authorization context
- ✅ Audit doc written at `SESSION_1_AUDIT.md` (this file)
- ✅ No code changes made
- ✅ Branch `phase-2-content-import` clean of new commits (only the audit doc and memory files written, no code)
- ✅ Dev server tested at three breakpoints; no runtime errors
- 🟡 Awaiting Duncan's review of this delta report and answers to the eight open questions in §7 before Session 2 begins
