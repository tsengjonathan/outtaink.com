import React from 'react';
import {
  componentResolverFromMap,
  withPrismicUnpublishedPreview,
} from 'gatsby-plugin-prismic-previews';

import ArticleTemplate from '../templates/article';
import linkResolver from '../../linkResolver';

import SEO from '../components/SEO';

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
export default withPrismicUnpublishedPreview(NotFoundPage, [{
  repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
  linkResolver,
  componentResolver: componentResolverFromMap({
    article: ArticleTemplate,
  })
}]);