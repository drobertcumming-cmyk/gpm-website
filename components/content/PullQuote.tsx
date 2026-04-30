import { LinkArrow } from '@/components/cta'

// PullQuote — italic serif anchor quote. No rendered quote marks; the
// typography signals quotation. Attribution in text-body-sm with em-dash
// prefix. Optional left-rule walnut for emphasis. Optional LinkArrow below
// (right-aligned) when the quote leads into supporting content.
//
// Optional headshot to the left of the quote at desktop (33% / 67% split)
// — used on the homepage's William pull-quote where the speaker's face
// anchors the quote. The current homepage headshot is a PROVISIONAL
// placeholder (Jean Daniel Photography, Unsplash) — replace with William's
// commissioned portrait before launch. See STOCK_IMAGERY_PROVISIONAL.md.
//
// Quote size scales up to text-h2 (32px serif italic) when used as a
// load-bearing homepage anchor. Brief Section 14.3 specifies text-quote
// (19px) for inline pull-quotes; the larger size applies only to the
// emphasized + headshot configuration on the homepage.
//
// Reference: DESIGN_BRIEF.md Section 14.3.

interface PullQuoteProps {
  children: React.ReactNode
  attribution: string
  emphasized?: boolean
  linkLabel?: string
  linkHref?: string
  /** Optional headshot src — when provided renders 33%/67% split at desktop. */
  headshotSrc?: string
  /** Alt text for the headshot. */
  headshotAlt?: string
  /** Placeholder label rendered if headshotSrc is omitted. */
  headshotLabel?: string
}

export function PullQuote({
  children,
  attribution,
  emphasized = false,
  linkLabel,
  linkHref,
  headshotSrc,
  headshotAlt,
  headshotLabel,
}: PullQuoteProps) {
  const hasHeadshot = Boolean(headshotSrc || headshotLabel)

  const quoteBlock = (
    <figure
      className={emphasized ? 'border-l-[3px] border-walnut pl-6' : undefined}
    >
      <blockquote
        className="text-ink-display"
        style={{
          fontFamily: 'var(--font-serif), Georgia, serif',
          fontStyle: 'italic',
          fontSize: 32,
          lineHeight: 1.25,
          fontWeight: 400,
        }}
      >
        {children}
      </blockquote>
      <figcaption className="text-body-sm text-ink-body mt-6">
        &mdash; {attribution}
      </figcaption>
      {linkLabel && linkHref ? (
        <div className="mt-6 text-right">
          <LinkArrow href={linkHref}>{linkLabel}</LinkArrow>
        </div>
      ) : null}
    </figure>
  )

  if (!hasHeadshot) {
    return quoteBlock
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
      {/* Headshot column — explicit aspect-ratio gives wrapper a definite
          size that approximately matches the quote+attribution column at
          the homepage's design viewport (1440). At 285px wide, 7:8 = 326
          tall, which matches the quote+attribution natural height inside
          ±8px. Tradeoff: at other viewports the alignment is approximate
          rather than perfectly stretch-matched, but this is robust against
          font-rendering and image-intrinsic dimension quirks that prevent
          a clean dynamic stretch. */}
      <div
        className="relative bg-canvas-deep lg:basis-1/3 lg:shrink-0 lg:aspect-[7/8]"
      >
        {headshotSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={headshotSrc}
            alt={headshotAlt ?? ''}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
        ) : (
          <div
            role="img"
            aria-label={headshotLabel ?? '[HEADSHOT — to be supplied]'}
            className="absolute inset-0 flex items-center justify-center"
          >
            <p className="text-body-sm text-ink-body opacity-70 text-center px-4 italic">
              {headshotLabel ?? '[HEADSHOT — to be supplied]'}
            </p>
          </div>
        )}
      </div>
      <div className="lg:basis-2/3">{quoteBlock}</div>
    </div>
  )
}
