import React from 'react';
import { graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Interviewee from '../components/interviewee';

import Colon from '../../content/svg/colon.svg';

import { sanitizeArticle } from '../utils/sanitize';

const ArticleTemplate = ({ data, pageContext, location }) => {
  const article = data.prismicArticle.data;
  const siteTitle = data.site.siteMetadata.title;
  const author = article.author.document.data.name;
  
  const coverUrl = article.cover.url;

  const interviewee = article.name;
  const headline = article.title.text;

  const {
    name,
    bio_group: bio,
    links: { html: links },
  } = article;

  const renderedHTML = sanitizeArticle(article.body.html);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={article.title.text} description={article.excerpt} image={coverUrl} />
      <div className="grid grid-cols-1 lg:grid-cols-article mx-4 lg:mx-40 lg:my-20">
        <article id="article">
          <header>
            <div className="mt-6 mb-2 flex items-center">
              <h1 className="mb-0 mr-2 text-4xl font-medium font-en">
                {interviewee}
              </h1>
              <Colon className="h-5" />
            </div>
            <h1 className="mb-6 text-4xl font-medium font-zh">{headline}</h1>
            <div className="flex mb-6 w-3/4">
              <p className="flex-1 m-0 text-sm font-bold font-en tracking-widest text-default-200">
                {author.toUpperCase()}
              </p>
              <p className="flex-1 m-0 text-sm font-light font-en tracking-widest">
                {article.date}
              </p>
            </div>
          </header>
          <section
            className="text-base font-light font-zh tracking-wide"
            dangerouslySetInnerHTML={{ __html: renderedHTML }}
          />
          <hr className="my-6" />
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
        date(formatString: "MM.DD.YYYY")
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
          url
        }
        name
        bio_group {
          text
        }
        links {
          html
        }
      }
    }
  }
`;
