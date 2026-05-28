import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/nav'
import { withBase } from '@/lib/basepath'

// /pricing/gold-ira-cost-analysis
//
// Third long-form article: cost arithmetic deep-dive. TSX port of the
// article2.html boilerplate, styled to mirror the IRA-eligible-gold-coins
// layout (a03d181) — same reading-column geometry, single-digit TOC,
// font-weight 500 hero H1, sharp-corner buttons. The route lives under
// /pricing/ rather than /resources/ per the Resources hub IA (0f4e089).
// Because /pricing/ sits OUTSIDE the (marketing) route group, this
// page wraps SiteHeader / <main> / SiteFooter itself, matching the
// pattern in app/pricing/page.tsx and app/pricing/buyback/page.tsx.

export const metadata = {
  title: 'What Does a Gold IRA Cost? An Honest Cost Arithmetic',
  description:
    'The Gold IRA industry obscures pricing behind layered fees, undisclosed spreads, and selective arithmetic. This piece walks through every cost category and models a complete round-trip transaction across three tiers of operator — including Grace.',
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
.gpm-article-page .article-body strong { font-weight: 600; }
.gpm-article-page .article-body em { font-style: italic; }
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

/* ===== COST TABLE ===== */
.gpm-article-page .cost-table-wrap {
  background: var(--canvas-deep);
  border-top: 0.5px solid var(--line-soft);
  border-bottom: 0.5px solid var(--line-soft);
  padding: 28px 0;
  margin: 40px 0;
  overflow-x: auto;
}
.gpm-article-page .cost-table {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  padding: 0 32px;
}
.gpm-article-page .cost-table thead th {
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
.gpm-article-page .cost-table tbody tr {
  border-bottom: 0.5px solid var(--line-soft);
}
.gpm-article-page .cost-table tbody tr:last-child { border-bottom: none; }
.gpm-article-page .cost-table tbody td {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-deep);
  padding: 14px 16px;
  vertical-align: top;
}
.gpm-article-page .cost-table tbody td.hold-period {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  font-weight: 400;
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
  .gpm-article-page .cost-table-wrap {
    margin-left: -24px;
    margin-right: -24px;
    padding: 28px 24px;
  }
}
`

const TOC = [
  { n: 1, id: 'section-1', label: 'The visible costs of a Gold IRA' },
  { n: 2, id: 'section-2', label: 'The hidden costs' },
  { n: 3, id: 'section-3', label: 'Round-trip cost: a worked example' },
  { n: 4, id: 'section-4', label: 'How cost scales with hold period' },
  { n: 5, id: 'section-5', label: 'The 10-year and 20-year total' },
  { n: 6, id: 'section-6', label: "What Grace's arithmetic looks like" },
]

const IMG_BASE = '/images/pricing/gold-ira-cost-analysis'

export default function Page() {
  return (
    <>
      <a href="#main" className="gpm-skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <div className="gpm-article-page">
          <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

          {/* BREADCRUMB */}
          <div className="reading-column">
            <div className="breadcrumb-bar">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/resources">Resources</Link>
                <span className="sep">›</span>
                <Link href="/resources#pricing-costs">Pricing &amp; costs</Link>
                <span className="sep">›</span>
                <span>What Does a Gold IRA Cost? An Honest Cost Arithmetic</span>
              </nav>
              <div className="breadcrumb-rule" />
            </div>
          </div>

          {/* HERO */}
          <div className="reading-column">
            <div className="article-hero">
              <span className="article-eyebrow">Pricing &amp; costs</span>
              <h1 className="article-h1">What Does a Gold IRA Cost? An Honest Cost Arithmetic</h1>
              <p className="article-lede">
                The Gold IRA industry obscures its pricing behind layered fees, undisclosed spreads, and selective arithmetic. This article does the opposite: it walks through every cost category, models a complete round-trip transaction, and shows you what a $50,000 Gold IRA actually costs across three tiers of operator — including Grace.
              </p>
            </div>
          </div>

          {/* INLINE TOC */}
          <div className="reading-column">
            <div className="inline-toc">
              <span className="toc-eyebrow">On this page</span>
              <div className="toc-meta">
                <span className="toc-meta-label">Read time:</span> 8 min read
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
              src={withBase(`${IMG_BASE}/hero-couple-calculator.jpg`)}
              alt="Couple at a desk reviewing a fee schedule with a calculator and notepad"
              className="article-img hero-img"
            />
          </div>

          {/* ARTICLE BODY */}
          <div className="reading-column">
            <div className="article-body">

              {/* SECTION 1 */}
              <h2 id="section-1">The visible costs of a Gold IRA</h2>
              <h3>What fees does every Gold IRA charge?</h3>
              <p>
                Every Gold IRA carries a set of explicit, disclosed fees that appear on your custodian&rsquo;s schedule. These are the costs you can see before you commit. They are real, they are recurring, and they are non-negotiable — but they are also the smallest portion of the total cost of ownership for most investors.
              </p>
              <p>
                The <strong>setup fee</strong> is a one-time charge, typically $50–$150, paid when your self-directed IRA is established with the custodian. The <strong>annual custodian fee</strong> covers the trust company&rsquo;s administrative costs: IRS reporting, statement generation, and compliance oversight. This ranges from $75 to $300 per year depending on the custodian and account size. The <strong>annual storage fee</strong> pays the depository for insured vault storage of your physical metal — typically $100–$300 per year for accounts under $100,000, sometimes scaled as a percentage of holdings for larger accounts.
              </p>
              <h3>Are these fees the real cost?</h3>
              <p>
                No. The visible fees on a Gold IRA are analogous to the sticker price on a car before you factor in financing, insurance, and depreciation. They represent perhaps 15–25% of the true total cost of ownership. The rest is hidden in the transaction itself — specifically, in the spread between what you pay for gold and what you can sell it for.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/fee-schedule-closeup.jpg`)}
                alt="Close-up of a printed fee schedule showing setup, custodian, and storage fees"
                className="article-img"
              />

              {/* SECTION 2 */}
              <h2 id="section-2">The hidden costs</h2>
              <h3>What is the dealer spread?</h3>
              <p>
                The dealer spread is the difference between the price you pay to buy gold and the price you would receive if you sold that same gold back immediately. It is the single largest cost in a Gold IRA — larger than all disclosed fees combined in most cases — and it is the cost that the industry works hardest to obscure.
              </p>
              <p>
                When a dealer sells you a one-ounce American Gold Eagle, they charge a premium above the spot price of gold. That premium includes the coin&rsquo;s manufacturing cost (the U.S. Mint&rsquo;s markup), the dealer&rsquo;s wholesale acquisition cost, and the dealer&rsquo;s retail margin. The retail margin — the dealer&rsquo;s profit on the sale — is the spread. It ranges from 3% at the lowest-cost operators to 30% or more at predatory firms.
              </p>
              <h3>Why is the spread hidden?</h3>
              <p>
                Most Gold IRA dealers do not publish their spreads. They quote you a &ldquo;price per coin&rdquo; that includes the spread without breaking it out. You cannot see the spread unless you simultaneously check the coin&rsquo;s wholesale market price — and most retail investors do not know how to do that, or do not think to do it at the moment of purchase.
              </p>
              <p>
                The buyback spread compounds the problem. When you eventually sell your gold — whether to take a distribution, rebalance, or close the account — the dealer offers you a buyback price that is typically below the current wholesale market value. The gap between the market value and the buyback price is a second spread, applied on the way out. You pay a spread to get in, and you pay a spread to get out. The round-trip cost is the sum of both.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/hidden-costs-fine-print.jpg`)}
                alt="Fee disclosure document being lifted to reveal buyback spread in fine print"
                className="article-img"
              />

              {/* SECTION 3 */}
              <h2 id="section-3">Round-trip cost: a worked example</h2>
              <h3>What does a $50,000 Gold IRA actually cost?</h3>
              <p>
                Consider a $50,000 rollover into a Gold IRA. The investor buys American Gold Eagles at a 5% spread over wholesale — a competitive rate available from low-cost operators. That&rsquo;s $2,500 in spread on the way in. The custodian charges a $150 setup fee, $200 per year in custodian fees, and $150 per year in storage fees.
              </p>
              <p>
                After five years, the investor liquidates. The buyback spread is 2% below wholesale — another $1,000 on the way out. Total cost over five years: $2,500 (buy spread) + $150 (setup) + $1,000 (5 years × $200 custodian) + $750 (5 years × $150 storage) + $1,000 (sell spread) = <strong>$5,400</strong>. That&rsquo;s 10.8% of the original investment consumed by costs alone — before any consideration of whether gold&rsquo;s price moved in the investor&rsquo;s favor.
              </p>
              <h3>What if the spread is higher?</h3>
              <p>
                At a mid-market operator charging a 12.5% buy spread and a 5% sell spread, the same $50,000 investment costs $6,250 on the way in and $2,500 on the way out. Add the same custodian and storage fees: $6,250 + $150 + $1,000 + $750 + $2,500 = <strong>$10,650</strong>. That&rsquo;s 21.3% of the investment — consumed by costs — over five years.
              </p>
              <p>
                At a predatory operator — and they exist — charging a 30% buy spread and a 10% sell spread, the numbers become: $15,000 + $150 + $1,000 + $750 + $5,000 = <strong>$21,900</strong>. That&rsquo;s 43.8% of the original investment. The investor needs gold to appreciate by nearly 44% just to break even.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/arithmetic-notepad.jpg`)}
                alt="Hands writing cost arithmetic on a notepad with a calculator beside it"
                className="article-img"
              />

              {/* SECTION 4 */}
              <h2 id="section-4">How cost scales with hold period</h2>
              <h3>Does holding longer reduce the cost impact?</h3>
              <p>
                Yes — but only the recurring fees amortize over time. The spread is a fixed cost paid at entry and exit. It does not diminish with time. A 5% buy spread costs $2,500 whether you hold for one year or twenty years. What changes is the annual fee burden: $350 per year in custodian and storage fees represents 0.7% of a $50,000 account annually. Over twenty years, that&rsquo;s $7,000 — significant, but predictable and disclosed.
              </p>
              <p>
                The spread, by contrast, is the cost that separates honest operators from predatory ones. A low-cost operator&rsquo;s 5% round-trip spread costs $3,500 total (buy + sell). A predatory operator&rsquo;s 40% round-trip spread costs $20,000. The difference — $16,500 on a $50,000 account — is pure margin extracted from the investor. It does not pay for better metal, better storage, or better service. It pays for the dealer&rsquo;s profit and the commission-driven sales force that generated the transaction.
              </p>

              {/* COST TABLE */}
              <div className="cost-table-wrap">
                <table className="cost-table">
                  <thead>
                    <tr>
                      <th>Holding period</th>
                      <th>Low-cost (5% spread)</th>
                      <th>Mid-market (12.5% spread)</th>
                      <th>Predatory (30% spread)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="hold-period">1 year</td>
                      <td>$4,000</td>
                      <td>$9,350</td>
                      <td>$20,500</td>
                    </tr>
                    <tr>
                      <td className="hold-period">5 years</td>
                      <td>$5,400</td>
                      <td>$10,650</td>
                      <td>$21,900</td>
                    </tr>
                    <tr>
                      <td className="hold-period">10 years</td>
                      <td>$7,150</td>
                      <td>$12,400</td>
                      <td>$23,650</td>
                    </tr>
                    <tr>
                      <td className="hold-period">20 years</td>
                      <td>$10,650</td>
                      <td>$15,900</td>
                      <td>$27,150</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                The table above models a $50,000 Gold IRA across three operator tiers. The low-cost column assumes a 5% buy spread, 2% sell spread, $150 setup, $200/year custodian, and $150/year storage. Mid-market assumes 12.5% buy, 5% sell. Predatory assumes 30% buy, 10% sell. All three share the same custodian and storage fees — those are set by the custodian and depository, not the dealer.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/calendar-time-dimension.jpg`)}
                alt="Hand turning pages in a multi-year planner with investment documents nearby"
                className="article-img"
              />

              {/* SECTION 5 */}
              <h2 id="section-5">The 10-year and 20-year total</h2>
              <h3>What does this mean for a retirement-horizon investor?</h3>
              <p>
                Most Gold IRA investors hold for 10–20 years. They are not trading gold; they are storing it as a long-term allocation within a retirement portfolio. For these investors, the annual fees accumulate but remain modest relative to the account value. The spread, however, is locked in at the moment of purchase and the moment of sale. It does not amortize. It does not diminish. It is a permanent drag on returns.
              </p>
              <p>
                At the 10-year mark with a low-cost operator, total costs reach $7,150 — 14.3% of the original $50,000. With a predatory operator, they reach $23,650 — 47.3%. At the 20-year mark, the low-cost total is $10,650 (21.3%) versus the predatory total of $27,150 (54.3%). The predatory investor has paid more than half their original investment in costs alone over twenty years.
              </p>
              <h3>Does gold appreciation offset these costs?</h3>
              <p>
                It can — but it must. Gold has averaged roughly 7–8% annual appreciation over the past twenty years, though with significant volatility. A $50,000 investment growing at 7% annually reaches approximately $193,000 after twenty years. Against that growth, even the predatory cost of $27,150 represents &ldquo;only&rdquo; 14% of the ending value. But the low-cost investor&rsquo;s $10,650 in costs represents just 5.5% of the same ending value — a $16,500 difference that compounds into tens of thousands of dollars of additional retirement wealth.
              </p>

              {/* PULLQUOTE — Proverbs 11:1 */}
              <div className="pullquote-band">
                <p className="pullquote-verse">
                  &ldquo;A false balance is an abomination to the Lord, but a just weight is His delight.&rdquo;
                </p>
                <span className="pullquote-citation">Proverbs 11:1</span>
              </div>

              {/* SECTION 6 */}
              <h2 id="section-6">What Grace&rsquo;s arithmetic looks like</h2>
              <h3>Where does Grace fall on this spectrum?</h3>
              <p>
                Grace Precious Metals publishes its spread on every transaction. The current published spread on American Gold Eagles is 5.5% over wholesale — placing Grace in the low-cost tier of the table above. The buyback spread is published at 2% below wholesale. These figures are not promotional rates; they are the standing prices available to every client regardless of account size or transaction volume.
              </p>
              <p>
                On a $50,000 account held for ten years, Grace&rsquo;s total cost of ownership is approximately $7,400: $2,750 (buy spread at 5.5%) + $150 (setup) + $2,000 (custodian fees) + $1,500 (storage fees) + $1,000 (sell spread at 2%) = $7,400. That&rsquo;s 14.8% of the original investment over a decade — or roughly 1.5% per year when annualized.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/couple-reviewing-summary.jpg`)}
                alt="Couple reviewing a clean one-page cost summary document together"
                className="article-img"
              />

              <h3>Why does Grace publish its spread?</h3>
              <p>
                Because a cost you cannot see is a cost you cannot evaluate. The industry&rsquo;s standard practice of quoting &ldquo;price per coin&rdquo; without disclosing the embedded spread makes comparison shopping nearly impossible for retail investors. Grace publishes the spread because the business model depends on retention, not extraction. A client who understands exactly what they paid — and can verify it against the wholesale market — is a client who stays for decades. A client who discovers a hidden 25% spread after the fact is a client who leaves, writes a complaint, and tells others.
              </p>
              <h3>What is the honest answer to &ldquo;What does a Gold IRA cost?&rdquo;</h3>
              <p>
                It depends entirely on who you work with. The same $50,000 investment, held for the same ten years, in the same gold coins, stored in the same depository, costs $7,150 with a low-cost operator and $23,650 with a predatory one. The difference is $16,500 — and it buys you nothing. Not better gold. Not better storage. Not better service. Just a larger margin for the dealer and a larger commission for the salesperson who closed you.
              </p>
              <p>
                The honest arithmetic is uncomfortable for the industry because it reveals that the primary variable in Gold IRA cost is not the price of gold, not the custodian&rsquo;s fees, and not the depository&rsquo;s storage rates. It is the dealer&rsquo;s spread — the one number most dealers refuse to publish.
              </p>
            </div>
          </div>

          {/* END-OF-ARTICLE BLOCK */}
          <div className="reading-column">
            <p className="article-disclaimer">
              This article is educational and does not constitute tax, legal, or investment advice. Consult a qualified professional regarding your specific situation.
            </p>

            {/* END CTA */}
            <div className="end-cta-band">
              <span className="end-cta-eyebrow">When you&rsquo;re ready</span>
              <h2 className="end-cta-headline">A conversation, on your own timeline.</h2>
              <p className="end-cta-subhead">
                If you have questions about the cost of a Gold IRA, our salaried advisors will walk you through your specific situation. No commission, no pressure, no urgency.
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
                <Link href="/resources/fees-explained" className="related-card">
                  <span className="related-card-eyebrow">Pricing &amp; costs</span>
                  <p className="related-card-title">Gold IRA Fees Explained: Removing the Industry Smoke and Mirrors</p>
                  <span className="related-card-meta">9 min read</span>
                </Link>
                <Link href="/pricing/understanding-dealer-spread" className="related-card">
                  <span className="related-card-eyebrow">Pricing &amp; costs</span>
                  <p className="related-card-title">Demystifying the Gold IRA Spread: Markups and Real Costs</p>
                  <span className="related-card-meta">8 min read</span>
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
      </main>
      <SiteFooter />
    </>
  )
}
