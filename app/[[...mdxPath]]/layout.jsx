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
  const navbar = (
    <Navbar logo={<b>AWS PS Tech</b>}>
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
      docsRepositoryBase="https://github.com/aws-ps-korea-tech/nextra/tree/main"
      footer={<Footer>AWS PS Tech Korea</Footer>}
    >
      {children}
    </Layout>
  )
}
