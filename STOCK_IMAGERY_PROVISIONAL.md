# Stock imagery — provisional

The six images currently rendered on the homepage are sourced from
Unsplash and Pexels under each platform's free license. They are
**provisional**: they were chosen to set the editorial register for the
launch homepage and may be replaced — in whole or in part — before
public launch. Final selection (including the commissioning of
William's actual portrait per DESIGN_BRIEF.md Section 10.1 and Section
38) supersedes the choices recorded here.

This file is the source of truth for which image sits in which slot,
where each came from, and what license applies. Update it when an
image is replaced.

---

## Direction note (CMO call, 2026-04-27)

The current imagery selection follows a CMO direction that **deviates
from DESIGN_BRIEF.md Section 3 and Section 10**. Specifically:

- **Refusal 4 (Section 3) — product fondling.** The brief refuses
  hero-position bullion and "stacked gold coins, gleaming bars, hands
  holding bullion, gold-bathed lighting." The current Hero slot uses a
  close-up of gold bullion coins (no hands, no gold-bathed glow,
  neutral surface), and the verse anchor uses vintage coins on a
  wooden surface. Section 10.3 permits coins "specimen-style on a
  neutral surface" in technical educational content; the CMO has
  extended that treatment to the homepage hero and verse anchor.
- **Refusal 3 (Section 3) and Section 10.2 — aspirational stock-couple
  imagery.** The brief refuses the Augusta/Goldco retiree-on-beach
  register. The current Path 1 and Path 2 cards show older adults
  (one at a window, one at a table writing), in editorial natural
  light, single subjects, no smiling-on-beach register and no
  marketing-styled couple compositions. The CMO has accepted this
  audience-mirror imagery as on-brand for the launch homepage.

The brief should be updated separately to reflect the CMO's revised
direction. Until that update lands, this file is the explicit record
that the current imagery is brand-cleared by CMO call rather than
brief-aligned.

---

## Production-brief homepage assets — Manus bundle (2026-04-30)

The CMO authorised "Option A" on 2026-04-29; the production brief
homepage is built against `homepage_copy_v3_6.md` and the Manus image
bundle delivered 2026-04-30. The Manus bundle covers all seven imagery
slots required by v3.6 §2, §6, §7, §9, §10, and §11. Phase 2 of the
build wires these in — the v3.5 inventory below remains in place until
the relevant components are refactored.

**Bundle source:** `/Users/duncancumming/Downloads/grace-homepage-image-assets/`
(see `image-map.txt` for the canonical filename → slot mapping).

**Provenance:** CMO confirmed on 2026-04-30 that bundle provenance is not
yet known (AI-generated, licensed stock, or commissioned). Provenance must
be confirmed before public launch and recorded in the table below.

### Production assets to be placed under `public/images/homepage/`

| Slot (v3.6 §) | File | Purpose | Provenance | License |
|---|---|---|---|---|
| §2 Hero — photographic backdrop | `hero-background-gold-coins.jpg` | Full-bleed hero gold coin photography | Pending CMO confirmation | Pending |
| §6 What we sell — Gold Eagle | `coin-american-gold-eagle.jpg` | Square crop, four-product grid | Pending | Pending |
| §6 What we sell — Maple Leaf | `coin-canadian-gold-maple-leaf.jpg` | Square crop | Pending | Pending |
| §6 What we sell — Silver Eagle | `coin-american-silver-eagle.jpg` | Square crop | Pending | Pending |
| §6 What we sell — LBMA bar | `coin-lbma-gold-bar.jpg` | Square crop | Pending | Pending |
| §7 William pulled-quote — circular portrait (provisional, LB-09) | `william-portrait.png` | Pre-cropped circular, 120px | Pending | Pending |
| §7 — source archive | `william-portrait-source-original.jpg` | Source archive for any future reprocess | Pending | Pending |
| §9 Already spoken — older couple at desk | `already-spoken-couple-documents.jpg` | Lifestyle, right column | Pending | Pending |
| §10 Briefing cover — photograph zone | `briefing-cover-photo.jpg` | Inside the 3D cover composition | Pending | Pending |
| §11 Find what fits — Path 1 (New to Gold IRAs) | `card-new-to-gold-iras.jpg` | Lifestyle, top of card | Pending | Pending |
| §11 Find what fits — Path 2 (Already hold) | `card-already-hold-gold-ira.jpg` | Lifestyle, top of card | Pending | Pending |
| §11 Find what fits — Path 3 (Inheriting) | `card-inheriting-gold-ira.jpg` | Lifestyle, top of card | Pending | Pending |

### Bundle assets not used in the production homepage build

The Manus bundle ships several legacy/alternative variants. These are
catalogued in `image-map.txt` but not wired into the production homepage:

- `legacy-coin-gold-eagle-rect.jpg`, `legacy-coin-maple-leaf-rect.jpg`, `legacy-coin-silver-eagle-rect.jpg`, `legacy-coin-silver-eagle-new.jpg` — rectangular coin variants superseded by the square crops above
- `legacy-coins-on-wood-surface.jpg` — hero exploration variant; superseded
- `legacy-hero-coin-cream-bg.png` — earlier AI-generated hero variant; superseded
- `legacy-hero-wheat-field.jpg` — earlier hero variant (wheat field); CMO confirmed 2026-04-30 to ignore
- `legacy-path-contemplative-man.jpg`, `legacy-path-elderly-writing.jpg`, `legacy-path-professional-desk.jpg` — earlier path-card variants; superseded

These remain in the source bundle for archival; do not copy them into `public/`.

### Trust strip pictograms (§3) — separate dependency, not in the Manus bundle

The four trust-strip signals require single-stroke walnut pictograms (22px).
Production-brief direction. The bundle does not include icons (correctly —
photographs and icons are distinct workstreams). `lucide-react` is already
in `package.json`; specific icon assignments will be made in Phase 2C when
the TrustStrip component is built.

---

## Legacy inventory (v3.5 implementation, currently rendering until Phase 2 refactors land)

The table below describes the v3.5 imagery currently rendering on
`phase-2-content-import`. Phase 2D-2F refactors retire most of these
slots; the files remain in `public/images/homepage/legacy-v3-5/` after
Phase 2 lands so any non-homepage references continue to resolve.

## Inventory

