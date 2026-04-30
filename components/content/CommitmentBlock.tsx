import { LinkArrow } from '@/components/cta'

// CommitmentBlock — legacy v3.5 commitment list component. Generic
// commitment list with hairline rules between rows; no card surface;
// typography carries the architectural weight (gold-deep numerals, walnut
// headings). Renders whatever array is passed via the `commitments` prop.
//
// **Not used on the post-2026-04-29 homepage.** The production-brief homepage
// uses `FoundationalCommitments.tsx` (four cards in a 4-col equal-height grid)
// instead. This legacy component is retained for non-homepage pages that
// still render the inline commitment list (none in current Phase 2 scope).
//
// If you reuse this component, the site-wide standard is **four foundational
// commitments** (post-2026-04-30) — do not pass a fifth commitment or a
// "No phone-gate on pricing" entry. See CLAUDE.md non-negotiables.
//
// Reference: DESIGN_BRIEF.md Section 14.3 (CommitmentBlock, legacy).

interface Commitment {
  number: string
  title: string
  body: string
  linkLabel?: string
  linkHref?: string
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

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-0">
        {commitments.map((c, i) => (
          <div
            key={c.number}
            className={
              i < 3
                ? 'py-8 lg:border-t-[1px] lg:border-border-light first:border-t-[1px] border-border-light'
                : 'py-8 border-t-[1px] border-border-light'
            }
          >
            <p className="text-h3 text-gold-deep">{c.number}</p>
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
