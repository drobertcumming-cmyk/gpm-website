'use client'

import { usePathname } from 'next/navigation'
import { getRouteFlags } from '@/lib/route-meta'
import { PreLaunchBanner } from './PreLaunchBanner'

// Client wrapper that resolves the current pathname and renders the
// PreLaunchBanner with the matching compliance flags. Lives in the marketing
// layout so the banner is the highest surface on the page.
//
// Reads from lib/route-meta.ts. PreLaunchBanner returns null if no trigger
// flag matches, so this component is a no-op on routes without a banner.
export function TopBanner() {
  const pathname = usePathname()
  const flags = getRouteFlags(pathname)
  return <PreLaunchBanner flags={flags} />
}
