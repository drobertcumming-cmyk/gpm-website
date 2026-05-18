import { withBase } from '@/lib/basepath'

// /faq — Gold IRA pillar sub-page ("Frequently Asked Questions")
//
// TSX port of /preview/faq.html (production design template).
// Replaces the prior MDX stub.
//
// Layout:
//   - Hero 8/4 with group jump-rail.
//   - Banner: 3:1 documentary photo.
//   - Four FAQ groups, each a 3/9 split:
//     • Left 3-col rail: position:sticky group number + eyebrow +
//       group title + one-line context blurb.
//     • Right 9-col content: Q&A items in a 52px + 1fr sub-grid so
//       the numeric identifier (01..12) locks vertically.
//   - Trust signals placeholder band.
//   - Closing CTAs + disclaimer.

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'The short version of the questions we get most often about a Gold IRA — what it is, how it works, what you can hold, how much it costs, and what happens later.',
}

const PAGE_CSS = `
.gpm-faq-page {
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
.gpm-faq-page .wrap { max-width: 1200px; width: 95%; margin: 0 auto; }
.gpm-faq-page .grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 32px;
  row-gap: 32px;
  align-items: start;
}
.gpm-faq-page .col-3 { grid-column: span 3; }
.gpm-faq-page .col-4 { grid-column: span 4; }
.gpm-faq-page .col-8 { grid-column: span 8; }
.gpm-faq-page .col-9 { grid-column: span 9; }

.gpm-faq-page .page-hero { padding: 64px 0 0; }
.gpm-faq-page .page-eyebrow {
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
.gpm-faq-page .page-h1 {
  font-family: var(--font-serif);
  font-size: clamp(34px, 4.2vw, 46px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.12;
  margin-bottom: 24px;
  letter-spacing: -0.005em;
}
.gpm-faq-page .page-lede {
  font-family: var(--font-sans);
  font-size: clamp(16px, 1.2vw, 17px);
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.65;
}

.gpm-faq-page .hero-rail {
  border-left: 1px solid var(--border-gold);
  padding-left: 24px;
  padding-top: 6px;
}
.gpm-faq-page .rail-eyebrow {
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 14px;
  display: block;
}
.gpm-faq-page .rail-meta {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  margin-bottom: 16px;
}
.gpm-faq-page .rail-meta strong {
  color: var(--walnut-deep);
  font-weight: 500;
  display: block;
  margin-bottom: 2px;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.gpm-faq-page .rail-anchors {
  list-style: none;
  padding: 16px 0 0;
  margin: 4px 0 0;
  border-top: 1px solid var(--border-gold);
  counter-reset: rail-anchor;
}
.gpm-faq-page .rail-anchors li { margin-bottom: 8px; counter-increment: rail-anchor; }
.gpm-faq-page .rail-anchors a {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--walnut-deep);
  text-decoration: none;
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
}
.gpm-faq-page .rail-anchors a::before {
  content: counter(rail-anchor, decimal-leading-zero);
  font-family: var(--font-serif);
  font-size: 12px;
  color: var(--gold-secondary);
  font-weight: 500;
}
.gpm-faq-page .rail-anchors a:hover { color: var(--gold-secondary); }

.gpm-faq-page .page-banner { margin: 56px 0 0; }
.gpm-faq-page .page-banner-img {
  width: 100%;
  aspect-ratio: 3 / 1;
  object-fit: cover;
  border-radius: 6px;
  background: var(--canvas-deep);
  display: block;
}

.gpm-faq-page .faq-group {
  padding: 56px 0;
  border-top: 1px solid var(--border-gold);
}
.gpm-faq-page .faq-group:first-of-type { margin-top: 48px; }
.gpm-faq-page .faq-rail {
  position: sticky;
  top: 24px;
  padding-right: 8px;
}
.gpm-faq-page .faq-rail-number {
  font-family: var(--font-serif);
  font-size: 14px;
  font-weight: 500;
  color: var(--gold-secondary);
  letter-spacing: 0.02em;
  margin-bottom: 10px;
  display: block;
}
.gpm-faq-page .faq-rail-eyebrow {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
}
.gpm-faq-page .faq-rail-title {
  font-family: var(--font-serif);
  font-size: clamp(22px, 2.2vw, 26px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.25;
  letter-spacing: -0.003em;
}
.gpm-faq-page .faq-rail-meta {
  margin-top: 18px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.55;
  border-top: 1px solid var(--border-gold);
  padding-top: 14px;
}

.gpm-faq-page .qa-list { list-style: none; padding: 0; display: flex; flex-direction: column; }
.gpm-faq-page .qa-item {
  display: grid;
  grid-template-columns: 52px 1fr;
  column-gap: 16px;
  padding: 26px 0;
  border-top: 1px solid var(--border-gold);
}
.gpm-faq-page .qa-item:first-child { border-top: none; padding-top: 0; }
.gpm-faq-page .qa-number {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 500;
  color: var(--gold-secondary);
  line-height: 1.5;
  padding-top: 2px;
  letter-spacing: 0.02em;
}
.gpm-faq-page .qa-content { min-width: 0; }
.gpm-faq-page .qa-question {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.35;
  margin-bottom: 14px;
  letter-spacing: -0.002em;
}
.gpm-faq-page .qa-answer {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.7;
}
.gpm-faq-page .qa-answer em { font-style: italic; color: var(--walnut-deep); }
.gpm-faq-page .qa-answer a {
  color: var(--gold-secondary);
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 500;
}
.gpm-faq-page .qa-answer a:hover { color: var(--gold-hover); }
.gpm-faq-page .qa-link {
  display: inline-block;
  margin-top: 14px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--gold-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}
.gpm-faq-page .qa-link:hover { color: var(--gold-hover); }
.gpm-faq-page .qa-link-row {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 0 16px;
}
.gpm-faq-page .qa-link-row .qa-link { margin-top: 0; }

.gpm-faq-page .trust-band {
  background: var(--canvas-deep);
  padding: 36px 0;
  margin-top: 56px;
  border-top: 1px solid var(--border-gold);
  border-bottom: 1px solid var(--border-gold);
}
.gpm-faq-page .trust-eyebrow {
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
}
.gpm-faq-page .trust-text {
  font-family: var(--font-serif);
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  color: var(--walnut-mid);
  line-height: 1.5;
}

.gpm-faq-page .closing-band { padding: 56px 0 64px; }
.gpm-faq-page .closing-ctas { display: flex; align-items: center; gap: 32px; flex-wrap: wrap; }
.gpm-faq-page .cta-tier3 {
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
.gpm-faq-page .cta-tier3:hover { background: var(--walnut-deep); color: var(--cream); }
.gpm-faq-page .cta-tier4 {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--gold-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}
.gpm-faq-page .cta-tier4:hover { color: var(--gold-hover); }

.gpm-faq-page .disclaimer-band {
  background: var(--cream);
  padding: 40px 0;
  border-top: 1px solid var(--border-gold);
}
.gpm-faq-page .disclaimer-text {
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 400;
  color: rgba(61, 40, 23, 0.78);
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .gpm-faq-page .grid-12 { column-gap: 24px; }
  .gpm-faq-page .faq-rail { padding-right: 0; }
}
@media (max-width: 768px) {
  .gpm-faq-page .page-hero { padding: 40px 0 0; }
  .gpm-faq-page .page-h1 { font-size: 28px; margin-bottom: 18px; }
  .gpm-faq-page .page-lede { font-size: 16px; }
  .gpm-faq-page .grid-12 { column-gap: 0; row-gap: 20px; }
  .gpm-faq-page .col-3,
  .gpm-faq-page .col-4,
  .gpm-faq-page .col-8,
  .gpm-faq-page .col-9 { grid-column: 1 / -1; }
  .gpm-faq-page .hero-rail {
    border-left: none;
    border-top: 1px solid var(--border-gold);
    padding-left: 0;
    padding-top: 24px;
    margin-top: 8px;
  }
  .gpm-faq-page .page-banner { margin: 36px 0 0; }
  .gpm-faq-page .page-banner-img { aspect-ratio: 4 / 3; max-height: 280px; }
  .gpm-faq-page .faq-group { padding: 40px 0; }
  .gpm-faq-page .faq-group:first-of-type { margin-top: 32px; }
  .gpm-faq-page .faq-rail {
    position: static;
    padding-right: 0;
    margin-bottom: 24px;
    padding-bottom: 18px;
    border-bottom: 1px solid var(--border-gold);
  }
  .gpm-faq-page .faq-rail-title { font-size: 22px; }
  .gpm-faq-page .qa-item { grid-template-columns: 36px 1fr; column-gap: 12px; padding: 22px 0; }
  .gpm-faq-page .qa-number { font-size: 14px; }
  .gpm-faq-page .qa-question { font-size: 18px; margin-bottom: 12px; }
  .gpm-faq-page .qa-answer { font-size: 16px; }
  .gpm-faq-page .trust-band { padding: 28px 0; margin-top: 40px; }
  .gpm-faq-page .closing-ctas { flex-direction: column; align-items: stretch; gap: 16px; }
  .gpm-faq-page .cta-tier3 { text-align: center; }
  .gpm-faq-page .closing-band { padding: 40px 0 48px; }
}
`

