import Link from 'next/link'
import { CTAButton, LinkArrow } from '@/components/cta'
import {
  SectionDivider,
  PreFooterDisclaimer,
  preFooterDisclaimerParagraphStyle,
} from '@/components/content'
import {
  VersePanel,
  LeadershipProfiles,
  CommitmentsGrid,
  RefusalsList,
  RelatedPagesBand,
} from '@/components/who-we-are'

// /who-we-are page composition.
// Editorial deck-style page: hero → Proverbs anchor (tinted band, with
// verse panel) → leadership profiles → four foundational commitments
// (grid) → active refusals (tinted band) → how-we-operate brief →
// accountability close → related pages band → cream PreFooterDisclaimer.
//
// Page sits inside the (marketing) route group, so SiteHeader, main
// wrapper, and SiteFooter are inherited from app/(marketing)/layout.tsx.
//
// Reference: who-we-are.html template.

export const metadata = {
  title: 'Who We Are',
  description:
    'Built by a pastor, an accountant, and a marketing executive — for people the industry stopped serving honestly. The principals, the four foundational commitments, and the structural refusals that define how Grace operates.',
}

export default function WhoWeArePage() {
  return (
    <>
      {/* HERO — editorial deck */}
      <section className="w-full" style={{ paddingTop: 80, paddingBottom: 72 }}>
        <div
          className="mx-auto"
          style={{ maxWidth: 720, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>WHO WE ARE</span>
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
            Built by a pastor, an accountant, and a marketing executive &mdash;
            for people the industry stopped serving honestly.
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
            Grace Precious Metals exists because three people independently
            reached the same conclusion about an industry they were each, in
            their own way, working inside. The page below tells you who we are,
            what we built, and why we built it the way we did.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* PROVERBS ANCHOR — tinted band */}
      <section
        className="w-full py-16 md:py-24"
        style={{ background: 'var(--gpm-canvas-deep)' }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>THE ANCHOR</span>
          <VersePanel />
          <div style={proseGroupStyle}>
            <p style={proseStyle}>
              The verse is not decorative. It is the operational principle the
              business is organised around. The just weight is what the customer
              is charged. Ours is{' '}
              <strong style={proseStrongStyle}>visible</strong> &mdash; the
              number is published.{' '}
              <strong style={proseStrongStyle}>Accurate</strong> &mdash; what is
              published is what is charged.{' '}
              <strong style={proseStrongStyle}>Constant</strong> &mdash; it does
              not move between customers.
            </p>
            <p style={proseStyle}>
              Every structural decision at Grace resolves to one of those three
              attributes. The published spread is the visible weight. The
              salaried-advisor model protects the accuracy of the weight, by
              removing the financial incentive that historically pulls it out of
              true. The bullion-only catalogue protects the constancy of the
              weight, by removing the product line that in this category is most
              often used to vary the price for different customers.
            </p>
            <p style={proseStyle}>
              We chose Proverbs 11:1 as the anchor because it is the most exact
              description of what the category, at its worst, has failed to do
              &mdash; and of what we are structurally committed to doing
              differently.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* LEADERSHIP PROFILES */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 880, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>LEADERSHIP</span>
          <h2 style={sectionHeadlineStyle}>
            The people responsible for this company.
          </h2>
          <p style={ledeStyle}>
            Grace Precious Metals was founded by three people, two of them
            brothers, all of them committing their professional reputations to
            the way this company is built.
          </p>
          <LeadershipProfiles />
        </div>
      </section>

      <SectionDivider />

      {/* FOUR COMMITMENTS */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 880, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>THE COMMITMENTS</span>
          <h2 style={sectionHeadlineStyle}>
            Four structural commitments. Each one operational.
          </h2>
          <p style={ledeStyle}>
            A commitment that is not written down is a marketing claim. A
            commitment that is written down, published openly, and structurally
            enforced is a policy. The four below are policies. They are how
            this company is built, not how it is described.
          </p>
          <CommitmentsGrid />
        </div>
      </section>

      {/* ACTIVE REFUSALS — tinted band */}
      <section
        className="w-full py-16 md:py-24"
        style={{ background: 'var(--gpm-canvas-deep)' }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>WHAT WE DO NOT DO</span>
          <h2 style={sectionHeadlineStyle}>Active refusals.</h2>
          <p style={ledeStyle}>
            Some of what defines Grace is what we will not do. Each refusal
            below is a structural feature of the business, not a marketing
            claim.
          </p>
          <RefusalsList />
        </div>
      </section>

      <SectionDivider />

      {/* HOW WE OPERATE — brief */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>HOW WE OPERATE &mdash; IN BRIEF</span>
          <h2 style={sectionHeadlineStyle}>The operational architecture.</h2>
          <div style={proseGroupStyle}>
            <p style={proseStyle}>
              Grace works with IRS-approved custodians for retirement-account
              compliance, IRS-approved depositories for physical metal storage,
              and is registered as a precious metals dealer in the states where
              we operate. Our advisors are salaried, our pricing is
              CFO-signed-off, and the workflow that moves your metal from
              purchase to depository is documented end to end.
            </p>
            <p style={proseStyle}>
              The dedicated page below walks through how the business actually
              runs &mdash; licensing, custody, advisor compensation, pricing
              governance, and the complaint-resolution process &mdash; in
              operational detail rather than legal summary.
            </p>
          </div>
          <div style={{ marginTop: 24 }}>
            <LinkArrow href="/how-we-operate">
              Read the full operational page
            </LinkArrow>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ACCOUNTABILITY CLOSE */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 680, paddingLeft: 32, paddingRight: 32 }}
        >
          <h2 style={sectionHeadlineStyle}>What we are accountable for.</h2>
          <div style={proseGroupStyle}>
            <p style={proseStyle}>
              The three people on this page are the public principals of Grace
              Precious Metals. We are accountable for the commitments on this
              site, the pricing on{' '}
              <Link
                href="/pricing"
                style={{
                  color: 'var(--gpm-gold-secondary)',
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                }}
              >
                the pricing page
              </Link>
              , and the refusals listed above. Our names are published. Our
              roles are published. The pricing is published. The commitments
              are published. There is no anonymous call centre between you and
              the people who built this company.
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
          </div>
        </div>
      </section>

      {/* RELATED PAGES BAND */}
      <RelatedPagesBand />

      {/* PRE-FOOTER DISCLAIMER (site-wide standard, cream — per PR #6) */}
      <PreFooterDisclaimer>
        <p style={preFooterDisclaimerParagraphStyle}>
          <em>Grace Precious Metals is a precious metals dealer</em>, not a
          financial, tax, or legal advisor. Gold and precious metals
          investments carry risk, including the potential loss of principal.
          Past performance does not guarantee future results.
        </p>
        <p style={preFooterDisclaimerParagraphStyle}>
          References to William Armour&rsquo;s prior employment describe a
          senior sales role at a large Gold IRA firm. The company is not named
          on this page; the framing is the counsel-cleared description.
        </p>
        <p style={preFooterDisclaimerParagraphStyle}>
          Custodian and depository partners are referenced on the How We
          Operate page once partnerships are formally executed and cleared for
          public reference.
        </p>
      </PreFooterDisclaimer>
    </>
  )
}

// Shared typography helpers
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
  marginBottom: 24,
}

const ledeStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 18,
  fontWeight: 400,
  color: 'var(--gpm-ink-body)',
  lineHeight: 1.6,
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

const proseStrongStyle: React.CSSProperties = {
  fontWeight: 500,
  color: 'var(--gpm-ink-display)',
}
