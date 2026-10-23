export const dynamic = 'force-static'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aws-ps-tech-nextra.vercel.app'
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function robots() {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${SITE}${BASE}/sitemap.xml` }
}