interface QA {
  num: string
  q: string
  a: React.ReactNode
  link?: { label: string; href: string }
  linkRow?: Array<{ label: string; href: string }>
}

interface FAQGroup {
  id: string
  number: string
  eyebrow: string
  title: string
  meta: string
  items: QA[]
}

const GROUPS: FAQGroup[] = [
  {
    id: 'g-account',
    number: 'Group 01',
    eyebrow: 'About the account',
    title: 'What it is and how it works',
    meta: 'Foundational questions on structure, eligibility, and rollover mechanics.',
    items: [
      {
        num: '01',
        q: 'What is a Gold IRA?',
        a: 'A Gold IRA is a self-directed individual retirement account that holds physical gold, silver, platinum, or palladium instead of, or alongside, traditional assets. It follows the same IRS rules as any other IRA — same contribution limits, same tax treatment, same required minimum distributions. The difference is what it holds.',
        link: { label: '→ How it works', href: '/rollover' },
      },
      {
        num: '02',
        q: 'Can I roll over my 401(k) into a Gold IRA?',
        a: 'Yes, in most cases. A 401(k) at your current employer is sometimes restricted while you are still employed; a 401(k) from a former employer, a traditional IRA, a Roth IRA, or a SEP IRA can be rolled into a Gold IRA without tax consequence, provided the rollover is done as a direct custodian-to-custodian transfer. We handle the paperwork.',
      },
      {
        num: '03',
        q: 'Will I pay a penalty or taxes on the rollover?',
        a: "No, not if it is done correctly. The funds move directly from your existing account to your new Gold IRA's custodian. You never receive the money. The IRS does not treat a direct rollover as a distribution. There is no tax event. There is no penalty.",
      },
    ],
  },
  {
    id: 'g-metal',
    number: 'Group 02',
    eyebrow: 'About the metal',
    title: 'What you can hold, where it goes',
    meta: 'Eligibility, custody, and who is allowed to touch the metal.',
    items: [
      {
        num: '04',
        q: 'What kinds of gold can I buy in a Gold IRA?',
        a: 'Standard IRS-eligible bullion. Gold must be 99.5% pure or higher; coins must be produced by a government mint or an accredited refiner. American Eagles, Canadian Maples, Austrian Philharmonics, accredited gold bars. We do not sell numismatic, proof, or rare coins — most are not IRA-eligible, and all carry markups that the buyer rarely sees.',
        link: { label: '→ Why we do not sell numismatics', href: '/pricing/numismatic-coins' },
      },
      {
        num: '05',
        q: 'Can I hold the gold at home?',
        a: 'No. The IRS requires gold held in an IRA to be stored at an approved depository, separate from your personal possession. "Home storage Gold IRA" advertisements are misleading — the structure they describe is not IRS-compliant, and has been the subject of court rulings against the people who set them up. Grace works only with IRS-approved depositories.',
      },
      {
        num: '06',
        q: 'Who holds my gold? Who holds my IRA?',
        a: (
          <>
            Two different parties, both independent of Grace. Your IRA is administered by{' '}
            <em>[IRA custodian — TBC]</em>, an IRS-approved IRA custodian. Your metal is held at{' '}
            <em>[depository — TBC]</em>, an IRS-approved depository. You can call either of them directly to verify your account or your holdings, at any time.
          </>
        ),
        link: { label: '→ How we operate', href: '/who-we-are/how-we-operate' },
      },
    ],
  },
  {
    id: 'g-money',
    number: 'Group 03',
    eyebrow: 'About the money',
    title: 'Costs, selling, distributions',
    meta: 'What it costs to enter, what it costs to exit, and what the tax treatment looks like.',
    items: [
      {
        num: '07',
        q: 'How much does it cost?',
        a: 'Our spread is 11.1%, all-in, on every transaction. There is no separate setup fee, no administrative fee charged by Grace, and no commission paid to your advisor. The custodian and depository charge their own fees for account administration and storage, paid directly to them, not marked up by Grace.',
        link: { label: '→ Pricing', href: '/pricing' },
      },
      {
        num: '08',
        q: 'What happens when I want to sell?',
        a: 'We buy back at the spot price of gold, with no markup and never below spot. The figure is published. There is no negotiated discount, no buyback spread, no minimum holding period. You sell when you want to. We pay you in cash, deposited back into your IRA or distributed to you, depending on what you tell the custodian.',
        link: { label: '→ Buyback at spot', href: '/pricing/buyback' },
      },
      {
        num: '09',
        q: 'What happens when I take a distribution?',
        a: 'A distribution from a Gold IRA works the same way as a distribution from any traditional IRA. You can take it in cash — we buy the gold back, the custodian sends you the proceeds — or in kind, where the depository ships the physical gold to you. In-kind distributions are taxed at the spot price on the day of distribution. Required minimum distributions begin at age 73.',
      },
    ],
  },
  {
    id: 'g-later',
    number: 'Group 04',
    eyebrow: 'About later',
    title: 'Inheritance, growth, trust',
    meta: 'What happens at end of life, additions, and how trust is earned over time.',
    items: [
      {
        num: '10',
        q: 'What happens to my Gold IRA when I die?',
        a: "It passes to your designated beneficiary, the same way any IRA does. The beneficiary can keep the IRA intact, subject to the SECURE Act's distribution rules for inherited IRAs, liquidate it, or take an in-kind distribution. We handle the transition with the custodian and your beneficiary.",
      },
      {
        num: '11',
        q: 'Can I add more gold to my Gold IRA later?',
        a: (
          <>
            Yes. You can make additional contributions up to the annual IRA contribution limit (<em>[current limit — TBC]</em>) or roll over additional funds from other retirement accounts at any time. There is no minimum re-purchase amount with Grace.
          </>
        ),
      },
      {
        num: '12',
        q: 'Why should I trust Grace?',
        a: "You shouldn't, until we have earned it. We publish our spread because we believe the published number is the only number that should exist between you and us. We buy back at spot because the round-trip cost is what tells you whether a Gold IRA is worth holding. We pay our advisors a salary because commissioned advisors stop being advisors at the moment their pay diverges from your interest. Read William's story, read our pricing, read how we operate, and decide for yourself.",
        linkRow: [
          { label: "→ William's story", href: '/who-we-are/williams-story' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'How we operate', href: '/who-we-are/how-we-operate' },
        ],
      },
    ],
  },
]

