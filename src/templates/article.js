import React from 'react';
import { graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Interviewee from '../components/interviewee';

import Colon from '../../content/svg/colon.svg';

const ArticleTemplate = ({ data, pageContext, location }) => {
  const article = data.prismicArticle.data;
  const siteTitle = data.site.siteMetadata.title;
  const author = article.author.document.data.name;

  const title = article.title.text;
  const [interviewee, headline] = title.split(/\s*[:：]\s*/);

  const { name, bio, links: { html: links } } = article;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={article.title.text} description={article.excerpt} />
      <div className="grid grid-cols-1 lg:grid-cols-article mx-4 lg:mx-40 lg:my-20">
        <article>
          <header>
            <div className="mt-6 mb-2 flex items-center">
              <h1 className="mb-0 mr-2 font-medium">{interviewee}</h1>
              <Colon />
            </div>
            <h1 className="mb-6 font-medium">{headline}</h1>
            <div className="text-sm font-sans flex mb-6 w-1/2">
              <p className="flex-1 m-0 font-bold text-default-200">
                {author.toUpperCase()}
              </p>
              <p className="flex-1 m-0 font-light">{article.date}</p>
            </div>
          </header>
          <section
            className="font-sans font-light tracking-wide"
            dangerouslySetInnerHTML={{ __html: article.body.html }}
          />
          <hr className="mb-6" />
          <footer />
        </article>
        <Interviewee name={name} bio={bio} links={links} />
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
    prismicArticle(url: { eq: $url }) {
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
        name
        bio
        links {
          html
        }
      }
    }
  }
`;
