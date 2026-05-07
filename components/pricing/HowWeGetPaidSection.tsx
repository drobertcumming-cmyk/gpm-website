import { ProseContainer } from '@/components/layout'

// /pricing §4 — How we get paid (v3.5.1).
// Prose section using ProseContainer (640px). Counsel-gated copy
// ("If the economics require raising the spread") renders as v3.5.1
// written; flagged in PR description.
//
// Reference: GPM_Pricing_ClaudeCode_Brief_v2; v3.5.1 "How we get paid".

export function HowWeGetPaidSection() {
  return (
    <section
      aria-labelledby="how-we-get-paid-heading"
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
            letterSpacing: '0.10em',
            color: 'var(--gpm-gold-secondary)',
            marginBottom: 16,
          }}
        >
          HOW WE GET PAID
        </p>
        <h2
          id="how-we-get-paid-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 36px)',
            lineHeight: 1.25,
            color: 'var(--gpm-walnut-deep)',
            margin: 0,
            marginBottom: 28,
          }}
        >
          The whole revenue model.
        </h2>

        <p style={paragraphStyle}>
          This is the part of the category most readers have never seen written down. So
          here it is plainly.
        </p>

        <p style={paragraphStyle}>
          Grace earns the 11.1% spread. That is our revenue on a gold purchase. Out of
          that margin we pay for the metal, the logistics of getting it into an
          IRS-approved depository, the custodian relationship, our advisors&rsquo;
          salaries, our overhead, and our compliance. When you sell back to us, we take
          no markup on the buyback &mdash; you receive spot. Our economics are the entry
          spread. Nothing else.
        </p>

        <p style={paragraphStyle}>
          We do not receive referral fees from custodians or depositories. We do not
          receive volume rebates for steering you toward particular products. We do not
          receive incremental margin on any product in the catalogue beyond the
          published spread. If the economics of the business require raising the spread
          at some future point, that would be a published policy change with the same
          transparency as the current number &mdash; a CFO-signed-off update to this
          page, not a hidden adjustment on a phone call. No such change is planned, and
          the current spread is what you are quoted.
        </p>

        <p style={paragraphStyle}>
          That is the whole revenue model. We thought you deserved to see it.
        </p>
      </ProseContainer>
    </section>
  )
}

const paragraphStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(16px, 1.4vw, 17px)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--gpm-ink-body)',
  margin: '0 0 22px',
}
