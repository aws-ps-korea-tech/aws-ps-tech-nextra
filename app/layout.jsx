import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import './tabs.css'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aws-ps-tech-nextra.vercel.app'

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: 'AWS PS Tech Docs', template: '%s | AWS PS Tech' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>{children}</body>
    </html>
  )
}
