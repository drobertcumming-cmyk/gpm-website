import Link from 'next/link'
import { withBase } from '@/lib/basepath'

// /resources/ira-eligible-gold-coins
//
// First long-form article in the Resources Library. TSX port of the
// article.html boilerplate (production design template). Server
// component — no client interactivity required (anchor links scroll
// natively; no form state). Page sits inside the (marketing) route
// group so SiteHeader, <main> wrapper, and SiteFooter are inherited
// from app/(marketing)/layout.tsx.
//
// Layout (per boilerplate):
//   - Reading column: max-width 880px, 56px horizontal padding (32px
//     ≤1024, 24px ≤768). The whole article flows down this single
//     column — no left rail, no right callout column. This is the
//     long-form reading layout.
//   - Hero: eyebrow + H1 + italic-serif lede with gold-secondary
//     left rule.
//   - Inline TOC band on canvas-deep: read-time + 2-col link grid
//     (1-col ≤768).
//   - Article body: 6 sections, each with one or two paragraphs and
//     a section image. Section 4 has the eligibility table.
//   - Pullquote band: Proverbs 11:1 on canvas-deep with gold left rule.
//   - End-CTA band: "Get the briefing" + "Talk to an advisor".
//   - Related-reading grid: 2 cards linking to other articles.
//   - Article disclaimer + sitewide disclaimer band.

export const metadata = {
  title: 'IRA-Eligible Gold Coins: The Strict Regulatory Reality',
  description:
    'The IRS does not allow you to hold any gold coin you want in a retirement account. The rules are narrow, specific, and enforced. This article walks through what qualifies, what does not, and why the distinction matters for your retirement savings.',
}

