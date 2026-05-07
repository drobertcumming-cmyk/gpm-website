import { ProseContainer } from '@/components/layout'

// /pricing §8 — How we get paid.
// All copy verbatim from Pricing Page Design Specification §16.
//
// Reference: Grace Precious Metals — Pricing Page Design Specification.

export function HowWeGetPaidSection() {
  return (
    <section
      aria-labelledby="how-we-get-paid-heading"
      className="w-full py-16 md:py-24"
      style={{
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
          HOW WE GET PAID
        </p>
        <h2
          id="how-we-get-paid-heading"
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
          The spread is our revenue.
        </h2>

        <p style={paragraphStyle}>
          Grace earns revenue from the spread between the price we pay for bullion and the
          price we charge you. That spread is 11.1%, applied once, at the time of purchase.
          We do not earn ongoing fees, we do not earn commission on custodian or depository
          charges, and we do not earn revenue when you sell.
        </p>

        <p style={{ ...paragraphStyle, marginBottom: 0 }}>
          If the economics of our business ever require raising the spread, we will publish
          the new figure on this page before it takes effect. No such change is planned, and
          the current spread is what you are quoted.
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
