// next.config.js
// Async export so we can dynamic-import remark plugins that ship as ESM-only
// (remark-frontmatter, remark-mdx-frontmatter). Next.js awaits an async config.
//
// GitHub Pages mode: when GITHUB_PAGES=true (set by .github/workflows/deploy.yml),
// switch to static export, set basePath/asset prefix to /gpm-website to match
// the GitHub Pages URL `username.github.io/gpm-website/`, and disable image
// optimisation (next/image needs a server runtime; static export can't do it).
// In that mode the workflow also removes app/api before building, since
// route handlers are incompatible with static export.
//
// Vercel / local dev / any other server-runtime host: GITHUB_PAGES is unset,
// the app builds normally with API routes and image optimisation intact.
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

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
    images: isGitHubPages
      ? { unoptimized: true }
      : { formats: ['image/avif', 'image/webp'] },
    ...(isGitHubPages && {
      output: 'export',
      basePath: '/gpm-website',
      assetPrefix: '/gpm-website',
      trailingSlash: true,
    }),
  }

  return withMDX(nextConfig)
}
