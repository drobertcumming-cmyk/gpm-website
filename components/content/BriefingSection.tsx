import { CoverArtwork } from './CoverArtwork'
import { WhatsInsideList } from './WhatsInsideList'
import { BriefingForm } from './BriefingForm'

// Production-brief homepage §10 composition.
// Desktop: 58/42 split — left has eyebrow + headline + WHAT'S INSIDE list;
// right has cover artwork + page-count caption + form.
// Mobile: stacked.
//
// Section transitions are handled by sibling SectionDivider components in
// app/(marketing)/page.tsx so cream-space rhythm is uniform across the
// homepage. The earlier 70%-width internal framing rules were retired
// 2026-04-30 (fourth pass) per CMO direction on uniform section gaps —
// see DESIGN_BRIEF.md production-brief override note.
//
// Reference: production brief §10; homepage_copy_v3_6.md §10.

export function BriefingSection() {
  return (
    <section
      aria-labelledby="briefing-heading"
      className="mx-auto"
      style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32, paddingTop: 96, paddingBottom: 96 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr]" style={{ gap: 80, alignItems: 'start' }}>
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'var(--gpm-gold-secondary)',
              marginBottom: 16,
            }}
          >
            THE SECRET GOLD BRIEFING
          </p>
          <h2
            id="briefing-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: 32,
              lineHeight: 1.20,
              color: 'var(--gpm-walnut-deep)',
              margin: 0,
            }}
          >
            What the Other IRA Companies Hide From You.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.10em',
              color: 'rgba(45, 38, 32, 0.65)',
              marginTop: 28,
            }}
          >
            WHAT&rsquo;S INSIDE
          </p>
          <div style={{ marginTop: 16 }}>
            <WhatsInsideList />
          </div>
        </div>

        <div className="flex flex-col items-center" style={{ gap: 16 }}>
          <CoverArtwork />
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.15em',
              color: 'rgba(45, 38, 32, 0.55)',
              textAlign: 'center',
              marginTop: 4,
            }}
          >
            12 PAGES &middot; PDF
          </p>
          <div style={{ marginTop: 16, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <BriefingForm />
          </div>
        </div>
      </div>
    </section>
  )
}
