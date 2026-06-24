import { withBase } from '@/lib/basepath'

// /rollover — Gold IRA pillar hub ("How It Works")
//
// TSX port of /preview/rollover.html (production design template).
// Replaces the prior MDX stub. Page sits inside the (marketing) route
// group, so SiteHeader, <main> wrapper, and SiteFooter are inherited
// from app/(marketing)/layout.tsx.
//
// Layout: 12-col grid inside 1200 max-width rail.
//   - Hero 8/4: eyebrow + H1 + lede in 8 cols; metadata rail in 4 cols.
//   - Section 1 (What a Gold IRA is): prose 8 + definition callout 4,
//     then 3-up role cards across the full rail.
//   - Section 2 (How you fund it): prose 8 + funding-sources callout 4.
//   - Section 3 (What you can hold): prose 8 + numismatics callout 4,
//     then 4-up metals grid.
//   - Section 4 (Timeline): prose 8 + clock-control callout 4, then
//     4-up timeline with a hairline rule connecting the numbers.
//   - Closing CTAs.
//
// Page-local CSS is scoped under .gpm-rollover-page to avoid leaking
// to other pages. Local token aliases map the template's --cream /
// --walnut-deep / --gold-secondary names to the canonical gpm-* tokens
// from globals.css so the page renders against the same palette as the
// rest of the site.

export const metadata = {
  title: 'How It Works',
  description:
    'A Gold IRA lets you hold physical gold inside a retirement account that follows the same IRS rules as any other IRA. Same contribution limits, same tax treatment, same required minimum distributions.',
}

