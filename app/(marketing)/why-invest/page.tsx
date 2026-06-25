import { withBase } from '@/lib/basepath'

// /why-invest — Gold IRA pillar sub-page ("Why People Invest in Gold")
//
// TSX port of /preview/why-invest.html (production design template).
// Replaces the prior MDX stub.
//
// Layout:
//   - Hero 8/4 with metadata rail.
//   - Banner: 3:1 documentary photo.
//   - Section 1 — Where gold sits: 6/6 split text + vault image.
//   - Section 2 — Diversification, plainly stated: prose 8 + annotation 4
//     (5–10% typical allocation figure with sourced caveat).
//   - Section 3 — The dollar question: prose 8 + annotation 4
//     (45% / 30yr purchasing-power loss arithmetic).
//   - Callout band: balance-of-the-page line + Grace house pullquote.
//   - Section 4 — What gold does: 4-up cards (full rail).
//   - Section 5 — What gold does not do: 3-up cards (lighter surface).
//   - Section 6 — Where Grace sits in this: prose 8 + salary annotation 4.
//   - Closing CTAs + disclaimer.

export const metadata = {
  title: 'Why People Invest in Gold',
  description:
    'People hold gold for two reasons — to diversify a portfolio so that no single asset class carries all the weight, and to hold something outside the currency system whose value is not tied to anyone’s promise to pay.',
}

