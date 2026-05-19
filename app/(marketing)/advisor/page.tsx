'use client'

import { useState, type FormEvent } from 'react'

// /advisor — "Talk to an Advisor" intake canvas
//
// TSX port of the advisor.html boilerplate (production design).
// Replaces the prior MDX stub.
//
// Layout (desktop ≥1024px): 12-col grid inside 1200 max-width rail with
// a 7/5 asymmetric split:
//   - Left 7 cols (Copy Engine): eyebrow + H1 + lede + four trust
//     sections (Who you will be talking to / What the call is /
//     What the call is not / What happens after you submit).
//   - Right 5 cols (Intake Console Card): position:sticky form card
//     on canvas-deep, with name / email / phone / optional message
//     textarea, gold-deep submit button, privacy line.
//
// Mobile (<768px): single column. Per spec, the form is reordered
// AHEAD of the trust sections via CSS `order` so the conversion
// surface lands immediately after the lede. DOM order is preserved
// (trust → form) so screen readers can still read the page in the
// natural narrative order if the user prefers; sighted mobile users
// see form first.
//
// NAV UNCHANGED. This is a route-level page change only.
//
// The form's submit handler is a client-side simulation with
// validation + loading state — same behavior as the boilerplate JS.
// The actual POST to /api/briefing or equivalent will be wired once
// the production hosting target is locked (GitHub Pages static
// export strips API routes; the simulation runs fine on the preview).

