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
//
// 2026-05-08 zero-deadspace refactor:
// Every prose section pairs an 8-col main column with a 4-col
// callout sidebar (definition / key takeaway / pull-quote / stat),
// so no horizontal line in the 1200 rail is left empty. Grace
// Response uses a 7/5 split (heavier prose + key-takeaway pull
// quote). CommitPanel ("The math, on Grace's posture") becomes a
// full-width stage panel that spans the whole 1200 rail with three
// big anchor figures.
//
// Reference: buyback.html template + 2026-05-08 brief.

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

        {/* HERO — editorial deck, 10 cols centered */}
        <section className="w-full" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <div style={{ maxWidth: 960, marginLeft: 'auto', marginRight: 'auto' }}>
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
                  maxWidth: 800,
                }}
              >
                Most Gold IRA customers focus, at the point of purchase, on the entry
                price. The exit price &mdash; what you receive when you sell back
                &mdash; is typically not part of the buying decision at all. It is
                also, for most customers, the more financially consequential of the
                two.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* INTRO FRAMING — 8/4 prose + key-takeaway callout */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>THE TWO NUMBERS</span>
            <h2 style={sectionHeadlineStyle}>
              Entry is the number you see. Exit is the number you don&rsquo;t.
            </h2>
            <div
              className="grid grid-cols-1 lg:grid-cols-12"
              style={{ rowGap: 32, columnGap: 48 }}
            >
              <div className="lg:col-span-8" style={proseGroupStyle}>
                <p style={proseStyle}>
                  When you purchase gold inside a self-directed IRA, the entry price
                  is the number on the confirmation. It is the spot price of the
                  metal plus the dealer&rsquo;s markup &mdash; and because it appears
                  on a document, it feels concrete. You paid a price; you received an
                  asset. The transaction is legible.
                </p>
                <p style={proseStyle}>
                  The exit price is different. It exists only in the future, at a
                  moment you have not yet chosen, under conditions you cannot yet
                  see. Most customers do not ask about it at the point of purchase
                  &mdash; and most dealers do not volunteer it. The result is that
                  the exit price is, for the majority of Gold IRA holders, an unknown
                  variable in what they believe is a known equation.
                </p>
                <p style={proseStyle}>
                  This asymmetry is not accidental. It is the structural foundation
                  of how the most profitable Gold IRA dealers generate revenue. The
                  entry markup is visible; the exit markdown is not. Together, they
                  constitute the round-trip cost &mdash; and the round-trip cost is
                  the only number that tells you what the dealer actually extracted
                  from your retirement savings.
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

              <Callout
                className="lg:col-span-4"
                eyebrow="THE EQUATION"
                title="Round-trip cost is the only honest measure."
                body={
                  <>
                    Entry markup <span style={tnum}>+</span> exit markdown{' '}
                    <span style={tnum}>=</span> what the dealer actually extracted.
                    Anything quoted on just one side is half a number.
                  </>
                }
                variant="surface"
              />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* DEFINITIONS — 8/4 prose + definition callout */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>DEFINITIONS</span>
            <h2 style={sectionHeadlineStyle}>
              What &ldquo;buyback&rdquo; actually is.
            </h2>
            <div
              className="grid grid-cols-1 lg:grid-cols-12"
              style={{ rowGap: 32, columnGap: 48 }}
            >
              <div className="lg:col-span-8" style={proseGroupStyle}>
                <p style={proseStyle}>
                  &ldquo;Buyback&rdquo; refers to the process by which a Gold IRA
                  dealer repurchases metal from a customer who wishes to liquidate
                  part or all of their holdings. In a self-directed IRA, you cannot
                  simply sell your gold on the open market &mdash; the metal is held
                  in a qualified depository, and the transaction must flow through
                  the dealer or a qualified third party.
                </p>
                <p style={proseStyle}>
                  The buyback price is the price the dealer offers you for the metal
                  at the time of liquidation. In a fair market, this price would be
                  the prevailing spot price &mdash; the same price at which the metal
                  trades on global commodity exchanges. In practice, many dealers
                  offer a buyback price that is below spot, sometimes significantly
                  so.
                </p>
                <p style={proseStyle}>
                  The difference between spot and the dealer&rsquo;s buyback offer is
                  the &ldquo;exit markdown&rdquo; or &ldquo;buyback spread.&rdquo; It
                  is a cost to you, and it is a cost that was not visible at the time
                  of purchase. Combined with the entry markup, it constitutes the
                  dealer&rsquo;s total round-trip revenue on your account.
                </p>
              </div>

              <DefinitionCallout
                className="lg:col-span-4"
                items={[
                  {
                    term: 'Spot price',
                    def: 'The live price the metal trades at on global commodity exchanges.',
                  },
                  {
                    term: 'Exit markdown',
                    def: 'The gap between spot and what the dealer offers when you sell back.',
                  },
                  {
                    term: 'Round-trip cost',
                    def: 'Entry markup plus exit markdown — the dealer’s total revenue on your account.',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* INDUSTRY PATTERN — tinted band, 8/4 prose + stat, then full-width worked example */}
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
            <div
              className="grid grid-cols-1 lg:grid-cols-12"
              style={{ rowGap: 32, columnGap: 48 }}
            >
              <div className="lg:col-span-8" style={proseGroupStyle}>
                <p style={proseStyle}>
                  Regulatory enforcement actions and published industry research
                  describe a consistent pattern among the highest-revenue Gold IRA
                  dealers. The pattern has three components: an inflated entry markup
                  (often 40&ndash;80% above the bullion value of the metal), a
                  product substitution toward &ldquo;premium&rdquo; or numismatic
                  coins that obscure the true markup, and an exit markdown that
                  further erodes the customer&rsquo;s position when they attempt to
                  sell.
                </p>
                <p style={proseStyle}>
                  The entry markup is the visible cost. The exit markdown is the
                  invisible cost. Together, they can represent a round-trip
                  extraction of 50&ndash;100% of the customer&rsquo;s original
                  investment &mdash; meaning the gold must appreciate by that
                  percentage before the customer breaks even.
                </p>
                <p style={proseStyle}>
                  The worked example below illustrates the arithmetic. Both customers
                  roll over the same amount. The difference in round-trip dealer
                  revenue is not marginal &mdash; it is an order of magnitude.
                </p>
              </div>

              <StatCallout
                className="lg:col-span-4"
                figure="50–100%"
                label="Round-trip extraction in documented cases"
                body="Combining inflated entry markup, premium-coin substitution, and exit markdown — the gold must appreciate by that percentage before the customer breaks even."
              />
            </div>
          </div>
          <div
            className="mx-auto"
            style={{ paddingLeft: 32, paddingRight: 32 }}
          >
            <WorkedExampleComparison />
          </div>
        </section>

        {/* STRUCTURAL FACTORS — 8/4 prose + pull quote, then full-width 3-up grid */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>WHY IT&rsquo;S STRUCTURED THIS WAY</span>
            <h2 style={sectionHeadlineStyle}>
              The answer is not moral. It is structural.
            </h2>
            <div
              className="grid grid-cols-1 lg:grid-cols-12"
              style={{ rowGap: 32, columnGap: 48 }}
            >
              <div className="lg:col-span-8" style={proseGroupStyle}>
                <p style={proseStyle}>
                  The pattern described above is not the result of individual bad
                  actors. It is the predictable outcome of three structural features
                  of the Gold IRA industry &mdash; features that, in combination,
                  create the conditions for systematic overcharging.
                </p>
                <p style={proseStyle}>
                  Understanding these structures is not an exercise in blame. It is
                  the prerequisite for evaluating whether any given dealer &mdash;
                  including Grace &mdash; has actually addressed them, or merely
                  claims to.
                </p>
                <p style={proseStyle}>
                  The three factors are compensation structure, information
                  asymmetry, and buyback architecture. Each is described below.
                </p>
              </div>

              <PullQuoteCallout
                className="lg:col-span-4"
                quote="The pattern is not the result of individual bad actors. It is the predictable outcome of three structural features."
                attribution="The structural argument"
              />
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

        {/* GRACE RESPONSE — 7/5 split, then full-width CommitPanel stage */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>GRACE&rsquo;S RESPONSE</span>
            <h2 style={sectionHeadlineStyle}>Buyback at spot, never below.</h2>
            <div
              className="grid grid-cols-1 lg:grid-cols-12"
              style={{ rowGap: 32, columnGap: 48 }}
            >
              <div
                className="lg:col-span-7"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                <p style={proseStyle}>
                  Grace buys back all IRS-eligible bullion at the prevailing spot
                  price at the time of transaction. There is no exit markdown, no
                  liquidation fee, no processing charge, and no minimum holding
                  period. The price you receive on exit is the same price the metal
                  trades at on the global commodity exchange.
                </p>
                <p style={proseStyle}>
                  This is not a promotional offer. It is a structural commitment
                  &mdash; a permanent feature of how Grace operates. It exists
                  because the alternative &mdash; marking buybacks below spot
                  &mdash; would make our published entry spread meaningless. If we
                  charged 11.1% on the way in and then extracted another 10% on the
                  way out, the round-trip cost would be 21.1%, not 11.1%. The
                  published number would be a lie.
                </p>
                <p style={proseStyle}>
                  We believe the round-trip cost is the only honest measure of what
                  a Gold IRA dealer charges. And the only way to make the round-trip
                  cost equal to the entry spread is to set the exit markdown to
                  zero.
                </p>
              </div>

              <KeyTakeawayCallout
                className="lg:col-span-5"
                heading="Buyback at spot, never below."
                bullets={[
                  'No exit markdown. No liquidation fee. No processing charge.',
                  'No minimum holding period — sell back the day you choose.',
                  'Round-trip cost = entry spread, full stop.',
                ]}
              />
            </div>
          </div>

          {/* CommitPanel as full-width stage — sits below the 7/5 split */}
          <div
            className="mx-auto"
            style={{ paddingLeft: 32, paddingRight: 32 }}
          >
            <CommitPanel />
          </div>
        </section>

        <SectionDivider />

        {/* EVALUATION CHECKLIST — 8/4 intro prose + trust-badge callout, then full-width 2x2 */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>WHAT TO ASK</span>
            <h2 style={sectionHeadlineStyle}>
              How to evaluate any Gold IRA company on buyback.
            </h2>
            <div
              className="grid grid-cols-1 lg:grid-cols-12"
              style={{ rowGap: 32, columnGap: 48 }}
            >
              <div className="lg:col-span-8" style={proseGroupStyle}>
                <p style={proseStyle}>
                  If you are evaluating a Gold IRA company &mdash; whether Grace or
                  anyone else &mdash; these are the four questions that reveal the
                  exit-side economics. Ask them before you fund. If the answers are
                  vague, conditional, or unavailable in writing, that is itself an
                  answer.
                </p>
              </div>

              <TrustBadgeCallout
                className="lg:col-span-4"
                badge="ASK IN WRITING"
                body="A verbal commitment is not a commitment. If a dealer will not document the buyback terms in a signed agreement before you fund, the terms are not binding."
              />
            </div>
          </div>
          <div
            className="mx-auto"
            style={{ paddingLeft: 32, paddingRight: 32 }}
          >
            <EvaluationChecklist />
          </div>
        </section>

        <SectionDivider />

        {/* CLOSING — short, centered like hero */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
          >
            <div style={{ maxWidth: 960, marginLeft: 'auto', marginRight: 'auto' }}>
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
                  shows what you pay on the way in. This page shows what happens on
                  the way out. Read them together and the round-trip cost is the
                  entry spread &mdash; nothing more.
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

// ============================================================
// Inline callout patterns (no new component-library entries —
// these are layout-level helpers for the buyback page only).
// ============================================================

function Callout({
  className,
  eyebrow,
  title,
  body,
  variant = 'surface',
}: {
  className?: string
  eyebrow: string
  title: string
  body: React.ReactNode
  variant?: 'surface' | 'linen'
}) {
  return (
    <aside
      className={className}
      style={{
        background:
          variant === 'surface' ? 'var(--gpm-surface)' : 'var(--gpm-linen-warm)',
        borderLeft: '4px solid var(--gpm-gold-deep)',
        borderRadius: 2,
        padding: '28px 32px',
        alignSelf: 'start',
      }}
    >
      <span style={calloutEyebrowStyle}>{eyebrow}</span>
      <h3 style={calloutTitleStyle}>{title}</h3>
      <p style={calloutBodyStyle}>{body}</p>
    </aside>
  )
}

function DefinitionCallout({
  className,
  items,
}: {
  className?: string
  items: { term: string; def: string }[]
}) {
  return (
    <aside
      className={className}
      style={{
        background: 'var(--gpm-linen-warm)',
        border: '1px solid var(--gpm-border-light)',
        borderRadius: 4,
        padding: '28px 32px',
        alignSelf: 'start',
      }}
    >
      <span style={calloutEyebrowStyle}>DEFINITIONS</span>
      <dl style={{ margin: 0 }}>
        {items.map((it, i) => (
          <div
            key={it.term}
            style={{
              paddingTop: i === 0 ? 0 : 14,
              paddingBottom: i === items.length - 1 ? 0 : 14,
              borderBottom:
                i === items.length - 1
                  ? 'none'
                  : '1px dashed rgba(213, 205, 182, 0.6)',
            }}
          >
            <dt
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--gpm-ink-display)',
                marginBottom: 4,
              }}
            >
              {it.term}
            </dt>
            <dd
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 400,
                color: 'var(--gpm-ink-body)',
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              {it.def}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}

function StatCallout({
  className,
  figure,
  label,
  body,
}: {
  className?: string
  figure: string
  label: string
  body: string
}) {
  return (
    <aside
      className={className}
      style={{
        background: 'var(--gpm-linen-warm)',
        border: '1px solid var(--gpm-border-light)',
        borderRadius: 4,
        padding: '32px',
        alignSelf: 'start',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(36px, 4.4vw, 52px)',
          lineHeight: 1.0,
          color: 'var(--gpm-state-error)',
          fontFeatureSettings: '"tnum"',
          marginBottom: 12,
        }}
      >
        {figure}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: 'var(--gpm-walnut-deep)',
          marginBottom: 16,
          lineHeight: 1.4,
        }}
      >
        {label}
      </div>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 15,
          fontWeight: 400,
          color: 'var(--gpm-ink-body)',
          lineHeight: 1.55,
          margin: 0,
        }}
      >
        {body}
      </p>
    </aside>
  )
}

function PullQuoteCallout({
  className,
  quote,
  attribution,
}: {
  className?: string
  quote: string
  attribution?: string
}) {
  return (
    <aside
      className={className}
      style={{
        borderLeft: '2px solid var(--gpm-gold-deep)',
        paddingLeft: 28,
        paddingTop: 8,
        paddingBottom: 8,
        alignSelf: 'start',
      }}
    >
      <blockquote
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 22,
          fontWeight: 400,
          color: 'var(--gpm-walnut-deep)',
          lineHeight: 1.4,
          margin: 0,
          marginBottom: attribution ? 16 : 0,
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--gpm-gold-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
          }}
        >
          {attribution}
        </span>
      )}
    </aside>
  )
}