const PAGE_CSS = `
.gpm-why-invest-page {
  --cream: #F2EDE0;
  --canvas-deep: #F0E9D6;
  --walnut-deep: #3D2817;
  --walnut-mid: #5C4632;
  --gold-secondary: #9C7322;
  --gold-deep: #B8962E;
  --gold-hover: #7E5C10;
  --border-gold: rgba(156, 115, 34, 0.25);
  --border-gold-strong: rgba(156, 115, 34, 0.45);
  background: var(--cream);
  color: var(--walnut-deep);
  font-family: var(--font-sans), Inter, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
.gpm-why-invest-page .wrap {
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
}
.gpm-why-invest-page .grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  row-gap: 32px;
  align-items: start;
}
.gpm-why-invest-page .col-4 { grid-column: span 4; }
.gpm-why-invest-page .col-6 { grid-column: span 6; }
.gpm-why-invest-page .col-8 { grid-column: span 8; }
.gpm-why-invest-page .col-9 { grid-column: span 9; }

.gpm-why-invest-page .page-hero { padding: 64px 0 0; }
.gpm-why-invest-page .page-eyebrow {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.18em;
  line-height: 1;
  margin-bottom: 14px;
  display: block;
  text-transform: uppercase;
}
.gpm-why-invest-page .page-h1 {
  font-family: var(--font-serif);
  font-size: clamp(34px, 4.2vw, 46px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.12;
  margin-bottom: 24px;
  letter-spacing: -0.005em;
}
.gpm-why-invest-page .page-lede {
  font-family: var(--font-sans);
  font-size: clamp(16px, 1.2vw, 17px);
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.65;
}

.gpm-why-invest-page .hero-rail {
  border-left: 1px solid var(--border-gold);
  padding-left: 24px;
  padding-top: 6px;
}
.gpm-why-invest-page .rail-eyebrow {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 14px;
  display: block;
}
.gpm-why-invest-page .rail-meta {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  margin-bottom: 20px;
}
.gpm-why-invest-page .rail-meta strong {
  color: var(--walnut-deep);
  font-weight: 500;
  display: block;
  margin-bottom: 2px;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.gpm-why-invest-page .rail-anchors {
  list-style: none;
  padding: 16px 0 0;
  margin: 4px 0 0;
  border-top: 1px solid var(--border-gold);
  counter-reset: rail-anchor;
}
.gpm-why-invest-page .rail-anchors li { margin-bottom: 8px; counter-increment: rail-anchor; }
.gpm-why-invest-page .rail-anchors a {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--walnut-deep);
  text-decoration: none;
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
}
.gpm-why-invest-page .rail-anchors a::before {
  content: counter(rail-anchor, decimal-leading-zero);
  font-family: var(--font-serif);
  font-size: 12px;
  color: var(--gold-secondary);
  font-weight: 500;
}
.gpm-why-invest-page .rail-anchors a:hover { color: var(--gold-secondary); }

.gpm-why-invest-page .page-banner { margin: 56px 0 0; }
.gpm-why-invest-page .page-banner-img {
  width: 100%;
  aspect-ratio: 3 / 1;
  object-fit: cover;
  border-radius: 6px;
  background: var(--canvas-deep);
  display: block;
}

.gpm-why-invest-page .body-section {
  padding: 64px 0;
  border-top: 1px solid var(--border-gold);
}
.gpm-why-invest-page .body-section:first-of-type { margin-top: 56px; }
.gpm-why-invest-page .body-section.no-border { border-top: none; }
.gpm-why-invest-page .section-h2 {
  font-family: var(--font-serif);
  font-size: clamp(26px, 2.6vw, 32px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.22;
  margin-bottom: 24px;
  letter-spacing: -0.003em;
}
.gpm-why-invest-page .prose-group { display: flex; flex-direction: column; gap: 18px; }
.gpm-why-invest-page .body-prose {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.7;
}
.gpm-why-invest-page .body-prose a {
  color: var(--gold-secondary);
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 500;
}
.gpm-why-invest-page .body-prose a:hover { color: var(--gold-hover); }

.gpm-why-invest-page .split-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 6px;
  background: var(--canvas-deep);
  display: block;
}

.gpm-why-invest-page .annotation {
  border-left: 2px solid var(--gold-deep);
  padding: 4px 0 4px 20px;
}
.gpm-why-invest-page .annotation-eyebrow {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
}
.gpm-why-invest-page .annotation-figure {
  font-family: var(--font-serif);
  font-size: clamp(34px, 3.6vw, 42px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}
.gpm-why-invest-page .annotation-label {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.35;
  margin-bottom: 12px;
}
.gpm-why-invest-page .annotation-body {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
}
.gpm-why-invest-page .annotation-source {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 500;
  color: var(--gold-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 12px;
  display: block;
}
.gpm-why-invest-page .annotation-source a { color: inherit; text-decoration: none; }

.gpm-why-invest-page .pullquote {
  border-left: 2px solid var(--gold-deep);
  padding: 4px 0 4px 20px;
}
.gpm-why-invest-page .pullquote-body {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  color: var(--walnut-deep);
  line-height: 1.45;
  margin-bottom: 12px;
}
.gpm-why-invest-page .pullquote-attr {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--gold-secondary);
  letter-spacing: 0.10em;
  text-transform: uppercase;
}

.gpm-why-invest-page .callout-band {
  background: var(--canvas-deep);
  border-top: 1px solid var(--border-gold);
  border-bottom: 1px solid var(--border-gold);
  padding: 64px 0;
}
.gpm-why-invest-page .callout-band-eyebrow {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 18px;
  display: block;
}
.gpm-why-invest-page .callout-band-copy {
  font-family: var(--font-serif);
  font-size: clamp(22px, 2.4vw, 28px);
  font-weight: 400;
  font-style: italic;
  color: var(--walnut-deep);
  line-height: 1.4;
}

.gpm-why-invest-page .does-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 36px;
  list-style: none;
  padding: 0;
}
.gpm-why-invest-page .does-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 36px;
  list-style: none;
  padding: 0;
}
.gpm-why-invest-page .does-card {
  background: var(--canvas-deep);
  border-radius: 6px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.gpm-why-invest-page .does-grid-3 .does-card { background: var(--cream); border: 1px solid var(--border-gold); }
.gpm-why-invest-page .does-card-number {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 500;
  color: var(--gold-secondary);
  line-height: 1;
  margin-bottom: 14px;
}
.gpm-why-invest-page .does-card-title {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 500;
  color: var(--walnut-deep);
  margin-bottom: 12px;
  line-height: 1.3;
}
.gpm-why-invest-page .does-card-body {
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  flex-grow: 1;
}

.gpm-why-invest-page .closing-band { padding: 56px 0 64px; }
.gpm-why-invest-page .closing-ctas { display: flex; align-items: center; gap: 32px; flex-wrap: wrap; }
.gpm-why-invest-page .cta-tier3 {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--walnut-deep);
  border: 1.5px solid var(--walnut-deep);
  border-radius: 4px;
  padding: 14px 28px;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}
.gpm-why-invest-page .cta-tier3:hover { background: var(--walnut-deep); color: var(--cream); }
.gpm-why-invest-page .cta-tier4 {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--gold-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}
.gpm-why-invest-page .cta-tier4:hover { color: var(--gold-hover); }

.gpm-why-invest-page .disclaimer-band {
  background: var(--cream);
  padding: 40px 0;
  border-top: 1px solid var(--border-gold);
}
.gpm-why-invest-page .disclaimer-text {
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 400;
  color: rgba(61, 40, 23, 0.78);
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .gpm-why-invest-page .hero-rail { padding-left: 20px; }
  .gpm-why-invest-page .does-grid-4 { grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .gpm-why-invest-page .does-grid-3 { grid-template-columns: repeat(3, 1fr); gap: 18px; }
}
@media (max-width: 768px) {
  .gpm-why-invest-page .page-hero { padding: 40px 0 0; }
  .gpm-why-invest-page .page-h1 { font-size: 28px; margin-bottom: 18px; }
  .gpm-why-invest-page .page-lede { font-size: 16px; }
  .gpm-why-invest-page .section-h2 { font-size: 24px; margin-bottom: 18px; }
  .gpm-why-invest-page .grid-12 { column-gap: 0; row-gap: 20px; }
  .gpm-why-invest-page .col-4,
  .gpm-why-invest-page .col-6,
  .gpm-why-invest-page .col-8,
  .gpm-why-invest-page .col-9 { grid-column: 1 / -1; }
  .gpm-why-invest-page .hero-rail {
    border-left: none;
    border-top: 1px solid var(--border-gold);
    padding-left: 0;
    padding-top: 24px;
    margin-top: 8px;
  }
  .gpm-why-invest-page .page-banner { margin: 36px 0 0; }
  .gpm-why-invest-page .page-banner-img { aspect-ratio: 4 / 3; max-height: 280px; }
  .gpm-why-invest-page .body-section { padding: 44px 0; }
  .gpm-why-invest-page .body-section:first-of-type { margin-top: 36px; }
  .gpm-why-invest-page .split-image { aspect-ratio: 4 / 3; }
  .gpm-why-invest-page .annotation,
  .gpm-why-invest-page .pullquote { padding-left: 16px; }
  .gpm-why-invest-page .callout-band { padding: 44px 0; }
  .gpm-why-invest-page .does-grid-4,
  .gpm-why-invest-page .does-grid-3 { grid-template-columns: 1fr; gap: 16px; margin-top: 24px; }
  .gpm-why-invest-page .closing-ctas { flex-direction: column; align-items: stretch; gap: 16px; }
  .gpm-why-invest-page .cta-tier3 { text-align: center; }
  .gpm-why-invest-page .closing-band { padding: 40px 0 48px; }
}
`

