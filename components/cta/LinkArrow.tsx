import Link from 'next/link'

// LinkArrow — inline arrow link used in entry cards, pull-quotes, and
// commitment-block links. Resting color is the deeper editorial gold
// #9C7322 (3.67:1 against canvas cream #F2EDE0); on hover the link darkens
// to #7E5C10 (5.24:1, clears WCAG AA body) and the underline appears.
//
// History: the brand initially specified muted gold #C9A96C for resting
// (1.92:1 — fails WCAG AA at body-sm size). Audience tiebreaker — primary
// audience is 60-80, the demographic most affected by age-related
// contrast sensitivity — moved this off the "decorative-link signalling"
// position and onto a 3:1 minimum. New values clear 3:1 on cream while
// preserving the editorial-gold register. Approved by CMO 2026-04-28.
//
// Reference: DESIGN_BRIEF.md Section 14.5 (LinkArrow spec) +
// Section 7.5 contrast table (patched 2026-04-28).

interface LinkArrowProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function LinkArrow({ href, children, className = '' }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={`text-body-sm text-[#9C7322] hover:text-[#7E5C10] no-underline hover:underline transition-colors ${className}`}
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
