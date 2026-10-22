import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = { title: { default: 'AWS PS Tech Docs', template: '%s | AWS PS Tech' } }

export default async function RootLayout({ children }) {
  const navbar = <Navbar logo={<b>AWS PS Tech</b>} />
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/aws-ps-korea-tech/nextra-ps-tech/tree/main"
          footer={<Footer>AWS PS Tech Korea</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
