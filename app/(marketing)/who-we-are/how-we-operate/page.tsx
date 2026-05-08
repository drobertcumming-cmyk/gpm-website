import Link from 'next/link'
import { CTAButton } from '@/components/cta'
import {
  SectionDivider,
  PreFooterDisclaimer,
  preFooterDisclaimerParagraphStyle,
} from '@/components/content'
import { HowWeOperateBreadcrumb } from '@/components/who-we-are/how-we-operate'

// /who-we-are/how-we-operate page composition.
//
// Operational page describing the ecosystem (custodian, depository,
// licensing) plus identity verification, advisor compensation,
// pricing governance, complaints, and data handling.
//
// Built per the 2026-05-08 "How We Operate" full-width brief:
//   Hero — 8/4 (H1+lede / metadata anchor)
//   Ecosystem — 3-up cards (Licensing / Custody / Depository) at 1200
//   Utility sections — 4/8 split (h2 in left rail, prose right) for
//     Identity / Pricing / Complaints / Data
//   Compensation — 7/5 split with high-contrast walnut-deep
//     "Salaried vs Commission" comparison card on the right
//   Closing block at 1200 with verse + CTAs
//   PreFooterDisclaimer (cream, site-wide standard)
//
// Several content fields are TBC — counsel + Andrew need to fill in
// state list, custodian/depository names, complaint contact paths,
// pricing-committee cadence. These are rendered with a TBC chip
// pattern that surfaces the gap rather than hiding it.
//
// Reference: how-we-operate.html template.

export const metadata = {
  title: 'How We Operate',
  description:
    'A Gold IRA is a regulated financial product. Setting one up involves a custodian, a depository, an advisor, a pricing process, and a complaint path. Here is ours, written down.',
}

