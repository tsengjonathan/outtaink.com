import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticleCard from '../components/article-card';

import '../styles/index.css';

const ArticleIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allGhostPost.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="mx-auto my-8 masonry">
        {posts.map(({ node }) => (
          <ArticleCard key={node.slug} node={node} />
        ))}
      </div>
    </Layout>
  );
};

export default ArticleIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allGhostPost(sort: {fields: published_at, order: DESC}) {
      edges {
        node {
          excerpt
          slug
          published_at(formatString: "MMMM DD, YYYY")
          title
          cover_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          authors {
            name
            image {
              childImageSharp {		
                fixed(width: 24) {		
                  ...GatsbyImageSharpFixed		
                }		
              }
            }
          }
        }
      }
    }
  }
`;
