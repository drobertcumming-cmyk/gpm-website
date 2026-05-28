import Link from 'next/link'
import { withBase } from '@/lib/basepath'

// /resources/home-storage-ira-rules
//
// Seventh long-form article: the home-storage / checkbook-LLC IRA
// trap, statutory grounding (IRC §408(m)(3)(B)), McNulty v.
// Commissioner, and how compliant three-party custody works. TSX port
// of article7.html. Mirrors the IRA-eligible-gold-coins layout
// pattern (commit a03d181) — font-weight 500 H1, single-digit TOC,
// sharp 2px button corners, 880px reading column. Sits inside the
// (marketing) route group, so SiteHeader, <main>, and SiteFooter are
// inherited from app/(marketing)/layout.tsx.

export const metadata = {
  title: 'Home Storage Gold IRA Rules: Sifting Truth From Costly Misconceptions',
  description:
    "Keeping your Gold IRA assets at home is intuitively appealing. It is also, under current law, a path to an immediate taxable distribution and the permanent loss of your account's tax-advantaged status. This article explains what the law actually requires.",
}

const PAGE_CSS = `
.gpm-article-page {
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
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
}

/* ===== READING COLUMN ===== */
.gpm-article-page .reading-column {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 56px;
}

/* ===== BREADCRUMB ===== */
.gpm-article-page .breadcrumb-bar { padding: 20px 0 0; }
.gpm-article-page .breadcrumb {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.4;
}
.gpm-article-page .breadcrumb a {
  color: var(--walnut-mid);
  text-decoration: none;
  transition: color 0.2s ease;
}
.gpm-article-page .breadcrumb a:hover { color: var(--gold-secondary); }
.gpm-article-page .breadcrumb .sep { margin: 0 6px; color: var(--walnut-mid); opacity: 0.5; }
.gpm-article-page .breadcrumb-rule {
  width: 100%;
  height: 0.5px;
  background: var(--line-soft);
  margin-top: 20px;
}

/* ===== HERO BLOCK ===== */
.gpm-article-page .article-hero { padding: 56px 0 40px; }
.gpm-article-page .article-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 16px;
}
.gpm-article-page .article-h1 {
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.12;
  margin-bottom: 28px;
  letter-spacing: -0.005em;
}
.gpm-article-page .article-lede {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 18px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.65;
  border-left: 3px solid var(--gold-secondary);
  padding-left: 20px;
}

/* ===== INLINE TOC ===== */
.gpm-article-page .inline-toc {
  background: var(--canvas-deep);
  border-top: 0.5px solid var(--line-soft);
  border-bottom: 0.5px solid var(--line-soft);
  padding: 28px 32px;
  margin-bottom: 48px;
}
.gpm-article-page .toc-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 12px;
}
.gpm-article-page .toc-meta {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-deep);
  margin-bottom: 16px;
}
.gpm-article-page .toc-meta-label { font-weight: 500; }
.gpm-article-page .toc-rule {
  width: 100%;
  height: 0.5px;
  background: var(--line-soft);
  margin-bottom: 20px;
}
.gpm-article-page .toc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 40px;
}
.gpm-article-page .toc-item {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.gpm-article-page .toc-item a {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-deep);
  text-decoration: none;
  transition: color 0.2s ease;
}
.gpm-article-page .toc-item a:hover { color: var(--gold-secondary); }
.gpm-article-page .toc-number {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  color: var(--gold-secondary);
  font-variant-numeric: tabular-nums;
  min-width: 18px;
}

/* ===== ARTICLE BODY ===== */
.gpm-article-page .article-body { padding-bottom: 56px; }
.gpm-article-page .article-body h2 {
  font-family: var(--font-serif), Georgia, serif;
  font-size: clamp(26px, 3.4vw, 32px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.25;
  margin-top: 56px;
  margin-bottom: 20px;
  letter-spacing: -0.003em;
  scroll-margin-top: 80px;
}
.gpm-article-page .article-body h3 {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 22px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.35;
  margin-top: 36px;
  margin-bottom: 14px;
}
.gpm-article-page .article-body p {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.7;
  margin-bottom: 20px;
}
.gpm-article-page .article-body ol {
  margin: 0 0 20px 24px;
  padding-left: 8px;
}
.gpm-article-page .article-body ol li {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.7;
  margin-bottom: 14px;
  padding-left: 6px;
}
.gpm-article-page .article-body strong { font-weight: 600; }
.gpm-article-page .article-body em { font-style: italic; }
.gpm-article-page .article-body .article-img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  margin: 40px 0;
  display: block;
  background: var(--canvas-deep);
}
.gpm-article-page .article-body .article-img.hero-img {
  margin-top: 0;
  margin-bottom: 48px;
}

/* ===== COMPLIANCE TABLE ===== */
.gpm-article-page .cost-table-wrap {
  background: var(--canvas-deep);
  border-top: 0.5px solid var(--line-soft);
  border-bottom: 0.5px solid var(--line-soft);
  padding: 28px 0;
  margin: 40px 0;
  overflow-x: auto;
}
.gpm-article-page .cost-table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  padding: 0 32px;
}
.gpm-article-page .cost-table thead th {
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  text-align: left;
  padding: 0 16px 14px;
  border-bottom: 0.5px solid var(--line-soft);
}
.gpm-article-page .cost-table tbody tr {
  border-bottom: 0.5px solid var(--line-soft);
}
.gpm-article-page .cost-table tbody tr:last-child { border-bottom: none; }
.gpm-article-page .cost-table tbody td {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-deep);
  padding: 14px 16px;
  vertical-align: top;
  line-height: 1.5;
}
.gpm-article-page .cost-table tbody td.row-label {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  font-weight: 500;
}
.gpm-article-page .cost-table tbody td.consequence-noncompliant {
  color: var(--walnut-deep);
  font-weight: 500;
}

/* ===== YMYL INLINE DISCLAIMER ===== */
.gpm-article-page .ymyl-disclaimer {
  font-family: var(--font-serif), Georgia, serif;
  font-style: italic;
  font-size: 14px !important;
  color: var(--walnut-mid) !important;
  line-height: 1.6 !important;
  margin-top: 40px !important;
  padding-top: 20px;
  border-top: 0.5px solid var(--line-soft);
}

/* ===== END-OF-ARTICLE ===== */
.gpm-article-page .article-disclaimer {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  padding: 24px 0;
  border-top: 0.5px solid var(--line-soft);
}

/* ===== END CTA BAND ===== */
.gpm-article-page .end-cta-band {
  background: var(--canvas-deep);
  border-top: 0.5px solid var(--line-soft);
  border-bottom: 0.5px solid var(--line-soft);
  padding: 56px 32px;
  text-align: center;
  margin: 40px 0;
}
.gpm-article-page .end-cta-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 14px;
}
.gpm-article-page .end-cta-headline {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 24px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.3;
  margin-bottom: 14px;
}
.gpm-article-page .end-cta-subhead {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.6;
  max-width: 520px;
  margin: 0 auto 28px;
}
.gpm-article-page .end-cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.gpm-article-page .end-cta-buttons .btn-outline {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--walnut-deep);
  background: transparent;
  border: 1.5px solid var(--walnut-deep);
  border-radius: 2px;
  padding: 12px 24px;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}
.gpm-article-page .end-cta-buttons .btn-outline:hover {
  background: var(--walnut-deep);
  color: var(--cream-canvas);
}
.gpm-article-page .end-cta-buttons .btn-gold {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  background: var(--gold-deep);
  border: 1.5px solid var(--gold-deep);
  border-radius: 2px;
  padding: 12px 24px;
  text-decoration: none;
  transition: background 0.2s ease;
}
.gpm-article-page .end-cta-buttons .btn-gold:hover {
  background: var(--gold-secondary);
  border-color: var(--gold-secondary);
}

/* ===== RELATED READING ===== */
.gpm-article-page .related-reading { padding: 40px 0 32px; }
.gpm-article-page .related-heading {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 18px;
  font-weight: 400;
  color: var(--walnut-deep);
  margin-bottom: 24px;
}
.gpm-article-page .related-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 32px;
}
.gpm-article-page .related-card {
  border: 0.5px solid var(--line-soft);
  padding: 24px;
  text-decoration: none;
  display: block;
  transition: background 0.2s ease;
  color: inherit;
}
.gpm-article-page .related-card:hover { background: var(--canvas-deep); }
.gpm-article-page .related-card-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 10.5px;
  font-weight: 600;
  color: var(--gold-secondary);
  text-transform: uppercase;
  letter-spacing: 0.22em;
  margin-bottom: 8px;
}
.gpm-article-page .related-card-title {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 17px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.35;
  margin-bottom: 8px;
}
.gpm-article-page .related-card-meta {
  font-family: var(--font-sans);
  font-style: italic;
  font-size: 12.5px;
  font-weight: 400;
  color: var(--walnut-mid);
}
.gpm-article-page .back-to-resources {
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--gold-secondary);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--gold-secondary);
  transition: color 0.2s ease;
}
.gpm-article-page .back-to-resources:hover { color: var(--walnut-deep); }

/* ===== DISCLAIMER BAND ===== */
.gpm-article-page .section-disclaimer {
  background: var(--cream-canvas);
  padding: 48px 0;
}
.gpm-article-page .section-disclaimer .reading-column p {
  font-family: var(--font-serif), Georgia, serif;
  font-size: 13px;
  font-weight: 400;
  color: rgba(61, 40, 23, 0.75);
  line-height: 1.6;
  margin-bottom: 16px;
}
.gpm-article-page .section-disclaimer .disclaimer-divider {
  width: 100%;
  height: 1px;
  background: rgba(156, 115, 34, 0.25);
  margin-top: 24px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .gpm-article-page .reading-column { padding: 0 32px; }
}
@media (max-width: 768px) {
  .gpm-article-page .reading-column { padding: 0 24px; }
  .gpm-article-page { font-size: 16.5px; }
  .gpm-article-page .article-h1 { font-size: 38px; }
  .gpm-article-page .article-lede { font-size: 17px; }
  .gpm-article-page .article-body p,
  .gpm-article-page .article-body ol li { font-size: 16.5px; }
  .gpm-article-page .toc-grid { grid-template-columns: 1fr; }
  .gpm-article-page .toc-meta { display: flex; flex-direction: column; gap: 4px; }
  .gpm-article-page .article-body .article-img { height: 240px; }
  .gpm-article-page .end-cta-buttons { flex-direction: column; gap: 12px; }
  .gpm-article-page .end-cta-buttons .btn-outline,
  .gpm-article-page .end-cta-buttons .btn-gold {
    width: 100%;
    text-align: center;
    display: block;
  }
  .gpm-article-page .related-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .gpm-article-page .cost-table-wrap {
    margin-left: -24px;
    margin-right: -24px;
    padding: 28px 24px;
  }
}
`

