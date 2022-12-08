import React from 'react'
import ArticleCards from '../components/ArticleCards'
import Featured from '../components/Featured'
import Introduction from '../components/Introduction'
import NewDirection from '../components/NewDirection'
import NewDirectionArticleCards from '../components/NewDirectionArticleCards'
import SEO from '../components/SEO'
import VideoSection from '../components/VideoSection'
import { PrismicArticle, PrismicVideo } from '../types/cms'
import { introduction } from '../utils/constants'
import { fetchArticles, fetchNewDirectionArticles, fetchVideos } from '../utils/queries'

type LandingPageProps = {
  articles: PrismicArticle[]
  videos: PrismicVideo[]
  newDirectionArticles: PrismicArticle[]
}

const LandingPage = ({ articles: allArticles, videos, newDirectionArticles }: LandingPageProps) => {

  const featuredArticle = allArticles[0]
  const articles = allArticles.slice(1)

  return (
    <>
      <SEO title="Outtaink" description={introduction} />
      <Featured article={featuredArticle} />
      <Introduction />
      <ArticleCards articles={articles} />
      <NewDirection />
      <NewDirectionArticleCards articles={newDirectionArticles} />
      <VideoSection videos={videos} />
    </>
  )
}

export default LandingPage

export const getStaticProps = async () => {
  const articles = await fetchArticles(11)
  const videos = await fetchVideos()
  const newDirectionArticles = await fetchNewDirectionArticles(4)

  return {
    props: {
      articles: articles,
      videos: videos,
      newDirectionArticles: newDirectionArticles
    }
  }
}
