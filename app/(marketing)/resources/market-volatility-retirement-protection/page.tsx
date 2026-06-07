import Link from 'next/link'
import { withBase } from '@/lib/basepath'

// /resources/market-volatility-retirement-protection
//
// Sixth long-form article: sequence-of-returns risk, gold's historical
// behavior in equity bear markets, correlation properties honestly
// stated, and the stewardship frame for allocation. TSX port of
// article6.html. Mirrors the IRA-eligible-gold-coins layout (commit
// a03d181) — font-weight 500 H1, single-digit TOC, sharp 2px button
// corners, 880px reading column. Sits inside the (marketing) route
// group, so SiteHeader, <main>, and SiteFooter are inherited from
// app/(marketing)/layout.tsx.

export const metadata = {
  title: 'Market Volatility and Retirement Protection: A Balanced Approach to Capital Preservation',
  description:
    "Retirement portfolios face a risk that working-age portfolios do not: the inability to recover from poorly timed losses. This article examines how market volatility affects retirement income, how gold has historically behaved during equity market stress, and how stewardship — not speculation — should guide allocation.",
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

/* ===== READING COLUMN =====
   2026-06-07 widescreen pass: container widened 880 → 1200px so the
   TOC can live as a sticky 3-col sidebar alongside the 9-col article
   main track. Localized max-widths inside the body (~65ch on
   paragraphs and h3) keep prose legible inside the wider shell.
   Mobile (<1024px) collapses to single column. */
.gpm-article-page .reading-column {
  max-width: 1200px;
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
  max-width: 900px;
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
  max-width: 720px;
}

/* ===== ARTICLE LAYOUT (sidebar + main) =====
   Asymmetric 3/9 grid: sticky TOC sidebar left, article main track
   right. Kicks in at >1024px; collapses to single-column below. */
.gpm-article-page .article-layout {
  display: grid;
  grid-template-columns: 3fr 9fr;
  gap: 48px;
  align-items: start;
  padding-top: 8px;
}
.gpm-article-page .article-sidebar {
  position: sticky;
  top: 32px;
  min-width: 0;
}
.gpm-article-page .article-main { min-width: 0; }

/* ===== INLINE TOC =====
   Default styling (sidebar context). The wider canvas-deep band
   used pre-refactor is recovered when the layout collapses below
   1024px (see responsive overrides). */
.gpm-article-page .inline-toc {
  background: var(--canvas-deep);
  border-top: 0.5px solid var(--line-soft);
  border-bottom: 0.5px solid var(--line-soft);
  padding: 24px 24px;
  margin-bottom: 0;
}
.gpm-article-page .article-sidebar .toc-grid {
  grid-template-columns: 1fr;
  gap: 12px;
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
  max-width: 65ch;
}
.gpm-article-page .article-body h3 { max-width: 65ch; }
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

/* ===== HISTORICAL TABLE ===== */
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
  min-width: 680px;
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
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
}
.gpm-article-page .cost-table tbody td.period-name {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  font-weight: 500;
  font-variant-numeric: normal;
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

/* ===== RESPONSIVE =====
   Below 1024px the 3/9 article-layout collapses to single column,
   TOC sidebar drops position:sticky and inflates back to the original
   wide canvas-deep TOC band styling for compactness. */
@media (max-width: 1024px) {
  .gpm-article-page .reading-column { padding: 0 32px; }
  .gpm-article-page .article-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .gpm-article-page .article-sidebar { position: static; }
  .gpm-article-page .article-sidebar .inline-toc {
    padding: 28px 32px;
    margin-bottom: 0;
  }
  .gpm-article-page .article-sidebar .toc-grid {
    grid-template-columns: 1fr 1fr;
    gap: 10px 40px;
  }
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
  { n: 1, id: 'section-1', label: 'Why retirement is uniquely vulnerable to volatility' },
  { n: 2, id: 'section-2', label: 'Sequence-of-returns risk' },
  { n: 3, id: 'section-3', label: 'How gold has behaved in market stress' },
  { n: 4, id: 'section-4', label: "Gold's correlation properties — honestly stated" },
  { n: 5, id: 'section-5', label: 'Allocation considerations' },
  { n: 6, id: 'section-6', label: 'The stewardship frame: the parable of the talents' },
  { n: 7, id: 'section-7', label: "What Grace believes about gold's role" },
]

const IMG_BASE = '/images/resources/market-volatility-retirement-protection'

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
            <Link href="/resources#markets">Markets, risk &amp; allocation</Link>
            <span className="sep">›</span>
            <span>Market Volatility and Retirement Protection</span>
          </nav>
          <div className="breadcrumb-rule" />
        </div>
      </div>

      {/* HERO */}
      <div className="reading-column">
        <div className="article-hero">
          <span className="article-eyebrow">Markets, risk &amp; allocation</span>
          <h1 className="article-h1">Market Volatility and Retirement Protection: A Balanced Approach to Capital Preservation</h1>
          <p className="article-lede">
            Retirement portfolios face a risk that working-age portfolios do not: the inability to recover from poorly timed losses. This article examines how market volatility affects retirement income, how gold has historically behaved during equity market stress, what gold&rsquo;s correlation properties actually are (honestly stated), and how a stewardship framework — not a speculation framework — should guide allocation decisions.
          </p>
        </div>
      </div>

      {/* HERO IMAGE — moved above the article-layout grid so it
          spans the full 1200px container as a full-bleed editorial
          anchor before the asymmetric reading layout begins. */}
      <div className="reading-column">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase(`${IMG_BASE}/hero-couple-deliberation.jpg`)}
          alt="Couple in their 60s in considered conversation at a window, warm natural light"
          className="article-img hero-img"
        />
      </div>

      {/* ARTICLE LAYOUT: 3/9 grid with sticky TOC sidebar + 9-col main */}
      <div className="reading-column">
        <div className="article-layout">
          <aside className="article-sidebar" aria-label="On this page">
            <div className="inline-toc">
              <span className="toc-eyebrow">On this page</span>
              <div className="toc-meta">
                <span className="toc-meta-label">Read time:</span> 11 min read
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
          </aside>

          <div className="article-main">
            <div className="article-body">

          {/* SECTION 1 */}
          <h2 id="section-1">Why retirement is uniquely vulnerable to volatility</h2>
          <h3>What makes retirement different from the accumulation phase?</h3>
          <p>
            During the accumulation phase — the decades when you are working, earning, and contributing to retirement accounts — market volatility is an inconvenience. A 30% decline in your 401(k) at age 40 is painful to see on a statement, but you have 25 years of future contributions and market recovery ahead of you. Time is your ally. You buy more shares at lower prices. The math works in your favor.
          </p>
          <p>
            Retirement inverts this relationship. Once you begin withdrawing from your portfolio rather than contributing to it, market declines are no longer temporary inconveniences — they are permanent impairments. A 30% decline at age 67, combined with ongoing withdrawals for living expenses, creates a compounding problem: you are selling assets at depressed prices to fund current needs, which reduces the portfolio&rsquo;s ability to recover when markets rebound. The shares you sell at the bottom are shares that will never participate in the recovery.
          </p>

          <h3>Why doesn&rsquo;t the standard advice account for this?</h3>
          <p>
            The standard financial planning framework — &ldquo;stay invested, ride out the volatility, markets always recover&rdquo; — is built for the accumulation phase. It assumes a long time horizon, continued contributions, and no forced selling. These assumptions are reasonable for a 35-year-old with three decades of earning ahead. They are not reasonable for a 67-year-old who needs $6,000 per month from a portfolio that just lost 30% of its value. The advice is not wrong in principle; it is wrong in application. The same strategy that builds wealth during accumulation can destroy it during distribution.
          </p>

          {/* SECTION 2 */}
          <h2 id="section-2">Sequence-of-returns risk</h2>
          <h3>What is sequence-of-returns risk?</h3>
          <p>
            Sequence-of-returns risk is the risk that the order in which investment returns occur will materially affect the sustainability of a retirement portfolio. Two retirees with identical average returns over 20 years can have dramatically different outcomes depending on whether the negative returns occur early or late in retirement. This is not a theoretical abstraction — it is the single most important risk factor in retirement income planning, and it is the risk that conventional portfolio construction does the worst job of addressing.
          </p>
          <p>
            Consider two scenarios. Retiree A retires in 2000 with $1 million and withdraws $50,000 per year (5% initial withdrawal rate). The S&amp;P 500 declines 9.1% in 2000, 11.9% in 2001, and 22.1% in 2002. By the time markets recover, Retiree A has withdrawn $150,000 from a portfolio that lost roughly 40% of its equity value. The portfolio never recovers. Retiree B retires in 2010 with the same $1 million and the same withdrawal rate. Markets rise in the early years. By the time the next significant decline occurs, the portfolio has grown enough to absorb it. Same average returns. Same withdrawal rate. Dramatically different outcomes. The only variable is timing.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/portfolio-statement.jpg`)}
            alt="Close-up of printed portfolio summary statement with monthly account balances and a hand resting on the paper"
            className="article-img"
          />

          {/* SECTION 3 */}
          <h2 id="section-3">How gold has behaved in market stress</h2>
          <h3>What does the historical record actually show?</h3>
          <p>
            Gold&rsquo;s behavior during periods of equity market stress is the empirical foundation for its inclusion in retirement portfolios. The record is not perfect — gold is not a guaranteed hedge, and it does not rise every time stocks fall — but the pattern across major equity declines is consistent enough to be analytically meaningful.
          </p>
          <p>
            During the 1973–1974 bear market, the S&amp;P 500 declined approximately 48%. Gold rose approximately 73% over the same period. During the 2000–2002 dot-com collapse, the S&amp;P 500 declined approximately 49%. Gold rose approximately 12%. During the 2007–2009 financial crisis, the S&amp;P 500 declined approximately 57%. Gold rose approximately 25%. During the COVID-19 market shock in Q1 2020, the S&amp;P 500 declined approximately 34% peak-to-trough. Gold declined approximately 3% in the initial liquidity sell-off before recovering and finishing the year up approximately 25%.
          </p>

          {/* HISTORICAL TABLE */}
          <div className="cost-table-wrap">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>S&amp;P 500 Return</th>
                  <th>Gold Return</th>
                  <th>Brief Context</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="period-name">1973–1974</td>
                  <td>−48%</td>
                  <td>+73%</td>
                  <td>Oil embargo, stagflation; gold&rsquo;s strongest counter-equity period</td>
                </tr>
                <tr>
                  <td className="period-name">2000–2002</td>
                  <td>−49%</td>
                  <td>+12%</td>
                  <td>Dot-com collapse; gold modestly positive while equities halved</td>
                </tr>
                <tr>
                  <td className="period-name">2007–2009</td>
                  <td>−57%</td>
                  <td>+25%</td>
                  <td>Global financial crisis; gold rose through banking-system stress</td>
                </tr>
                <tr>
                  <td className="period-name">2020 Q1</td>
                  <td>−34%</td>
                  <td>−3% (Q1); +25% (full year)</td>
                  <td>COVID-19 liquidity shock; brief gold dip, then strong recovery</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>What does this pattern mean for retirement portfolios?</h3>
          <p>
            The pattern is not &ldquo;gold always goes up when stocks go down.&rdquo; The pattern is &ldquo;gold has historically maintained or increased its value during the specific periods when equity portfolios suffer their most damaging declines.&rdquo; For a retiree facing sequence-of-returns risk, this distinction matters enormously. The question is not whether gold outperforms equities over 30 years (it doesn&rsquo;t). The question is whether gold holds value during the three-to-five-year windows when equity losses are most destructive to retirement income. The historical record suggests it does — imperfectly, but consistently enough to serve as a meaningful portfolio stabilizer.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/gold-coins-aged-surface.jpg`)}
            alt="Three gold bullion coins on an aged leather-bound book, warm directional light suggesting historical durability"
            className="article-img"
          />

          {/* SECTION 4 */}
          <h2 id="section-4">Gold&rsquo;s correlation properties — honestly stated</h2>
          <h3>What is gold&rsquo;s actual correlation with equities?</h3>
          <p>
            Gold&rsquo;s long-term correlation with the S&amp;P 500 is approximately 0.0 to 0.1 — effectively zero. This means that over long periods, gold&rsquo;s price movements have almost no statistical relationship to equity price movements. This is the property that makes gold useful in portfolio construction: it provides returns that are driven by different factors than the returns of stocks and bonds.
          </p>
          <p>
            But correlation is not constant. During normal market conditions — the 80% of the time when equities are grinding upward — gold&rsquo;s correlation with stocks can drift positive, sometimes reaching 0.3 or higher. During acute market stress — the 20% of the time that matters most for sequence-of-returns risk — gold&rsquo;s correlation with equities tends to turn negative, meaning gold rises while stocks fall. This is called &ldquo;crisis alpha&rdquo; in academic literature, and it is the specific property that makes gold relevant to retirement protection.
          </p>

          <h3>What are the honest limitations?</h3>
          <p>
            Gold does not pay dividends. Gold does not generate earnings. Gold&rsquo;s long-term real return (after inflation) is approximately 1%–2% per year — far below equities&rsquo; historical 7%–8% real return. Gold can decline for extended periods: from 1980 to 2001, gold lost approximately 70% of its real value. A portfolio that was 100% gold during that period would have been catastrophic. Gold is not a growth asset. It is not a replacement for equities. It is not a &ldquo;better&rdquo; investment than stocks. Anyone who tells you otherwise is selling something.
          </p>
          <p>
            Gold&rsquo;s value in a retirement portfolio is not as a return generator. It is as a volatility dampener — an asset that behaves differently from equities during the specific periods when equity volatility is most dangerous. This is a narrow, specific, defensible claim. It is not the same as &ldquo;gold always goes up&rdquo; or &ldquo;gold protects against everything.&rdquo; The honest case for gold in a retirement portfolio is modest, specific, and grounded in correlation data — not in fear, not in conspiracy theories about the dollar, and not in promises of spectacular returns.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/desk-analysis-scene.jpg`)}
            alt="Walnut desk covered with portfolio statements, correlation matrix, allocation notepad, and coffee cup"
            className="article-img"
          />

          {/* SECTION 5 */}
          <h2 id="section-5">Allocation considerations</h2>
          <h3>How much gold belongs in a retirement portfolio?</h3>
          <p>
            The academic literature on gold allocation in retirement portfolios generally supports a range of 5%–15% of total portfolio value. Below 5%, the allocation is too small to meaningfully affect portfolio volatility during a crisis. Above 15%, the opportunity cost of foregone equity returns begins to outweigh the volatility-reduction benefit. The optimal allocation depends on the investor&rsquo;s total portfolio size, withdrawal rate, other income sources (Social Security, pensions), risk tolerance, and time horizon within retirement.
          </p>
          <p>
            Grace does not recommend a specific allocation percentage. That is the role of a financial advisor who understands your complete financial picture — not a gold dealer who benefits from larger purchases. What Grace does is provide the information, the pricing transparency, and the operational infrastructure to execute whatever allocation you and your advisor determine is appropriate. If your advisor says 5%, we facilitate 5%. If your advisor says 10%, we facilitate 10%. We do not upsell. We do not suggest that &ldquo;most clients&rdquo; choose a higher allocation. We do not imply that current market conditions warrant a larger position.
          </p>

          <h3>What about the &ldquo;all-in-gold&rdquo; pitch?</h3>
          <p>
            Some Gold IRA dealers suggest allocations of 30%, 50%, or even 100% of retirement assets into gold. This is not a conservative strategy. It is a concentrated bet on a single asset class that does not generate income, does not compound, and has experienced multi-decade drawdowns. A 100% gold allocation is not &ldquo;safe&rdquo; — it is speculative in the opposite direction. The same intellectual honesty that recognizes the risks of 100% equities must recognize the risks of 100% gold. Diversification is not a marketing slogan; it is a mathematical property of portfolio construction that works precisely because different assets behave differently at different times.
          </p>

          {/* SECTION 6 */}
          <h2 id="section-6">The stewardship frame: the parable of the talents</h2>
          <h3>What does stewardship have to do with portfolio allocation?</h3>
          <p>
            In the parable of the talents (Matthew 25:14–30), a master entrusts three servants with different amounts of money before departing on a journey. Two servants invest their portions and generate returns. The third servant, motivated by fear, buries his portion in the ground. When the master returns, he commends the two who invested and rebukes the one who buried his talent — not for losing money, but for failing to steward what was entrusted to him.
          </p>
          <p>
            This parable is often cited in financial contexts, and it is worth being precise about what it teaches and what it does not. It does not teach that aggressive investing is virtuous. It does not teach that higher returns are morally superior to lower returns. It teaches that stewardship — the responsible management of what has been entrusted to you — requires engagement, not avoidance. The servant who buried his talent was not punished for being conservative. He was punished for being passive — for letting fear prevent him from exercising the judgment his master expected of him.
          </p>

          <h3>How does this apply to retirement allocation?</h3>
          <p>
            The stewardship frame rejects both extremes. It rejects the fear-driven impulse to convert everything to gold and bury it (figuratively or literally). It also rejects the complacency of leaving a retirement portfolio entirely in equities because &ldquo;markets always recover&rdquo; — a statement that is true on average but irrelevant to the individual retiree who faces a specific sequence of returns at a specific point in time. Stewardship requires active, informed, proportionate engagement with the resources you have been given. It requires understanding the risks, evaluating the tools available, and making deliberate decisions — not reactive ones.
          </p>
          <p>
            A 5%–15% allocation to physical gold within a diversified retirement portfolio is consistent with stewardship. It acknowledges the real risk of sequence-of-returns vulnerability. It uses a historically validated tool to mitigate that risk. It does not abandon the growth potential of equities. It does not concentrate in a single asset class. It does not pretend that gold is a magic solution. It is a measured, proportionate, defensible decision — the kind of decision that the parable&rsquo;s faithful servants would recognize.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/bible-and-paperwork.jpg`)}
            alt="Older man's hands at kitchen table with open Bible and retirement allocation plan, morning light"
            className="article-img"
          />

          {/* PULLQUOTE */}
          <div className="pullquote-band">
            <p className="pullquote-verse">&ldquo;A false balance is an abomination to the Lord, but a just weight is his delight.&rdquo;</p>
            <span className="pullquote-citation">Proverbs 11:1</span>
          </div>

          {/* SECTION 7 */}
          <h2 id="section-7">What Grace believes about gold&rsquo;s role</h2>
          <h3>What is Grace&rsquo;s position on gold in a retirement portfolio?</h3>
          <p>
            Grace Precious Metals believes that physical gold has a legitimate, limited role in a diversified retirement portfolio — specifically as a volatility dampener that provides crisis-period stability to portfolios that are otherwise concentrated in equities and bonds. We do not believe gold is a growth investment. We do not believe gold should constitute a majority of any retirement portfolio. We do not believe gold is a hedge against every conceivable risk. We believe the honest case for gold is narrow, specific, and grounded in data — and that this honest case is more than sufficient to justify a modest allocation for investors who understand what they are buying and why.
          </p>
          <p>
            Our role is not to tell you how much gold to own. Our role is to provide transparent pricing, honest information, and professional execution so that the allocation decision you and your advisor make is implemented without unnecessary cost, without pressure, and without the conflicts of interest that pervade this industry. We publish our spread. We pay salaried advisors. We do not sell numismatic coins. We do not upsell. We do not use fear as a sales tool. We believe that if the information is honest and the pricing is fair, the right clients will make the right decisions for their own circumstances.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/advisor-consultation.jpg`)}
            alt="Advisor and customer reviewing an allocation overview sheet together at a desk"
            className="article-img"
          />

          <h3>Why does Grace exist in this market?</h3>
          <p>
            Because the Gold IRA industry has made it unnecessarily difficult for honest people to make informed decisions about a legitimate financial tool. The industry&rsquo;s standard practices — opaque pricing, commissioned sales, numismatic coin steering, fear-based marketing — have created an environment where the people who would benefit most from a modest gold allocation are the people most likely to be exploited by the process of obtaining one. Grace exists to provide an alternative: the same product, held in the same custodial structure, at a transparent cost, sold by people who are paid to inform rather than to close. The gold is the same. The difference is how it reaches you.
          </p>

            </div>{/* end article-body */}
          </div>{/* end article-main */}
        </div>{/* end article-layout */}
      </div>{/* end article reading-column */}

      {/* END-OF-ARTICLE SECTIONS */}
      <div className="reading-column">

        {/* DISCLAIMER LINE */}
        <p className="article-disclaimer">
          This article is educational and does not constitute tax, legal, or investment advice. Past performance does not guarantee future results. Consult a qualified professional regarding your specific situation.
        </p>

        {/* END CTA */}
        <div className="end-cta-band">
          <span className="end-cta-eyebrow">When you&rsquo;re ready</span>
          <h2 className="end-cta-headline">A conversation, on your own timeline.</h2>
          <p className="end-cta-subhead">
            If you have questions about market volatility and your retirement, our salaried advisors will walk you through your specific situation. No commission, no pressure, no urgency.
          </p>
          <div className="end-cta-buttons">
            <Link href="/briefing" className="btn-outline">Get the Briefing</Link>
            <Link href="/advisor" className="btn-gold">Talk to an advisor</Link>
          </div>
        </div>

        {/* RELATED READING */}
        <div className="related-reading">
          <p className="related-heading">Two more reads from the Resources library.</p>
          <div className="related-grid">
            <Link href="/resources/401k-to-gold-ira-rollover" className="related-card">
              <span className="related-card-eyebrow">Rollover mechanics</span>
              <p className="related-card-title">How to Roll a 401(k) Into Gold Without Tax Penalties</p>
              <span className="related-card-meta">10 min read</span>
            </Link>
            <Link href="/resources/ira-eligible-gold-coins" className="related-card">
              <span className="related-card-eyebrow">What you can hold</span>
              <p className="related-card-title">IRA-Eligible Gold Coins: The Strict Regulatory Reality</p>
              <span className="related-card-meta">10 min read</span>
            </Link>
          </div>
          <Link href="/resources" className="back-to-resources">← Back to Resources</Link>
        </div>

      </div>{/* end end-of-article reading-column */}

      {/* DISCLAIMER BAND */}
      <div className="section-disclaimer">
        <div className="reading-column">
          <p>
            Grace Precious Metals does not provide tax, legal, or investment advice. All content is for informational purposes only. Precious metals involve risk and are not suitable for all investors. Past performance does not guarantee future results. Consult your tax advisor or financial professional before making investment decisions. Grace Precious Metals is a dealer of physical precious metals and is not a fiduciary.
          </p>
          <div className="disclaimer-divider" />
        </div>
      </div>

    </div>
  )
}
