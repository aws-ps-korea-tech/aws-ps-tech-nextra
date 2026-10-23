// Category tabs. Navigation grouping only: URLs of the books are unchanged.
export const TABS = [
  {
    "id": "t0",
    "label": "시작하기",
    "href": "/aws",
    "books": [
      "aws",
      "s3",
      "data-transfer",
      "fsx-for-lustre"
    ]
  },
  {
    "id": "t1",
    "label": "오믹스·유전체",
    "href": "/omics-on-aws",
    "books": [
      "omics-on-aws",
      "genome-data-delivery-portal-on-aws",
      "amazon-bio-discovery-ai"
    ]
  },
  {
    "id": "t2",
    "label": "배치·BLAST",
    "href": "/aws-batch",
    "books": [
      "aws-batch",
      "ncbi-blast-on-aws",
      "aws-blast-performance-testing"
    ]
  },
  {
    "id": "t3",
    "label": "AI·의사결정",
    "href": "/ai-agent-memory-on-aws",
    "books": [
      "ai-agent-memory-on-aws",
      "decision-models-on-aws"
    ]
  }
]

// Empty / draft books: built and reachable by URL, shown under a tab but not listed in its sidebar.
export const UNLISTED = {
  "egovframework-on-aws": "t0",
  "draft-gbrain": "t3"
}

export function tabForBook(book) {
  if (!book) return null
  return TABS.find(t => t.books.includes(book)) ?? TABS.find(t => t.id === UNLISTED[book]) ?? null
}
