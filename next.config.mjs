import nextra from 'nextra'

// basePath is platform-dependent:
//   GitHub Pages serves under /aws-ps-tech-nextra -> NEXT_PUBLIC_BASE_PATH=/aws-ps-tech-nextra (set in CI)
//   Vercel / Cloudflare Pages / Netlify serve at root -> leave it unset
// Images live in public/_assets and are referenced as /_assets/..., so under a sub-path
// the build prefixes them via assetPrefix.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const withNextra = nextra({ defaultShowCopyCode: true })
export default withNextra({
  output: 'export',
  images: { unoptimized: true },
  basePath: BASE,
  trailingSlash: true,
})
