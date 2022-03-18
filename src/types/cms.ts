export type PrismicAllDocumentTypes = PrismicAboutUsPage | PrismicArticle | PrismicAuthor | PrismicVideo

export type PrismicText = {
  text: string
}

export type PrismicNode = PrismicText | PrismicImage

export type PrismicArticleData = {
  name: string
  title: PrismicText[]
  cover: PrismicImage
  author: {
    id: string
  }
  bio_group: PrismicArticleDataBioGroup[]
  date: string
  body: PrismicNode[]
  excerpt: string
  links: PrismicNode[]
}

export type PrismicArticle = {
  uid: string
  url: string
  data: PrismicArticleData
  tags: string[]
  id: string
}

export type PrismicArticleEdge = {
  node: PrismicArticle
}

export type PrismicArticleDataBioGroup = {
  text: string
}

export type PrismicSite = {
  siteMetadata: {
    title: string
  }
}

export type PrismicCofounder = {
  cofounder: {
    id: string
  }
}

export type PrismicMember = {
  member: {
    id: string
  }
}

export type PrismicAboutUsPage = {
  data: {
    header_image: PrismicImage
    chinese: string
    english: string
    cofounders: PrismicCofounder[]
    members: PrismicMember[]
  }
}

export type PrismicLinkType = {
  document: PrismicAllDocumentTypes
}

export type PrismicAuthor = {
  id: string
  data: {
    illustration: PrismicImage
    name: string
  }
}

export type PrismicImage = {
  url: string
  alt: string | null
  dimensions: {
    height: number
    width: number
  }
}

export type PrismicVideo = {
  id: string
  data: {
    name: string
    title: string
    description: string
    url: string
    cover: PrismicImage
  }
}
