import Link from 'next/link'
import { withBase } from '@/lib/basepath'

// /resources/understanding-dealer-spread (moved from /pricing/ 2026-06-23)
//
// Fifth long-form article: the dealer spread mechanic — entry markup,
// buyback discount, round-trip math. TSX port of article4.html. Mirrors
// the IRA-eligible-gold-coins layout (commit a03d181) — font-weight 500
// hero H1, single-digit TOC, sharp 2px button corners, 880px reading
// column. Lives in the (marketing) route group, so SiteHeader / <main> /
// SiteFooter are inherited from app/(marketing)/layout.tsx.

export const metadata = {
  title: 'Demystifying the Gold IRA Spread: Markups and Real Costs',
  description:
    "The dealer spread is the single largest cost in a Gold IRA — and the one you will never see on a fee schedule. This article explains how spreads work, what ranges are normal, what ranges are predatory, and how to calculate the true round-trip cost.",
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

/* ===== SPREAD TABLE ===== */
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
.gpm-article-page .cost-table tbody td.category-name {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  font-weight: 500;
  font-variant-numeric: normal;
}
.gpm-article-page .cost-table tbody td.illustrative {
  font-style: italic;
  color: var(--walnut-mid);
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
  { n: 1, id: 'section-1', label: 'What a spread is, in plain English' },
  { n: 2, id: 'section-2', label: 'Standard bullion spread ranges' },
  { n: 3, id: 'section-3', label: 'Premium and numismatic coin spread ranges' },
  { n: 4, id: 'section-4', label: 'The buyback side of the spread' },
  { n: 5, id: 'section-5', label: 'Round-trip cost: a worked example' },
  { n: 6, id: 'section-6', label: 'How to ask about the spread' },
  { n: 7, id: 'section-7', label: "What Grace's spread is" },
]

const IMG_BASE = '/images/pricing/understanding-dealer-spread'

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
                <Link href="/resources#pricing-costs">Pricing &amp; costs</Link>
                <span className="sep">›</span>
                <span>Demystifying the Gold IRA Spread: Markups and Real Costs</span>
              </nav>
              <div className="breadcrumb-rule" />
            </div>
          </div>

          {/* HERO */}
          <div className="reading-column">
            <div className="article-hero">
              <span className="article-eyebrow">Pricing &amp; costs</span>
              <h1 className="article-h1">Demystifying the Gold IRA Spread: Markups and Real Costs</h1>
              <p className="article-lede">
                The dealer spread is the single largest cost in a Gold IRA — and the one you will never see on a fee schedule. It is the difference between what gold costs the dealer and what you pay for it. This article explains how spreads work, what ranges are normal, what ranges are predatory, and how to calculate the true round-trip cost of buying and eventually selling gold inside your IRA.
              </p>
            </div>
          </div>

          {/* HERO IMAGE — moved above the article-layout grid so it
              spans the full 1200px container as a full-bleed editorial
              anchor before the asymmetric reading layout begins. */}
          <div className="reading-column">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase(`${IMG_BASE}/hero-comparing-quotes.jpg`)}
              alt="Retiree comparing two written quotes side by side at his desk"
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
              </aside>

              <div className="article-main">
                <div className="article-body">

              {/* SECTION 1 */}
              <h2 id="section-1">What a spread is, in plain English</h2>
              <h3>What does &ldquo;the spread&rdquo; actually mean?</h3>
              <p>
                The spread is the difference between the wholesale price of gold (what the dealer pays) and the retail price (what you pay). If gold&rsquo;s wholesale price — the spot price — is $2,384 per ounce, and the dealer sells you a one-ounce American Gold Eagle for $2,515, the spread is $131, or 5.5% over spot. That $131 is the dealer&rsquo;s gross revenue on the transaction. It is not a &ldquo;fee&rdquo; in the traditional sense — it will never appear as a line item on your statement — but it functions identically to a fee: it is a cost you bear, it reduces your effective investment, and it benefits the dealer.
              </p>
              <p>
                Every gold dealer charges a spread. There is no such thing as buying gold &ldquo;at spot&rdquo; in a retail transaction. The spread covers the dealer&rsquo;s cost of acquiring inventory, operating the business, paying staff, and generating profit. The question is never whether a spread exists — it always does — but whether the spread is disclosed, reasonable, and consistent with the product you&rsquo;re buying.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/coin-on-scale.jpg`)}
                alt="Gold coin on antique balance scale with spot price tag beside it"
                className="article-img"
              />

              {/* SECTION 2 */}
              <h2 id="section-2">Standard bullion spread ranges</h2>
              <h3>What is a normal spread on standard bullion?</h3>
              <p>
                For standard IRA-eligible bullion coins — American Gold Eagles, Canadian Maple Leafs, Austrian Philharmonics, American Buffalos — the competitive retail spread ranges from 3% to 8% over spot for single-coin purchases. Volume purchases (10+ ounces) can bring the spread down to 2%–5%. These are the coins that constitute the overwhelming majority of Gold IRA holdings because they meet IRS fineness requirements and trade in deep, liquid markets.
              </p>
              <p>
                A spread of 5%–6% on a single American Gold Eagle is standard at a reputable dealer. A spread of 8%–10% is high but not uncommon at dealers who bundle services or offer &ldquo;free&rdquo; account setup. A spread above 10% on standard bullion is a warning sign. A spread above 15% on standard bullion is predatory — it means the dealer is extracting margin that will take years of gold appreciation to overcome.
              </p>

              <h3>Why do spreads vary between dealers?</h3>
              <p>
                Spreads vary because dealers have different cost structures, margin targets, and business models. A high-volume online dealer with minimal sales staff can operate on thin margins (3%–5%). A dealer with a large commissioned sales force, television advertising, and celebrity endorsements needs wider margins (10%–20%) to cover those costs. The spread is not just the dealer&rsquo;s profit — it is the dealer&rsquo;s entire revenue model compressed into a single number. When you see a wide spread, you are paying for the dealer&rsquo;s marketing budget, sales commissions, and overhead — not for better gold.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/bullion-coin-closeup.jpg`)}
                alt="American Gold Eagle bullion coin on neutral linen surface, documentary close-up"
                className="article-img"
              />

              {/* SECTION 3 */}
              <h2 id="section-3">Premium and numismatic coin spread ranges</h2>
              <h3>What happens to the spread on premium coins?</h3>
              <p>
                Premium coins — proof editions, limited mintages, graded coins, and coins marketed as &ldquo;rare&rdquo; or &ldquo;collectible&rdquo; — carry spreads that are dramatically wider than standard bullion. A proof American Gold Eagle might carry a 20%–40% spread over its melt value. A graded pre-1933 coin marketed as &ldquo;numismatic&rdquo; can carry a spread of 50%–300% over its gold content value. These spreads are legal, but they are rarely disclosed in percentage terms. The dealer quotes a dollar price; the buyer does not know (or is not told) what percentage of that price is gold value versus dealer margin.
              </p>

              <h3>Why are numismatic spreads so much wider?</h3>
              <p>
                Because numismatic coins trade in illiquid markets with subjective pricing. A standard American Gold Eagle has a clear wholesale price tied to the spot market — any dealer can verify it in seconds. A graded 1908 Saint-Gaudens $20 in MS-64 has a &ldquo;value&rdquo; that depends on recent auction results, dealer inventory levels, collector demand, and the specific grading service. This subjectivity creates room for wider margins because the buyer cannot easily verify whether the price is fair.
              </p>
              <p>
                The Gold IRA industry exploits this dynamic systematically. Dealers steer customers toward premium and numismatic coins not because those coins perform better in an IRA (they don&rsquo;t — their premium erodes over time), but because the wider spread generates more revenue per transaction. A dealer selling $50,000 of standard bullion at 5% earns $2,500. The same dealer selling $50,000 of &ldquo;rare&rdquo; coins at 40% earns $20,000. The incentive structure is transparent once you see it.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/graded-slabbed-coin.jpg`)}
                alt="NGC-graded 1907 Saint-Gaudens $20 gold coin in plastic slab, MS-65"
                className="article-img"
              />

              {/* PULLQUOTE */}
              <div className="pullquote-band">
                <p className="pullquote-verse">&ldquo;A false balance is an abomination to the Lord, but a just weight is his delight.&rdquo;</p>
                <span className="pullquote-citation">Proverbs 11:1</span>
              </div>

              {/* SECTION 4 */}
              <h2 id="section-4">The buyback side of the spread</h2>
              <h3>What is the buyback spread?</h3>
              <p>
                The buyback spread is the discount below spot that the dealer applies when you sell gold back to them. If spot is $2,384 and the dealer buys your coin at $2,336, the buyback spread is $48, or 2% below spot. This is the second half of the round-trip cost — you paid above spot to buy, and you receive below spot to sell. The total cost of owning gold through a dealer is the entry spread plus the buyback spread.
              </p>

              <h3>Why do buyback spreads matter as much as entry spreads?</h3>
              <p>
                Because every ounce of gold in your IRA will eventually be sold — either by you during retirement, by your estate, or by the custodian at account termination. The buyback spread is not a hypothetical future cost. It is a guaranteed future cost. A dealer offering a &ldquo;low&rdquo; entry spread of 5% but a buyback discount of 10% below spot has a round-trip cost of 15%. A dealer with a 5% entry spread and a 1% buyback discount has a round-trip cost of 6%. The second dealer is less than half the total cost despite charging the same entry price.
              </p>
              <p>
                Many dealers do not publish their buyback prices. Some quote buyback &ldquo;at spot&rdquo; but define &ldquo;spot&rdquo; using a delayed or off-market price. Some quote buyback only when you call to sell — meaning you cannot evaluate the total cost until you&rsquo;re already committed. The buyback spread is where the most significant cost asymmetries hide.
              </p>

              {/* SPREAD TABLE */}
              <div className="cost-table-wrap">
                <table className="cost-table">
                  <thead>
                    <tr>
                      <th>Product Category</th>
                      <th>Typical Entry Markup</th>
                      <th>Typical Buyback Discount</th>
                      <th>Round-Trip Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="category-name">Standard bullion (Eagle, Maple, Buffalo)</td>
                      <td>3%–8% over spot</td>
                      <td>1%–4% below spot</td>
                      <td className="illustrative">4%–12%</td>
                    </tr>
                    <tr>
                      <td className="category-name">Premium bullion (proof editions)</td>
                      <td>15%–40% over melt</td>
                      <td>5%–15% below melt</td>
                      <td className="illustrative">20%–55%</td>
                    </tr>
                    <tr>
                      <td className="category-name">Numismatic / &ldquo;rare&rdquo; coins</td>
                      <td>40%–300% over melt</td>
                      <td>20%–60% below purchase</td>
                      <td className="illustrative">60%–360%</td>
                    </tr>
                    <tr>
                      <td className="category-name">Grace (standard bullion only)</td>
                      <td>11.1% all-in, published</td>
                      <td>0% (buyback at spot, never below)</td>
                      <td>11.1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* SECTION 5 */}
              <h2 id="section-5">Round-trip cost: a worked example</h2>
              <h3>How do you calculate the actual cost?</h3>
              <p>
                Assume spot gold is $2,384 per ounce. You purchase one American Gold Eagle from a low-cost dealer at a 6% entry spread: $2,384 × 1.06 = $2,527. You hold the coin for ten years. When you sell, spot is still $2,384 (for simplicity — in reality gold may have appreciated, but the spread percentage remains the same). The dealer buys back at 3% below spot: $2,384 × 0.97 = $2,313. Your round-trip cost is $2,527 − $2,313 = $214, or 9% of the spot value at time of sale.
              </p>
              <p>
                Now compare: same scenario, but the dealer charges 16% entry and 8% buyback. Entry: $2,384 × 1.16 = $2,765. Buyback: $2,384 × 0.92 = $2,193. Round-trip cost: $2,765 − $2,193 = $572, or 24% of spot. The second dealer costs more than two-and-a-half times as much for the identical coin held for the identical period. The gold is the same. The IRA is the same. The custodian may even be the same. The only difference is the spread.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/arithmetic-notepad.jpg`)}
                alt="Hands writing round-trip cost calculation on notepad with calculator beside"
                className="article-img"
              />

              {/* SECTION 6 */}
              <h2 id="section-6">How to ask about the spread</h2>
              <h3>What questions should you ask before buying?</h3>
              <p>
                Ask three questions, in this order. First: &ldquo;What is your published spread on a one-ounce American Gold Eagle, expressed as a percentage over spot?&rdquo; If the dealer cannot or will not answer this question with a specific number, that is your answer. Second: &ldquo;What is your buyback price on the same coin, expressed as a percentage relative to spot?&rdquo; Again — a specific number, not &ldquo;competitive&rdquo; or &ldquo;fair market value.&rdquo; Third: &ldquo;Is the spread the same for all customers, or does it vary by account size, purchase volume, or sales representative?&rdquo;
              </p>
              <p>
                These three questions eliminate 90% of the ambiguity in Gold IRA pricing. A dealer who publishes a specific entry spread, a specific buyback spread, and confirms those numbers are consistent across all customers is operating transparently. A dealer who deflects, quotes in dollars rather than percentages, or says &ldquo;it depends&rdquo; is operating in the margin of opacity that benefits the dealer at the buyer&rsquo;s expense.
              </p>

              <h3>What if the dealer quotes in dollars instead of percentages?</h3>
              <p>
                Convert it yourself. If the dealer says &ldquo;We sell the one-ounce Eagle for $2,750&rdquo; and spot is $2,384, the spread is ($2,750 − $2,384) ÷ $2,384 = 15.4%. If the dealer says &ldquo;We buy back at $2,200&rdquo; the buyback discount is ($2,384 − $2,200) ÷ $2,384 = 7.7%. Round-trip: 23.1%. The dealer quoted in dollars because 23.1% sounds worse than &ldquo;$550 per coin.&rdquo; The math is the same. The cost is the same. The framing is different.
              </p>

              {/* SECTION 7 */}
              <h2 id="section-7">What Grace&rsquo;s spread is</h2>
              <h3>What does Grace charge?</h3>
              <p>
                Grace Precious Metals publishes an <strong>11.1% all-in spread</strong> on American Gold Eagles — the standard IRA-eligible bullion coin that constitutes the majority of client holdings. The buyback commitment is at spot, never below. The all-in figure is exactly that: the complete round-trip cost of a Grace transaction, disclosed before any phone call. It is not a promotional rate, not an introductory offer, not volume-dependent. It is the standing published price available to every client regardless of account size.
              </p>
              <p>
                Grace does not sell premium coins, numismatic coins, graded coins, or &ldquo;rare&rdquo; coins into IRAs. This is a deliberate business decision: those products carry wider margins that benefit the dealer but not the client. By restricting the product set to standard bullion, Grace eliminates the incentive structure that drives most Gold IRA sales toward high-spread products. The spread is what it is because the product is simpler, the market is more liquid, and the pricing is more verifiable.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/grace-fee-sheet.jpg`)}
                alt="Clean pricing disclosure sheet showing the published all-in spread and at-spot buyback commitment"
                className="article-img"
              />

              <h3>Why does Grace publish the spread?</h3>
              <p>
                Because a cost you can see is a cost you can evaluate. A cost you cannot see is a cost you cannot compare. The Gold IRA industry&rsquo;s standard practice of quoting in dollars, varying prices by customer, and not publishing buyback rates creates an information asymmetry that benefits dealers at the expense of buyers. Publishing the spread as a single all-in figure, applying it uniformly, and committing to at-spot buyback eliminates that asymmetry. It also makes Grace directly comparable to every other dealer — which is the point. Transparency is only risky if your numbers don&rsquo;t hold up to comparison.
              </p>

                </div>{/* end article-body */}
              </div>{/* end article-main */}
            </div>{/* end article-layout */}
          </div>{/* end article reading-column */}

          {/* END-OF-ARTICLE SECTIONS */}
          <div className="reading-column">

            {/* DISCLAIMER LINE */}
            <p className="article-disclaimer">
              This article is educational and does not constitute tax, legal, or investment advice. Consult a qualified professional regarding your specific situation.
            </p>

            {/* END CTA */}
            <div className="end-cta-band">
              <span className="end-cta-eyebrow">When you&rsquo;re ready</span>
              <h2 className="end-cta-headline">A conversation, on your own timeline.</h2>
              <p className="end-cta-subhead">
                If you have questions about the dealer spread, our salaried advisors will walk you through your specific situation. No commission, no pressure, no urgency.
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
                <Link href="/resources/fees-explained" className="related-card">
                  <span className="related-card-eyebrow">Pricing &amp; costs</span>
                  <p className="related-card-title">Gold IRA Fees Explained: Removing the Industry Smoke and Mirrors</p>
                  <span className="related-card-meta">9 min read</span>
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
