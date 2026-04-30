import { LinkArrow } from '@/components/cta'
import { ImagePlaceholder } from './ImagePlaceholder'

// EntryCard — surface card with title, body, and a single arrow link.
// Used by EntryCardGrid (Block 2) and ThreePathsGrid (Block 8).
// Surface color background, no border, padding space-6.
//
// Optional image slot rendered above the title — used by ThreePathsGrid
// to carry editorial photography per CMO direction. Block 2 cards on the
// homepage stay typographic and do not use this slot.
//
// Reference: DESIGN_BRIEF.md Section 14.3 (EntryCard).

interface EntryCardProps {
  title: string
  body: string
  linkLabel: string
  linkHref: string
  /** Optional eyebrow tag — used by ThreePathsGrid to label "Path N". */
  tag?: string
  /** Optional editorial image label rendered above the title (placeholder fallback). */
  imageLabel?: string
  /** Aspect ratio for the image, default 3 / 2 horizontal. */
  imageAspect?: string
  /** Optional real image source under /public. When provided, renders Image. */
  imageSrc?: string
  /** Alt text for the real image. */
  imageAlt?: string
}

export function EntryCard({
  title,
  body,
  linkLabel,
  linkHref,
  tag,
  imageLabel,
  imageAspect = '3 / 2',
  imageSrc,
  imageAlt,
}: EntryCardProps) {
  return (
    <article className="bg-surface flex flex-col h-full overflow-hidden">
      {imageLabel ? (
        <ImagePlaceholder
          label={imageLabel}
          aspect={imageAspect}
          className="bg-canvas-deep"
          src={imageSrc}
          alt={imageAlt}
          width={800}
        />
      ) : null}
      <div className="p-[20px] flex flex-col flex-grow">
        {tag ? (
          <p className="text-eyebrow text-gold-deep mb-3">{tag}</p>
        ) : null}
        <h3 className="text-h3 text-ink-display">{title}</h3>
        <p className="text-body-sm text-ink-body mt-3 flex-grow">{body}</p>
        <div className="mt-6">
          <LinkArrow href={linkHref}>{linkLabel}</LinkArrow>
        </div>
      </div>
    </article>
  )
}
