import Image from 'next/image'
import Link from 'next/link'
import {
  SectionDivider,
  PreFooterDisclaimer,
  preFooterDisclaimerParagraphStyle,
} from '@/components/content'
import { WilliamsStoryBreadcrumb } from '@/components/who-we-are/williams-story'

// /who-we-are/williams-story page composition.
//
// Editorial testimony page built from the williams-story.html template
// (2026-05-08). Page-shell pattern: sits inside the (marketing) route
// group so SiteHeader + main + SiteFooter chrome is inherited from
// app/(marketing)/layout.tsx.
//
// 12-col / 1200 max grid throughout — none of the HTML template's
// container-reading (640) or container-verify (760) constraints make
// it into the React build. Prose paragraphs cap at ~720 internally for
// reading comfort, but live inside the 1200 rail with a 4-col callout
// sidebar so no horizontal line is left empty.
//
// Section composition:
//   Hero — 8/4 (H1 + attribution / "How to read this" indicator)
//   Portrait — full-width 1200 documentary image
//   Short version — 8/4 (prose / "THE FOUR DECISIONS" callout)
//   Video — full-width 1200 16:9 placeholder + caption
//   Chapter 1 "A decade inside" — 8/4 (prose / "THE CATEGORY" definitions)
//   Pull quote 1 (full-width tinted)
//   Chapter 2 "The conversation that changed my mind" — 8/4 (prose / WHY THIS MATTERS callout)
//   Pull quote 2
//   Chapter 3 "The week that followed" — 8/4 (prose / pull-quote sidebar)
//   Chapter 4 "What I built instead" — 8/4 (prose / arithmetic callout)
//   Verse section (canvas-deep) — 7/5 (verse panel / prose), centered
//   Verification close — 3-up cards filling 1200
//   PreFooterDisclaimer (cream, site-wide standard)

export const metadata = {
  title: 'William’s Story',
  description:
    'A decade inside the Gold IRA industry, the conversation that changed his mind, and the company he built afterwards. The full testimony from William Armour, Grace Precious Metals co-founder and CEO.',
}

