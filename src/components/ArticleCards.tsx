import React, { FC } from 'react'
import { PrismicArticle } from '../types/cms'

import ArticleCard from './ArticleCard'
import HairlineButton from './HairlineButton'

type ArticleCardsProps = {
  articles: PrismicArticle[]
}

const ArticleCards: FC<ArticleCardsProps> = ({ articles }: ArticleCardsProps) => {

  return (
    <>
      <HairlineButton title="關於留學，我們有話要說" className='mx-auto mb-8' />
      <section className="column-1 md:column-2 cg-8 max-w-screen-page mx-auto mb-10 md:mb-20">
        {articles.map(article => <ArticleCard article={article} key={article.id} />)}
      </section>
    </>
  )
}

export default ArticleCards
