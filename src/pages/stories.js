import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticleCard from '../components/article-card';
import Filter from '../components/filter';

const Stories = ({ data, location }) => {
  const [filters, setFilters] = useState([]);

  const siteTitle = data.site.siteMetadata.title;

  const allPosts = data.allPrismicArticle.edges;

  const tags = allPosts.map(({node}) => node.tags).flat().filter((v, i, a) => a.indexOf(v) === i);

  const imgClass = 'h-96';

  const handleFilter = (option) => {
    if (filters.includes(option)) {
        setFilters(filters.slice().filter(filter => filter !== option))
    } else {
        setFilters([...filters, option])
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Outtaink" />
      <Filter options={tags} filters={filters} handleFilter={handleFilter} />
      <div className="m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPosts.map(({ node }) => {
          const visible = filters.length === 0 || node.tags.some(tag => filters.includes(tag));
          return <ArticleCard key={node.url} node={node} imgClass={imgClass} visible={visible} />
        })}
      </div>
    </Layout>
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
          url
          tags
          data {
            excerpt
            date(formatString: "MMMM DD, YYYY")
            title {
              text
            }
            author {
              document {
                ... on PrismicAuthor {
                  data {
                    name
                    image {
                      fixed(width: 24) {
                        ...GatsbyPrismicImageFixed
                      }
                    }
                  }
                }
              }
            }
            cover {
              fluid(maxWidth: 800) {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
