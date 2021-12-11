import React, { FC } from 'react'
import { PrismicArticle } from '../types/cms'

import ArticleCard from './ArticleCard'

type ArticleCardsProps = {
  articles: PrismicArticle[]
}

const ArticleCards: FC<ArticleCardsProps> = ({ articles }: ArticleCardsProps) => {

  return (
    <section className="column-1 md:column-2 cg-8 max-w-screen-page mx-auto mb-10 md:mb-20">
      {articles.map(article => <ArticleCard article={article} />)}
    </section>
  )
}

export default ArticleCards
