import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticleCard from '../components/article-card';

import '../styles/index.css';

const ArticleIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allPrismicArticle.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="mx-auto my-8 masonry">
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
    allPrismicArticle(sort: {fields: data___date, order: DESC}) {
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
