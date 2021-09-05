import React from 'react'
import { graphql } from 'gatsby'

import Featured from '../components/Featured'
import Introduction from '../components/Introduction'

const New = ({ data }) => {
  const featuredArticle = data.allPrismicArticle.edges[0]

  return (
    <main className="bg-background">
      <Featured node={featuredArticle.node} />
      <Introduction />
    </main>
  )
}

export default New

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