const PAGE_CSS = `
.gpm-rollover-page {
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
  font-family: var(--font-sans), Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
.gpm-rollover-page .wrap {
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
}
.gpm-rollover-page .grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  row-gap: 32px;
  align-items: start;
}
.gpm-rollover-page .col-3 { grid-column: span 3; }
.gpm-rollover-page .col-4 { grid-column: span 4; }
.gpm-rollover-page .col-8 { grid-column: span 8; }
.gpm-rollover-page .col-9 { grid-column: span 9; }
.gpm-rollover-page .col-12 { grid-column: 1 / -1; }

.gpm-rollover-page .page-hero { padding: 64px 0 0; }
.gpm-rollover-page .page-eyebrow {
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
.gpm-rollover-page .page-h1 {
  font-family: var(--font-serif);
  font-size: clamp(34px, 4.2vw, 46px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.12;
  margin-bottom: 24px;
  letter-spacing: -0.005em;
}
.gpm-rollover-page .page-lede {
  font-family: var(--font-sans);
  font-size: clamp(16px, 1.2vw, 17px);
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.65;
}

.gpm-rollover-page .hero-rail {
  border-left: 1px solid var(--border-gold);
  padding-left: 24px;
  padding-top: 6px;
}
.gpm-rollover-page .rail-eyebrow {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 14px;
  display: block;
}
.gpm-rollover-page .rail-meta {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  margin-bottom: 20px;
}
.gpm-rollover-page .rail-meta strong {
  color: var(--walnut-deep);
  font-weight: 500;
  display: block;
  margin-bottom: 2px;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.gpm-rollover-page .rail-anchors {
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  border-top: 1px solid var(--border-gold);
  padding-top: 16px;
  counter-reset: rail-anchor;
}
.gpm-rollover-page .rail-anchors li { margin-bottom: 8px; counter-increment: rail-anchor; }
.gpm-rollover-page .rail-anchors a {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--walnut-deep);
  text-decoration: none;
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
}
.gpm-rollover-page .rail-anchors a::before {
  content: counter(rail-anchor, decimal-leading-zero);
  font-family: var(--font-serif);
  font-size: 12px;
  color: var(--gold-secondary);
  font-weight: 500;
}
.gpm-rollover-page .rail-anchors a:hover { color: var(--gold-secondary); }

.gpm-rollover-page .page-banner { margin: 56px 0 0; }
.gpm-rollover-page .page-banner-img {
  width: 100%;
  aspect-ratio: 3 / 1;
  object-fit: cover;
  border-radius: 6px;
  background: var(--canvas-deep);
  display: block;
}

.gpm-rollover-page .body-section {
  padding: 64px 0;
  border-top: 1px solid var(--border-gold);
}
.gpm-rollover-page .body-section:first-of-type { margin-top: 56px; }
.gpm-rollover-page .section-h2 {
  font-family: var(--font-serif);
  font-size: clamp(26px, 2.6vw, 32px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.22;
  margin-bottom: 24px;
  letter-spacing: -0.003em;
}
.gpm-rollover-page .prose-group { display: flex; flex-direction: column; gap: 18px; }
.gpm-rollover-page .body-prose {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.7;
}
.gpm-rollover-page .body-prose a {
  color: var(--gold-secondary);
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 500;
}
.gpm-rollover-page .body-prose a:hover { color: var(--gold-hover); }

.gpm-rollover-page .callout {
  background: var(--canvas-deep);
  border-left: 4px solid var(--gold-deep);
  padding: 24px 22px;
  border-radius: 0 4px 4px 0;
}
.gpm-rollover-page .callout-eyebrow {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
}
.gpm-rollover-page .callout-title {
  font-family: var(--font-serif);
  font-size: 17px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.3;
  margin-bottom: 8px;
}
.gpm-rollover-page .callout-body {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
}

.gpm-rollover-page .def-callout {
  background: var(--canvas-deep);
  padding: 24px 22px;
  border-radius: 4px;
}
.gpm-rollover-page .def-callout dl { display: flex; flex-direction: column; gap: 14px; }
.gpm-rollover-page .def-callout dt {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  border-bottom: 1px dashed var(--border-gold-strong);
  padding-bottom: 4px;
  margin-bottom: 4px;
}
.gpm-rollover-page .def-callout dd {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.55;
}

.gpm-rollover-page .role-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 32px;
  list-style: none;
  padding: 0;
}
.gpm-rollover-page .role-card {
  background: var(--canvas-deep);
  border-radius: 6px;
  padding: 32px 26px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.gpm-rollover-page .role-card-number {
  width: 32px;
  height: 32px;
  border: 1.5px solid var(--gold-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 14px;
  font-weight: 500;
  color: var(--gold-secondary);
  margin-bottom: 18px;
}
.gpm-rollover-page .role-card-title {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 500;
  color: var(--walnut-deep);
  margin-bottom: 12px;
}
.gpm-rollover-page .role-card-body {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  flex-grow: 1;
}

.gpm-rollover-page .metals-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 36px;
  list-style: none;
  padding: 0;
}
.gpm-rollover-page .metal-card {
  background: var(--canvas-deep);
  border-radius: 6px;
  padding: 28px 22px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.gpm-rollover-page .metal-card-title {
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 500;
  color: var(--walnut-deep);
  margin-bottom: 6px;
}
.gpm-rollover-page .metal-card-purity {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.gpm-rollover-page .metal-card-body {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  flex-grow: 1;
}

.gpm-rollover-page .timeline-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-top: 36px;
  position: relative;
  list-style: none;
  padding: 0;
}
.gpm-rollover-page .timeline-grid::before {
  content: '';
  position: absolute;
  top: 22px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border-gold);
  z-index: 0;
}
.gpm-rollover-page .timeline-step {
  position: relative;
  z-index: 1;
  background: var(--cream);
  padding-right: 12px;
}
.gpm-rollover-page .timeline-number {
  font-family: var(--font-serif);
  font-size: 36px;
  font-weight: 500;
  color: var(--gold-secondary);
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  background: var(--cream);
  padding-right: 12px;
}
.gpm-rollover-page .timeline-title {
  font-family: var(--font-serif);
  font-size: 18px;
  font-weight: 500;
  color: var(--walnut-deep);
  margin-bottom: 10px;
  line-height: 1.3;
}
.gpm-rollover-page .timeline-body {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
}

.gpm-rollover-page .closing-band { padding: 56px 0 64px; }
.gpm-rollover-page .closing-ctas { display: flex; align-items: center; gap: 32px; flex-wrap: wrap; }
.gpm-rollover-page .cta-tier3 {
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
.gpm-rollover-page .cta-tier3:hover { background: var(--walnut-deep); color: var(--cream); }
.gpm-rollover-page .cta-tier4 {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--gold-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}
.gpm-rollover-page .cta-tier4:hover { color: var(--gold-hover); }

.gpm-rollover-page .disclaimer-band {
  background: var(--cream);
  padding: 40px 0;
  border-top: 1px solid var(--border-gold);
}
.gpm-rollover-page .disclaimer-text {
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 400;
  color: rgba(61, 40, 23, 0.78);
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .gpm-rollover-page .hero-rail { padding-left: 20px; }
  .gpm-rollover-page .role-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .gpm-rollover-page .metals-grid { grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .gpm-rollover-page .timeline-grid { grid-template-columns: repeat(4, 1fr); gap: 22px; }
}
@media (max-width: 768px) {
  .gpm-rollover-page .page-hero { padding: 40px 0 0; }
  .gpm-rollover-page .page-h1 { font-size: 28px; margin-bottom: 18px; }
  .gpm-rollover-page .page-lede { font-size: 16px; }
  .gpm-rollover-page .section-h2 { font-size: 24px; margin-bottom: 18px; }
  .gpm-rollover-page .grid-12 { column-gap: 0; row-gap: 20px; }
  .gpm-rollover-page .col-3,
  .gpm-rollover-page .col-4,
  .gpm-rollover-page .col-8,
  .gpm-rollover-page .col-9,
  .gpm-rollover-page .col-12 { grid-column: 1 / -1; }
  .gpm-rollover-page .hero-rail {
    border-left: none;
    border-top: 1px solid var(--border-gold);
    padding-left: 0;
    padding-top: 24px;
    margin-top: 8px;
  }
  .gpm-rollover-page .page-banner { margin: 36px 0 0; }
  .gpm-rollover-page .page-banner-img { aspect-ratio: 4 / 3; max-height: 280px; }
  .gpm-rollover-page .body-section { padding: 44px 0; }
  .gpm-rollover-page .body-section:first-of-type { margin-top: 36px; }
  .gpm-rollover-page .role-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 24px; }
  .gpm-rollover-page .metals-grid { grid-template-columns: 1fr; gap: 14px; margin-top: 28px; }
  .gpm-rollover-page .timeline-grid { grid-template-columns: 1fr; gap: 24px; margin-top: 28px; }
  .gpm-rollover-page .timeline-grid::before { display: none; }
  .gpm-rollover-page .timeline-number { font-size: 32px; margin-bottom: 10px; }
  .gpm-rollover-page .closing-ctas { flex-direction: column; align-items: stretch; gap: 16px; }
  .gpm-rollover-page .cta-tier3 { text-align: center; }
  .gpm-rollover-page .closing-band { padding: 40px 0 48px; }
}
`

