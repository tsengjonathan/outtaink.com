import React from 'react'
import ArticleCards from '../components/ArticleCards'
import Featured from '../components/Featured'
import Introduction from '../components/Introduction'
import NewDirectionArticleCards from '../components/NewDirectionArticleCards'
import SEO from '../components/SEO'
import VideoSection from '../components/VideoSection'
import { PrismicArticle, PrismicAuthor, PrismicVideo } from '../types/cms'
import { introduction } from '../utils/constants'
import { fetchArticles, fetchAuthors, fetchNewDirectionArticles, fetchVideos } from '../utils/queries'

type LandingPageProps = {
  articles: PrismicArticle[]
  videos: PrismicVideo[]
  newDirectionArticles: PrismicArticle[]
  authors: PrismicAuthor[]
}

const LandingPage = ({ articles: allArticles, videos, newDirectionArticles, authors }: LandingPageProps) => {

  const featuredArticle = allArticles[0]
  const articles = allArticles.slice(1)

  return (
    <>
      <SEO title="Outtaink" description={introduction} />
      <Featured article={featuredArticle} />
      <Introduction />
      <ArticleCards articles={articles} />
      <NewDirectionArticleCards articles={newDirectionArticles} authors={authors} />
      <VideoSection videos={videos} />
    </>
  )
}

export default LandingPage

export const getStaticProps = async () => {
  const articles = await fetchArticles(11)
  const videos = await fetchVideos()
  const newDirectionArticles = await fetchNewDirectionArticles(4)
  const authors = await fetchAuthors()

  return {
    props: {
      articles: articles,
      videos: videos,
      newDirectionArticles: newDirectionArticles,
      authors: authors
    }
  }
}