function KeyTakeawayCallout({
  className,
  heading,
  bullets,
}: {
  className?: string
  heading: string
  bullets: string[]
}) {
  return (
    <aside
      className={className}
      style={{
        background: 'var(--gpm-surface)',
        borderRadius: 4,
        padding: '32px 36px',
        alignSelf: 'start',
        boxShadow:
          '0 1px 0 rgba(184, 150, 46, 0.06), 0 8px 24px -16px rgba(61, 40, 23, 0.18)',
      }}
    >
      <span style={calloutEyebrowStyle}>KEY TAKEAWAY</span>
      <h3
        style={{
          ...calloutTitleStyle,
          fontSize: 22,
          marginBottom: 18,
        }}
      >
        {heading}
      </h3>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {bullets.map((b, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'baseline',
              padding: '10px 0',
              borderTop:
                i === 0 ? 'none' : '1px dashed rgba(213, 205, 182, 0.6)',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 700,
                color: 'var(--gpm-gold-deep)',
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              ✓
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 16,
                fontWeight: 400,
                color: 'var(--gpm-ink-body)',
                lineHeight: 1.55,
              }}
            >
              {b}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

function TrustBadgeCallout({
  className,
  badge,
  body,
}: {
  className?: string
  badge: string
  body: string
}) {
  return (
    <aside
      className={className}
      style={{
        background: 'var(--gpm-linen-warm)',
        border: '1px dashed rgba(184, 150, 46, 0.45)',
        borderRadius: 4,
        padding: '28px 32px',
        alignSelf: 'start',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 700,
          color: 'var(--gpm-gold-deep)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          padding: '6px 12px',
          background: 'rgba(184, 150, 46, 0.10)',
          borderRadius: 2,
          marginBottom: 16,
        }}
      >
        {badge}
      </span>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 16,
          fontWeight: 400,
          color: 'var(--gpm-ink-body)',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {body}
      </p>
    </aside>
  )
}

// Shared typography helpers
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
  maxWidth: 1000,
}

// Prose lives in the 8-col rail. No max-width here — the parent grid
// column constrains it to ~770px at 1440 viewport (8/12 of 1200 minus
// the 48px column gap), which gives ~88 chars/line at 17px Source
// Serif — at the editorial edge of comfortable.
const proseGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
}

const proseStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 17,
  fontWeight: 400,
  color: 'var(--gpm-ink-body)',
  lineHeight: 1.6,
  margin: 0,
}

const calloutEyebrowStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 600,
  color: 'var(--gpm-gold-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  marginBottom: 12,
}

const calloutTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 19,
  fontWeight: 500,
  color: 'var(--gpm-ink-display)',
  lineHeight: 1.3,
  margin: 0,
  marginBottom: 12,
}

const calloutBodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 15,
  fontWeight: 400,
  color: 'var(--gpm-ink-body)',
  lineHeight: 1.6,
  margin: 0,
}

const tnum: React.CSSProperties = { fontFeatureSettings: '"tnum"' }
