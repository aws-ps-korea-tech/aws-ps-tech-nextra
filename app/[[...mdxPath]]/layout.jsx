import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import { TABS, tabForBook } from '../../lib/tabs.js'

// The sidebar only lists the books of the current category tab.
function filterPageMap(pageMap, tab, book) {
  const keep = new Set(tab ? [...tab.books, book].filter(Boolean) : [])
  const out = []
  for (const item of pageMap) {
    if ('data' in item) {
      const data = Object.fromEntries(Object.entries(item.data).filter(([k]) => keep.has(k)))
      out.push({ ...item, data })
    } else if (keep.has(item.name)) {
      out.push(item)
    }
  }
  return out
}

export default async function DocsLayout({ children, params }) {
  const { mdxPath } = await params
  const book = mdxPath?.[0] ?? null
  const tab = tabForBook(book)
  const pageMap = filterPageMap(await getPageMap(), tab, book)
  const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const navbar = (
    <Navbar
      logo={
        <span className="ps-brand">
          <img className="ps-logo-light" src={`${BASE}/brand/logo-light-mode.png`} alt="AWS" height={22} width={37} />
          <img className="ps-logo-dark" src={`${BASE}/brand/logo-dark-mode.png`} alt="AWS" height={22} width={37} />
          <span>AWS Korea Public Sector SA Team</span>
        </span>
      }
    >
      <nav className="ps-tabs" aria-label="분야">
        {TABS.map(t => (
          <a key={t.id} href={t.href + '/'} aria-current={tab?.id === t.id ? 'page' : undefined}>
            {t.label}
          </a>
        ))}
      </nav>
    </Navbar>
  )
  return (
    <Layout
      navbar={navbar}
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/aws-ps-korea-tech/aws-ps-tech-nextra/tree/main"
      footer={
        <Footer>
          <span>
            AWS Korea Public Sector SA Team ·{' '}
            <a href="https://aws.amazon.com/ko/privacy/" target="_blank" rel="noopener">Privacy Policy</a>
          </span>
        </Footer>
      }
    >
      {children}
    </Layout>
  )
}
