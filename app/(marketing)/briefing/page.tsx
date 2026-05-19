import { withBase } from '@/lib/basepath'

// /briefing — "Get the Briefing" lead capture landing
//
// TSX port of the briefing.html boilerplate (production design).
// Replaces the prior MDX stub.
//
// Layout (desktop ≥1024px): 12-col grid inside 1200 max-width rail with
// a 7/5 asymmetric split:
//   - Left 7 cols (Copy Engine): eyebrow, italic H1, "What's inside"
//     label, and an 8-item briefing list with copper hairlines and
//     CSS-counter 01..08 markers.
//   - Right 5 cols (Lead Capture Console): rotated-burgundy PDF cover
//     skeuomorph + meta line + name/email/phone form + privacy line.
//
// Mobile (<768px): single column, stacked in chronological order —
// copy block → list → cover/form → disclosure → disclaimer.
//
// Form fields keep label/for explicitly linked for screen readers. The
// form is non-functional in this commit (no submit handler wired) —
// the Klaviyo integration via /api/briefing is a separate concern and
// requires server-runtime hosting; on the GitHub Pages static export
// the API route is stripped at build time anyway. Wiring follows.

export const metadata = {
  title: 'Get the Briefing',
  description:
    'The Secret Gold Briefing — what the other IRA companies hide from you. Pricing, the four pricing tactics commissioned salespeople use, what we sell and refuse, the rollover process, and the structural commitments Grace is built on.',
}