export default function Page() {
  return (
    <div className="gpm-faq-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <section className="page-hero" aria-labelledby="page-title">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-8">
              <span className="page-eyebrow">Gold IRA · FAQs</span>
              <h1 id="page-title" className="page-h1">Frequently asked questions</h1>
              <p className="page-lede">
                The short version of the questions we get most often. Every answer here has a longer treatment elsewhere on the site, linked where useful.
              </p>
            </div>
            <aside className="col-4 hero-rail" aria-label="Page metadata">
              <span className="rail-eyebrow">Jump to a group</span>
              <p className="rail-meta"><strong>Last reviewed</strong>April 2026 · counsel-cleared</p>
              <ul className="rail-anchors">
                <li><a href="#g-account">About the account</a></li>
                <li><a href="#g-metal">About the metal</a></li>
                <li><a href="#g-money">About the money</a></li>
                <li><a href="#g-later">About later</a></li>
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
            src={withBase('/preview/banner-faq.jpg')}
            alt="Woman writing notes at a home desk with warm natural light"
          />
        </div>
      </div>

      {GROUPS.map((g) => (
        <section key={g.id} className="faq-group" id={g.id} aria-labelledby={`${g.id}-title`}>
          <div className="wrap">
            <div className="grid-12">
              <aside className="col-3 faq-rail">
                <span className="faq-rail-number">{g.number}</span>
                <span className="faq-rail-eyebrow">{g.eyebrow}</span>
                <h2 id={`${g.id}-title`} className="faq-rail-title">{g.title}</h2>
                <p className="faq-rail-meta">{g.meta}</p>
              </aside>
              <div className="col-9">
                <ol className="qa-list">
                  {g.items.map((item) => (
                    <li key={item.num} className="qa-item">
                      <span className="qa-number" aria-hidden="true">{item.num}</span>
                      <div className="qa-content">
                        <h3 className="qa-question">{item.q}</h3>
                        <p className="qa-answer">{item.a}</p>
                        {item.link ? (
                          <a href={item.link.href} className="qa-link">{item.link.label}</a>
                        ) : null}
                        {item.linkRow ? (
                          <div className="qa-link-row">
                            {item.linkRow.map((l) => (
                              <a key={l.href} href={l.href} className="qa-link">{l.label}</a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      ))}

      <aside className="trust-band" aria-label="Trust signals placeholder">
        <div className="wrap">
          <div className="grid-12">
            <div className="col-9">
              <span className="trust-eyebrow">Trust signals</span>
              <p className="trust-text">Placeholder — not populated until BBB rating, review counts, and partner accreditation are earned.</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="closing-band">
        <div className="wrap">
          <div className="closing-ctas">
            <a href="/pricing" className="cta-tier3">See our pricing</a>
            <a href="/advisor" className="cta-tier4">Talk to an advisor →</a>
          </div>
        </div>
      </div>

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
