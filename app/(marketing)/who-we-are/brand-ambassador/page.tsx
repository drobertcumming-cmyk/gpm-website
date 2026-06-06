import Image from 'next/image'
import Link from 'next/link'
import { withBase } from '@/lib/basepath'

// /who-we-are/brand-ambassador
//
// Dedicated Marjorie Taylor Greene ambassador page. Linked from the
// homepage AmbassadorBand CTA. Per CMO override on 2026-06-05, the
// "no celebrity endorsements at launch" non-negotiable in CLAUDE.md
// is suspended for this surface.
//
// Sits inside the (marketing) route group, so SiteHeader, <main>, and
// SiteFooter are inherited from app/(marketing)/layout.tsx — page
// returns only the content of the <main> slot.
//
// Compliance posture:
//   - FTC material-connection disclosure uses the CMO-cleared verbatim
//     line ("Marjorie Taylor Greene has a paid material connection
//     with Grace Precious Metals"). The spec showed a placeholder
//     ("[Material-connection disclosure — pending counsel]"); the
//     cleared copy supersedes it.
//   - Hero lede has the spec typo "Here's why we chose us" corrected
//     to "Here's why she chose us" — the only narrative agent in the
//     surrounding sentences is MTG.
//   - 11.1% all-in spread, no admin fee, buyback at spot all carry
//     CFO-cleared status.
//   - William framing uses generic pastoral language ("a pastor who
//     spent years inside the Gold IRA industry") without naming
//     Genesis, satisfying the CLAUDE.md non-compete adjacency gate.
//   - Pre-footer disclaimer wording is the spec version, which is
//     more detailed than the article-level canonical and adds a date
//     stamp on the 11.1% claim. Flag for counsel review.

export const metadata = {
  title: 'Marjorie Taylor Greene stands with Grace — Our Brand Ambassador',
  description:
    "Grace partnered with one of America's most recognized voices for family, faith, and self-reliance. Here's why she chose Grace, and who she's pointing her audience toward.",
}

