import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticleCard from '../components/article-card';
import Newsletter from '../components/newsletter';

import '../styles/index.css';

const ArticleIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allPrismicArticle.edges;

  const midPoint = Math.floor(posts.length / 2);
  const leftArticles = posts.slice(0, midPoint)
  const rightArticles = posts.slice(midPoint, posts.length)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Newsletter />
      <div className="my-8 mx-10 flex">
        <div className="h-full w-7/12 mr-10">
          {leftArticles.map(({ node }) => (
            <ArticleCard key={node.url} node={node} />
          ))}
        </div>
        <div className="h-full w-5/12">
        {rightArticles.map(({ node }) => (
            <ArticleCard key={node.url} node={node} />
          ))}
        </div>
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