const PAGE_CSS = `
.gpm-briefing-page {
  --cream-canvas: #F2EDE0;
  --canvas-deep: #F0E9D6;
  --canvas-card: #EFE7D0;
  --walnut-deep: #3D2817;
  --walnut-mid: #5C4632;
  --gold-secondary: #9C7322;
  --gold-deep: #B8962E;
  --gold-hover: #9A7D26;
  --burgundy: #5C2528;
  background: var(--cream-canvas);
  color: var(--walnut-deep);
  font-family: var(--font-sans), Inter, sans-serif;
  font-size: 15px;
  line-height: 1.6;
}
.gpm-briefing-page .wrap {
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
}
.gpm-briefing-page .grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 32px;
  row-gap: 48px;
  align-items: start;
}
.gpm-briefing-page .col-5 { grid-column: span 5; }
.gpm-briefing-page .col-7 { grid-column: span 7; }
.gpm-briefing-page .col-12 { grid-column: 1 / -1; }

.gpm-briefing-page .briefing-main { padding: 80px 0; }

/* Left column — copy + list */
.gpm-briefing-page .briefing-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 16px;
}
.gpm-briefing-page .briefing-h1 {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(30px, 3.6vw, 40px);
  font-weight: 600;
  color: var(--walnut-deep);
  line-height: 1.2;
  margin-bottom: 40px;
  letter-spacing: -0.005em;
}
.gpm-briefing-page .whats-inside-label {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 16px;
}
.gpm-briefing-page .briefing-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 0.5px solid rgba(156, 115, 34, 0.35);
  counter-reset: briefing-counter;
}
.gpm-briefing-page .briefing-list li {
  display: flex;
  align-items: baseline;
  gap: 14px;
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.55;
  padding: 14px 0;
  border-bottom: 0.5px solid rgba(156, 115, 34, 0.35);
  counter-increment: briefing-counter;
}
.gpm-briefing-page .briefing-list li::before {
  content: counter(briefing-counter, decimal-leading-zero);
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--gold-secondary);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

/* Right column — cover + form */
.gpm-briefing-page .briefing-right {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gpm-briefing-page .pdf-cover-wrapper {
  margin-bottom: 16px;
  filter: drop-shadow(4px 6px 18px rgba(45, 38, 32, 0.28));
}
.gpm-briefing-page .pdf-cover {
  width: 300px;
  height: 400px;
  background: var(--burgundy);
  border-radius: 2px;
  transform: rotate(-1.5deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 24px 0;
  position: relative;
  overflow: hidden;
  box-shadow: inset -6px 0 12px -4px rgba(0, 0, 0, 0.25);
}
.gpm-briefing-page .pdf-cover::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
  background: linear-gradient(to left, rgba(0,0,0,0.18), transparent);
  pointer-events: none;
}
.gpm-briefing-page .cover-wordmark {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #F5EFE3;
  margin-bottom: 2px;
  align-self: flex-start;
}
.gpm-briefing-page .cover-tagline {
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 600;
  color: rgba(245, 239, 227, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.24em;
  margin-bottom: 28px;
  align-self: flex-start;
}
.gpm-briefing-page .cover-title {
  font-family: var(--font-serif);
  font-size: 26px;
  font-weight: 600;
  color: #F5EFE3;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 10px;
}
.gpm-briefing-page .cover-subtitle {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 13px;
  font-weight: 400;
  color: rgba(245, 239, 227, 0.72);
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.4;
}
.gpm-briefing-page .cover-photo {
  width: calc(100% + 48px);
  margin-left: -24px;
  height: 130px;
  object-fit: cover;
  margin-top: auto;
  display: block;
}
.gpm-briefing-page .cover-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(40, 12, 12, 0.75);
  padding: 10px 12px;
  text-align: center;
}
.gpm-briefing-page .cover-verse {
  display: block;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 9px;
  font-weight: 400;
  color: rgba(245, 239, 227, 0.65);
  letter-spacing: 0.03em;
  margin-bottom: 3px;
}
.gpm-briefing-page .cover-edition {
  display: block;
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 600;
  color: rgba(245, 239, 227, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.18em;
}
.gpm-briefing-page .pdf-meta {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 500;
  color: rgba(61, 40, 23, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 28px;
  text-align: center;
}

/* Form */
.gpm-briefing-page .briefing-form {
  width: 100%;
  max-width: 360px;
}
.gpm-briefing-page .briefing-form label {
  display: block;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--walnut-deep);
  margin-bottom: 5px;
}
.gpm-briefing-page .briefing-form input[type="text"],
.gpm-briefing-page .briefing-form input[type="email"],
.gpm-briefing-page .briefing-form input[type="tel"] {
  display: block;
  width: 100%;
  background: var(--canvas-card);
  border: 0.5px solid rgba(61, 40, 23, 0.18);
  border-radius: 3px;
  padding: 12px 14px;
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--walnut-deep);
  margin-bottom: 14px;
  outline: none;
  transition: border-color 0.2s ease;
}
.gpm-briefing-page .briefing-form input::placeholder { color: rgba(61, 40, 23, 0.45); }
.gpm-briefing-page .briefing-form input:focus { border-color: rgba(61, 40, 23, 0.50); }
.gpm-briefing-page .briefing-submit {
  display: block;
  width: 100%;
  background: var(--gold-deep);
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  padding: 14px 0;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.2s ease;
}
.gpm-briefing-page .briefing-submit:hover { background: var(--gold-hover); }
.gpm-briefing-page .briefing-submit:focus-visible {
  outline: 2px solid var(--gold-deep);
  outline-offset: 2px;
}
.gpm-briefing-page .privacy-line {
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.5;
  margin-top: 12px;
  text-align: center;
}

/* Disclosure band */
.gpm-briefing-page .disclosure-band {
  background: var(--canvas-deep);
  padding: 64px 0;
}
.gpm-briefing-page .disclosure-inner {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
.gpm-briefing-page .disclosure-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 16px;
}
.gpm-briefing-page .disclosure-body {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.7;
}

/* Disclaimer band */
.gpm-briefing-page .section-disclaimer {
  padding: 56px 0;
  background: var(--cream-canvas);
  text-align: left;
}
.gpm-briefing-page .disclaimer-text {
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 400;
  color: rgba(61, 40, 23, 0.75);
  line-height: 1.6;
  margin-bottom: 16px;
}
.gpm-briefing-page .disclaimer-text:last-of-type { margin-bottom: 0; }
.gpm-briefing-page .disclaimer-divider {
  width: 100%;
  height: 1px;
  background: rgba(184, 150, 46, 0.25);
  margin-top: 24px;
}

@media (max-width: 1024px) {
  .gpm-briefing-page .grid-12 { column-gap: 24px; row-gap: 40px; }
}
@media (max-width: 768px) {
  .gpm-briefing-page .briefing-main { padding: 48px 0; }
  .gpm-briefing-page .grid-12 { column-gap: 0; row-gap: 32px; }
  .gpm-briefing-page .col-5,
  .gpm-briefing-page .col-7,
  .gpm-briefing-page .col-12 { grid-column: 1 / -1; }
  .gpm-briefing-page .briefing-h1 { font-size: 30px; margin-bottom: 32px; }
  .gpm-briefing-page .briefing-list li { font-size: 16px; }
  .gpm-briefing-page .pdf-cover { width: 240px; height: 320px; padding: 24px 20px 0; }
  .gpm-briefing-page .cover-title { font-size: 20px; }
  .gpm-briefing-page .cover-subtitle { font-size: 11px; }
  .gpm-briefing-page .cover-photo { height: 100px; }
  .gpm-briefing-page .briefing-form { max-width: 100%; }
  .gpm-briefing-page .briefing-form input[type="text"],
  .gpm-briefing-page .briefing-form input[type="email"],
  .gpm-briefing-page .briefing-form input[type="tel"] {
    padding: 14px 14px;
    font-size: 16px;
    min-height: 44px;
  }
  .gpm-briefing-page .briefing-submit {
    padding: 16px 0;
    font-size: 16px;
    min-height: 44px;
  }
  .gpm-briefing-page .disclosure-band { padding: 48px 0; }
  .gpm-briefing-page .disclosure-body { font-size: 16px; }
}
`

