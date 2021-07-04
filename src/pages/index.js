import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticleCard from '../components/article-card';
import Newsletter from '../components/newsletter';
import Featured from '../components/featured';

import '../styles/index.css';

const supportedLanguages = ['zh-tw', 'zh-cn']

const ArticleIndex = ({ data, location }) => {
  const navLang = navigator.language || navigator.userLanguage
  const [locale, setLocale] = useState(supportedLanguages.includes(navLang) ? navLang : 'zh-tw')

  const changeLanguage = () => locale === 'zh-tw' ? setLocale('zh-cn') : setLocale('zh-tw')
  
  const siteTitle = data.site.siteMetadata.title;
  const allPosts = data.allPrismicArticle.edges;
  const posts = allPosts.filter(({node}) => node.lang === locale)

  const featuredArticles = posts.slice(0, 3);
  const remainingArticles = posts.slice(3);

  const midPoint = Math.floor(remainingArticles.length / 2);
  const leftArticles = remainingArticles.slice(0, midPoint);
  const rightArticles = remainingArticles.slice(midPoint, posts.length);

  return (
    <Layout location={location} title={siteTitle} changeLanguage={changeLanguage}>
      <SEO title="Outtaink" />
      <Featured articles={featuredArticles} />
      <Newsletter />
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
    allPrismicArticle(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          url
          lang
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
