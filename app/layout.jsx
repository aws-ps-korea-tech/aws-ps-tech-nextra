import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import './tabs.css'
import './brand.css'

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aws-ps-tech-nextra.vercel.app'

export const metadata = {
  metadataBase: new URL(SITE),
  title: { default: 'AWS Korea Public Sector SA Team', template: '%s | AWS Korea Public Sector SA Team' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      {/* primary color #206ea7 (light) / #429fe3 (dark) from the BookStack site */}
      <Head
        color={{
          hue: 205,
          saturation: { light: 68, dark: 74 },
          lightness: { light: 39, dark: 57 },
        }}
      />
      <body>
        <div className="ps-disclaimer" role="note">
          ⚠️ 이 사이트의 게시물은 최신 정보를 반영하지 않을 수 있으며, <strong>AWS 공식 콘텐츠가 아닙니다.</strong>{' '}
          최신 정보는{' '}
          <a href="https://docs.aws.amazon.com" target="_blank" rel="noopener">AWS 공식 문서</a>를 참고하세요.
        </div>
        {children}
      </body>
    </html>
  )
}
