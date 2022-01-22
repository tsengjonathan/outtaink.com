import React from 'react'
import { RichText } from 'prismic-dom'

import { useRouter } from 'next/router'
import SEO from '../components/SEO'
import Interviewee from '../components/Interviewee'

import Colon from '../components/Colon'

import { sanitizeArticle } from '../utils/sanitize'
import { PrismicArticle, PrismicAuthor } from '../types/cms'
import { fetchAllArticleSlugs, fetchArticle, fetchAuthorById } from '../utils/queries'
import Loader from '../components/Loader'
import useUpdatePreviewRef from '../utils/useUpdatePreviewRef'
import Custom404 from './404'


type ArticleProps = {
  article: PrismicArticle
  author: PrismicAuthor
  previewRef: string
}

const Article = ({ article, author, previewRef }: ArticleProps) => {
  if (!article || !article.id || !article.data) {
    return <Custom404 />
  }

  const {
    name,
    bio_group,
    links,
    body,
    title,
    excerpt
  } = article.data

  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }

  useUpdatePreviewRef(previewRef, article.id)

  const html = sanitizeArticle(body)

  const linkHTML = RichText.asHtml(links)
  const headline = RichText.asText(title)

  return (
    <>
      <SEO title={headline} description={excerpt} />
      <div className="grid grid-cols-1 lg:grid-cols-article mx-4 md:mx-auto max-w-screen-lg">
        <article id="article">
          <header>
            <div className="mt-6 mb-2 flex items-center">
              <h1 className="mb-0 mr-2 text-4xl font-medium font-en">
                {name}
              </h1>
              <Colon />
            </div>
            <h1 className="mb-6 text-4xl font-medium font-zh">{headline}</h1>
            <div className="flex mb-6 w-3/4">
              <p className="flex-1 m-0 text-sm font-bold font-en tracking-widest text-default-200">
                {author.data.name.toUpperCase()}
              </p>
              <p className="flex-1 m-0 text-sm font-light font-en tracking-widest">
                {article.data.date}
              </p>
            </div>
          </header>
          <section
            className="text-base font-light font-zh tracking-wide"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <hr className="my-6" />
          <footer />
        </article>
        <div className="flex flex-col">
          <Interviewee name={name} bio={bio_group} links={linkHTML} />
          <div className="flex-grow" />
        </div>
      </div>
    </>
  )
}

export default Article

export const getStaticProps = async ({ params, previewData }) => {
  const previewRef = previewData ? previewData.ref : null

  const { slug } = params
  const article = await fetchArticle(slug, previewRef)

  const { id } = article.data.author
  const author = await fetchAuthorById(id)

  return {
    props: {
      article,
      author,
      previewRef
    }
  }
}

export const getStaticPaths = async () => {
  const articleSlugs = await fetchAllArticleSlugs()
  return {
    paths: articleSlugs,
    fallback: true
  }
}

