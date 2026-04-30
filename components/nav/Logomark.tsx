// Lockup placeholder per DESIGN_BRIEF.md Section 6 — direction only.
// Production artwork is an open decision (Section 38). This SVG approximates
// the geometry described in 6.1 (86×86 unit grid, 50u beam, 22u pans, 18u base,
// finial circle on top of central upright) and pairs it with the Source Serif
// "Grace" + small-caps "PRECIOUS METALS" wordmark separated by a hairline rule.

import Link from 'next/link'

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
  // Default variant per the production brief homepage spec:
  //   - scales icon: gold-secondary (#9C7322), proportional to wordmark
  //   - wordmark "Grace": Source Serif 4 weight 500, walnut-deep (#3D2817)
  //   - tagline "PRECIOUS METALS": Inter weight 600, gold-secondary (#9C7322),
  //     letter-spacing 0.20em
  // Reverse variant inverts colours for dark backgrounds (e.g. footer columns
  // or a future dark hero) — wordmark cream, tagline gold-muted.
  const isReverse = variant === 'reverse'
  const structural = isReverse ? '#C9A96C' : '#9C7322'
  const detail = isReverse ? '#C9A96C' : '#9C7322'
  const wordColor = isReverse ? '#F2EDE0' : '#3D2817'
  const ruleColor = isReverse ? '#C9A96C' : '#9C7322'
  const subtitleColor = isReverse ? '#C9A96C' : '#9C7322'

  // Scale: at standard lockup (Grace at 26px), mark is 36px and gap is 14px.
  // Tagline 10px at 26px wordmark per production brief; rule width 96px.
  const markPx = Math.round(size * (36 / 26))
  const gapPx = Math.round(size * (14 / 26))
  const subtitlePx = Math.max(9, Math.round(size * (10 / 26)))
  const rulePx = Math.round(size * (96 / 26))

  return (
    <Link
      href="/"
      aria-label="Grace Precious Metals — home"
      className="inline-flex items-center no-underline hover:no-underline"
      style={{ color: wordColor }}
    >
      <svg
        viewBox="0 0 86 86"
        width={markPx}
        height={markPx}
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Central upright */}
        <rect x="42" y="14" width="2" height="56" fill={structural} />
        {/* Finial */}
        <circle cx="43" cy="13" r="3" fill={structural} />
        {/* Beam */}
        <rect x="18" y="20" width="50" height="2" fill={structural} />
        {/* Suspension lines */}
        <line x1="22" y1="22" x2="22" y2="38" stroke={detail} strokeWidth="1" />
        <line x1="64" y1="22" x2="64" y2="38" stroke={detail} strokeWidth="1" />
        {/* Left pan (triangular) */}
        <polygon points="11,38 33,38 22,46" fill={detail} />
        {/* Right pan (triangular) */}
        <polygon points="53,38 75,38 64,46" fill={detail} />
        {/* Base */}
        <rect x="34" y="68" width="18" height="2" fill={structural} />
      </svg>

      <span
        style={{
          marginLeft: gapPx,
          display: 'inline-flex',
          flexDirection: 'column',
          lineHeight: 1,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: size,
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: wordColor,
            lineHeight: 1.05,
          }}
        >
          Grace
        </span>
        {hideTagline ? null : (
          <>
            <span
              aria-hidden="true"
              style={{
                display: 'block',
                width: rulePx,
                height: 0.5,
                background: ruleColor,
                marginTop: 5,
                marginBottom: 5,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-sans), system-ui, sans-serif',
                fontSize: subtitlePx,
                fontWeight: 600,
                letterSpacing: '0.20em',
                color: subtitleColor,
                lineHeight: 1,
              }}
            >
              PRECIOUS METALS
            </span>
          </>
        )}
      </span>
    </Link>
  )
}
