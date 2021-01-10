import React from 'react';
import { graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic'

import Layout from '../components/layout';
import SEO from '../components/seo';

const ArticleTemplate = ({ data, pageContext, location }) => {
  const article = data.prismicArticle.data;
  const siteTitle = data.site.siteMetadata.title;
  const author = article.author.document.data.name;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={article.title.text}
        description={article.excerpt}
      />
      <div className="grid grid-cols-article mx-40 my-20">
        <article>
          <header>
            <h1 className="my-6">{article.title.text}</h1>
            <div className="text-sm font-sans flex mb-6 w-1/2">
              <p className="flex-1 m-0 font-semibold text-default-200">{author}</p>
              <p className="flex-1 m-0">{article.date}</p>
            </div>
          </header>
          <section className='font-sans font-extralight tracking-wide' dangerouslySetInnerHTML={{ __html: article.body.html }} />
          <hr className="mb-6" />
          <footer />
        </article>
        <div>

        </div>
      </div>
    </Layout>
  );
};

export default withPreview(ArticleTemplate);

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
        date(formatString: "MM/DD/YYYY")
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
