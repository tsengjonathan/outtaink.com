import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import { useScroll } from 'react-use'

import Featured from '../components/Featured'
import Introduction from '../components/Introduction'
import ArticleCards from '../components/ArticleCards'
import Navigation from '../components/Navigation'
import Drawer from '../components/Drawer'
import StickyNavigation from '../components/StickyNavigation'

const New = ({ data }) => {
  const scrollRef = useRef(null)
  const { y } = useScroll(scrollRef)

  const featuredArticle = data.allPrismicArticle.edges[0]
  const articles = data.allPrismicArticle.edges.slice(1)

  const drawerToggleId = 'drawer-toggle'

  return (
    <main className="bg-background h-full">
      <Drawer toggleId={drawerToggleId} scrollRef={scrollRef}>
        <StickyNavigation isVisible={y > 0} />
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
