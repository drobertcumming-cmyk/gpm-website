import Image from 'next/image'
import { CTAButton } from '@/components/cta'
import { withBase } from '@/lib/basepath'

// Production-brief homepage §9. Two-column 60/40 split. Left: eyebrow +
// headline + italic provocation + 2 body paragraphs + "What you will probably
// find:" intro + 4-bullet list + Tier 1 "Talk to a Salaried Advisor" CTA.
// Right: "Older couple at desk" lifestyle image with 6px radius.
//
// Reference: production brief §9; homepage_copy_v3_6.md §9.

const BULLETS: ReadonlyArray<string> = [
  'A spread that is wider than it sounds',
  'A buyback price below spot, or no buyback price at all',
  'Numismatic or “exclusive” coins priced well above standard bullion',
  'Setup or admin fees that were not in the headline number',
]

export function ComparisonBlock() {
  return (
    <section
      aria-labelledby="comparison-heading"
      className="mx-auto"
      style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32, paddingTop: 96, paddingBottom: 96 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]" style={{ gap: 48, alignItems: 'center' }}>
        <div className="order-2 lg:order-1">
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
            COMPARE
          </p>
          <h2
            id="comparison-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 600,
              fontSize: 32,
              lineHeight: 1.20,
              color: 'var(--gpm-walnut-deep)',
              margin: 0,
            }}
          >
            Already spoken to another Gold IRA company?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.55,
              color: 'var(--gpm-gold-secondary)',
              marginTop: 16,
            }}
          >
            Bring us the quote, or just ask us what we would charge. We&rsquo;ll give you a
            no-pressure, no-sales second opinion. We don&rsquo;t need to know how much you&rsquo;re
            putting into metals or anything, just simply ask what we would charge on a particular
            item.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 17,
              fontWeight: 400,
              lineHeight: 1.55,
              color: 'var(--gpm-ink-body)',
              marginTop: 16,
            }}
          >
            Most companies in this industry will not show you a number until you are on a call
            with a commissioned salesperson, or likely worse until you&rsquo;ve already sent them
            your money. Even if they do give you a number it&rsquo;s often not what you end up being
            sold as they are conveniently out of that product or some other reason. If you have
            already had that call, you know the pattern &mdash; heavy on urgency, light on math.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 17,
              fontWeight: 400,
              lineHeight: 1.55,
              color: 'var(--gpm-ink-body)',
              marginTop: 16,
            }}
          >
            We do the math with you. Ours is published. Theirs is not.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: 0,
              color: 'var(--gpm-walnut-deep)',
              marginTop: 24,
            }}
          >
            What you will probably find:
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '12px 0 0 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {BULLETS.map((b) => (
              <li
                key={b}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 17,
                  fontWeight: 400,
                  lineHeight: 1.55,
                  color: 'var(--gpm-ink-body)',
                  paddingLeft: 24,
                  position: 'relative',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 8,
                    top: '0.7em',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--gpm-gold-secondary)',
                  }}
                />
                {b}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 32 }}>
            <CTAButton href="/advisor" tier={1}>
              Talk to a Salaried Advisor
            </CTAButton>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div
            style={{
              position: 'relative',
              aspectRatio: '4 / 3',
              overflow: 'hidden',
              borderRadius: 6,
              background: 'var(--gpm-canvas-deep)',
            }}
          >
            <Image
              src={withBase('/images/homepage/already-spoken-couple-documents.jpg')}
              alt="An older couple at a desk reviewing financial documents together"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
