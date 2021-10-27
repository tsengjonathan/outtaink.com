import { IGatsbyImageData } from "gatsby-plugin-image"

export type PrismicAllDocumentTypes = PrismicAboutUsPage | PrismicArticle | PrismicAuthor

export type PrismicArticle = {
  url: string
  data: {
    name: string
    title: {
      text: string
    }
    cover: {
      gatsbyImageData: IGatsbyImageData
      url: string
    }
    author: {
      document: PrismicAllDocumentTypes
    }
    bio_group: PrismicArticleDataBioGroup[]
    date: string
    body: {
      html: string
    }
    excerpt: string
    links: {
      html: string
    }
  }
  tags: string[]
  id: string
}

export type PrismicArticleEdge = {
  node: PrismicArticle
}

export type PrismicArticleDataBioGroup = {
  text: string
}

export type Site = {
  siteMetadata: {
    title: string
  }
}

export type Cofounder = {
  cofounder: PrismicLinkType
}

export type Member = {
  member: PrismicLinkType
}

export type PrismicAboutUsPage = {
  data: {
    header_image: {
      gatsbyImageData: IGatsbyImageData
      alt: string
    }
    chinese: string
    english: string
    cofounders: Cofounder[]
    members: Member[]
  }
}

export type PrismicLinkType = {
  document: PrismicAllDocumentTypes
}

export type PrismicAuthor = {
  id: string
  data: {
    illustration: {
      gatsbyImageData: IGatsbyImageData
      alt: string
    }
    name: string
  }
}