export default function HowWeOperatePage() {
  return (
    <>
      <HowWeOperateBreadcrumb />

      {/* HERO — 8/4: H1 + lede left, metadata anchor right */}
      <section className="w-full" style={{ paddingTop: 64, paddingBottom: 56 }}>
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-12"
            style={{ rowGap: 32, columnGap: 64, alignItems: 'start' }}
          >
            <div className="lg:col-span-8">
              <span style={eyebrowStyle}>WHO WE ARE</span>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 500,
                  color: 'var(--gpm-ink-display)',
                  lineHeight: 1.15,
                  margin: 0,
                  marginBottom: 24,
                  maxWidth: 880,
                }}
              >
                How we operate
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 17,
                  fontWeight: 400,
                  color: 'var(--gpm-ink-body)',
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: 720,
                }}
              >
                A Gold IRA is a regulated financial product. Setting one up
                involves a custodian, a depository, an advisor, a pricing
                process, and a complaint path. Here is ours, written down.
              </p>
            </div>

            {/* Right anchor — section count + read time + last updated */}
            <aside
              className="lg:col-span-4"
              aria-label="Page metadata"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                paddingTop: 6,
              }}
            >
              <MetaRow label="7 sections" />
              <MetaRow label="5-min read" />
              <MetaRow label="Last updated May 2026" last />
            </aside>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM — 3-up cards (Licensing / Custody / Depository) */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>THE ECOSYSTEM</span>
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 24, marginTop: 8 }}
          >
            <EcosystemCard
              tag="LICENSING"
              titleNode={<>Grace Precious Metals</>}
              body={
                <>
                  Registered as <Tbc>entity type — TBC</Tbc> in{' '}
                  <Tbc>home state — TBC</Tbc>. Licensed to operate as a
                  precious metals dealer in the states we serve.
                  <br />
                  <br />
                  Where we are not yet licensed, we say so before a
                  conversation begins, not after.
                </>
              }
            />
            <EcosystemCard
              tag="IRA CUSTODIAN"
              titleNode={<Tbc>Custodian — TBC</Tbc>}
              body={
                <>
                  IRS-approved custodian, independent of Grace. Holds your
                  IRA account. You can call them directly, at any time, to
                  verify your account.
                </>
              }
            />
            <EcosystemCard
              tag="DEPOSITORY"
              titleNode={<Tbc>Depository — TBC</Tbc>}
              body={
                <>
                  IRS-approved depository, independent of Grace. Holds your
                  physical metals. You can call them directly, at any time,
                  to verify your holdings.
                </>
              }
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* IDENTITY VERIFICATION — 4/8 split */}
      <UtilitySection
        eyebrow=""
        heading="Identity verification"
        prose={
          <>
            <p style={proseStyle}>
              We verify the identity of every customer we open an account
              for. We monitor transactions for the patterns the Bank Secrecy
              Act requires us to monitor for. We file reports when those
              patterns appear.
            </p>
            <p style={proseStyle}>
              None of this is unusual; every legitimate financial business
              does it. We mention it because it matters that we do it the
              same way for every customer, with no exceptions.
            </p>
          </>
        }
      />

      <SectionDivider />

      {/* COMPENSATION — 7/5 with high-contrast walnut-deep comparison card */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-12"
            style={{ rowGap: 32, columnGap: 64, alignItems: 'start' }}
          >
            <div className="lg:col-span-7">
              <span style={eyebrowStyle}>COMPENSATION</span>
              <h2 style={sectionHeadlineStyle}>How our advisors are paid</h2>
              <div style={proseGroupStyle}>
                <p style={proseStyle}>
                  Our advisors are salaried. They do not earn commission.
                  They do not have sales quotas. Their compensation does not
                  change based on what you buy, when you buy, or whether you
                  buy at all.
                </p>
                <p style={proseStyle}>
                  An advisor whose pay depends on your decision is not your
                  advisor; he is your salesperson. That distinction is the
                  difference between counsel and persuasion, and we settled
                  it at the company level so individual advisors do not have
                  to settle it call by call.
                </p>
              </div>
            </div>

            {/* Salaried vs Commission — high-contrast walnut-deep comparison */}
            <aside
              className="lg:col-span-5"
              aria-labelledby="comp-comparison-heading"
              style={{
                background: 'var(--gpm-walnut-deep)',
                borderRadius: 4,
                padding: '32px 36px',
                alignSelf: 'start',
              }}
            >
              <span
                id="comp-comparison-heading"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'rgba(245, 240, 225, 0.55)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginBottom: 22,
                }}
              >
                SALARIED VS. COMMISSION
              </span>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <CompareRow label="Compensation model" value="Salary" emphasis />
                <CompareRow label="Commission on sales" value="None" emphasis />
                <CompareRow label="Sales quotas" value="None" emphasis />
                <CompareRow label="Pay tied to product choice" value="No" emphasis />
                <CompareRow
                  label="Incentive to upsell"
                  value="Structurally removed"
                  emphasis
                  last
                />
              </ul>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 12,
                  color: 'rgba(245, 240, 225, 0.55)',
                  lineHeight: 1.55,
                  margin: 0,
                  marginTop: 18,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(184, 150, 46, 0.30)',
                }}
              >
                Industry-typical: commission-based, quota-driven,
                product-dependent pay.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* HOW OUR PRICING IS SET — 4/8 split */}
      <UtilitySection
        eyebrow=""
        heading="How our pricing is set"
        prose={
          <>
            <p style={proseStyle}>
              Our spread is 11.1%, all-in, on every transaction. The figure
              is published on{' '}
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
              . It is reviewed <Tbc>cadence — TBC</Tbc> by{' '}
              <Tbc>CFO / pricing committee — TBC</Tbc> against current spot
              prices and operating costs.
            </p>
            <p style={proseStyle}>
              When the published figure changes, the change is posted on the
              pricing page before it takes effect, with the date of the
              change. There is no advisor-level pricing discretion: no
              advisor can offer you a different number than the one on the
              page. The published number is the only number.
            </p>
          </>
        }
      />

      <SectionDivider />

      {/* IF SOMETHING GOES WRONG — 4/8 split */}
      <UtilitySection
        eyebrow=""
        heading="If something goes wrong"
        prose={
          <>
            <p style={proseStyle}>
              Complaints come to a dedicated channel:{' '}
              <Tbc>email / phone / form — TBC</Tbc>. They are reviewed by{' '}
              <Tbc>role — TBC</Tbc>, and we acknowledge them within{' '}
              <Tbc>response time — TBC</Tbc> with a path to resolution.
            </p>
            <p style={proseStyle}>
              If we cannot resolve a complaint to your satisfaction, you
              have external paths:{' '}
              <Tbc>BBB / state AG / CFPB / arbitration — TBC</Tbc>. We will
              tell you about those paths the same day you ask.
            </p>
          </>
        }
      />

      <SectionDivider />

      {/* WHAT WE DO WITH YOUR DATA — 4/8 split */}
      <UtilitySection
        eyebrow=""
        heading="What we do with your data"
        prose={
          <>
            <p style={proseStyle}>
              We collect what we need to open and service your account, and
              no more. We do not sell your data. We do not share it with
              marketing partners. We retain it for as long as the law
              requires us to, and then we delete it.
            </p>
            <p style={proseStyle}>
              Our full privacy policy is at{' '}
              <Link
                href="/privacy"
                style={{
                  color: 'var(--gpm-gold-secondary)',
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                }}
              >
                /privacy
              </Link>
              . If you want to see what we hold on you, ask. If you want it
              deleted, ask, subject to the record-retention rules we are
              required to follow.
            </p>
          </>
        }
      />

      <SectionDivider />

      {/* CLOSING BLOCK — maintenance note + verse + CTAs */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <div style={{ maxWidth: 800 }}>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                fontWeight: 400,
                color: 'rgba(31, 27, 22, 0.75)',
                lineHeight: 1.65,
                margin: 0,
                marginBottom: 16,
              }}
            >
              This page is maintained by the people who run the operations
              it describes. If something on it changes, this page changes.
              If something on it is wrong, write to{' '}
              <Tbc>contact — TBC</Tbc> and we will correct it.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 17,
                fontWeight: 400,
                color: 'var(--gpm-walnut-deep)',
                lineHeight: 1.55,
                margin: 0,
                marginBottom: 36,
              }}
            >
              <em>A just weight is his delight</em> &mdash; Proverbs 11:1
              &mdash; is the line we hold to. This page is what holding to
              it looks like.
            </p>
            <div
              className="flex flex-wrap items-center"
              style={{ gap: 16 }}
            >
              <CTAButton href="/pricing" tier={1}>
                See our pricing
              </CTAButton>
              <CTAButton href="/advisor" tier={3}>
                Talk to an advisor
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER DISCLAIMER (cream, site-wide standard — PR #6) */}
      <PreFooterDisclaimer>
        <p style={preFooterDisclaimerParagraphStyle}>
          <em>Grace Precious Metals is a precious metals dealer</em>, not a
          financial, tax, or legal advisor. Gold and precious metals
          investments carry risk, including the potential loss of principal.
          Past performance does not guarantee future results.
        </p>
        <p style={preFooterDisclaimerParagraphStyle}>
          Custodian and depository partners referenced on this page are
          subject to formal partnership agreements. Names are published once
          partnerships are formally executed and cleared for public reference.
        </p>
        <p style={preFooterDisclaimerParagraphStyle}>
          The operational descriptions on this page describe the
          company&rsquo;s intended and current practices. Specific regulatory
          filings, licensing details, and compliance documentation are
          maintained separately and available upon request.
        </p>
      </PreFooterDisclaimer>
    </>
  )
}

