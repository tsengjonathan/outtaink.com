import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ArticleTemplate = ({ data, pageContext, location }) => {
  const article = data.prismicArticle.data;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={article.title.text}
        description={article.excerpt}
      />
      <div className="mx-auto my-8 max-w-2xl">
        <article>
          <header>
            <h1 className="mt-6 mb-0">{article.title.text}</h1>
            <p className="text-sm block mb-6">{article.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: article.body.html }} />
          <hr className="mb-6" />
          <footer />
        </article>

        <nav>
          <ul className="flex flex-wrap justify-between list-none p-0 m-0">
            <li>
              {previous && (
                <Link to={previous.url} rel="prev">
                  ← {previous.data.title.text}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.url} rel="next">
                  {next.data.title.text} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query ArticleBySlug($url: String!) {
    site {
      siteMetadata {
        title
      }
    }
    prismicArticle(url: {eq: $url}) {
      url
      data {
        excerpt
        date(formatString: "MMMM DD, YYYY")
        body {
          html
        }
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
`;
