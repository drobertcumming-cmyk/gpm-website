import Image from 'next/image'
import Link from 'next/link'
import { withBase } from '@/lib/basepath'

// Production-brief homepage §11. Eyebrow + headline above a 3-card grid.
// Each card: lifestyle image (240px tall, top corners rounded) + content
// area with PATH N label, headline, description, Tier 4 link.
//
// Reference: production brief §11; homepage_copy_v3_6.md §11.

interface Path {
  pathLabel: string
  headline: string
  description: string
  linkLabel: string
  linkHref: string
  imageSrc: string
  imageAlt: string
}

const PATHS: ReadonlyArray<Path> = [
  {
    pathLabel: 'NEW TO GOLD',
    headline: 'New to Gold IRAs',
    description:
      'Start with how a rollover works. What you can roll over, how the timing works, what the tax treatment looks like.',
    linkLabel: 'How a rollover works',
    linkHref: '/rollover',
    imageSrc: '/images/homepage/card-new-to-gold-iras.jpg',
    imageAlt: 'An older man reading documents at a desk in warm natural light',
  },
  {
    pathLabel: 'WHAT QUALIFIES',
    headline: 'Which gold the IRS allows',
    description:
      'The rules on IRA-eligible coins are stricter than most dealers let on. Here’s exactly what qualifies — and what gets sold as “eligible” when it isn’t.',
    linkLabel: 'IRA-eligible gold coins',
    linkHref: '/resources/ira-eligible-gold-coins',
    imageSrc: '/images/homepage/card-ira-eligible-coins.jpg',
    imageAlt: 'Four IRS-eligible gold bullion coins on a neutral surface',
  },
  {
    pathLabel: 'WHAT YOU PAY',
    headline: 'What you actually pay',
    description:
      'Spread, markups, and the exit costs that rarely make it into a brochure. See how Gold IRA pricing really works before you commit.',
    linkLabel: 'Gold IRA fees explained',
    linkHref: '/resources/fees-explained',
    imageSrc: '/images/homepage/card-what-you-pay.jpg',
    imageAlt: 'An older man at a desk reading a printed fee schedule',
  },
]

function PathCard({ p }: { p: Path }) {
  return (
    <article
      className="flex flex-col h-full"
      style={{
        background: 'var(--gpm-canvas)',
        borderRadius: 6,
        overflow: 'hidden',
        border: '0.5px solid var(--gpm-border-light)',
      }}
    >
      <div style={{ position: 'relative', height: 240, background: 'var(--gpm-canvas-deep)' }}>
        <Image
          src={withBase(p.imageSrc)}
          alt={p.imageAlt}
          fill
          sizes="(min-width: 1024px) 380px, 90vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-col flex-grow" style={{ padding: 24 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--gpm-gold-secondary)',
          }}
        >
          {p.pathLabel}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 22,
            fontWeight: 600,
            lineHeight: 1.25,
            color: 'var(--gpm-walnut-deep)',
            marginTop: 8,
          }}
        >
          {p.headline}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.55,
            color: 'var(--gpm-ink-body)',
            marginTop: 12,
            flexGrow: 1,
          }}
        >
          {p.description}
        </p>
        <p style={{ marginTop: 18 }}>
          <Link
            href={p.linkHref}
            className="gpm-link-tier4"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {p.linkLabel} <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </article>
  )
}

export function FindWhatFits() {
  return (
    <section
      aria-labelledby="find-what-fits-heading"
      className="mx-auto"
      style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32, paddingTop: 96, paddingBottom: 96 }}
    >
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: '0.10em',
          color: 'var(--gpm-gold-secondary)',
          marginBottom: 16,
        }}
      >
        PLAIN ANSWERS
      </p>
      <h2
        id="find-what-fits-heading"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 600,
          fontSize: 32,
          lineHeight: 1.20,
          color: 'var(--gpm-walnut-deep)',
          margin: 0,
        }}
      >
        Three things worth understanding first
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 32, marginTop: 48 }}
      >
        {PATHS.map((p) => (
          <PathCard key={p.pathLabel} p={p} />
        ))}
      </div>
    </section>
  )
}
