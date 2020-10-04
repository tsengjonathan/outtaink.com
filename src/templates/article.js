import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ArticleTemplate = ({ data, pageContext, location }) => {
  const post = data.ghostPost;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.description || post.excerpt}
      />
      <Helmet>
          <style type="text/css">{`${post.codeinjection_styles}`}</style>
      </Helmet>
      <div className="mx-auto my-8 max-w-2xl">
        <article>
          <header>
            <h1 className="mt-6 mb-0">{post.title}</h1>
            <p className="text-sm block mb-6">{post.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr className="mb-6" />
          <footer />
        </article>

        <nav>
          <ul className="flex flex-wrap justify-between list-none p-0 m-0">
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
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
  query ArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    ghostPost(slug: {eq: $slug}) {
      title
      published_at(formatString: "MMMM DD, YYYY")
      excerpt
      html
      codeinjection_styles
    }
  }
`;
