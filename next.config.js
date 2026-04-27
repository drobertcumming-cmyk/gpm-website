// next.config.js
// Async export so we can dynamic-import remark plugins that ship as ESM-only
// (remark-frontmatter, remark-mdx-frontmatter). Next.js awaits an async config.
module.exports = async () => {
  const { default: remarkFrontmatter } = await import('remark-frontmatter')
  const { default: remarkMdxFrontmatter } = await import(
    'remark-mdx-frontmatter'
  )

  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: 'frontmatter' }],
      ],
      rehypePlugins: [],
    },
  })

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    reactStrictMode: true,
    images: {
      formats: ['image/avif', 'image/webp'],
    },
  }

  return withMDX(nextConfig)
}
