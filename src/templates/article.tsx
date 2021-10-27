import React from 'react';
import { graphql } from 'gatsby';
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import SEO from '../components/SEO';
import Interviewee from '../components/Interviewee';

import Colon from '../../content/svg/colon.svg';

import { sanitizeArticle } from '../utils/sanitize';
import linkResolver from '../../linkResolver';
import { PrismicArticle, Site } from '../utils/types'
import { isPrismicAuthor } from '../utils/graphql';


type ArticleTemplateProps = {
  data: {
    site: Site
    prismicArticle: PrismicArticle
  }
}

const ArticleTemplate = ({ data }: ArticleTemplateProps) => {
  const article = data.prismicArticle.data;
  const document = article.author.document;
  const author = isPrismicAuthor(document) ? document.data.name : 'N/A'
  
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
    <>
      <SEO title={article.title.text} description={article.excerpt} image={coverUrl} />
      <div className="grid grid-cols-1 lg:grid-cols-article mx-4 lg:mx-40">
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
        <div className="flex flex-col">
          <Interviewee name={name} bio={bio} links={links} />
          <div className="flex-grow" />
        </div>
      </div>
    </>
  );
};

export default withPrismicPreview(ArticleTemplate, [{
  repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
  linkResolver,
}]);

export const pageQuery = graphql`
  query ArticleBySlug($url: String!) {
    site {
      siteMetadata {
        title
      }
    }
    prismicArticle(url: {eq: $url}, lang: {eq: "zh-tw"}) {
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
                  gatsbyImageData(
                    width: 24
                  )
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
