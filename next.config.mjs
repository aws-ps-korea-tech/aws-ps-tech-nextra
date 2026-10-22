import nextra from 'nextra'
const withNextra = nextra({ defaultShowCopyCode: true })
export default withNextra({
  output: 'export',
  images: { unoptimized: true },
  basePath: '/nextra-ps-tech',
  trailingSlash: true,
})
