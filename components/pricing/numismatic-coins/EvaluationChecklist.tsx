// /pricing/numismatic-coins — Evaluation Checklist.
//
// Layout shift 2026-05-08: refactored from a single narrow vertical
// list (centered ~640) into a 4/8 asymmetric split inside a 1200 max
// container. Section header + intro sit in the LEFT 4 cols; the three
// numbered questions stack in the RIGHT 8 cols.
//
// The asymmetric split is the brief's "force the design to occupy the
// full width" directive applied to a section that was structurally
// narrow before.
//
// This component now owns its own section eyebrow + H2 + intro prose
// since the page-level wrapper used to host them. Renders inside a
// section that just provides padding.

interface Item {
  num: string
  question: string
  answer: React.ReactNode
}

const ITEMS: Item[] = [
  {
    num: '01',
    question:
      '“Does your catalogue include numismatic, ‘premium,’ ‘exclusive,’ or ‘proof’ coins?”',
    answer: (
      <>
        If the answer is yes, the provider carries the product category most
        associated with documented consumer harm in this channel. That does not mean
        they will steer you into it &mdash; but the product is on the menu, and the
        incentive structure exists.
      </>
    ),
  },
  {
    num: '02',
    question:
      '“What is the independent resale value of the product you are recommending, today, from a source other than you?”',
    answer: (
      <>
        If the provider cannot or will not answer this question with a specific,
        verifiable number from an independent source, the information asymmetry is
        active. The product may be fairly priced &mdash; but you cannot verify it,
        and the provider is not helping you verify it.
      </>
    ),
  },
  {
    num: '03',
    question:
      '“Will you put in writing that the product’s resale value is not materially below the price I am paying?”',
    answer: (
      <>
        If the provider declines to make this statement in writing, the gap between
        purchase price and resale value is likely material. A provider confident in
        the fairness of their pricing has no reason to decline this request.
      </>
    ),
  },
]

export function EvaluationChecklist() {
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: 1200 }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-12"
        style={{ rowGap: 32, columnGap: 48 }}
      >
        {/* Left rail — 4 cols. Eyebrow + H2 + intro paragraph + ASK
            IN WRITING anchor. Sticks to the top so the questions on
            the right read alongside the framing on the left. */}
        <header
          className="lg:col-span-4"
          style={{
            position: 'sticky',
            top: 32,
            alignSelf: 'start',
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--gpm-gold-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              marginBottom: 16,
            }}
          >
            WHAT TO ASK
          </span>
          <h2
            id="numismatic-checklist-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(26px, 2.8vw, 34px)',
              fontWeight: 500,
              color: 'var(--gpm-walnut-deep)',
              lineHeight: 1.25,
              margin: 0,
              marginBottom: 20,
            }}
          >
            Three questions, in writing, to any provider you are considering.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 17,
              fontWeight: 400,
              color: 'var(--gpm-ink-body)',
              lineHeight: 1.6,
              margin: 0,
              marginBottom: 24,
            }}
          >
            If you are evaluating Gold IRA providers, these three questions
            &mdash; asked in writing, with written answers &mdash; will surface
            the structural information most relevant to your decision.
          </p>
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
            }}
          >
            ASK IN WRITING
          </span>
        </header>

        {/* Right rail — 8 cols. Three numbered question cards stacked
            vertically with hairline separators. */}
        <ol
          aria-labelledby="numismatic-checklist-heading"
          className="lg:col-span-8"
          style={{
            margin: 0,
            padding: 0,
            listStyle: 'none',
          }}
        >
          {ITEMS.map((it, i) => (
            <li
              key={it.num}
              style={{
                display: 'flex',
                gap: 24,
                padding: '28px 0',
                borderBottom: '1px solid var(--gpm-border-light)',
                ...(i === 0
                  ? { borderTop: '1px solid var(--gpm-border-light)', paddingTop: 28 }
                  : {}),
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 32,
                  fontWeight: 500,
                  color: 'var(--gpm-gold-deep)',
                  lineHeight: 1.0,
                  fontFeatureSettings: '"tnum"',
                  flexShrink: 0,
                  minWidth: 56,
                }}
              >
                {it.num}
              </span>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 19,
                    fontWeight: 500,
                    color: 'var(--gpm-ink-display)',
                    lineHeight: 1.35,
                    margin: 0,
                    marginBottom: 10,
                  }}
                >
                  {it.question}
                </h3>
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
                  {it.answer}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
