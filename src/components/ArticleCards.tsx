import React, { FC } from 'react'

import ArticleCard from './ArticleCard'
import { PrismicArticleEdge } from '../../graphql'

type ArticleCardsProps = {
  articles: PrismicArticleEdge[]
}

const ArticleCards: FC<ArticleCardsProps> = ({ articles }: ArticleCardsProps) => {

  return (
    <section className="column-1 md:column-2 cg-8 max-w-screen-page mx-auto mb-10 md:mb-20">
      {articles.map(article => <ArticleCard node={article.node} />)}
    </section>
  )
}

export default ArticleCards
