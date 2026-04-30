import Link from 'next/link'

// Site footer per DESIGN_BRIEF.md Section 14.1 and Block 10 of the homepage
// copy fragments. Four columns at desktop, two at tablet, single at mobile.
// No newsletter subscription — that's refused per brand discipline (see
// fragments Block 10 note and brief v1.1 Section 29).
//
// Pending Andrew confirmation — phone, hours, address, license states.

interface FooterLink {
  label: string
  href: string
}

const COL_PAGES: ReadonlyArray<FooterLink> = [
  { label: 'Our Pricing', href: '/pricing' },
  { label: 'How A Rollover Works', href: '/rollover' },
  { label: 'Inherited IRA', href: '/rollover/inherited-ira' },
  { label: 'Transfer Guide', href: '/rollover/transfer' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: "William's Story", href: '/who-we-are/williams-story' },
  { label: 'Compliance', href: '/who-we-are/compliance' },
  { label: 'Talk To An Advisor', href: '/advisor' },
]

const COL_RESOURCES: ReadonlyArray<FooterLink> = [
  { label: 'Resources Library', href: '/resources' },
  { label: 'Buyback', href: '/resources/buyback' },
  { label: 'Round-trip Cost', href: '/resources/round-trip-cost' },
  { label: 'Numismatic Coins', href: '/resources/numismatic-coins' },
  { label: 'FAQ', href: '/faq' },
]

const COL_TALK: ReadonlyArray<FooterLink> = [
  { label: 'Get the Briefing', href: '/briefing' },
  { label: 'Contact', href: '/contact' },
]

const COL_COMPLIANCE: ReadonlyArray<FooterLink> = [
  { label: 'Privacy', href: '/legal/privacy' },
  { label: 'Terms', href: '/legal/terms' },
  { label: 'Disclosures', href: '/legal/disclosures' },
  { label: 'State Licenses', href: '/legal/licenses' },
]

function FooterColumn({
  heading,
  links,
  children,
}: {
  heading: string
  links?: ReadonlyArray<FooterLink>
  children?: React.ReactNode
}) {
  return (
    <div>
      <h2 className="text-eyebrow text-gold-deep mb-4">{heading}</h2>
      {links ? (
        <ul className="space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-body text-ink-body no-underline hover:underline"
                style={{
                  textDecorationThickness: '0.5px',
                  textUnderlineOffset: 3,
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          {children}
        </ul>
      ) : (
        children
      )}
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-canvas border-t-[1px] border-border-light mt-16 lg:mt-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterColumn heading="Pages" links={COL_PAGES} />
          <FooterColumn heading="Resources" links={COL_RESOURCES} />
          <FooterColumn heading="Talk to us" links={COL_TALK}>
            <li>
              <span className="text-body text-ink-body opacity-70">
                Office hours and phone — pending confirmation.
              </span>
            </li>
          </FooterColumn>
          <FooterColumn heading="Compliance" links={COL_COMPLIANCE} />
        </div>

        <div className="mt-12 pt-8 border-t-[1px] border-border-light">
          <p className="text-body text-ink-body opacity-80">
            Grace Precious Metals, [address — pending confirmation].
            &copy; 2026 Grace Precious Metals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
