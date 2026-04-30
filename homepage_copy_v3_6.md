# Grace Precious Metals — Homepage Copy v3.6

**Status:** Authoritative source of truth for homepage copy.
**Supersedes:** `homepage_copy_fragments_v3_5.md` for the homepage. The v3.5 file remains canonical for any pages or content not specified in this document.
**Last updated:** 30 April 2026 (in-repo copy; CMO corrections (a) and (d) applied)

**In-repo corrections applied to the 2026-04-30 master:**
- §7 William's quote phrasing changed from "the gold industry" to "the Gold IRA industry" — preserves the LB-01 / LB-02 counsel-cleared scope on William's prior-role framing rather than triggering re-clearance on the narrower phrasing.
- §10 List item 08: "five operational promises" changed to "four operational promises" — homepage foundational commitments and briefing PDF promises now carry the same count. The briefing PDF authoring workstream must document four operational promises, not five.

This document carries every piece of locked copy specified for the homepage rebuild. Section numbering matches the production brief and the page architecture top to bottom.

---

## Editorial Conventions

These rules apply across every piece of copy in this document. Implementation must preserve them.

- American English throughout. Never British. ("recognize" not "recognise", "labor" not "labour", "favor" not "favour".)
- Curly typographic quotation marks throughout (` ' ' " " `). Never straight ASCII quotes.
- Real em-dashes (`—`). Real en-dashes (`–`) for ranges. Never two hyphens or a single hyphen used as a dash.
- Real arrow glyphs (`→`). Never `->` or `>>`.
- Real ellipses (`…`). Never three periods.
- Sentence case for all body copy and most headlines, except where explicitly title-cased in this document.
- Eyebrows render in ALL CAPS via the typed copy itself, not via CSS `text-transform`.
- Non-breaking spaces (`&nbsp;`) inside protected phrases as specified per section.

---

## 1. Site Header

### Logo cluster (left)

**Wordmark:** `Grace`

**Tagline:** `PRECIOUS METALS`

(Wordmark and tagline form the brand mark. Tagline drops below 480px viewport.)

### Primary navigation (centre/right)

```
Pricing
Rollover
Who We Are
Advisor
```

### Header CTAs (right)

**Outlined walnut, secondary navigation register:**

```
Get the Briefing
```

```
Talk to an advisor
```