const PAGE_CSS = `
.gpm-brand-ambassador {
  --cream-canvas: #F5F0E1;
  --canvas-deep: #F0E9D6;
  --walnut-deep: #3D2817;
  --walnut-mid: #5C4632;
  --gold-secondary: #9C7322;
  --gold-deep: #B8962E;
  --line-soft: rgba(92, 70, 50, 0.20);
  background: var(--cream-canvas);
  color: var(--walnut-deep);
  font-family: var(--font-sans), Inter, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.7;
}

/* ===== READING COLUMN ===== */
.gpm-brand-ambassador .reading-column {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 56px;
}

/* ===== BREADCRUMB ===== */
.gpm-brand-ambassador .breadcrumb-bar { padding: 20px 0 0; }
.gpm-brand-ambassador .breadcrumb {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.4;
}
.gpm-brand-ambassador .breadcrumb a {
  color: var(--walnut-mid);
  text-decoration: none;
  transition: color 0.2s ease;
}
.gpm-brand-ambassador .breadcrumb a:hover { color: var(--gold-secondary); }
.gpm-brand-ambassador .breadcrumb .sep { margin: 0 6px; color: var(--walnut-mid); opacity: 0.5; }
.gpm-brand-ambassador .breadcrumb-rule {
  width: 100%;
  height: 0.5px;
  background: var(--line-soft);
  margin-top: 20px;
}

/* ===== HERO BLOCK ===== */
.gpm-brand-ambassador .hero-band { padding: 56px 0 64px; }
.gpm-brand-ambassador .hero-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 48px;
  align-items: start;
}
.gpm-brand-ambassador .hero-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 18px;
}
.gpm-brand-ambassador .hero-h1 {
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(34px, 4.4vw, 48px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.12;
  margin-bottom: 24px;
  letter-spacing: -0.005em;
}
.gpm-brand-ambassador .hero-lede {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 17px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.65;
  border-left: 3px solid var(--gold-secondary);
  padding-left: 20px;
  max-width: 480px;
}
.gpm-brand-ambassador .hero-portrait {
  width: 280px;
  height: 280px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(184, 150, 46, 0.35);
  background: var(--canvas-deep);
}

.gpm-brand-ambassador .section-rule {
  width: 100%;
  height: 0.5px;
  background: var(--line-soft);
}

/* ===== SHARED GROUND SECTION ===== */
.gpm-brand-ambassador .shared-band { padding: 64px 0; }
.gpm-brand-ambassador .section-h2 {
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(26px, 3vw, 32px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.25;
  margin-bottom: 28px;
  letter-spacing: -0.003em;
  text-align: center;
}
.gpm-brand-ambassador .section-h2.left-align { text-align: left; }
.gpm-brand-ambassador .body-prose {
  max-width: 720px;
  margin: 0 auto;
}
.gpm-brand-ambassador .body-prose p {
  font-family: var(--font-sans);
  font-size: 17px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.7;
  margin-bottom: 20px;
}

/* ===== PILLARS GRID ===== */
.gpm-brand-ambassador .pillars-band {
  background: var(--canvas-deep);
  padding: 28px 32px;
  margin: 40px auto 0;
  max-width: 880px;
}
.gpm-brand-ambassador .pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.gpm-brand-ambassador .pillar-title {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--walnut-deep);
  margin-bottom: 8px;
}
.gpm-brand-ambassador .pillar-body {
  font-family: var(--font-sans);
  font-size: 13.5px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.55;
}

/* ===== TWO STORIES SECTION ===== */
.gpm-brand-ambassador .stories-band { padding: 64px 0; }
.gpm-brand-ambassador .stories-grid {
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.gpm-brand-ambassador .story-card {
  border-radius: 4px;
  padding: 36px 32px;
}
.gpm-brand-ambassador .story-card.her {
  background: var(--canvas-deep);
  color: var(--walnut-deep);
}
.gpm-brand-ambassador .story-card.his {
  background: var(--walnut-deep);
  color: var(--cream-canvas);
}
.gpm-brand-ambassador .story-portrait {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(184, 150, 46, 0.35);
  background: rgba(0, 0, 0, 0.05);
  position: relative;
  margin-bottom: 24px;
}
.gpm-brand-ambassador .story-eyebrow {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.35;
  margin-bottom: 16px;
}
.gpm-brand-ambassador .story-card.her .story-eyebrow { color: var(--walnut-deep); }
.gpm-brand-ambassador .story-card.his .story-eyebrow { color: var(--cream-canvas); }
.gpm-brand-ambassador .story-body {
  font-family: var(--font-sans);
  font-size: 14.5px;
  font-weight: 400;
  line-height: 1.65;
}
.gpm-brand-ambassador .story-card.her .story-body { color: var(--walnut-deep); }
.gpm-brand-ambassador .story-card.his .story-body { color: rgba(245, 240, 225, 0.92); }

/* ===== ENDORSEMENT QUOTE SECTION ===== */
.gpm-brand-ambassador .endorsement-band { padding: 64px 0; }
.gpm-brand-ambassador .endorsement-quote-wrap {
  max-width: 720px;
  margin: 0 auto;
}
.gpm-brand-ambassador .endorsement-quote {
  background: var(--canvas-deep);
  border-left: 3px solid var(--gold-secondary);
  padding: 36px 40px;
}
.gpm-brand-ambassador .endorsement-quote p {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 17px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.65;
  margin-bottom: 24px;
}
.gpm-brand-ambassador .endorsement-attribution {
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 600;
  color: var(--walnut-deep);
  text-transform: none;
  letter-spacing: 0;
}
.gpm-brand-ambassador .ftc-disclosure {
  font-family: var(--font-sans);
  font-style: italic;
  font-size: 12px;
  font-weight: 400;
  color: var(--walnut-mid);
  margin-top: 20px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.55;
}

/* ===== END CTA SECTION ===== */
.gpm-brand-ambassador .endcta-band {
  padding: 56px 0 72px;
  text-align: center;
}
.gpm-brand-ambassador .endcta-headline {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 22px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.35;
  margin-bottom: 28px;
}
.gpm-brand-ambassador .endcta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
.gpm-brand-ambassador .btn-gold {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
  background: var(--gold-deep);
  border: 1.5px solid var(--gold-deep);
  border-radius: 2px;
  padding: 12px 24px;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease;
}
.gpm-brand-ambassador .btn-gold:hover {
  background: var(--gold-secondary);
  border-color: var(--gold-secondary);
}
.gpm-brand-ambassador .btn-outline {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--walnut-deep);
  background: transparent;
  border: 1.5px solid var(--walnut-deep);
  border-radius: 2px;
  padding: 12px 24px;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}
.gpm-brand-ambassador .btn-outline:hover {
  background: var(--walnut-deep);
  color: var(--cream-canvas);
}

/* ===== PRE-FOOTER DISCLAIMER ===== */
.gpm-brand-ambassador .prefooter-disclaimer {
  background: var(--canvas-deep);
  padding: 36px 0;
}
.gpm-brand-ambassador .prefooter-disclaimer p {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 56px;
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .gpm-brand-ambassador .reading-column { padding: 0 32px; }
  .gpm-brand-ambassador .pillars-band,
  .gpm-brand-ambassador .prefooter-disclaimer p { padding-left: 32px; padding-right: 32px; }
}
@media (max-width: 768px) {
  .gpm-brand-ambassador .reading-column { padding: 0 24px; }
  .gpm-brand-ambassador { font-size: 16px; }
  .gpm-brand-ambassador .hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .gpm-brand-ambassador .hero-portrait {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  .gpm-brand-ambassador .hero-h1 { font-size: 32px; }
  .gpm-brand-ambassador .hero-lede { font-size: 16px; padding-left: 16px; }
  .gpm-brand-ambassador .pillars-band,
  .gpm-brand-ambassador .prefooter-disclaimer p { padding-left: 24px; padding-right: 24px; }
  .gpm-brand-ambassador .pillars-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .gpm-brand-ambassador .stories-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 24px;
  }
  .gpm-brand-ambassador .story-card { padding: 28px 24px; }
  .gpm-brand-ambassador .endorsement-quote { padding: 28px 24px; }
  .gpm-brand-ambassador .endorsement-quote p { font-size: 16px; }
  .gpm-brand-ambassador .endcta-buttons { flex-direction: column; gap: 12px; width: 100%; padding: 0 24px; }
  .gpm-brand-ambassador .endcta-buttons .btn-gold,
  .gpm-brand-ambassador .endcta-buttons .btn-outline {
    width: 100%;
    text-align: center;
    display: block;
  }
}
`

