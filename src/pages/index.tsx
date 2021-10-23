import React from 'react'
import { graphql } from 'gatsby'

import Featured from '../components/Featured'
import Introduction from '../components/Introduction'
import ArticleCards from '../components/ArticleCards'
import SEO from '../components/SEO'
import { introduction } from '../utils/constants'

const LandingPage = ({ data }) => {

  const featuredArticle = data.allPrismicArticle.edges[0]
  const articles = data.allPrismicArticle.edges.slice(1)

  return (
    <>
      <SEO title="Outtaink" description={introduction} />
      <Featured node={featuredArticle.node} />
      <Introduction />
      <ArticleCards articles={articles} />
    </>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPrismicArticle(
      sort: {fields: data___date, order: DESC}
      filter: {lang: {eq: "zh-tw"}}
      limit: 11
    ) {
      edges {
        node {
          url
          data {
            excerpt
            date(formatString: "MMMM DD, YYYY")
            name
            title {
              text
            }
            author {
              document {
                ... on PrismicAuthor {
                  data {
                    name
                  }
                }
              }
            }
            cover {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
