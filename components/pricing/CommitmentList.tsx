// /pricing §3 — The four foundational commitments.
// Sequential stacked list (NOT a 4-card grid like the homepage's
// FoundationalCommitments). Each entry: numeral with a hairline rule
// extending right + headline + body. Per brief typography spec:
//   - numeral: Source Serif 4 500 14px gold-secondary
//   - headline: Source Serif 4 500 22px ink-display
//   - body: Inter 400 14px ink-body
//
// CMO override: render four (Commitment 5 from v3.5 — "No phone-gate on
// pricing" — is dropped because the page itself is the proof of no
// phone-gate).
//
// Reference: v3.5 Section 1 "The five structural commitments" with CMO
// override applied; HOMEPAGE_DESIGN_REFERENCE.md §1 commitments framework.

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
      className="mx-auto"
      style={{
        maxWidth: 1200,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 96,
        paddingBottom: 96,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 880 }}>
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

        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {COMMITMENTS.map((c, i) => (
            <li
              key={c.number}
              style={{
                paddingTop: i === 0 ? 0 : 32,
                paddingBottom: 32,
                borderBottom:
                  i === COMMITMENTS.length - 1 ? 'none' : '0.5px solid var(--gpm-border-light)',
              }}
            >
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
                    background: 'var(--gpm-gold-primary)',
                    opacity: 0.5,
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
                  maxWidth: 640,
                }}
              >
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
