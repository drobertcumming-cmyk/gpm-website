import { ContentContainer } from '@/components/layout'

// /pricing §3 — The four foundational commitments (v3.5.1).
// 2×2 CSS grid at lg:; one column below. Each card carries a numeric
// eyebrow row (number + extending hairline rule), headline, body. All
// four equal-weight (no spanning, no featured commitment).
//
// CMO override: render four (Commitment 5 from v3.5 — "No phone-gate
// on pricing" — is dropped because the page itself is the proof of no
// phone-gate).
//
// Built parallel to the homepage's FoundationalCommitments rather than
// reusing it: that component is hardcoded for the homepage's specific
// 4-card grid layout and not a reusable primitive.
//
// Reference: GPM_Pricing_ClaudeCode_Brief_v2; v3.5.1 "The four
// foundational commitments" + CommitmentList layout spec (2×2 grid).

interface Commitment {
  number: string
  headline: string
  body: React.ReactNode
}

const COMMITMENTS: Commitment[] = [
  {
    number: '01',
    headline: 'Published spread: 11.1%, all-in.',
    body: (
      <>
        The markup over spot is 11.1%. That is the whole markup. No second layer labelled
        &ldquo;administration,&rdquo; no third layer labelled &ldquo;setup.&rdquo; The
        number you see is the number you pay.
      </>
    ),
  },
  {
    number: '02',
    headline: 'Buyback at spot, never below.',
    body: (
      <>
        When you sell your metals back to us, we pay the spot price on the day. We do not
        mark the buyback down to create a second margin on exit. The exit number is the
        market number.
      </>
    ),
  },
  {
    number: '03',
    headline: 'Standard IRS-eligible bullion only.',
    body: (
      <>
        We sell American Eagles, Canadian Maple Leafs, LBMA-approved bars, and other
        standard IRS-eligible bullion. We do not sell numismatic, &ldquo;exclusive,&rdquo;
        &ldquo;rare,&rdquo; &ldquo;premium,&rdquo; or &ldquo;proof&rdquo; coins in any
        form. This is a published, permanent policy. It is also the single most important
        piece of consumer protection in this category &mdash; category-level enforcement
        records document hundreds of millions of dollars in consumer losses tied to
        numismatic coin pricing. None of it happens here, because none of it is on the
        catalogue.
      </>
    ),
  },
  {
    number: '04',
    headline: 'Salaried advisors. No commission.',
    body: (
      <>
        The advisor you speak to is paid the same whether you open an account or not.
        There are no commissions, no referral fees, no volume bonuses paid to the person
        on the call. What that means, practically, is that the person helping you has no
        financial interest in talking you into a larger transaction, a faster decision,
        or a product with a higher margin. The incentive and the counsel are aligned.
      </>
    ),
  },
]

export function CommitmentList() {
  return (
    <section
      aria-labelledby="commitments-heading"
      className="mx-auto py-16 md:py-24"
      style={{
        maxWidth: 1200,
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      <ContentContainer>
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
          OUR FOUNDATIONAL COMMITMENTS
        </p>
        <h2
          id="commitments-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 36px)',
            lineHeight: 1.25,
            color: 'var(--gpm-walnut-deep)',
            margin: 0,
            marginBottom: 16,
          }}
        >
          The four foundational commitments.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(16px, 1.4vw, 17px)',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'var(--gpm-ink-body)',
            margin: 0,
            marginBottom: 56,
            maxWidth: 640,
          }}
        >
          Our pricing posture is not a promotion. It is four foundational commitments,
          each one operational and verifiable.
        </p>

        {/* 2×2 grid at lg: (1024px+); one column below */}
        {/* Brief: gap 36px row, 40px column at desktop; 32px row at mobile */}
        <ul
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-9 lg:gap-x-10"
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {COMMITMENTS.map((c) => (
            <li key={c.number}>
              <div className="flex items-center" style={{ gap: 16, marginBottom: 14 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 500,
                    fontSize: 14,
                    color: 'var(--gpm-gold-secondary)',
                    letterSpacing: '0.05em',
                    fontFeatureSettings: '"tnum"',
                    flexShrink: 0,
                  }}
                >
                  {c.number}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flex: 1,
                    height: 0.5,
                    background: 'var(--gpm-border-light)',
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  fontSize: 22,
                  lineHeight: 1.3,
                  color: 'var(--gpm-ink-display)',
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                {c.headline}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'var(--gpm-ink-body)',
                  margin: 0,
                }}
              >
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </ContentContainer>
    </section>
  )
}
