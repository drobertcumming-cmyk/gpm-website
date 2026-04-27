import Content, { frontmatter } from '@/content/resources/index.mdx'
import { PreLaunchBanner } from '@/components/compliance/PreLaunchBanner'

// Phase 2 route stub for /resources
// Renders raw MDX with no template wrapping per Step 3 directive.
// Pre-launch banner is conditional on frontmatter.complianceFlags per Step 4.

export default function Page() {
  const flags = (frontmatter as { complianceFlags?: string[] })?.complianceFlags
  return (
    <>
      <PreLaunchBanner flags={flags} />
      <Content />
    </>
  )
}
