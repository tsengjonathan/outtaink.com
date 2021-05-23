import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticleCard from '../components/article-card';

const Stories = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allPrismicArticle.edges;

  const imgClass = 'h-96';

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Outtaink" />
        <div className="m-8 grid grid-cols-3 gap-4">
          {posts.map(({ node }) => (
            <ArticleCard key={node.url} node={node} imgClass={imgClass} />
          ))}
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
    allPrismicArticle(sort: { fields: data___date, order: DESC }) {
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
