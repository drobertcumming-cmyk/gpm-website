import Link from 'next/link'
import { withBase } from '@/lib/basepath'

// /resources/401k-to-gold-ira-rollover
//
// Second long-form article in the Resources Library. TSX port of the
// article1.html boilerplate (production design template). Lands the
// Resources hub's "Rollover mechanics" section first article-tile link.
//
// Same architecture as the IRA-eligible-gold-coins article (a03d181):
// server component, scoped CSS via dangerouslySetInnerHTML, single
// reading column (max-width 880px), 7 sections with section images,
// account-type comparison table on canvas-deep, Proverbs 11:1
// pullquote, end-CTA + related-reading. Inherits SiteHeader and
// SiteFooter from app/(marketing)/layout.tsx.

export const metadata = {
  title: 'How to Roll a 401(k) Into Gold Without Tax Penalties',
  description:
    'A clear, step-by-step guide to rolling a 401(k) into a Gold IRA without triggering taxes or penalties. Trustee-to-trustee transfers, 60-day rules, and what Grace handles for you.',
}

const PAGE_CSS = `
.gpm-article-page {
  --cream-canvas: #F5F0E1;
  --canvas-deep: #F0E9D6;
  --walnut-deep: #3D2817;
  --walnut-mid: #5C4632;
  --gold-secondary: #9C7322;
  --gold-deep: #B8962E;
  --line-soft: rgba(61, 40, 23, 0.12);
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

/* ===== BREADCRUMB =====
   The breadcrumb-bar wraps full-width with its own border-bottom,
   and the inner .breadcrumb shares the same 1200px container as the
   rest of the page. */
.gpm-article-page .breadcrumb-bar {
  border-bottom: 0.5px solid var(--line-soft);
  padding: 14px 56px;
}
.gpm-article-page .breadcrumb {
  max-width: 1200px;
  margin: 0 auto;
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--walnut-mid);
  line-height: 1.4;
}
.gpm-article-page .breadcrumb a {
  color: var(--walnut-mid);
  text-decoration: none;
  transition: color 0.2s ease;
}
.gpm-article-page .breadcrumb a:hover { color: var(--gold-secondary); }
.gpm-article-page .breadcrumb .sep { margin: 0 8px; opacity: 0.5; }

/* ===== HERO ===== */
.gpm-article-page .article-hero {
  padding-top: 64px;
  padding-bottom: 48px;
}
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
  font-weight: 700;
  line-height: 1.12;
  color: var(--walnut-deep);
  margin-bottom: 28px;
  letter-spacing: -0.02em;
  max-width: 900px;
}
.gpm-article-page .article-lede {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 19px;
  font-style: italic;
  line-height: 1.6;
  color: var(--walnut-mid);
  border-left: 3px solid var(--gold-secondary);
  padding-left: 20px;
  max-width: 720px;
}
.gpm-article-page .hero-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
  border-radius: 4px;
  background: var(--canvas-deep);
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
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--gold-secondary);
  margin-bottom: 12px;
}
.gpm-article-page .toc-meta {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--walnut-mid);
  margin-bottom: 16px;
}
.gpm-article-page .toc-meta strong {
  color: var(--walnut-deep);
  font-weight: 600;
}
.gpm-article-page .toc-rule {
  border: none;
  border-top: 0.5px solid var(--line-soft);
  margin-bottom: 20px;
}
.gpm-article-page .toc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 40px;
}
.gpm-article-page .toc-grid a {
  display: flex;
  align-items: baseline;
  gap: 10px;
  text-decoration: none;
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  color: var(--walnut-deep);
  line-height: 1.5;
  transition: color 0.2s ease;
}
.gpm-article-page .toc-grid a:hover { color: var(--gold-secondary); }
.gpm-article-page .toc-num {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--gold-secondary);
  font-variant-numeric: tabular-nums;
  min-width: 20px;
}

/* ===== ARTICLE BODY ===== */
.gpm-article-page .article-body { padding-bottom: 56px; }
.gpm-article-page .article-body h2 {
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(26px, 3.6vw, 32px);
  font-weight: 600;
  color: var(--walnut-deep);
  margin-top: 56px;
  margin-bottom: 24px;
  line-height: 1.25;
  letter-spacing: -0.003em;
  scroll-margin-top: 80px;
}
.gpm-article-page .article-body h3 {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 22px;
  font-weight: 400;
  font-style: italic;
  color: var(--walnut-deep);
  margin-top: 36px;
  margin-bottom: 16px;
  line-height: 1.35;
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
  display: block;
  margin: 40px 0;
  border-radius: 4px;
  background: var(--canvas-deep);
}

/* ===== COMPARISON TABLE ===== */
.gpm-article-page .comparison-table-wrap {
  background: var(--canvas-deep);
  border-top: 0.5px solid var(--line-soft);
  border-bottom: 0.5px solid var(--line-soft);
  padding: 28px 0;
  margin: 40px 0;
  overflow-x: auto;
}
.gpm-article-page .comparison-table {
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
}
.gpm-article-page .comparison-table thead th {
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--gold-secondary);
  text-align: left;
  padding: 0 16px 14px;
  border-bottom: 0.5px solid var(--line-soft);
}
.gpm-article-page .comparison-table tbody tr {
  border-bottom: 0.5px solid var(--line-soft);
}
.gpm-article-page .comparison-table tbody tr:last-child { border-bottom: none; }
.gpm-article-page .comparison-table tbody td {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-deep);
  padding: 14px 16px;
  vertical-align: top;
}
.gpm-article-page .comparison-table tbody td.account-name {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  font-weight: 400;
}
.gpm-article-page .comparison-table tbody td.constraint {
  color: var(--walnut-mid);
  font-style: italic;
}

/* ===== PULLQUOTE ===== */
.gpm-article-page .pullquote-band {
  background: var(--canvas-deep);
  border-left: 3px solid var(--gold-secondary);
  padding: 32px 36px;
  margin: 48px 0;
}
.gpm-article-page .pullquote-band .verse {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 24px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.45;
  margin-bottom: 12px;
}
.gpm-article-page .pullquote-band .citation {
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

/* ===== END CTA ===== */
.gpm-article-page .end-cta {
  background: var(--canvas-deep);
  border-top: 0.5px solid var(--line-soft);
  border-bottom: 0.5px solid var(--line-soft);
  padding: 56px 32px;
  text-align: center;
  margin: 40px 0;
}
.gpm-article-page .cta-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--gold-secondary);
  margin-bottom: 14px;
}
.gpm-article-page .cta-headline {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 24px;
  font-weight: 600;
  color: var(--walnut-deep);
  line-height: 1.3;
  margin-bottom: 14px;
}
.gpm-article-page .cta-subhead {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  max-width: 520px;
  margin: 0 auto 28px;
}
.gpm-article-page .cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.gpm-article-page .cta-buttons .btn-outline {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--walnut-deep);
  background: transparent;
  border: 1.5px solid var(--walnut-deep);
  border-radius: 6px;
  padding: 12px 24px;
  text-decoration: none;
  transition: background 0.2s ease;
}
.gpm-article-page .cta-buttons .btn-outline:hover { background: rgba(61, 40, 23, 0.04); }
.gpm-article-page .cta-buttons .btn-gold {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  background: var(--gold-deep);
  border: 1.5px solid var(--gold-deep);
  border-radius: 6px;
  padding: 12px 24px;
  text-decoration: none;
  transition: background 0.2s ease;
}
.gpm-article-page .cta-buttons .btn-gold:hover { background: #A6820F; }

/* ===== RELATED READING ===== */
.gpm-article-page .related-reading { padding: 40px 0 32px; }
.gpm-article-page .related-reading .section-header {
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
.gpm-article-page .related-card .card-eyebrow {
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--gold-secondary);
  margin-bottom: 8px;
}
.gpm-article-page .related-card .card-title {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 17px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.35;
  margin-bottom: 8px;
}
.gpm-article-page .related-card .card-meta {
  font-family: var(--font-sans);
  font-style: italic;
  font-size: 12.5px;
  font-weight: 400;
  color: var(--walnut-mid);
}
.gpm-article-page .back-link {
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
.gpm-article-page .back-link:hover { color: var(--walnut-deep); }

/* ===== DISCLAIMER BAND ===== */
.gpm-article-page .disclaimer-band {
  background: var(--cream-canvas);
  padding: 48px 56px;
}
.gpm-article-page .disclaimer-band p {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 13px;
  font-weight: 400;
  color: rgba(61, 40, 23, 0.75);
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
}

/* ===== RESPONSIVE =====
   Below 1024px the 3/9 article-layout collapses to single column,
   TOC sidebar drops position:sticky and inflates back to the original
   wide canvas-deep TOC band styling for compactness. */
@media (max-width: 1024px) {
  .gpm-article-page .reading-column { padding: 0 32px; }
  .gpm-article-page .breadcrumb-bar { padding: 14px 32px; }
  .gpm-article-page .disclaimer-band { padding: 48px 32px; }
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
  .gpm-article-page .breadcrumb-bar { padding: 12px 24px; }
  .gpm-article-page .article-hero { padding-top: 40px; padding-bottom: 36px; }
  .gpm-article-page .article-h1 { font-size: 38px; }
  .gpm-article-page .article-lede { font-size: 17px; }
  .gpm-article-page .hero-image { height: 240px; }
  .gpm-article-page .toc-grid { grid-template-columns: 1fr; }
  .gpm-article-page .article-body { font-size: 16.5px; }
  .gpm-article-page .article-body h2 { font-size: 26px; margin-top: 40px; }
  .gpm-article-page .article-body h3 { font-size: 19px; }
  .gpm-article-page .article-body p { font-size: 16.5px; }
  .gpm-article-page .article-body .article-img { height: 240px; }
  .gpm-article-page .pullquote-band { padding: 24px 24px; }
  .gpm-article-page .pullquote-band .verse { font-size: 19px; }
  .gpm-article-page .cta-buttons { flex-direction: column; align-items: stretch; }
  .gpm-article-page .cta-buttons .btn-outline,
  .gpm-article-page .cta-buttons .btn-gold { text-align: center; }
  .gpm-article-page .related-grid { grid-template-columns: 1fr; }
  .gpm-article-page .disclaimer-band { padding: 24px; }
}
@media (max-width: 600px) {
  .gpm-article-page .comparison-table-wrap {
    margin-left: -24px;
    margin-right: -24px;
    padding: 28px 24px;
  }
}
`

