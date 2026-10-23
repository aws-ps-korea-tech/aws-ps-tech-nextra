import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components.js'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  const path = (params.mdxPath ?? []).join('/')
  return { ...metadata, alternates: { canonical: `/${path}${path ? '/' : ''}` } }
}

export default async function Page(props) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  const { wrapper: Wrapper } = getMDXComponents()
  return <Wrapper toc={toc} metadata={metadata}><MDXContent {...props} params={params} /></Wrapper>
}
