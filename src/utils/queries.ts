import Prismic from '@prismicio/client'
import { Document } from '../types/client'
import { PrismicAboutUsPage, PrismicArticle, PrismicAuthor } from '../types/cms'
import { Client } from './prismicHelpers'
import { prismicAboutUsPageSchema, prismicArticleSchema, prismicAuthorSchema } from './schema'

const recursiveQuery = async (
  query: string | string[],
  orderings = '',
  size?: number,
  ref?: string,
  page = 1,
  data: Document[] = []
): Promise<Document[]> => {
  const pageSize = size || 20
  const response = await Client().query(query, {
    page: page,
    pageSize: pageSize,
    orderings: orderings,
    ...(ref && { ref: ref })
  })
  const allData = data.concat(response.results)

  const totalResultsSize = size || response.total_results_size
  if (response.results_size + data.length < totalResultsSize) {
    return recursiveQuery(query, orderings, size, ref, page + 1, allData);
  }
  return allData.length > size ? allData.slice(size) : allData
}

export const fetchArticles = async (size?: number): Promise<PrismicArticle[]> => {
  const response = await recursiveQuery(
    Prismic.Predicates.at('document.type', 'article'),
    '[my.article.date desc]',
    size
  )
  return response.map(document => prismicArticleSchema.cast(document))
}

export const fetchAuthors = async (): Promise<PrismicAuthor[]> => {
  const response = await recursiveQuery(
    Prismic.Predicates.at('document.type', 'author')
  )
  return response.map(document => prismicAuthorSchema.cast(document))
}

export const fetchAboutUsPage = async (): Promise<PrismicAboutUsPage[]> => {
  const response = await recursiveQuery(
    Prismic.Predicates.at('document.type', 'about_us_page')
  )
  return response.map(document => prismicAboutUsPageSchema.cast(document))
}

export const fetchArticle = async (slug: string, ref?: string): Promise<PrismicArticle> => {
  const response = await recursiveQuery([
    Prismic.Predicates.at('document.type', 'article'),
    Prismic.Predicates.at('my.article.uid', slug)
  ], undefined, undefined, ref)
  return prismicArticleSchema.cast(response[0])
}

export const fetchAllArticleSlugs = async (): Promise<string[]> => {
  const response = await recursiveQuery(
    Prismic.Predicates.at('document.type', 'article')
  )
  return response.map(document => {
    const article = prismicArticleSchema.cast(document)
    return article.url
  })
}

export const fetchAuthorById = async (id: string): Promise<PrismicAuthor> => {
  const response = await recursiveQuery([
    Prismic.Predicates.at('document.type', 'author'),
    Prismic.Predicates.at('document.id', id)
  ])
  return prismicAuthorSchema.cast(response[0])
}
