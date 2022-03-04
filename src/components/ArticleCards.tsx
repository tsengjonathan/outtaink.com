import React, { FC } from 'react'
import Link from 'next/link'
import { PrismicArticle } from '../types/cms'

import ArticleCard from './ArticleCard'
import HairlineButton from './HairlineButton'
import MoreStories from './MoreStories'

type ArticleCardsProps = {
  articles: PrismicArticle[]
}

const ArticleCards: FC<ArticleCardsProps> = ({ articles }: ArticleCardsProps) => {
  return (
    <>
      <HairlineButton title="關於留學，我們有話要說" className='mx-auto mb-8' />
      <section className="column-1 md:column-2 cg-9 max-w-screen-lg mx-auto mb-10">
        {articles.map(article => <ArticleCard article={article} key={article.id} />)}
      </section>
      <section className="max-w-screen-lg mx-auto flex justify-center">
        <Link href="/stories">
          <a className="mb-10 md:mb-16">
            <MoreStories />
          </a>
        </Link>
      </section>
    </>
  )
}

export default ArticleCards
