import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/Hero';
import ArticleCard from '../components/article-card';

import '../styles/index.css';

const ArticleIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allPrismicArticle.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Outtaink" />
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-2 my-4 max-w-screen-xl mx-auto">
        {posts.map(({ node }) => (
          <ArticleCard key={node.url} node={node} />
        ))}
      </div>
    </Layout>
  );
};

export default ArticleIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPrismicArticle(sort: { fields: data___date, order: DESC }, limit: 10) {
      edges {
        node {
          url
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