// ============================================================
// Inline patterns — page-local, not new component-library entries
// ============================================================

function MetaRow({ label, last = false }: { label: string; last?: boolean }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--gpm-gold-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        paddingBottom: last ? 0 : 8,
        borderBottom: last
          ? 'none'
          : '1px dashed rgba(213, 205, 182, 0.6)',
        marginBottom: last ? 0 : 0,
      }}
    >
      {label}
    </div>
  )
}

function EcosystemCard({
  tag,
  titleNode,
  body,
}: {
  tag: string
  titleNode: React.ReactNode
  body: React.ReactNode
}) {
  return (
    <article
      style={{
        background: 'var(--gpm-linen-warm)',
        border: '1px solid var(--gpm-border-light)',
        borderRadius: 4,
        padding: '28px 28px 32px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--gpm-gold-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          marginBottom: 14,
        }}
      >
        {tag}
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 19,
          fontWeight: 500,
          color: 'var(--gpm-ink-display)',
          lineHeight: 1.3,
          margin: 0,
          marginBottom: 14,
        }}
      >
        {titleNode}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14.5,
          fontWeight: 400,
          color: 'var(--gpm-ink-body)',
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {body}
      </p>
    </article>
  )
}

// 4/8 utility section: H2 + optional eyebrow in left rail (4 cols),
// prose right (8 cols). Used for Identity / Pricing / Complaints /
// Data sections. The brief asked for 3/9 — using 4/8 for clean grid
// math (3+9=12 too, but the heading column at 3 cols is too narrow
// for an h2 cap, so 4/8 reads better).
function UtilitySection({
  eyebrow,
  heading,
  prose,
}: {
  eyebrow?: string
  heading: string
  prose: React.ReactNode
}) {
  return (
    <section className="w-full py-16 md:py-24">
      <div
        className="mx-auto"
        style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12"
          style={{ rowGap: 24, columnGap: 64, alignItems: 'start' }}
        >
          <div className="lg:col-span-4">
            {eyebrow && <span style={eyebrowStyle}>{eyebrow}</span>}
            <h2
              style={{
                ...sectionHeadlineStyle,
                marginBottom: 0,
              }}
            >
              {heading}
            </h2>
          </div>
          <div className="lg:col-span-8" style={proseGroupStyle}>
            {prose}
          </div>
        </div>
      </div>
    </section>
  )
}

// TBC chip — gold-secondary dashed underline, italic. Surfaces a
// content gap (counsel / Andrew filling in) rather than hiding it.
function Tbc({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontStyle: 'italic',
        opacity: 0.7,
        borderBottom: '1.5px dashed var(--gpm-gold-secondary)',
        paddingBottom: 1,
      }}
    >
      [{children}]
    </span>
  )
}

function CompareRow({
  label,
  value,
  emphasis = false,
  last = false,
}: {
  label: string
  value: string
  emphasis?: boolean
  last?: boolean
}) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12,
        padding: '10px 0',
        borderBottom: last
          ? 'none'
          : '1px solid rgba(213, 205, 182, 0.18)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13.5,
          fontWeight: 400,
          color: 'rgba(245, 240, 225, 0.85)',
          lineHeight: 1.45,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13.5,
          fontWeight: emphasis ? 600 : 500,
          color: 'var(--gpm-gold-deep)',
          textAlign: 'right',
        }}
      >
        {value}
      </span>
    </li>
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
  fontSize: 'clamp(24px, 2.4vw, 30px)',
  fontWeight: 500,
  color: 'var(--gpm-walnut-deep)',
  lineHeight: 1.3,
  margin: 0,
  marginBottom: 24,
}

const proseGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

const proseStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 16,
  fontWeight: 400,
  color: 'var(--gpm-ink-body)',
  lineHeight: 1.7,
  margin: 0,
}
