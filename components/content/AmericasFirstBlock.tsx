// Production-brief homepage §4. Two-column block with eyebrow and headline
// in the left column and a body paragraph in the right column.
//
// Reference: production brief §4; homepage_copy_v3_6.md §4.

export function AmericasFirstBlock() {
  return (
    <section
      aria-labelledby="americas-first-heading"
      className="mx-auto"
      style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32, paddingTop: 96, paddingBottom: 96 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 48 }}>
        <div>
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
            A FIRST IN THE INDUSTRY
          </p>
          <h2
            id="americas-first-heading"
            className="text-first-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              color: 'var(--gpm-walnut-deep)',
              margin: 0,
              fontSize: 'clamp(28px, 4.5vw, 36px)',
              lineHeight: 1.20,
              letterSpacing: '-0.005em',
            }}
          >
            America&rsquo;s first Gold IRA company to publish its spread.
          </h2>
        </div>
        <div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.55,
              color: 'var(--gpm-ink-body)',
              margin: 0,
            }}
          >
            Grace Precious Metals is the first Gold IRA company in the country to publish its full
            spread before a single phone call. The number is 11.1%, all-in. It is on the website,
            it is the same for every customer, and it does not change when you call. Until now,
            every Gold IRA company in America made you sit through a sales pitch before they would
            tell you what their gold actually costs. That is the practice we left to build this one.
          </p>
        </div>
      </div>
    </section>
  )
}
