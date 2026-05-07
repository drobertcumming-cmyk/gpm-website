import { CTAButton, LinkArrow } from '@/components/cta'
import { ProseContainer } from '@/components/layout'

// /pricing §7 — Common questions about our pricing (v3.5.1, Delta #5).
// Native <details>/<summary> — no JS accordion library, no Headless UI
// Disclosure, no client component. Six Q&A pairs, all closed by default.
// Hairline divider between pairs. Closing Tier 4 link to /faq, then dual
// closing CTAs (Tier 1 + Tier 3).
//
// Section background uses `surface` (#E8E2CC) — distinct from the
// CategoryComparison panel's canvas-deep (#F8F5EB).
//
// Inner content uses ProseContainer (640px) per brief.
//
// Chevron rotation handled via CSS pseudo-element on summary in
// app/globals.css (`.gpm-pricing-faq-item summary::after`); no JS state.
//
// Reference: GPM_Pricing_ClaudeCode_Brief_v2; v3.5.1 PricingFAQ spec.

interface QA {
  q: string
  a: React.ReactNode
}

const FAQ: QA[] = [
  {
    q: 'Is the 11.1% negotiable?',
    a: (
      <>
        No. The spread is constant. Your salaried advisor has no authority to discount
        it, and no commission to protect by holding it. The first customer pays 11.1%.
        The thousandth customer pays 11.1%.
      </>
    ),
  },
  {
    q: 'Is there a minimum rollover to access the published spread?',
    a: (
      <>
        No. The 11.1% applies to the first dollar and to the last. We do not gate
        published pricing behind a minimum purchase.
      </>
    ),
  },
  {
    q: 'What do I actually pay on exit?',
    a: (
      <>
        Nothing to Grace beyond the buyback transaction itself, which is executed at
        spot. If you sell a hundred ounces back to us on a day when spot is{' '}
        <span style={{ fontFeatureSettings: '"tnum"' }}>$2,600</span> per ounce, you
        receive <span style={{ fontFeatureSettings: '"tnum"' }}>$260,000</span>. There is
        no percentage markdown. There is no &ldquo;liquidation fee.&rdquo; The depository
        may charge a final-year storage fee and the custodian may charge a closing fee
        &mdash; both go to those parties, not to Grace, and both are disclosed by them.
      </>
    ),
  },
  {
    q: 'What if the spread changes in future?',
    a: (
      <>
        Any change to the published spread would be a published policy change,
        CFO-signed-off, reflected on this page with the new figure and the effective
        date. Existing customer accounts are governed by the terms in place at the time
        of their purchase. We would not apply a new spread retroactively.
      </>
    ),
  },
  {
    q: 'How do I verify the 11.1% is actually what I will be charged?',
    a: (
      <>
        Three ways. First, the spread is on this page, CFO-signed-off, with
        change-management logged. Second, when your purchase confirmation arrives, the
        math is shown line-by-line &mdash; the spot price used, the 11.1% spread applied,
        the total. Third, you can compare our per-ounce price to the spot price on any
        independent spot source you prefer.
      </>
    ),
  },
  {
    q: 'Can you give me a quote without my contact information?',
    a: (
      <>
        Yes. The worked examples above are the quote structure. If you want a rollover
        number calculated against your specific amount and timing, the advisor call is
        available &mdash; and the call does not require a commitment or a minimum to
        proceed.
      </>
    ),
  },
]

export function PricingFAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      style={{
        background: 'var(--gpm-surface)',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: 1200,
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        <ProseContainer>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'var(--gpm-gold-secondary)',
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
              lineHeight: 1.25,
              color: 'var(--gpm-walnut-deep)',
              margin: 0,
              marginBottom: 48,
            }}
          >
            About our pricing.
          </h2>

          <div
            style={{
              borderTop: '0.5px solid var(--gpm-border-light)',
            }}
          >
            {FAQ.map((qa) => (
              <FAQItem key={qa.q} qa={qa} />
            ))}
          </div>

          {/* Closing FAQ link */}
          <div style={{ marginTop: 32 }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'var(--gpm-ink-body)',
                margin: 0,
                marginBottom: 8,
              }}
            >
              For rollover mechanics, custodian choice, and tax treatment, see{' '}
              <LinkArrow href="/faq">Frequently Asked Questions</LinkArrow>
            </p>
          </div>

          {/* Dual closing CTAs (Tier 1 + Tier 3), separated by a 22px top hairline */}
          <div
            className="flex flex-wrap items-center"
            style={{
              gap: 16,
              marginTop: 24,
              paddingTop: 22,
              borderTop: '0.5px solid var(--gpm-border-light)',
            }}
          >
            <CTAButton href="/advisor" tier={1}>
              Talk to a salaried advisor
            </CTAButton>
            <CTAButton href="/briefing" tier={3}>
              Get the Briefing
            </CTAButton>
          </div>
        </ProseContainer>
      </div>
    </section>
  )
}

function FAQItem({ qa }: { qa: QA }) {
  return (
    <details
      className="gpm-pricing-faq-item"
      style={{
        borderBottom: '0.5px solid var(--gpm-border-light)',
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
          paddingBottom: 24,
          paddingRight: 32,
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