const PAGE_CSS = `
.gpm-advisor-page {
  --cream-canvas: #F2EDE0;
  --canvas-deep: #F0E9D6;
  --canvas-card: #F5F0E1;
  --walnut-deep: #3D2817;
  --walnut-mid: #5C4632;
  --gold-secondary: #9C7322;
  --gold-deep: #B8962E;
  --gold-hover: #9A7D26;
  background: var(--cream-canvas);
  color: var(--walnut-deep);
  font-family: var(--font-sans), Inter, sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
.gpm-advisor-page .wrap {
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
}
.gpm-advisor-page .advisor-main {
  padding: 80px 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 32px;
  row-gap: 48px;
  align-items: start;
}
.gpm-advisor-page .advisor-trust { grid-column: span 7; }
.gpm-advisor-page .advisor-form-wrapper {
  grid-column: span 5;
  position: sticky;
  top: 40px; /* Anchors the card at the top of the viewport during scroll */
  height: auto;
}

/* Left column — trust */
.gpm-advisor-page .advisor-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.24em;
  line-height: 1;
  margin-bottom: 16px;
  text-transform: uppercase;
}
.gpm-advisor-page .advisor-h1 {
  font-family: var(--font-serif);
  font-size: clamp(30px, 3.6vw, 40px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -0.005em;
}
.gpm-advisor-page .advisor-lede {
  font-family: var(--font-sans);
  font-size: clamp(16px, 1.2vw, 17px);
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.65;
  margin-bottom: 48px;
}
.gpm-advisor-page .advisor-section {
  padding-top: 40px;
  border-top: 1px solid rgba(184, 150, 46, 0.25);
}
.gpm-advisor-page .advisor-section + .advisor-section { margin-top: 40px; }
.gpm-advisor-page .advisor-section h2 {
  font-family: var(--font-serif);
  font-size: clamp(22px, 2vw, 24px);
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.3;
  margin-bottom: 16px;
  letter-spacing: -0.003em;
}
.gpm-advisor-page .advisor-section p {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 400;
  color: var(--walnut-deep);
  line-height: 1.7;
  margin-bottom: 16px;
}
.gpm-advisor-page .advisor-section p:last-child { margin-bottom: 0; }

/* Right column — intake console */
.gpm-advisor-page .advisor-form-card {
  background: var(--canvas-deep);
  border-radius: 4px;
  padding: 40px 32px;
  box-shadow: 0 1px 4px rgba(61, 40, 23, 0.06);
  /* Snap the card to its content height — prevents stretch when the
     parent wrapper happens to receive a computed height from the
     sticky/grid context. */
  height: auto;
  display: flex;
  flex-direction: column;
}
.gpm-advisor-page .form-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.24em;
  line-height: 1;
  margin-bottom: 14px;
  text-transform: uppercase;
}
.gpm-advisor-page .form-heading {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 500;
  color: var(--walnut-deep);
  line-height: 1.3;
  margin-bottom: 8px;
  letter-spacing: -0.003em;
}
.gpm-advisor-page .form-subhead {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.5;
  margin-bottom: 28px;
}
.gpm-advisor-page .advisor-form label {
  display: block;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--walnut-deep);
  margin-bottom: 5px;
}
.gpm-advisor-page .advisor-form label .optional-modifier {
  font-weight: 400;
  font-style: italic;
  color: var(--walnut-mid);
}
.gpm-advisor-page .advisor-form input[type="text"],
.gpm-advisor-page .advisor-form input[type="email"],
.gpm-advisor-page .advisor-form input[type="tel"],
.gpm-advisor-page .advisor-form textarea {
  display: block;
  width: 100%;
  background: var(--canvas-card);
  border: 0.5px solid rgba(61, 40, 23, 0.18);
  border-radius: 3px;
  padding: 11px 14px;
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--walnut-deep);
  margin-bottom: 16px;
  outline: none;
  transition: border-color 0.2s ease;
}
.gpm-advisor-page .advisor-form input::placeholder,
.gpm-advisor-page .advisor-form textarea::placeholder { color: rgba(61, 40, 23, 0.45); }
.gpm-advisor-page .advisor-form input:focus,
.gpm-advisor-page .advisor-form textarea:focus { border-color: rgba(61, 40, 23, 0.50); }
.gpm-advisor-page .advisor-form textarea {
  resize: vertical;
  min-height: 80px;
  line-height: 1.5;
}
.gpm-advisor-page .form-submit {
  display: block;
  width: 100%;
  background: var(--gold-deep);
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  padding: 14px 0;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s ease;
  min-height: 44px;
}
.gpm-advisor-page .form-submit:hover { background: var(--gold-hover); }
.gpm-advisor-page .form-submit:focus-visible {
  outline: 2px solid var(--gold-deep);
  outline-offset: 2px;
}
.gpm-advisor-page .form-submit.sending {
  background: rgba(184, 150, 46, 0.6);
  color: var(--canvas-card);
  cursor: not-allowed;
}
.gpm-advisor-page .form-privacy {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.5;
  text-align: center;
  margin-top: 14px;
}
.gpm-advisor-page .form-error {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--walnut-deep);
  background: rgba(61, 40, 23, 0.06);
  border-radius: 3px;
  padding: 10px 14px;
  margin-top: 12px;
  text-align: center;
}
.gpm-advisor-page .form-success {
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  color: var(--gold-secondary);
  background: rgba(184, 150, 46, 0.08);
  border-radius: 3px;
  padding: 10px 14px;
  margin-top: 12px;
  text-align: center;
}

/* Disclosure band */
.gpm-advisor-page .disclosure-band {
  background: var(--canvas-deep);
  padding: 64px 0;
}
.gpm-advisor-page .disclosure-inner {
  max-width: 780px;
  margin: 0 auto;
  padding: 0 32px;
}
.gpm-advisor-page .disclosure-eyebrow {
  display: block;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--gold-secondary);
  letter-spacing: 0.24em;
  line-height: 1;
  margin-bottom: 16px;
  text-transform: uppercase;
}
.gpm-advisor-page .disclosure-body {
  font-family: var(--font-sans);
  font-size: 15px;
  font-weight: 400;
  color: var(--walnut-mid);
  line-height: 1.7;
}

/* Disclaimer band */
.gpm-advisor-page .section-disclaimer {
  padding: 48px 0;
  background: var(--cream-canvas);
}
.gpm-advisor-page .disclaimer-text {
  font-family: var(--font-serif);
  font-size: 13px;
  font-weight: 400;
  color: rgba(61, 40, 23, 0.75);
  line-height: 1.6;
  margin-bottom: 16px;
}
.gpm-advisor-page .disclaimer-text:last-of-type { margin-bottom: 0; }
.gpm-advisor-page .disclaimer-divider {
  width: 100%;
  height: 1px;
  background: rgba(184, 150, 46, 0.25);
  margin-top: 24px;
}

@media (max-width: 1024px) {
  .gpm-advisor-page .advisor-main {
    column-gap: 24px;
    padding: 64px 0;
  }
}
@media (max-width: 768px) {
  .gpm-advisor-page .advisor-main {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 32px;
    padding: 48px 0;
  }
  .gpm-advisor-page .advisor-trust,
  .gpm-advisor-page .advisor-form-wrapper { grid-column: 1 / -1; }
  /* Mobile ordering: hero block first, then form, then trust sections.
     Achieved by splitting the trust block into two regions and
     promoting the form via the CSS order property. The hero (eyebrow +
     H1 + lede) remains at the top; the four trust sections render
     after the form. */
  .gpm-advisor-page .advisor-form-wrapper {
    position: static;
    order: 2;
  }
  .gpm-advisor-page .advisor-sections-mobile-anchor { order: 3; }
  .gpm-advisor-page .advisor-trust-hero { order: 1; }

  .gpm-advisor-page .advisor-h1 { font-size: 30px; }
  .gpm-advisor-page .advisor-lede { margin-bottom: 0; }
  .gpm-advisor-page .advisor-section { padding-top: 32px; }
  .gpm-advisor-page .advisor-section + .advisor-section { margin-top: 32px; }
  .gpm-advisor-page .advisor-form-card { padding: 32px 24px; }
  .gpm-advisor-page .advisor-form label { font-size: 14px; }
  .gpm-advisor-page .advisor-form input[type="text"],
  .gpm-advisor-page .advisor-form input[type="email"],
  .gpm-advisor-page .advisor-form input[type="tel"],
  .gpm-advisor-page .advisor-form textarea {
    font-size: 16px;
    padding: 13px 14px;
    min-height: 44px;
  }
  .gpm-advisor-page .form-submit {
    padding: 16px 0;
    font-size: 15px;
  }
  .gpm-advisor-page .advisor-section p { font-size: 16px; }
  .gpm-advisor-page .disclosure-inner { padding: 0 24px; }
}
`

