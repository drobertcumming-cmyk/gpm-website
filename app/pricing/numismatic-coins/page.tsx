import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/nav'
import { CTAButton, LinkArrow } from '@/components/cta'
import {
  SectionDivider,
  PreFooterDisclaimer,
  preFooterDisclaimerParagraphStyle,
} from '@/components/content'
import {
  NumismaticBreadcrumb,
  DefinitionalTriad,
  StructuralFactorsGrid,
  CommitPanel,
  EvaluationChecklist,
  RelatedPagesBand,
} from '@/components/pricing/numismatic-coins'

// /pricing/numismatic-coins page composition.
// Editorial deck-style page that explains the documented industry pattern
// of harm in numismatic and "premium" coin sales, and Grace's structural
// refusal to carry the category. Mirrors the page-shell pattern used on
// /pricing and /pricing/buyback — manual SiteHeader + SiteFooter, sits
// outside the (marketing) route group.
//
// Reference: numismatic-coins.html template.

export const metadata = {
  title: 'Numismatic Coins',
  description:
    'Why the catalogue does not include numismatic, “premium,” “exclusive,” “rare,” or “proof” coins. The documented industry pattern, the structural factors that keep it in place, and Grace’s refusal as a product-design decision.',
}

export default function NumismaticCoinsPage() {
  return (
    <>
      <a href="#main" className="gpm-skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <NumismaticBreadcrumb />

        {/* HERO — editorial deck (no photograph) */}
        <section className="w-full" style={{ paddingTop: 80, paddingBottom: 72 }}>
          <div
            className="mx-auto"
            style={{ maxWidth: 720, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>PRODUCT POSTURE</span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 3.6vw, 48px)',
                fontWeight: 500,
                color: 'var(--gpm-ink-display)',
                lineHeight: 1.2,
                margin: 0,
                marginBottom: 28,
              }}
            >
              We do not sell what this industry steers you into.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 18,
                fontWeight: 400,
                color: 'var(--gpm-ink-body)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Numismatic, &ldquo;premium,&rdquo; &ldquo;exclusive,&rdquo;
              &ldquo;rare,&rdquo; and &ldquo;proof&rdquo; coins are the single most
              documented source of consumer harm in Gold IRA enforcement records. Our
              catalogue does not include any of them. This page is the pattern
              &mdash; what it is, why it persists, and why our refusal is a
              product-design decision rather than a marketing position.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* DEFINITIONS + DEFINITIONAL TRIAD */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>WHAT THE TERMS MEAN</span>
            <h2 style={sectionHeadlineStyle}>
              Three categories. Two of them legitimate. One of them the pattern.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                The Gold IRA market sells three distinct product categories under
                overlapping language. Understanding the taxonomy is the prerequisite
                to understanding the pattern of harm. The categories are not equally
                legitimate, and the markup ranges are not equally justified.
              </p>
            </div>
          </div>
          <div
            className="mx-auto"
            style={{ paddingLeft: 32, paddingRight: 32 }}
          >
            <DefinitionalTriad />
          </div>
        </section>

        {/* INDUSTRY PATTERN — tinted band */}
        <section
          className="w-full py-16 md:py-24"
          style={{ background: 'var(--gpm-canvas-deep)' }}
        >
          <div
            className="mx-auto"
            style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>THE DOCUMENTED PATTERN</span>
            <h2 style={sectionHeadlineStyle}>
              The pattern, as enforcement records describe it.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                Between 2015 and 2024, state and federal regulators brought
                enforcement actions against Gold IRA dealers whose business model
                centered on selling numismatic and &ldquo;premium&rdquo; coins to
                retirement-account holders at markups that bore no relationship to
                the independent resale value of the product. The pattern is
                consistent across cases: a customer purchases a product marketed as
                carrying numismatic or collector value; the product&rsquo;s
                independent resale value, at the time of purchase, is materially
                below the price paid.
              </p>
              <p style={proseStyle}>
                The gap between purchase price and independent resale value is not a
                market fluctuation. It is a structural feature of the product&rsquo;s
                pricing &mdash; the markup is embedded at the point of sale, and the
                customer bears the full cost of that markup as an immediate
                unrealized loss.
              </p>
              <p style={proseStyle}>
                In the most documented cases, customers discovered the gap only when
                attempting to liquidate &mdash; at which point the dealer&rsquo;s
                buyback offer confirmed what the markup had already determined: the
                product was worth materially less than what was paid for it. The
                round-trip cost (entry markup plus exit markdown) in these cases
                ranged from 40% to over 100% of the original investment.
              </p>
              <p style={proseStyle}>
                The pattern is not universal &mdash; not every numismatic coin sold
                in a Gold IRA is overpriced, and not every dealer selling them is
                acting in bad faith. But the pattern is concentrated in this product
                category, and the enforcement record is unambiguous about where the
                documented consumer harm sits. For a detailed worked example of how
                entry and exit costs compound, see{' '}
                <Link
                  href="/pricing/buyback"
                  style={{
                    color: 'var(--gpm-gold-secondary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                  }}
                >
                  our buyback page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* STRUCTURAL FACTORS */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>WHY IT PERSISTS</span>
            <h2 style={sectionHeadlineStyle}>
              Three structural factors keep it in place.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                The pattern persists not because individual actors are uniquely
                predatory, but because three structural features of the Gold IRA
                distribution channel create the conditions for it to repeat.
              </p>
            </div>
          </div>
          <div
            className="mx-auto"
            style={{ paddingLeft: 32, paddingRight: 32 }}
          >
            <StructuralFactorsGrid />
          </div>
        </section>

        <SectionDivider />

        {/* GRACE RESPONSE — with commit panel */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>
              WHY THE CATALOGUE DOES NOT INCLUDE THEM
            </span>
            <h2 style={sectionHeadlineStyle}>
              A product-design decision, not a marketing position.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                Grace does not sell numismatic, &ldquo;premium,&rdquo;
                &ldquo;exclusive,&rdquo; &ldquo;rare,&rdquo; or &ldquo;proof&rdquo;
                coins. The catalogue contains only IRS-eligible standard bullion
                &mdash; American Gold Eagles, Canadian Gold Maple Leafs, Austrian
                Philharmonics, American Silver Eagles, and LBMA-approved gold bars.
                Every product on the catalogue has a transparent, globally quoted
                spot price that the customer can independently verify at any time.
              </p>
              <p style={proseStyle}>
                This is not a marketing position. It is a product-design decision.
                The refusal to carry the product category most associated with
                documented consumer harm is structural &mdash; it removes the
                incentive, the information asymmetry, and the buyback leverage that
                make the pattern possible. You cannot be steered into a product that
                does not exist on the catalogue.
              </p>
              <p style={proseStyle}>
                The decision also means Grace forgoes the highest-margin product
                category in the Gold IRA channel. The revenue that other dealers
                generate from numismatic markups is revenue Grace does not earn. The
                trade-off is intentional: a lower margin per customer, a structurally
                different relationship with the customer, and a catalogue that can be
                defended in plain language.
              </p>
            </div>
            <CommitPanel />
          </div>
        </section>

        <SectionDivider />

        {/* EVALUATION CHECKLIST */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
          >
            <span style={eyebrowStyle}>WHAT TO ASK</span>
            <h2 style={sectionHeadlineStyle}>
              Three questions, in writing, to any provider you are considering.
            </h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                If you are evaluating Gold IRA providers, these three questions
                &mdash; asked in writing, with written answers &mdash; will surface
                the structural information most relevant to your decision.
              </p>
            </div>
            <EvaluationChecklist />
          </div>
        </section>

        <SectionDivider />

        {/* CLOSING SECTION */}
        <section className="w-full py-16 md:py-24">
          <div
            className="mx-auto"
            style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
          >
            <h2 style={sectionHeadlineStyle}>The catalogue is the answer.</h2>
            <div style={proseGroupStyle}>
              <p style={proseStyle}>
                Grace does not sell the product category. There is nothing on the
                catalogue to steer you toward, no premium product an advisor is
                incentivized to recommend, and no buyback structure that benefits
                from selling you something whose resale value is materially below
                what you paid. The refusal is structural. The page on{' '}
                <Link
                  href="/pricing"
                  style={{
                    color: 'var(--gpm-gold-secondary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                  }}
                >
                  /pricing
                </Link>{' '}
                shows the entry side of what we do sell. The page on{' '}
                <Link
                  href="/pricing/buyback"
                  style={{
                    color: 'var(--gpm-gold-secondary)',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                  }}
                >
                  buyback
                </Link>{' '}
                shows the exit side. Together, they are the round-trip.
              </p>
            </div>
            <div
              className="flex flex-wrap items-center"
              style={{ gap: 20, marginTop: 36 }}
            >
              <CTAButton href="/advisor" tier={1}>
                Talk to a salaried advisor
              </CTAButton>
              <CTAButton href="/briefing" tier={3}>
                Get the Briefing
              </CTAButton>
              <LinkArrow href="/pricing">Back to /pricing</LinkArrow>
            </div>
          </div>
        </section>

        {/* RELATED PAGES BAND */}
        <RelatedPagesBand />

        {/* PRE-FOOTER DISCLAIMER (site-wide standard, cream — per PR #6) */}
        <PreFooterDisclaimer>
          <p style={preFooterDisclaimerParagraphStyle}>
            <em>Grace Precious Metals is a precious metals dealer</em>, not a
            financial advisor. Gold investments carry risk. Past performance does
            not guarantee future results.
          </p>
          <p style={preFooterDisclaimerParagraphStyle}>
            The markup ranges cited on this page (3&ndash;15%, 15&ndash;30%+,
            50&ndash;100%+) are derived from published research, regulatory
            enforcement records, and industry pricing data. They represent
            category-level patterns, not claims about any specific competitor.
          </p>
          <p style={preFooterDisclaimerParagraphStyle}>
            The term &ldquo;premium&rdquo; as used on this page refers to the
            marketing positioning of products in the retail Gold IRA channel, not to
            the standard dealer premium over spot price that applies to all physical
            bullion products.
          </p>
          <p style={preFooterDisclaimerParagraphStyle}>
            Grace does not sell numismatic, &ldquo;premium,&rdquo;
            &ldquo;exclusive,&rdquo; &ldquo;rare,&rdquo; or &ldquo;proof&rdquo;
            coins. The catalogue contains only IRS-eligible standard bullion meeting
            the requirements of IRC Section 408(m)(3)(B).
          </p>
        </PreFooterDisclaimer>
      </main>
      <SiteFooter />
    </>
  )
}

// Shared typography helpers for prose blocks below the hero
const eyebrowStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--gpm-gold-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  marginBottom: 16,
}

const sectionHeadlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 'clamp(26px, 2.8vw, 34px)',
  fontWeight: 500,
  color: 'var(--gpm-walnut-deep)',
  lineHeight: 1.25,
  margin: 0,
  marginBottom: 32,
}

const proseGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
}

const proseStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 17,
  fontWeight: 400,
  color: 'var(--gpm-ink-body)',
  lineHeight: 1.65,
  margin: 0,
}
