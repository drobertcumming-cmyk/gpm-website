// /pricing/buyback — Evaluation Checklist.
// Four numbered questions with answers. Each item: numeric eyebrow
// (01/02/03/04) on the left + question + answer on the right.
// border-light hairlines between items, top border on first.

interface Item {
  num: string
  question: string
  answer: React.ReactNode
}

const ITEMS: Item[] = [
  {
    num: '01',
    question: '“What is your buyback price relative to spot?”',
    answer: (
      <>
        The answer should be a specific number &mdash; ideally &ldquo;at spot&rdquo; or
        a stated percentage below spot. If the answer is &ldquo;competitive&rdquo; or
        &ldquo;market-based,&rdquo; it means the markdown is discretionary and
        unpublished.
      </>
    ),
  },
  {
    num: '02',
    question: '“Is there a minimum holding period before I can sell?”',
    answer: (
      <>
        Some dealers impose a 12&ndash;24 month holding period during which buyback is
        unavailable or penalized. This locks the customer in and removes competitive
        pressure on the exit price.
      </>
    ),
  },
  {
    num: '03',
    question: '“Are there liquidation fees, wire fees, or processing charges on exit?”',
    answer: (
      <>
        These are exit costs by another name. A dealer who buys back &ldquo;at
        spot&rdquo; but charges a $250 liquidation fee and a $50 wire fee has not, in
        practice, bought back at spot.
      </>
    ),
  },
  {
    num: '04',
    question: '“Will you put the buyback commitment in writing before I fund?”',
    answer: (
      <>
        A verbal commitment is not a commitment. If the dealer will not document the
        buyback terms in a signed agreement before you transfer funds, the terms are
        not binding and can change at the dealer&rsquo;s discretion.
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
