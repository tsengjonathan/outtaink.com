import { string, object, array, mixed, SchemaOf, number } from 'yup'
import { PrismicAboutUsPage, PrismicArticle, PrismicArticleData, PrismicArticleDataBioGroup, PrismicAuthor, PrismicCofounder, PrismicImage, PrismicMember, PrismicNode, PrismicSite, PrismicText } from '../types/cms'

export const prismicArticleDataBioGroupSchema: SchemaOf<PrismicArticleDataBioGroup> = object().shape({
  text: string()
})

export const prismicImageSchema: SchemaOf<PrismicImage> = object().shape({
  url: string(),
  alt: string().nullable(),
  dimensions: object().shape({
    height: number(),
    width: number()
  })
})

export const prismicTextSchema: SchemaOf<PrismicText> = object().shape({
  type: string(),
  text: string()
})

export const prismicNodeSchema: SchemaOf<PrismicNode> = object().shape({
  url: string(),
  alt: string().nullable(),
  dimensions: object().shape({
    height: number().notRequired(),
    width: number().notRequired()
  }).default(null),

  text: string()
})

export const prismicArticleDataSchema: SchemaOf<PrismicArticleData> = object().shape({
  name: string(),
  title: array().of(prismicTextSchema),
  cover: prismicImageSchema,
  author: object().shape({ id: string() }),
  bio_group: array().of(prismicArticleDataBioGroupSchema),
  date: string(),
  body: array().of(prismicNodeSchema),
  excerpt: string(),
  links: array().of(prismicTextSchema)
})

export const prismicSite: SchemaOf<PrismicSite> = object().shape({
  siteMetadata: object().shape({
    title: string()
  })
})

export const prismicAuthorSchema: SchemaOf<PrismicAuthor> = object().shape({
  id: string(),
  data: object().shape({
    illustration: prismicImageSchema,
    name: string()
  })
})

export const prismicCofounderSchema: SchemaOf<PrismicCofounder> = object().shape({
  cofounder: object().shape({
    id: string()
  })
})

export const prismicMemberSchema: SchemaOf<PrismicMember> = object().shape({
  member: object().shape({
    id: string()
  })
})

export const prismicAboutUsPageSchema: SchemaOf<PrismicAboutUsPage> = object().shape({
  data: object().shape({
    header_image: prismicImageSchema,
    chinese: string(),
    english: string(),
    cofounders: array().of(prismicCofounderSchema),
    members: array().of(prismicMemberSchema)
  })
})

export const prismicArticleSchema: SchemaOf<PrismicArticle> = object().shape({
  uid: string(),
  url: string(),
  data: prismicArticleDataSchema,
  tags: array().of(string()),
  id: string()
}).defined()

export const prismicAllDocumentTypesSchema = mixed().oneOf([ prismicAboutUsPageSchema, prismicArticleSchema, prismicAuthorSchema ])