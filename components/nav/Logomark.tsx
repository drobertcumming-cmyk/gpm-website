import Link from 'next/link'

// Logomark — refactored 2026-05-01 to match Manus reference and the
// GPM_Pricing_ClaudeCode_Brief_v2 lockup spec.
//
// Lockup geometry:
//   - Small line-drawn balance/scale icon left, ~28–32px square at default
//     wordmark size (26px). Icon strokes/fills use currentColor so the
//     mark inherits walnut-deep in header context (default variant) and
//     cream in footer/reverse context.
//   - Wordmark "Grace" — Source Serif 4 weight 500, walnut-deep (inherits
//     via currentColor from the wrapping Link). Reverse swaps to cream.
//   - Tagline "PRECIOUS METALS" stacked directly below the wordmark in
//     Inter all-caps, ~10px at default scale, letter-spaced 0.18em, in
//     gold-secondary (#9C7322). Reverse swaps to gold-muted (#C9A96C) for
//     legibility against walnut-deep.
//
// The decorative hairline rule between wordmark and tagline (carried in
// the v1 lockup) is retired — the brief specifies a clean two-line stack.
// Total header lockup height ~40px at default scale.
//
// All colors reference CSS custom properties (var(--gpm-*)). Zero
// hardcoded hex.

interface LogomarkProps {
  variant?: 'default' | 'reverse'
  /** Pixel height of "Grace" wordmark line. Mark scales proportionally. */
  size?: number
  /** Hide the "PRECIOUS METALS" tagline (used below 480px viewport per the production brief). */
  hideTagline?: boolean
}

export function Logomark({
  variant = 'default',
  size = 26,
  hideTagline = false,
}: LogomarkProps) {
  const isReverse = variant === 'reverse'
  // The Link's `color` drives the wordmark and the SVG mark via currentColor.
  // Tagline gets an explicit color override (gold accent) below.
  const lockupColor = isReverse ? 'var(--gpm-canvas)' : 'var(--gpm-walnut-deep)'
  const taglineColor = isReverse ? 'var(--gpm-gold-primary)' : 'var(--gpm-gold-secondary)'

  // Mark scale: ~1.18× the wordmark line-height. At default size 26 the
  // mark renders at 31px (within the brief's 28–32px range).
  const markPx = Math.round(size * 1.18)
  const gapPx = Math.round(size * (12 / 26))
  const taglinePx = Math.max(9, Math.round(size * (10 / 26)))

  return (
    <Link
      href="/"
      aria-label="Grace Precious Metals — home"
      className="inline-flex items-center no-underline hover:no-underline"
      style={{ color: lockupColor }}
    >
      <svg
        viewBox="0 0 86 86"
        width={markPx}
        height={markPx}
        aria-hidden="true"
        style={{ flexShrink: 0 }}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Central upright */}
        <line x1="43" y1="14" x2="43" y2="70" />
        {/* Finial */}
        <circle cx="43" cy="11" r="2.5" fill="currentColor" stroke="none" />
        {/* Beam */}
        <line x1="18" y1="22" x2="68" y2="22" />
        {/* Suspension lines */}
        <line x1="22" y1="22" x2="22" y2="38" strokeWidth="1.25" />
        <line x1="64" y1="22" x2="64" y2="38" strokeWidth="1.25" />
        {/* Left pan (triangular) */}
        <polygon points="11,38 33,38 22,46" fill="currentColor" stroke="none" />
        {/* Right pan (triangular) */}
        <polygon points="53,38 75,38 64,46" fill="currentColor" stroke="none" />
        {/* Base */}
        <line x1="34" y1="70" x2="52" y2="70" />
      </svg>

      <span
        style={{
          marginLeft: gapPx,
          display: 'inline-flex',
          flexDirection: 'column',
          lineHeight: 1,
          gap: 3,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: size,
            fontWeight: 500,
            letterSpacing: '0.02em',
            lineHeight: 1.0,
          }}
        >
          Grace
        </span>
        {hideTagline ? null : (
          <span
            style={{
              fontFamily: 'var(--font-sans), system-ui, sans-serif',
              fontSize: taglinePx,
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: taglineColor,
              lineHeight: 1.0,
            }}
          >
            PRECIOUS METALS
          </span>
        )}
      </span>
    </Link>
  )
}
