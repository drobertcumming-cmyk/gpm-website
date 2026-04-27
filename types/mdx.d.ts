// Type declaration for MDX imports — exposes both the default component
// export and the named `frontmatter` export injected by remark-mdx-frontmatter
// (configured in next.config.js).

declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export interface MdxFrontmatter {
    title?: string
    slug?: string
    description?: string
    template?: string
    eyebrow?: string
    author?: string
    date?: string
    counselReviewDate?: string
    complianceFlags?: string[]
    ogImage?: string
    targetKeyword?: string
    [key: string]: unknown
  }

  export const frontmatter: MdxFrontmatter

  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
}
