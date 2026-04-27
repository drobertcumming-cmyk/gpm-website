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
}

export function Logomark({
  variant = 'default',
  size = 28,
}: LogomarkProps) {
  // Variant A (default) per Section 6.4: deep gold structural elements + muted
  // gold detail; "Grace" in muted gold; rule in deep gold; small caps in body
  // ink. Variant B (reverse) collapses the two-tone mark into single muted gold
  // and renders body text in cream.
  const isReverse = variant === 'reverse'
  const structural = isReverse ? '#C9A96C' : '#B8962E'
  const detail = '#C9A96C'
  const wordColor = '#C9A96C'
  const ruleColor = isReverse ? '#C9A96C' : '#B8962E'
  const subtitleColor = isReverse ? '#F2EDE0' : '#1F1B16'

  // Scale: at standard lockup (Grace at 38px), mark is 64px and gap is 24px.
  // Maintain that ratio with the size prop driving the wordmark line height.
  const markPx = Math.round(size * (64 / 38))
  const gapPx = Math.round(size * (24 / 38))
  const subtitlePx = Math.max(9, Math.round(size * (11 / 38)))
  const rulePx = Math.round(size * (140 / 38))

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
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            width: rulePx,
            height: 0.5,
            background: ruleColor,
            marginTop: 6,
            marginBottom: 6,
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-sans), system-ui, sans-serif',
            fontSize: subtitlePx,
            fontWeight: 500,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: subtitleColor,
            lineHeight: 1,
          }}
        >
          Precious Metals
        </span>
      </span>
    </Link>
  )
}
