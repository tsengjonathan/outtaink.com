import React, { FC } from 'react';

import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import { fetchNewDirectionArticles } from '../utils/queries';
import { PrismicArticle } from '../types/cms';

type StoriesProps = {
  articles: PrismicArticle[]
}

const Stories: FC<StoriesProps> = ({ articles }: StoriesProps) => {
  return (
    <>
      <SEO title="Stories" />
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
        {articles.map(article => <ArticleCard key={article.id} article={article} equalHeight={true} hideQuote={true} />)}
      </div>
    </>
  )
}

export default Stories

export const getStaticProps = async () => {
  const articles = await fetchNewDirectionArticles()

  return {
    props: {
      articles: articles,
    }
  }
}
