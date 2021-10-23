import React, { useState } from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import Filter from '../components/Filter';

const Stories = ({ data }) => {
  const [filters, setFilters] = useState(new Set<string>());

  const allPosts = data.allPrismicArticle.edges;

  const tags: Set<string> = new Set(allPosts.map(({node}) => node.tags).flat())

  const posts = allPosts.filter(({ node }) => node.tags.some((tag: string) => filters.size === 0 || filters.has(tag)))

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
      <div className="m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {posts.map(({ node }) => <ArticleCard key={node.id} node={node} equalHeight={true} />)}
      </div>
    </>
  )
}

export default Stories;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPrismicArticle(sort: { fields: data___date, order: DESC } filter: { lang: { eq: "zh-tw" } }) {
      edges {
        node {
          id
          url
          tags
          data {
            excerpt
            date(formatString: "MMMM DD, YYYY")
            title {
              text
            }
            name
            author {
              document {
                ... on PrismicAuthor {
                  data {
                    name
                    image {
                      gatsbyImageData(
                        width: 24
                      )
                    }
                  }
                }
              }
            }
            cover {
              gatsbyImageData(
                layout: FULL_WIDTH
                width: 800
              )
            }
          }
        }
      }
    }
  }
`;
