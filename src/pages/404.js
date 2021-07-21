import React from 'react';
import { graphql } from 'gatsby';
import { withUnpublishedPreview } from 'gatsby-source-prismic';

import ArticleTemplate from '../templates/article';

import SEO from '../components/seo';

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  );
};

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    article: ArticleTemplate,
  },
});

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
