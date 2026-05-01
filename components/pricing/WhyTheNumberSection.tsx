// /pricing §2 — Why the number is on this page.
// Prose section using ProseContainer (640px) line length. Inline italic
// Proverbs reference styled with optional 2px gold-primary left rule per
// brief typography spec.
//
// Reference: v3.5 Section 1 "Why the number is on this page".

export function WhyTheNumberSection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="mx-auto"
      style={{
        maxWidth: 1200,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 96,
        paddingBottom: 96,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 640 }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.10em',
            color: 'var(--gpm-gold-secondary)',
            marginBottom: 16,
          }}
        >
          WHY THE NUMBER IS ON THIS PAGE
        </p>
        <h2
          id="why-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: 'clamp(28px, 3vw, 36px)',
            lineHeight: 1.25,
            color: 'var(--gpm-walnut-deep)',
            margin: 0,
            marginBottom: 28,
          }}
        >
          A retirement account should not be negotiated from incomplete information.
        </h2>

        <p style={bodyParagraphStyle}>
          Most of the industry will not show you a number until you are on a call with a
          commissioned salesperson. We think that is the wrong order. A retirement account
          is not something you should have to negotiate from a position of incomplete
          information, against a person paid more when you buy more.
        </p>

        <blockquote
          style={{
            margin: '32px 0 0',
            paddingLeft: 18,
            borderLeft: '2px solid var(--gpm-gold-primary)',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 19,
            lineHeight: 1.55,
            color: 'var(--gpm-walnut-deep)',
          }}
        >
          Proverbs 11:1 says <em>a false balance is an abomination to the Lord, but a just
          weight is his delight.</em> The weight is what you are charged. Ours is visible,
          accurate, and constant. Visible, because the number is on this page. Accurate,
          because what is published is what is charged. Constant, because it does not move
          between customers. That is what we mean when we say we publish the number.
        </blockquote>
      </div>
    </section>
  )
}

const bodyParagraphStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'clamp(16px, 1.4vw, 17px)',
  fontWeight: 400,
  lineHeight: 1.65,
  color: 'var(--gpm-ink-body)',
  margin: 0,
}