export default function Page() {
  return (
    <div className="gpm-rollover-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* HERO 8/4 */}
      <section className="page-hero" aria-labelledby="page-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <span className="page-eyebrow">Gold IRA · How It Works</span>
              <h1 id="page-title" className="page-h1">How it works</h1>
              <p className="page-lede">
                A Gold IRA lets you hold physical gold inside a retirement account that follows the same IRS rules as any other IRA. Same contribution limits, same tax treatment, same required minimum distributions. The only thing that changes is what you own and where it sits.
              </p>
            </div>
            <aside className="col-4 hero-rail" aria-label="Page metadata">
              <span className="rail-eyebrow">On this page</span>
              <p className="rail-meta"><strong>Read time</strong>~ 6 minutes, end to end</p>
              <p className="rail-meta"><strong>Last reviewed</strong>April 2026 · counsel-cleared</p>
              <ul className="rail-anchors">
                <li><a href="#what-it-is">What a Gold IRA is</a></li>
                <li><a href="#how-funded">How you fund it</a></li>
                <li><a href="#what-you-hold">What you can hold</a></li>
                <li><a href="#timeline">Timeline</a></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <div className="page-banner">
        <div className="wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="page-banner-img"
            src={withBase('/preview/banner-rollover.jpg')}
            alt="Couple reviewing retirement paperwork together at a kitchen table"
          />
        </div>
      </div>

      {/* SECTION 1 — What a Gold IRA is */}
      <section className="body-section" id="what-it-is" aria-labelledby="s1-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <h2 id="s1-title" className="section-h2">What a Gold IRA is</h2>
              <div className="prose-group">
                <p className="body-prose">The structure was created by the Taxpayer Relief Act of 1997, which expanded Internal Revenue Code Section 408(m) to allow IRAs to hold specific forms of physical gold, silver, platinum, and palladium. Before that, IRAs could hold paper assets only.</p>
                <p className="body-prose">Tax treatment follows the same rules as any other IRA. Traditional Gold IRA contributions are pre-tax and taxed on distribution. Roth Gold IRA contributions are post-tax and not taxed on qualified distribution. Required minimum distributions begin at age 73.</p>
                <p className="body-prose">A Gold IRA has three roles, and they are separate.</p>
              </div>
            </div>
            <aside className="col-4">
              <div className="def-callout">
                <dl>
                  <dt>The statute</dt>
                  <dd>IRC §408(m), expanded by the Taxpayer Relief Act of 1997.</dd>
                  <dt>Same rules as any IRA</dt>
                  <dd>Contribution limits, tax treatment, RMDs at 73.</dd>
                  <dt>The only difference</dt>
                  <dd>What the account holds. Physical bullion instead of paper.</dd>
                </dl>
              </div>
            </aside>
          </div>

          <ul className="role-grid" role="list">
            <li className="role-card">
              <span className="role-card-number" aria-hidden="true">1</span>
              <h3 className="role-card-title">Custodian</h3>
              <p className="role-card-body">Administers your IRA. Independent of Grace. IRS-approved. You can call them directly to verify your account at any time.</p>
            </li>
            <li className="role-card">
              <span className="role-card-number" aria-hidden="true">2</span>
              <h3 className="role-card-title">Depository</h3>
              <p className="role-card-body">Holds your physical metal. Independent of Grace. IRS-approved. Insured and audited.</p>
            </li>
            <li className="role-card">
              <span className="role-card-number" aria-hidden="true">3</span>
              <h3 className="role-card-title">Dealer</h3>
              <p className="role-card-body">Supplies the metal and handles the paperwork that connects the three parties. This is where Grace sits.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 2 — How you fund it */}
      <section className="body-section" id="how-funded" aria-labelledby="s2-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <h2 id="s2-title" className="section-h2">How you fund it</h2>
              <div className="prose-group">
                <p className="body-prose">You fund a Gold IRA by transferring or rolling over money from an existing retirement account. The four common sources are a 401(k) from a current or former employer, a traditional IRA at a bank or brokerage, a Roth IRA, or a SEP IRA — common for self-employed people.</p>
                <p className="body-prose">The mechanics are the same in each case. The funds move directly from your existing account to your new IRA&rsquo;s custodian. You never receive the money. There is no tax event. There is no penalty.</p>
                <p className="body-prose">Two situations work slightly differently. An inherited IRA is subject to the SECURE Act&rsquo;s distribution rules. A transfer from another Gold IRA company can move metal in kind, rather than converting to cash and back.</p>
              </div>
            </div>
            <aside className="col-4">
              <div className="callout">
                <span className="callout-eyebrow">Funding sources</span>
                <h3 className="callout-title">Four common origins</h3>
                <p className="callout-body">
                  401(k) — current or former employer (often restricted while still employed).<br />
                  Traditional IRA — bank or brokerage.<br />
                  Roth IRA — post-tax contributions.<br />
                  SEP IRA — common for self-employed.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 3 — What you can hold */}
      <section className="body-section" id="what-you-hold" aria-labelledby="s3-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <h2 id="s3-title" className="section-h2">What you can hold</h2>
              <div className="prose-group">
                <p className="body-prose">The IRS sets eligibility rules under Section 408(m). Standard IRS-eligible bullion is what Grace sells.</p>
              </div>
            </div>
            <aside className="col-4">
              <div className="callout">
                <span className="callout-eyebrow">What we don&rsquo;t sell</span>
                <h3 className="callout-title">No numismatic, proof, or rare coins.</h3>
                <p className="callout-body">Most aren&rsquo;t IRA-eligible, and the practice of selling them aggressively to IRA customers has been the subject of federal regulatory investigation.</p>
              </div>
            </aside>
          </div>

          <ul className="metals-grid" role="list">
            <li className="metal-card">
              <h3 className="metal-card-title">Gold</h3>
              <p className="metal-card-purity">99.5% purity or higher</p>
              <p className="metal-card-body">American Eagle, Canadian Maple, Austrian Philharmonic, accredited bars.</p>
            </li>
            <li className="metal-card">
              <h3 className="metal-card-title">Silver</h3>
              <p className="metal-card-purity">99.9% purity or higher</p>
              <p className="metal-card-body">American Silver Eagle, Canadian Silver Maple, accredited bars.</p>
            </li>
            <li className="metal-card">
              <h3 className="metal-card-title">Platinum</h3>
              <p className="metal-card-purity">99.95% purity or higher</p>
              <p className="metal-card-body">American Platinum Eagle, accredited bars.</p>
            </li>
            <li className="metal-card">
              <h3 className="metal-card-title">Palladium</h3>
              <p className="metal-card-purity">99.95% purity or higher</p>
              <p className="metal-card-body">Canadian Palladium Maple, accredited bars.</p>
            </li>
          </ul>

          <div className="grid-12" style={{ marginTop: 32 }}>
            <p className="body-prose col-8">
              Grace&rsquo;s full case against numismatics is on the <a href="/pricing/numismatic-coins">numismatic coins page</a> — including the markup ranges and the federal cases that prompted the policy.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Timeline */}
      <section className="body-section" id="timeline" aria-labelledby="s4-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <h2 id="s4-title" className="section-h2">Timeline</h2>
              <div className="prose-group">
                <p className="body-prose">A typical Gold IRA setup takes between one and three weeks, end to end.</p>
              </div>
            </div>
            <aside className="col-4">
              <div className="callout">
                <span className="callout-eyebrow">What controls the clock</span>
                <h3 className="callout-title">Your existing custodian.</h3>
                <p className="callout-body">The time-limiting factor is almost always how quickly the prior custodian releases the funds. We have no control over that, and we say so when we set expectations.</p>
              </div>
            </aside>
          </div>

          <ol className="timeline-grid" role="list">
            <li className="timeline-step">
              <span className="timeline-number" aria-hidden="true">01</span>
              <h3 className="timeline-title">Open the IRA</h3>
              <p className="timeline-body">You sign the custodian&rsquo;s paperwork. Grace handles the process.</p>
            </li>
            <li className="timeline-step">
              <span className="timeline-number" aria-hidden="true">02</span>
              <h3 className="timeline-title">Initiate the transfer</h3>
              <p className="timeline-body">Funds move directly from your existing account to the new custodian. Grace handles the paperwork.</p>
            </li>
            <li className="timeline-step">
              <span className="timeline-number" aria-hidden="true">03</span>
              <h3 className="timeline-title">Choose your metals</h3>
              <p className="timeline-body">You and your Grace advisor agree which IRS-eligible bullion you want to buy.</p>
            </li>
            <li className="timeline-step">
              <span className="timeline-number" aria-hidden="true">04</span>
              <h3 className="timeline-title">Settlement and storage</h3>
              <p className="timeline-body">The custodian pays Grace. Grace ships the metal to the depository. The depository confirms receipt and your account is funded.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* CLOSING CTAs */}
      <div className="closing-band">
        <div className="wrap">
          <div className="closing-ctas">
            <a href="/pricing" className="cta-tier3">See our pricing</a>
            <a href="/advisor" className="cta-tier4">Talk to an expert →</a>
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <section className="disclaimer-band" aria-label="Legal disclaimer">
        <div className="wrap">
          <div className="grid-12">
            <p className="disclaimer-text col-9">
              <strong>Grace Precious Metals is a precious metals dealer.</strong> Gold IRAs require an IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a financial, tax, or legal advisor. Gold and precious metals investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. Consult qualified professionals before making investment decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
