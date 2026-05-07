// /who-we-are — Active Refusals list.
// Five items, each prefixed with a state-error '×' glyph signifying a
// structural refusal. Border-light hairlines between rows; top border
// on first item.

interface Refusal {
  headline: string
  body: string
}

const REFUSALS: Refusal[] = [
  {
    headline: 'No commission-based advisors.',
    body: 'The compensation model is the structural reason category sales calls feel the way they do. We removed it.',
  },
  {
    headline: 'No numismatic upsell.',
    body: 'The product category most associated with documented retirement-account consumer harm is not on our catalogue at any margin.',
  },
  {
    headline: 'No buyback markdown.',
    body: 'When you sell back, we pay the spot price on the day. There is no second margin on the way out.',
  },
  {
    headline: 'No phone-gate on pricing.',
    body: 'The price is on the page before any conversation. The pricing page does not require a name, an email, or a phone call to read.',
  },
  {
    headline: 'No financial, tax, or legal advice framing.',
    body: 'We are a precious metals dealer. The decision about whether a Gold IRA is right for you is yours, with your own advisors.',
  },
]

export function RefusalsList() {
  return (
    <ul style={{ marginTop: 36, padding: 0, listStyle: 'none' }}>
      {REFUSALS.map((r, i) => (
        <li
          key={r.headline}
          style={{
            display: 'flex',
            gap: 16,
            alignItems: 'flex-start',
            padding: '20px 0',
            borderBottom: '1px solid var(--gpm-border-light)',
            ...(i === 0
              ? { borderTop: '1px solid var(--gpm-border-light)' }
              : {}),
          }}
        >
          <span
            aria-hidden="true"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 18,
              fontWeight: 700,
              color: 'var(--gpm-state-error)',
              flexShrink: 0,
              lineHeight: 1.5,
            }}
          >
            ×
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
            <strong
              style={{
                fontWeight: 500,
                color: 'var(--gpm-ink-display)',
              }}
            >
              {r.headline}
            </strong>{' '}
            {r.body}
          </p>
        </li>
      ))}
    </ul>
  )
}
