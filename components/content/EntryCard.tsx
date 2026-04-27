import { LinkArrow } from '@/components/cta'

// EntryCard — surface card with title, body, and a single arrow link.
// Used by EntryCardGrid (Block 2) and ThreePathsGrid (Block 8).
// Surface color background, no border, padding space-6.
//
// Reference: DESIGN_BRIEF.md Section 14.3 (EntryCard).

interface EntryCardProps {
  title: string
  body: string
  linkLabel: string
  linkHref: string
  /** Optional eyebrow tag — used by ThreePathsGrid to label "Path N". */
  tag?: string
}

export function EntryCard({
  title,
  body,
  linkLabel,
  linkHref,
  tag,
}: EntryCardProps) {
  return (
    <article className="bg-surface p-6 flex flex-col h-full">
      {tag ? <p className="text-eyebrow text-gold-deep mb-3">{tag}</p> : null}
      <h3 className="text-h3 text-ink-display">{title}</h3>
      <p className="text-body-sm text-ink-body mt-3 flex-grow">{body}</p>
      <div className="mt-6">
        <LinkArrow href={linkHref}>{linkLabel}</LinkArrow>
      </div>
    </article>
  )
}