export default function WilliamsStoryPage() {
  return (
    <>
      <WilliamsStoryBreadcrumb />

      {/* HERO — 8/4 split. H1 + attribution left, "How to read this" right.
          Left edge anchored at the 1200 rail's left edge. */}
      <section className="w-full" style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-12"
            style={{ rowGap: 32, columnGap: 64, alignItems: 'end' }}
          >
            <div className="lg:col-span-8">
              <span style={eyebrowStyle}>WILLIAM&rsquo;S STORY</span>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 500,
                  color: 'var(--gpm-ink-display)',
                  lineHeight: 1.2,
                  margin: 0,
                  marginBottom: 20,
                  maxWidth: 880,
                }}
              >
                Why I left the industry to build Grace.
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--gpm-gold-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                AN ACCOUNT FROM WILLIAM ARMOUR, CO-FOUNDER &amp; CEO
              </p>
            </div>

            {/* Right 4 cols — read modes / time indicator */}
            <aside
              className="lg:col-span-4"
              aria-label="Reading and viewing options"
              style={{
                background: 'var(--gpm-linen-warm)',
                border: '1px solid var(--gpm-border-light)',
                borderRadius: 4,
                padding: '20px 24px',
              }}
            >
              <span style={calloutEyebrowStyle}>HOW TO READ THIS</span>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <ReadModeRow label="Two-minute version" value="In writing" />
                <ReadModeRow label="Full testimony" value="24-min video" />
                <ReadModeRow label="Full testimony" value="In writing" last />
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* PORTRAIT — full-width 1200 documentary image */}
      <section className="w-full" style={{ paddingBottom: 64 }}>
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: 2,
              overflow: 'hidden',
              background: 'var(--gpm-canvas-deep)',
              border: '1px solid var(--gpm-border-light)',
            }}
          >
            <Image
              src="/images/homepage/william-portrait.png"
              alt="William Armour — documentary portrait"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SHORT VERSION — 8/4 prose + "THE FOUR DECISIONS" callout */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>THE SHORT VERSION</span>
          <h2 style={sectionHeadlineStyle}>In two minutes.</h2>
          <div
            className="grid grid-cols-1 lg:grid-cols-12"
            style={{ rowGap: 32, columnGap: 64 }}
          >
            <div className="lg:col-span-8" style={proseGroupStyle}>
              <p style={proseStyle}>
                I am a pastor. I spent a decade in the Gold IRA industry before I
                helped found Grace. For most of those years I told myself I was an
                honest operator inside a difficult industry. I was selling a real
                product to people who needed help with their savings, and I was
                telling them the truth as far as the truth was visible to them on
                the call.
              </p>
              <p style={proseStyle}>
                What I did not say was that the price they were paying on the way
                in was a fifth or a third more than they understood. What I did
                not say was that when they sold back to us, the buyback would not
                be referenced to what they had paid. What I did not say was that
                the conversations I was paid to have were structured by a
                compensation system designed to do exactly what it did.
              </p>
              <p style={proseStyle}>
                I had a conversation with my own pastor that I had been avoiding.
                He asked me a question I had not asked myself. The answer kept me
                awake for a week.
              </p>
              <p style={proseStyle}>
                I left. Andrew, my brother, and Duncan, who had reached his own
                version of the same reckoning from the marketing side of the
                industry, helped me build Grace. The company is what it is
                because of what each of us would not do again. The pricing is
                published. The buyback is at spot. The advisors are salaried. The
                catalogue is bullion only. None of it is innovative. All of it is
                what should have been there from the beginning.
              </p>
            </div>

            <aside className="lg:col-span-4" style={surfaceCalloutStyle}>
              <span style={calloutEyebrowStyle}>THE FOUR DECISIONS</span>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <BulletRow text="Pricing published before the call." />
                <BulletRow text="Buyback at spot, never below." />
                <BulletRow text="Advisors on salary, no commission." />
                <BulletRow text="Bullion only — no numismatic." last />
              </ul>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 13,
                  color: 'var(--gpm-walnut-deep)',
                  lineHeight: 1.5,
                  margin: 0,
                  marginTop: 16,
                  paddingTop: 14,
                  borderTop: '1px solid rgba(184, 150, 46, 0.30)',
                }}
              >
                None of it innovative. All of it what should have been there
                from the beginning.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* VIDEO — full-width 16:9 placeholder, cinematic focal point */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>
            THE FULL TESTIMONY &middot; ON VIDEO
          </span>
          <div
            role="img"
            aria-label="William Armour video testimony — 24 minute play placeholder"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              background: 'var(--gpm-walnut-deep)',
              borderRadius: 2,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 80,
                  height: 80,
                  border: '2px solid var(--gpm-border-light)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    width: 0,
                    height: 0,
                    borderStyle: 'solid',
                    borderWidth: '14px 0 14px 22px',
                    borderColor:
                      'transparent transparent transparent var(--gpm-border-light)',
                    marginLeft: 6,
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--gpm-gold-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                }}
              >
                PLAY THE FULL TESTIMONY &middot; 24 MIN
              </span>
            </div>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 13,
              fontWeight: 400,
              color: 'rgba(31, 27, 22, 0.55)',
              lineHeight: 1.55,
              maxWidth: 720,
              margin: 0,
              marginTop: 16,
            }}
          >
            William Armour, recorded May 2026. The transcript below is the same
            testimony in written form &mdash; for readers who prefer to read,
            who want to follow the references, or who want to take the time
            the conversation needs.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* CHAPTER 1 — "A decade inside" — 8/4 prose + definition callout */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>
            THE FULL TESTIMONY &middot; IN WRITING
          </span>
          <h2 style={sectionHeadlineStyle}>A decade inside.</h2>
          <div
            className="grid grid-cols-1 lg:grid-cols-12"
            style={{ rowGap: 32, columnGap: 64 }}
          >
            <div className="lg:col-span-8" style={proseGroupStyle}>
              <p style={proseStyle}>
                I joined the Gold IRA industry the way most salespeople do
                &mdash; through a friend who told me the commissions were
                generous and the customers were grateful. He was right about
                the commissions. The gratitude was more complicated than I
                understood at the time.
              </p>
              <p style={proseStyle}>
                For ten years I worked inside the Gold IRA industry, selling
                retirement-account rollovers into physical gold. The customers
                came in mostly through television and direct mail, responding
                to campaigns that spoke directly to their concerns about their
                savings &mdash; about the dollar, about the federal government,
                about the kind of country their grandchildren would inherit.
                They were almost always older. Almost always Christian. Almost
                always frightened, in some specific way, about what was
                happening to the money they had spent their lives setting
                aside.
              </p>
              <p style={proseStyle}>
                My job was to call them back when they responded. To walk them
                through what a Gold IRA was. To answer their questions. To
                close them on a rollover.
              </p>
              <p style={proseStyle}>
                For the first few years I did the job the way it was set up to
                be done. I learned the scripts. I learned which objections came
                up most often and how to handle them. I got better at the
                close. I made a great deal of money doing it. The customers, by
                and large, were grateful &mdash; they had decided they wanted
                to own gold, they had called the number on the screen, and we
                had helped them do what they wanted to do. The transactions
                completed. The metals went to the depository. The customers
                received their statements.
              </p>
              <p style={proseStyle}>
                For most of those years I told myself I was an honest operator
                inside a difficult industry. The customers wanted gold. We sold
                them gold. The fact that the price they were paying was
                meaningfully higher than they understood it to be did not seem,
                to me, like the kind of thing that changed the moral picture.
                Markup is normal. Sales is normal. Margin is what businesses
                run on.
              </p>
            </div>

            <aside className="lg:col-span-4" style={linenCalloutStyle}>
              <span style={calloutEyebrowStyle}>THE CATEGORY</span>
              <dl style={{ margin: 0 }}>
                <DefinitionRow
                  term="Gold IRA"
                  def="A self-directed retirement account that holds physical gold or silver in an IRS-approved depository."
                />
                <DefinitionRow
                  term="Bullion"
                  def="Standard IRS-eligible coins and bars priced off the live spot price of the metal."
                />
                <DefinitionRow
                  term="Numismatic / Premium"
                  def="Coins sold above bullion value on the basis of rarity or marketing label. The category most associated with documented harm."
                  last
                />
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* PULL QUOTE 1 — full-width tinted */}
      <PullQuote quote="The two numbers did not match. I am a pastor. I could not keep doing it." />

      {/* CHAPTER 2 — "The conversation that changed my mind" — 8/4 + WHY THIS MATTERS */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <h2 style={sectionHeadlineStyle}>
            The conversation that changed my mind.
          </h2>
          <div
            className="grid grid-cols-1 lg:grid-cols-12"
            style={{ rowGap: 32, columnGap: 64 }}
          >
            <div className="lg:col-span-8" style={proseGroupStyle}>
              <p style={proseStyle}>
                I had a conversation with my own pastor &mdash; not a customer,
                not someone I was trying to sell to, my own pastor &mdash; that
                I had been avoiding for a long time. I had been avoiding it
                because I knew what he was going to ask me, and I knew I did
                not have a good answer.
              </p>
              <p style={proseStyle}>
                He did not ask the question I expected. He did not ask me
                whether what I was doing was legal. He did not ask me whether
                the customers were getting what they paid for. He asked me
                whether the customers, on the day they signed, knew the same
                things I knew.
              </p>
              <p style={proseStyle}>I told him no. They did not.</p>
              <p style={proseStyle}>
                He asked me whether, if they had known what I knew, they would
                have made the same decision.
              </p>
              <p style={proseStyle}>
                I told him I did not know. Some of them, probably yes. Many of
                them, I thought, probably no. The price they were paying on the
                way in was a fifth or a third more than they understood. The
                buyback they would receive on the way out, when they came to
                sell back, was not referenced to what they had paid. It was
                referenced to the bullion value of the metal at the day of
                sale, and on a product that was sold at a meaningful markup
                over bullion, the round-trip arithmetic was much harder than
                the entry conversation suggested.
              </p>
              <p style={proseStyle}>
                He asked me whether the people I was selling to were the kind
                of people my church served on Sunday.
              </p>
              <p style={proseStyle}>
                I told him they were the same people. Older. Christian. Worried
                about their savings. Worried about the country. Often widows.
                Often the kind of people for whom the retirement account was
                the only meaningful asset they had.
              </p>
              <p style={proseStyle}>He asked me how I had reconciled it.</p>
              <p style={proseStyle}>
                I told him the truth, which was that I had reconciled it by
                not asking the question he had just asked me.
              </p>
            </div>

            <aside className="lg:col-span-4" style={linenCalloutStyle}>
              <span style={calloutEyebrowStyle}>WHY THIS MATTERS</span>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 16,
                  fontWeight: 400,
                  color: 'var(--gpm-ink-body)',
                  lineHeight: 1.6,
                  margin: 0,
                  marginBottom: 14,
                }}
              >
                The information asymmetry William names here is the structural
                feature behind the documented Gold IRA consumer-harm pattern.
                A buyer who does not know the same things the seller knows is
                buying half a transaction.
              </p>
              <Link
                href="/pricing/numismatic-coins"
                className="gpm-link-tier4"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                See the pattern <span aria-hidden="true">→</span>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* PULL QUOTE 2 */}
      <PullQuote quote="I talked to my pastor. He asked me the question I had not asked myself." />

      {/* CHAPTER 3 — "The week that followed" — 8/4 + sidebar pull quote */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <h2 style={sectionHeadlineStyle}>The week that followed.</h2>
          <div
            className="grid grid-cols-1 lg:grid-cols-12"
            style={{ rowGap: 32, columnGap: 64 }}
          >
            <div className="lg:col-span-8" style={proseGroupStyle}>
              <p style={proseStyle}>
                I did not sleep well that week. I went to work. I made the
                calls. I closed two rollovers in those five days. The
                conversations were not different from any other week&rsquo;s
                conversations. The customers were not different from any other
                week&rsquo;s customers. I was different. I was hearing the
                questions my pastor had asked sitting on top of every script I
                had ever learned.
              </p>
              <p style={proseStyle}>
                I called my brother on the Friday night. Andrew is a qualified
                accountant &mdash; a careful man, slow to anger, slower to act.
                I told him what my pastor had asked me. I told him what I had
                answered. I told him I did not know what to do.
              </p>
              <p style={proseStyle}>
                Andrew is the kind of person who does not respond to a question
                of this size in the moment. He told me he would think about it.
                He called me back two days later with three pages of notes. The
                notes were not about whether I should leave. The notes were
                about what a Gold IRA company would look like if it was
                structured around the answers I should have been able to give
                my pastor. Published pricing. Buyback at spot. Salaried
                advisors. Bullion only. He had worked through the financial
                arithmetic. He had worked through whether the model could
                sustain itself. He had concluded that it could.
              </p>
              <p style={proseStyle}>
                A few weeks later we started talking to Duncan. Duncan had
                spent his career on the marketing side of the same industry.
                He had not yet had my conversation with his pastor. By the time
                the three of us had been talking for a few months, he had had a
                version of it.
              </p>
            </div>

            <aside
              className="lg:col-span-4"
              style={{
                borderLeft: '2px solid var(--gpm-gold-deep)',
                paddingLeft: 28,
                paddingTop: 8,
                paddingBottom: 8,
                alignSelf: 'start',
              }}
            >
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 21,
                  fontWeight: 400,
                  color: 'var(--gpm-walnut-deep)',
                  lineHeight: 1.4,
                  margin: 0,
                  marginBottom: 14,
                }}
              >
                &ldquo;Three pages of notes about what a Gold IRA company
                would look like if it was structured around the answers I
                should have been able to give my pastor.&rdquo;
              </blockquote>
              <span style={calloutEyebrowStyle}>ANDREW&rsquo;S RESPONSE</span>
            </aside>
          </div>
        </div>
      </section>

      {/* CHAPTER 4 — "What I built instead" — 8/4 + arithmetic callout */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <h2 style={sectionHeadlineStyle}>What I built instead.</h2>
          <div
            className="grid grid-cols-1 lg:grid-cols-12"
            style={{ rowGap: 32, columnGap: 64 }}
          >
            <div className="lg:col-span-8" style={proseGroupStyle}>
              <p style={proseStyle}>
                Grace Precious Metals is what we built. None of what we built
                is innovative. The published spread is 11.1%, all in. The
                number is on the pricing page before any phone call. The
                buyback is at spot price on the day, with no markdown. The
                catalogue is standard IRS-eligible bullion only &mdash; no
                numismatic, no exclusive, no premium, no proof, no labels. The
                advisors are paid a salary, with no commission and no quotas.
                The Christian frame of the company is structural, not
                decorative &mdash; the principle the business is organised
                around is Proverbs 11:1, named once, applied operationally
                rather than displayed for marketing purposes.
              </p>
              <p style={proseStyle}>
                The arithmetic is straightforward. A customer who rolls
                $150,000 into a Grace Gold IRA pays $16,650 in spread on the
                way in. There is no admin fee, no setup fee, no annual account
                fee. When that customer sells back, they receive the spot
                price on the day. The dealer&rsquo;s revenue on the entire
                round trip is the spread on the entry &mdash; nothing more.
              </p>
              <p style={proseStyle}>
                I want to say what I am most aware of about the customers I
                called for ten years. There was a particular conversation I
                had often. A widow, sometimes recently bereaved, sometimes
                years past it, sitting alone with a retirement account she had
                inherited or built and a fear about what was going to happen
                to it. The conversations followed a pattern I came to know
                well. The premium products had higher commissions than the
                bullion. The compensation system did what compensation systems
                do. The widow paid what the widow paid. The metals went to
                the depository. The statements arrived. Some of those women,
                when they later sold back, discovered that the round-trip
                arithmetic was not what they had understood it to be. The
                losses, when totalled across the category, were measured in
                hundreds of millions of dollars over the years I was inside
                the industry.
              </p>
              <p style={proseStyle}>
                I am not telling you this to claim that I personally was the
                worst operator in the category. I was not. I was a normal
                operator inside a system that was structured the way it was
                structured. That is part of the point. The customers were not
                harmed by individuals failing to be honest. They were harmed
                by a system that was structured so that even the operators
                who thought they were honest were not telling the customer the
                things the customer needed to know.
              </p>
              <p style={proseStyle}>
                Grace is built around the premise that the system is the
                problem. We changed the system. The pricing is published. The
                compensation is salaried. The catalogue is bullion. The
                buyback is at spot. We measure our weight, and we let the
                customer measure it too.
              </p>
            </div>

            <aside className="lg:col-span-4" style={surfaceCalloutStyle}>
              <span style={calloutEyebrowStyle}>THE ARITHMETIC</span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <ArithmeticRow label="Rollover" value="$150,000" />
                <Hairline />
                <ArithmeticRow
                  label="Grace spread (11.1%)"
                  value="$16,650"
                />
                <Hairline />
                <ArithmeticRow label="Admin fee" value="$0" muted />
                <Hairline />
                <ArithmeticRow label="Annual account fee" value="$0" muted />
                <Hairline />
                <ArithmeticRow
                  label="Buyback markdown"
                  value="$0"
                  emphasis
                />
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 13,
                  color: 'var(--gpm-walnut-deep)',
                  lineHeight: 1.5,
                  margin: 0,
                  paddingTop: 14,
                  borderTop: '1px solid rgba(184, 150, 46, 0.30)',
                }}
              >
                Round-trip dealer revenue equals the entry spread. Nothing
                more.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* VERSE — tinted band, 7/5 split (verse left, prose right), centered */}
      <section
        className="w-full py-16 md:py-24"
        style={{ background: 'var(--gpm-canvas-deep)' }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>THE VERSE</span>
          <div
            className="grid grid-cols-1 lg:grid-cols-12"
            style={{ rowGap: 32, columnGap: 64, alignItems: 'center' }}
          >
            <aside
              aria-labelledby="williams-verse-ref"
              className="lg:col-span-7"
              style={{
                background: 'var(--gpm-surface)',
                borderLeft: '4px solid var(--gpm-gold-deep)',
                borderRadius: 2,
                padding: '32px 36px',
              }}
            >
              <span
                id="williams-verse-ref"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--gpm-gold-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  marginBottom: 14,
                }}
              >
                PROVERBS 11:1
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(20px, 2.4vw, 24px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--gpm-ink-display)',
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                &ldquo;A false balance is an abomination to the Lord, but a
                just weight is his delight.&rdquo;
              </p>
            </aside>

            <div className="lg:col-span-5" style={proseGroupStyle}>
              <p style={proseStyle}>
                The weight is what the customer is charged. The verse describes
                what the category, at its worst, has failed to do &mdash; and
                what we are structurally committed to doing differently.
              </p>
              <p style={proseStyle}>
                It is the verse above the door. It is also the answer to the
                question my pastor asked me on the day this began.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* VERIFICATION CLOSE — 3-up cards filling 1200 */}
      <section className="w-full py-16 md:py-24">
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
        >
          <span style={eyebrowStyle}>VERIFY THE CLAIM</span>
          <h2 style={sectionHeadlineStyle}>
            You heard the story. Verify the claim.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 17,
              fontWeight: 400,
              color: 'var(--gpm-ink-body)',
              lineHeight: 1.6,
              margin: 0,
              marginBottom: 32,
              maxWidth: 800,
            }}
          >
            Every claim in the testimony above is operational somewhere on
            this website. Read the page that holds the proof.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 24 }}
          >
            <VerifyCard
              tag="PRICING"
              headline="The spread is 11.1%, all in."
              body="The published price William refers to. Visible before any phone call."
              href="/pricing"
            />
            <VerifyCard
              tag="PRICING / BUYBACK"
              headline="Buyback at spot, never below."
              body="The exit-side commitment. The mechanic the industry typically reverses."
              href="/pricing/buyback"
            />
            <VerifyCard
              tag="PRICING / NUMISMATIC"
              headline="The catalogue does not include them."
              body="The product category most associated with documented consumer harm — refused, not at any margin."
              href="/pricing/numismatic-coins"
            />
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
          References to William Armour&rsquo;s prior employment describe his
          work inside the Gold IRA industry. No specific firm is named on
          this page.
        </p>
        <p style={preFooterDisclaimerParagraphStyle}>
          References to industry pricing patterns (&ldquo;a fifth or a third
          more&rdquo;), to buyback structures, and to category-level harm
          describe documented patterns at the category level. They are not
          allegations against any specific named dealer.
        </p>
        <p style={preFooterDisclaimerParagraphStyle}>
          The widow account in the testimony is presented as composite,
          drawing on patterns described in adjudicated industry cases and in
          the testimonies of multiple individuals known to William over the
          course of his decade in the industry.
        </p>
      </PreFooterDisclaimer>
    </>
  )
}

