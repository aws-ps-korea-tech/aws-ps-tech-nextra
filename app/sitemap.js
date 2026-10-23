import fs from 'node:fs'
import path from 'node:path'

export const dynamic = 'force-static'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aws-ps-tech-nextra.vercel.app'
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

function walk(dir, rel = '') {
  const out = []
  for (const e of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
    const r = path.posix.join(rel, e.name)
    if (e.isDirectory()) out.push(...walk(dir, r))
    else if (/\.mdx?$/.test(e.name)) out.push(r.replace(/\.mdx?$/, '').replace(/(^|\/)index$/, ''))
  }
  return out
}

export default function sitemap() {
  const pages = walk(path.join(process.cwd(), 'content'))
  return pages.map(p => ({ url: `${SITE}${BASE}/${p}${p ? '/' : ''}` }))
}
