import React from 'react'
import { graphql } from 'gatsby'

import Featured from '../components/Featured'
import Introduction from '../components/Introduction'
import ArticleCards from '../components/ArticleCards'
import Navigation from '../components/Navigation'
import Drawer from '../components/Drawer'
import StickyNavigation from '../components/StickyNavigation'

const New = ({ data }) => {
  const featuredArticle = data.allPrismicArticle.edges[0]
  const articles = data.allPrismicArticle.edges.slice(1)

  const drawerToggleId = 'drawer-toggle'

  return (
    <main className="bg-background">
      <Drawer toggleId={drawerToggleId}>
        <StickyNavigation />
        <Navigation drawerToggleId={drawerToggleId} />
        <Featured node={featuredArticle.node} />
        <Introduction />
        <ArticleCards articles={articles} />
      </Drawer>
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
      limit: 10
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
