// Category tabs. Navigation grouping only: URLs of the books are unchanged.
export const TABS = [
  {
    "id": "t0",
    "label": "시작하기·계정",
    "href": "/aws",
    "books": [
      "aws",
      "s3"
    ]
  },
  {
    "id": "t1",
    "label": "유전체·오믹스",
    "href": "/omics-on-aws",
    "books": [
      "omics-on-aws",
      "genome-data-delivery-portal-on-aws"
    ]
  },
  {
    "id": "t2",
    "label": "HPC·배치·BLAST",
    "href": "/aws-batch",
    "books": [
      "aws-batch",
      "ncbi-blast-on-aws",
      "aws-blast-performance-testing"
    ]
  },
  {
    "id": "t3",
    "label": "AI·ML",
    "href": "/ai-agent-memory-on-aws",
    "books": [
      "amazon-bio-discovery-ai",
      "ai-agent-memory-on-aws",
      "decision-models-on-aws"
    ]
  },
  {
    "id": "t4",
    "label": "규제·거버넌스",
    "href": "/gxp-on-aws",
    "books": [
      "gxp-on-aws"
    ]
  }
]

// Empty / draft books: built and reachable by URL, shown under a tab but not listed in its sidebar.
export const UNLISTED = {
  "egovframework-on-aws": "t0",
  "data-transfer": "t0",
  "fsx-for-lustre": "t0",
  "draft-gbrain": "t3"
}

export function tabForBook(book) {
  if (!book) return null
  return TABS.find(t => t.books.includes(book)) ?? TABS.find(t => t.id === UNLISTED[book]) ?? null
}
