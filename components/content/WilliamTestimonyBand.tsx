import { LinkArrow } from '@/components/cta'
import { ImagePlaceholder } from './ImagePlaceholder'

// WilliamTestimonyBand — Block 4 of the homepage. Tinted surface band with
// a faith-grounded lifestyle image at left (desktop), heading, body,
// italic tagline, and a 2×2 testimonial grid (italic serif quote with
// walnut left-rule). Closes with a right-aligned LinkArrow preceded by a
// hairline rule.
//
// Lifestyle image (older adult reading in domestic interior) is the
// audience-mirror anchor for this band; it is NOT a William placeholder.
// William's actual presence on the homepage is carried by the PullQuote
// block immediately above (which has a separate provisional headshot
// pending William's commissioned portrait).
//
// Testimonial slots — four — ship as placeholders. William delivers the
// real testimonials before launch via redline. Do not invent testimonials.
//
// Reference: DESIGN_BRIEF.md Section 14.3 (WilliamTestimonyBand) +
// fragments Block 4. Section 10.1 governs portraiture register;
// Section 10.2 governs lifestyle imagery register.

const PLACEHOLDER =
  '[Testimonial copy pending — William to supply before launch]'

interface Testimonial {
  quote: string
  attribution: string
}

const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  { quote: PLACEHOLDER, attribution: 'Pending' },
  { quote: PLACEHOLDER, attribution: 'Pending' },
  { quote: PLACEHOLDER, attribution: 'Pending' },
  { quote: PLACEHOLDER, attribution: 'Pending' },
]

export function WilliamTestimonyBand() {
  return (
    <section
      aria-label="What people say about William Armour"
      className="bg-surface"
    >
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
          {/* Lifestyle image — fixed 280px wide / 3:4 aspect at desktop, top-left of band */}
          <div className="lg:w-[280px] max-w-[280px] mx-auto lg:mx-0">
            <ImagePlaceholder
              label="[LIFESTYLE IMAGE — older adult, domestic setting]"
              aspect="3 / 4"
              className="bg-canvas-deep"
              src="/images/homepage/william-portrait-provisional.jpg"
              alt="Older adult reading at home in quiet domestic light — audience-mirror lifestyle image"
              width={600}
              height={800}
            />
          </div>

          {/* Testimony content */}
          <div>
            <h2 className="text-h3 text-ink-display">
              What people say about William.
            </h2>
            <p className="text-body text-ink-body mt-4 max-w-prose">
              Grace was built around one man&apos;s conviction. These are
              testimonials about William Armour &mdash; from people who have
              worked with him, been counselled by him, or known him personally
              over his years in ministry and in the Gold IRA industry.
            </p>
            <p className="text-body italic text-ink-body opacity-70 mt-4">
              They describe William. Grace is the company he built.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={i}
                  className="border-l-[1px] border-walnut pl-6"
                >
                  <blockquote className="text-quote text-ink-body">
                    {t.quote}
                  </blockquote>
                  <figcaption className="text-body-sm text-ink-body mt-3">
                    &mdash; {t.attribution}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t-[1px] border-border-light text-right">
              <LinkArrow href="/who-we-are/williams-story">
                Read William&apos;s story
              </LinkArrow>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