// ============================================================
// Inline helpers — layout-level, not new component-library entries
// ============================================================

function ReadModeRow({
  label,
  value,
  last = false,
}: {
  label: string
  value: string
  last?: boolean
}) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '8px 0',
        borderBottom: last ? 'none' : '1px dashed rgba(213, 205, 182, 0.6)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 14,
          fontWeight: 400,
          color: 'var(--gpm-ink-body)',
          lineHeight: 1.45,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--gpm-gold-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.10em',
        }}
      >
        {value}
      </span>
    </li>
  )
}

function BulletRow({ text, last = false }: { text: string; last?: boolean }) {
  return (
    <li
      style={{
        display: 'flex',
        gap: 10,
        alignItems: 'baseline',
        padding: '8px 0',
        borderBottom: last ? 'none' : '1px dashed rgba(213, 205, 182, 0.6)',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 700,
          color: 'var(--gpm-gold-deep)',
          flexShrink: 0,
        }}
      >
        ✓
      </span>
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 15,
          fontWeight: 400,
          color: 'var(--gpm-ink-body)',
          lineHeight: 1.55,
        }}
      >
        {text}
      </span>
    </li>
  )
}

function DefinitionRow({
  term,
  def,
  last = false,
}: {
  term: string
  def: string
  last?: boolean
}) {
  return (
    <div
      style={{
        paddingTop: 14,
        paddingBottom: last ? 0 : 14,
        borderBottom: last ? 'none' : '1px dashed rgba(213, 205, 182, 0.6)',
      }}
    >
      <dt
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 16,
          fontWeight: 500,
          color: 'var(--gpm-ink-display)',
          marginBottom: 4,
        }}
      >
        {term}
      </dt>
      <dd
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 400,
          color: 'var(--gpm-ink-body)',
          lineHeight: 1.55,
          margin: 0,
        }}
      >
        {def}
      </dd>
    </div>
  )
}

