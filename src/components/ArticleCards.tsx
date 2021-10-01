import React from 'react'

import ArticleCard from './ArticleCard'

const ArticleCards = ({ articles }) => {

  return (
    <section className="column-1 md:column-2 cg-8 max-w-screen-page mx-auto mb-20">
      {articles.map(article => <ArticleCard node={article.node} />)}
    </section>
  )
}

export default ArticleCards
