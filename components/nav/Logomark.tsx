import Link from 'next/link'

// Logomark — refactored 2026-05-18 to align with the canonical lockup at
// public/brand/grace-logo-canonical.svg (CMO sitewide logo audit v1).
//
// Lockup geometry — locked, single canonical source:
//   - Icon: balance scales in gold-secondary (#9C7322) with a filled top
//     knob, solid vertical post, filled base foot, filled crossbar, two
//     suspension links, and two open Q-curve pans. ViewBox 0 0 64 66.
//   - Wordmark "Grace" — Source Serif 4 weight 500, walnut-deep (#3D2817).
//   - Tagline "PRECIOUS METALS" — Inter weight 600, gold-secondary
//     (#9C7322), letter-spaced 0.18em, hidden below 480px via hideTagline.
//
// Brand canonical SVG (file copy): public/brand/grace-logo-canonical.svg.
// The icon paths below are kept in lockstep with that file. If the
// canonical asset changes, update both this component and the favicon.
//
// Color variants (variant='reverse') retired per CMO audit v1: the
// canonical lockup is the only version. Footer / dark-context contrast
// is flagged for CMO review, not solved by a recolored variant.

interface LogomarkProps {
  /** Pixel height of "Grace" wordmark line. Mark scales proportionally. */
  size?: number
  /** Hide the "PRECIOUS METALS" tagline (used below 480px per the production brief). */
  hideTagline?: boolean
}

export function Logomark({ size = 26, hideTagline = false }: LogomarkProps) {
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
      style={{ color: 'var(--gpm-walnut-deep)' }}
    >
      {/* Icon — canonical balance scales (mirrors public/favicon.svg and
          the icon group in public/brand/grace-logo-canonical.svg). */}
      <svg
        viewBox="0 0 64 66"
        width={markPx}
        height={markPx}
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <g fill="#9C7322" stroke="#9C7322">
          <circle cx="32" cy="6" r="5" />
          <rect x="30" y="11" width="4" height="50" />
          <rect x="18" y="61" width="28" height="3.5" rx="0.5" />
          <rect x="0" y="20" width="64" height="3" rx="0.5" />
          <rect x="6" y="23" width="2" height="6" />
          <rect x="56" y="23" width="2" height="6" />
        </g>
        <path
          d="M 1 29 Q 7 39 13 29"
          fill="none"
          stroke="#9C7322"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 51 29 Q 57 39 63 29"
          fill="none"
          stroke="#9C7322"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
              color: 'var(--gpm-gold-secondary)',
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