const TOC = [
  { n: 1, id: 'section-1', label: 'The statutory foundation of precious metals custody' },
  { n: 2, id: 'section-2', label: 'The reality behind the "home storage safe loophole" marketing' },
  { n: 3, id: 'section-3', label: 'Financial consequences of tax court violations' },
  { n: 4, id: 'section-4', label: 'Navigating the safe and compliant path: IRS-approved depositories' },
  { n: 5, id: 'section-5', label: 'Honest weights and balanced counsel in retirement planning' },
]

const IMG_BASE = '/images/resources/home-storage-ira-rules'

export default function Page() {
  return (
    <div className="gpm-article-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* BREADCRUMB */}
      <div className="reading-column">
        <div className="breadcrumb-bar">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/resources">Resources</Link>
            <span className="sep">›</span>
            <Link href="/resources#compliance">Compliance &amp; rules</Link>
            <span className="sep">›</span>
            <span>Home Storage Gold IRA Rules</span>
          </nav>
          <div className="breadcrumb-rule" />
        </div>
      </div>

      {/* HERO */}
      <div className="reading-column">
        <div className="article-hero">
          <span className="article-eyebrow">Compliance &amp; rules</span>
          <h1 className="article-h1">Home Storage Gold IRA Rules: Sifting Truth From Costly Misconceptions</h1>
          <p className="article-lede">
            The idea of keeping your Gold IRA assets at home — in a safe you control, under your own roof — is intuitively appealing. It is also, under current law, a path to an immediate taxable distribution, a 10% early-withdrawal penalty if you are under 59½, and the permanent loss of your account&rsquo;s tax-advantaged status. This article explains what the law actually requires, what &ldquo;home storage&rdquo; promoters are actually selling, and how compliant custody works in practice.
          </p>
        </div>
      </div>

      {/* INLINE TOC */}
      <div className="reading-column">
        <div className="inline-toc">
          <span className="toc-eyebrow">On this page</span>
          <div className="toc-meta">
            <span className="toc-meta-label">Read time:</span> 9 min read
          </div>
          <div className="toc-rule" />
          <div className="toc-grid">
            {TOC.map((item) => (
              <div key={item.id} className="toc-item">
                <span className="toc-number">{item.n}</span>
                <a href={`#${item.id}`}>{item.label}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="reading-column">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase(`${IMG_BASE}/hero-retiree-paperwork.jpg`)}
          alt="Retired man at kitchen table reviewing retirement paperwork with calculator, warm natural light"
          className="article-img hero-img"
        />
      </div>

      {/* ARTICLE BODY */}
      <div className="reading-column">
        <div className="article-body">

          {/* SECTION 1 */}
          <h2 id="section-1">The statutory foundation of precious metals custody</h2>
          <h3>Does the IRS allow home storage of physical Gold IRA assets?</h3>
          <p>
            No. Under Internal Revenue Code §408(m)(3)(B), physical precious metals held in an IRA must be in the &ldquo;physical possession of a United States bank&rdquo; or an IRS-approved &ldquo;non-bank trustee.&rdquo; The statute does not provide an exception for the account owner&rsquo;s personal possession, regardless of the security measures employed. A home safe — however large, however well-anchored, however fire-rated — does not satisfy the statutory requirement because it is not a qualified trustee and the metals within it are in the physical possession of the account owner.
          </p>
          <p>
            This is not a gray area. The statute is specific: the metals must be held by a qualifying institution, not by the account owner. The IRS has not issued guidance creating a home-storage exception, and the Tax Court has ruled directly on the question (McNulty v. Commissioner, T.C. Memo 2021-37), finding that an account owner who took physical possession of IRA-held metals — even through an LLC structure — had received a taxable distribution.
          </p>
          <p>
            The practical implication is straightforward: if you want physical gold in an IRA, the gold must be held by a qualified custodian at an IRS-approved depository. You cannot hold it yourself. You cannot store it in your home. You cannot store it in a bank safe deposit box under your personal control. The custodial requirement is not optional, and the consequences of violating it are immediate and severe.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/vault-door-depository.jpg`)}
            alt="Heavy commercial vault door at a precious metals depository, partially open revealing metal shelving inside"
            className="article-img"
          />

          {/* SECTION 2 */}
          <h2 id="section-2">The reality behind the &ldquo;home storage safe loophole&rdquo; marketing</h2>
          <h3>What are home storage promoters actually selling?</h3>
          <p>
            A number of companies market what they call a &ldquo;home storage Gold IRA&rdquo; or a &ldquo;checkbook IRA.&rdquo; The pitch typically works as follows: you form a single-member LLC, your IRA invests in the LLC, the LLC purchases gold, and you — as the LLC&rsquo;s manager — store the gold in a safe at your home. The promoter often provides the safe as part of the package, along with LLC formation documents and a custodian willing to hold the LLC interest (rather than the metals directly).
          </p>
          <p>
            The marketing language is carefully constructed to imply legality without making an explicit legal claim. Phrases like &ldquo;IRS-compliant home storage,&rdquo; &ldquo;within the letter of the law,&rdquo; and &ldquo;thousands of satisfied customers&rdquo; create an impression of legitimacy. Some promoters cite a 2014 Forbes article or reference &ldquo;private letter rulings&rdquo; that they claim support the structure. These citations are either mischaracterized, taken out of context, or refer to institutional trustees — not individual account owners.
          </p>
          <p>
            What the promoter is actually selling is an LLC formation package, a consumer-grade safe, and a custodian arrangement that places the metals in the account owner&rsquo;s physical possession through the LLC intermediary. The LLC does not change the fundamental analysis: the account owner has unfettered access to and control over the metals. The IRS and the Tax Court have looked through the LLC structure and found that the account owner has received a distribution.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/home-safe-domestic.jpg`)}
            alt="Consumer-grade home safe sitting on closet floor next to shoes and storage boxes in a residential setting"
            className="article-img"
          />

          {/* SECTION 3 */}
          <h2 id="section-3">Financial consequences of tax court violations</h2>
          <h3>What happens when the IRS determines home storage is a distribution?</h3>
          <p>
            When the IRS determines that an account owner has taken physical possession of IRA-held precious metals — whether directly or through an LLC — the entire value of the metals at the time of possession is treated as a taxable distribution. The consequences are cumulative and immediate:
          </p>
          <p>
            The full fair market value of the metals is added to your ordinary income for the tax year in which possession occurred. If you are in the 24% federal bracket and you took possession of $100,000 in gold, you owe $24,000 in additional federal income tax — plus state income tax in most states. If you are under age 59½, an additional 10% early-distribution penalty applies: another $10,000 on the same $100,000. The tax-advantaged status of the account is permanently impaired for those assets. You cannot &ldquo;put the gold back&rdquo; and restore the IRA treatment. The distribution is irrevocable.
          </p>
          <p>
            In McNulty v. Commissioner (T.C. Memo 2021-37), the Tax Court found that the taxpayers had received a taxable distribution when they took physical possession of gold and silver coins through their LLC structure. The court rejected the argument that the LLC intermediary satisfied the custodial requirement. The tax bill — including penalties and interest — arrived years after the original transaction, when the taxpayers had already spent the gold&rsquo;s appreciation on other things. The financial damage was compounding and irreversible.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/tax-notice-table.jpg`)}
            alt="IRS notice showing additional tax due alongside a 1099-R form and calculator on a kitchen table"
            className="article-img"
          />

          {/* COMPLIANCE TABLE */}
          <div className="cost-table-wrap">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Storage Arrangement</th>
                  <th>IRS Treatment</th>
                  <th>Consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">Home safe (personal possession)</td>
                  <td>Not compliant — physical possession by owner</td>
                  <td className="consequence-noncompliant">Treated as taxable distribution</td>
                </tr>
                <tr>
                  <td className="row-label">Bank safe deposit box under personal control</td>
                  <td>Not compliant — owner control</td>
                  <td className="consequence-noncompliant">Treated as taxable distribution</td>
                </tr>
                <tr>
                  <td className="row-label">&ldquo;Checkbook LLC&rdquo; home storage</td>
                  <td>LLC does not override §408(m); owner has unfettered control</td>
                  <td className="consequence-noncompliant">Treated as taxable distribution (per McNulty)</td>
                </tr>
                <tr>
                  <td className="row-label">IRS-approved depository via qualified custodian</td>
                  <td>Compliant — qualified-trustee possession</td>
                  <td>Tax-advantaged status preserved</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* SECTION 4 */}
          <h2 id="section-4">Navigating the safe and compliant path: IRS-approved depositories</h2>
          <h3>How does compliant Gold IRA storage actually work?</h3>
          <p>A compliant Gold IRA involves three distinct parties, each with a defined role:</p>
          <ol>
            <li><strong>The dealer</strong> — sells you the physical gold at a disclosed price. The dealer&rsquo;s role ends at the point of sale; the dealer does not hold your metals long-term and does not serve as custodian.</li>
            <li><strong>The custodian</strong> — a qualified trustee (bank or IRS-approved non-bank trustee) that holds the IRA account itself. The custodian maintains the account records, processes contributions and distributions, and reports to the IRS. The custodian directs the depository on your behalf.</li>
            <li><strong>The depository</strong> — an IRS-approved storage facility (such as Delaware Depository and other federally recognized institutions) that holds the physical metals in allocated or segregated storage. The depository is the institution that satisfies the §408(m) &ldquo;physical possession&rdquo; requirement. Your metals are held in the depository&rsquo;s vault, not in your home, not in your safe deposit box, and not in your LLC&rsquo;s possession.</li>
          </ol>
          <p>
            This three-party structure is not optional. It is the mechanism the law requires. The metals must be in the physical possession of the depository (acting under the custodian&rsquo;s direction), not in the physical possession of the account owner. The structure exists specifically to prevent the account owner from having unfettered access to tax-advantaged assets — the same principle that prevents you from withdrawing cash from your 401(k) without tax consequences.
          </p>

          <h3>What does &ldquo;allocated&rdquo; and &ldquo;segregated&rdquo; storage mean?</h3>
          <p>
            Allocated storage means your specific coins or bars are identified, inventoried, and held separately from other customers&rsquo; metals. They are yours — serial numbers recorded, stored in a designated location within the vault. You can request an audit or a physical verification. Segregated storage goes further: your metals are physically separated in their own container or compartment, not commingled with other clients&rsquo; holdings even within the same vault section. Both arrangements satisfy the custodial requirement. The choice between them is a preference, not a compliance issue.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/depository-interior.jpg`)}
            alt="Depository worker in blue polo and white gloves placing labeled storage containers on vault shelving"
            className="article-img"
          />

          {/* SECTION 5 */}
          <h2 id="section-5">Honest weights and balanced counsel in retirement planning</h2>
          <h3>What does Grace&rsquo;s approach look like?</h3>
          <p>
            Grace Precious Metals does not offer home storage. We do not sell &ldquo;checkbook IRA&rdquo; packages. We do not provide safes. We do not form LLCs for the purpose of circumventing custodial requirements. We believe that offering a structure the Tax Court has already ruled non-compliant would be a disservice to the people who trust us with their retirement assets — and a violation of the principle that guides everything we do.
          </p>
          <p>
            The verse that anchors our practice — &ldquo;A false balance is an abomination to the Lord, but a just weight is his delight&rdquo; (Proverbs 11:1) — applies directly here. A &ldquo;home storage Gold IRA&rdquo; is a false balance: it promises the tax advantages of an IRA while delivering the tax consequences of a distribution. It weighs the marketing pitch on one side of the scale and hides the IRS consequences on the other. A just weight requires telling you the full truth: the law requires institutional custody, the Tax Court has confirmed it, and the consequences of non-compliance are severe and irreversible.
          </p>
          <p>
            Grace works with IRS-approved custodians and depositories to ensure your metals are held in full compliance with §408(m). Your gold is allocated, insured, and auditable. You receive regular statements confirming your holdings. When you are ready to take a distribution — on your timeline, at your chosen age — the process is straightforward and tax-compliant. There are no surprises, no retroactive tax bills, and no penalties. The structure works because it follows the law, not because it found a clever way around it.
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBase(`${IMG_BASE}/advisor-counsel.jpg`)}
            alt="Female advisor speaking calmly with older male customer, single pricing sheet between them"
            className="article-img"
          />

          <p>
            Our advisors are salaried. They do not earn commissions on the size of your purchase, and they do not earn bonuses for selling you a home-storage package. When you ask about home storage, they will tell you what this article tells you: it does not work, the law is clear, and the consequences are severe. Then they will walk you through the compliant path — custodian selection, depository options, allocated versus segregated storage — at whatever pace you need. No pressure, no urgency, no upsell.
          </p>

          {/* YMYL INLINE DISCLAIMER */}
          <p className="ymyl-disclaimer">
            This article discusses tax law, IRS regulations, and Tax Court rulings for educational purposes only. It does not constitute tax advice, legal advice, or a legal opinion. Tax law is complex and fact-specific; the application of §408(m) and related provisions to your circumstances may differ from the general principles described here. Consult a qualified tax attorney or CPA before making decisions about precious metals custody in an IRA. Grace Precious Metals is a dealer of physical precious metals and is not a tax advisor, attorney, or fiduciary.
          </p>

        </div>{/* end article-body */}
      </div>{/* end article reading-column */}

      {/* END-OF-ARTICLE SECTIONS */}
      <div className="reading-column">

        {/* DISCLAIMER LINE */}
        <p className="article-disclaimer">
          This article is educational and does not constitute tax, legal, or investment advice. Past performance does not guarantee future results. Consult a qualified professional regarding your specific situation.
        </p>

        {/* END CTA */}
        <div className="end-cta-band">
          <span className="end-cta-eyebrow">When you&rsquo;re ready</span>
          <h2 className="end-cta-headline">A conversation, on your own timeline.</h2>
          <p className="end-cta-subhead">
            If you have questions about home storage rules and where your metal can be held, our salaried advisors will walk you through your specific situation. No commission, no pressure, no urgency.
          </p>
          <div className="end-cta-buttons">
            <Link href="/briefing" className="btn-outline">Get the Briefing</Link>
            <Link href="/advisor" className="btn-gold">Talk to an advisor</Link>
          </div>
        </div>

        {/* RELATED READING */}
        <div className="related-reading">
          <p className="related-heading">Two more reads from the Resources library.</p>
          <div className="related-grid">
            <Link href="/resources/ira-eligible-gold-coins" className="related-card">
              <span className="related-card-eyebrow">What you can hold</span>
              <p className="related-card-title">IRA-Eligible Gold Coins: The Strict Regulatory Reality</p>
              <span className="related-card-meta">10 min read</span>
            </Link>
            <Link href="/resources/401k-to-gold-ira-rollover" className="related-card">
              <span className="related-card-eyebrow">Rollover mechanics</span>
              <p className="related-card-title">How to Roll a 401(k) Into Gold Without Tax Penalties</p>
              <span className="related-card-meta">10 min read</span>
            </Link>
          </div>
          <Link href="/resources" className="back-to-resources">← Back to Resources</Link>
        </div>

      </div>{/* end end-of-article reading-column */}

      {/* DISCLAIMER BAND */}
      <div className="section-disclaimer">
        <div className="reading-column">
          <p>
            Grace Precious Metals does not provide tax, legal, or investment advice. All content is for informational purposes only. Precious metals involve risk and are not suitable for all investors. Past performance does not guarantee future results. Consult your tax advisor or financial professional before making investment decisions. Grace Precious Metals is a dealer of physical precious metals and is not a fiduciary.
          </p>
          <div className="disclaimer-divider" />
        </div>
      </div>

    </div>
  )
}
