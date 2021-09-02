import React from 'react'
import { graphql } from 'gatsby'

import Featured from '../components/Featured'

const New = ({ data }) => {
  const article = data.allPrismicArticle.edges[0]

  return (
    <main className="bg-background">
      <Featured node={article.node}/>
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