interface TrustSection {
  id: string
  title: string
  paragraphs: string[]
}

const TRUST_SECTIONS: TrustSection[] = [
  {
    id: 's-who',
    title: 'Who you will be talking to',
    paragraphs: [
      'You will be talking to a Grace advisor. The advisor is salaried, not commissioned. Their pay does not change based on what you buy, when you buy, or whether you buy at all. They are not earning a commission on the call you are about to have, and they are not earning a commission on any decision you make afterwards.',
      'That distinction is structural. An advisor whose pay depends on your decision is not your advisor; he is your salesperson. We settled that at the company level so the person on the call does not have to settle it call by call.',
    ],
  },
  {
    id: 's-is',
    title: 'What the call is',
    paragraphs: [
      'It is a conversation about whether a Gold IRA fits your situation, and if it does, what the next step would look like. We will answer questions about how it works, what it costs, what we sell, and what we do not. We will tell you the truth about the parts that are inconvenient, including the ones that might lead you to decide a Gold IRA is not right for you.',
      'The call typically takes thirty minutes. If you need longer, we will book longer. If ten minutes is enough, we will end at ten.',
    ],
  },
  {
    id: 's-is-not',
    title: 'What the call is not',
    paragraphs: [
      'It is not a sales script. There is no quota the advisor is working toward, no special offer that expires at the end of the call, no urgency that requires you to decide today. If anyone you talk to at Grace tells you a price is only available right now, or that you need to act before a window closes, please write to us. We will want to know.',
      'It is also not financial advice. Our advisors can explain Gold IRA mechanics, pricing, and process. They cannot tell you whether a Gold IRA belongs in your retirement portfolio. That conversation belongs between you and a fiduciary advisor who knows your full picture.',
    ],
  },
  {
    id: 's-after',
    title: 'What happens after you submit this form',
    paragraphs: [
      'A Grace advisor will email you within two business days to confirm receipt and offer a few times to talk. You pick the one that works. The call happens. You decide what to do next, on your own timeline.',
      'If two business days is too long, you can also call us directly. The number is in the footer.',
    ],
  },
]

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Page() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage('')

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Please fill in all required fields.')
      setStatus('error')
      return
    }
    if (!EMAIL_RX.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.')
      setStatus('error')
      return
    }

    setStatus('sending')
    // Simulated submit — real POST to /api/briefing (or equivalent
    // advisor intake endpoint) follows once production hosting is
    // locked. On GitHub Pages static export the API route is stripped,
    // so the simulation is what runs in preview.
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  const isSending = status === 'sending'

  return (
    <div className="gpm-advisor-page">
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <main className="advisor-main">
        {/* LEFT 7 — Trust content. Renders in two visual blocks so the
            form can sit between the lede and the trust sections on
            mobile via CSS order. */}
        <div className="advisor-trust advisor-trust-hero">
          <span className="advisor-eyebrow">Talk to an Advisor</span>
          <h1 className="advisor-h1">An honest conversation, when you&rsquo;re ready.</h1>
          <p className="advisor-lede">
            Tell us how to reach you. A Grace advisor will follow up to set a time. The call is free. You are not obligated to do anything as a result of it.
          </p>
        </div>

        {/* Trust sections — separate block so the form can be ordered
            between the lede above and these sections on mobile. */}
        <div className="advisor-trust advisor-sections-mobile-anchor">
          {TRUST_SECTIONS.map((s) => (
            <section key={s.id} className="advisor-section" id={s.id} aria-labelledby={`${s.id}-title`}>
              <h2 id={`${s.id}-title`}>{s.title}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        {/* RIGHT 5 — Intake Console Card */}
        <div className="advisor-form-wrapper">
          <div className="advisor-form-card">
            <span className="form-eyebrow">Start the conversation</span>
            <h2 className="form-heading">Tell us how to reach you</h2>
            <p className="form-subhead">
              A Grace advisor will follow up within two business days.
            </p>
            <form
              className="advisor-form"
              onSubmit={onSubmit}
              noValidate
              aria-label="Talk to an advisor intake form"
            >
              <label htmlFor="advisor-name">Name</label>
              <input
                type="text"
                id="advisor-name"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSending}
              />

              <label htmlFor="advisor-email">Email</label>
              <input
                type="email"
                id="advisor-email"
                name="email"
                placeholder="Your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSending}
              />

              <label htmlFor="advisor-phone">Phone</label>
              <input
                type="tel"
                id="advisor-phone"
                name="phone"
                placeholder="Your phone number"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled={isSending}
              />

              <label htmlFor="advisor-message">
                What&rsquo;s on your mind? <span className="optional-modifier">optional</span>
              </label>
              <textarea
                id="advisor-message"
                name="message"
                placeholder="A sentence or two helps the advisor prepare. Skip it if you&rsquo;d rather just talk."
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSending}
              />

              <button
                type="submit"
                className={`form-submit${isSending ? ' sending' : ''}`}
                disabled={isSending}
                aria-busy={isSending}
              >
                {isSending ? 'Sending…' : status === 'success' ? 'Sent' : 'Send'}
              </button>
            </form>
            <p className="form-privacy">We do not sell or share your details.</p>
            {status === 'error' && errorMessage ? (
              <div className="form-error" role="alert">{errorMessage}</div>
            ) : null}
            {status === 'success' ? (
              <div className="form-success" role="status">
                Thank you. A Grace advisor will reach out within two business days.
              </div>
            ) : null}
          </div>
        </div>
      </main>

      <section className="disclosure-band" aria-label="What to expect">
        <div className="disclosure-inner">
          <span className="disclosure-eyebrow">What to expect</span>
          <p className="disclosure-body">
            Grace advisors are salaried, never commissioned. The call is free and you can end it at any time. We do not record calls without telling you. We do not share your details with third parties. If something on the call does not match what we have published, please raise it with the advisor or write to us directly.
          </p>
        </div>
      </section>

      <section className="section-disclaimer" aria-label="Legal disclaimer">
        <div className="wrap">
          <p className="disclaimer-text">
            <strong>Grace Precious Metals is a precious metals dealer.</strong> Gold IRAs require an IRS-approved custodian and an IRS-approved depository. Grace Precious Metals is not a financial, tax, or legal advisor. Gold and precious metals investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. Consult qualified professionals before making investment decisions. Pricing reflects CFO-reviewed published policy as of the date shown.
          </p>
          <div className="disclaimer-divider" />
        </div>
      </section>
    </div>
  )
}
