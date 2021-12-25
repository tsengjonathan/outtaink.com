import React from 'react'
import ArticleCards from '../components/ArticleCards'
import Featured from '../components/Featured'
import Introduction from '../components/Introduction'
import SEO from '../components/SEO'
import { PrismicArticle, PrismicAuthor } from '../types/cms'
import { introduction } from '../utils/constants'
import { fetchArticles } from '../utils/queries'

type LandingPageProps = {
  articles: PrismicArticle[]
  authors: { [id: string]: PrismicAuthor }
}

const LandingPage = ({ articles: allArticles }: LandingPageProps) => {

  const featuredArticle = allArticles[0]
  const articles = allArticles.slice(1)

  return (
    <>
      <SEO title="Outtaink" description={introduction} />
      <Featured article={featuredArticle} />
      <Introduction />
      <ArticleCards articles={articles} />
    </>
  )
}

export default LandingPage

export const getStaticProps = async () => {
  const articles = await fetchArticles(11)

  return {
    props: {
      articles: articles,
    }
  }
}
