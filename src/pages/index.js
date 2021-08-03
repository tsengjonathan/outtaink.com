import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import ArticleCard from '../components/article-card';
import Featured from '../components/featured';

import '../styles/index.css';

const ArticleIndex = ({ data }) => {
  const posts = data.allPrismicArticle.edges;

  const featuredArticles = posts.slice(0, 3);
  const remainingArticles = posts.slice(3);

  const midPoint = Math.floor(remainingArticles.length / 2);
  const leftArticles = remainingArticles.slice(0, midPoint);
  const rightArticles = remainingArticles.slice(midPoint, posts.length);

  return (
    <>
      <SEO title="Outtaink" />
      <Featured articles={featuredArticles} />
      <div className="my-8 mx-4 lg:mx-10 flex flex-col lg:flex-row">
        <div className="lg:hidden">
          {featuredArticles.map(({ node }) => (
            <ArticleCard key={node.url} node={node} />
          ))}
        </div>
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
