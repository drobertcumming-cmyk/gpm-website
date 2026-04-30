# Grace Precious Metals — Website Design Brief

*Build specification for the Grace Precious Metals launch website.*

**Version 1.1** (post-self-review patch — adds missing page templates, SEO infrastructure, homepage gaps)  
**Authored for** Duncan Cumming, Co-Founder & CMO  
**Implementer** Claude Code  
**Stack** Next.js 14+ (App Router), MDX, Tailwind, Klaviyo, GA4  
**April 2026** | American English | Internal use only

---

## Production-brief override note (2026-04-29 / 2026-04-30)

**Scope:** the homepage only. Non-homepage pages still defer to this brief.

The CMO authorised "Option A" on 2026-04-29: the production brief at
`/Users/duncancumming/Downloads/Grace_Precious_Metals_Homepage_Production_Brief.md`
becomes the authoritative homepage layout/visual spec, and `homepage_copy_v3_6.md`
(in repo root) becomes the authoritative homepage copy source. Both supersede
this file's §18 and the v3.5 fragments document for the homepage.

The override changes the following relative to v1.1 of this brief:

- **§7 Color system.** Seven new tokens added (`linenBase`, `linenWarm`,
  `walnutDeep`, `goldHover`, `goldSecondary`, `oxblood`, `creamWarm`). See
  `tokens.ts` and `app/globals.css` for live values.
- **§8 Typography system.** Body/UI font swapped from Source Sans 3 to Inter.
  Fluid `clamp()` typography added for body (16-17px), hero heading (28-48px),
  America's First heading (28-36px), William's pull-quote (20-24px). New
  size-specific tokens: `heroHeading`, `firstHeading`, `sectionLead`,
  `bodyFluid`, `cardDescription`, `testimonial`, `whatsInsideItem`,
  `disclaimer`, `eyebrowMd`, `pullQuote`. Eyebrow rendering convention
  changed to "ALL CAPS via the typed copy itself, not via CSS text-transform"
  for production-brief homepage components. Existing `text-eyebrow` retains
  CSS uppercase for backward compatibility on non-homepage pages.
- **§14 Component library.** Eleven new homepage-specific components
  authorised: `Hero` (three-zone), `HeroBriefingForm`, `TrustStrip`,
  `AmericasFirstBlock`, `BullionGrid`, `TestimonialsGrid`, `ComparisonBlock`,
  `BriefingSection`, `CoverArtwork`, `BriefingForm`, `MobileMenuPanel`,
  `FooterAccordion`, `WhatsInsideList`. Several existing components are
  refactored or retired — see `SESSION_1_AUDIT.md` for the full delta.
- **§18 Homepage.** Fully superseded by the production brief and v3.6 copy
  for the homepage build. The §18 text below is retained as historical
  reference and remains accurate for the v3.5 implementation that shipped
  to phase-2-content-import branch on 2026-04-28; do not consult it for
  the post-2026-04-29 build.
- **§2 Hero composition correction (2026-04-30).** The production brief
  §2 hero specifies a cream linen surface with single-coin imagery. CMO
  override on 2026-04-30: hero composition follows Manus's final render —
  dark studio backdrop with stacked gold coins photography (the
  `hero-background-gold-coins.jpg` asset in the Manus image bundle). The
  dark gradient overlay continues to carry the headline copy on the
  left; the form panel continues to sit on the right. The cream linen
  surface and single-coin specification is superseded. The implementation
  in `components/hero/Hero.tsx` reflects this override.
- **Header chrome correction (2026-04-30).** After CMO desktop-render
  review the header chrome read too thin. Nav link size bumped from the
  brief's 14px to **15px** (Inter weight 500 unchanged). Tier 3 header
  CTA size bumped from 13px / 9px 18px padding to **14px / 10px 20px**
  to match. Header inner-container vertical padding stays at the brief
  spec of 22px top and bottom.
- **Hero form panel correction (2026-04-30).** After CMO desktop-render
  review the form panel rendered too narrow. Panel max-width bumped from
  the brief's 280–320px range to **360px** so the eyebrow line doesn't
  wrap. Internal type bumped: eyebrow 11→**12px** Inter 600; subtitle
  14→**15px** Source Serif 4 italic; field labels 11→**12px** Inter 500;
  field inputs 12→**13px** Inter 400; input padding 8px 11px →
  **10px 12px**. Panel position (right zone of hero) and the dark
  gradient overlay carrying the left-zone headline are unchanged.
- **No-lead-capture-first homepage rule** (was a non-negotiable in the
  earlier `CLAUDE.md`) is rescinded. The homepage carries two forms (hero
  + briefing section). Non-homepage forms still require explicit CMO
  sign-off.
- **Briefing rename (site-wide, 2026-04-30).** "The Just Weight Briefing"
  → "The Secret Gold Briefing" everywhere — homepage hero form panel,
  homepage briefing section, briefing cover artwork, the standalone
  `/briefing` page (`content/briefing.mdx`), the `/advisor` page
  (`content/advisor.mdx`), and any downstream MDX cross-references.
  No live surface still uses "Just Weight Briefing." References in
  historical session notes and changelog entries are intentional and
  retained.
