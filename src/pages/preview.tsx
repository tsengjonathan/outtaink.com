import * as React from 'react';
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews';

import linkResolver from '../../linkResolver';

const PreviewPage = () => {
  return (
    <p>Loading</p>
  );
};

export default withPrismicPreviewResolver(PreviewPage, [{
  repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
  linkResolver,
}]);
