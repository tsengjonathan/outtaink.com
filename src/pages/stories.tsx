import React, { FC, useState } from 'react';

import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import Filter from '../components/Filter';
import { fetchArticles } from '../utils/queries';
import { PrismicArticle } from '../types/cms';

type StoriesProps = {
  articles: PrismicArticle[]
}

const Stories: FC<StoriesProps> = ({ articles }: StoriesProps) => {
  const [filters, setFilters] = useState(new Set<string>());

  const tags: Set<string> = new Set(articles.map(article => article.tags).flat())

  const posts = articles.filter(article => article.tags.some((tag: string) => filters.size === 0 || filters.has(tag)))

  const handleFilter = (option: string) => {
    // Copy iterable to force state update
    const newFilters = new Set(filters)
    newFilters.has(option) ? newFilters.delete(option) : newFilters.add(option)
    setFilters(newFilters)
  }

  return (
    <>
      <SEO title="Stories" />
      <Filter options={tags} filters={filters} handleFilter={handleFilter} />
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
        {posts.map(article => <ArticleCard key={article.id} article={article} equalHeight={true} />)}
      </div>
    </>
  )
}

export default Stories

export const getStaticProps = async () => {
  const articles = await fetchArticles()

  return {
    props: {
      articles: articles,
    }
  }
}
