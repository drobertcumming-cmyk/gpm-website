import Link from 'next/link'

// Production-brief homepage §8. Eyebrow + section headline + lead paragraph
// + italic line, over a 2x2 grid of four named testimonials. Each card has
// a 2px gold left rule and equal-height layout.
//
// LAUNCH NOTE per v3.6 §8: William has not given consent on these named
// testimonials. Placeholders OK for development. Public launch requires
// William's redline + consent on record for ALL four. If fewer arrive,
// render only the confirmed count or pull the section off the homepage
// entirely. See LAUNCH_BLOCKERS.md LB-10.
//
// Reference: production brief §8; homepage_copy_v3_6.md §8.

interface Testimonial {
  body: string
  name: string
  location: string
}

const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    body:
      '“Called three companies before Grace. William was the only one who told me the total cost on the first call. No ‘let me check with my manager.’ Just the number.”',
    name: 'Robert Haines',
    location: 'Knoxville, TN',
  },
  {
    body:
      '“William spent forty minutes explaining the difference between bullion and numismatic coins. Then said, ‘take the briefing home and pray on it.’ No one in this industry says that.”',
    name: 'Linda Prescott',
    location: 'Scottsdale, AZ',
  },
  {
    body:
      '“I’ve known William through church for twelve years. When he told me he was building a gold company on Proverbs 11:1, I believed him — because I’ve watched him live it.”',
    name: 'Pastor David Chen',
    location: 'Dallas, TX',
  },
  {
    body:
      '“Another company quoted me $82,000 in ‘rare’ coins for a $60,000 rollover. William showed me the math on why that was wrong. He didn’t even ask for my business — just said ‘you deserve to know.’”',
    name: 'James & Carol Whitfield',
    location: 'Charlotte, NC',
  },
]

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure
      className="flex flex-col h-full"
      style={{
        margin: 0,
        padding: 24,
        borderLeft: '2px solid rgba(184, 150, 46, 0.50)',
      }}
    >
      <blockquote
        style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.55,
          color: 'var(--gpm-ink-body)',
          flexGrow: 1,
        }}
      >
        {t.body}
      </blockquote>
      <figcaption style={{ marginTop: 16 }}>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--gpm-walnut-deep)',
          }}
        >
          {t.name}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 400,
            color: 'rgba(45, 38, 32, 0.65)',
            marginTop: 4,
          }}
        >
          {t.location}
        </div>
      </figcaption>
    </figure>
  )
}

export function TestimonialsGrid() {
  return (
    <section
      aria-labelledby="testimonials-heading"
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
        TESTIMONIALS
      </p>
      <h2
        id="testimonials-heading"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 600,
          fontSize: 32,
          lineHeight: 1.20,
          color: 'var(--gpm-walnut-deep)',
          margin: 0,
        }}
      >
        What people say about William.
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
        Grace was built around one man&rsquo;s conviction. These are testimonials about William
        Armour &mdash; from people who have worked with him, been counselled by him, or known
        him personally over his years in ministry and in the Gold IRA industry.
      </p>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 17,
          fontWeight: 400,
          lineHeight: 1.55,
          color: 'rgba(45, 38, 32, 0.75)',
          marginTop: 8,
        }}
      >
        They describe William. Grace is the company he built.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: 32, marginTop: 48 }}
      >
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>

      <div className="text-center" style={{ marginTop: 48 }}>
        <Link
          href="/who-we-are/williams-story"
          className="gpm-link-tier4"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Read William&rsquo;s story <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
