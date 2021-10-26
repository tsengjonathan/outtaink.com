/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

type SEOProps = {
  description?: string
  lang?: string
  meta?: HTMLMetaElement[]
  title: string
  image?: string
}

const SEO: FC<SEOProps> = ({ description, lang, meta = [], title, image }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const url = site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:image:secure_url`,
          content: image,
        },
      ].concat(meta)}
    >
      <script
        async
        defer
        data-domain="outtaink.com"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </Helmet>
  );
};

export default SEO;
