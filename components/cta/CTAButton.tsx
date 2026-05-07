import Link from 'next/link'

// CTAButton — supports both the legacy primary/secondary API (used by the
// pre-2026-04-30 v3.5 components) and the production-brief tier system
// (Tier 1 page-primary gold-filled, Tier 2 form submit, Tier 3 header
// outlined-walnut hover-fill). Tier 4 reading-flow links are LinkArrow's
// job and not handled here.
//
// Reference: production brief CTA System (four tiers); DESIGN_BRIEF.md §14.5
// (legacy ButtonPrimary / ButtonSecondary).

type Variant = 'primary' | 'secondary'
type Tone = 'default' | 'inverse'
type Tier = 1 | 2 | 3

interface CTAButtonProps {
  href: string
  /** Production-brief tier: 1 page-primary, 2 form submit, 3 header outlined. */
  tier?: Tier
  /** Legacy variant — pre-2026-04-30 v3.5 components only. */
  variant?: Variant
  /** Legacy inverse tone — pre-2026-04-30 v3.5 components only. */
  tone?: Tone
  children: React.ReactNode
  className?: string
  /** Per-call-site style overrides — merged after tier defaults so callers can compress mobile CTAs etc. */
  style?: React.CSSProperties
  onClick?: () => void
}

// ---- Legacy classes (v3.5 components) -------------------------------

const LEGACY_BASE =
  'inline-block px-6 py-3 rounded-sm text-body no-underline text-center transition-colors hover:no-underline'

const LEGACY_VARIANT_DEFAULT: Record<Variant, string> = {
  primary: 'bg-walnut text-canvas hover:bg-walnut',
  secondary: 'border-[1px] border-walnut text-walnut hover:bg-canvas-deep',
}

const LEGACY_VARIANT_INVERSE: Record<Variant, string> = {
  primary: 'bg-canvas text-ink-display hover:bg-canvas',
  secondary: 'border-[1px] border-canvas text-canvas hover:bg-canvas/10',
}

// ---- Production-brief tier classes ----------------------------------

// Tier 1 — page-primary action. Gold-filled; walnut-deep text (per
// accessibility-review 2026-05-07: white-on-gold-deep is 2.82:1, fails
// WCAG AA. Walnut-deep on gold-deep is 4.91:1, passes AA at body size).
// 6px radius; Inter 500 14px; 14px 32px padding. Hover: gold-hover.
const TIER_1_CLASS =
  'inline-block bg-gold-deep text-walnut-deep no-underline text-center transition-colors duration-color hover:bg-gold-hover hover:text-walnut-deep hover:no-underline'
const TIER_1_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  fontWeight: 500,
  padding: '14px 32px',
  borderRadius: 6,
  lineHeight: 1.2,
}

// Tier 2 — form submission. Gold-filled; white text; 4px radius; Inter
// 500 14px; 14px 0 padding (full container width — caller supplies width).
// (2026-04-30 second-pass correction: bumped from 13px / 12px 0 so the
// CTA reads as a confident button at the live form panel size. The two
// form components — HeroBriefingForm and BriefingForm — render identical
// inline styles per verification criterion 4 and stay in sync with this
// spec.)
const TIER_2_CLASS =
  'inline-block w-full bg-gold-deep text-walnut-deep no-underline text-center transition-colors duration-color hover:bg-gold-hover hover:text-walnut-deep hover:no-underline'
const TIER_2_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  fontWeight: 500,
  padding: '14px 0',
  borderRadius: 4,
  lineHeight: 1.2,
}

// Tier 3 — persistent navigation (header CTAs). Outlined walnut;
// transparent bg; 2px radius; Inter 500 14px; 10px 20px padding. Hover
// fills walnut, text flips to canvas.
// (2026-04-30 correction: bumped from 13px / 9px 18px to give the header
// chrome more visual weight per CMO desktop-render review.)
const TIER_3_CLASS =
  'inline-block border-[1px] border-walnut text-walnut bg-transparent no-underline text-center transition-colors duration-color hover:bg-walnut hover:text-canvas hover:no-underline'
const TIER_3_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  fontWeight: 500,
  padding: '10px 20px',
  borderRadius: 2,
  lineHeight: 1.2,
}

const TIER_CLASS: Record<Tier, string> = { 1: TIER_1_CLASS, 2: TIER_2_CLASS, 3: TIER_3_CLASS }
const TIER_STYLE: Record<Tier, React.CSSProperties> = { 1: TIER_1_STYLE, 2: TIER_2_STYLE, 3: TIER_3_STYLE }

export function CTAButton({
  href,
  tier,
  variant = 'primary',
  tone = 'default',
  children,
  className = '',
  style,
  onClick,
}: CTAButtonProps) {
  if (tier) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${TIER_CLASS[tier]} ${className}`}
        style={{ ...TIER_STYLE[tier], ...style }}
      >
        {children}
      </Link>
    )
  }
  const variantClass =
    tone === 'inverse' ? LEGACY_VARIANT_INVERSE[variant] : LEGACY_VARIANT_DEFAULT[variant]
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${LEGACY_BASE} ${variantClass} ${className}`}
      style={{ lineHeight: 1.2, ...style }}
    >
      {children}
    </Link>
  )
}
