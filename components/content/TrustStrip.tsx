import { Scale, RefreshCcw, ShieldCheck, Handshake } from 'lucide-react'

// Production-brief homepage Trust Strip (post-2026-04-29 Option A).
// Full-bleed linen-warm bg; 4 single-stroke walnut pictograms with two-line
// labels; hairline gold dividers between adjacent signals. Mobile vertical
// stack with horizontal icon+text per signal.
//
// The fourth signal (IRS-APPROVED CUSTODIAN & DEPOSITORY) is gated on
// `TRUST_STRIP_CUSTODIAN_PARTNERSHIPS_CONFIRMED`. As of 2026-04-30 the
// default flipped to render 4 signals; the flag remains as a kill-switch
// (set to "false" explicitly to hide). LB-14 resolved on the same date.
// LB-06 (specific partner naming on /who-we-are/compliance) remains
// separate — the strip signal copy is category-level, not partner-named.
//
// Reference: production brief §3; homepage_copy_v3_6.md §3.

interface Signal {
  Icon: typeof Scale
  line1: string
  line2: string
}

const SIGNAL_SPREAD: Signal = {
  Icon: Scale,
  line1: '11.1% SPREAD',
  line2: 'PUBLISHED, ALL-IN',
}

const SIGNAL_BUYBACK: Signal = {
  Icon: RefreshCcw,
  line1: 'BUYBACK AT SPOT',
  line2: 'NEVER BELOW',
}

const SIGNAL_CUSTODIAN: Signal = {
  Icon: ShieldCheck,
  line1: 'IRS-APPROVED CUSTODIAN',
  line2: '& DEPOSITORY',
}

const SIGNAL_SALARIED: Signal = {
  Icon: Handshake,
  line1: 'SALARIED ADVISORS',
  line2: 'NO COMMISSION',
}

function showCustodian(): boolean {
  // Default true (4 signals); explicit "false" hides the fourth signal.
  return process.env.TRUST_STRIP_CUSTODIAN_PARTNERSHIPS_CONFIRMED !== 'false'
}

const LINE_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.08em',
  color: 'var(--gpm-ink-display)',
  lineHeight: 1.4,
  textAlign: 'center',
}

function SignalCell({ signal }: { signal: Signal }) {
  const { Icon } = signal
  return (
    <div className="flex flex-col items-center md:items-center" style={{ gap: 8, padding: '4px 12px' }}>
      <Icon size={22} strokeWidth={1.25} color="var(--gpm-walnut)" aria-hidden="true" />
      <div>
        <div style={LINE_STYLE}>{signal.line1}</div>
        <div style={LINE_STYLE}>{signal.line2}</div>
      </div>
    </div>
  )
}

function MobileSignalRow({ signal }: { signal: Signal }) {
  const { Icon } = signal
  return (
    <div className="flex items-center" style={{ gap: 14, paddingTop: 12, paddingBottom: 12 }}>
      <Icon size={20} strokeWidth={1.25} color="var(--gpm-walnut)" aria-hidden="true" />
      <div>
        <div style={{ ...LINE_STYLE, textAlign: 'left' }}>{signal.line1}</div>
        <div style={{ ...LINE_STYLE, textAlign: 'left' }}>{signal.line2}</div>
      </div>
    </div>
  )
}

export function TrustStrip() {
  const showFourth = showCustodian()
  const signals: ReadonlyArray<Signal> = showFourth
    ? [SIGNAL_SPREAD, SIGNAL_BUYBACK, SIGNAL_CUSTODIAN, SIGNAL_SALARIED]
    : [SIGNAL_SPREAD, SIGNAL_BUYBACK, SIGNAL_SALARIED]

  return (
    <section
      aria-label="Grace Precious Metals trust signals"
      style={{
        background: 'var(--gpm-linen-warm)',
        borderTop: '0.5px solid rgba(184, 150, 46, 0.25)',
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1200, paddingLeft: 32, paddingRight: 32 }}
      >
        {/* Desktop / tablet — horizontal */}
        <div
          className="hidden md:flex items-center justify-around"
          style={{ gap: 12, paddingTop: 16, paddingBottom: 16 }}
        >
          {signals.map((s, i) => (
            <div key={s.line1} className="flex items-center" style={{ gap: 12 }}>
              <SignalCell signal={s} />
              {i < signals.length - 1 ? (
                <span
                  aria-hidden="true"
                  style={{
                    width: '0.5px',
                    height: 26,
                    background: 'rgba(184, 150, 46, 0.40)',
                  }}
                />
              ) : null}
            </div>
          ))}
        </div>

        {/* Mobile — vertical stack with hairline dividers */}
        <div className="md:hidden" style={{ paddingLeft: 8, paddingRight: 8 }}>
          {signals.map((s, i) => (
            <div
              key={s.line1}
              style={{
                borderTop: i === 0 ? 'none' : '0.5px solid rgba(184, 150, 46, 0.40)',
              }}
            >
              <MobileSignalRow signal={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