const PAGE_CSS = `
.gpm-article-page {
  --cream-canvas: #F5F0E1;
  --canvas-deep: #F0E9D6;
  --walnut-deep: #3D2817;
  --walnut-mid: #5C4632;
  --gold-secondary: #9C7322;
  --gold-deep: #B8962E;
  --line-soft: rgba(92, 70, 50, 0.20);
  background: var(--cream-canvas);
  color: var(--walnut-deep);
  font-family: var(--font-sans), Inter, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
}

/* ===== READING COLUMN ===== */
.gpm-article-page .reading-column {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 56px;
}

/* ===== BREADCRUMB ===== */
.gpm-article-page .breadcrumb-bar { padding: 20px 0 0; }
.gpm-article-page .breadcrumb {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.4;
}
.gpm-article-page .breadcrumb a {
  color: var(--walnut-mid);
  text-decoration: none;
  transition: color 0.2s ease;
}
.gpm-article-page .breadcrumb a:hover { color: var(--gold-secondary); }
.gpm-article-page .breadcrumb .sep { margin: 0 6px; color: var(--walnut-mid); opacity: 0.5; }
.gpm-article-page .breadcrumb-rule {
  width: 100%;
  height: 0.5px;
  background: var(--line-soft);
  margin-top: 20px;
}

/* ===== HERO BLOCK ===== */
.gpm-article-page .article-hero { padding: 56px 0 40px; }
.gpm-article-page .article-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 16px;
}
.gpm-article-page .article-h1 {
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.12;
  margin-bottom: 28px;
  letter-spacing: -0.005em;
}
.gpm-article-page .article-lede {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 18px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.65;
  border-left: 3px solid var(--gold-secondary);
  padding-left: 20px;
}

/* ===== INLINE TOC ===== */
.gpm-article-page .inline-toc {
  background: var(--canvas-deep);
  border-top: 0.5px solid var(--line-soft);
  border-bottom: 0.5px solid var(--line-soft);
  padding: 28px 32px;
  margin-bottom: 48px;
}
.gpm-article-page .toc-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 12px;
}
.gpm-article-page .toc-meta {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-deep);
  margin-bottom: 16px;
}
.gpm-article-page .toc-meta-label { font-weight: 500; }
.gpm-article-page .toc-rule {
  width: 100%;
  height: 0.5px;
  background: var(--line-soft);
  margin-bottom: 20px;
}
.gpm-article-page .toc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 40px;
}
.gpm-article-page .toc-item {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.gpm-article-page .toc-item a {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-deep);
  text-decoration: none;
  transition: color 0.2s ease;
}
.gpm-article-page .toc-item a:hover { color: var(--gold-secondary); }
.gpm-article-page .toc-number {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--gold-secondary);
  font-variant-numeric: tabular-nums;
  min-width: 18px;
}

/* ===== ARTICLE BODY ===== */
.gpm-article-page .article-body { padding-bottom: 56px; }
.gpm-article-page .article-body h2 {
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(26px, 3.4vw, 32px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.25;
  margin-top: 56px;
  margin-bottom: 20px;
  letter-spacing: -0.003em;
  scroll-margin-top: 80px;
}
.gpm-article-page .article-body h3 {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 22px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.35;
  margin-top: 36px;
  margin-bottom: 14px;
}
.gpm-article-page .article-body p {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.7;
  margin-bottom: 20px;
}
.gpm-article-page .article-body .article-img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  margin: 40px 0;
  display: block;
  background: var(--canvas-deep);
}
.gpm-article-page .article-body .article-img.hero-img {
  margin-top: 0;
  margin-bottom: 48px;
}

/* ===== ELIGIBILITY TABLE ===== */
.gpm-article-page .eligibility-table-wrap {
  background: var(--canvas-deep);
  border-top: 0.5px solid var(--line-soft);
  border-bottom: 0.5px solid var(--line-soft);
  padding: 28px 0;
  margin: 40px 0;
  overflow-x: auto;
}
.gpm-article-page .eligibility-table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  padding: 0 32px;
}
.gpm-article-page .eligibility-table thead th {
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  text-align: left;
  padding: 0 16px 14px;
  border-bottom: 0.5px solid var(--line-soft);
}
.gpm-article-page .eligibility-table tbody tr {
  border-bottom: 0.5px solid var(--line-soft);
}
.gpm-article-page .eligibility-table tbody tr:last-child { border-bottom: none; }
.gpm-article-page .eligibility-table tbody td {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-deep);
  padding: 14px 16px;
  vertical-align: top;
}
.gpm-article-page .eligibility-table tbody td.coin-name {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  font-weight: 400;
}
.gpm-article-page .eligibility-table tbody tr.ineligible td { color: var(--walnut-mid); }
.gpm-article-page .eligibility-table tbody td.status-eligible { color: var(--walnut-deep); }
.gpm-article-page .eligibility-table tbody td.status-ineligible {
  color: var(--walnut-mid);
  font-style: italic;
}

/* ===== PULLQUOTE BAND ===== */
.gpm-article-page .pullquote-band {
  background: var(--canvas-deep);
  border-left: 3px solid var(--gold-secondary);
  padding: 32px 36px;
  margin: 48px 0;
}
.gpm-article-page .pullquote-verse {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 24px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.45;
  margin-bottom: 12px;
}
.gpm-article-page .pullquote-citation {
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
}

/* ===== END-OF-ARTICLE ===== */
.gpm-article-page .article-disclaimer {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  padding: 24px 0;
  border-top: 0.5px solid var(--line-soft);
}

/* ===== END CTA BAND ===== */
.gpm-article-page .end-cta-band {
  background: var(--canvas-deep);
  border-top: 0.5px solid var(--line-soft);
  border-bottom: 0.5px solid var(--line-soft);
  padding: 56px 32px;
  text-align: center;
  margin: 40px 0;
}
.gpm-article-page .end-cta-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 14px;
}
.gpm-article-page .end-cta-headline {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 24px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.3;
  margin-bottom: 14px;
}
.gpm-article-page .end-cta-subhead {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  max-width: 520px;
  margin: 0 auto 28px;
}
.gpm-article-page .end-cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.gpm-article-page .end-cta-buttons .btn-outline {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--walnut-deep);
  background: transparent;
  border: 1.5px solid var(--walnut-deep);
  border-radius: 2px;
  padding: 12px 24px;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}
.gpm-article-page .end-cta-buttons .btn-outline:hover {
  background: var(--walnut-deep);
  color: var(--cream-canvas);
}
.gpm-article-page .end-cta-buttons .btn-gold {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  background: var(--gold-deep);
  border: 1.5px solid var(--gold-deep);
  border-radius: 2px;
  padding: 12px 24px;
  text-decoration: none;
  transition: background 0.2s ease;
}
.gpm-article-page .end-cta-buttons .btn-gold:hover {
  background: var(--gold-secondary);
  border-color: var(--gold-secondary);
}

/* ===== RELATED READING ===== */
.gpm-article-page .related-reading { padding: 40px 0 32px; }
.gpm-article-page .related-heading {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 18px;
  font-weight: 400;
  color: var(--walnut-deep);
  margin-bottom: 24px;
}
.gpm-article-page .related-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 32px;
}
.gpm-article-page .related-card {
  border: 0.5px solid var(--line-soft);
  padding: 24px;
  text-decoration: none;
  display: block;
  transition: background 0.2s ease;
  color: inherit;
}
.gpm-article-page .related-card:hover { background: var(--canvas-deep); }
.gpm-article-page .related-card-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 8px;
}
.gpm-article-page .related-card-title {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 17px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.35;
  margin-bottom: 8px;
}
.gpm-article-page .related-card-meta {
  font-family: var(--font-sans);
  font-style: italic;
  font-size: 12.5px;
  font-weight: 400;
  color: var(--walnut-mid);
}
.gpm-article-page .back-to-resources {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--gold-secondary);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--gold-secondary);
  transition: color 0.2s ease;
}
.gpm-article-page .back-to-resources:hover { color: var(--walnut-deep); }

/* ===== DISCLAIMER BAND ===== */
.gpm-article-page .section-disclaimer {
  background: var(--cream-canvas);
  padding: 48px 0;
}
.gpm-article-page .section-disclaimer .reading-column p {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 13px;
  font-weight: 400;
  color: rgba(61, 40, 23, 0.75);
  line-height: 1.6;
  margin-bottom: 16px;
}
.gpm-article-page .section-disclaimer .disclaimer-divider {
  width: 100%;
  height: 1px;
  background: rgba(156, 115, 34, 0.25);
  margin-top: 24px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .gpm-article-page .reading-column { padding: 0 32px; }
}
@media (max-width: 768px) {
  .gpm-article-page .reading-column { padding: 0 24px; }
  .gpm-article-page { font-size: 16.5px; }
  .gpm-article-page .article-h1 { font-size: 38px; }
  .gpm-article-page .article-lede { font-size: 17px; }
  .gpm-article-page .article-body p { font-size: 16.5px; }
  .gpm-article-page .toc-grid { grid-template-columns: 1fr; }
  .gpm-article-page .toc-meta { display: flex; flex-direction: column; gap: 4px; }
  .gpm-article-page .article-body .article-img { height: 240px; }
  .gpm-article-page .pullquote-verse { font-size: 19px; }
  .gpm-article-page .pullquote-band { padding: 24px 28px; }
  .gpm-article-page .end-cta-buttons { flex-direction: column; gap: 12px; }
  .gpm-article-page .end-cta-buttons .btn-outline,
  .gpm-article-page .end-cta-buttons .btn-gold {
    width: 100%;
    text-align: center;
    display: block;
  }
  .gpm-article-page .related-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .gpm-article-page .eligibility-table-wrap {
    margin-left: -24px;
    margin-right: -24px;
    padding: 28px 24px;
  }
}
`

