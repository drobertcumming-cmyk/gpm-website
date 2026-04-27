import Link from 'next/link'

// CTAButton — primary (walnut bg, cream text) and secondary (walnut outline,
// transparent bg, walnut text). Used everywhere the brief calls for a
// rectangular button: hero CTAs, advisor / briefing prompts, header buttons.
//
// Reference: DESIGN_BRIEF.md Section 14.5 (ButtonPrimary / ButtonSecondary).

type Variant = 'primary' | 'secondary'
type Tone = 'default' | 'inverse'

interface CTAButtonProps {
  href: string
  variant?: Variant
  /** 'inverse' is the dark-canvas (mobile takeover) treatment. */
  tone?: Tone
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const BASE =
  'inline-block px-6 py-3 rounded-sm text-body no-underline text-center transition-colors hover:no-underline'

const VARIANT_DEFAULT: Record<Variant, string> = {
  primary: 'bg-walnut text-canvas hover:bg-walnut',
  secondary: 'border-[1px] border-walnut text-walnut hover:bg-canvas-deep',
}

const VARIANT_INVERSE: Record<Variant, string> = {
  primary: 'bg-canvas text-ink-display hover:bg-canvas',
  secondary: 'border-[1px] border-canvas text-canvas hover:bg-canvas/10',
}

export function CTAButton({
  href,
  variant = 'primary',
  tone = 'default',
  children,
  className = '',
  onClick,
}: CTAButtonProps) {
  const variantClass =
    tone === 'inverse' ? VARIANT_INVERSE[variant] : VARIANT_DEFAULT[variant]
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${BASE} ${variantClass} ${className}`}
      style={{ lineHeight: 1.2 }}
    >
      {children}
    </Link>
  )
}
