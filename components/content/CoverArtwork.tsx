import Image from 'next/image'
import { withBase } from '@/lib/basepath'

// Production-brief homepage §10 — briefing cover artwork.
// 320x414 desktop, 240x312 mobile. CSS 3D transform with oxblood face,
// page-edge stripe texture, drop shadow. Internal layout: wordmark +
// tagline + title + italic subtitle + photograph zone + footer with verse
// + edition line.
//
// Reference: production brief §10; homepage_copy_v3_6.md §10 cover artwork.

export function CoverArtwork() {
  return (
    <div
      aria-hidden="true"
      style={{
        perspective: '2400px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        className="cover-3d"
        style={{
          width: 'clamp(240px, 30vw, 320px)',
          aspectRatio: '320 / 414',
          transform: 'rotateY(-15deg) rotateX(3deg)',
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(-4px 8px 28px rgba(45, 38, 32, 0.32))',
          position: 'relative',
        }}
      >
        {/* Page-edge stripe texture (right side, simulating paper edges) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: 6,
            background:
              'repeating-linear-gradient(to bottom, #F8F5EB 0px, #F8F5EB 1px, #D5CDB6 1px, #D5CDB6 2px)',
            transform: 'translateX(100%) translateZ(-3px)',
            transformOrigin: 'left center',
          }}
        />

        {/* Cover face — oxblood */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--gpm-oxblood)',
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: '2px 4px 4px 2px',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 22px',
            color: '#F2EDE0',
            overflow: 'hidden',
          }}
        >
          {/* Wordmark + tagline */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: 22,
                color: '#F2EDE0',
                margin: 0,
                lineHeight: 1,
              }}
            >
              Grace
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: 8,
                letterSpacing: '0.20em',
                color: 'rgba(242, 237, 224, 0.85)',
                margin: '4px 0 0 0',
              }}
            >
              PRECIOUS METALS
            </p>
          </div>

          {/* Title */}
          <div style={{ marginTop: 28, textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: 22,
                color: '#F2EDE0',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              The Secret
              <br />
              Gold Briefing
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 12,
                color: 'rgba(242, 237, 224, 0.85)',
                lineHeight: 1.4,
                marginTop: 12,
                paddingLeft: 12,
                paddingRight: 12,
              }}
            >
              What the Other IRA Companies Hide From You.
            </p>
          </div>

          {/* Photograph zone — fills remaining vertical space */}
          <div
            style={{
              flexGrow: 1,
              marginTop: 14,
              marginBottom: 14,
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              background: 'rgba(0,0,0,0.18)',
            }}
          >
            <Image
              src={withBase('/images/homepage/briefing-cover-photo.jpg')}
              alt=""
              fill
              sizes="320px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* Footer — verse + edition */}
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 9,
                fontWeight: 400,
                color: 'rgba(242, 237, 224, 0.85)',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              PROVERBS 11:1 &middot; A just weight is His delight.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: 7,
                letterSpacing: '0.12em',
                color: 'rgba(242, 237, 224, 0.65)',
                margin: '6px 0 0 0',
              }}
            >
              GRACE PRECIOUS METALS &middot; FIRST EDITION &middot; 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
