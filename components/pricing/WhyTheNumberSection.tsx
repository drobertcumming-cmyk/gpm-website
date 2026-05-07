import { ProseContainer } from '@/components/layout'

// /pricing §6 — Why this number is on this page.
// Prose section using ProseContainer (640px). All copy verbatim from
// the Pricing Page Design Specification §16.
//
// Reference: Grace Precious Metals — Pricing Page Design Specification.

export function WhyTheNumberSection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="mx-auto py-16 md:py-24"
      style={{
        maxWidth: 1200,
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      <ProseContainer>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: 'var(--gpm-gold-secondary)',
            margin: 0,
            marginBottom: 16,
          }}
        >
          WHY THIS NUMBER IS ON THIS PAGE
        </p>
        <h2
          id="why-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 36px)',
            lineHeight: 1.2,
            color: 'var(--gpm-walnut-deep)',
            margin: 0,
            marginBottom: 24,
          }}
        >
          Because a just weight is His delight.
        </h2>

        <p style={paragraphStyle}>
          Most Gold IRA companies do not publish their spread. They quote it on the phone,
          after they have your attention and your time. We believe that is backwards. If you
          are considering entrusting your retirement savings to a company, you deserve to
          know the cost before you speak to anyone.
        </p>

        <p style={paragraphStyle}>
          Proverbs 11:1 says, &ldquo;A false balance is an abomination to the Lord, but a
          just weight is His delight.&rdquo; That verse is not decoration on our wall
          &mdash; it is the reason this number is published here, on a public page, before
          you have given us your name or your phone number.
        </p>

        <p style={{ ...paragraphStyle, marginBottom: 0 }}>
          The pricing below is what every saver pays. There is no tiered pricing, no volume
          discount for larger rollovers, and no hidden schedule for smaller ones. The spread
          is the spread.
        </p>
      </ProseContainer>
    </section>
  )
}

const paragraphStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(16px, 1.4vw, 17px)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--gpm-ink-body)',
  margin: '0 0 20px',
}