const TOC = [
  { n: '01', id: 'section-1', label: 'What a Gold IRA rollover actually is' },
  { n: '02', id: 'section-2', label: 'Why 401(k)s have specific rules' },
  { n: '03', id: 'section-3', label: 'Trustee-to-trustee transfer vs. 60-day rollover' },
  { n: '04', id: 'section-4', label: 'Tax treatment and the one-rollover-per-year rule' },
  { n: '05', id: 'section-5', label: 'Timeline, documents, and what to expect' },
  { n: '06', id: 'section-6', label: 'Common pitfalls' },
  { n: '07', id: 'section-7', label: 'How Grace handles the process' },
]

const IMG_BASE = '/images/resources/401k-to-gold-ira-rollover'

export default function Page() {
  return (
    <div className="gpm-article-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* BREADCRUMB */}
      <div className="breadcrumb-bar">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/resources">Resources</Link>
          <span className="sep">›</span>
          <Link href="/resources#rollover-mechanics">Rollover mechanics</Link>
          <span className="sep">›</span>
          <span>How to Roll a 401(k) Into Gold Without Tax Penalties</span>
        </nav>
      </div>

      {/* HERO */}
      <div className="reading-column">
        <div className="article-hero">
          <span className="article-eyebrow">Rollover mechanics</span>
          <h1 className="article-h1">How to Roll a 401(k) Into Gold Without Tax Penalties</h1>
          <p className="article-lede">
            The IRS permits direct rollovers from employer-sponsored plans into self-directed precious-metals IRAs — but the mechanics are precise, the deadlines are absolute, and the consequences of a misstep are irreversible. This is the complete procedural reality.
          </p>
        </div>
      </div>

      {/* HERO IMAGE — moved above the article-layout grid so it
          spans the full 1200px container as a full-bleed editorial
          anchor before the asymmetric reading layout begins. */}
      <div className="reading-column">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase(`${IMG_BASE}/hero-couple-retirement.jpg`)}
          alt="Couple reviewing retirement paperwork at a kitchen table"
          className="hero-image"
        />
      </div>

      {/* ARTICLE LAYOUT: 3/9 grid with sticky TOC sidebar + 9-col main */}
      <div className="reading-column">
        <div className="article-layout">
          <aside className="article-sidebar" aria-label="On this page">
            <div className="inline-toc">
              <div className="toc-eyebrow">On this page</div>
              <div className="toc-meta">
                <strong>Read time:</strong> 10 min read
              </div>
              <hr className="toc-rule" />
              <div className="toc-grid">
                {TOC.map((item) => (
                  <a key={item.id} href={`#${item.id}`}>
                    <span className="toc-num">{item.n}</span> {item.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="article-main">
            <div className="article-body">

          {/* SECTION 1 */}
          <h2 id="section-1">What a Gold IRA rollover actually is</h2>
          <h3>What happens when you &ldquo;roll over&rdquo; a 401(k)?</h3>
          <p>
            A Gold IRA rollover is the movement of funds from an employer-sponsored retirement plan — a 401(k), 403(b), or TSP — into a self-directed Individual Retirement Account that holds physical precious metals. The assets never pass through your hands in a properly executed direct rollover. They move from one custodian to another, and the IRS treats the event as a non-taxable transfer rather than a distribution.
          </p>
          <p>
            Three parties are involved in every Gold IRA: the <strong>dealer</strong> (who sources the metal), the <strong>custodian</strong> (a trust company or bank that holds the IRA and reports to the IRS), and the <strong>depository</strong> (an insured vault that stores the physical gold). The custodian is the legal owner of the account; the depository is the physical steward of the metal. You direct both, but you do not take possession.
          </p>
          <h3>Why does this structure exist?</h3>
          <p>
            The IRS requires that IRA-held assets remain in the custody of a qualified trustee at all times. Physical gold cannot sit in a home safe and retain its tax-advantaged status. The three-party structure exists to satisfy IRC §408(m) — the code section that permits precious metals in an IRA only when held by an approved, non-bank trustee or a bank itself.
          </p>
          <p>
            Understanding this structure matters because it determines who initiates the rollover paperwork, who receives the funds, and who ultimately takes delivery of the metal on your behalf. Every step has a named responsible party.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/401k-statement-paperwork.jpg`)}
            alt="Close-up of 401k account statement on a wooden table"
            className="article-img"
          />

          {/* SECTION 2 */}
          <h2 id="section-2">Why 401(k)s have specific rules</h2>
          <h3>What makes a 401(k) different from a traditional IRA?</h3>
          <p>
            A 401(k) is an employer-sponsored plan governed by ERISA (the Employee Retirement Income Security Act of 1974). ERISA imposes fiduciary duties on plan administrators and restricts when and how participants can access their funds. A traditional IRA, by contrast, is individually owned and subject only to IRS rules — no employer gatekeeper stands between you and your custodian.
          </p>
          <p>
            This distinction matters for rollovers because most 401(k) plans will not release funds while you are still employed by the sponsoring company. The technical term is an &ldquo;in-service distribution,&rdquo; and many plans prohibit it entirely or restrict it to participants over age 59½. If you are still working for the employer that sponsors the 401(k), you may not be eligible to roll over until you separate from service.
          </p>
          <h3>When does a 401(k) become eligible for rollover?</h3>
          <p>
            The most common trigger is separation from service — retirement, resignation, or layoff. Once you are no longer employed by the plan sponsor, the 401(k) becomes fully portable. You can roll it into a traditional IRA, a Roth IRA (with tax consequences), or a self-directed IRA that holds physical gold. Some plans also permit rollovers at age 59½ regardless of employment status, and hardship distributions (which are not rollovers) have their own rules entirely.
          </p>

          {/* ACCOUNT-TYPE COMPARISON TABLE */}
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Account type</th>
                  <th>Rollover mechanism</th>
                  <th>Annual rollover limit</th>
                  <th>Salient constraint</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="account-name">Traditional 401(k)</td>
                  <td>Trustee-to-trustee or 60-day</td>
                  <td>No dollar limit</td>
                  <td className="constraint">Requires separation from service (most plans)</td>
                </tr>
                <tr>
                  <td className="account-name">Roth 401(k)</td>
                  <td>Trustee-to-trustee or 60-day</td>
                  <td>No dollar limit</td>
                  <td className="constraint">Must roll into Roth IRA to preserve tax-free status</td>
                </tr>
                <tr>
                  <td className="account-name">Traditional IRA</td>
                  <td>Trustee-to-trustee or 60-day</td>
                  <td>One 60-day rollover per 12 months</td>
                  <td className="constraint">60-day rule applies per person, not per account</td>
                </tr>
                <tr>
                  <td className="account-name">403(b)</td>
                  <td>Trustee-to-trustee or 60-day</td>
                  <td>No dollar limit</td>
                  <td className="constraint">Employer must permit distribution; same separation rules</td>
                </tr>
                <tr>
                  <td className="account-name">TSP (Federal)</td>
                  <td>Trustee-to-trustee only</td>
                  <td>No dollar limit</td>
                  <td className="constraint">Partial transfers permitted; full transfer closes TSP account</td>
                </tr>
                <tr>
                  <td className="account-name">SEP IRA</td>
                  <td>Trustee-to-trustee or 60-day</td>
                  <td>One 60-day rollover per 12 months</td>
                  <td className="constraint">Treated as traditional IRA for rollover purposes</td>
                </tr>
                <tr>
                  <td className="account-name">SIMPLE IRA</td>
                  <td>Trustee-to-trustee or 60-day</td>
                  <td>One 60-day rollover per 12 months</td>
                  <td className="constraint">Must wait 2 years from first contribution before rolling out</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SECTION 3 */}
          <h2 id="section-3">Trustee-to-trustee transfer vs. 60-day rollover</h2>
          <h3>What is a trustee-to-trustee transfer?</h3>
          <p>
            A trustee-to-trustee transfer (also called a &ldquo;direct rollover&rdquo;) moves funds directly from your 401(k) plan administrator to your new IRA custodian. You never touch the money. No check is made payable to you. The sending institution wires or mails a check payable to the receiving custodian &ldquo;for the benefit of&rdquo; (FBO) you. Because you never have constructive receipt of the funds, there is no withholding, no tax event, and no time limit.
          </p>
          <p>
            This is the method Grace recommends for every rollover. It eliminates the two most common failure modes: missing the 60-day deadline and triggering mandatory 20% withholding.
          </p>
          <h3>What is a 60-day rollover?</h3>
          <p>
            In a 60-day rollover (also called an &ldquo;indirect rollover&rdquo;), the plan administrator distributes the funds to you personally. You receive a check in your name. You then have exactly 60 calendar days to deposit the full amount into a qualifying IRA. If you miss the deadline by even one day, the entire distribution is treated as taxable income — and if you are under 59½, you owe an additional 10% early-withdrawal penalty.
          </p>
          <p>
            There is a further complication: when a 401(k) plan distributes funds directly to you, it is required by law to withhold 20% for federal taxes. So if your 401(k) balance is $100,000, you receive a check for $80,000. To complete the rollover without a taxable event, you must deposit the full $100,000 into your IRA within 60 days — meaning you must come up with the $20,000 difference out of pocket. You recover the withheld amount when you file your tax return, but the cash-flow burden is immediate.
          </p>
          <h3>Which method should you choose?</h3>
          <p>
            The trustee-to-trustee transfer is superior in virtually every scenario. It removes the withholding problem, eliminates the deadline risk, and does not count toward the one-rollover-per-year limit (which applies only to 60-day rollovers between IRAs). The only reason to use a 60-day rollover is if your plan administrator refuses to process a direct transfer — which is rare but not unheard of with older, smaller plans.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/signing-transfer-form.jpg`)}
            alt="Hand signing a transfer authorization document"
            className="article-img"
          />

          {/* SECTION 4 */}
          <h2 id="section-4">Tax treatment and the one-rollover-per-year rule</h2>
          <h3>Is a Gold IRA rollover taxable?</h3>
          <p>
            A properly executed direct rollover from a traditional 401(k) to a traditional self-directed IRA is not a taxable event. The IRS views it as a transfer between qualified accounts — the tax-deferred status of the funds is preserved. You owe nothing at the time of the rollover. Taxes are due only when you take distributions in retirement, at your ordinary income rate at that time.
          </p>
          <p>
            If you roll from a traditional 401(k) into a Roth IRA, the conversion is taxable. The entire rolled amount is added to your gross income for the year. This can be a legitimate strategy for some taxpayers, but it requires careful planning with a tax professional — particularly for large balances that could push you into a higher bracket.
          </p>
          <h3>What is the one-rollover-per-year rule?</h3>
          <p>
            The IRS permits only one 60-day rollover between IRAs in any 12-month period. This is a per-person limit, not a per-account limit. If you have three IRAs and execute a 60-day rollover from one to another, you cannot execute another 60-day rollover from any IRA to any other IRA for 12 months. Violating this rule results in the second rollover being treated as a taxable distribution — plus a 6% excess-contribution penalty if the funds remain in the receiving IRA.
          </p>
          <p>
            Critically, trustee-to-trustee transfers do not count toward this limit. This is another reason to prefer the direct method: it preserves your ability to make other IRA-to-IRA moves within the same year if needed.
          </p>
          <h3>What forms will the IRS see?</h3>
          <p>
            Your former plan administrator will issue a 1099-R reporting the distribution. If the rollover was direct, Box 7 will show code &ldquo;G&rdquo; (direct rollover to a qualified plan or IRA). If it was a 60-day rollover, the code will be &ldquo;1&rdquo; (early distribution) or &ldquo;7&rdquo; (normal distribution), and you must report the rollover on your Form 1040 to avoid being taxed on it. Your new custodian will issue a Form 5498 confirming receipt of the rollover contribution.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/tax-document-1099r.jpg`)}
            alt="IRS Form 1099-R and Publication 590-B on a desk"
            className="article-img"
          />

          {/* SECTION 5 */}
          <h2 id="section-5">Timeline, documents, and what to expect</h2>
          <h3>How long does a Gold IRA rollover take?</h3>
          <p>
            From initiation to metal in the vault, a typical rollover takes 10 to 21 business days. The timeline breaks into three phases: (1) paperwork and plan-administrator processing (3–7 business days), (2) fund transfer and custodian receipt (3–5 business days), and (3) metal purchase and depository delivery (2–5 business days). Some 401(k) administrators are slower than others — particularly large corporate plans that route through third-party recordkeepers.
          </p>
          <h3>What documents will you need?</h3>
          <p>
            The typical document set includes: a rollover request form from your new IRA custodian, a distribution request form from your existing plan administrator, a copy of your most recent 401(k) statement (to verify the balance and confirm the account number), and a government-issued photo ID. Some plan administrators require a medallion signature guarantee or a notarized letter of instruction. Your custodian will tell you exactly what is needed before you begin.
          </p>
          <h3>What should you expect during the waiting period?</h3>
          <p>
            Once paperwork is submitted, the most common experience is silence. Plan administrators process distributions in batch cycles — daily, weekly, or bi-weekly depending on the provider. You will not receive real-time updates from the sending institution. A good custodian will track the incoming transfer on your behalf and notify you when funds arrive. At Grace, your assigned advisor monitors the transfer and provides status updates at each stage without you having to call and ask.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/calendar-timeline-folders.jpg`)}
            alt="Calendar with dates marked and organized financial folders"
            className="article-img"
          />

          {/* SECTION 6 */}
          <h2 id="section-6">Common pitfalls</h2>
          <h3>What mistakes do people actually make?</h3>
          <p>
            The most consequential pitfall is choosing a 60-day rollover without understanding the withholding trap. You receive 80% of your balance, need to deposit 100%, and have exactly 60 days to close the gap. Life intervenes — a medical bill, a car repair, a family emergency — and the deadline passes. The entire amount becomes taxable income, plus a 10% penalty if you are under 59½. This is not a theoretical risk; it is the single most common rollover failure the IRS sees.
          </p>
          <h3>What about &ldquo;home storage&rdquo; Gold IRAs?</h3>
          <p>
            A persistent myth in the gold IRA industry claims you can store IRA-held gold in a home safe by creating an LLC owned by your IRA. The IRS has challenged this arrangement repeatedly, and the Tax Court ruled against it in <em>McNulty v. Commissioner</em> (2021). The penalties for non-compliance include disqualification of the entire IRA — meaning the full balance is treated as a distribution in the year of the violation. The tax bill on a $200,000 IRA disqualification for a taxpayer in the 24% bracket: $48,000 in income tax plus a potential $20,000 early-withdrawal penalty.
          </p>
          <h3>What about dealers who pressure you to act immediately?</h3>
          <p>
            Any dealer who tells you the rollover must happen &ldquo;today&rdquo; or &ldquo;this week&rdquo; is manufacturing urgency that does not exist. Rollovers are administrative processes with defined timelines. There is no market-timing advantage to rushing, and the cost of an error far exceeds any hypothetical gain from acting one week sooner. A trustworthy advisor will walk you through the process at your pace, answer every question before you sign anything, and never condition their guidance on a purchase commitment.
          </p>

          {/* PULLQUOTE — Proverbs 11:1 */}
          <div className="pullquote-band">
            <p className="verse">
              &ldquo;A false balance is an abomination to the Lord, but a just weight is His delight.&rdquo;
            </p>
            <p className="citation">Proverbs 11:1</p>
          </div>

          {/* SECTION 7 */}
          <h2 id="section-7">How Grace handles the process</h2>
          <h3>What does the rollover process look like at Grace?</h3>
          <p>
            Grace assigns a salaried advisor to your account from the first conversation. That advisor is not paid on commission. Their compensation does not change whether you roll over $50,000 or $500,000 — or whether you roll over at all. This removes the incentive structure that produces the high-pressure tactics described above.
          </p>
          <p>
            Your advisor handles the paperwork coordination between your existing plan administrator and your new self-directed IRA custodian. They prepare the rollover request, confirm the receiving account details, and track the transfer through each stage. You sign the forms; they manage the logistics.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/advisor-at-desk.jpg`)}
            alt="Financial advisor at a desk reviewing documents during a phone call"
            className="article-img"
          />

          <h3>What happens after the funds arrive?</h3>
          <p>
            Once your custodian confirms receipt of the rollover funds, your advisor presents the eligible metal options at current market pricing. Grace publishes its spread (the difference between what you pay and the metal&rsquo;s melt value) on every transaction — there is no hidden markup discovered after the fact. You approve the purchase, the custodian directs the funds to Grace, and Grace ships the metal directly to the depository. The depository confirms receipt, and your custodian updates your account holdings.
          </p>
          <h3>What if you have questions after the rollover is complete?</h3>
          <p>
            Your advisor remains assigned to your account permanently. Annual reviews, rebalancing conversations, distribution planning as you approach retirement — these are part of the ongoing relationship, not upsell opportunities. Grace&rsquo;s model is built on the assumption that a client served honestly at the beginning will remain a client for decades. The economics work because retention replaces acquisition cost, not because each transaction extracts maximum margin.
          </p>
            </div>{/* end article-body */}
          </div>{/* end article-main */}
        </div>{/* end article-layout */}
      </div>

      {/* END-OF-ARTICLE BLOCK */}
      <div className="reading-column">
        <p className="article-disclaimer">
          This article is educational and does not constitute tax, legal, or investment advice. Consult a qualified professional regarding your specific situation.
        </p>

        {/* END CTA */}
        <div className="end-cta">
          <div className="cta-eyebrow">When you&rsquo;re ready</div>
          <h2 className="cta-headline">A conversation, on your own timeline.</h2>
          <p className="cta-subhead">
            If you have questions about rolling over your 401(k), our salaried advisors will walk you through your specific situation. No commission, no pressure, no urgency.
          </p>
          <div className="cta-buttons">
            <Link href="/briefing" className="btn-outline">Get the briefing</Link>
            <Link href="/advisor" className="btn-gold">Talk to an advisor</Link>
          </div>
        </div>

        {/* RELATED READING */}
        <div className="related-reading">
          <p className="section-header">Two more reads from the Resources library.</p>
          <div className="related-grid">
            <Link href="/resources/gold-ira-cost-analysis" className="related-card">
              <div className="card-eyebrow">Pricing &amp; costs</div>
              <div className="card-title">What Does a Gold IRA Cost? An Honest Cost Arithmetic</div>
              <div className="card-meta">8 min read</div>
            </Link>
            <Link href="/resources/ira-eligible-gold-coins" className="related-card">
              <div className="card-eyebrow">What you can hold</div>
              <div className="card-title">IRA-Eligible Gold Coins: The Strict Regulatory Reality</div>
              <div className="card-meta">10 min read</div>
            </Link>
          </div>
          <Link href="/resources" className="back-link">Back to Resources</Link>
        </div>
      </div>

      {/* DISCLAIMER BAND */}
      <section className="disclaimer-band" aria-label="Legal disclaimer">
        <p>
          <strong>Grace Precious Metals is a precious metals dealer.</strong> Gold IRAs require an IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a financial, tax, or legal advisor. Gold and precious metals investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. Consult qualified professionals before making investment decisions.
        </p>
      </section>
    </div>
  )
}