const TOC = [
  { n: 1, id: 'section-1', label: 'The IRC § 408(m) framework' },
  { n: 2, id: 'section-2', label: 'The 0.995 fineness rule' },
  { n: 3, id: 'section-3', label: 'The American Gold Eagle exception' },
  { n: 4, id: 'section-4', label: 'Which coins qualify today' },
  { n: 5, id: 'section-5', label: 'The collectible trap' },
  { n: 6, id: 'section-6', label: 'How Grace verifies every asset' },
]

const IMG_BASE = '/images/resources/ira-eligible-gold-coins'

export default function Page() {
  return (
    <div className="gpm-article-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* BREADCRUMB */}
      <div className="reading-column">
        <div className="breadcrumb-bar">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/resources">Resources</Link>
            <span className="sep">›</span>
            <Link href="/resources">What you can hold</Link>
            <span className="sep">›</span>
            <span>IRA-Eligible Gold Coins: The Strict Regulatory Reality</span>
          </nav>
          <div className="breadcrumb-rule" />
        </div>
      </div>

      {/* HERO */}
      <div className="reading-column">
        <div className="article-hero">
          <span className="article-eyebrow">What you can hold</span>
          <h1 className="article-h1">IRA-Eligible Gold Coins: The Strict Regulatory Reality</h1>
          <p className="article-lede">
            The IRS does not allow you to hold any gold coin you want in a retirement account. The rules are narrow, specific, and enforced. This article walks through what qualifies, what does not, and why the distinction matters for your retirement savings.
          </p>
        </div>
      </div>

      {/* INLINE TOC */}
      <div className="reading-column">
        <div className="inline-toc">
          <span className="toc-eyebrow">On this page</span>
          <div className="toc-meta">
            <span className="toc-meta-label">Read time:</span> 10 min read
          </div>
          <div className="toc-rule" />
          <div className="toc-grid">
            {TOC.map((item) => (
              <div key={item.id} className="toc-item">
                <span className="toc-number">{item.n}</span>
                <a href={`#${item.id}`}>{item.label}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="reading-column">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase(`${IMG_BASE}/article-hero-couple-ira.jpg`)}
          alt="Couple reviewing IRA paperwork at a kitchen table"
          className="article-img hero-img"
        />
      </div>

      {/* ARTICLE BODY */}
      <div className="reading-column">
        <div className="article-body">

          {/* SECTION 1 */}
          <h2 id="section-1">The IRC § 408(m) framework</h2>
          <h3>What does the tax code actually say about gold in an IRA?</h3>
          <p>
            Internal Revenue Code Section 408(m) defines &ldquo;collectibles&rdquo; and prohibits their acquisition by an individual retirement account. Gold, silver, platinum, and palladium are specifically named as collectibles — and therefore prohibited — unless they meet one of the narrow exceptions carved out in subsection (3).
          </p>
          <p>
            The statute does not say &ldquo;investment-grade gold is allowed.&rdquo; It says collectibles are prohibited, then lists specific exceptions. The framing matters. The default position of the tax code is exclusion. Every coin or bar in your IRA must affirmatively qualify under one of the exceptions, or it triggers a taxable distribution equal to the cost of the asset in the year of acquisition.
          </p>
          <p>
            This is not a gray area. The IRS treats an ineligible asset placed in an IRA as a distribution. You owe income tax on the full amount, plus a 10% early withdrawal penalty if you are under 59½. The custodian is required to report it. There is no cure provision — you cannot swap the ineligible asset for an eligible one after the fact and undo the tax event.
          </p>
          <h3>Why does this matter for the average IRA holder?</h3>
          <p>
            It matters because the gold IRA industry routinely sells coins that do not qualify. Proof coins, numismatic coins, &ldquo;exclusive mint&rdquo; products, and commemoratives are marketed to IRA holders by companies that profit from the higher markup these products carry. The regulatory framework exists precisely because Congress anticipated this behavior.
          </p>
          <p>
            Understanding the framework is not optional. It is the first filter every potential Gold IRA holder must apply before evaluating any product, any company, or any sales pitch.
          </p>

          {/* SECTION 2 */}
          <h2 id="section-2">The 0.995 fineness rule</h2>
          <h3>What purity standard does the IRS require?</h3>
          <p>
            For gold coins and bars to qualify for IRA inclusion under § 408(m)(3)(A), they must be of a fineness equal to or exceeding 0.995 — that is, 99.5% pure gold. This is the baseline purity requirement that applies to all gold products except those specifically exempted by name in the statute.
          </p>
          <p>
            The 0.995 threshold is not arbitrary. It corresponds to the refining standards used by LBMA-accredited refiners and the major sovereign mints that produce investment-grade bullion. A coin or bar meeting this standard is, by definition, a bullion product — not a numismatic or collectible item whose value derives from rarity, condition, or historical significance.
          </p>
          <h3>How does fineness differ from karat?</h3>
          <p>
            Fineness is expressed as a decimal fraction of pure gold content by weight. A coin that is 0.9999 fine (often marketed as &ldquo;four nines&rdquo;) contains 99.99% gold. A coin that is 0.9167 fine contains 91.67% gold — equivalent to 22 karat. The IRS threshold of 0.995 sits between these two common standards, which is why it creates an important distinction in eligibility.
          </p>
          <p>
            Most sovereign bullion coins produced today meet or exceed the 0.9999 standard: the Canadian Gold Maple Leaf, the Austrian Philharmonic, the Australian Kangaroo, and the American Gold Buffalo are all 0.9999 fine. They pass the fineness test without question.
          </p>
          <p>
            The notable exception — and the reason the statute includes a separate named exemption — is the American Gold Eagle, which is only 0.9167 fine (22 karat). Without its specific statutory carve-out, the Eagle would fail the fineness test and be ineligible.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/article-single-bullion-coin.jpg`)}
            alt="Close-up of a single gold bullion coin on a neutral linen surface"
            className="article-img"
          />

          {/* SECTION 3 */}
          <h2 id="section-3">The American Gold Eagle exception</h2>
          <h3>Why does the Eagle get its own rule?</h3>
          <p>
            Section 408(m)(3)(A)(ii) specifically names &ldquo;gold coins issued by the United States&rdquo; as eligible for IRA inclusion, regardless of fineness. This is a statutory carve-out that exists for one reason: the American Gold Eagle is the U.S. Mint&rsquo;s flagship bullion coin, and it is struck at 22 karat (0.9167 fine) rather than the 0.995 standard required of all other coins.
          </p>
          <p>
            The Eagle contains one full troy ounce of pure gold, but it is alloyed with copper and silver to increase durability. The total coin weight is 1.0909 troy ounces. The gold content is exactly one ounce — the alloy adds weight, not gold. This design choice dates to the coin&rsquo;s 1986 introduction and follows the tradition of pre-1933 U.S. gold coinage.
          </p>
          <p>
            Congress chose to exempt U.S.-minted gold coins by name rather than require the Mint to change its alloy formula. The result is a clean statutory exemption: any gold coin issued by the United States Treasury qualifies, full stop. This covers the American Gold Eagle in all weights (1 oz, ½ oz, ¼ oz, 1/10 oz) and the American Gold Buffalo (which, at 0.9999 fine, would qualify under the general fineness rule anyway).
          </p>
          <h3>Does the exception cover proof Eagles?</h3>
          <p>
            The statute exempts &ldquo;gold coins issued by the United States&rdquo; without distinguishing between bullion-strike and proof-strike versions. A proof American Gold Eagle is still a gold coin issued by the United States. However, the practical concern is not eligibility — it is markup. Proof coins carry premiums of 30–100% over spot price, compared to 3–8% for bullion strikes. The IRS does not prohibit overpaying for an eligible asset, but your IRA bears the cost.
          </p>
          <p>
            Grace does not sell proof coins. The markup structure makes them unsuitable for retirement accounts where the goal is gold exposure at the lowest possible cost basis.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/article-american-gold-eagle.jpg`)}
            alt="Close-up of an American Gold Eagle coin on a walnut surface"
            className="article-img"
          />

          {/* SECTION 4 */}
          <h2 id="section-4">Which coins qualify today</h2>
          <h3>What is the complete list of IRA-eligible gold coins?</h3>
          <p>
            The eligible universe is small. That is by design. The IRS framework restricts IRA gold holdings to coins that meet the fineness standard (0.995+) or are specifically named in the statute (U.S.-minted coins). The coins must also be produced by a national government mint or an accredited refiner, and they must be in uncirculated or bullion-strike condition.
          </p>
          <p>
            The following table lists the primary gold coins held in U.S. retirement accounts today, along with their fineness, weight, and IRA eligibility status.
          </p>

          {/* ELIGIBILITY TABLE */}
          <div className="eligibility-table-wrap">
            <table className="eligibility-table">
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Mint</th>
                  <th>Fineness</th>
                  <th>Weight</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="coin-name">American Gold Eagle</td>
                  <td>U.S. Mint</td>
                  <td>0.9167</td>
                  <td>1 oz (Au)</td>
                  <td className="status-eligible">Eligible</td>
                </tr>
                <tr>
                  <td className="coin-name">American Gold Buffalo</td>
                  <td>U.S. Mint</td>
                  <td>0.9999</td>
                  <td>1 oz</td>
                  <td className="status-eligible">Eligible</td>
                </tr>
                <tr>
                  <td className="coin-name">Canadian Gold Maple Leaf</td>
                  <td>Royal Canadian Mint</td>
                  <td>0.9999</td>
                  <td>1 oz</td>
                  <td className="status-eligible">Eligible</td>
                </tr>
                <tr>
                  <td className="coin-name">Austrian Gold Philharmonic</td>
                  <td>Austrian Mint</td>
                  <td>0.9999</td>
                  <td>1 oz</td>
                  <td className="status-eligible">Eligible</td>
                </tr>
                <tr>
                  <td className="coin-name">Australian Gold Kangaroo</td>
                  <td>Perth Mint</td>
                  <td>0.9999</td>
                  <td>1 oz</td>
                  <td className="status-eligible">Eligible</td>
                </tr>
                <tr className="ineligible">
                  <td className="coin-name">South African Krugerrand</td>
                  <td>South African Mint</td>
                  <td>0.9167</td>
                  <td>1 oz (Au)</td>
                  <td className="status-ineligible">Not eligible</td>
                </tr>
                <tr className="ineligible">
                  <td className="coin-name">British Gold Sovereign</td>
                  <td>Royal Mint</td>
                  <td>0.9167</td>
                  <td>0.2354 oz</td>
                  <td className="status-ineligible">Not eligible</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The Krugerrand fails because it is 22 karat (0.9167 fine) and is not issued by the United States — so neither the fineness rule nor the U.S.-coin exception applies. The British Sovereign fails for the same reason. Both are legitimate bullion coins for personal ownership, but they cannot be held in a tax-advantaged retirement account.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/article-eligible-coins-flatlay.jpg`)}
            alt="Flat-lay of eligible gold coins: Eagle, Maple Leaf, Philharmonic, Buffalo"
            className="article-img"
          />

          {/* SECTION 5 */}
          <h2 id="section-5">The collectible trap</h2>
          <h3>Why do some companies push coins that do not belong in an IRA?</h3>
          <p>
            The answer is margin. A standard American Gold Eagle bullion coin carries a dealer premium of roughly 3–6% over spot. A &ldquo;proof&rdquo; version of the same coin carries a premium of 40–80%. A &ldquo;certified&rdquo; or &ldquo;graded&rdquo; coin — the same metal, slabbed in plastic by a third-party grading service — can carry premiums of 50–200% depending on the assigned grade and the sales narrative attached to it.
          </p>
          <p>
            The Gold IRA industry has a documented history of steering retirement savers toward high-premium products. The sales pitch typically emphasizes &ldquo;rarity,&rdquo; &ldquo;limited mintage,&rdquo; &ldquo;collector value,&rdquo; or &ldquo;numismatic upside&rdquo; — none of which are relevant to a retirement account whose purpose is gold exposure at the lowest cost basis.
          </p>
          <h3>What happens when an ineligible coin enters an IRA?</h3>
          <p>
            If a custodian accepts an ineligible asset — or if a dealer ships one to a depository without proper verification — the IRS treats the acquisition as a taxable distribution. The account holder owes income tax on the fair market value of the asset, plus the 10% early withdrawal penalty if under age 59½. The asset must be removed from the account. There is no administrative correction that undoes the tax event.
          </p>
          <p>
            This is not theoretical. IRS enforcement actions and Tax Court cases have addressed exactly this scenario. The penalty falls on the account holder, not the dealer who sold the product or the custodian who accepted it. The regulatory structure places the compliance burden on the individual — which is why understanding eligibility before purchasing is essential, not optional.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/article-graded-slabbed-coin.jpg`)}
            alt="Graded gold coin in NGC plastic slab holder — a collectible, not IRA-eligible bullion"
            className="article-img"
          />

          {/* PULLQUOTE — Proverbs 11:1 */}
          <div className="pullquote-band">
            <p className="pullquote-verse">
              &ldquo;A false balance is an abomination to the Lord, but a just weight is His delight.&rdquo;
            </p>
            <span className="pullquote-citation">Proverbs 11:1</span>
          </div>

          {/* SECTION 6 */}
          <h2 id="section-6">How Grace verifies every asset</h2>
          <h3>What does the verification process look like in practice?</h3>
          <p>
            Grace Precious Metals sells only IRS-eligible bullion coins and bars. The product catalog is restricted by policy to assets that meet the § 408(m)(3) requirements without ambiguity. No proof coins. No numismatic products. No graded or slabbed coins. No commemoratives. No &ldquo;exclusive mint&rdquo; products of any kind.
          </p>
          <p>
            Every coin shipped to the IRS-approved depository is verified against the eligibility requirements before it enters the client&rsquo;s account. The verification process confirms: correct coin type, correct fineness, correct weight, and bullion-strike condition. If an asset does not meet every criterion, it does not enter the account.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/article-verification-hands.jpg`)}
            alt="Gloved hands measuring a gold coin with precision calipers at a verification workstation"
            className="article-img"
          />

          <h3>Why does this matter if the custodian also checks?</h3>
          <p>
            Custodians are administrative entities. They process paperwork, hold title, and file IRS reports. Most custodians do not physically inspect the metal — they rely on the dealer&rsquo;s manifest and the depository&rsquo;s intake records. If a dealer ships an ineligible product with a manifest that describes it as eligible, the custodian may never catch the discrepancy.
          </p>
          <p>
            Grace&rsquo;s verification happens at the dealer level, before the asset reaches the depository. This is an additional layer of compliance that exists because we control the product catalog. We do not sell products that create eligibility risk, so the verification is confirming what the restricted catalog already guarantees — but the physical check provides documentation that protects the client in the event of an audit.
          </p>
          <p>
            The result is a closed system: restricted catalog → dealer-level verification → depository intake → custodian records. At no point in the chain does an ineligible asset have an opportunity to enter the account.
          </p>
        </div>
      </div>

      {/* END-OF-ARTICLE BLOCK */}
      <div className="reading-column">
        <p className="article-disclaimer">
          This article is for informational purposes only and does not constitute financial, tax, or legal advice. Consult qualified professionals before making investment decisions.
        </p>

        {/* END CTA */}
        <div className="end-cta-band">
          <span className="end-cta-eyebrow">When you&rsquo;re ready</span>
          <h2 className="end-cta-headline">A conversation, on your own timeline.</h2>
          <p className="end-cta-subhead">
            If you have questions about Gold IRA eligibility, our salaried advisors will walk you through your specific situation. No commission, no pressure, no urgency.
          </p>
          <div className="end-cta-buttons">
            <Link href="/briefing" className="btn-outline">Get the briefing</Link>
            <Link href="/advisor" className="btn-gold">Talk to an advisor</Link>
          </div>
        </div>

        {/* RELATED READING */}
        <div className="related-reading">
          <p className="related-heading">Two more reads from the Resources library.</p>
          <div className="related-grid">
            <Link href="/pricing/understanding-dealer-spread" className="related-card">
              <span className="related-card-eyebrow">Pricing &amp; costs</span>
              <p className="related-card-title">Demystifying the Gold IRA Spread: Markups and Real Costs</p>
              <span className="related-card-meta">8 min read</span>
            </Link>
            <Link href="/resources/market-volatility-retirement-protection" className="related-card">
              <span className="related-card-eyebrow">Markets, risk &amp; allocation</span>
              <p className="related-card-title">
                Market Volatility and Retirement Protection: A Balanced Approach to Capital Preservation
              </p>
              <span className="related-card-meta">11 min read</span>
            </Link>
          </div>
          <Link href="/resources" className="back-to-resources">← Back to Resources</Link>
        </div>
      </div>

      {/* DISCLAIMER BAND */}
      <section className="section-disclaimer" aria-label="Legal disclaimer">
        <div className="reading-column">
          <p>
            <strong>Grace Precious Metals is a precious metals dealer.</strong> Gold IRAs require an IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a financial, tax, or legal advisor. Gold and precious metals investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. Consult qualified professionals before making investment decisions. Pricing reflects CFO-reviewed published policy as of the date shown.
          </p>
          <div className="disclaimer-divider" />
        </div>
      </section>
    </div>
  )
}
