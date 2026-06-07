import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/nav'
import { withBase } from '@/lib/basepath'

// /pricing/fees-explained
//
// Fourth long-form article: a category-by-category walkthrough of Gold IRA
// fees. TSX port of article3.html. Styled to mirror the IRA-eligible-gold-coins
// layout (commit a03d181) — single-digit TOC, font-weight 500 hero H1,
// sharp-corner buttons, 880px reading column. Lives under /pricing/
// (outside the (marketing) group), so wraps SiteHeader + main + SiteFooter
// inline, matching pricing/gold-ira-cost-analysis/page.tsx.

export const metadata = {
  title: 'Gold IRA Fees Explained: Removing the Industry Smoke and Mirrors',
  description:
    "The Gold IRA industry has perfected the art of making fees invisible. This article names every fee category, explains what each pays for, and shows you what to ask before you sign.",
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

/* ===== FEE TABLE ===== */
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
}
.gpm-article-page .cost-table tbody td.fee-name {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  font-weight: 500;
}
.gpm-article-page .cost-table tbody td.ask-col {
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
  { n: 1, id: 'section-1', label: 'The fee categories you should expect to see' },
  { n: 2, id: 'section-2', label: 'Setup fees and "no setup fee" claims' },
  { n: 3, id: 'section-3', label: 'Annual custodian fees' },
  { n: 4, id: 'section-4', label: 'Storage fees: flat versus percentage-based' },
  { n: 5, id: 'section-5', label: 'Transaction, wire, and exit fees' },
  { n: 6, id: 'section-6', label: 'How "free fees" promotions actually work' },
  { n: 7, id: 'section-7', label: 'What Grace charges' },
]