function ArithmeticRow({
  label,
  value,
  emphasis = false,
  muted = false,
}: {
  label: string
  value: string
  emphasis?: boolean
  muted?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 400,
          color: muted ? 'rgba(31, 27, 22, 0.65)' : 'var(--gpm-ink-body)',
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: emphasis ? 18 : 14,
          fontWeight: emphasis ? 600 : 500,
          color: emphasis
            ? 'var(--gpm-gold-deep)'
            : muted
            ? 'rgba(31, 27, 22, 0.75)'
            : 'var(--gpm-walnut-deep)',
          fontFeatureSettings: '"tnum"',
          lineHeight: 1.0,
        }}
      >
        {value}
      </span>
    </div>
  )
}

function Hairline() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'block',
        height: 0.5,
        background: 'rgba(213, 205, 182, 0.6)',
      }}
    />
  )
}

function PullQuote({ quote }: { quote: string }) {
  return (
    <div className="w-full" style={{ padding: '48px 0' }}>
      <div
        className="mx-auto"
        style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
      >
        <div
          style={{
            background: 'var(--gpm-surface)',
            borderLeft: '4px solid var(--gpm-gold-deep)',
            borderRadius: 2,
            padding: '40px 48px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 2.6vw, 28px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--gpm-ink-display)',
              lineHeight: 1.5,
              margin: 0,
              maxWidth: 960,
            }}
          >
            &lsquo;{quote}&rsquo;
          </p>
        </div>
      </div>
    </div>
  )
}