| Slot | File | Aspect | Source | Photographer | License |
|---|---|---|---|---|---|
| Hero (Block 1, right column at desktop) | `public/images/homepage/hero-gold-coins.jpg` | 3 / 4 | [pexels.com/photo/8442429](https://www.pexels.com/photo/close-up-photo-of-gold-round-coins-8442429/) | Zlaťáky.cz | Pexels License |
| EntryCardGrid Card 1 (pastoral / conviction) | `public/images/homepage/card-1-man-reading-study.jpg` | 3 / 2 | [unsplash.com/photos/DnebuJqqlRs](https://unsplash.com/photos/DnebuJqqlRs) | Đào Việt Hoàng (@dvhoang2106) | Unsplash License |
| EntryCardGrid Card 2 (verification / careful work) | `public/images/homepage/card-2-hands-writing.jpg` | 3 / 2 | [pexels.com/photo/7013912](https://www.pexels.com/photo/7013912/) | cottonbro studio | Pexels License |
| EntryCardGrid Card 3 (reading / preparation) | `public/images/homepage/card-3-lamp-paper-desk.jpg` | 3 / 2 | [unsplash.com/photos/S42IBbpKRrw](https://unsplash.com/photos/a-table-topped-with-a-lamp-and-a-piece-of-paper-S42IBbpKRrw) | Valeriia Neganova (@neganova) | Unsplash License |
| PullQuote provisional headshot — **replace with William's commissioned portrait before launch** | `public/images/homepage/pullquote-headshot-provisional.jpg` | 3 / 4 | [unsplash.com/photos/-GCQiA7oDKk](https://unsplash.com/photos/-GCQiA7oDKk) | Jean Daniel Photography (@jeandanielphotography) | Unsplash License |
| WilliamTestimonyBand lifestyle image (faith-grounded older adult in domestic setting) | `public/images/homepage/william-portrait-provisional.jpg` | 3 / 4 | [unsplash.com/photos/hKtiiidaPmg](https://unsplash.com/photos/hKtiiidaPmg) | Vitaly Gariev (@silverkblack) | Unsplash License |
| Verse anchor (Block 7, right of verse at desktop) | `public/images/homepage/verse-anchor-coins-wood.jpg` | 16 / 9 | [pexels.com/photo/35431757](https://www.pexels.com/photo/assorted-vintage-coins-on-wooden-texture-35431757/) | Tolga deniz Aran (@sanlad) | Pexels License |
| Three paths — Path 1 (New to Gold IRAs) | `public/images/homepage/path-1-elderly-woman-window.jpg` | 3 / 2 | Unsplash, direct image `photo-1756362635644-8ce1ed7d2da0` | Lena Polishko | Unsplash License |
| Three paths — Path 2 (Already hold a Gold IRA) | `public/images/homepage/path-2-older-man-writing.jpg` | 3 / 2 | [unsplash.com/photos/CMdF3CjW-lI](https://unsplash.com/photos/CMdF3CjW-lI) | Sweet Life (@sweetlifediabetes) | Unsplash License |
| Three paths — Path 3 (Financial advisor or CPA) | `public/images/homepage/path-3-desk-book-pen.jpg` | 3 / 2 | [unsplash.com/photos/ysm70KYj_uc](https://unsplash.com/photos/a-wooden-desk-with-a-book-and-a-pen-ysm70KYj_uc) | Alexander Mass (@alexandermassph) | Unsplash License |

---

## Licenses

### Unsplash License

> Unsplash visuals can be downloaded, modified, distributed, and used
> royalty free for commercial and non-commercial purposes, all without
> needing permission from or providing attribution to the photographer
> or Unsplash. Photographer attribution is appreciated but not required.

[unsplash.com/license](https://unsplash.com/license)

### Pexels License

> All photos and videos on Pexels can be downloaded and used for free.
> Attribution is not required. Modifications are allowed.

[pexels.com/license](https://www.pexels.com/license/)

Photographer credit is recorded in this file as a courtesy and to allow
follow-up if a specific image is later replaced.

---

## Provisional notes per slot

### Hero — close-up of gold bullion coins (Zlaťáky.cz, Pexels)

Direct expression of the brand's product. Bullion coins (visible:
Canadian Maple Leaf, Austrian Philharmonic) on a reflective dark
surface. Studio rather than natural light — a tradeoff for the
catalogue-specificity Duncan asked for. No hands, no gold-bathed
gimmick, neutral palette. **Replacement candidate** if a softer-lit
American Eagle or Maple Leaf in a more editorial register can be
sourced.

### EntryCardGrid Card 1 — older man reading in study (Đào Việt Hoàng, Unsplash)

Pastoral / conviction register for Block 2 Card 1 ("A pastor left the
gold industry"). Older man in a bookshelf-lined room, hands on an open
book, contemplative. Documentary register, natural light. Provisional,
replace before launch with bespoke or curated stock.

### EntryCardGrid Card 2 — hand writing with fountain pen (cottonbro, Pexels)

Verification / careful work register for Block 2 Card 2 ("We published
the standard"). Close-up of hand writing on documents with a black
fountain pen. No face, no business stock register. Provisional, replace
before launch with bespoke or curated stock.

### EntryCardGrid Card 3 — lamp and paper on wooden desk (Valeriia Neganova, Unsplash)

Reading / preparation register for Block 2 Card 3 ("Get the whole
picture before you call"). Vintage table lamp beside aged paper on a
wooden surface. Editorial still life, warm. Provisional, replace
before launch with bespoke or curated stock.

### PullQuote provisional headshot (Jean Daniel Photography, Unsplash)

**Provisional placeholder for William's commissioned portrait** in the
homepage PullQuote block. Older man with white hair and beard,
contemplative expression, color photograph, neutral street-portrait
background. Pairs the speaker's face with the load-bearing William
quote. **Replace before launch with William's commissioned portrait**
(Section 38 open decision).

### WilliamTestimonyBand — older man reading at home (Vitaly Gariev, Unsplash)

**Lifestyle image — faith-grounded older adult in domestic setting,
audience-mirror.** Re-purposed 2026-04-28 from "William provisional"
to "WilliamTestimonyBand lifestyle image" — William's face is now
carried by the PullQuote headshot above; this band's image now
functions as audience-mirror imagery per brief Section 10.2. Older
man on couch reading, quiet domestic interior, warm cream/walnut
tones. Provisional, replace before launch with bespoke or curated
stock if the lifestyle direction is held; alternatively swap to a
different audience-mirror subject if the band's role evolves.

### Verse anchor — vintage coins on wooden surface (Tolga deniz Aran, Pexels)

The verse "A false balance is an abomination to the Lord, but a just
weight is His delight" pairs with a tonal still life of coins on
wood — natural light, no gold-bath glow, no hands. The coins shown are
generic international vintage rather than specifically American Eagle
or Canadian Maple Leaf. **Replacement candidate** if catalogue-specific
bullion can be sourced in this register.

### Path 1 — elderly woman by sunlit window (Lena Polishko, Unsplash)

Older subject (Path 1: New to Gold IRAs). Single figure, contemplative,
natural light. Reads as the audience without the marketing-styled
couple register the brief refuses.

### Path 2 — older man writing at table (Sweet Life, Unsplash)

Older subject reviewing documents. Natural setting, editorial
composition. The Sweet Life collection is a diabetes-awareness photo
project; the image itself is generic enough — older man at a table
with paperwork — to serve the "Already hold a Gold IRA, reviewing your
position" path without the diabetes context registering. **Note for
review** — if the source-collection context concerns Duncan, this is
the easiest slot to swap.

### Path 3 — wooden desk with open book and pen (Alexander Mass, Unsplash)

Editorial still life. Open book, fountain pen, warm wood. No business
stock-photo register, no handshakes, no computer screens. Quiet.
**Likely to keep at launch.**

---

## Replacement workflow

To replace a slot:

1. Drop the new file into `public/images/homepage/` using the same
   filename convention `<slot>-<short-description>.jpg`.
2. Update the relevant component's `imageSrc` (and `imageAlt`) prop.
   Slots are wired in:
   - `components/hero/VerseHero.tsx` (hero)
   - `components/content/WilliamTestimonyBand.tsx` (William band)
   - `components/content/VerseAnchor.tsx` (verse anchor)
   - `app/(marketing)/page.tsx` (the `PATHS` array — paths 1/2/3)
3. Update the row in the inventory table above with the new source URL,
   photographer, and license.
4. If the new image is from outside Unsplash or Pexels, also update
   the License section to reflect the new terms.
5. Commit the imagery change separately from layout changes so the
   review surface is clear.

The `ImagePlaceholder` component continues to render the placeholder
fallback if `imageSrc` is omitted. To revert any slot to placeholder,
remove the `imageSrc` and `imageAlt` props.

---

*Last updated: 2026-04-30 — production-brief Manus bundle inventory added; v3.5 inventory marked legacy and held in place until Phase 2 refactors retire each slot.*
