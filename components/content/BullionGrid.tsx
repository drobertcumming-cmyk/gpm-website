import Image from 'next/image'
import Link from 'next/link'
import { withBase } from '@/lib/basepath'

// Production-brief homepage §6. Eyebrow + headline + lead paragraph + 4-product
// image row + closing paragraph with inline Tier 4 link.
//
// Reference: production brief §6; homepage_copy_v3_6.md §6.

interface Product {
  src: string
  alt: string
  caption: string
}

const PRODUCTS: ReadonlyArray<Product> = [
  {
    src: '/images/homepage/coin-american-gold-eagle.jpg',
    alt: 'American Gold Eagle coin, obverse',
    caption: 'American Gold Eagle',
  },
  {
    src: '/images/homepage/coin-canadian-gold-maple-leaf.jpg',
    alt: 'Canadian Gold Maple Leaf coin, obverse',
    caption: 'Canadian Gold Maple Leaf',
  },
  {
    src: '/images/homepage/coin-american-silver-eagle.jpg',
    alt: 'American Silver Eagle coin, obverse',
    caption: 'American Silver Eagle',
  },
  {
    src: '/images/homepage/coin-lbma-gold-bar.jpg',
    alt: 'LBMA-approved gold bar',
    caption: 'LBMA-approved gold bar',
  },
]

export function BullionGrid() {
  return (
    <section
      aria-labelledby="bullion-heading"
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
        WHAT WE SELL
      </p>
      <h2
        id="bullion-heading"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 600,
          fontSize: 32,
          lineHeight: 1.20,
          color: 'var(--gpm-walnut-deep)',
          margin: 0,
        }}
      >
        Standard bullion. Nothing else.
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 17,
          fontWeight: 400,
          lineHeight: 1.55,
          color: 'var(--gpm-ink-body)',
          marginTop: 16,
          maxWidth: 720,
        }}
      >
        We sell IRS-eligible gold and silver — the same coins and bars held in retirement accounts
        across the country. Standard products, standard weights, priced against the spot market.
        The number on our pricing page is the number you pay for them.
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ gap: 24, marginTop: 48 }}
      >
        {PRODUCTS.map((p) => (
          <figure key={p.src} style={{ margin: 0 }}>
            <div
              style={{
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                borderRadius: 4,
                background: 'var(--gpm-canvas-deep)',
                position: 'relative',
              }}
            >
              <Image
                src={withBase(p.src)}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <figcaption
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 500,
                color: 'rgba(45, 38, 32, 0.65)',
                textAlign: 'center',
                marginTop: 12,
              }}
            >
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 17,
          fontWeight: 400,
          lineHeight: 1.55,
          color: 'var(--gpm-ink-body)',
          marginTop: 48,
          maxWidth: 880,
        }}
      >
        We do not sell numismatic, &ldquo;rare,&rdquo; &ldquo;exclusive,&rdquo; &ldquo;premium,&rdquo; or proof coins. The
        markup on those products is how this industry hides its real margin — sometimes thirty
        percent, sometimes fifty, sometimes more. We will not sell them. We believe they have no
        place in a wealth preservation strategy.
      </p>
      <p style={{ marginTop: 16 }}>
        <Link
          href="/resources/numismatic-coins"
          className="gpm-link-tier4"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Why we refuse numismatics <span aria-hidden="true">→</span>
        </Link>
      </p>
    </section>
  )
}