const WHATS_INSIDE: string[] = [
  'Grace’s pricing in full — 11.1% spread, no admin fee, buyback at spot — with the math on a $100,000 rollover.',
  'How the industry hides its real margin — the four pricing tactics every commissioned salesperson uses.',
  'What Grace sells — standard bullion only. Why we refuse numismatic and "rare" coins, with the markup math (30–50%).',
  '“What buyback at spot” actually means — and how to verify any company’s policy.',
  'The rollover process, step by step — what you sign, what your custodian handles, what your timeline looks like.',
  'The IRS rules that matter — eligibility, contribution limits, distribution timing, and what changes for inherited accounts.',
  'What to ask before you sign — a one-page checklist of questions for any Gold IRA company, with what good and bad answers look like.',
  'Grace’s structural commitments — the four operational promises this company is built on, written in plain English.',
]

export default function Page() {
  return (
    <div className="gpm-briefing-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <main className="briefing-main">
        <div className="wrap">
          <div className="grid-12">
            {/* LEFT 7 — Copy Engine */}
            <div className="col-7">
              <span className="briefing-eyebrow">The Secret Gold Briefing</span>
              <h1 className="briefing-h1">
                What the Other IRA Companies<br />Hide From You.
              </h1>
              <span className="whats-inside-label">What&rsquo;s inside</span>
              <ol className="briefing-list">
                {WHATS_INSIDE.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </div>

            {/* RIGHT 5 — Lead Capture Console */}
            <div className="col-5 briefing-right">
              <div className="pdf-cover-wrapper" aria-hidden="true">
                <div className="pdf-cover">
                  <span className="cover-wordmark">Grace</span>
                  <span className="cover-tagline">Precious Metals</span>
                  <span className="cover-title">
                    The Secret<br />Gold Briefing
                  </span>
                  <span className="cover-subtitle">
                    What the Other IRA Companies Hide From You.
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="cover-photo"
                    src={withBase('/images/homepage/briefing-cover-photo.jpg')}
                    alt=""
                  />
                  <div className="cover-footer">
                    <span className="cover-verse">
                      Proverbs 11:1 · A just weight is His delight.
                    </span>
                    <span className="cover-edition">
                      Grace Precious Metals · First Edition · 2026
                    </span>
                  </div>
                </div>
              </div>

              <span className="pdf-meta">12 pages · PDF</span>

              <form
                className="briefing-form"
                action="#"
                method="post"
                aria-label="Get the Secret Gold Briefing"
              >
                <label htmlFor="briefing-name">Name</label>
                <input
                  type="text"
                  id="briefing-name"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
                <label htmlFor="briefing-email">Email</label>
                <input
                  type="email"
                  id="briefing-email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  required
                />
                <label htmlFor="briefing-phone">Phone</label>
                <input
                  type="tel"
                  id="briefing-phone"
                  name="phone"
                  placeholder="Your phone number"
                  autoComplete="tel"
                  required
                />
                <button type="submit" className="briefing-submit">
                  Send me the briefing
                </button>
              </form>
              <p className="privacy-line">
                We will email the briefing as a PDF. We do not sell or share your details.
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className="disclosure-band" aria-label="What happens next">
        <div className="wrap">
          <div className="disclosure-inner">
            <span className="disclosure-eyebrow">What happens next</span>
            <p className="disclosure-body">
              After you receive the briefing, a salaried Grace advisor will follow up within two business days to ask whether you have questions and whether you&rsquo;d like to talk further. The advisor is salaried, not commissioned. There is no cost to the call. You are not obligated to do anything as a result of it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-disclaimer" aria-label="Legal disclaimer">
        <div className="wrap">
          <p className="disclaimer-text">
            <strong>Grace Precious Metals is a precious metals dealer.</strong> Gold IRAs require an IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a financial, tax, or legal advisor. Gold and precious metals investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. Consult qualified professionals before making investment decisions. Pricing reflects CFO-reviewed published policy as of the date shown.
          </p>
          <p className="disclaimer-text">
            &ldquo;A typical Gold IRA costs about a third more&rdquo; compares Grace&rsquo;s round-trip cost (entry spread plus ongoing custodian and depository fees; buyback at spot, zero exit spread) against the midpoint of the category-typical round-trip cost range of 17%–33%, substantiated from published research on Gold IRA pricing and regulatory enforcement records. Substantiation files available on counsel request. No specific competitor is identified on this page.
          </p>
          <div className="disclaimer-divider" />
        </div>
      </section>
    </div>
  )
}
