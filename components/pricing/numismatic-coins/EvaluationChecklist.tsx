// /pricing/numismatic-coins — Evaluation Checklist.
// Three numbered questions with answers. Each item: numeric eyebrow
// (01/02/03) on the left + question + answer on the right.
// border-light hairlines between items, top border on first.

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
    <div style={{ marginTop: 36 }}>
      {ITEMS.map((it, i) => (
        <div
          key={it.num}
          style={{
            display: 'flex',
            gap: 20,
            padding: '24px 0',
            borderBottom: '1px solid var(--gpm-border-light)',
            ...(i === 0 ? { borderTop: '1px solid var(--gpm-border-light)' } : {}),
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--gpm-gold-secondary)',
              letterSpacing: '0.08em',
              flexShrink: 0,
              paddingTop: 3,
            }}
          >
            {it.num}
          </span>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 500,
                color: 'var(--gpm-ink-display)',
                lineHeight: 1.35,
                margin: 0,
                marginBottom: 8,
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
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              {it.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