export default function Page() {
  return (
    <div className="gpm-why-invest-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <section className="page-hero" aria-labelledby="page-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <span className="page-eyebrow">Gold IRA · Why Invest</span>
              <h1 id="page-title" className="page-h1">Why people invest in gold</h1>
              <p className="page-lede">
                People hold gold for two reasons. One is to diversify a portfolio so that no single asset class carries all the weight. The other is to hold something outside the currency system — an asset whose value is not tied to anyone&rsquo;s promise to pay. This page explains both reasons, and what gold does and does not do.
              </p>
            </div>
            <aside className="col-4 hero-rail" aria-label="Page metadata">
              <span className="rail-eyebrow">On this page</span>
              <p className="rail-meta"><strong>Read time</strong>~ 7 minutes</p>
              <p className="rail-meta"><strong>Last reviewed</strong>April 2026 · counsel-cleared</p>
              <ul className="rail-anchors">
                <li><a href="#where-gold-sits">Where gold sits</a></li>
                <li><a href="#diversification">Diversification, plainly stated</a></li>
                <li><a href="#dollar-question">The dollar question</a></li>
                <li><a href="#what-gold-does">What gold does</a></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <div className="page-banner">
        <div className="wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="page-banner-img"
            src={withBase('/preview/banner-why-invest.jpg')}
            alt="Older couple sitting on their porch, settled and contemplative"
          />
        </div>
      </div>

      <section className="body-section" id="where-gold-sits" aria-labelledby="s1-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-6">
              <h2 id="s1-title" className="section-h2">Where gold sits</h2>
              <div className="prose-group">
                <p className="body-prose">The U.S. Treasury holds approximately 8,133 metric tonnes of gold — more than any other government in the world. According to the World Gold Council, central banks worldwide have been net buyers of gold for over a decade.</p>
                <p className="body-prose">Sovereign wealth funds hold it. Pension funds hold it. Individuals hold it. All for the same reason: it is an asset that is not anyone else&rsquo;s liability.</p>
                <p className="body-prose">This page is not a recommendation that you join them. It is an explanation of why they do.</p>
              </div>
            </div>
            <div className="col-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="split-image"
                src={withBase('/preview/section1-vault.jpg')}
                alt="Institutional gold vault interior with stacked gold bars on shelving"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="body-section" id="diversification" aria-labelledby="s2-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <h2 id="s2-title" className="section-h2">Diversification, plainly stated</h2>
              <div className="prose-group">
                <p className="body-prose">The standard argument for holding gold is diversification. Different assets behave differently in different economic conditions. Stocks tend to perform in periods of growth. Bonds tend to perform when rates fall. Real estate tends to track inflation over long periods.</p>
                <p className="body-prose">Gold sits outside all three. It generates no income. It pays no dividends. It does not respond to interest rates the way bonds do, or to growth the way stocks do. What it tends to do — historically — is hold purchasing power through periods when other assets struggle.</p>
                <p className="body-prose">If you are working with a financial planner, ask what allocation to gold they recommend. Most planners suggest a single-digit percentage in a diversified portfolio. Some suggest more. Some suggest none. The disagreement is informed and real. Grace&rsquo;s position is that gold has a legitimate role for the right person.</p>
              </div>
            </div>
            <aside className="col-4">
              <div className="annotation">
                <span className="annotation-eyebrow">How much to hold</span>
                <p className="annotation-figure">Your call</p>
                <p className="annotation-label">There&rsquo;s no single right number.</p>
                <p className="annotation-body">How much of your savings belongs in gold depends on your situation — your age, your goals, and what else you hold. Some people hold a little, others a great deal. We don&rsquo;t set that figure for you.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="body-section" id="dollar-question" aria-labelledby="s3-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <h2 id="s3-title" className="section-h2">The dollar question</h2>
              <div className="prose-group">
                <p className="body-prose">A separate reason people give for holding gold is concern about the long-term purchasing power of the U.S. dollar. The Federal Reserve targets 2% annual inflation. Compounded over thirty years, 2% reduces purchasing power by roughly 45%. Compounded over forty years, by roughly 55%. This is not a prediction. It is arithmetic against the Fed&rsquo;s stated target.</p>
                <p className="body-prose">People who hold gold for this reason are not betting on a collapse. They are noting that a portfolio entirely denominated in dollars carries a particular kind of risk — the risk that the unit of measurement itself loses value over the holding period. Gold, priced in dollars, has historically risen as the dollar has weakened.</p>
              </div>
            </div>
            <aside className="col-4">
              <div className="annotation">
                <span className="annotation-eyebrow">The Fed&rsquo;s stated target</span>
                <p className="annotation-figure">45%</p>
                <p className="annotation-label">Purchasing-power loss over 30 years at 2% compounded inflation.</p>
                <p className="annotation-body">Over 40 years, the same target compounds to roughly 55%. This is not a forecast — it is arithmetic against the Fed&rsquo;s own number.</p>
                <span className="annotation-source">Source: Federal Reserve target rate</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <aside className="callout-band" aria-label="Section transition">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <span className="callout-band-eyebrow">The balance of the page</span>
              <p className="callout-band-copy">What gold does, and what gold does not do. Both sides matter, and most pages give you only one.</p>
            </div>
          </div>
        </div>
      </aside>

      <section className="body-section no-border" id="what-gold-does" aria-labelledby="s4-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <h2 id="s4-title" className="section-h2">What gold does</h2>
              <p className="body-prose">Four properties that have held for as long as bullion has been recorded.</p>
            </div>
          </div>
          <ul className="does-grid-4" role="list">
            <li className="does-card">
              <span className="does-card-number" aria-hidden="true">01</span>
              <h3 className="does-card-title">Holds value</h3>
              <p className="does-card-body">Over the last century, an ounce of gold has roughly tracked dollar inflation. That is the floor of the case for owning it.</p>
            </li>
            <li className="does-card">
              <span className="does-card-number" aria-hidden="true">02</span>
              <h3 className="does-card-title">No issuer to fail</h3>
              <p className="does-card-body">A bond can default. A bank can fail. A stock can go to zero. Gold has no issuer. No singular point of failure.</p>
            </li>
            <li className="does-card">
              <span className="does-card-number" aria-hidden="true">03</span>
              <h3 className="does-card-title">Liquid</h3>
              <p className="does-card-body">Standard bullion has a published spot price. It can be sold to a dealer, anywhere, on any business day.</p>
            </li>
            <li className="does-card">
              <span className="does-card-number" aria-hidden="true">04</span>
              <h3 className="does-card-title">Fungible</h3>
              <p className="does-card-body">Standard bullion in your IRA is mechanically identical to any in any other IRA. No grade to dispute, no condition to argue.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="body-section" aria-label="How Grace is paid">
        <div className="wrap">
          <div className="grid-12">
            <aside className="col-4">
              <div className="annotation">
                <span className="annotation-eyebrow">How Grace is paid</span>
                <p className="annotation-label">Salary, not commission.</p>
                <p className="annotation-body">At Grace a metals expert&rsquo;s paycheck does not move based on what you decide. Whether you buy gold or silver, how much, or if you even buy at all. That is a structural commitment, not a marketing line.</p>
                <span className="annotation-source"><a href="/pricing">See our pricing →</a></span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="closing-band">
        <div className="wrap">
          <div className="closing-ctas">
            <a href="/pricing" className="cta-tier3">See our pricing</a>
            <a href="/advisor" className="cta-tier4">Talk to an expert →</a>
          </div>
        </div>
      </div>

      <section className="disclaimer-band" aria-label="Legal disclaimer">
        <div className="wrap">
          <div className="grid-12">
            <p className="disclaimer-text col-9">
              This page is not financial advice. Whether to invest in gold depends on your situation, your time horizon, and your view of risk. Speak to a fiduciary before opening any retirement account. Investing in precious metals carries risk. Past performance is not indicative of future returns.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
