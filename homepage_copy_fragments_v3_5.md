# Grace Precious Metals — Homepage Copy Fragments (v3.5)

**For Claude Code Phase 1 build. Use this content for the homepage shell. The rest of the v3.5 copy follows in the full MDX drop.**

This document carries the verbatim, brand-cleared copy for every block in the Section 18 homepage spec. Do not rewrite, paraphrase, or invent variations. Where the design brief and the v3.5 copy disagree, the discrepancy is flagged below — surface it to the CMO; do not silently resolve.

---

## Page metadata

**Meta title:** Grace Precious Metals — The Gold IRA with a Published Price
**Meta description:** A typical Gold IRA costs about a third more than Grace. Our spread is 11.1% all-in — no admin fee, no setup fee, buyback at spot. Pastor-led, salaried advisors, standard bullion only.

---

## Block 1 — VerseHero (Section 9 + Section 18.2)

### Verse band

**Eyebrow:** PROVERBS 11:1
**Verse (display-xl, 72px serif):** A just weight is *His* delight.

> **Note:** the italic emphasis on "*His*" is config-flag controllable per brief Section 9.1. Ship with italic; do not strip without William's call.

### H1 (text-display-lg)

No Hidden Costs. Low Fees.

### Deck (text-body-lg)

A typical Gold IRA costs about a third more. Grace's spread is 11.1%, all-in — no admin fee, no setup fee, buyback at spot, never below.

Most of the industry will not show you a number until you are on a call with a commissioned salesperson. We think that is the wrong order. If you want to know what you will pay before you decide to pay it, you are in the right place.

### CTAs

- **Primary (walnut):** See what it actually costs → (links to `/pricing`)
- **Secondary (walnut-outlined):** Talk to a salaried advisor → (links to `/advisor`)

> **Compliance flag:** The "about a third more" comparative claim is substantiated against the midpoint of the category-typical round-trip cost range (17%–33%). The claim is supported by the disclaimer block at the foot of the page (Block 9 below). Substantiation file maintained. Counsel-cleared for v1 launch.

---

## Block 2 — EntryCard grid (three cards)

**Layout:** horizontal grid at desktop, stacked at mobile. Surface color, no border, padding space-6, single CTA arrow link in muted gold. Each card title text-h3, body text-body-sm.

### Card 1 (Hero A — William's story)

**Title:** A pastor left the gold industry. This is the company he built.

**Body:** William Armour was a senior sales director at a large Gold IRA firm. He is also a pastor. What he was selling could not be reconciled with what he preached.

**Link:** Read William's story → (links to `/who-we-are/williams-story`)

### Card 2 (Hero F — Five commitments)

**Title:** We published the standard. Hold us to it.

**Body:** Five structural commitments on pricing, product, compensation, and buyback — published before you speak to anyone. Not asking you to trust us. Inviting you to measure us.

**Link:** See the five commitments → (links to `/pricing`)

### Card 3 — DISCREPANCY FLAGGED

> **CMO call required.** The v3.4 launch copy specifies Card 3 as Hero D — "How to evaluate any Gold IRA company" linking to `/resources`. The Design Brief Section 18.2 specifies Card 3 as "Hero D (Read the Briefing)" linking to `/briefing`. These are different cards pointing at different surfaces.
>
> **Build option A (matches v3.4 copy):** Use the framework card pointing to `/resources` (text below).
> **Build option B (matches brief Section 18.2):** Use a Briefing card pointing to `/briefing` (no v3.5 copy text available — would need to be drafted).
>
> **Recommendation for Phase 1:** Use Option A for the build, since the copy exists and is brand-cleared. Resolve A-vs-B with the CMO before signoff. Either way, the card structure is identical; only the title, body, link, and destination differ.

**Card 3 (Option A — framework, from v3.4):**

**Title:** How to evaluate any Gold IRA company.

**Body:** The questions most of the industry prefers you do not ask — on buyback, round-trip cost, and numismatic coins. The framework we invite you to apply to us and to anyone else.

**Link:** Use the framework → (links to `/resources`)

---

## Block 3 — William pull-quote (Section 14.3)

**PullQuote component. Italic serif (text-quote), no quote marks rendered (typography signals quotation), attribution in text-body-sm with em-dash prefix.**

> I spent a decade inside a large Gold IRA firm. I watched what the pricing looked like on the inside and what it looked like to the customer. The two numbers did not match. I am a pastor. I could not keep doing it. Grace is what I built when I left.

**Attribution:** — William Armour, Co-Founder and CEO

