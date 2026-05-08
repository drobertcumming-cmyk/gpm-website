import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/nav'
import { CTAButton, LinkArrow } from '@/components/cta'
import {
  SectionDivider,
  PreFooterDisclaimer,
  preFooterDisclaimerParagraphStyle,
} from '@/components/content'
import {
  BuybackBreadcrumb,
  WorkedExampleComparison,
  StructuralFactorsGrid,
  CommitPanel,
  EvaluationChecklist,
  RelatedPagesBand,
} from '@/components/pricing/buyback'

// /pricing/buyback page composition.
// Editorial deck-style page with prose sections separated by 70%-width
// gold hairline rules (SectionDivider). Mirrors the page-shell pattern
// used at /pricing — manual SiteHeader + SiteFooter (page sits outside
// the (marketing) route group).
//
// Reference: buyback.html template + locked CC instruction
// "Refactor the existing site structure to include the new
// /pricing/buyback sub-page".

export const metadata = {
  title: 'Buyback at Spot',
  description:
    'How buyback works — and why the exit number matters more than the entry number. Grace buys back IRS-eligible bullion at the prevailing spot price; no exit markdown, no liquidation fee.',
}

export default function BuybackPage() {
  return (
    <>
      <a href="#main" className="gpm-skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <BuybackBreadcrumb />

        {/* HERO — editorial deck (no photograph) */}
        <section className="w-full" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <div
            className="mx-auto"
            style={{ maxWidth: 720, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>BUYBACK MECHANICS</span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 3.6vw, 48px)',
                fontWeight: 500,
                color: 'var(--gpm-ink-display)',
                lineHeight: 1.2,
                margin: 0,
                marginBottom: 28,
              }}
            >
              How buyback works &mdash; and why the exit number matters more than the
              entry number.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 400,
                color: 'var(--gpm-ink-body)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Most Gold IRA customers focus, at the point of purchase, on the entry
              price. The exit price &mdash; what you receive when you sell back &mdash;
              is typically not part of the buying decision at all. It is also, for most
              customers, the more financially consequential of the two.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* INTRO FRAMING */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>THE TWO NUMBERS</span>
            <h2 style={sectionHeadlineStyle}>
              Entry is the number you see. Exit is the number you don&rsquo;t.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                When you purchase gold inside a self-directed IRA, the entry price is
                the number on the confirmation. It is the spot price of the metal plus
                the dealer&rsquo;s markup &mdash; and because it appears on a document,
                it feels concrete. You paid a price; you received an asset. The
                transaction is legible.
              </p>
              <p style={proseStyle}>
                The exit price is different. It exists only in the future, at a moment
                you have not yet chosen, under conditions you cannot yet see. Most
                customers do not ask about it at the point of purchase &mdash; and most
                dealers do not volunteer it. The result is that the exit price is, for
                the majority of Gold IRA holders, an unknown variable in what they
                believe is a known equation.
              </p>
              <p style={proseStyle}>
                This asymmetry is not accidental. It is the structural foundation of
                how the most profitable Gold IRA dealers generate revenue. The entry
                markup is visible; the exit markdown is not. Together, they constitute
                the round-trip cost &mdash; and the round-trip cost is the only number
                that tells you what the dealer actually extracted from your retirement
                savings.
              </p>
              <p style={proseStyle}>
                This page explains the exit side. If you have already read{' '}
                <Link
                  href="/pricing"
                  style={{
                    color: 'var(--gpm-gold-secondary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                  }}
                >
                  our pricing page
                </Link>
                , you know the entry number. What follows is the other half of the
                equation.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* DEFINITIONS */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>DEFINITIONS</span>
            <h2 style={sectionHeadlineStyle}>
              What &ldquo;buyback&rdquo; actually is.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                &ldquo;Buyback&rdquo; refers to the process by which a Gold IRA dealer
                repurchases metal from a customer who wishes to liquidate part or all
                of their holdings. In a self-directed IRA, you cannot simply sell your
                gold on the open market &mdash; the metal is held in a qualified
                depository, and the transaction must flow through the dealer or a
                qualified third party.
              </p>
              <p style={proseStyle}>
                The buyback price is the price the dealer offers you for the metal at
                the time of liquidation. In a fair market, this price would be the
                prevailing spot price &mdash; the same price at which the metal trades
                on global commodity exchanges. In practice, many dealers offer a
                buyback price that is below spot, sometimes significantly so.
              </p>
              <p style={proseStyle}>
                The difference between spot and the dealer&rsquo;s buyback offer is
                the &ldquo;exit markdown&rdquo; or &ldquo;buyback spread.&rdquo; It is
                a cost to you, and it is a cost that was not visible at the time of
                purchase. Combined with the entry markup, it constitutes the
                dealer&rsquo;s total round-trip revenue on your account.
              </p>
            </div>
          </div>
        </section>

        {/* INDUSTRY PATTERN — tinted band, with worked example */}
        <section
          className="w-full py-16 md:py-24"
          style={{ background: 'var(--gpm-canvas-deep)' }}
        >
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>THE INDUSTRY PATTERN</span>
            <h2 style={sectionHeadlineStyle}>
              The pattern, as enforcement records describe it.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                Regulatory enforcement actions and published industry research describe
                a consistent pattern among the highest-revenue Gold IRA dealers. The
                pattern has three components: an inflated entry markup (often
                40&ndash;80% above the bullion value of the metal), a product
                substitution toward &ldquo;premium&rdquo; or numismatic coins that
                obscure the true markup, and an exit markdown that further erodes the
                customer&rsquo;s position when they attempt to sell.
              </p>
              <p style={proseStyle}>
                The entry markup is the visible cost. The exit markdown is the
                invisible cost. Together, they can represent a round-trip extraction
                of 50&ndash;100% of the customer&rsquo;s original investment &mdash;
                meaning the gold must appreciate by that percentage before the customer
                breaks even.
              </p>
              <p style={proseStyle}>
                The worked example below illustrates the arithmetic. Both customers
                roll over the same amount. The difference in round-trip dealer revenue
                is not marginal &mdash; it is an order of magnitude.
              </p>
            </div>
          </div>
          <div
            className="mx-auto"
            style={{ paddingLeft: 32, paddingRight: 32 }}
          >
            <WorkedExampleComparison />
          </div>
        </section>

        {/* STRUCTURAL FACTORS */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>WHY IT&rsquo;S STRUCTURED THIS WAY</span>
            <h2 style={sectionHeadlineStyle}>
              The answer is not moral. It is structural.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                The pattern described above is not the result of individual bad actors.
                It is the predictable outcome of three structural features of the Gold
                IRA industry &mdash; features that, in combination, create the
                conditions for systematic overcharging.
              </p>
              <p style={proseStyle}>
                Understanding these structures is not an exercise in blame. It is the
                prerequisite for evaluating whether any given dealer &mdash; including
                Grace &mdash; has actually addressed them, or merely claims to.
              </p>
              <p style={proseStyle}>
                The three factors are compensation structure, information asymmetry,
                and buyback architecture. Each is described below.
              </p>
            </div>
          </div>
          <div
            className="mx-auto"
            style={{ paddingLeft: 32, paddingRight: 32 }}
          >
            <StructuralFactorsGrid />
          </div>
        </section>

        <SectionDivider />

        {/* GRACE RESPONSE — with commit panel */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>GRACE&rsquo;S RESPONSE</span>
            <h2 style={sectionHeadlineStyle}>Buyback at spot, never below.</h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                Grace buys back all IRS-eligible bullion at the prevailing spot price
                at the time of transaction. There is no exit markdown, no liquidation
                fee, no processing charge, and no minimum holding period. The price
                you receive on exit is the same price the metal trades at on the
                global commodity exchange.
              </p>
              <p style={proseStyle}>
                This is not a promotional offer. It is a structural commitment
                &mdash; a permanent feature of how Grace operates. It exists because
                the alternative &mdash; marking buybacks below spot &mdash; would make
                our published entry spread meaningless. If we charged 11.1% on the
                way in and then extracted another 10% on the way out, the round-trip
                cost would be 21.1%, not 11.1%. The published number would be a lie.
              </p>
              <p style={proseStyle}>
                We believe the round-trip cost is the only honest measure of what a
                Gold IRA dealer charges. And the only way to make the round-trip cost
                equal to the entry spread is to set the exit markdown to zero.
              </p>
            </div>
            <CommitPanel />
          </div>
        </section>

        <SectionDivider />

        {/* EVALUATION CHECKLIST */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>WHAT TO ASK</span>
            <h2 style={sectionHeadlineStyle}>
              How to evaluate any Gold IRA company on buyback.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                If you are evaluating a Gold IRA company &mdash; whether Grace or
                anyone else &mdash; these are the four questions that reveal the
                exit-side economics. Ask them before you fund. If the answers are
                vague, conditional, or unavailable in writing, that is itself an
                answer.
              </p>
            </div>
            <EvaluationChecklist />
          </div>
        </section>

        <SectionDivider />

        {/* CLOSING SECTION */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <h2 style={sectionHeadlineStyle}>
              The two pages, together, are the round-trip.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                <Link
                  href="/pricing"
                  style={{ color: 'var(--gpm-gold-secondary)' }}
                >
                  /pricing
                </Link>{' '}
                shows what you pay on the way in. This page shows what happens on the
                way out. Read them together and the round-trip cost is the entry
                spread &mdash; nothing more.
              </p>
            </div>
            <div
              className="flex flex-wrap items-center"
              style={{ gap: 20, marginTop: 36 }}
            >
              <CTAButton href="/advisor" tier={1}>
                Talk to a salaried advisor
              </CTAButton>
              <CTAButton href="/briefing" tier={3}>
                Get the Briefing
              </CTAButton>
              <LinkArrow href="/pricing">Back to /pricing</LinkArrow>
            </div>
          </div>
        </section>

        {/* RELATED PAGES BAND */}
        <RelatedPagesBand />

        {/* PRE-FOOTER DISCLAIMER (site-wide standard, cream — per PR #6) */}
        <PreFooterDisclaimer>
          <p style={preFooterDisclaimerParagraphStyle}>
            <em>Grace Precious Metals is a precious metals dealer</em>, not a
            financial advisor. Gold investments carry risk. Past performance does not
            guarantee future results.
          </p>
          <p style={preFooterDisclaimerParagraphStyle}>
            The industry-pattern figures cited on this page are derived from published
            research and regulatory enforcement records. They represent category-level
            patterns, not claims about any specific competitor.
          </p>
          <p style={preFooterDisclaimerParagraphStyle}>
            &ldquo;Buyback at spot&rdquo; means Grace will purchase back IRS-eligible
            bullion at the prevailing spot price at time of transaction. No exit
            spread, no liquidation fee, no markdown.
          </p>
        </PreFooterDisclaimer>
      </main>
      <SiteFooter />
    </>
  )
}

// Shared typography helpers for prose blocks below the hero
const eyebrowStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--gpm-gold-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  marginBottom: 16,
}

const sectionHeadlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'clamp(26px, 2.8vw, 34px)',
  fontWeight: 500,
  color: 'var(--gpm-walnut-deep)',
  lineHeight: 1.25,
  margin: 0,
  marginBottom: 32,
  // H2 sits inside the 1200 rail but caps at 880 so headlines don't
  // run unreadably wide on big viewports.
  maxWidth: 880,
}

// Prose blocks live inside the 1200 12-col rail. Cap at 720 so paragraphs
// stay readable (~70 characters per line) while H2/eyebrow span wider
// for editorial weight and section components (cards, grids) get the
// full 1200.
const proseGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  maxWidth: 720,
}

const proseStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 17,
  fontWeight: 400,
  color: 'var(--gpm-ink-body)',
  lineHeight: 1.65,
  margin: 0,
}