(On mobile only, "Talk to an advisor" overrides to Tier 1 gold-filled as the page's primary mobile conversion path. Hamburger menu carries the four nav links plus a "Get the Briefing" button.)

---

## 2. Hero Banner

### Eyebrow

```
PROVERBS 11:1 — A JUST WEIGHT IS HIS DELIGHT.
```

(Em-dash. Copy is already typed in capitals. Do not apply CSS uppercase.)

### Headline

```
A Gold IRA at 11.1% spread, all-in. Buyback at spot.
```

**Production HTML with non-breaking spaces:**

```html
A Gold IRA at 11.1%&nbsp;spread,&nbsp;all-in. Buyback&nbsp;at&nbsp;spot.
```

The headline contains two phrases that must never split mid-phrase under any circumstances: the price claim ("11.1% spread, all-in.") and the buyback claim ("Buyback at spot."). Acceptable line breaks at any viewport: before "11.1%", or before "Buyback". Never anywhere inside either protected phrase.

### Sub

```
No admin fee. No setup fee.
```

### Primary CTA

```
See our pricing
```

(No terminal period. Button label, not a sentence. Links to `/pricing`. The pricing page must remain gateless — no form, no phone capture required.)

### Hero form panel (right zone)

**Eyebrow:**

```
GET THE SECRET GOLD BRIEFING
```

**Subtitle:**

```
What the Other IRA Companies Hide From You.
```

(Italic serif. Title case is intentional.)

**Form fields, in order, all required:**

```
Name
Email
Phone
```

**Field placeholders:**

```
Your name
Your email
Your phone number
```

**Form CTA:**

```
Send me the briefing
```

**Disclosure (beneath the form):**

```
We will email the briefing as a PDF. We do not sell or share your details.
```

(Italic serif. Centered.)

---

## 3. Trust Strip

Four signals, two-line stack each. Implementation reads `TRUST_STRIP_CUSTODIAN_PARTNERSHIPS_CONFIRMED` config flag — render four signals if `true`, three signals if `false`. Default `false` until partnerships are signed and partner names documented in the substantiation file.

### Signal 1

```
11.1% SPREAD
PUBLISHED, ALL-IN
```

### Signal 2

```
BUYBACK AT SPOT
NEVER BELOW
```

### Signal 3 (conditional — see flag above)

```
IRS-APPROVED CUSTODIAN
& DEPOSITORY
```

### Signal 4

```
SALARIED ADVISORS
NO COMMISSION
```

(Position of the conditional signal in the rendered strip: third from left when present, between "Buyback at spot" and "Salaried advisors." When absent, the three remaining signals distribute evenly.)

---

## 4. America's First — Two-Column Block

### Eyebrow

```
A FIRST IN THE INDUSTRY
```

### Headline (left column)

```
America's first Gold IRA company to publish its spread.
```

### Body paragraph (right column)

```
Grace Precious Metals is the first Gold IRA company in the country to publish its full spread before a single phone call. The number is 11.1%, all-in. It is on the website, it is the same for every customer, and it does not change when you call. Until now, every Gold IRA company in America made you sit through a sales pitch before they would tell you what their gold actually costs. That is the practice we left to build this one.
```

(Curly apostrophe in "America's". Em-dashes if any introduced in revision should be real em-dashes.)

---

## 5. Foundational Commitments — Four Cards

### Section eyebrow

```
OUR PROMISE
```

### Section headline

```
Grace Precious Metals: Our Foundational Commitments
```

### Section lead paragraph

```
Building trust through transparency, authenticity, and insight.
```

### Card 1

**Numeral:** `01`

**Headline:**

```
Published spread, 11.1% all-in
```

**Description:**

```
The markup over spot is 11.1%. That is the whole markup. Nothing is added on a phone call. Nothing is negotiated off it.
```

**Bottom link:**

```
See the pricing page →
```

### Card 2

**Numeral:** `02`

**Headline:**

```
Buyback at spot, never below
```

**Description:**

```
When you sell back to us, we pay the spot price on the day. We do not mark the buyback down to build a second margin on exit.
```

**Bottom link:**

```
How buyback works →
```

### Card 3

**Numeral:** `03`

**Headline:**

```
Standard IRS-eligible bullion only
```

**Description:**

```
American Eagles, Canadian Maple Leafs, LBMA-approved bars. No numismatic, exclusive, rare, premium, or proof coins in any form.
```

**Bottom link:**

```
Why we refuse numismatics →
```

### Card 4

**Numeral:** `04`

**Headline:**

```
Salaried advisors. No commission.
```

**Description:**

```
The person you speak to earns the same whether you buy or sell. No commissions, no referral fees, no volume incentives.
```

**Bottom link:**

```
Meet the advisor team →
```

(Commitment 5, "No phone-gate on pricing", removed entirely from the foundational commitments framework. Update DESIGN_BRIEF.md to reflect four commitments only.)

---

## 6. What We Sell — Standard Bullion Section

### Eyebrow

```
WHAT WE SELL
```

### Headline

```
Standard bullion. Nothing else.
```

### Lead paragraph

```
We sell IRS-eligible gold and silver — the same coins and bars held in retirement accounts across the country. Standard products, standard weights, priced against the spot market. The number on our pricing page is the number you pay for them.
```

### Product captions (beneath each image, four-product row)

```
American Gold Eagle
```

```
Canadian Gold Maple Leaf
```

```
American Silver Eagle
```

```
LBMA-approved gold bar
```

### Closing paragraph (below the product row)

```
We do not sell numismatic, "rare," "exclusive," "premium," or proof coins. The markup on those products is how this industry hides its real margin — sometimes thirty percent, sometimes fifty, sometimes more. We will not sell them. And if another company has sold them to you, we will tell you what they actually cost.
```

(Curly quote marks around each individual term. Em-dash. Real ellipsis if any introduced.)

### Inline link

```
Why we refuse numismatics →
```

---

## 7. William's Pulled-Quote Section

### Quote

```
"I left the Gold IRA industry because I couldn't reconcile what I was selling with what I preached. This is the company I built to change that."
```

(Curly opening and closing quote marks. Curly apostrophe in "couldn't". Phrasing "the Gold IRA industry" preserves the LB-01 / LB-02 counsel-cleared scope.)

### Attribution

```
William Armour
CO-FOUNDER & CEO
```

### Bottom link

```
Read William's story →
```

(Updated from earlier "Read William's full story →" — shortened per production brief.)

---

## 8. Testimonials — "What people say about William"

### Section eyebrow

```
TESTIMONIALS
```

### Section headline

```
What people say about William.
```

### Section lead paragraph

```
Grace was built around one man's conviction. These are testimonials about William Armour — from people who have worked with him, been counselled by him, or known him personally over his years in ministry and in the Gold IRA industry.
```

### Italic line beneath lead

```
They describe William. Grace is the company he built.
```

### Testimonial 1

**Body:**

```
"Called three companies before Grace. William was the only one who told me the total cost on the first call. No 'let me check with my manager.' Just the number."
```

**Attribution:**

```
Robert Haines
Knoxville, TN
```

### Testimonial 2

**Body:**

```
"William spent forty minutes explaining the difference between bullion and numismatic coins. Then said, 'take the briefing home and pray on it.' No one in this industry says that."
```

**Attribution:**

```
Linda Prescott
Scottsdale, AZ
```

### Testimonial 3

**Body:**

```
"I've known William through church for twelve years. When he told me he was building a gold company on Proverbs 11:1, I believed him — because I've watched him live it."
```

**Attribution:**

```
Pastor David Chen
Dallas, TX
```

### Testimonial 4

**Body:**

```
"Another company quoted me $82,000 in 'rare' coins for a $60,000 rollover. William showed me the math on why that was wrong. He didn't even ask for my business — just said 'you deserve to know.'"
```

**Attribution:**

```
James & Carol Whitfield
Charlotte, NC
```

### Below the grid

```
Read William's story →
```

**LAUNCH NOTE:** Per `LAUNCH_BLOCKERS.md` LB-10, William has not yet delivered redlined consent on these testimonials. Implementation proceeds with the copy above as placeholder. Real testimonials with William's redline and consent must replace placeholders before public launch. If William delivers fewer than four, the section either renders with however many he has confirmed or comes off the homepage entirely. Do not ship four named testimonials publicly without consent on record for all four.

---

## 9. Already Spoken to Another Gold IRA Company

### Eyebrow

```
COMPARE
```

### Headline

```
Already spoken to another Gold IRA company?
```

### Italic provocation line

```
Bring us the quote. We will tell you what it actually costs.
```

### Body paragraph 1

```
Most companies in this industry will not show you a number until you are on a call with a commissioned salesperson. If you have already had that call, you know the pattern — heavy on urgency, light on math.
```

### Body paragraph 2

```
We do the math with you. Ours is published. Theirs we can work out together.
```

### "What you will probably find" intro

```
What you will probably find:
```

### Four-bullet list

```
A spread that is wider than it sounds
A buyback price below spot, or no buyback price at all
Numismatic or "exclusive" coins priced well above standard bullion
Setup or admin fees that were not in the headline number
```

(Curly quote marks around "exclusive". No terminal punctuation on bullet items.)

### Section CTA

```
Talk to a Salaried Advisor
```

---

## 10. The Secret Gold Briefing Section

### Eyebrow

```
THE SECRET GOLD BRIEFING
```

### Section headline

```
What the Other IRA Companies Hide From You.
```

(Title case. Italic serif. Same exact copy as the hero form subtitle by design — the page presents the briefing twice with consistent framing.)

### WHAT'S INSIDE label

```
WHAT'S INSIDE
```

(Curly apostrophe.)

### List item 01

**Numeral:** `01`

**Description:**

```
Grace's pricing in full — 11.1% spread, no admin fee, buyback at spot — with the math on a $100,000 rollover.
```

### List item 02

**Numeral:** `02`

**Description:**

```
How the industry hides its real margin — the four pricing tactics every commissioned salesperson uses.
```

### List item 03

**Numeral:** `03`

**Description:**

```
What Grace sells — standard bullion only. Why we refuse numismatic and "rare" coins, with the markup math (30–50%).
```

(Curly quotes around "rare". En-dash in 30–50%.)

### List item 04

**Numeral:** `04`

**Description:**

```
What "buyback at spot" actually means — and how to verify any company's policy.
```

(Curly quotes around "buyback at spot". Curly apostrophe.)

### List item 05

**Numeral:** `05`

**Description:**

```
The rollover process, step by step — what you sign, what your custodian handles, what your timeline looks like.
```

### List item 06

**Numeral:** `06`

**Description:**

```
The IRS rules that matter — eligibility, contribution limits, distribution timing, and what changes for inherited accounts.
```

### List item 07

**Numeral:** `07`

**Description:**

```
What to ask before you sign — a one-page checklist of questions for any Gold IRA company, with what good and bad answers look like.
```

### List item 08

**Numeral:** `08`

**Description:**

```
Grace's structural commitments — the four operational promises this company is built on, written in plain English.
```

(Curly apostrophe. Aligned with the four foundational commitments on the homepage. Briefing PDF authoring workstream must document four operational promises, not five.)

### Cover artwork — internal copy

**Wordmark on cover:**

```
Grace
```

**Tagline beneath wordmark:**

```
PRECIOUS METALS
```

**Title (two lines, centred):**

```
The Secret
Gold Briefing
```

**Italic subtitle beneath title:**

```
What the Other IRA Companies Hide From You.
```

**Photograph zone:** mature couple at a kitchen table reviewing documents with a small bullion coin or bar present. (Imagery direction; copy not applicable.)

**Cover footer line 1 (italic):**

```
PROVERBS 11:1 · A just weight is His delight.
```

(Center dot `·` separator, not a hyphen.)

**Cover footer line 2:**

```
GRACE PRECIOUS METALS · First edition · 2026
```

### Page-count caption (beneath the cover)

```
12 PAGES · PDF
```

(Center dot separator.)

### Form fields, in order, all required

```
Name
Email
Phone
```

### Field placeholders

```
Your name
Your email
Your phone number
```

### Form CTA

```
Send me the briefing
```

(Identical to hero form CTA. Both render in primary gold `#B8962E`.)

### Disclosure (beneath the form)

```
We will email the briefing as a PDF. We do not sell or share your details.
```

---

## 11. Find What Fits Where You Are — Three-Card Grid

### Section eyebrow

```
YOUR STARTING POINT
```

### Section headline

```
Find what fits where you are
```

### Card 1

**Path label:**

```
PATH 1
```

**Card headline:**

```
New to Gold IRAs
```

**Card description:**

```
Start with how a rollover works. What you can roll over, how the timing works, what the tax treatment looks like.
```

**Card bottom link:**

```
How a rollover works →
```

### Card 2

**Path label:**

```
PATH 2
```

**Card headline:**

```
Already hold a Gold IRA
```

**Card description:**

```
Start by requesting your current provider's buyback quote. That number tells you what you actually paid on entry.
```

**Card bottom link:**

```
The transfer guide →
```

### Card 3

**Path label:**

```
PATH 3
```

**Card headline:**

```
Inheriting a Gold IRA
```

**Card description:**

```
An inherited Gold IRA follows different rules than a rollover. The decisions you make in the first year shape tax treatment for years afterward. Start with the timeline.
```

**Card bottom link:**

```
How inherited IRAs work →
```

---

## 12. Disclaimer Paragraphs

### Paragraph 1

**Italic lead phrase (italic only on the lead, then upright):**

```
Grace Precious Metals is a precious metals dealer.
```

**Continuation (upright):**

```
Gold IRAs require an IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a financial, tax, or legal advisor. Gold and precious metals investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. Consult qualified professionals before making investment decisions. Pricing reflects CFO-reviewed published policy as of the date shown.
```

### Paragraph 2 (all upright)

```
"A typical Gold IRA costs about a third more" compares Grace's round-trip cost (entry spread plus ongoing custodian and depository fees; buyback at spot, zero exit spread) against the midpoint of the category-typical round-trip cost range of 17%–33%, substantiated from published research on Gold IRA pricing and regulatory enforcement records. Substantiation files available on counsel request. No specific competitor is identified on this page.
```

(Curly opening and closing quotes around the framed claim. Curly apostrophe in "Grace's". En-dashes for the percentage range.)

---

## 13. Site Footer

### Column 1

**Header:**

```
PAGES
```

**Links:**

```
Our Pricing
How A Rollover Works
Inherited IRA
Transfer Guide
Who We Are
William's Story
Compliance
Talk To An Advisor
```

(Curly apostrophe in "William's".)

### Column 2

**Header:**

```
RESOURCES
```

**Links:**

```
Resources Library
Buyback
Round-trip Cost
Numismatic Coins
FAQ
```

### Column 3

**Header:**

```
TALK TO US
```

**Links:**

```
Get the Briefing
Contact
```

**Pending text (italic, displayed beneath Contact):**

```
Office hours and phone — pending confirmation.
```

(Em-dash.)

### Column 4

**Header:**

```
COMPLIANCE
```

**Links:**

```
Privacy
Terms
Disclosures
State Licenses
```

### Footer bottom row

```
Grace Precious Metals · [address — pending confirmation] · © 2026 Grace Precious Metals. All rights reserved.
```

(Center dot separators. Address marked pending — see LAUNCH_BLOCKERS.md.)

---

## Form Submission Behaviour

Both forms (hero form and briefing section form) submit to the same endpoint and capture the same payload.

### Form data shape

```
{
  name: string,
  email: string,
  phone: string,
  source: 'hero' | 'briefing_section',
  submitted_at: ISO timestamp
}
```

### Validation messages

**Empty Name field error:**

```
Please enter your name.
```

**Empty Email field error:**

```
Please enter your email.
```

**Invalid Email format error:**

```
Please enter a valid email address.
```

**Empty Phone field error:**

```
Please enter your phone number.
```

**Invalid Phone format error:**

```
Please enter a valid phone number.
```

**Submission error (general):**

```
Something went wrong. Please try again or call us.
```

### Submission success state

Replace the form with a confirmation block. Same visual position, same panel/container as the form.

**Confirmation headline (Source Serif 4 italic):**

```
Check your email. The briefing is on its way.
```

**Confirmation sub (smaller, optional):**

```
If you don't see it within five minutes, check your spam folder.
```

(Curly apostrophe in "don't".)

---

## Copy Decisions Logged in This Document

The following decisions were made in the planning thread and are now canonical via this file:

1. **Hero copy rewrite** from v3.5's "No Hidden Costs. Low Fees." to "A Gold IRA at 11.1% spread, all-in. Buyback at spot." — leads with the spread, names the product category, intentional CMO override of the prior cleared copy.
2. **The Secret Gold Briefing** — artifact renamed from "The Just Weight Briefing." Naming applies to the homepage, the cover artwork, the briefing PDF document, page metadata, and any downstream references. Header CTA and footer link remain "Get the Briefing" (shorter, navigational).
3. **"What the Other IRA Companies Hide From You."** — the curiosity-hook subtitle, used identically on the hero form panel and the briefing section. Title-cased intentionally as a deliberate emphasis device.
4. **"Secret" in the eyebrow** — locked. Will not be revisited.
5. **Foundational Commitment 5 removed entirely.** The framework is four commitments (01–04). Update DESIGN_BRIEF.md.
6. **Hero data-capture form** — primary above-the-fold lead capture. Phone field required, not optional. Override of the prior in-repo no-lead-capture rule. Update CLAUDE.md.
7. **"Read William's story →"** — shortened from prior "Read William's full story →".
8. **Disclosure copy beneath both forms** — identical in both locations: "We will email the briefing as a PDF. We do not sell or share your details."

---

## Open Items Not Resolved by This Document

These are dependencies, not copy questions. Listed for traceability:

- William's commissioned portrait (placeholder until landed)
- William's redlined testimonials with consent (placeholder copy until landed — LB-10)
- Trust strip fourth signal: partnership confirmation (config flag default `false` until LB-06 cleared)
- Office hours and phone number for footer Column 3 (pending operational confirmation)
- Footer bottom-row address (pending operational confirmation)
- Counsel-cleared TrustBlock copy if reintroduced (LB pending)
- The Secret Gold Briefing PDF authoring (separate workstream — placeholder PDF in `public/` for local form testing)

---

*End of homepage_copy_v3_6.md*