**Link below quote (LinkArrow, right-aligned):** Read William's full story → (links to `/who-we-are/williams-story`)

> **Compliance flag:** Counsel-cleared on Genesis non-compete framing — generic "a large Gold IRA firm" framing is permanent. No fictional words; drafted from William's actual register.

---

## Block 4 — WilliamTestimonyBand (Section 14.3)

**Tinted surface (`var(--gpm-surface)` #E8E2CC), padding space-8 internal.**

### Heading (text-h3)

What people say about William.

### Body (text-body)

Grace was built around one man's conviction. These are testimonials about William Armour — from people who have worked with him, been counselled by him, or known him personally over his years in ministry and in the Gold IRA industry.

### Italic tagline (text-body, italic, muted color)

*They describe William. Grace is the company he built.*

### Two-column testimonial grid (text-quote italic, left-rule walnut, attribution text-body-sm)

**Testimonial 1:** "[PLACEHOLDER — testimonial copy about William personally. William to supply before launch.]"
*— [First name], [relationship to William], [year]*

**Testimonial 2:** "[PLACEHOLDER — testimonial copy about William personally. William to supply before launch.]"
*— [First name], [relationship to William], [year]*

### Closing link (LinkArrow, right-aligned, with hairline border above)

Read William's story → (links to `/who-we-are/williams-story`)

> **Build note:** The two testimonial slots ship as placeholders rendered in the band. William delivers the real testimonials before launch via redline. Do not invent testimonials.

---

## Block 5 — Trust architecture block

**Three short lines on canvas with a hairline gold rule above and below; no card surface, no badges, no logos. Each line links to the corresponding section of `/who-we-are/compliance`. (Per brief Section 18.2, added in v1.1 patch.)**

Grace Precious Metals uses IRS-approved custodians and IRS-approved depositories for Gold IRA holdings. Our dealer operations carry state licensing where required. The regulatory posture, licensing detail, and partner disclosures are on the compliance page.

**Link:** Our compliance and licensing → (links to `/who-we-are/compliance`)

> **Compliance flag:** Partner naming deferred until custodian and depository contracts are signed (Architecture Decision 1). Current language is category-level, which is correct for this stage. Update on contract close.

---

## Block 6 — CommitmentBlock (five commitments)

**CommitmentBlock layout. Two-column grid at desktop, single column at mobile. Each commitment: number eyebrow (01–05), heading in text-h3, body in text-body-sm. No card surface — commitments sit directly on canvas separated by hairline rules.**

### Section heading (text-h2)

The five structural commitments

### Section subhead (text-body)

Five operational commitments. Each one visible, each one verifiable.

### 01 — Published spread, 11.1% all-in

The markup over spot is 11.1%. That is the whole markup. Nothing is added on a phone call. Nothing is negotiated off it.

**Link:** See the pricing page → (links to `/pricing`)

### 02 — Buyback at spot, never below

When you sell back to us, we pay the spot price on the day. We do not mark the buyback down to build a second margin on exit.

**Link:** How buyback works → (links to `/resources/buyback`)

### 03 — Standard IRS-eligible bullion only

American Eagles, Canadian Maple Leafs, LBMA-approved bars. No numismatic, exclusive, rare, premium, or proof coins in any form.

**Link:** Why we refuse numismatics → (links to `/resources/numismatic-coins`)

### 04 — Salaried advisors. No commission.

The person you speak to earns the same whether you buy or not. No commissions, no referral fees, no volume bonuses.

**Link:** Meet the advisor team → (links to `/advisor`)

### 05 — No phone-gate on pricing (full-width, spans both columns)

The number is on the website. The worked examples on your rollover amount are on the pricing page.

**Link:** See what it actually costs → (links to `/pricing`)

---

## Block 7 — Proverbs 11:1 anchor block

**Standing architectural block. One sentence of scripture, one sentence of explanation, one link. Not decorative.**

### Eyebrow

PROVERBS 11:1

### Verse (text-display-lg, italic-emphasis on "his" — config-controllable per brief Section 9.1)

"A false balance is an abomination to the Lord, but a just weight is *His* delight."

### Note (text-body)

The just weight is what you are charged. Ours is visible, because the number is on this page. Accurate, because what is published is what is charged. Constant, because it does not move between customers.

**Link:** Who we are → (links to `/who-we-are`)

---

## Block 8 — Three-paths block

**Three EntryCard components, segment-specific routing. Same EntryCard structure as the hero entry cards. Section heading above the grid.**

### Section heading (text-h2)

Find what fits where you are

### Path 1 — New to Gold IRAs

**Tag:** Path 1

**Title:** New to Gold IRAs

**Body:** Start with how a rollover works. What you can roll over, how the timing works, what the tax treatment looks like.

**Link:** How a rollover works → (links to `/rollover`)

### Path 2 — Already hold a Gold IRA

**Tag:** Path 2

**Title:** Already hold a Gold IRA

**Body:** Start by requesting your current provider's buyback quote. That number tells you what you actually paid on entry.

**Link:** The transfer guide → (links to `/rollover/transfer`)

### Path 3 — Financial advisor or CPA

**Tag:** Path 3

**Title:** Financial advisor or CPA

**Body:** Our published pricing, salaried-advisor model, and bullion-only catalogue exist to meet the standards your clients rely on you to apply.

**Link:** Advisor and CPA referrals → (links to `/advisor`)

---

## Block 9 — Standing disclaimer (above footer, page-level)

**Body-ink color, text-body-sm, italic. Each disclaimer in its own paragraph; multiple disclaimers stack with space-2 between them.**

*Grace Precious Metals is a precious metals dealer. Gold IRAs require an IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a financial, tax, or legal advisor. Gold and precious metals investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. Consult qualified professionals before making investment decisions. Pricing reflects CFO-reviewed published policy as of the date shown.*

*"A typical Gold IRA costs about a third more" compares Grace's round-trip cost (entry spread plus ongoing custodian and depository fees; buyback at spot, zero exit spread) against the midpoint of the category-typical round-trip cost range of 17%–33%, substantiated from published research on Gold IRA pricing and regulatory enforcement records. Substantiation files available on counsel request. No specific competitor is identified on this page.*

---

## Block 10 — Footer (standard, appears on every page)

**Per brief Section 14.1 SiteFooter. Four columns at desktop. NO newsletter subscription per brand discipline (refused despite Architecture v1.1 reference; brief v1.1 Section 29 confirms).**

### Column 1 — Pages

- Our Pricing → `/pricing`
- How A Rollover Works → `/rollover`
- Inherited IRA → `/rollover/inherited-ira`
- Transfer Guide → `/rollover/transfer`
- Who We Are → `/who-we-are`
- William's Story → `/who-we-are/williams-story`
- Compliance → `/who-we-are/compliance`
- Talk To An Advisor → `/advisor`

### Column 2 — Resources

- Resources Library → `/resources`
- Buyback → `/resources/buyback`
- Round-trip Cost → `/resources/round-trip-cost`
- Numismatic Coins → `/resources/numismatic-coins`
- FAQ → `/faq`

### Column 3 — Talk to us

- Get the Briefing → `/briefing`
- Contact → `/contact`
- [Office hours and phone — pending Andrew's confirmation]

### Column 4 — Compliance

- Privacy → `/legal/privacy`
- Terms → `/legal/terms`
- Disclosures → `/legal/disclosures`
- State Licenses → `/legal/licenses`

### Footer base

Grace Precious Metals, [address — pending Andrew's confirmation]. © 2026 Grace Precious Metals. All rights reserved.

---

## Compliance flags (for the Phase 1 reviewer)

The homepage compiles four compliance-gated claims. Each must surface in the disclaimer stack (Block 9) and in the page's MDX frontmatter `complianceFlags` array:

1. **"A typical Gold IRA costs about a third more"** — substantiated comparative claim; 17%–33% category range; substantiation file referenced; no competitor named. Counsel-cleared.
2. **"Most of the industry will not show you a number until you are on a call with a commissioned salesperson"** — substantiated category-level claim; Competitive Intelligence Report supports it. Counsel-cleared.
3. **William's pull-quote** — counsel-cleared on Genesis non-compete framing; "a large Gold IRA firm" framing is permanent and generic. No specific employer named.
4. **The 11.1% spread figure** — CFO-signed-off; auditable change-management at MDX frontmatter level (`complianceFlags: ["pricing-cfo-cleared"]`). If the figure changes, Andrew signs the change and the change is logged in git.

---

## What this document does NOT include

- The 21 other pages — wait on the full v3.5-to-MDX conversion
- William's actual two testimonials — placeholders; William supplies before launch
- Andrew's confirmation items — address, state license list, custodian/depository names, phone numbers
- v3.5-specific Hero D resolution — flagged for CMO call (see Block 2, Card 3)

---

*End of homepage copy fragments. Phase 1 build proceeds against this document as the source of truth for homepage content. The Design Brief Section 18 governs structure and visual treatment; this document governs words.*