export default function Page() {
  return (
    <div className="gpm-brand-ambassador">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* BREADCRUMB */}
      <div className="reading-column">
        <div className="breadcrumb-bar">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/who-we-are">Who We Are</Link>
            <span className="sep">›</span>
            <span>Our Brand Ambassador</span>
          </nav>
          <div className="breadcrumb-rule" />
        </div>
      </div>

      {/* HERO */}
      <div className="reading-column">
        <div className="hero-band">
          <div className="hero-grid">
            <div>
              <span className="hero-eyebrow">Our Brand Ambassador</span>
              <h1 className="hero-h1">Marjorie Taylor Greene stands with Grace</h1>
              <p className="hero-lede">
                Grace partnered with one of America&rsquo;s most recognized voices for family, faith, and self-reliance. Here&rsquo;s why she chose us — and who she&rsquo;s pointing her audience toward.
              </p>
            </div>
            <div className="hero-portrait">
              <Image
                src={withBase('/images/homepage/mtg-portrait.jpg')}
                alt="Marjorie Taylor Greene"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className="section-rule" />
      </div>

      {/* SHARED GROUND */}
      <div className="reading-column">
        <div className="shared-band">
          <h2 className="section-h2">Shared ground, not a celebrity endorsement</h2>
          <div className="body-prose">
            <p>
              Most gold companies that bring on a familiar face do it for the face. Grace did it for the alignment. Marjorie Taylor Greene has spent her career arguing that American families deserve to be treated straight and to keep what they&rsquo;ve worked for. Grace was built on the same conviction, expressed in the plainest way a precious-metals company can: we publish our price before the first phone call. An 11.1% all-in spread. No admin fee. A buyback at spot that never falls below it. Standard, IRS-eligible bullion — never a rare-coin upsell. When a company and an advocate believe the same thing about how families ought to be treated, the partnership reads as true because it is.
            </p>
            <p>
              She also reaches families the established gold industry has too often talked down to — people who want a straight answer and a fair price, not a sales script. Those are exactly the families Grace was built to serve.
            </p>
          </div>

          <div className="pillars-band">
            <div className="pillars-grid">
              <div>
                <p className="pillar-title">Faith and family</p>
                <p className="pillar-body">A business that answers to more than the next quarter.</p>
              </div>
              <div>
                <p className="pillar-title">Self-reliance</p>
                <p className="pillar-body">Owning real assets you hold, not paper promises you hope hold.</p>
              </div>
              <div>
                <p className="pillar-title">Treated straight</p>
                <p className="pillar-body">The price is on the page. You never have to call to find out what something costs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-rule" />
      </div>

      {/* TWO STORIES */}
      <div className="reading-column" style={{ maxWidth: 'none', padding: 0 }}>
        <div className="stories-band">
          <h2 className="section-h2">Two stories, one conviction</h2>
          <div className="stories-grid">
            <div className="story-card her">
              <div className="story-portrait">
                <Image
                  src={withBase('/images/homepage/mtg-portrait.jpg')}
                  alt="Marjorie Taylor Greene"
                  fill
                  sizes="120px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="story-eyebrow">Her story</p>
              <p className="story-body">
                Marjorie Taylor Greene built her public life on a stubborn idea: that ordinary Americans are capable of running their own affairs and deserve institutions that deal with them honestly. A businesswoman before she was a public figure, and a former U.S. Representative, she has consistently pressed the systems families are asked to trust with their money to say plainly what they&rsquo;re doing. That instinct — suspicion of what goes unsaid, respect for what&rsquo;s stated outright — is the bridge to Grace.
              </p>
            </div>
            <div className="story-card his">
              <div className="story-portrait">
                <Image
                  src={withBase('/images/homepage/william-portrait.png')}
                  alt="William Armour, Co-Founder &amp; CEO"
                  fill
                  sizes="120px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className="story-eyebrow">His story — the founder who takes the call</p>
              <p className="story-body">
                William Armour is a pastor who spent years inside the Gold IRA industry and came away troubled by how it treats the people it&rsquo;s meant to serve. He founded Grace to do the opposite: publish the price, put advisors on salary so no one earns a commission for steering you, and stand behind the buyback at spot. Marjorie brings families to the door. William is who they meet when they walk through it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-column">
        <div className="section-rule" />
      </div>

      {/* ENDORSEMENT QUOTE */}
      <div className="reading-column">
        <div className="endorsement-band">
          <h2 className="section-h2">The endorsement, in plain terms</h2>
          <div className="endorsement-quote-wrap">
            <div className="endorsement-quote">
              <p>
                &ldquo;I&rsquo;ve spent my career fighting for families who are tired of being talked around instead of talked to. When I looked at the Gold IRA industry, I saw the same thing I see in Washington — people making it complicated on purpose so you can&rsquo;t tell what you&rsquo;re paying. Grace is the opposite. The price is on the website before you ever pick up the phone. No hidden fees, no rare-coin games, no commission-driven advisors trying to steer you into something you didn&rsquo;t ask for. William built this company the way I believe every company should operate: say what you do, do what you say, and respect the people you serve enough to be honest with them. That&rsquo;s why I put my name behind Grace — not because they asked me to sell something, but because they&rsquo;re already doing what I&rsquo;ve been asking every institution in this country to do.&rdquo;
              </p>
              <span className="endorsement-attribution">— Marjorie Taylor Greene</span>
            </div>
          </div>
          <p className="ftc-disclosure">
            Marjorie Taylor Greene has a paid material connection with Grace Precious Metals.
          </p>
        </div>
        <div className="section-rule" />
      </div>

      {/* END CTA */}
      <div className="reading-column">
        <div className="endcta-band">
          <p className="endcta-headline">When you&rsquo;re ready, the price is already on the page.</p>
          <div className="endcta-buttons">
            <Link href="/who-we-are/williams-story" className="btn-gold">Read William&rsquo;s full story</Link>
            <Link href="/pricing" className="btn-outline">See our published pricing</Link>
          </div>
        </div>
      </div>

      {/* PRE-FOOTER DISCLAIMER */}
      <div className="prefooter-disclaimer">
        <p>
          Grace Precious Metals facilitates self-directed precious-metals IRAs through a qualified custodian and IRS-approved depository. Grace Precious Metals is not a fiduciary, does not provide tax or legal advice, and does not guarantee future performance of any asset. Past performance is not indicative of future results. Precious metals are subject to market risk and may lose value. Consult your own tax, legal, and financial advisors before making investment decisions. All IRA transactions are subject to IRS rules and regulations. The 11.1% spread is the company&rsquo;s published all-in cost at time of writing and may be subject to change.
        </p>
      </div>
    </div>
  )
}
