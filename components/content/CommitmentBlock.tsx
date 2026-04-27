import { LinkArrow } from '@/components/cta'

// CommitmentBlock — Block 6 of the homepage. Five operational commitments,
// numbered 01–05, with hairline rules between them. Two-column grid at
// desktop with the fifth commitment spanning both columns; single column at
// mobile. No card surface — commitments sit directly on canvas.
//
// Reference: DESIGN_BRIEF.md Section 14.3 (CommitmentBlock).

interface Commitment {
  number: string
  title: string
  body: string
  linkLabel?: string
  linkHref?: string
  /** Renders the item full-width across the two-column grid. */
  fullWidth?: boolean
}

interface CommitmentBlockProps {
  heading: string
  subhead?: string
  commitments: ReadonlyArray<Commitment>
}

export function CommitmentBlock({
  heading,
  subhead,
  commitments,
}: CommitmentBlockProps) {
  return (
    <section aria-label={heading}>
      <h2 className="text-h2 text-ink-display">{heading}</h2>
      {subhead ? (
        <p className="text-body text-ink-body mt-4 max-w-prose">{subhead}</p>
      ) : null}

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
        {commitments.map((c, i) => (
          <div
            key={c.number}
            className={
              c.fullWidth
                ? 'lg:col-span-2 py-8 border-t-[1px] border-border-light'
                : i < 2
                ? 'py-8 lg:border-t-[1px] lg:border-border-light first:border-t-[1px] border-border-light'
                : 'py-8 border-t-[1px] border-border-light'
            }
          >
            <p className="text-eyebrow text-gold-deep">{c.number}</p>
            <h3 className="text-h3 text-ink-display mt-3">{c.title}</h3>
            <p className="text-body-sm text-ink-body mt-3 max-w-prose">
              {c.body}
            </p>
            {c.linkLabel && c.linkHref ? (
              <div className="mt-4">
                <LinkArrow href={c.linkHref}>{c.linkLabel}</LinkArrow>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