function VerifyCard({
  tag,
  headline,
  body,
  href,
}: {
  tag: string
  headline: string
  body: string
  href: string
}) {
  return (
    <article
      style={{
        background: 'var(--gpm-linen-warm)',
        borderLeft: '2px solid var(--gpm-gold-primary)',
        padding: '32px 28px',
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
          marginBottom: 12,
        }}
      >
        {tag}
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 18,
          fontWeight: 500,
          color: 'var(--gpm-ink-display)',
          lineHeight: 1.35,
          margin: 0,
          marginBottom: 12,
        }}
      >
        {headline}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 15,
          fontWeight: 400,
          color: 'var(--gpm-ink-body)',
          lineHeight: 1.55,
          margin: 0,
          marginBottom: 16,
          flex: 1,
        }}
      >
        {body}
      </p>
      <Link
        href={href}
        className="gpm-link-tier4"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        See the page <span aria-hidden="true">→</span>
      </Link>
    </article>
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
  marginBottom: 32,
  maxWidth: 1000,
}

const proseGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
}

const proseStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: 17,
  fontWeight: 400,
  color: 'var(--gpm-ink-body)',
  lineHeight: 1.7,
  margin: 0,
}

const calloutEyebrowStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 600,
  color: 'var(--gpm-gold-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.14em',
  marginBottom: 14,
}

const surfaceCalloutStyle: React.CSSProperties = {
  background: 'var(--gpm-surface)',
  borderLeft: '4px solid var(--gpm-gold-deep)',
  borderRadius: 2,
  padding: '28px 32px',
  alignSelf: 'start',
}

const linenCalloutStyle: React.CSSProperties = {
  background: 'var(--gpm-linen-warm)',
  border: '1px solid var(--gpm-border-light)',
  borderRadius: 4,
  padding: '28px 32px',
  alignSelf: 'start',
}
