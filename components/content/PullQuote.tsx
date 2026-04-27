import { LinkArrow } from '@/components/cta'

// PullQuote — italic serif text-quote. No rendered quote marks; the
// typography signals quotation. Attribution in text-body-sm with em-dash
// prefix. Optional left-rule walnut for emphasis. Optional LinkArrow below
// (right-aligned) when the quote leads into supporting content.
//
// Reference: DESIGN_BRIEF.md Section 14.3.

interface PullQuoteProps {
  children: React.ReactNode
  attribution: string
  emphasized?: boolean
  linkLabel?: string
  linkHref?: string
}

export function PullQuote({
  children,
  attribution,
  emphasized = false,
  linkLabel,
  linkHref,
}: PullQuoteProps) {
  return (
    <figure
      className={emphasized ? 'border-l-[3px] border-walnut pl-6' : undefined}
    >
      <blockquote className="text-quote text-ink-body">{children}</blockquote>
      <figcaption className="text-body-sm text-ink-body mt-4">
        &mdash; {attribution}
      </figcaption>
      {linkLabel && linkHref ? (
        <div className="mt-6 text-right">
          <LinkArrow href={linkHref}>{linkLabel}</LinkArrow>
        </div>
      ) : null}
    </figure>
  )
}
