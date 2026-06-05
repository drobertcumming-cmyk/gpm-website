import Image from 'next/image'
import Link from 'next/link'
import { withBase } from '@/lib/basepath'

// Production-brief homepage — Ambassador Band (Marjorie Taylor Greene).
//
// Sits between BullionGrid (§6) and WilliamPullQuote (§7) in the section
// order. Per CMO override on 2026-06-05, the "no celebrity endorsements
// at launch" non-negotiable in CLAUDE.md is suspended for this section.
// CLAUDE.md should be updated in a follow-up commit to reflect the new
// policy so the rule and the live site stop conflicting.
//
// FTC compliance: the material-connection disclosure line at the foot of
// the band is the CMO-supplied verbatim copy. Do not edit without CMO +
// counsel sign-off.
//
// Outstanding items at ship time (flagged in commit message):
//   - Body copy below is reconstructed from a low-resolution screenshot;
//     it has been calibrated to Plain Counsel voice and to the four
//     CFO-cleared operational facts. CMO to confirm against the source.
//   - Verbatim MTG quote: NOT shipped. The spec showed a placeholder
//     ([Cleared verbatim quote — pending CMO supply]) which is not
//     production-ready. The quote block is omitted until the cleared
//     text arrives; wire it in then.
//   - CTA link target: "See why Marjorie partnered with Grace" links to
//     /briefing as a placeholder destination. If a dedicated ambassador
//     landing page is planned, the href should swap to that route.

const SECTION_PAD_X = 32
const SECTION_PAD_Y = 96
const MAX_WIDTH = 1200

const eyebrowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: 'var(--gpm-gold-secondary)',
  marginBottom: 18,
}

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'clamp(28px, 3.4vw, 36px)',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.003em',
  color: 'var(--gpm-walnut-deep)',
  marginBottom: 22,
}

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(16px, 1.2vw, 17px)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--gpm-walnut-deep)',
  marginBottom: 28,
  maxWidth: 600,
}

const ctaStyle: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  fontWeight: 600,
  color: '#FFFFFF',
  background: 'var(--gpm-gold-deep)',
  border: '1.5px solid var(--gpm-gold-deep)',
  borderRadius: 2,
  padding: '12px 24px',
  textDecoration: 'none',
  transition: 'background 0.2s ease, border-color 0.2s ease',
}

const disclosureStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontStyle: 'italic',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 1.55,
  color: 'var(--gpm-walnut-mid)',
  marginTop: 22,
  maxWidth: 600,
}

export function AmbassadorBand() {
  return (
    <section
      aria-labelledby="ambassador-heading"
      className="mx-auto"
      style={{
        maxWidth: MAX_WIDTH,
        paddingLeft: SECTION_PAD_X,
        paddingRight: SECTION_PAD_X,
        paddingTop: SECTION_PAD_Y,
        paddingBottom: SECTION_PAD_Y,
      }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-[280px_1fr]"
        style={{ gap: 48, alignItems: 'start' }}
      >
        {/* Portrait */}
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              width: '100%',
              maxWidth: 280,
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              borderRadius: 4,
              border: '1px solid rgba(184, 150, 46, 0.35)',
              background: 'var(--gpm-canvas-deep)',
              position: 'relative',
            }}
          >
            <Image
              src={withBase('/images/homepage/mtg-portrait.jpg')}
              alt="Marjorie Taylor Greene"
              fill
              sizes="(max-width: 1024px) 100vw, 280px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Copy block */}
        <div style={{ minWidth: 0 }}>
          <p style={eyebrowStyle}>GPM BRAND AMBASSADOR</p>

          <h2 id="ambassador-heading" style={headlineStyle}>
            Why Marjorie Taylor Greene stands with Grace
          </h2>

          <p style={bodyStyle}>
            Marjorie Taylor Greene has been a longtime customer, and she argues that American
            families deserve to be treated straight and to keep what they&rsquo;ve built. That&rsquo;s
            the principle she found at Grace. We publish our price on the page before the first
            phone call — an 11.1% all-in spread, no admin fee, and a buyback at spot that never
            falls below. No commissioned sales force, no rare-coin upsell, no one we hire to chase
            you. It&rsquo;s a plain way of doing business, built for families who are tired of being
            sold to — and it&rsquo;s why she stands with us.
          </p>

          <Link
            href="/briefing"
            style={ctaStyle}
          >
            See why Marjorie partnered with Grace
          </Link>

          <p style={disclosureStyle}>
            Marjorie Taylor Greene has a paid material connection with Grace Precious Metals.
          </p>
        </div>
      </div>
    </section>
  )
}
