import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import ArticleCard from '../components/article-card';

import '../styles/index.css';

const ArticleIndex = ({ data }) => {
  const posts = data.allPrismicArticle.edges;

  const midPoint = Math.floor(posts.length / 2);
  const leftArticles = posts.slice(0, midPoint);
  const rightArticles = posts.slice(midPoint, posts.length);

  return (
    <>
      <SEO title="Outtaink" />
      <div className="my-8 mx-4 lg:mx-10 flex flex-col lg:flex-row">
        <div className="h-full lg:w-7/12 lg:mr-10">
          {leftArticles.map(({ node }) => (
            <ArticleCard key={node.url} node={node} />
          ))}
        </div>
        <div className="h-full lg:w-5/12">
          {rightArticles.map(({ node }) => (
            <ArticleCard key={node.url} node={node} />
          ))}
        </div>
      </div>
    </>
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
                    image {
                      gatsbyImageData(
                        layout: FIXED
                        width: 24
                      )
                    }
                  }
                }
              }
            }
            cover {
              gatsbyImageData(
                layout: FULL_WIDTH
                width: 800
              )
            }
          }
        }
      }
    }
  }
`;