const IMG_BASE = '/images/pricing/fees-explained'

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
                <span>Gold IRA Fees Explained: Removing the Industry Smoke and Mirrors</span>
              </nav>
              <div className="breadcrumb-rule" />
            </div>
          </div>

          {/* HERO */}
          <div className="reading-column">
            <div className="article-hero">
              <span className="article-eyebrow">Pricing &amp; costs</span>
              <h1 className="article-h1">Gold IRA Fees Explained: Removing the Industry Smoke and Mirrors</h1>
              <p className="article-lede">
                The Gold IRA industry has perfected the art of making fees invisible. Setup fees disappear into &ldquo;free&rdquo; promotions. Custodian fees hide inside bundled packages. Storage fees shift between flat rates and percentage models depending on which number looks smaller. This article names every fee category, explains what each one actually pays for, and shows you what to ask before you sign.
              </p>
            </div>
          </div>

          {/* HERO IMAGE — moved above the article-layout grid so it
              spans the full 1200px container as a full-bleed editorial
              anchor before the asymmetric reading layout begins. */}
          <div className="reading-column">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBase(`${IMG_BASE}/hero-retiree-fee-schedule.jpg`)}
              alt="Retiree at desk carefully reading a printed fee schedule"
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
                    <span className="toc-meta-label">Read time:</span> 9 min read
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
              <h2 id="section-1">The fee categories you should expect to see</h2>
              <h3>What fees does a Gold IRA actually carry?</h3>
              <p>
                A Gold IRA carries fees in five distinct categories. Some are disclosed upfront. Some appear only in the fine print of custodian agreements. Some are never disclosed at all — they&rsquo;re embedded in the price you pay for metal. Understanding all five categories is the prerequisite to evaluating any Gold IRA offer honestly.
              </p>
              <p>
                The five categories are: <strong>setup fees</strong> (one-time, paid at account opening), <strong>annual custodian fees</strong> (recurring, paid to the trust company that holds your IRA), <strong>storage fees</strong> (recurring, paid to the depository that vaults your metal), <strong>transaction fees</strong> (per-event, paid when you buy, sell, or move metal), and <strong>the dealer spread</strong> (embedded in the metal price, never itemized on your statement). The first four are explicit. The fifth is implicit — and it is typically the largest cost of all.
              </p>

              <h3>Why do most fee schedules feel incomplete?</h3>
              <p>
                Because they are. The fee schedule you receive from a Gold IRA company typically covers categories one through four — the explicit fees. It does not disclose the dealer spread because the spread is not technically a &ldquo;fee.&rdquo; It is the difference between the wholesale price of gold and the retail price you pay. This distinction is legally accurate and practically misleading. The spread functions exactly like a fee: it is a cost you bear, it reduces your returns, and it benefits the dealer. But because it is not labeled as a fee, it does not appear on fee schedules, comparison charts, or &ldquo;low fee&rdquo; marketing claims.
              </p>

              {/* SECTION 2 */}
              <h2 id="section-2">Setup fees and &ldquo;no setup fee&rdquo; claims</h2>
              <h3>What is a setup fee?</h3>
              <p>
                A setup fee is a one-time charge paid when your self-directed IRA is established with the custodian. It covers the administrative cost of opening the account, generating your IRS documentation, and establishing your depository allocation. Typical range: $50–$150. Some custodians charge $0 and recover the cost through higher annual fees or through revenue-sharing arrangements with the dealer who referred you.
              </p>

              <h3>What does &ldquo;no setup fee&rdquo; actually mean?</h3>
              <p>
                It means the dealer is absorbing the setup fee — or more precisely, the dealer has negotiated with the custodian to waive it in exchange for a referral relationship. The custodian still incurs the cost of opening your account. That cost is recovered somewhere. In most cases, it&rsquo;s recovered through a higher annual custodian fee, a revenue-sharing percentage on your storage fees, or simply through the dealer&rsquo;s spread on your first metal purchase. The setup fee has not been eliminated. It has been moved.
              </p>
              <p>
                This is not inherently dishonest — fee bundling is standard practice across financial services. But it becomes misleading when &ldquo;no setup fee&rdquo; is presented as a savings rather than a reallocation. The question to ask is not &ldquo;Do you charge a setup fee?&rdquo; but rather &ldquo;What is the total first-year cost of this account, including all fees and the spread on my initial metal purchase?&rdquo;
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/setup-fee-closeup.jpg`)}
                alt="Close-up of printed fee disclosure showing the Account Setup Fee line item with pencil mark"
                className="article-img"
              />

              {/* SECTION 3 */}
              <h2 id="section-3">Annual custodian fees</h2>
              <h3>What does the custodian fee pay for?</h3>
              <p>
                The annual custodian fee pays the trust company that holds your IRA for its ongoing administrative services: IRS reporting (Form 5498, Form 1099-R when you take distributions), quarterly or annual account statements, compliance oversight, and the legal structure that makes your gold holdings tax-advantaged. Without a qualified custodian, your gold is not in an IRA — it&rsquo;s just gold you own, with no tax deferral.
              </p>
              <p>
                Typical range: $75–$300 per year, depending on the custodian and account size. Some custodians charge a flat fee regardless of account value. Others charge a tiered or percentage-based fee that scales with your holdings. A flat fee favors larger accounts. A percentage-based fee favors smaller accounts initially but becomes expensive as your holdings grow.
              </p>

              <h3>What should you ask about custodian fees?</h3>
              <p>
                Ask whether the fee is flat or scaled. Ask whether it increases if your account value grows (because gold appreciates or because you add funds). Ask whether the custodian charges separately for distributions, transfers, or account closures — or whether those are included in the annual fee. Some custodians quote a low annual fee but charge $50–$150 per transaction for distributions, wire transfers, or account termination. The annual fee alone does not tell you the annual cost.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/custodian-statement.jpg`)}
                alt="Annual custodian account statement showing fees summary on walnut desk"
                className="article-img"
              />

              {/* SECTION 4 */}
              <h2 id="section-4">Storage fees: flat versus percentage-based</h2>
              <h3>What does the storage fee pay for?</h3>
              <p>
                The storage fee pays the depository — a bonded, insured vault facility — for the physical safekeeping of your gold. The depository provides segregated or commingled storage, insurance coverage, regular audits, and the security infrastructure that protects your metal. This is a real service with real costs: vault space, insurance premiums, armed security, and regulatory compliance.
              </p>
              <p>
                Storage fees come in two models. <strong>Flat-rate storage</strong> charges a fixed annual amount regardless of how much metal you hold — typically $100–$200 per year for accounts under $100,000. <strong>Percentage-based storage</strong> charges a fraction of your account value — typically 0.5% to 1.0% annually. On a $50,000 account, 0.5% is $250 per year. On a $200,000 account, it&rsquo;s $1,000 per year.
              </p>

              <h3>Which model is better?</h3>
              <p>
                Flat-rate storage favors larger accounts and longer hold periods. If you hold $200,000 in gold and pay $150/year in flat storage, your effective storage cost is 0.075% annually. Under a percentage model at 0.5%, you&rsquo;d pay $1,000/year — nearly seven times more for the same vault space and insurance coverage. The physical cost of storing ten ounces of gold versus fifty ounces is negligible to the depository. The percentage model captures value from account growth that has nothing to do with the depository&rsquo;s actual costs.
              </p>
              <p>
                For retirement-horizon investors who expect their gold to appreciate over 10–20 years, flat-rate storage is almost always more economical. The percentage model is more common because it generates more revenue for the depository and the dealers who have revenue-sharing arrangements with them.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/depository-vault.jpg`)}
                alt="Worker weighing gold bullion on precision scale in commercial depository with vault shelving"
                className="article-img"
              />

              {/* SECTION 5 */}
              <h2 id="section-5">Transaction, wire, and exit fees</h2>
              <h3>What are transaction fees?</h3>
              <p>
                Transaction fees are per-event charges applied when you buy metal, sell metal, transfer metal between depositories, take a distribution, or close your account. They are distinct from the dealer spread — the spread is embedded in the metal price, while transaction fees are explicit line items on your custodian statement.
              </p>
              <p>
                Common transaction fees include: <strong>wire transfer fees</strong> ($25–$50 per wire, charged when funds move between your bank and the custodian), <strong>trade confirmation fees</strong> ($25–$40 per buy or sell order), <strong>distribution fees</strong> ($50–$150 when you take metal or cash out of the IRA), and <strong>account termination fees</strong> ($75–$250 when you close the account entirely).
              </p>

              <h3>Why do exit fees matter?</h3>
              <p>
                Exit fees create friction that discourages you from leaving. A $250 account termination fee is not a large number in absolute terms — but combined with the sell-side spread, it adds to the total cost of exiting a Gold IRA. Some investors stay with underperforming or overcharging dealers because the perceived cost of switching (exit fees + sell spread + buy spread at the new dealer) feels prohibitive. This is by design. The exit fee is not primarily a cost-recovery mechanism for the custodian. It is a retention mechanism for the dealer.
              </p>

              {/* FEE TABLE */}
              <div className="cost-table-wrap">
                <table className="cost-table">
                  <thead>
                    <tr>
                      <th>Fee Category</th>
                      <th>Typical Range</th>
                      <th>What to Ask</th>
                      <th>Grace</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fee-name">Setup fee</td>
                      <td>$0–$150</td>
                      <td className="ask-col">Is the waived fee recovered elsewhere?</td>
                      <td>$0; not recovered via spread</td>
                    </tr>
                    <tr>
                      <td className="fee-name">Annual custodian fee</td>
                      <td>$75–$300/yr</td>
                      <td className="ask-col">Flat or scaled? Includes distributions?</td>
                      <td>Third-party, passed through at cost</td>
                    </tr>
                    <tr>
                      <td className="fee-name">Annual storage fee</td>
                      <td>$100–$300/yr or 0.5–1.0%</td>
                      <td className="ask-col">Flat or percentage? Segregated?</td>
                      <td>Third-party, flat-rate, segregated</td>
                    </tr>
                    <tr>
                      <td className="fee-name">Wire transfer fee</td>
                      <td>$25–$50/wire</td>
                      <td className="ask-col">How many wires per transaction?</td>
                      <td>Third-party, passed through at cost</td>
                    </tr>
                    <tr>
                      <td className="fee-name">Trade confirmation fee</td>
                      <td>$25–$40/trade</td>
                      <td className="ask-col">Charged on both buy and sell?</td>
                      <td>$0</td>
                    </tr>
                    <tr>
                      <td className="fee-name">Account termination fee</td>
                      <td>$75–$250</td>
                      <td className="ask-col">Is there a minimum hold period?</td>
                      <td>$0</td>
                    </tr>
                    <tr>
                      <td className="fee-name">Dealer spread (round-trip)</td>
                      <td>7%–40%+ undisclosed</td>
                      <td className="ask-col">What is the published all-in spread?</td>
                      <td>11.1% all-in, published</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* SECTION 6 */}
              <h2 id="section-6">How &ldquo;free fees&rdquo; promotions actually work</h2>
              <h3>What does &ldquo;free storage for the first year&rdquo; mean?</h3>
              <p>
                It means the dealer is paying the depository&rsquo;s storage fee for your first year — typically $100–$200 — as a customer acquisition cost. The dealer recovers this cost through the spread on your initial metal purchase. If the dealer&rsquo;s spread is 15% on a $50,000 purchase, the dealer earns $7,500 in margin. Absorbing a $150 storage fee from that margin is trivial. The promotion costs the dealer less than 2% of their profit on your transaction.
              </p>
              <p>
                The same logic applies to &ldquo;free setup,&rdquo; &ldquo;no annual fees for the first year,&rdquo; and &ldquo;we cover your transfer fees.&rdquo; Each of these promotions has a real cost — typically $100–$300 total — that is easily absorbed by a dealer earning thousands of dollars in spread on the initial purchase. The promotions are not savings. They are marketing costs funded by the spread you&rsquo;re already paying.
              </p>

              <h3>How do you evaluate a &ldquo;free fees&rdquo; offer honestly?</h3>
              <p>
                Ignore the promotions entirely. Calculate the total first-year cost including the spread. A dealer offering &ldquo;free setup, free storage, free first year&rdquo; with a 20% spread on a $50,000 purchase costs you $10,000 in spread alone. A dealer charging $150 setup + $175 custodian + $150 storage with a 5% spread costs you $2,500 + $475 = $2,975. The &ldquo;free fees&rdquo; dealer costs more than three times as much. The fees that were &ldquo;free&rdquo; were worth $475 combined. The spread difference was worth $7,500.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/fine-print-magnifying.jpg`)}
                alt="Magnifying glass revealing fine print about promotional periods and standard rates"
                className="article-img"
              />

              {/* PULLQUOTE */}
              <div className="pullquote-band">
                <p className="pullquote-verse">&ldquo;A false balance is an abomination to the Lord, but a just weight is his delight.&rdquo;</p>
                <span className="pullquote-citation">Proverbs 11:1</span>
              </div>

              {/* SECTION 7 */}
              <h2 id="section-7">What Grace charges</h2>
              <h3>What is Grace&rsquo;s fee position?</h3>
              <p>
                Grace Precious Metals charges no setup fee, no trade confirmation fee, and no account termination fee. The recurring custodian and depository fees are third-party costs — set by the custodian and the depository, not by Grace — and Grace passes them through at cost without revenue-sharing or markup. Storage is flat-rate and segregated.
              </p>
              <p>
                Grace&rsquo;s revenue comes from the dealer spread, which is published at <strong>11.1% all-in</strong>. That figure is the complete round-trip cost of a Grace transaction: it covers the buy-side margin and is bounded on the sell side by Grace&rsquo;s commitment to buy back at spot price, never below. The published spread is the standing price available to every client. It is not a promotional rate. It is the rate. It is published because a cost you can see is a cost you can evaluate. A cost you cannot see is a cost you cannot compare.
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBase(`${IMG_BASE}/grace-fee-sheet.jpg`)}
                alt="Clean fee summary sheet showing $0 setup, $0 admin, buyback at spot between advisor and client"
                className="article-img"
              />

              <h3>Why does Grace not charge setup or termination fees?</h3>
              <p>
                Because those fees function as acquisition and retention mechanisms — they make it expensive to start and expensive to leave. Grace&rsquo;s model depends on long-term client relationships, not on trapping clients through switching costs. If a client wants to leave, the absence of termination fees means the only cost of departure is the sell-side spread — which is bounded by the at-spot buyback commitment, predictable, and the same whether you leave after one year or twenty.
              </p>
              <p>
                The honest answer to &ldquo;what does Grace charge&rdquo; is: the published 11.1% all-in spread, the third-party custodian and depository fees at cost, and nothing else. The total is lower than most competitors not because Grace has found a way to eliminate costs, but because Grace has chosen a margin structure that prioritizes retention over extraction.
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
                If you have questions about Gold IRA fees, our salaried advisors will walk you through your specific situation. No commission, no pressure, no urgency.
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
                <Link href="/pricing/gold-ira-cost-analysis" className="related-card">
                  <span className="related-card-eyebrow">Pricing &amp; costs</span>
                  <p className="related-card-title">What Does a Gold IRA Cost? An Honest Cost Arithmetic</p>
                  <span className="related-card-meta">8 min read</span>
                </Link>
                <Link href="/pricing/understanding-dealer-spread" className="related-card">
                  <span className="related-card-eyebrow">Pricing &amp; costs</span>
                  <p className="related-card-title">Demystifying the Gold IRA Spread: Markups and Real Costs</p>
                  <span className="related-card-meta">8 min read</span>
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

        </div>{/* end gpm-article-page */}
      </main>
      <SiteFooter />
    </>
  )
}