- **Foundational commitments (site-wide, 2026-04-30).** Reduced from five
  to four across every live surface. Commitment 5 ("No phone-gate on
  pricing") removed entirely from the framework. The four foundational
  commitments are: 01 Published spread, 11.1% all-in / 02 Buyback at spot,
  never below / 03 Standard IRS-eligible bullion only / 04 Salaried
  advisors, no commission. Applies to the homepage cards section, the
  `/pricing` page (`content/pricing.mdx`), the `/who-we-are` page
  (`content/who-we-are/index.mdx`), the `/briefing` page summary
  (`content/briefing.mdx`), and the briefing PDF authoring workstream
  (LB-08 — must document four operational promises, not five).

This document specifies the visual identity, design system, page-level direction, and build specification for the Grace Precious Metals launch website. It is structured in five parts and thirty-eight sections.

Parts One and Two read as a brand identity specification and could survive being lifted out for use beyond the website. Parts Three, Four, and Five are the build specification proper, written for an implementer working with the rest of the brand canon as reference.

This brief is the source of truth for the visual system. It is not a substitute for the existing brand canon — the GPM Strategic Brand Positioning v2 document, the Brand DNA & Project Context document, the Tone of Voice document, the Website Content Architecture, the v3.5 launch copy, and the v2 wireframes. Where this brief addresses voice, copy, content architecture, or strategic positioning, it does so at the level required for the visual system to hold; it does not restate or override the canonical sources.

## Changelog — v1.1

Version 1.1 closes gaps identified in self-review of v1.0 against the canonical Website Content Architecture v1.1. The patch adds: page templates for the Resources library (Section 19, expanded), the rollover sub-pages /rollover/inherited-ira and /rollover/transfer (Section 22), the /advisor booking page (Section 23), the /who-we-are parent page including its verse architectural placement (Section 24), the /reviews soft-launch page (Section 30), the four legal pages (Section 31), and the HTML /sitemap page (Section 32). Adds an SEO infrastructure section covering schema.org, sitemap.xml, robots.txt, canonical URLs, and the two-tier keyword architecture (Section 33). Adds a trust architecture block to the homepage specification (Section 18). Fixes the content directory structure to mirror URL hierarchy (Section 37). Resolves the /briefing status conflict between architecture v1.1 and copy v3.5 in favor of v3.5 inclusion. Reaffirms that footer newsletter subscription is refused per the brand's lead-capture discipline despite architecture v1.1 reference; email capture appears only on /briefing. Section numbering after Part Four is renumbered to accommodate inserted sections.

---

## Contents

**PART ONE — FOUNDATION**

- [Section 1 — Executive brief](#executive-brief)
- [Section 2 — Audiences and conversion moments](#audiences-and-conversion-moments)
- [Section 3 — Category refusals](#category-refusals)
- [Section 4 — Editorial register](#editorial-register)
- [Section 5 — Voice-to-visual](#voice-to-visual)
**PART TWO — BRAND IDENTITY SUB-SPEC**

- [Section 6 — Logomark and brand mark usage](#logomark-and-brand-mark-usage)
- [Section 7 — Color system](#color-system)
- [Section 8 — Typography system](#typography-system)
- [Section 9 — Proverbs 11:1 visual treatment](#proverbs-111-visual-treatment)
- [Section 10 — Photography and art direction](#photography-and-art-direction)
- [Section 11 — Data visualization in Grace's voice](#data-visualization-in-graces-voice)
**PART THREE — WEB DESIGN SYSTEM**

- [Section 12 — Design tokens](#design-tokens)
- [Section 13 — Grid, spacing, layout, performance](#grid-spacing-layout-performance)
- [Section 14 — Component library](#component-library)
- [Section 15 — Motion and interaction](#motion-and-interaction)
- [Section 16 — Microcopy, form states, error states](#microcopy-form-states-error-states)
- [Section 17 — Accessibility and responsive direction](#accessibility-and-responsive-direction)
**PART FOUR — PAGE-LEVEL DESIGN DIRECTION**

- [Section 18 — Homepage](#homepage)
- [Section 19 — Resources library architecture](#resources-library-architecture)
- [Section 20 — Pillar Hub template](#pillar-hub-template)
- [Section 21 — Supporting Article template](#supporting-article-template)
- [Section 22 — Rollover sub-pages — /inherited-ira and /transfer](#rollover-sub-pages--inherited-ira-and-transfer)
- [Section 23 — Advisor booking — /advisor](#advisor-booking--advisor)
- [Section 24 — Who We Are parent — /who-we-are](#who-we-are-parent--who-we-are)
- [Section 25 — Narrative Testimony — /who-we-are/williams-story](#narrative-testimony--who-we-arewilliams-story)
- [Section 26 — Compliance Disclosure — /who-we-are/compliance](#compliance-disclosure--who-we-arecompliance)
- [Section 27 — FAQ — /faq](#faq--faq)
- [Section 28 — Contact — /contact](#contact--contact)
- [Section 29 — Briefing Landing — /briefing](#briefing-landing--briefing)
- [Section 30 — Reviews — /reviews (soft-launch state)](#reviews--reviews-soft-launch-state)
- [Section 31 — Legal pages — /legal/*](#legal-pages--legal)
- [Section 32 — HTML sitemap — /sitemap](#html-sitemap--sitemap)
**PART FIVE — FORWARD COMPATIBILITY AND PRODUCTION**

- [Section 33 — SEO infrastructure](#seo-infrastructure)
- [Section 34 — Forward-compatibility for deferred features](#forward-compatibility-for-deferred-features)
- [Section 35 — Ambassador surfacing treatment](#ambassador-surfacing-treatment)
- [Section 36 — Social share, OG, favicon](#social-share-og-favicon)
- [Section 37 — Claude Code build specification](#claude-code-build-specification)
- [Section 38 — Open decisions log](#open-decisions-log)

---

**PART ONE**

## Foundation

The principle-based sections. Written for human readers. These five sections establish what Grace's website must do, who it's for, what it must refuse, and what its visual register should feel like before any token, component, or page-level specification is set.

---

**SECTION 1**

## Executive brief

Grace Precious Metals is a faith-based Gold IRA company built on radical fee transparency, launching to a category that has trained its customers to expect manipulation. Every competitor — Augusta, Goldco, American Hartford Gold, Birch Gold, Lear, Genesis — gates pricing behind a phone consultation. Most run celebrity endorsement playbooks. Several have been the subject of CFTC enforcement actions, FTC settlements, or class-action litigation for predatory pricing. The category default is navy and gold, hero photographs of older couples on beaches, “as seen on” badges, free information kit lead capture, and the implicit promise of wealth preservation through the customer’s emotional commitment to a phone call. This is the brand environment Grace’s website is being built into and against.

The website is the single load-bearing expression of Grace’s strategic differentiator. Grace publishes its 11.1% all-in spread on gold, before any phone call, on the homepage. It buys back at spot price with no markup. It refuses numismatic and “exclusive” coin upsells as a permanent published policy. It pays advisors a flat salary with no commissions. These four operational commitments cannot be matched by any incumbent without rebuilding the business model that funds their margins. The website is where those commitments either hold or crack. Every architectural, typographic, and visual decision in this brief resolves in favor of holding them.

### The audience

Grace’s primary audience is conservative Christian retirees, age 50 to 75, in the preservation phase of their financial life, with rollover assets typically in the $50K to $500K range. They have been marketed to by this industry for decades. They recognize the infomercial voice on arrival. They recognize the celebrity endorser, the fear-monger, the free-information-kit gatekeeper. They have either been burned by one of these voices already or know someone who has. A voice or a visual register that sounds or looks like more of the same is rejected before the content is read. The site is calibrated for them as the default reader.

The secondary audiences — existing Gold IRA holders considering a transfer, financial advisors and CPAs serving Christian clients, and conservative economic diversifiers reached primarily through Lane 4 — find what they need within the Segment 1 register rather than being addressed in their own. Writing primarily for Segment 1 and allowing other segments to find what they need is the safer default than writing for “everyone” and finding that nobody hears it.

### The voice that the visual must hold

Plain Counsel is the voice of a trusted pastor or family accountant who knows the numbers and does not hide behind them. Calm, pastoral, confident, plain-spoken. Faith-grounded without being sermonic. Precise. Short sentences. The visual register has to do the same job the voice does — it has to read as authoritative without performance, confident without swagger, warm without familiarity. Three failure modes the visual must refuse: drifting up into sermon (faith framing as decoration, scripture as argument, preachy register); drifting sideways into reassurance (qualifying, softening, comforting phrases that dilute specificity); drifting down into sales (urgency, manufactured contrast, infomercial register, category-default Gold IRA aesthetic).

Three governing tests apply to every visual decision in the brief. The Just Weight: visible, accurate, constant — would the design still be honest if a customer experienced what the page promised? The Golden Rule: could this design appear in a Gold IRA infomercial? If yes, refuse it. The Standing Test: would a credible economist roll their eyes? Would a 65-year-old church trustee raise an eyebrow? If yes, revise.

### The design posture

Grace’s design posture is editorial-finance, not category-default Gold IRA. The reference set for this brief is the Financial Times weekend edition, Stripe Press, Berkshire Hathaway shareholder communications, the editorial typography of serious institutional publications. It is not Augusta, Goldco, AHG, or Noble Gold. The category Grace operates in is precious metals; the visual register Grace borrows from is editorial finance. This distinction is load-bearing. A site that competently executes the category default would undermine the strategic positioning the rest of the company has built.

Five principles govern every page-level decision. Pricing is visible in the first screenfold of every pricing-adjacent page. The navigation respects the reader’s decision, not the funnel — four primary nav items reflecting the reader’s actual question, the advisor call available from every page. Faith framing is structural, not decorative — Proverbs 11:1 has an architectural place on the homepage and the William testimony page, and does not repeat on every subpage. Authority is earned by depth, not performed by badges — no unverified superlatives, no manufactured trust signals. Compliance is an architectural layer, not a footer afterthought — disclaimers and FTC disclosures and counsel review gates are built into the page templates and the publication workflow.

### The build context

This brief is written for Claude Code as the implementer of the initial build. That changes the brief’s structure. A brief written for a human designer can leave room for taste and interpretation; a brief written for Claude Code requires explicit specification — hex tokens, exact font weights, exact spacing values, exact component structure, exact responsive breakpoints, file paths, framework choice, accessibility specifications, content sources. The principle-based sections of this brief sit at the front for human review and validation; the build-ready specification sections sit deeper for Claude Code to execute against. The total document is one brief in two registers, addressed to two readers.

The build stack is locked. Next.js with the App Router as the framework, MDX for content, Tailwind plus a small custom token layer for styling, Source Serif 4 and Source Sans 3 via Google Fonts variable-weight loading, Klaviyo for email capture and Briefing PDF delivery, GA4 for analytics. Hosting decision is open and the build is target-agnostic. No CMS at launch — content lives as MDX in the repository and edits go through the build process. Ad pixels are out of scope at launch. The design system and the build specification have been planned to be forward-compatible with the deferred Today’s Price live spot display and the Round-Trip Cost calculator, both of which are post-launch.

### What success looks like

A 65-year-old conservative Christian retiree lands on the Grace homepage. Within five seconds, three things have happened. They have seen the published 11.1% spread without clicking. They have read a sentence in Plain Counsel voice that respects their intelligence. And they have noticed — possibly without articulating it — that this site does not look like every other Gold IRA company they have seen. The verse anchors the page; the price is not hidden; the photography of William is serious without being severe; the design quietly signals that the company behind it is not playing the game the category plays. The reader scrolls. They read William’s testimony. They calculate or read the round-trip cost. They book an advisor call, or download the Briefing, or both. They do not feel sold to.

That is the success criterion the rest of this document is in service of. Not that the site looks beautiful, though it should. Not that it converts, though it must. That a reader who has been marketed to by this industry for decades arrives, sees something different, and trusts what they see — because what they see is consistent with what the company claims, and because the design is itself an expression of the brand’s honesty rather than a decoration over it.

---

**SECTION 2**

## Audiences and conversion moments

The Grace website serves four distinct audiences, but it is calibrated to one of them as default. This section specifies who each audience is, what they see first when they arrive, where the friction is, and what conversion moment matters most for each. The visual system that follows is built to remove friction for the primary audience without breaking what the secondary audiences need.

### Segment 1 — Conservative Christian retirees (default)

Age 50 to 75. Preservation phase. Rollover assets typically $50K to $500K. Values stewardship, faith alignment, capital preservation, honest dealing, protecting family legacy. Their primary motivation is securing retirement savings against dollar debasement, policy risk, and exposure to an industry they do not trust. Their key objections are verbatim and well-documented: “How do I know you’re not just another scam?” “What’s the catch?” “Why is your spread higher than AHG’s 3-5%?” “How do I know you’ll still be around in 20 years?”

What they see first when they land on the homepage. The verse, the H1, the published spread, the William testimony preview. The first conversion moment is reading the published 11.1% without being asked for an email. That moment is structurally unprecedented in their experience of this category. Every other site has gated pricing behind a phone call; Grace has it on the homepage. The reader’s first reaction is recognition that something is different. The visual must support that recognition — it must not interrupt with infomercial cues, urgency, celebrity faces, or product shots.

The primary conversion moment for Segment 1 is the advisor call booking. A secondary conversion moment, equally important, is the Briefing download — the reader who is not yet ready to book a call but wants to study before committing. The Briefing landing page (Section 25) is built to receive that intent.

### Segment 2 — Existing Gold IRA holders (transfer lane)

Customers of Augusta, Goldco, AHG, Birch, Lear, Genesis, or smaller operators. They have already been burned and they know it. Their primary motivation is cost recovery. Their key objections are practical: “Is it worth switching?” “What’s the transfer process?” “Will I lose money on the move?”

The conversion moment for Segment 2 is the moment they request a custodian-to-custodian transfer from their current provider — because that request reveals their current provider’s buyback spread. Grace does not need to attack competitors; the competitor’s own numbers do the work. The site supports this segment with /rollover content explaining transfer mechanics, with the round-trip cost calculator (post-launch), and with William’s testimony as the trust bridge that lets them believe a different kind of operator exists.

### Segment 3 — Financial advisors and CPAs (referral lane)

Professionals who serve Christian clients and need a trustworthy Gold IRA referral partner. They are not the customer — their client is. Their primary motivation is protecting the advisor-client relationship by referring only to dealers whose practices will not damage the advisor’s professional reputation. Their key objections are liability-shaped: “What’s my exposure if my client has a bad experience?” “Do you provide fiduciary cover?” “What does your onboarding actually look like?”

This segment is reached through the /advisor section of the site (referenced in the v3.5 copy). The visual register here is the same as the rest of the site — Plain Counsel — but the content depth and technical specificity is calibrated upward. Inherited IRA mechanics, rollover edge cases, technical content that would lose Segment 1 holds Segment 3.

### Segment 4 — Conservative economic diversifiers (creator-network lane)

Conservative Americans without explicit Christian identity, reached primarily through Lane 4 (Aaron Randolph’s creator network) and through Lane 2 transfer messaging. Their primary motivation is economic concern about dollar devaluation, partisan policy risk to retirement accounts, distrust of mainstream financial institutions. They do not require faith framing but will not be repelled by it if it is restrained.

This segment lands on the homepage from creator-driven traffic and self-sorts into the same paths Segment 1 uses. The site does not need a separate landing experience for them; the Plain Counsel register is calibrated broadly enough that politically literate conservative readers find what they need within it.

### Cross-segment conversion architecture

The site is built so that any of the four segments can complete a conversion using the same primary surfaces — the homepage, the pricing page, William’s testimony, the advisor call. Segment-specific content lives at /rollover (Segment 2), /advisor (Segment 3), and within the Briefing PDF (multi-segment). The Briefing is the single highest-value lead-capture surface on the site — it gives a reader from any segment something substantial in exchange for an email, and it qualifies them by virtue of having been read.

The visual system supports this by being uniform across the four segments. There are no segment-targeted visual variants. The same homepage works for a 68-year-old church trustee and a 52-year-old advisor running due diligence on a referral partner. The Plain Counsel register is the calibration layer — it is rigorous enough to satisfy the advisor and warm enough to reach the trustee, in the same surface.

---

**SECTION 3**

## Category refusals

This section specifies what Grace’s website must not look like. Each refusal is named, the reason it is refused is explained, and the category-default expression of it is described so the implementer recognizes it. The refusals are non-negotiable. Anywhere the implementation drifts toward one of them, the design has failed and must be revised.

### Refusal 1 — The lead-capture-first homepage

Category default. The homepage hero is dominated by a free-information-kit form, a phone-prominent call-to-action, or both. Pricing is not visible. The implicit message is: “give us your contact information first, then we’ll tell you what you want to know.” Goldco, Birch, AHG, and Lear all run variants. Augusta runs the most polished version of it.  Grace refuses this absolutely. Pricing appears in the homepage hero. Email capture appears only on the Briefing landing page, where the email is exchanged for a substantive document the reader has chosen to read. The homepage does not have a lead-capture form.

### Refusal 2 — Celebrity-endorsement trust building

Category default. “As seen on Fox / Forbes / CNBC.” Joe Montana, Ben Shapiro, Bill O’Reilly, Mike Huckabee, Kevin Sorbo. Trust by association rather than trust by published behavior. The visual treatment is a logo bar of media outlets, sometimes a hero photograph of the celebrity, sometimes a pull-quote attributed to them. Noble Gold runs Kevin Sorbo and Dave Rubin testimonials prominently in their hero.

Grace refuses celebrity endorsements as a structural matter. There is no “as seen on” logo bar at launch. Marjorie Taylor Greene, even when contracted as ambassador, does not appear in the homepage hero or the primary nav. Her appearance is treated as an editorial pull-quote on the relevant supporting page, not as a primary trust signal. (Section 27 specifies the ambassador surfacing treatment in detail.)

### Refusal 3 — Aspirational-stock-couple lifestyle imagery

Category default. Older heterosexual couples on beaches, walking in parks, reviewing laptops at kitchen tables, smiling at each other. Soft golden-hour lighting. Shallow depth of field. Warm grade. The implicit promise is that the company’s product gets the reader to that state of retirement bliss. Augusta, Noble, AHG all use it. The model selection is narrow — affluent-coded white couples in casual-affluent dress.

Grace refuses the aspirational-stock register. Lifestyle imagery, where used, is documentary-editorial: people deciding rather than enjoying, contemplating rather than celebrating, with natural light and minimal retouching. (Section 10 specifies photography direction in detail.)

### Refusal 4 — Product fondling

Category default. Hero shots of stacked gold coins, gleaming bars, hands holding bullion, gold-bathed lighting. The implicit promise is tactile pleasure of ownership. Grace’s product is a financial commitment, not a tactile pleasure. Photographs of bullion may appear in technical educational content — explaining what an American Eagle is, what an LBMA-approved bar looks like — but never as hero imagery, never gold-bathed, never with hands holding the product, never in a way that implies the visual experience of ownership is the proposition.

### Refusal 5 — Manufactured urgency

Category default. Countdown timers, “limited time offers,” “act now,” “prices won’t last,” banner alerts about imminent crisis. Often paired with fear-based copy about dollar collapse, government confiscation, or imminent crash. Grace refuses both the urgency mechanic and the fabricated-fear framing it depends on. There are no countdown timers. There are no banner alerts. There is no “special offer” treatment. The price is the price; it is published and constant; the reader can take their time. The discipline is specified in Section 6 of the Tone of Voice document and applies to visual treatment as much as to copy.

### Refusal 6 — Trust-badge salad

Category default. BBB ratings, Trustpilot stars, Consumer Affairs ratings, Royal Canadian Mint logos, IRA-approved depository logos, all clustered as a visual trust block. The implicit message is “trust us because these third parties have rated us.” Most are weakly substantiated; some are pay-to-play; all dilute each other. Grace at launch does not display badge salad. Specific trust signals (Trustpilot reviews, BBB rating) appear when the brand has earned them, in their own surfaces, with the substantiation visible. The Reviews block is reserved for the time when actual reviews exist; until then it does not appear at all. Specifically named partner relationships (custodian, depository) appear once contracts are confirmed and only on the relevant compliance disclosure page.

### Refusal 7 — The shield, the lion, the heraldic frame

Category default. AHG’s lion-in-shield. Goldco’s gold coin medallion. The visual vocabulary of “strength, protection, heritage, institution.” Grace’s logomark is a balance scale because the brand is built on weight, fairness, and just dealing — not strength, protection, or heritage. The brief’s visual identity (Section 6) is committed to the scale; the implementer does not introduce shield, lion, eagle, crown, or castellated frame imagery anywhere in the site.

### Refusal 8 — Navy-and-gold corporate finance palette

Category default. Deep navy blue paired with bright corporate gold. The palette of Augusta, Goldco, AHG, and most of the institutional banking sector. Grace’s palette is cream and warm muted gold, with walnut and warm dark for anchoring. The brief is committed to this palette absolutely (Section 7). Navy does not appear anywhere in the site. The implementer does not introduce blue tones, even as a secondary accent, even in data visualization, even in error states. Section 17 specifies the warm-grounded palette extensions for semantic states.

### Refusal 9 — Generic stock-photo register

Category default. The same stock photographs that appear on every financial-services site — the smiling older couple looking at a phone, the handshake across a table, the pen poised over a contract, the woman in glasses looking at a laptop, the upward-trending stock chart. These photographs have been viewed by every member of the target audience hundreds of times in other contexts. They signal nothing. They communicate “this is a generic financial services brand.” Grace’s photography (Section 10) is documentary-editorial in register and audience-mirroring in subject — but never the same photographs that appear on Augusta’s site, AHG’s site, or any retail bank’s homepage.

### Refusal 10 — Pop-ups, exit-intent modals, chat-bot launchers

Category default. The reader scrolls; an exit-intent modal interrupts them with “wait, before you go!” A chat bubble in the bottom-right corner pops up unprompted offering a salesperson. A subscription modal blocks the article they’re reading. Grace refuses all interruption patterns. There is no exit-intent modal. There is no unprompted chat bubble. There is no email-subscription pop-up. The reader navigates, reads, decides. The site does not chase them.

---

**SECTION 4**

## Editorial register

If Section 3 specifies what Grace must not look like, this section specifies what Grace must look like. The reference set is editorial-finance, not category Gold IRA. Five reference points govern the visual register; each is named with its specific contribution; the implementer reads them as the standing comparators when making any design decision.

### Reference 1 — Financial Times weekend edition

Specifically the FT Weekend Magazine and the House & Home section. What to take from it: serious editorial typography (a strong serif for display, a clean sans for body), generous whitespace that lets content breathe, hairline rules that organize hierarchy without weight, a willingness to leave the page quiet when the content does not need decoration, an implicit register of “we are confident enough to not perform.” What to leave: the salmon-pink branding (does not apply to Grace), the dense advertising context (Grace’s site is content-only).

### Reference 2 — Stripe Press

The publishing imprint. Specifically the book pages and the press.stripe.com homepage. What to take from it: confident editorial book design applied to digital surfaces, restrained color (almost none, against off-white), substantial display serif for titles paired with sober sans for metadata, hairline structural rules, photography that is documentary in register and never aspirational. What to leave: the slight brutalist edge of some Stripe Press pages (too cool for Grace’s pastoral warmth).

### Reference 3 — Berkshire Hathaway shareholder communications

The annual letters specifically. What to take from it: the implicit register of “the substance is the marketing.” Plain prose, no decorative typography, no marketing flourish, total confidence in the proposition. The signal is that the writer trusts the reader and the writer trusts the substance, so the design does not need to compensate for either. What to leave: the look is austere to the point of being plain (Grace can be warmer); the format is essentially typewriter-style (Grace is more typographically considered).

### Reference 4 — The Browser, Pirate Wires, Stratechery (newsletter typography)

Long-form newsletters that have figured out how to make digital editorial reading feel substantial. What to take from it: serious editorial typography on the web, restrained color (mostly black on white), photography used sparingly and never for decoration, the entire design serving the prose rather than competing with it. What to leave: the newsletter format itself (Grace is a multi-page site, not a single column of text).

### Reference 5 — World Magazine, Christianity Today (faith-editorial)

Specifically the print publications and their digital versions. What to take from it: how serious faith-grounded publications integrate scripture, faith identity, and editorial register without drifting into sermonic or kitsch territory. The faith content is held with the same editorial standard as the rest. Not every page needs a Bible verse; not every photo needs a cross. The faith identity is structural, not decorative. What to leave: the conservative-American visual conventions that some Christian publications retain (heavy serifs, clip-art ornamentation, dated layout). Grace pulls the editorial seriousness, not the visual conservatism.

### What this register does for Grace

These five references are not aesthetic targets to copy; they are register calibrators. They establish that Grace is built in the editorial-finance world, not the Gold IRA world. The implementer, when faced with an ambiguous design choice, asks: which of these five references would handle this the same way? If the answer is none, the choice is probably wrong. If the answer is one or more, the choice is on register. The reference set deliberately spans secular and faith-grounded publications, financial and editorial, print and digital — because Grace lives at the intersection of all of those. The visual register lives there too.

---

**SECTION 5**

## Voice-to-visual

This is the most important section of Part One. It specifies how Plain Counsel — the brand voice — translates into visual properties. Without this section, the design system risks producing what the handover document warned about: “technically correct but flat” output that meets every spec and still fails to feel like Grace. Plain Counsel is the load-bearing identity. The visual system either expresses it or it does not.

### What Plain Counsel sounds like

“Plain Counsel is the voice of a trusted pastor or family accountant who knows the numbers and does not hide behind them. Calm. Pastoral. Confident. Plain-spoken. Faith-grounded without being sermonic. Precise. Short sentences. The voice treats the reader — typically a 50-to-75-year-old Christian retiree — as an adult capable of handling the truth. It does not flatter, inflate, warn, or hustle. It states facts, shows the weight, and invites verification.” (Tone of Voice document, Section 2.)

### What Plain Counsel looks like

Each property of the voice maps to a specific visual property. The mapping is the operational tool the implementer uses when deciding any design question. When a design choice is ambiguous, the question is: “what does this property of Plain Counsel demand visually here?”

#### Calm → still

Calm voice translates to still visual. No animation that performs. No parallax. No scroll-triggered reveals. Hover states are subtle (color shift, not movement). Page transitions are immediate or near-immediate. The site does not move when the user does not move. The signal is: the brand is not anxious to keep the reader’s attention. The brand has earned attention through substance and trusts the reader to give it.

#### Pastoral → warm-grounded

Pastoral voice translates to warm color and warm typography. The cream canvas, the warm muted gold, the walnut accents, the warm near-black ink — all chosen specifically to read warm rather than corporate-cold. The serif at display sizes carries warmth that geometric sans-serifs cannot. The pastoral register is what differentiates Grace from Stripe Press (which is editorial-cool) and from FT (which is editorial-corporate). Grace lives one step warmer.

#### Confident → restrained

Confident voice translates to restrained design. Confidence does not need decoration. Confidence does not need flourish. The site uses very little color (the palette is small and disciplined), very little typographic variation (two families, eight type tokens), very little animation, very little ornament. What appears on the page is there because it is required. The signal is: the brand has nothing to hide and nothing to perform.

#### Plain-spoken → unornamented

Plain-spoken voice translates to unornamented composition. No drop caps. No decorative dividers. No illustration as decoration. No icon decoration that doesn’t serve a function. Every visual element on the page either communicates information or organizes hierarchy. Decorative-only elements are removed.

#### Faith-grounded → architecturally placed

Faith-grounded voice translates to architectural placement of faith content. Proverbs 11:1 has a designated visual treatment (Section 9) and three architectural placements (homepage hero band, William testimony page, who-we-are page). It does not appear in every header. It does not appear in every footer. It does not appear as a watermark. The faith identity is carried by the three architectural placements; surface repetition dilutes the weight.

#### Precise → typographically considered

Precise voice translates to typographically considered design. Type sizes follow a defined scale, not arbitrary values. Spacing follows an 8px grid, not eyeballed values. Numerals appear in tabular figure mode in pricing displays so columns align. The site has been thought through; the design shows the thought.

#### Short sentences → short measure

Short sentences translate to short measure. Body prose is constrained to 640px wide regardless of viewport. Lines are 65-75 characters at desktop. The reader does not lose their place. Sentences and lines have the same rhythm; both are short, both are clear, both respect the reader’s eye.

### The strip-the-logo test

The single governing test for this brief’s success: if the Grace logo were stripped from any page on the site, would the reader still know it was Grace? The test asks whether the brand identity is held by the design system itself, or whether the logo is doing all the work. The five references in Section 4 each pass this test — their pages are recognizable as their pages even with the masthead removed. Grace must pass it too. If a page in the live site fails the test, the design system has not yet expressed Plain Counsel; it has only carried the logo.

This test is the implementer’s standing question when reviewing any page. Strip the logo. Look at what remains. Does it still feel like a faith-grounded, editorial-finance, plain-spoken, restrained brand? If yes, the page holds. If no, something needs to change.

---

**PART TWO**

## Brand identity sub-spec

Six sections specifying the brand identity at a level that could survive being lifted out of this document and used for non-web applications — print, signage, conference backdrops, event collateral. The implementer treats these sections as authoritative for any visual identity decision, on or off the website.

---

**SECTION 6**

## Logomark and brand mark usage

### 6.1 The lockup — specification

The Grace Precious Metals lockup is horizontal. A balance scale mark sits to the left of a two-line wordmark. The mark, the wordmark, and the rule between the two wordmark lines together constitute the locked logo. Each element is specified below.

#### The balance scale mark

A drawn balance scale, classical proportion, viewed in elevation. Horizontal beam, central upright, hanging arms with pans suspended on each side, level base. Filled gold pans (triangular geometry, not bowl-shaped); deep gold beam, upright, base, and finial; muted gold inner detail (the suspension lines from beam to pans). The mark stands free — no enclosure, no medallion, no shield, no frame.

Production geometry: the mark is constructed within a 86×86 unit grid. The beam is 50 units wide, centered horizontally. The upright sits at the horizontal center of the grid. The pans sit symmetrically left and right, 22 units wide each. The finial is a small filled circle at the top of the upright. The base is a horizontal beam at the bottom of the upright, 18 units wide. The mark is rendered in two-color: deep gold #B8962E for the structural elements (beam, upright, base, finial); muted gold #C9A96C for the suspension lines and the pan fills. Production-quality drawing requires a designer; the SVG approximation in the implementation phase is direction-only.

> **FLAG:** *Production logo redrawing is an open decision. The brief specifies geometry and color; final production-grade artwork is a designer task. Implementer should use the SVG approximation in tokens.ts as the placeholder until production artwork is delivered. See Section 38.*

#### The wordmark

Two lines. Top line: “Grace” in Source Serif 4, weight 500, size 38px at the standard lockup application size, color muted gold #C9A96C, letter-spacing 0.02em. Bottom line: “PRECIOUS METALS” in Source Sans 3, weight 500, size 11px at standard lockup application size, color body ink #1F1B16, letter-spacing 0.32em (small caps register), uppercase.

Between the two lines: a hairline rule, 0.5px, in deep gold #B8962E, 140px wide at standard lockup application size, sitting 6px below the baseline of “Grace” and 6px above the cap-height of “PRECIOUS METALS.” The rule is the structural tie; without it, the two lines float.

#### Mark-to-wordmark relationship

The mark sits to the left of the wordmark with a 24px gap. The mark and the wordmark are vertically centered against each other — the vertical midpoint of the mark aligns with the vertical midpoint of the wordmark. The mark scales proportionally with the wordmark: at standard lockup size (Grace at 38px), the mark is 64px tall; at smaller sizes, both scale together preserving the 24px gap and the vertical centering.

### 6.2 Clear space

The minimum clear space around the lockup, on all four sides, is the height of “Grace” in the wordmark. At the standard lockup size (Grace at 38px), clear space is 38px on each side. Nothing else — text, image, line, edge of canvas, navigation element — may sit within that clear space. This rule is non-negotiable and applies to every application of the logo, on and off the website.

### 6.3 Minimum size

The lockup may not be reproduced at a size where “Grace” is below 16px in height (digital) or 8mm (print). At those sizes, the small-caps subtitle “PRECIOUS METALS” becomes illegible. Below the minimum size, use the favicon-mark variant (Section 6.5) instead.

### 6.4 Color variants

Three locked variants. The implementer may not produce other variants without sign-off.

#### Variant A — Cream canvas (default)

Mark in deep gold structural elements + muted gold inner. Wordmark “Grace” in muted gold #C9A96C. Rule in deep gold #B8962E. Subtitle “PRECIOUS METALS” in body ink #1F1B16. This is the default lockup; appears in the homepage nav, in the footer, on /briefing, in any cream-canvas application.

#### Variant B — Dark canvas (reverse)

Mark in muted gold throughout (no two-tone; the contrast against dark renders the structural-vs-detail distinction redundant). Wordmark “Grace” in muted gold #C9A96C. Rule in muted gold #C9A96C. Subtitle “PRECIOUS METALS” in canvas cream #F2EDE0. This is the reverse colorway; appears on dark-canvas applications, video lower-thirds, sponsor logo placements, and any application below 120px wide where contrast against cream is insufficient. The brief mandates use of Variant B for favicon, mobile collapsed nav, business card, and any small-format application where the cream-canvas Variant A would fail the legibility test.

#### Variant C — Single-color emergency

For applications where two-color reproduction is impossible (single-color print, fax, low-fidelity reproduction): the entire lockup in body ink #1F1B16, on cream or white background. This is an emergency variant only; it should not be used where Variant A is achievable.

### 6.5 Favicon and small-format mark

For favicon and other small-format applications, the wordmark portion of the lockup does not reproduce legibly. Use the mark alone, with optional letter-mark fallback.

#### Mark-only favicon

The balance scale mark, rendered at 32×32px or 16×16px, in deep gold #B8962E on dark canvas #2D2620 (Variant B colorway). The favicon is provided as both a 32×32 PNG and a 16×16 PNG, plus an SVG for modern browsers.

#### Letter-mark fallback

Where the scale mark does not reproduce legibly at small sizes (e.g., social media avatars where the round-crop hides the upright), use a letter-mark: a single “G” in Source Serif 4, weight 500, in muted gold #C9A96C on dark canvas #2D2620. The letter-mark is the secondary small-format identity; it is not used at sizes above 64×64px.

### 6.6 What not to do

- Do not place the mark above the wordmark (stacked lockup is not in the system)
- Do not place the mark inside an enclosure (no shield, medallion, hexagon, or frame)
- Do not change the colors of the lockup outside the three variants specified
- Do not stretch, skew, rotate, or otherwise distort the lockup
- Do not place the lockup over a busy photograph or pattern that compromises legibility
- Do not introduce a tagline below the lockup (“A just weight is His delight” is not part of the logo; it lives in the verse band)
- Do not animate the lockup on page load
- Do not introduce a third color into the wordmark (e.g., gold “G” with dark “race”)

---

**SECTION 7**

## Color system

Seven roles. Each color has one purpose and one only. The discipline of this section is what gives the brand its visual coherence. The colors themselves are unremarkable; the discipline of their use is what produces the editorial register Grace requires.

### 7.1 The seven roles

| Role | Hex | Use |
|---|---|---|
| Canvas | #F2EDE0 | Page background. Neutral warm cream. The default surface the entire site sits on. |
| Surface | #E8E2CC | Cards, panels, William testimonials band, secondary surfaces that need to read as raised off the canvas. |
| Body ink | #1F1B16 | Body copy and primary text. Warm near-black, designed for legibility at body sizes. |
| Display ink | #2D2620 | Headings and display type. Slightly softer than body ink for visual hierarchy without harsh contrast. |
| Primary gold | #C9A96C | Muted gold. Rules, eyebrows, supporting accents, the wordmark. The everyday gold. |
| Deep gold | #B8962E | Reserved use only. Verse band rule and eyebrow, wordmark hairline rule, key numerals (“11.1%”, currency figures). |
| Walnut | #3B342A | Primary CTA backgrounds, refusal block left rules, structural emphasis blocks. |

### 7.2 Supporting tints

Two supporting tints handle hover states, table stripes, and disabled states. They are not part of the seven primary roles but are required for the system to function.

| Role | Hex | Use |
|---|---|---|
| Canvas deep | #F8F5EB | Hover state on cream surfaces. Table row stripes. Slightly cooler than canvas but not enough to read as different. |
| Border light | #D5CDB6 | Card edges, form field borders, hairline component borders. Defines components without weight. |

### 7.3 Semantic colors for state

The site needs colors for error states, success states, and warning states. The category-default convention (red for error, green for success, amber for warning) collides with the warm-grounded palette — a saturated red on cream reads as alarming, which is the wrong register for Grace. The semantic colors are warm-grounded variants.

| State | Hex | Notes |
|---|---|---|
| Error | #A03A28 | Warm rust red. Used for form validation errors and critical states. Less alarming than pure red, still legibly an error. |
| Success | #5C7A3E | Warm olive green. Form submission success and positive confirmation. Faded enough to not jar against the cream canvas. |
| Warning | #A07028 | Deep amber. Caution states. Sits adjacent to deep gold but distinct enough to read as warning rather than accent. |
| Info | #4A4239 | Warm dark. Used for informational asides and helper text. Effectively a softer body ink. |

### 7.4 Reserved tokens for deferred features

The post-launch live spot price display and the round-trip cost calculator will need data-state colors for positive movement, negative movement, neutral, and emphasis. These are reserved now so the calculator can be built post-launch without reopening the design system. The values resolve to existing palette colors:

- --gpm-data-positive resolves to muted gold #C9A96C (price moving up)
- --gpm-data-negative resolves to walnut #3B342A (price moving down)
- --gpm-data-neutral resolves to body ink #1F1B16 (no change)
- --gpm-data-emphasis resolves to deep gold #B8962E (key figure)

The deliberate choice not to use red for negative price movement is brand-defining. Red would import the panic-register from financial news; walnut keeps the data presentation calm and editorial.

### 7.5 Accessibility — contrast ratios

The implementer must verify the following contrast ratios at build. Any deviation indicates a token mismatch and must be fixed before launch.

Values below are measured against the actual canonical hex tokens (sRGB, WCAG 2.1 relative-luminance formula). Patched 2026-04-28 — the prior table overstated several pairings, most materially the deep-gold-on-cream value, which the original table reported as 3.4:1 but measures as 2.41:1.

| Combination | Ratio | Standard |
|---|---|---|
| Body ink #1F1B16 on canvas #F2EDE0 | 14.65 : 1 | AAA body text |
| Display ink #2D2620 on canvas #F2EDE0 | 12.74 : 1 | AAA body text |
| Cream #F2EDE0 on walnut #3B342A | 10.50 : 1 | AAA body text |
| Body ink #1F1B16 on surface #E8E2CC | 13.19 : 1 | AAA body text |
| Walnut #3B342A on canvas #F2EDE0 | 10.50 : 1 | AAA body text |
| LinkArrow resting #9C7322 on canvas #F2EDE0 | 3.67 : 1 | Clears 3:1 (UI components / large text) |
| LinkArrow hover #7E5C10 on canvas #F2EDE0 | 5.24 : 1 | AA body text |
| Deep gold #B8962E on canvas #F2EDE0 (numerals only) | 2.41 : 1 | FAILS AA / AA Large — reserved for decorative use only |
| Muted gold #C9A96C on canvas #F2EDE0 (decorative only) | 1.92 : 1 | FAILS body, fails AA Large |

The muted gold against cream fails accessibility for any text use. This is why muted gold is reserved for decorative rules, eyebrows above sections, and the wordmark — contexts where legibility of fine detail is not load-bearing. Body copy, headings, button text, and form labels never appear in muted gold on cream.

Deep gold #B8962E was previously documented as clearing AA Large at 3.4:1; the corrected measurement (2.41:1) means it does not clear AA Large either. Deep gold remains in service as the verse-band rule and eyebrow color, the wordmark hairline, and the inline-pricing pull-out for "11.1%". In those positions it is decorative or large-display rather than load-bearing body text. Where an inline gold link sits in body prose — the LinkArrow component's resting state — the brand uses #9C7322 instead, which clears 3:1 with margin.

---

**SECTION 8**

## Typography system

Two families. Source Serif 4 for display and editorial use. Source Sans 3 for body, UI, and supporting text. Both load via Google Fonts as variable fonts in a single request — a meaningful performance win over loading static weight files separately.

### 8.1 The two families — rationale

Source Serif 4 is an editorial serif with warm but disciplined letterforms. It carries the gravity Grace needs for the verse, the headlines, and the testimony pull-quotes. Its terminals are softer than knife-cut modern serifs (Didone, modern grotesque), which keeps it pastoral rather than sharply institutional. It is open-source under the SIL Open Font License, available freely on Google Fonts, and supported by every modern browser.

Source Sans 3 is the companion sans-serif from the same foundry (Adobe, originally drawn by Paul Hunt). Its proportions and warmth match Source Serif at body sizes — they read as members of the same family rather than as awkwardly paired strangers. It is highly legible at body sizes for older readers, which is the load-bearing constraint for Segment 1. Same open-source license, same delivery.

The free-license decision was made deliberately at the foundation stage. Premium typography (GT Sectra plus Söhne) would land slightly sharper and more confident, but the marginal brand benefit is small relative to the licensing cost of £300 to £1,000 for typeface licenses covering web, both weights, and the unlimited-pageviews tier. The Source family delivers a defensible editorial-finance register at zero ongoing cost.

### 8.2 Loading strategy

In app/layout.tsx, both families load via next/font/google with display: 'swap'. Variable axes for Source Serif 4 are weight (300 to 900) and italic. For Source Sans 3, weight (200 to 900). The font-display strategy is swap so text renders immediately in the system fallback while the web font loads. Subsetting is restricted to latin to minimize file size; Grace’s content is American English and does not require extended subsets.

The implementation stores both families as CSS custom properties (--font-serif, --font-sans) on the body element via Next’s variable system. Component code references the variables, not the imported font directly. This keeps the typography system token-driven and consistent with the rest of the design system.

### 8.3 The eight type tokens

Eight type tokens cover every text use case in the system. Each is a complete unit — family, size, weight, line-height, tracking. The implementer does not modify any axis of a token without sign-off. Type sizes are at desktop breakpoint; mobile breakpoint scales display-xl to 44px, display-lg to 36px, h2 to 24px, h3 to 20px; body sizes hold.

| Token | Specification | Use |
|---|---|---|
| text-display-xl | Source Serif 4 / 72 / 400 / 1.05 / -0.02em | Hero verse only |
| text-display-lg | Source Serif 4 / 56 / 500 / 1.1 / -0.015em | H1 standard pages |
| text-h2 | Source Serif 4 / 32 / 500 / 1.15 / -0.005em | Section headers |
| text-h3 | Source Serif 4 / 22 / 500 / 1.3 / 0 | Subsections, card titles |
| text-body-lg | Source Sans 3 / 18 / 400 / 1.6 / 0 | Lead paragraphs |
| text-body | Source Sans 3 / 16 / 400 / 1.65 / 0 | Body copy default |
| text-body-sm | Source Sans 3 / 14 / 400 / 1.6 / 0 | Captions, small body |
| text-eyebrow | Source Sans 3 / 11 / 500 / 1 / 0.22em uppercase | Section eyebrows |
| text-quote | Source Serif 4 / 19 / 400 italic / 1.5 / 0 | Pull-quotes |

### 8.4 Tabular figures for pricing

All numeric content related to pricing — the 11.1% spread, the round-trip cost, currency figures, percentage figures — must use tabular figures (font-feature-settings: 'tnum'). This ensures numerals align in columns when displayed in tables or stacked formats. Source Sans 3 supports tabular figures; the implementer applies the OpenType feature setting to all pricing-display containers via a Tailwind utility class (class=“tabular-nums”).

### 8.5 Italic usage

Italic is reserved for three uses. First: scripture quotations and the verse itself. Second: pull-quote text in the William testimony band, the William testimony page, and any in-line testimony. Third: editorial emphasis in body prose, used sparingly. Italic is not used for general decoration, for captions, for image attribution, or for navigation. The pull-quote default for the William band uses italic; the regular voice does not.

### 8.6 Forbidden typography moves

- All caps body text or all caps long headings (the 22% letter-spaced eyebrow at 11px is the only all-caps register on the site)
- Drop caps (decorative-only, fails the unornamented test)
- Decorative typography for marketing emphasis (no script fonts, no display faces beyond Source Serif 4, no decorative fontstack)
- Underlined body text outside of links
- Italic on long paragraphs (italic is for emphasis or quotation; long-form italic is unreadable)
- Mid-paragraph weight changes (bold within sentences, except for very specific use cases like inline pricing emphasis)
- Multi-color type within a single sentence (the deep-gold “11.1%” inline emphasis is the one exception)

---

**SECTION 9**

## Proverbs 11:1 visual treatment

The verse is the architectural anchor of the brand. Its visual treatment is specified in detail because the verse appears in three load-bearing surfaces (homepage hero, William testimony page, who-we-are page) and the treatment must be consistent across all three. The implementer treats this section as authoritative for any verse-band rendering.

### 9.1 The lockup

Three elements, vertically stacked. The eyebrow citation, the verse itself, the structural rule above the eyebrow. No fourth element.

#### Element 1 — Structural rule

A 24px-wide horizontal hairline rule, 0.5px, in deep gold #B8962E, sitting above the eyebrow citation with 16px clear space below it. This rule signals the start of the verse band and establishes its architectural status. Position: aligned to the left edge of the eyebrow text below.

#### Element 2 — Eyebrow citation

The text “Proverbs 11:1” in Source Sans 3, weight 500, 11px (text-eyebrow token), uppercase, letter-spacing 0.22em, color deep gold #B8962E. Sits 16px below the structural rule and 24px above the verse text.

#### Element 3 — The verse

The text “A just weight is His delight.” in Source Serif 4, weight 400, 72px at desktop (text-display-xl token), line-height 1.05, letter-spacing -0.02em, color display ink #2D2620. The word “His” is set in italic at weight 500 to mark the divine pronoun — a typographic emphasis honoring the verse’s subject without ornamentation. Mobile breakpoint scales the verse to 44px while preserving the italic-emphasis on “His.”

> **FLAG:** *The italic emphasis on 'His' in the verse is currently retained pending William's call. If William prefers a clean 'A just weight is his delight' without divine-pronoun emphasis, the italic is stripped. Implementer should make this controllable via a single config flag in the VerseBand component. See Section 38 open decisions.*

### 9.2 The three architectural placements

The verse appears in three locations and only three. The implementer does not introduce a fourth without sign-off.

#### Placement 1 — Homepage hero band

The verse band sits at the top of the homepage above the H1. Background is canvas cream #F2EDE0; the verse band has no separate background or surface treatment. Vertical padding 64px top, 32px below the verse before the H1 begins. Maximum width of the verse text container is 720px to allow the 72px serif to breathe.

#### Placement 2 — William testimony page hero

The verse appears in the same configuration on the /williams-story page hero, as the architectural anchor of William’s narrative. Same lockup, same scale, same color treatment.

#### Placement 3 — Who-we-are page

The verse appears on the /who-we-are page at the founding-principles section, again in the same configuration. The repetition across the three placements is deliberate; the verse is the anchor and its consistent treatment establishes architectural rhythm across the site.

### 9.3 Where the verse does NOT appear

- Not in the site footer (the footer carries the standard disclaimer; faith framing is structural, not decorative)
- Not in page headers other than the three architectural placements
- Not as a watermark on any background
- Not in email templates (the email signature uses a single-line attribution to Proverbs 11:1, not the verse itself)
- Not on social-media OG images or favicons
- Not as decoration anywhere

Surface repetition dilutes the weight. The three architectural placements carry the brand’s faith identity. Other surfaces carry the brand’s operational identity. The two are kept architecturally separate.

---

**SECTION 10**

## Photography and art direction

This section specifies photographic register for the entire brand. Three categories of photography are addressed: William’s portrait (the single most load-bearing image on the site), lifestyle imagery (audience-mirroring photography on supporting surfaces), and supporting still imagery (objects, environments, faith-coded settings). Each category has direction, refusals, and source-pathway specification.

### 10.1 William’s portrait — the load-bearing image

William’s portrait is the single highest-conversion image asset on the Grace website. It appears in the William testimony band on the homepage, on the /williams-story page hero, in the /who-we-are leadership section, and across collateral. The portrait has more conversion weight than any other piece of imagery on the site — William’s pastoral testimony is Grace’s primary trust signal, and the portrait is its visual anchor.

#### Direction — register

Documentary-editorial. Not corporate-headshot, not stock-pastor, not stock-salesman. The reference set is: Magnum Photos portraits, the New York Times Magazine cover portraits, the long-form profile photography in Christianity Today and World Magazine. The portrait should look like it was made for a serious editorial feature, not for a financial-services brochure. It should not look retouched.

#### Direction — subject

William, dressed plainly. A simple shirt, possibly a sweater, no tie. Grooming present but not styled. He looks at the camera or just past it. His expression is serious but not severe — the expression of a man who has thought about hard things and arrived at a position. Not smiling for the camera; not frowning. Composed and present.

#### Direction — setting

A real environment. Possibilities: William’s church, a home study with books visible, a quiet outdoor location with natural texture (a wooden fence, a stone wall). The setting should not be a corporate studio or a generic stock-style background. The setting should signal the kind of life William has — pastoral, considered, rooted in place.

#### Direction — light and grade

Natural light wherever possible. Soft, directional, not flat. The grade is warm but not amber-overpushed; the cream canvas of the brand carries warmth, so the photograph should sit naturally against it without being color-pulled to match. Slight detail in the shadows preferred over crushed shadow blacks. Slight texture preferred over hyper-clean retouching.

#### Direction — framing

The William testimony band on the homepage uses a 1:1 square crop at small size (96px in current design). The /williams-story hero uses a wider crop, possibly 4:5 or 3:2, at larger scale. The portrait is shot in a way that allows multiple crops without compromising the composition — the photographer should know they’re shooting for both a small square and a larger landscape.

#### Refusals — William’s portrait

- Not a posed studio headshot against a seamless backdrop
- Not retouched to remove lines, age signals, or skin texture (William is a pastor; he should look like one)
- Not a smile-for-the-camera shot (corporate bio register)
- Not photographed wearing a suit (too formal; suggests financial-services rather than pastoral)
- Not photographed in a Gold IRA or precious-metals context (no shots of him near gold, in a vault, with bullion in frame)
- Not photographed with stock church imagery (no stained glass, no pulpit, no overt church-set decoration)
- Not at a reading-the-Bible-thoughtfully posed shot (precious; staged)

> **FLAG:** *William's portrait commissioning is an open decision. Photographer not yet selected. Brief specifies register and refusals; production direction (specific photographer, location, day-rate, model release, usage rights) is a CMO/founder decision pre-launch. See Section 38.*

### 10.2 Lifestyle imagery — supporting audience-mirror

Lifestyle imagery appears on supporting surfaces: rollover process explanation pages, segment-specific landing experiences, testimonial supporting visuals, and certain content-marketing surfaces. The imagery is audience-mirror — the Segment 1 reader sees themselves in the people pictured — but it is held to a stricter register than the category default.

#### Direction — register

Documentary-editorial, as with William’s portrait. The reference set is the lifestyle photography in serious editorial weekend magazines (FT Weekend, WSJ Weekend, NYT Magazine), not the stock photography on Augusta’s site. Photographs should look like real moments rather than stock-couple moments.

#### Direction — subject and activity

Older adults and couples in the 50-75 range, audience-mirror. Variation in race, family configuration, socioeconomic register — not exclusively white affluent heterosexual couples. Activities are contemplative rather than celebratory: reading, talking, thinking, listening, discussing. People look at documents, talk to spouses, listen to advisors, sit with each other. Faith-coded subtly — a Bible visible on a coffee table in some shots, a small cross on a wall in others, a church bulletin on the kitchen counter — but never screaming faith.

#### Direction — source pathway

At launch, source from premium documentary-leaning stock libraries (Stocksy, Death To Stock, Offset, Trunk Archive) rather than the volume-stock libraries (Getty iStock, Shutterstock, Adobe Stock) where every other Gold IRA company sources their imagery. Premium libraries are roughly 3-5x the cost per image but the resulting visual differentiation is meaningful. Specific image selection is deferred to post-build review against the live site (Section 38).

#### Refusals — lifestyle imagery

- Not aspirational future-state imagery (no beach scenes, no “the perfect retirement” fantasy)
- Not the same retouched stock-couple register Augusta and Noble use (golden-hour, soft focus, perfect smiles, posed connection)
- Not narrowly demographic-coded (the audience-mirror principle includes variation in race and family configuration)
- Not product-fondling (no people holding gold, looking at gold, examining bullion)
- Not anxious or fearful imagery (no stressed faces, no head-in-hands, no “worried about retirement” stock)

### 10.3 Supporting still imagery

Object photography appears in technical educational content, on the pricing page, in the Briefing PDF, and on certain pillar-hub pages. The register is editorial-still — quiet, considered, well-lit, documentary-style.

#### Direction

The objects are: a leather-bound Bible on a wooden surface, a vintage balance scale on a desk, a pocket watch, a fountain pen, a ledger, an hourglass. The register is the editorial-still photography of the Wall Street Journal’s Mansion section or the FT’s Weekend section — specific objects, beautifully photographed, in natural light, with restraint. The objects carry the brand’s themes (weight, time, stewardship, faith) without being decorative.

#### Bullion — a specific exception

Bullion may appear in technical educational content — specifically on pages explaining what an American Eagle coin is, what an LBMA-approved bar looks like, what IRS-eligible bullion specifications are. In those contexts, bullion is photographed specimen-style: a single coin or bar on a neutral surface, even lighting, no gold-bath glow, no hands holding it. The treatment is documentary-educational, not aspirational. Bullion does not appear as hero imagery anywhere on the site.

---

**SECTION 11**

## Data visualization in Grace's voice

Grace’s site contains pricing data, comparative figures, and (post-launch) live spot prices and round-trip cost calculations. The visualization of that data is a brand surface in its own right. The category default — red-and-green panic charts, animated line graphs, ticker bars across the homepage — imports a register Grace cannot use. This section specifies how Grace visualizes data without drifting into financial-news theater.

### 11.1 The pricing display — specification

The pricing display is the most important data surface on the site. It appears in the homepage hero, on the pricing page, on the rollover page, and inline in body copy throughout. The treatment is constant; it does not vary by surface.

#### The 11.1% pull-out

Inline in body prose, the figure “11.1%” is set in deep gold #B8962E at weight 600 in the surrounding sans-serif. The increased weight and the color shift make the number register as the salient figure without requiring decorative treatment. The surrounding prose is in body ink #1F1B16 at weight 400. No ornamentation around the number. No box, no underline, no asterisk.

#### The pricing-block component

Where the pricing is displayed in a dedicated block (pricing page, top of rollover, post-launch calculator), the structure is: eyebrow label (“Our spread on gold” in text-eyebrow), the figure (“11.1%” in Source Serif 4 at 88px display, weight 500, deep gold #B8962E, tabular figures), supporting copy below (“All-in. No admin fee, no setup fee. Buyback at spot.” in body sans). No card surface, no border, no shadow. The block sits on canvas with generous vertical whitespace above and below.

### 11.2 The comparative pricing table

Grace’s competitive position depends on the reader being able to compare round-trip costs. Where comparative data is displayed (pricing page, Briefing landing’s preview content, certain pillar-hub articles), the table is structured as follows.

#### Specification

Header row: text-eyebrow style, deep gold #B8962E, uppercase. Body rows: body sans, 14px, body ink #1F1B16. Row dividers: 0.5px solid #D5CDB6 (border-component token). No vertical column dividers. Row hover state: background tint to canvas-deep #F8F5EB. Numerals tabular-nums. Table-wide caption above the table in text-eyebrow.

#### Compliance constraint

The comparative pricing table never names a competitor by name in published marketing surfaces (per Tone of Voice Section 4 and Brand DNA Section 7). Comparative data is presented at category level: “Typical industry round-trip cost,” “Grace round-trip cost,” “Documented predatory cases.” Specific competitor names appear only in internal sales-floor materials, not on the website. The implementer treats this as a hard constraint.

### 11.3 The live spot price display (post-launch)

The /pricing/todays-price page displays the live gold spot price. The treatment must avoid the ticker-bar visual register that imports the panic-news aesthetic from financial channels. Specification:

- Static layout, not a horizontally scrolling ticker
- Single price displayed in Source Serif 4 at 64px, body ink #1F1B16, with the change indicator inline in tabular figures
- Price-up uses muted gold #C9A96C; price-down uses walnut #3B342A; price-unchanged stays body ink. No red, no green
- Refresh rate: every 60 seconds, with a visible last-updated timestamp
- No animation on price refresh — the value updates in place, no flicker, no transition

### 11.4 The round-trip cost calculator (post-launch)

The /pricing/calculator page displays the round-trip cost calculation. The treatment is editorial-form rather than financial-tool. Specification:

- Form fields styled per Section 16 (Microcopy and form states), large enough for older-reader input
- Live calculation result displayed in the same pricing-block component used elsewhere on the site
- Comparative result (Grace round-trip vs typical industry round-trip) displayed in the comparative pricing table format
- No animations on result update — the figure updates in place
- Faith-grounded register preserved: a small Proverbs 11:1 reference at the bottom of the page (this is the third architectural placement of the verse — see Section 9.2)

Note: per the brand DNA document and the Website Content Architecture, the round-trip calculator is post-launch. The launch site has the calculator URL placeholder but does not surface it. The design system is forward-compatible so that activating the calculator post-launch does not require reopening the design system.

### 11.5 What not to visualize

- No animated stock-ticker bars on any page
- No upward-trending stock chart imagery as decoration (category default)
- No fear-charts (dollar collapse, gold price spike, hyperinflation projections — fail truth-vs-fabrication test)
- No infographic-style “Benefits of Gold IRA” illustrations (decorative, infomercial register)
- No market-news widgets pulled from third-party sources (introduces editorial register Grace cannot control)

---

**PART THREE**

## Web design system

Six sections specifying the Grace web design system at a build-ready level. The implementer reads these sections to populate the Tailwind config, the CSS custom property layer, the component library, the motion system, the microcopy library, and the accessibility configuration.

---

**SECTION 12**

## Design tokens

This section is the build-ready specification of the Grace visual system, expressed as machine-readable tokens. Claude Code reads this section directly to populate the Tailwind config and the CSS custom property layer. Every token is named, explicit, and has a single purpose. Any divergence between this section and the implementation is a build error, not a design preference.

Tokens are organized into seven groups: color, typography, spacing, sizing, radius, border, and motion. The color tokens carry semantic names, not descriptive names — “surface-canvas” rather than “cream” — so the system can be re-themed without renaming usage sites throughout the codebase. The typography tokens specify font family, size, weight, line-height, and tracking as a unit per use case rather than as independent atoms, because the Plain Counsel register depends on the combination.

### 12.1 Color tokens

Seven roles, each with a single semantic purpose. The full system is specified in Section 7; this section is the explicit token export.

| Token | Value | Use |
|---|---|---|
| --gpm-canvas | #F2EDE0 | Page background. Neutral warm cream. Primary surface. |
| --gpm-surface | #E8E2CC | Cards, panels, William testimonials band, secondary surfaces. |
| --gpm-ink-body | #1F1B16 | Body copy and primary text. |
| --gpm-ink-display | #2D2620 | Headings and display type. |
| --gpm-gold-primary | #C9A96C | Muted gold. Primary accent. Rules, eyebrows, supporting elements, wordmark. |
| --gpm-gold-deep | #B8962E | Deep gold. Reserved use — verse band, key numerals, wordmark hairline rule. |
| --gpm-walnut | #3B342A | Walnut. Primary CTAs, refusal blocks, structural emphasis blocks. |
| --gpm-canvas-deep | #F8F5EB | Hover states on cream surfaces and table row stripes only. |
| --gpm-border-light | #D5CDB6 | Card edges, form borders, hairline component borders. |
| --gpm-state-error | #A03A28 | Form validation errors, critical states. Warm rust. |
| --gpm-state-success | #5C7A3E | Form submission success, positive confirmation. Warm olive. |
| --gpm-state-warning | #A07028 | Caution states. Deep amber, distinct from accent gold. |
| --gpm-state-info | #4A4239 | Informational asides, helper text. Effectively softer body ink. |

Tailwind config (tailwind.config.ts) extends theme.colors as follows. Source of truth is the tokens.ts file imported into the config:

```
import { tokens } from './tokens'
export default {
  theme: {
    extend: {
      colors: {
        canvas: tokens.canvas,             // #F2EDE0
        'canvas-deep': tokens.canvasDeep,  // #F8F5EB
        surface: tokens.surface,           // #E8E2CC
        ink: { body: tokens.inkBody, display: tokens.inkDisplay },
        gold: { DEFAULT: tokens.goldPrimary, deep: tokens.goldDeep },
        walnut: tokens.walnut,             // #3B342A
        border: { light: tokens.borderLight },
        state: {
          error: tokens.stateError,
          success: tokens.stateSuccess,
          warning: tokens.stateWarning,
          info: tokens.stateInfo
        }
      }
    }
  }
} satisfies Config
```

#### Color usage rules — non-negotiable

Deep gold #B8962E appears only on the verse-band rule, the verse eyebrow text (“Proverbs 11:1”), the wordmark hairline rule, and key numerals (specifically “11.1%” and currency figures in pricing displays). It does not appear as a button background, an icon fill outside the logo lockup, a paragraph color, or anywhere else. This restraint is what gives deep gold its meaning when it appears.

Muted gold #C9A96C is the primary accent and may appear on rules, eyebrow labels, the wordmark, link hover states, and small icon strokes. It does not appear as a button background or as body or heading text on the cream canvas — its contrast against canvas is too low for legibility at any size below display.

Walnut #3B342A is the primary CTA background and the refusal-block left-rule color. Cream text (#F2EDE0) on walnut passes WCAG AA at 11.7:1. Walnut on cream passes WCAG AA Large for UI components.

Pure black #000000 is not in the system. Anywhere a designer or developer instinct reaches for black, use ink-body #1F1B16 or ink-display #2D2620 instead.

### 12.2 Typography tokens

The eight type tokens specified in Section 8 export as Tailwind utilities. Each token bundles family, size, weight, line-height, and tracking as a single class. The implementer applies one type token per text element rather than composing the four properties separately.

#### Font loading

In app/layout.tsx, both families load via next/font/google with display: 'swap':

```
import { Source_Serif_4, Source_Sans_3 } from 'next/font/google'
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap'
})
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})
```

#### Type scale tokens

The token names map to Tailwind utility classes. Each utility composes the full type specification:

```
.text-display-xl { font-family: var(--font-serif); font-size: 72px; font-weight: 400; line-height: 1.05; letter-spacing: -0.02em; }
.text-display-lg { font-family: var(--font-serif); font-size: 56px; font-weight: 500; line-height: 1.1; letter-spacing: -0.015em; }
.text-h2 { font-family: var(--font-serif); font-size: 32px; font-weight: 500; line-height: 1.15; letter-spacing: -0.005em; }
.text-h3 { font-family: var(--font-serif); font-size: 22px; font-weight: 500; line-height: 1.3; letter-spacing: 0; }
.text-body-lg { font-family: var(--font-sans); font-size: 18px; font-weight: 400; line-height: 1.6; letter-spacing: 0; }
.text-body { font-family: var(--font-sans); font-size: 16px; font-weight: 400; line-height: 1.65; letter-spacing: 0; }
.text-body-sm { font-family: var(--font-sans); font-size: 14px; font-weight: 400; line-height: 1.6; letter-spacing: 0; }
.text-eyebrow { font-family: var(--font-sans); font-size: 11px; font-weight: 500; line-height: 1; letter-spacing: 0.22em; text-transform: uppercase; }
.text-quote { font-family: var(--font-serif); font-size: 19px; font-weight: 400; font-style: italic; line-height: 1.5; letter-spacing: 0; }
```

Mobile breakpoint adjustments scale display sizes only; body sizes hold across breakpoints to preserve legibility for older readers.

### 12.3 Spacing tokens

Spacing follows an 8px base unit. Tailwind’s default spacing scale is replaced with the Grace-specific scale to enforce the rhythm system.

| Token | Value | Use |
|---|---|---|
| space-1 | 4px / 0.25rem | Tightest gap. Inline icon spacing, dense lists. |
| space-2 | 8px / 0.5rem | Internal pill padding, tight stacks. |
| space-3 | 12px / 0.75rem | Button gap, label-to-input gap, card internal stack. |
| space-4 | 16px / 1rem | Standard card padding, default paragraph spacing. |
| space-6 | 24px / 1.5rem | Card external gap, hero element vertical rhythm. |
| space-8 | 32px / 2rem | Section-to-section vertical rhythm within a screen. |
| space-12 | 48px / 3rem | Major section break. |
| space-16 | 64px / 4rem | Hero internal padding, page-to-major-section. |
| space-24 | 96px / 6rem | Top-of-page hero padding, large section breaks. |

### 12.4 Sizing and layout tokens

Three responsive breakpoints. Mobile-first cascade. Container widths constrained — body prose never exceeds 640px regardless of viewport.

| Token | Value | Use |
|---|---|---|
| breakpoint-sm | 640px | Mobile threshold. Single-column below. |
| breakpoint-md | 768px | Tablet. Two-column where natural. |
| breakpoint-lg | 1024px | Desktop. Persistent navigation. |
| container-prose | 640px max | Body prose. Editorial line length. |
| container-content | 880px max | Content blocks with sidebars. |
| container-wide | 1200px max | Hero sections, grid layouts. |
| container-page | 1440px max | Outer page maximum. |

### 12.5 Border radius tokens

Restrained. Three values cover the system.

| Token | Value | Use |
|---|---|---|
| rounded-sm | 3px | Buttons, badges, small UI components. |
| rounded-md | 4px | Cards, surface panels, image frames. |
| rounded-none | 0px | Refusal blocks, structural left-rule blocks, verse band, hero edges. |

### 12.6 Border tokens

| Token | Value | Use |
|---|---|---|
| border-rule | 0.5px solid #C9A96C | Structural rules, eyebrow rules, section dividers. |
| border-rule-deep | 0.5px solid #B8962E | Wordmark rule, verse band rule. Reserved. |
| border-component | 0.5px solid #D5CDB6 | Card edges, form field edges. |
| border-walnut | 1px solid #3B342A | Refusal block left rule, secondary CTA outline. |
| border-walnut-3 | 3px solid #3B342A | Refusal block left accent. |

### 12.7 Motion tokens

| Token | Value | Use |
|---|---|---|
| transition-color | 150ms ease-out | Color, background, border on hover and focus. |
| transition-opacity | 200ms ease-out | Opacity for disclosure of supplementary content. |
| transition-transform | 200ms ease-out | Subtle transform on button press only. |

The site respects prefers-reduced-motion. When the user has reduced-motion enabled, all transitions resolve to 0ms and any non-essential animation is suppressed. Implementer applies this via a global CSS rule in globals.css.

### 12.8 Token export and consumption

Tokens live in two places. The source-of-truth file is /tokens.ts at the project root, exporting a single tokens object. The Tailwind config (tailwind.config.ts) imports from tokens.ts. The CSS custom property layer in app/globals.css re-exports the same values as CSS variables for use in component styles, MDX content, and any context where Tailwind classes are not the appropriate tool.

Both layers are generated from a single tokens source so updates flow through. Editing tokens.ts updates Tailwind utilities and CSS variables on the next build.

---

**SECTION 13**

## Grid, spacing, layout, performance

### 13.1 The grid

Twelve-column grid at desktop, six-column at tablet, single-column at mobile. Gutter is space-6 (24px) at desktop, space-4 (16px) at tablet and mobile. The grid is implementation-detail — layout decisions are mostly content-width-driven rather than column-based, given the editorial register.

The functional layout primitives are the four container widths from Section 12.4: container-prose (640px max, body prose), container-content (880px max, content with sidebars), container-wide (1200px max, hero and grid layouts), container-page (1440px max, outer page constraint). Each Next.js page component picks the appropriate container based on its content type.

### 13.2 Vertical rhythm

Vertical rhythm follows the spacing scale. Section-to-section spacing is space-12 (48px) at mobile and space-16 (64px) at desktop within a single page. Hero sections use space-24 (96px) top padding and space-16 (64px) bottom padding. Component-internal spacing follows space-4 (16px) for tight relationships, space-6 (24px) for distinct elements within a card, and space-8 (32px) for section breaks within a long page.

Paragraph spacing follows the line-height of the type token. Body prose paragraphs have margin-bottom of 1.5em (relative to the paragraph’s line-height). The default line-height of 1.65 means paragraph spacing of approximately 26px between body paragraphs at 16px size.

### 13.3 Performance budget

Grace’s site is a content site with strict performance requirements. The audience is older, often on slower connections, sometimes on older hardware. The performance budget is strict.

| Metric | Target | Notes |
|---|---|---|
| Largest Contentful Paint | < 2.0s on 4G | Hero verse and image must paint within 2 seconds |
| First Input Delay | < 100ms | Interaction must feel immediate |
| Cumulative Layout Shift | < 0.05 | Stricter than the 0.1 standard. No element shifts after paint. |
| Total page weight | < 1MB initial | Including hero image. Fonts excluded. |
| Font weight | < 100KB | Both Source Serif 4 and Source Sans 3 variable fonts combined |
| Lighthouse score | ≥ 95 on every page | Performance, accessibility, best practices, SEO |

Implementer responsibilities: Next.js Image component for all images with explicit width/height to prevent CLS. Lazy-loading for below-fold images. WebP or AVIF formats with PNG/JPG fallback. Self-hosted fonts via next/font (Google Fonts loaded by Next, not by external request). No third-party scripts at launch except GA4 and Klaviyo (both deferred-loaded). No web fonts beyond the two specified families.

### 13.4 Container hierarchy

Each page composes its layout from these primitives:

```
// PageContainer.tsx
// max-width: 1440px, mx-auto, full viewport width below
// SectionContainer.tsx
// vertical padding only; horizontal padding from PageContainer
// space-16 top, space-16 bottom (desktop); space-12 each (mobile)
// ProseContainer.tsx
// max-width: 640px, mx-auto
// for body prose anywhere in the site
// ContentContainer.tsx
// max-width: 880px, mx-auto
// for content blocks with sidebars or supporting visuals
// WideContainer.tsx
// max-width: 1200px, mx-auto
// for hero sections, image grids, expanded content blocks
```

---

**SECTION 14**

## Component library

The Grace component library is a small set of well-defined components that compose into every page. Implementation in /components, with TypeScript interfaces, JSDoc-style documentation, and Storybook stories optional but encouraged. Each component is named below with its purpose, props, and the page templates that use it.

### 14.1 Navigation

#### SiteNav

Persistent header navigation. Two-button right-side CTA pattern. Four primary links left, Get the Briefing (secondary outline button) and Talk to an Advisor (primary walnut button) right. Logo lockup left of the primary links. Sticky on scroll with a slight cream-deep tint to signal it has scrolled past the top of the page.

Mobile breakpoint: hamburger toggle reveals a full-screen takeover with the four links stacked, the two CTAs as full-width buttons at the bottom. Logo remains visible at the top of the takeover. The reverse-colorway logo (Variant B) is used on mobile because the takeover background is dark.

#### SiteFooter

Four-column at desktop, two-column at tablet, single-column at mobile. Columns: Pages (primary navigation), Resources (secondary links to /resources, /faq, /contact), Talk to us (advisor call CTA, contact information, hours), Compliance (links to /who-we-are/compliance, /terms, /privacy). Below the four columns: a single line with the standard disclaimer in body-sm, body-ink color, on cream surface. Bottom: copyright line, address (placeholder pending Andrew’s confirmation), license state list (placeholder pending Andrew’s confirmation).

### 14.2 Hero components

#### VerseHero

The verse hero used on the homepage, /williams-story, and /who-we-are. Renders the verse band per Section 9, optionally followed by an H1 and supporting copy. Props: verseEmphasis (controls the italic on “His”), heroH1, heroSubhead, primaryCta, secondaryCta. Used 3 times site-wide.

#### StandardHero

The standard hero for content pages without the verse band. Eyebrow label, H1 in text-display-lg, subhead in text-body-lg, optional primary and secondary CTAs. Props: eyebrow, h1, subhead, primaryCta, secondaryCta. Used on most content pages.

#### BriefingHero

Restrained hero for /briefing. No CTA — the form below is the CTA. Eyebrow (“A briefing from Grace Precious Metals”), H1 (“The Secret Gold Briefing” in text-display-lg), deck (subtitle in text-body-lg). Used once.

### 14.3 Content components

#### CommitmentBlock

Used on the homepage and on /pricing for the four foundational commitments (post-2026-04-30 site-wide standard; see override note near the top of this file). Two-column grid at desktop, single column at mobile. Each commitment: number eyebrow (01 to 04), heading in text-h3, body in text-body-sm. Optional internal link. The block uses no card surface — commitments sit directly on canvas separated by hairline rules.

#### WilliamTestimonyBand

The William testimonials band on the homepage, between the William pull-quote and the four foundational commitments. Surface color #E8E2CC, padding space-8 internal. Heading (“What people say about William” in text-h3), supporting copy in text-body, two-column grid of testimonials with a left-rule (border-walnut), each testimonial in text-quote italic with attribution in text-body-sm. Closes with a “Read William’s story” link aligned right.

#### PullQuote

Inline quote component. Italic serif at text-quote, body ink color, no quote marks (the typography signals the quotation). Attribution below in text-body-sm with em-dash prefix. Optional left-rule (border-walnut) for emphasis.

#### EntryCard

The three entry cards on the homepage below the hero. Single surface color #E8E2CC, padding space-6, no border. Heading in text-h3 serif, body in text-body-sm, single CTA arrow link in muted gold. Three cards in a horizontal grid at desktop, stacked at mobile. No carousel, no rotation, no featured styling — three equal-weight doors.

#### RefusalBlock

Distinctive recurring component for stating active refusals (“What we do not sell,” “What we do not do”). Background surface color #E8E2CC, left-rule border-walnut-3 (3px solid walnut), padding space-6. Heading in text-eyebrow walnut color, body in text-body. Used multiple places site-wide — it is the architectural expression of Grace’s active refusals.

#### PricingBlock

The pricing display per Section 11.1. Eyebrow label, large display figure in deep gold, supporting body. No surface, no border, sits directly on canvas. Used on homepage hero, /pricing, /rollover.

### 14.4 Form components

#### FormField

Standard form input wrapper. Label above input in text-eyebrow style, input field in text-body, helper text below in text-body-sm. Input height 48px (large enough for older-reader interaction). Border 0.5px solid #D5CDB6 (border-component); focus state border 1px solid walnut, no shadow. Error state: border state-error #A03A28, error message below in text-body-sm state-error color. Per Section 16.

#### BriefingForm

The /briefing capture form. Two fields (name, email), single CTA button (“Read the Briefing” in walnut), single-line callback disclosure below the button (non-negotiable per v3.5 copy notes). Submits to Klaviyo via API; Klaviyo triggers PDF delivery email. Loading state during submission; success state replaces form with confirmation message in text-body.

### 14.5 CTA components

#### ButtonPrimary

The walnut primary CTA. Background walnut #3B342A, text cream #F2EDE0, padding space-3 vertical and space-6 horizontal at desktop, border-radius rounded-sm (3px). Hover state: background tint slightly lighter (use color-mix or pre-computed value #463E33). Active state: transition-transform scale 0.98. Focus visible: 2px solid walnut outline, 2px offset.

#### ButtonSecondary

The walnut-outlined secondary CTA. Background transparent, border 1px solid walnut, text walnut, same padding as primary. Hover state: background tint to canvas-deep #F8F5EB. Same active and focus states.

#### LinkArrow

The “Read more”, “Get the Briefing”, in-content arrow link. Muted gold color #C9A96C, text-body-sm size, arrow character (→) following text with space-1 gap. Hover state: underline appears, color shifts to deep gold.

### 14.6 Compliance and disclaimer components

#### DisclaimerStack

The standard disclaimer block per Section 6.4 of the Brand DNA document. Used in the page footer and inline on pages with pricing or product claims. Body ink color, text-body-sm, italic. Each disclaimer in its own paragraph; multiple disclaimers stack with space-2 between them.

> **Resolution (2026-04-28).** Section 14.6 specifies italic for the disclaimer stack; Section 8.6 readability concern takes precedence for the 60-80 audience. Resolution: italic on lead phrase only, upright body. Where a paragraph has no natural lead-in phrase (e.g. a substantiation footnote that opens with a quoted comparative claim), the paragraph stays fully upright — asymmetric treatment is acceptable.

#### ComplianceFlag

Inline component for surfaces that have specific compliance gates. Used in /who-we-are/compliance and on pages with specific counsel-review requirements. Background surface color, walnut left-rule, body in text-body-sm. Per Section 22.

---

**SECTION 15**

## Motion and interaction

Restraint. Plain Counsel does not use bouncy easing, parallax effects, scroll-triggered animations, or any motion that performs. The motion system has three transitions and one rule: prefers-reduced-motion is honored absolutely.

### 15.1 What moves

- Color transitions on hover and focus (links, buttons, form fields) — 150ms ease-out
- Opacity transitions for content disclosure (FAQ accordions, supplementary content reveal) — 200ms ease-out
- Subtle transform on button press (scale 0.98) — 200ms ease-out

### 15.2 What does not move

- No parallax scrolling on any element
- No scroll-triggered fade-ins or reveals on page sections
- No carousel or slider for content (testimonial sliders, image carousels, hero carousels are not in the system)
- No animated counters or number tickers for the pricing display
- No card hover-lift transformations
- No animated icon transitions
- No page-load animations (page renders in place, no fade-in)
- No marquee or scrolling text

### 15.3 Reduced-motion handling

All transitions resolve to 0ms when prefers-reduced-motion: reduce is set in the user’s system. Implementer applies this via a global CSS rule:

```
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 15.4 Dark mode — not implemented at launch

Grace does not ship dark mode at launch. The brand is built around the cream canvas; a dark-mode variant would require the entire palette to be redesigned (the palette as specified does not work as a simple inversion). Dark mode is post-launch territory and is not in the design system at v1.0. The brief deliberately omits dark-mode tokens to prevent accidental implementation.

---

**SECTION 16**

## Microcopy, form states, error states

Microcopy is where Plain Counsel either holds or breaks. A button label, a form helper text, a validation message, a 404 page — each is a small surface where the brand voice must be expressed exactly. This section specifies the microcopy library.

### 16.1 Form labels and helpers

Labels are sentence-case, plain language. “Your name” not “FULL NAME.” “Email address” not “EMAIL.” Helper text appears below labels in text-body-sm body-ink color, only when needed to clarify or qualify. Example: below the email field on the Briefing form, helper text reads: “We send the Briefing to this address. We do not pass it to anyone else.”

### 16.2 Button microcopy

Buttons describe outcomes, not actions. “Read the Briefing” not “Submit.” “See our pricing” not “Learn more.” “Talk to an advisor” not “Get started.” The reader should know what they will see or what will happen as a result of pressing the button before they press it.

### 16.3 Error states

Validation errors are calm, specific, and helpful. They never blame the reader.

Examples:

- Email field invalid: “This does not look like a valid email address.” Not: “Invalid email!”
- Required field empty: “We need this to send the Briefing.” Not: “Required.”
- Server error on form submission: “Something did not go through. Please try again. If this keeps happening, you can email us directly at [email].” Not: “Submission failed. Error 500.”

### 16.4 Empty states

Where a section has no content (e.g., the Reviews section before reviews exist), the empty state is honest and quiet. “We do not have customer reviews yet. When we do, they will appear here — verified through Trustpilot.” Not: “No reviews available” or “Check back soon!”

### 16.5 Loading states

Where loading takes longer than 200ms (form submission, post-launch calculator computation), a loading state shows. The loading state is text, not a spinner: “Sending the Briefing…” not an animated icon. Spinner animation is permissible only if specifically required by the form interaction; preference is for text-based loading messaging.

### 16.6 Success states

Form submission success replaces the form with a confirmation message in text-body. Example for the Briefing form: “Check your inbox. The Briefing is on its way to [email]. If it does not arrive in five minutes, check your spam folder — sometimes it lands there.”

### 16.7 404 page

Eyebrow: “404.” H1: “This page does not exist.” Body: “It may have moved, or it may never have existed. Either way, you can go back to the homepage or talk to an advisor.” Two CTAs: “Home” (primary), “Talk to an advisor” (secondary).

### 16.8 500 page

Eyebrow: “500.” H1: “Something went wrong on our end.” Body: “We have logged the error and are looking at it. You can refresh, go back to the homepage, or email us directly at [email].” Two CTAs: “Refresh” (primary), “Home” (secondary).

### 16.9 Cookie banner

If a cookie banner is required by jurisdiction (TBD by counsel for Grace’s state-by-state operation), the banner is text-only, no images, dismissible. Body: “We use a small number of cookies to make this site work and to count anonymous visitor data. You can read the details, or simply dismiss this notice.” Two actions: “Dismiss” (primary), “Read the details” (secondary). The banner does not block content; it sits at the bottom of the viewport.

---

**SECTION 17**

## Accessibility and responsive direction

Grace’s primary audience is older. The site is built to WCAG 2.1 AA standard at minimum, with AAA conformance where it does not compromise the design. Accessibility is not a layer added at the end — it is a constraint that shapes every component.

### 17.1 WCAG conformance targets

| Standard | Level | Notes |
|---|---|---|
| Color contrast (body) | AAA | Body ink on canvas at 15.7:1 exceeds AAA (7:1) |
| Color contrast (large text) | AAA | Display ink on canvas at 12.4:1 exceeds AAA |
| Color contrast (UI components) | AA | Walnut button on cream meets AA Large |
| Keyboard navigation | AA | Every interactive element reachable and operable |
| Focus visible | AA | Visible focus indicator on every focusable element |
| Text resize | AA | Layout holds at 200% zoom |
| Alt text on images | AA | Every content image has descriptive alt text |
| ARIA labels | AA | Form fields, navigation, landmark regions all properly labeled |
| Reduced motion | AA | prefers-reduced-motion honored absolutely |
| Heading hierarchy | AA | Single H1 per page; H2/H3 follow logically |

### 17.2 Typography for older readers

Body text holds at 16px regardless of viewport. The 16px floor is a non-negotiable accessibility constraint — anything smaller becomes hard for older readers without setting browser zoom. Line-height of 1.65 on body copy gives the reader’s eye room to track. Maximum line length of 75 characters at 640px container width..

Helper text and captions hold at 14px (text-body-sm). Below 14px, text is reserved for the eyebrow component (11px, used at high letter-spacing as a structural label, not as readable text).

### 17.3 Mobile-first responsive specification

The site is mobile-first. Styles cascade upward from mobile to tablet to desktop. The primary breakpoints are at 640px (mobile to tablet) and 1024px (tablet to desktop).

#### Mobile (<640px)

- Single column layout for all content
- Hamburger nav with full-screen takeover
- Hero verse scaled to 44px
- Hero H1 scaled to 36px
- Body sizes hold at 16px
- Buttons full-width inside their container
- Cards stack vertically
- Comparative pricing tables shift to mobile-card layout (Section 11.2)

#### Tablet (640-1023px)

- Two-column where natural (William band, entry cards, footer columns reduce to two)
- Persistent nav appears, but with reduced spacing
- Hero verse at 56px
- Hero H1 at 44px
- Same body sizes as mobile and desktop

#### Desktop (≥1024px)

- Full layout per the page-level specifications in Part Four
- Persistent nav with full spacing
- Full type scale at desktop sizes

### 17.4 Keyboard navigation

Every interactive element is keyboard-reachable via Tab, operable via Enter or Space. Skip links at the top of every page allow keyboard users to skip past navigation to main content. Focus order follows the visible content order — the implementer does not use tabindex to manipulate order, only to add focus to non-default elements where required.

Focus indicators are 2px solid walnut #3B342A with 2px offset. They do not rely on color alone — the offset itself signals focus regardless of color perception.

### 17.5 Screen reader and ARIA

Landmark regions are properly assigned: header, nav, main, aside, footer. Form fields have explicit label associations (htmlFor on label, id on input). Buttons that perform actions are <button> elements; links that navigate are <a> elements. Interactive elements that are not native (custom dropdowns, accordions) have appropriate ARIA roles and states.

Images have descriptive alt text. Decorative images (hairline rules, decorative dividers) have alt=”” to be ignored by screen readers. The William testimony band on the homepage has aria-label=“William Armour testimonial”. The verse band has aria-label=“Scripture: Proverbs 11:1”.

### 17.6 Touch targets

Touch targets are 44×44px minimum at mobile per Apple Human Interface Guidelines. Buttons are 48px tall by default. Form fields are 48px tall. Links in body text have padding to expand the touch target without affecting visible spacing.

---

**PART FOUR**

## Page-level design direction

Eight templates covering the 22 pages at launch. Each template specifies layout architecture, the components it uses (referenced from Section 14), copy reference (to v3.5 launch copy), and any compliance gates specific to the template.

---

**SECTION 18**

## Homepage

> **⚠ Superseded by the production brief and `homepage_copy_v3_6.md` for the homepage build.** See the "Production-brief override note" near the top of this file for the full delta. The historical text below describes the v3.5 homepage that shipped to `phase-2-content-import` on 2026-04-28; the post-2026-04-29 homepage is built against the production brief and v3.6, not this section. Do not consult this section for current homepage build decisions.

*Applies to: / (homepage)*  
*Copy source: v3.5 Launch Website Copy, homepage section* — **superseded by `homepage_copy_v3_6.md`**  
*Wireframe reference: v2 wireframes consolidated, Template 1*  

The homepage is the single most-viewed page on the site. It must accomplish three things in the first screenfold: state the published spread, anchor the brand in faith framing via the verse, and give the reader entry points into the site that do not depend on a phone call.

### 18.1 Layout architecture

Mobile-first single-column. Desktop layout is content-centered within container-page (1440px max). Vertical sections from top to bottom: SiteNav, VerseHero with H1, EntryCard grid, William pull-quote, WilliamTestimonyBand, CommitmentBlock (5 commitments), three-paths block, supporting content, SiteFooter.

### 18.2 Section-by-section specification

#### VerseHero

Per Section 9. Verse band at the top of the page using the deep gold rule, eyebrow citation, and 72px serif verse with italic-emphasis on “His.” Below the verse band: H1 “No hidden costs. Low fees.” in text-display-lg, deck text in text-body-lg with the substantiated “about a third more” comparative claim and the inline 11.1% pricing pull-out, followed by primary and secondary CTAs (“See our pricing” walnut primary; “Talk to an advisor” walnut-outlined secondary).

#### EntryCard grid

Three EntryCard components in a horizontal grid at desktop, stacked at mobile. Hero A (Watch William’s testimony), Hero F (See the five commitments), Hero D (Read the Briefing). Each card uses the surface color, no border, padding space-6, single CTA arrow link in muted gold. Each card title uses text-h3, body uses text-body-sm, link uses LinkArrow component.

#### William pull-quote

Single PullQuote component below the entry cards. William’s pastoral conviction quote in text-quote italic, attribution in text-body-sm. “Read William’s full story” LinkArrow at the bottom right.

#### WilliamTestimonyBand

Per Section 14.3. Tinted surface band with two placeholder testimonials about William personally. Heading “What people say about William.” Body explanation that these testimonials are about William the person, not the company. “Read William’s story” LinkArrow at the bottom.

> **FLAG:** *Testimonial placeholder copy is from v3.5. William to supply actual testimonials before launch. Implementer renders the placeholders and a CMS would handle the swap; without CMS, the testimonials live in MDX and William delivers his approved testimony copy via redline.*

#### CommitmentBlock

Four foundational commitments in CommitmentBlock layout. Four-column grid at desktop, two-column at tablet, single column at mobile. Each commitment: numeral (01-04), heading in text-h3, body in text-body-sm. Four commitments: 11.1% all-in spread, buyback at spot, standard IRS-eligible bullion only, salaried advisors no commission. (Commitment 5 "No phone-gate on pricing" removed site-wide on 2026-04-30 — see override note near the top of this file.)

#### Three-paths block

Three EntryCard components for segment-specific routing: “Financial advisor or CPA” (route to /advisor), “Existing Gold IRA holder” (route to /rollover/transfer), “First-time investor” (route to /rollover). Same EntryCard structure as the hero entry cards.

#### Trust architecture block

A single restrained block referencing IRS-approved custodian, IRS-approved depository, state dealer licensing. Three short lines on canvas with a hairline gold rule above and below; no card surface, no badges, no logos, no decorative treatment. Each line links to the corresponding section of /who-we-are/compliance. Specific custodian and depository partner names are not stated on the homepage; partner names appear only on /who-we-are/compliance once contracts are signed (per the Architecture’s Decision 1). The block sits between the WilliamTestimonyBand and the CommitmentBlock, signalling that the operational substrate exists without performing it.

### 18.3 Compliance gates

- William’s pull-quote: counsel-cleared on Genesis non-compete framing, drafted from his actual register, no fictional words
- “Most of the industry will not show you a number until you are on a call with a commissioned salesperson” — substantiated category-level claim, counsel-gated
- “About a third more” comparative claim — substantiated by Competitive Intelligence Report, counsel-gated, footnoted in disclaimer stack
- Reviews block not included — per architecture document, empty review sliders are worse than no reviews
- No celebrity endorsements, no “as seen on” badges, no fabricated fear, no urgency

---

**SECTION 19**

## Resources library architecture

*Applies to: 10 launch pages — /resources hub + 3 pillars + 6 supporting articles*  
*Copy source: v3.5 Launch Website Copy, Resources sections*  
*Architecture reference: WebsiteContentArchitecture v1.1, Section 8 and Appendix A*  

The Resources library is the SEO authority surface for Grace. It is also the largest single content cluster on the launch site — ten of the twenty-two launch pages live here. The library serves Tier-2 keyword authority content per the architecture’s two-tier keyword strategy: Grace does not target Tier-1 affiliate-saturated category keywords (“best Gold IRA company”) at launch, and instead targets specific operational and educational concepts where transparency-built content can rank organically.

Library structure at launch: one overview page (/resources), three pillar pages, two supporting articles per pillar (six supporting articles total). The library lives in secondary navigation at launch and promotes to primary navigation in quarter two once content volume reaches roughly ten published pieces, per the architecture’s Decision 4.

### 19.1 The /resources hub page

The hub page is the entry point to the library. Layout: StandardHero at the top with eyebrow (“Resources”), H1 (“Plain answers to the questions Grace’s customers ask most”), and a deck describing what the library is. Below the hero: three EntryCard components, one for each pillar, each linking to the pillar page. Below the cards: a brief block introducing the editorial standard (Plain Counsel voice, no fictional claims, counsel-reviewed where required). Footer.

The hub page is short — roughly 400-600 words. It is a directory, not an article. The reader arrives, sees the three pillars, and routes to the pillar that matches their question. The hub does not try to summarize the pillars; the pillar pages do that work.

### 19.2 The three pillars

Three pillar topics at launch, chosen for their alignment with Grace’s structural commitments:

- /resources/buyback — what buyback at spot price actually means, why it matters, how Grace’s buyback differs from category-default buyback spreads
- /resources/round-trip-cost — what round-trip cost is, why it is the right metric for evaluating a Gold IRA, how to calculate yours
- /resources/numismatic-coins — what numismatic coins are, why they are sold to retirees, why Grace refuses to sell them

Each pillar page is structured per the Pillar Hub template (Section 20). Each pillar carries two supporting articles addressing specific sub-topics within the pillar.

### 19.3 The supporting articles

Six supporting articles, two per pillar. Each article is structured per the Supporting Article template (Section 21). Article topics are derived from the v3.5 launch copy and the architecture’s keyword research. Article topics are not restated here; the implementer pulls them from the v3.5 copy.

### 19.4 SEO and keyword architecture

Each pillar and supporting article targets one Tier-2 keyword cluster. The two-tier keyword architecture is specified in the architecture document’s Appendix A. Each article’s MDX frontmatter includes the target keyword cluster as a tag for search-console reconciliation. Implementer reads the keyword architecture from the canonical document; this brief does not duplicate it.

Pillar and article titles are written for the reader, not for SEO. The H1 is plain English and answer-shaped (“What is round-trip cost?” not “Round-Trip Cost: A Complete Guide”). Meta titles for SERP can vary slightly from the H1; both are specified in MDX frontmatter.

### 19.5 Internal linking architecture

Each pillar links outward to its two supporting articles in a related-articles block at the bottom. Each supporting article links back to its parent pillar in a breadcrumb at the top and in a related-articles block at the bottom. Each article links to one or more relevant primary surfaces (/pricing, /rollover, /williams-story, /briefing) where the article’s content connects to a conversion path. The internal linking is organic — woven into prose where it serves the reader — not stuffed into a sidebar.

### 19.6 Compliance gates

- Comparative claims at category level only (no competitor names) — applies to every article in the library
- Pricing claims CFO-cleared and dated
- Tax-related content reviewed by CPA-qualified reviewer (Andrew or external) before publication
- The numismatic-coins pillar has elevated counsel-review weight because it documents a category-wide practice; Grace’s framing must be substantiated and not actionable as defamation
- Quarterly content-update cadence for any article touching legislation or regulatory framework

---

**SECTION 20**

## Pillar Hub template

*Applies to: 4 primary pillars (/pricing, /rollover, /who-we-are, /advisor) plus 3 Resources library pillars*  
*Copy source: v3.5 Launch Website Copy, pillar sections*  
*Wireframe reference: v2 wireframes consolidated, Template 2*  

The pillar-hub template covers seven pages. Four primary pillars (the four primary nav items): /pricing, /rollover, /who-we-are, /advisor. Three Resources library pillars: /resources/buyback, /resources/round-trip-cost, /resources/numismatic-coins. Each pillar is a hub for a topic cluster — the pillar page itself states the position and links to supporting content.

### 20.1 Layout architecture

StandardHero at the top with eyebrow, H1, and subhead. Below the hero: optional PricingBlock (on /pricing only), then a content body in container-content (880px). The content body is structured as alternating prose sections (in container-prose, 640px) and content blocks (CommitmentBlock, RefusalBlock, PullQuote, comparative pricing table). Closes with a related-articles section linking to supporting articles in the same cluster, then footer.

### 20.2 The pricing pillar (/pricing)

The most-visited pillar after the homepage. Layout: StandardHero, PricingBlock with the 11.1% display, the four foundational commitments restated in pricing context, RefusalBlock listing what Grace does not charge for, comparative pricing table at category level (per Section 11.2), the “How We Get Paid” explainer block, FAQ-style addressing of common pricing objections with link to /faq, footer. Length approximately 2,000-3,000 words. CTAs to /briefing and /advisor at the bottom.

### 20.3 The rollover pillar (/rollover)

Comprehensive rollover hub covering 401(k), Traditional IRA, Roth IRA, and SEP IRA in one document with H2 anchors for direct navigation. Layout: StandardHero, three-paths block routing readers to specific scenarios, prose explanation of shared mechanics (trustee-to-trustee transfer, 60-day rule, once-per-12-months rule, tax treatment at category level, typical timeline), then four account-type sections (401(k), Traditional IRA, Roth IRA, SEP IRA) each with its own H2 anchor. Closes with common pitfalls, link to /pricing/calculator (post-launch), link to /advisor, link to /rollover/inherited-ira, link to /rollover/transfer. Length approximately 3,500-5,000 words.

### 20.4 The who-we-are pillar (/who-we-are)

Specified in detail in Section 24 (Who We Are parent page) — distinct treatment because it carries the third architectural verse placement and consolidates leadership, principles, and founding narrative.

### 20.5 The advisor pillar (/advisor)

Specified in detail in Section 23 (Advisor booking page) — distinct treatment because it integrates a booking system rather than displaying primarily editorial content.

---

**SECTION 21**

## Supporting Article template

*Applies to: 6 supporting articles in the Resources library at launch*  
*Copy source: v3.5 Launch Website Copy, supporting article sections*  
*Wireframe reference: v2 wireframes consolidated, Template 3*  

Supporting articles live within Resources library pillar clusters. Each article is approximately 1,200-2,000 words, in editorial register, with a clear single-topic focus. The article reads as a serious editorial piece, not as a marketing page.

### 21.1 Layout architecture

Breadcrumb at the top in text-eyebrow style (“Resources / Pillar name / Article title”). StandardHero with eyebrow (the pillar name), H1 (the article title), subhead (single-sentence framing). Body in container-prose (640px max-width) for editorial line length. The body is mostly prose paragraphs with occasional PullQuote, RefusalBlock, or CommitmentBlock interruptions where the content warrants. No images in body unless specifically required by content (e.g., a diagram explaining a process). Closes with author attribution (“From the Grace Precious Metals desk” or specific author byline), a related-articles section linking back to the parent pillar and the other supporting article in the same pillar, and the footer.

### 21.2 Reading time

Articles do not display estimated reading time. The display of reading time is a category-default trick that signals “this will be quick” — a register Grace refuses. The reader reads as long as they need to.

### 21.3 Compliance gates

- Tax-related content reviewed by CPA-qualified reviewer before publication
- Comparative claims at category level only — no competitor names
- Substantiation file references for any specific claim about industry practice
- Standard disclaimer in footer applies

---

**SECTION 22**

## Rollover sub-pages — /inherited-ira and /transfer

*Applies to: 2 pages (/rollover/inherited-ira and /rollover/transfer)*  
*Copy source: v3.5 Launch Website Copy, rollover sub-page sections*  
*Architecture reference: Sections 6.2 and 6.3*  

Two standalone pages within the /rollover cluster. Each addresses a distinct audience-and-content scenario that the parent /rollover hub cannot adequately cover within its scope.

### 22.1 /rollover/inherited-ira

Standalone page for inherited IRA rollover content. The SECURE Act and SECURE 2.0 rule changes, the 10-year rule for non-spouse beneficiaries, spouse-vs-non-spouse beneficiary treatment, stretch-IRA exceptions, interaction with self-directed IRAs holding precious metals, and the IRS code sections that govern. Length 2,500-4,000 words. The reader who arrives here wants depth; the page provides it. Layout per the Pillar Hub template (Section 20). This is a Segment 3 (advisor/CPA) authority asset; it is calibrated to professionals as well as informed retirees.

### 22.2 /rollover/transfer

Standalone page for the Segment 2 audience — existing Gold IRA holders considering a transfer to Grace. The page walks through custodian-to-custodian transfer mechanics, what to expect from the existing provider during the transfer (including the moment when the existing provider’s buyback spread becomes visible), how to verify Grace’s pricing against the transferred holdings, and what documents the reader will encounter. Length 1,500-2,500 words. Layout per the Pillar Hub template, with an additional CommitmentBlock specific to transfer scenarios.

### 22.3 Compliance gates

- Tax content reviewed by CPA-qualified reviewer (Andrew or external)
- SECURE Act and SECURE 2.0 references must be current; quarterly review cadence
- Transfer mechanics described at category level only — no specific competitor named in the transfer narrative
- The “existing provider’s buyback spread becomes visible” framing must be substantiated and not actionable; counsel review required

---

**SECTION 23**

## Advisor booking — /advisor

*Applies to: 1 page (/advisor)*  
*Copy source: v3.5 Launch Website Copy, /advisor section*  
*Booking system: pending decision — Calendly, Cal.com, or custom*  

/advisor is one of the four primary navigation items. It is the destination for the “Talk to an Advisor” CTA that appears on every page. The page is structured to do two things: state Grace’s advisor model briefly (salaried, no commissions, no quotas), and provide a frictionless booking surface.

### 23.1 Layout architecture

StandardHero at the top with eyebrow (“Talk to an advisor”), H1 (“Talk to a salaried advisor.”), subhead (“No commissions. No quotas. Bring your questions; bring your skepticism. Our advisors are paid the same whether you open an account or not.”). Below the hero: a CommitmentBlock with three commitments specific to the advisor model (salaried compensation, no quotas, no upselling). Below the commitments: the booking widget, embedded inline. Below the widget: a brief block stating what to expect on the call (length, what the advisor can and cannot help with, what materials to have ready). Footer.

### 23.2 Booking system integration

The booking system is an open decision (Section 38). At launch, the implementer integrates whichever system the CMO selects. The integration is loaded in an iframe within the page, not as a popup or overlay. The iframe height is set to allow the booking widget to render fully without nested scrolling.

> **FLAG:** *Booking system selection is an open decision. Calendly, Cal.com, or custom-built. Recommendation: Cal.com for its open-source posture, customization range, and absence of category-default Calendly aesthetics. CMO call required before integration.*

### 23.3 Compliance gates

- Advisor-model claims (“salaried,” “no commissions”) require CFO confirmation; these are operational facts, not marketing
- “What to expect on the call” content reviewed for any inadvertent investment-advice framing
- Standard disclaimer applies

---

**SECTION 24**

## Who We Are parent — /who-we-are

*Applies to: 1 page (/who-we-are)*  
*Copy source: v3.5 Launch Website Copy, /who-we-are section*  
*Architecture reference: Section 8 and the verse architectural placements*  

The /who-we-are page is the parent of the William testimony page (/who-we-are/williams-story) and the compliance disclosure page (/who-we-are/compliance). It consolidates leadership, founding principles, and the brand’s founding narrative onto a single page rather than fragmenting them across sub-pages. Per the architecture (Section 8), this page carries the THIRD architectural placement of the Proverbs 11:1 verse — Section 9.2 of this brief specifies the visual treatment, identical to the homepage and /williams-story placements.

### 24.1 Layout architecture

VerseHero at the top with the verse band (third architectural placement). H1: “Who we are.” Subhead: a single sentence framing what the reader is about to read. Below the hero: a brief founding-narrative block in container-prose (640px), three to five paragraphs explaining why Grace exists. Below the narrative: leadership block in container-content (880px) introducing the four public-facing principals — William Armour (CEO), Andrew Armour (CFO), Duncan Cumming (CMO), and Aaron Randolph (Strategic Advisor). Each principal: small portrait, name in text-h3, role in text-eyebrow, single-paragraph bio in text-body.

Below leadership: a CommitmentBlock restating the four foundational commitments (also displayed on homepage). Below the CommitmentBlock: a brief block on Grace’s faith identity and the Proverbs 11:1 anchor explained — what “a just weight” means operationally, how Grace’s commitments express it. Below the faith block: links to /who-we-are/williams-story and /who-we-are/compliance as EntryCard components. Footer.

### 24.2 Leadership consolidation

All four public-facing principals appear here. Noah Lasky (Head of Sales) does NOT appear in public-facing content per the brand canon. Aaron Randolph appears with the title “Strategic Advisor”; his Crown Sponsor role and Valuetainment background are referenced briefly without belabouring the celebrity-network angle.

> **FLAG:** *Principal portraits are open. William’s portrait is commissioned and pending. Andrew’s, Duncan’s, and Aaron’s portraits are not yet specified. Implementer renders neutral placeholders until portraits are delivered. Section 38 logs as open decisions.*

### 24.3 The faith block

This is the second-most-load-bearing surface for faith identity on the site, after /williams-story. The block explains Proverbs 11:1 operationally: “a just weight” means the reader sees the same number Grace’s accountants see; the verse is not decoration but a structural test of the brand’s claims. Length 200-300 words. Counsel-cleared on the religious framing for any state where religious-claim language is regulated.

### 24.4 Compliance gates

- William’s role and history reviewed for Genesis non-compete exposure
- Aaron’s role described accurately — “Strategic Advisor” with vesting against milestones, not “investor” or “partner”
- MTG verbal-interest status NOT referenced on this page — ambassador surfacing is contingent on signed agreement (Section 35)
- Standard disclaimer applies

---

**SECTION 25**

## Narrative Testimony — /who-we-are/williams-story

*Applies to: 1 page (/who-we-are/williams-story)*  
*Copy source: v3.5 Launch Website Copy, William testimony section*  
*Wireframe reference: v2 wireframes consolidated, Template 4*  

The single highest-conversion content page on the site. William’s pastoral testimony is the primary trust signal in the brand DNA. The page is structured as a long-form narrative, not a marketing page, and the visual treatment supports that.

### 25.1 Layout architecture

VerseHero at the top with the verse band (second architectural placement of the verse). H1: “William’s Story.” Subhead: a single sentence framing what the reader is about to read. William’s portrait below the hero in a 4:5 or 3:2 crop, full-width within container-content (880px max). Below the portrait: long-form narrative in container-prose (640px max), in editorial register, in William’s actual voice (counsel-cleared on Genesis non-compete framing). The narrative is 1,500-2,500 words.

### 25.2 Three versions specified

Per the brand DNA document, William’s testimony has three planned versions: full video (20-30 minutes), publisher interview format, pastoral short. The /williams-story page hosts all three.

- Full video: embedded at the top of the narrative, below the hero, with a poster image (the William portrait). Plays inline; no autoplay. Hosting platform pending CMO call (YouTube embed vs Vimeo vs self-hosted) — see Section 38
- Publisher interview format: linked from below the video as “Read the publisher interview” LinkArrow
- Pastoral short: linked from below the video as “Read the pastoral version” LinkArrow

### 25.3 Compliance gates

- William’s Genesis non-compete: any reference to his specific prior role requires external counsel clearance
- The narrative’s framing of “the industry” — substantiated category-level claims only, no specific competitor naming
- Standard disclaimer in footer applies

---

**SECTION 26**

## Compliance Disclosure — /who-we-are/compliance

*Applies to: 1 page (/who-we-are/compliance)*  
*Copy source: v3.5 Launch Website Copy, compliance section*  
*Wireframe reference: v2 wireframes consolidated, Template 5*  

The compliance disclosure page is where the refusals pattern lives most densely. It is structured as a series of operational commitments and active refusals, each in its own block, with the substantiation visible.

### 34.1 Layout architecture

StandardHero at the top. Below: alternating CommitmentBlock and RefusalBlock components, structured as: “What we charge,” “What we do not charge,” “How we get paid,” “How we do not get paid,” “What we sell,” “What we do not sell,” “How we are licensed,” “How we handle your data,” “What we cannot promise.” Each block is a discrete content unit with eyebrow label, heading in text-h3, body in text-body.

Closes with the standard disclaimer in full — not the truncated version that appears in the footer, the complete language counsel has approved. Followed by counsel/legal sign-offs and date stamps for each significant claim.

### 34.2 Counsel review schedule

This page is reviewed by external counsel quarterly. The review date is published at the bottom of the page (“Last counsel review: [date]”). Any claim or commitment on the page that has not been counsel-reviewed in the last 12 months is flagged for review and either updated or removed.

---

**SECTION 27**

## FAQ — /faq

*Applies to: 1 page (/faq)*  
*Copy source: v3.5 Launch Website Copy, FAQ section*  
*Wireframe reference: v2 wireframes consolidated, Template 6*  

FAQ structured by topic cluster. Each cluster is a section header (text-h2). Each Q&A is an accordion-style disclosure: question in text-h3, answer reveals on click in text-body.

### 35.1 Layout architecture

StandardHero at the top. Body in container-content (880px). Topic clusters as sections — typical clusters: pricing, rollover process, custodian and depository, William and Grace, compliance, technical questions. Each Q&A uses native <details>/<summary> for accessibility (screen readers handle them well; no JavaScript required for basic functionality). Visual treatment: question with chevron icon, body collapsed by default, expand on click.

### 35.2 Compliance gates

- Specific pricing claims must be CFO-cleared and dated
- Comparative claims at category level only, never naming a competitor
- Standard disclaimer applies; specific disclaimers inline where required

---

**SECTION 28**

## Contact — /contact

*Applies to: 1 page (/contact)*  
*Copy source: v3.5 Launch Website Copy, contact section*  
*Wireframe reference: v2 wireframes consolidated, Template 7*  

Contact page provides multiple paths for the reader to reach Grace. Structured by intent rather than by channel.

### 36.1 Layout architecture

StandardHero at the top with eyebrow, H1 (“Talk to us.”), subhead. Below the hero: three EntryCard components routing to: “Talk to an advisor” (primary path, links to /advisor), “Request the Briefing” (links to /briefing), “Send us a question” (opens the contact form below). Below the entry cards: the contact form in container-prose. Form fields: name, email, message, topic dropdown (rollover, pricing, transfer, advisor question, other). Submission goes to a Klaviyo email-to flow. Confirmation handled per Section 16.6.

### 36.2 Office hours and response time

Below the form: a small block with office hours (specific to the brand’s licensed states), expected response time (“We respond within one business day”), and a non-emergency phone number. No live-chat widget.

---

**SECTION 29**

## Briefing Landing — /briefing

*Applies to: 1 page (/briefing)*  
*Copy source: v3.5 Launch Website Copy, Briefing section (added in v3.5)*  
*Wireframe reference: v2 wireframes consolidated, Template 8*  

The Briefing Landing is the single most-important lead-capture surface on the site. It is the only page on Grace’s site that captures email — the homepage and other pages do not. The page is structured to be substantial enough that the reader who downloads the Briefing has chosen to read it, not been tricked into a list.

> **FLAG:** *Architecture v1.1 does not list /briefing in its 22-page launch inventory; v3.5 launch copy includes it. v1.1 of this design brief resolves the conflict in favor of v3.5 — the Briefing landing ships at launch as the single email-capture surface. Footer newsletter subscription (referenced in architecture v1.1) is REFUSED — email capture appears only on /briefing per the brand’s lead-capture discipline.*

### 37.1 Layout architecture

BriefingHero at the top: restrained eyebrow, H1 (“The Secret Gold Briefing”), deck (“How to evaluate a Gold IRA company, and why we built ours”). No CTA in the hero — the form is the CTA, and it sits below.

Below the hero: William pull-quote justifying the ask. Below the pull-quote: “What’s inside” section with five CommitmentBlock-style entries describing each section of the Briefing (the briefing has five sections; section 2 documents the four foundational commitments). Below: BriefingForm component for capture (name, email, single-line callback disclosure, walnut CTA). Below the form: RefusalBlock listing the trust commitments (“We do not sell your email,” “We do not pass it to a salesperson without your permission,” “We do not use it to retarget you with ads,” etc.). Footer.

### 37.2 Form mechanics

Form submits to Klaviyo via API. On submission: Klaviyo triggers a flow that emails the Briefing PDF to the address provided. The user sees a success state replacing the form (per Section 16.6). The user is added to a Klaviyo list tagged “Briefing requested” and enters a nurture flow per the GTM strategy.

The single-line callback disclosure is non-negotiable per v3.5 specification. It reads: “We do not call you. The Briefing arrives in your inbox; if you want to talk to an advisor afterward, you reach out.”

### 37.3 PDF generation and delivery

The Briefing PDF is a separately-produced asset — not generated dynamically. Andrew or the operations team produces the PDF; Klaviyo delivers it from a static URL. Implementer wires up the Klaviyo API and confirms PDF delivery in the email flow.

---

**SECTION 30**

## Reviews — /reviews (soft-launch state)

*Applies to: 1 page (/reviews)*  
*Architecture reference: Sections 11 and 12, Decision 3*  

The /reviews page exists architecturally but does not surface at launch. Per the architecture’s Decision 3, the page is reserved (footer link only) and soft-launches in quarter two once Grace’s review-generation programme has produced verifiable volume. The route exists; the page is functional; it is not promoted into navigation until the review volume is real.

### 38.1 Pre-soft-launch state

At launch, /reviews is reachable from the footer but not from primary or secondary navigation. The page itself, when visited, displays a brief honest empty-state per Section 16.4 microcopy: an eyebrow (“Reviews”), an H2 (“We do not have customer reviews yet.”), a paragraph in body text explaining that Grace is launching transparency-first and reviews will appear here when they exist, verified through Trustpilot. A link to /briefing and to /advisor at the bottom for readers who arrived expecting reviews.

### 38.2 Post-soft-launch state

When the review programme has produced verifiable volume, the page transitions to a Reviews component. Layout: StandardHero, then verified-review entries pulled from Trustpilot via API or static export. Each review: rating, body, attribution, date. No carousel — reviews stack vertically. No filtering, no sorting at launch; the most recent reviews appear first. Pagination if volume exceeds 20 reviews.

### 38.3 Compliance gates

- Reviews must be verified through a third-party platform (Trustpilot at launch; Google Reviews in quarter two per Decision 2)
- No reviews are written or solicited by Grace; FTC endorsement rules apply
- Negative reviews are not filtered; the page displays the verified review feed faithfully

---

**SECTION 31**

## Legal pages — /legal/*

*Applies to: 4 pages (/legal/privacy, /legal/terms, /legal/disclosures, /legal/licenses)*  
*Copy source: counsel-supplied*  

Four legal pages live in the /legal/* path and are accessible from the footer. Each page is content-only — no marketing copy, no design flourish, no CTAs other than a single “Talk to an advisor” LinkArrow at the bottom. The pages are utilitarian by design; their visual treatment expresses the brand by being plain rather than decorated.

### 31.1 Layout architecture (shared template)

StandardHero at the top with eyebrow (“Legal”), H1 (the page title), subhead (single-sentence framing). Body in container-prose (640px max-width). Body content is counsel-supplied prose, rendered in body and bodySm tokens. Section headers in text-h2 and text-h3. Closes with last-counsel-reviewed date in text-body-sm and the standard disclaimer.

### 31.2 The four pages

- /legal/privacy — privacy policy. Specifies what data Grace collects, how it is used, how it is protected, the reader’s rights
- /legal/terms — terms of service. Acceptable use, account terms, limitations of liability, governing law
- /legal/disclosures — the standard disclaimer in full plus any specific disclosure language counsel requires (precious metals risk, tax content disclaimer, advisory disclaimer)
- /legal/licenses — the state-by-state licensing list. Updated as Grace adds licensed states. Pending Andrew’s confirmation of the launch state list (Section 38)

### 31.3 Compliance gates

- All four pages are counsel-authored or counsel-cleared. Implementer does not write legal content
- Quarterly counsel review cadence; review date published on each page
- Specific state law content requires the state list to be verified before launch

---

**SECTION 32**

## HTML sitemap — /sitemap

*Applies to: 1 page (/sitemap)*  

The HTML sitemap is a human-readable directory of every page on the site. It is distinct from sitemap.xml (the machine-readable file at /sitemap.xml that search engines crawl, specified in Section 33). The HTML sitemap exists for two readers: humans who navigate by sitemap (a small but real cohort, often older readers and accessibility users), and search-engine crawlers as a secondary directory.

### 32.1 Layout architecture

StandardHero with eyebrow (“Sitemap”), H1 (“Every page on this site.”), short subhead. Body in container-content (880px). Two-column or three-column grid of links organized by section: Primary navigation pages, Resources library, Legal pages, Utility pages. Each section header in text-h3; each link in text-body, body-ink color, with hover state to muted gold. No descriptions, no marketing copy — just the directory.

### 32.2 Maintenance

The sitemap can be generated dynamically from the Next.js routing tree at build time, eliminating the need to manually maintain a list. Implementer uses a build-time script that walks /app/(marketing)/ and /content/ to assemble the sitemap. New pages added to the routing tree appear in the sitemap on the next build.

---

**PART FIVE**

## Forward compatibility and production

Six sections covering SEO infrastructure, forward-compatibility for deferred features, ambassador surfacing treatment, social-share and OG specification, the Claude Code build specification, and the open-decisions log.

---

**SECTION 33**

## SEO infrastructure

This section specifies the SEO infrastructure layer — the structured data, machine-readable sitemap, robots configuration, canonical URL handling, and page-level meta strategy. The infrastructure is build-quality work, not content work; the content-side SEO strategy lives in the architecture document’s two-tier keyword architecture (Appendix A).

### 33.1 Schema.org structured data

Every page emits JSON-LD structured data appropriate to its template:

- Site-wide: Organization schema (name: Grace Precious Metals, logo, url, sameAs for social profiles, contactPoint for advisor line). Emitted in app/layout.tsx so it appears on every page
- Homepage: WebSite schema with potentialAction for SearchAction (when site search is implemented post-launch)
- Pillar Hub and Supporting Article: Article schema (headline, datePublished, dateModified, author, publisher referencing the Organization)
- FAQ page: FAQPage schema with Question/Answer entries for each accordion
- Reviews (post-soft-launch): aggregate Review schema once review volume exists
- Compliance and legal pages: no schema beyond the site-wide Organization — these are not content surfaces in the schema sense

Schema implementation: each page template includes a JSON-LD generator function that takes the MDX frontmatter and outputs the appropriate schema in a script tag in the head. Validation against schema.org and Google’s Rich Results Test before launch.

### 33.2 sitemap.xml

Generated dynamically at build time using next-sitemap or a custom build script. Located at /sitemap.xml. Includes every published page with lastmod (from the MDX file’s modified date), changefreq (defaults: daily for homepage, weekly for pillars, monthly for articles, yearly for legal pages), and priority. Excludes /404, /500, the HTML /sitemap, and any draft content. Submitted to Google Search Console and Bing Webmaster Tools post-launch.

### 33.3 robots.txt

Located at /robots.txt. Allows all standard crawlers full access to public content; disallows nothing at launch (Grace has no admin paths or internal-only content to hide). References the sitemap location. Specific bot blocks for AI training scrapers (GPTBot, ClaudeBot, Google-Extended) per Grace’s data-handling posture — the question of whether to allow AI training is a CMO decision (Section 38). Default at launch is to allow all bots; the disallow rules are added if the CMO chooses.

### 33.4 Canonical URLs

Every page emits a canonical URL via the link rel=canonical tag in the head. The canonical URL is the production URL of the page (https://gracepreciousmetals.com/[slug]), regardless of how the page was reached (e.g., via UTM-parameter link, via a redirect). This prevents duplicate-content penalties from inbound traffic with tracking parameters.

Canonical handling is implemented in app/layout.tsx via Next.js metadata API. Each page’s metadata function computes the canonical from NEXT_PUBLIC_SITE_URL plus the route segment.

### 33.5 Page-level title and description strategy

Each page’s title and meta description are specified in MDX frontmatter (per Section 37.3). The title strategy:

- Homepage: “Grace Precious Metals — Faith-based Gold IRA with published 11.1% pricing”
- Pillar pages: “[Pillar topic] — Grace Precious Metals”
- Article pages: “[Article title] — [Pillar name] — Grace Precious Metals”
- Legal pages: “[Legal page name] — Grace Precious Metals”
- Maximum title length 60 characters where possible (search-engine display threshold)

Meta descriptions are 140-155 characters, written in Plain Counsel voice, and accurately reflect the page content (no clickbait or over-promising).

### 33.6 Two-tier keyword architecture reference

Grace’s keyword strategy is specified in the architecture document’s Appendix A. Tier 1 (saturated, deferred): “best gold IRA company,” “gold IRA reviews,” “precious metals IRA.” Tier 2 (defensible, launch-targeted): “gold IRA round-trip cost,” “gold IRA buyback spread,” “salaried gold IRA advisor,” “transparent gold IRA pricing,” plus the keyword clusters specific to each Resources library pillar.

The implementer reads the keyword architecture from the canonical document and uses it to populate MDX frontmatter target-keyword tags. This brief does not duplicate the keyword research.

### 33.7 Open Graph and Twitter Card metadata

Specified in Section 36. Mentioned here only for completeness — OG and Twitter Card metadata are part of the SEO infrastructure layer and are generated per page from the same MDX frontmatter that drives schema.

---

**SECTION 34**

## Forward-compatibility for deferred features

Two deferred features are forward-compatible-ready in the design system: the Today’s Price live spot display and the Round-Trip Cost calculator. Both are planned for post-launch and are not implemented at v1.0. The design system is built so they can be added later without reopening core decisions.

### 34.1 Today's Price (/pricing/todays-price)

Per Section 11.3, the live spot price page treats the price as static-display data, not as a financial-news ticker. At launch, the route /pricing/todays-price returns a placeholder page: hero, body explaining that live spot prices are coming, link back to the pricing page. The route exists; the implementation is stubbed.

Reserved tokens (--gpm-data-positive, --gpm-data-negative, --gpm-data-neutral, --gpm-data-emphasis) are in the system per Section 7.4. The spot-price API integration, the refresh logic, and the layout component are post-launch work.

### 34.2 Round-Trip Cost Calculator (/pricing/calculator)

Per Section 11.4, the calculator presents in editorial-form register. At launch, the route /pricing/calculator returns a placeholder page similar to /pricing/todays-price.

The form-field component, the pricing-block component, the comparative pricing table component — all required for the calculator — are built at launch for use elsewhere on the site. The calculator integration is a matter of composing these components plus an API integration; no new components needed.

### 34.3 v3.4 calculator CTA copy rewriting

> **FLAG:** *v3.4 launch copy contained references to 'Calculate your round-trip cost' as a CTA. Because the calculator is post-launch, those CTAs in v3.4 needed rewriting before launch. v3.5 addresses this. Implementer should verify no calculator CTA references remain in launch content.*

---

**SECTION 35**

## Ambassador surfacing treatment

Marjorie Taylor Greene (MTG) is in verbal-interest stage as a brand ambassador per the brand DNA document. She is not contracted at the time of this brief. The design system is built to receive ambassador content if and when she signs, but the launch site does not assume her signature.

### 35.1 Pre-signing posture

At launch, no ambassador content appears on the site. There is no “as seen with [ambassador]” block. There is no MTG photo. There is no MTG quote. The category-default “as seen on” pattern does not appear at all. Grace’s brand at launch is anchored in William and the published pricing, not in any external endorsement.

### 35.2 Post-signing component specification

If MTG signs as ambassador, the design system supports a single component pattern for surfacing her. The component is AmbassadorBand: a tinted surface with a single pull-quote attributed to her, in the editorial-quote register (italic serif, attribution in body sans). It does not include her photograph as primary visual. It does not appear in the homepage hero. It appears, if at all, on supporting pages where her endorsement is editorially relevant (e.g., on /resources/why-grace, on a future ambassador-specific landing page).

FTC material-connection disclosure per Section 6.1 of the Brand DNA document is non-negotiable. Any ambassador surface includes the disclosure inline.

> **FLAG:** *MTG ambassador status is verbal interest only. Implementer does NOT build AmbassadorBand surfaces at launch. The component is reserved in the design system; activation is contingent on signed agreement and counsel sign-off. See Section 38.*

---

**SECTION 36**

## Social share, OG, favicon

Surfaces outside the editorial body of the site. Each is its own commercial register, and the brand discipline applies.

### 36.1 Open Graph images

Each page has an OG image at 1200×630px, generated dynamically using a single OG template. The template uses canvas as background, a 64px Source Serif 4 page-title text in display ink, the wordmark in the bottom-right corner, and a small deep-gold rule above the title. No photographs, no decorative imagery, no gradients.

Implementation: dynamic OG images via @vercel/og or a similar Next.js OG image library. Each page in app/ has a corresponding opengraph-image.tsx that returns the rendered image. The shared OG template lives in /lib/og-template.tsx.

### 36.2 Twitter card / X card

Same image as OG. Card type is summary_large_image. Twitter handle reference: @gracepreciousmetals (TBD by Andrew before launch).

### 36.3 Favicon set

Per Section 6.5. The mark-only favicon as 32×32 PNG, 16×16 PNG, and SVG. The Apple touch icon is 180×180 PNG using the same mark on dark canvas. The Android Chrome icon is 192×192 PNG and 512×512 PNG, same mark on dark canvas. The site.webmanifest references all sizes.

### 36.4 Social profile imagery

For social profile avatars (Instagram, X, LinkedIn, Facebook), use the Variant B reverse-colorway logo or the mark-only favicon depending on the platform’s avatar shape. Avoid using the full lockup (the wordmark loses legibility at avatar sizes).

---

**SECTION 37**

## Claude Code build specification

This section specifies the file structure, package dependencies, content source organization, MDX frontmatter schema, integrations, and deployment configuration. Claude Code reads this as the operational manual for the build.

### 37.1 Project initialization

The project is initialized as a Next.js 14+ App Router project with TypeScript and Tailwind. The exact initialization command:

```
npx create-next-app@latest grace-precious-metals --typescript --tailwind --app --src-dir --import-alias '@/*'
```

Initial dependencies to install after scaffolding:

```
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install next-mdx-remote # for MDX content sourced from /content
npm install @vercel/og # for dynamic OG images
npm install klaviyo-api # Klaviyo SDK
npm install @next/third-parties # GA4 integration
```

### 37.2 File structure

```
/grace-precious-metals
├── /app                    # Next.js App Router
│   ├── /(marketing)        # public-facing pages
│   │   ├── page.tsx        # homepage
│   │   ├── /pricing
│   │   ├── /rollover
│   │   ├── /who-we-are
│   │   ├── /resources
│   │   ├── /briefing
│   │   ├── /faq
│   │   ├── /contact
│   │   └── /advisor
│   ├── /api
│   │   └── /briefing/route.ts  # Klaviyo form handler
│   ├── layout.tsx          # root layout, font loading, GA4
│   ├── globals.css         # design tokens as CSS vars
│   ├── not-found.tsx       # 404 page
│   └── error.tsx           # 500 page
├── /components
│   ├── /nav
│   ├── /hero
│   ├── /content
│   ├── /forms
│   ├── /cta
│   └── /compliance
├── /content                 # MDX content
│   ├── /pillars
│   ├── /articles
│   └── /testimony
├── /lib
│   ├── klaviyo.ts          # Klaviyo client
│   ├── og-template.tsx     # shared OG template
│   └── mdx-utils.ts        # MDX rendering utils
├── /public
│   ├── /images
│   ├── /icons
│   └── favicon.svg, etc.
├── tokens.ts                # design tokens (source of truth)
├── tailwind.config.ts       # imports tokens.ts
├── next.config.js           # MDX config
├── package.json
├── tsconfig.json
├── DESIGN_BRIEF.md          # this document
└── CLAUDE.md                # Claude Code instruction file
```

### 37.3 MDX frontmatter schema

Every MDX content file has a frontmatter block specifying metadata. The schema:

```
---
title: "Page or article title"
slug: "url-slug"
description: "Meta description, 155 char max"
template: "pillar-hub" | "supporting-article" | "narrative-testimony" | etc.
eyebrow: "Section eyebrow text"
author: "Grace Precious Metals" | "William Armour" | etc.
date: "2026-04-15"
counselReviewDate: "2026-04-12"  # last counsel review date
complianceFlags:
  - "pricing-cfo-cleared"
  - "comparative-claim-counsel-cleared"
ogImage: "/og/[slug].png"  # auto-generated
---
```

### 37.4 Klaviyo integration

The Klaviyo integration handles two flows: the Briefing form submission and the contact form submission. Both use Klaviyo’s Server-Side API.

The Briefing form posts to /api/briefing. The route handler creates a profile in Klaviyo, adds them to the “Briefing requested” list, and triggers a flow that emails the Briefing PDF. The PDF lives at a static URL (Andrew or operations team produces); Klaviyo includes the link in the email.

The contact form posts to /api/contact. The route handler creates a profile if not exists, sends an internal notification email to the team via Klaviyo’s transactional API.

Klaviyo API key is stored as KLAVIYO_PRIVATE_KEY in environment variables. The Klaviyo public key (for client-side identity) is stored as NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY.

### 37.5 GA4 integration

GA4 loads via @next/third-parties. In app/layout.tsx:

```
import { GoogleAnalytics } from '@next/third-parties/google'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  )
}
```

Custom events to fire: briefing_form_submitted, contact_form_submitted, advisor_call_clicked, pricing_page_viewed, william_story_viewed. All events fire via gtag client-side.

### 37.6 Environment variables

```
# .env.local (development) and Vercel/host env (production)
KLAVIYO_PRIVATE_KEY=pk_xxx
NEXT_PUBLIC_KLAVIYO_PUBLIC_KEY=YYY
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://gracepreciousmetals.com
BRIEFING_PDF_URL=https://files.gracepreciousmetals.com/briefing.pdf
CONTACT_NOTIFICATION_EMAIL=team@gracepreciousmetals.com
```

### 37.7 Deployment

The build is deployment-target-agnostic. It runs on Vercel, Cloudflare Pages, or Netlify. Specific hosting decision is open per Section 30. The implementer should ensure no Vercel-specific features are used (other than @vercel/og, which has alternatives) so hosting can be chosen post-build without rework.

### 37.8 Build verification

Before launch, the implementer verifies:

- Lighthouse score ≥ 95 on every page (performance, accessibility, best practices, SEO)
- All contrast ratios meet specification per Section 7.5
- Klaviyo integration tested with a real form submission delivering the PDF
- GA4 events firing correctly per the event taxonomy
- All pages have OG images that render correctly
- All pages render correctly at mobile, tablet, desktop breakpoints
- Keyboard navigation works on every interactive element
- Reduced-motion respect tested with system reduced-motion enabled
- All open compliance flags addressed or documented as pending

---

**SECTION 38**

## Open decisions log

This section is the canonical log of decisions that are open as of this brief’s issuance. Each entry is named, the decision-maker is identified, the resolution path is specified, and the launch impact is flagged. The implementer treats each entry as either a resolved decision (when the resolution path completes) or as an explicit gap to surface during build.

### 38.1 Brand identity decisions

| Decision | Owner | Path |
|---|---|---|
| Production logo redrawing | CMO + designer | Brief specifies geometry; designer produces production artwork. Pre-launch. |
| “His” italic in verse | William | Implementer ships with italic; flag is config-controllable to strip if William rules. |
| Final copyright/trademark filing | Andrew + counsel | Logo registered as trademark before launch. Currently unregistered. |

### 38.2 Copy and content decisions

| Decision | Owner | Path |
|---|---|---|
| William testimony copy (full version) | William + counsel | William delivers approved version; counsel reviews Genesis non-compete framing. |
| William testimonial band placeholders | William | William supplies actual testimonials before launch. |
| Footer address and license states | Andrew | Confirmed before launch. |
| Briefing PDF asset | Operations team | PDF produced and hosted at static URL; Klaviyo references it. |
| Contact email and phone | Andrew | Confirmed before launch. |

### 38.3 Photography decisions

| Decision | Owner | Path |
|---|---|---|
| William portrait commission | CMO + photographer | Photographer selected; shoot scheduled. Pre-launch. |
| Lifestyle imagery selection | CMO | Stock library curated post-build, against the live site. Per Section 10.2. |
| Supporting still imagery | CMO | Curated post-build. Per Section 10.3. |

### 38.4 Compliance gates

| Gate | Owner | Path |
|---|---|---|
| William’s Genesis non-compete | External counsel | Review of any reference to his prior role before publication. |
| Pricing claims (CFO sign-off) | Andrew | Every published pricing claim CFO-cleared and dated. |
| Comparative claims (counsel review) | External counsel | Category-level claims like “a third more” require substantiation. |
| Standard disclaimer | External counsel | Final language counsel-cleared before launch. |
| FTC ambassador disclosure framework | External counsel | Required if MTG signs. Pre-launch if signing happens before launch. |
| State dealer licensing map | Andrew + counsel | License states confirmed; marketing copy bound to those states only. |
| AML/BSA program | Andrew | Operational before first customer. |

### 38.5 Build decisions

| Decision | Owner | Path |
|---|---|---|
| Hosting (Vercel / CF Pages / Netlify) | CMO + Andrew | Decision deferred. Build is target-agnostic per Section 29.7. |
| Domain and DNS | Andrew | Domain registered; DNS configured before launch. |
| Email infrastructure (Klaviyo private key) | Andrew | Klaviyo account established; API keys in environment. |
| GA4 property | CMO | GA4 property created; measurement ID in environment. |
| Cookie consent (per state requirements) | External counsel | Required jurisdictions identified; cookie banner per Section 16.9 if required. |

### 38.6 Post-launch deferrals

| Feature | Path |
|---|---|
| Today’s Price live spot display | Post-launch. Spot price API integration; layout already specified. |
| Round-Trip Cost calculator | Post-launch. Components already built; integration of price-fetch and calculation logic. |
| Resources library promotion to primary nav | Post-launch. Once 10+ articles published, promote /resources to primary nav. |
| Reviews block surfacing | Post-launch. Once verified review volume exists, soft-launch reviews surface. |
| Blog or magazine surface | Post-launch. If strategic need emerges, add a /journal or /magazine section. |
| MTG ambassador surfacing | Contingent on signing. AmbassadorBand component reserved; activation requires signed agreement. |
| Ad pixel integration | Post-launch. Meta, Google Ads, LinkedIn pixels scaffolded but not active. |

---

End of Design Brief, Version 1.1.

Authored for Duncan Cumming, Co-Founder & CMO. Awaiting CMO review.
