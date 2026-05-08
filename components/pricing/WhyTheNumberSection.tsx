// /pricing §6 — Why this number is on this page.
// 12-col 8/4 split at lg+: main prose in 8 cols, Proverbs 11:1 verse
// callout in 4-col sidebar. Stacks at mobile. Eyebrow + H2 span full
// container width.
//
// Layout shift 2026-05-08: widened from a centered 640px ProseContainer
// to a 1200px main+sidebar grid to eliminate horizontal dead space and
// give the narrative an editorial sidebar treatment.
//
// Reference: Grace Precious Metals — Pricing Page Design Specification §16.

export function WhyTheNumberSection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="w-full py-16 md:py-24"
      style={{
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <p style={eyebrowStyle}>WHY THIS NUMBER IS ON THIS PAGE</p>
        <h2 id="why-heading" style={headlineStyle}>
          Because a just weight is His delight.
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ rowGap: 32, columnGap: 48 }}
        >
          {/* Main prose — 8 cols */}
          <div className="lg:col-span-8">
            <p style={paragraphStyle}>
              Most Gold IRA companies do not publish their spread. They quote
              it on the phone, after they have your attention and your time.
              We believe that is backwards. If you are considering entrusting
              your retirement savings to a company, you deserve to know the
              cost before you speak to anyone.
            </p>

            <p style={paragraphStyle}>
              Proverbs 11:1 says, &ldquo;A false balance is an abomination to
              the Lord, but a just weight is His delight.&rdquo; That verse is
              not decoration on our wall &mdash; it is the reason this number
              is published here, on a public page, before you have given us
              your name or your phone number.
            </p>

            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
              The pricing below is what every saver pays. There is no tiered
              pricing, no volume discount for larger rollovers, and no hidden
              schedule for smaller ones. The spread is the spread.
            </p>
          </div>

          {/* Sidebar — 4 cols, surface verse callout */}
          <aside
            aria-labelledby="why-verse-ref"
            className="lg:col-span-4"
            style={{
              background: 'var(--gpm-surface)',
              borderLeft: '4px solid var(--gpm-gold-deep)',
              borderRadius: 2,
              padding: '28px 32px',
              alignSelf: 'start',
            }}
          >
            <span
              id="why-verse-ref"
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--gpm-gold-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                marginBottom: 12,
              }}
            >
              PROVERBS 11:1
            </span>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 19,
                fontWeight: 400,
                fontStyle: 'italic',
                color: 'var(--gpm-ink-display)',
                lineHeight: 1.5,
                margin: 0,
                marginBottom: 16,
              }}
            >
              &ldquo;A false balance is an abomination to the Lord, but a just
              weight is his delight.&rdquo;
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 500,
                color: 'var(--gpm-walnut-deep)',
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              The weight is what you are charged. Ours is{' '}
              <span style={{ color: 'var(--gpm-gold-deep)' }}>visible</span>,{' '}
              <span style={{ color: 'var(--gpm-gold-deep)' }}>accurate</span>,
              and{' '}
              <span style={{ color: 'var(--gpm-gold-deep)' }}>constant</span>.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

const eyebrowStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.14em',
  color: 'var(--gpm-gold-secondary)',
  margin: 0,
  marginBottom: 16,
}

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontWeight: 500,
  fontSize: 'clamp(28px, 3vw, 36px)',
  lineHeight: 1.2,
  color: 'var(--gpm-walnut-deep)',
  margin: 0,
  marginBottom: 40,
}

const paragraphStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(16px, 1.4vw, 17px)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--gpm-ink-body)',
  margin: '0 0 20px',
}
