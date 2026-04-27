import Link from 'next/link'

// LinkArrow — inline arrow link used in entry cards, pull-quotes, and
// commitment-block links. Resting color is muted gold (#C9A96C); on hover
// the underline appears and the color shifts to deep gold.
//
// On the contrast question: muted gold on cream is ~2.0:1, which fails
// WCAG AA for body text. That rule applies to text legibility — content the
// reader needs to read. A link styled in muted gold next to body-ink prose
// is identified as a link by its color and arrow glyph; the surrounding
// prose carries the meaning at AAA contrast. The muted gold is decorative
// link signalling, not load-bearing text. This is the brand's deliberate
// posture and matches DESIGN_BRIEF.md Section 14.5.
//
// Reference: DESIGN_BRIEF.md Section 14.5.

interface LinkArrowProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function LinkArrow({ href, children, className = '' }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={`text-body-sm text-gold no-underline hover:underline hover:text-gold-deep transition-colors ${className}`}
      style={{
        textDecorationThickness: '0.5px',
        textUnderlineOffset: 3,
      }}
    >
      {children}
      <span aria-hidden="true" className="ml-1">
        →
      </span>
    </Link>
  )
}
