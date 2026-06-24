import { CTAButton, LinkArrow } from '@/components/cta'

// /pricing §10 — FAQ.
// Native <details>/<summary>. Six questions verbatim from the Pricing
// Page Design Specification §16. Answer copy is in-brand prose
// extending the spec's positioning.
//
// Toggle icon (+/−) is rendered via CSS pseudo-element on summary in
// app/globals.css.
//
// Layout shift 2026-05-08: widened from 640 ProseContainer to 1000
// so question summary lines no longer break awkwardly mid-thought.
// Answer column kept narrower (640) for reading comfort.
//
// Reference: Grace Precious Metals — Pricing Page Design Specification.

interface QA {
  q: string
  a: React.ReactNode
}

const FAQ: QA[] = [
  {
    q: 'Why is your cost on a product higher than the spot price of gold or silver?',
    a: (
      <>
        The 11.1% spread is the complete cost of doing business with Grace &mdash; no
        other fees layered on top. A single coin&rsquo;s spot premium does not include
        the cost of running an IRS-compliant Gold IRA business: licensed advisors,
        compliance, custodian relationships, depository logistics, and operational
        overhead. Other companies separate these into ongoing fees, setup fees, and exit
        charges; we don&rsquo;t. The spread is everything.
      </>
    ),
  },
  {
    q: 'Does the 11.1% apply to every product you sell?',
    a: (
      <>
        Yes. Grace sells only standard IRS-eligible bullion &mdash; American Gold Eagles,
        Canadian Gold Maple Leafs, and LBMA-approved bars &mdash; and the 11.1% spread
        applies uniformly to every product. We do not sell numismatic coins,
        &ldquo;rare&rdquo; coins, or any product that carries a different markup.
      </>
    ),
  },
  {
    q: 'What happens when I want to sell my gold?',
    a: (
      <>
        Grace buys your bullion back at the live spot price on the day of sale. There is
        no exit spread, no liquidation fee, and no markdown. The depository will release
        your metal directly to us, and the proceeds are wired to your IRA without any
        deduction by Grace.
      </>
    ),
  },
  {
    q: 'Are there any ongoing fees from Grace?',
    a: (
      <>
        No. Grace earns revenue only from the entry spread. We do not charge an annual
        account fee, a monthly fee, or any ongoing maintenance charge. The custodian and
        depository each charge their own annual fees &mdash; billed directly to your IRA
        &mdash; and Grace does not receive any portion of those.
      </>
    ),
  },
  {
    q: 'How does 11.1% compare to what other companies charge?',
    a: (
      <>
        Published research and regulatory enforcement records place the typical Gold IRA
        round-trip cost between 17% and 33%, combining entry spread, ongoing fees, and
        exit charges. Grace&rsquo;s round-trip cost is the entry spread of 11.1%, because
        we charge nothing on the way out. The full comparison is on the pricing page
        above.
      </>
    ),
  },
  {
    q: 'Can the spread change in the future?',
    a: (
      <>
        If the economics of the business ever require raising the spread, the new figure
        will be published on this page before it takes effect. No such change is planned,
        and the current 11.1% is what you are quoted.
      </>
    ),
  },
]

export function PricingFAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      style={{
        background: 'var(--gpm-canvas-deep)',
      }}
    >
      <div
        className="w-full py-16 md:py-24"
        style={{
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        <div className="mx-auto" style={{ maxWidth: 1000 }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: 'var(--gpm-gold-secondary)',
              margin: 0,
              marginBottom: 16,
            }}
          >
            COMMON QUESTIONS
          </p>
          <h2
            id="faq-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              fontSize: 'clamp(28px, 3vw, 36px)',
              lineHeight: 1.2,
              color: 'var(--gpm-walnut-deep)',
              margin: 0,
              marginBottom: 48,
            }}
          >
            About our pricing.
          </h2>

          <div
            style={{
              borderTop: '0.5px solid rgba(184, 150, 46, 0.35)',
            }}
          >
            {FAQ.map((qa) => (
              <FAQItem key={qa.q} qa={qa} />
            ))}
          </div>

          {/* Closing cluster — centered. Tier 4 link first; Tier 1 + Tier 3 below. */}
          <div
            style={{
              marginTop: 48,
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'var(--gpm-ink-body)',
                margin: 0,
                marginBottom: 24,
              }}
            >
              For rollover mechanics, custodian choice, and tax treatment{' '}
              <LinkArrow href="/faq">Frequently Asked Questions</LinkArrow>
            </p>

            <div
              className="flex flex-wrap items-center justify-center"
              style={{ gap: 16 }}
            >
              <CTAButton href="/advisor" tier={1}>
                Talk to a salaried advisor
              </CTAButton>
              <CTAButton href="/briefing" tier={3}>
                Get the Briefing
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ qa }: { qa: QA }) {
  return (
    <details
      className="gpm-pricing-faq-item"
      style={{
        borderBottom: '0.5px solid rgba(184, 150, 46, 0.35)',
      }}
    >
      <summary
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 17,
          lineHeight: 1.4,
          color: 'var(--gpm-ink-display)',
        }}
      >
        {qa.q}
      </summary>
      <div
        style={{
          paddingBottom: 20,
          maxWidth: 580,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'var(--gpm-ink-body)',
            margin: 0,
          }}
        >
          {qa.a}
        </p>
      </div>
    </details>
  )
}
