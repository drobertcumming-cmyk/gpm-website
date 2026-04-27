import type { Metadata } from 'next'
import { Source_Serif_4, Source_Sans_3 } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

// Variable fonts loaded via next/font for self-hosted delivery and font-display: swap.
// Reference: DESIGN_BRIEF.md Section 8.2 and 12.2.
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  style: ['normal', 'italic'],
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://gracepreciousmetals.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Grace Precious Metals — The Gold IRA with a Published Price',
    template: '%s — Grace Precious Metals',
  },
  description:
    "A typical Gold IRA costs about a third more than Grace. Our spread is 11.1% all-in — no admin fee, no setup fee, buyback at spot. Pastor-led, salaried advisors, standard bullion only.",
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Grace Precious Metals',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${sourceSans.variable}`}
    >
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  )
}
