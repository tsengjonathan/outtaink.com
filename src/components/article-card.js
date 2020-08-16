import React from 'react';

import { Link } from 'gatsby';
import Img from "gatsby-image"

function ArticleCard({ node }) {
  const title = node.frontmatter.title || node.fields.slug;
  const cover = node.frontmatter.cover;

  const hoverEffect = "transition duration-300 ease-in-out no-underline";

  const image = (
    <div className="bg-white">
      <Img className={`mb-4 hover:opacity-75 ${hoverEffect}`} fluid={cover.childImageSharp.fluid} />
    </div>
  );

  return (
    <article key={node.fields.slug}>
      <Link
        className={`text-current hover:text-gray-700 ${hoverEffect}`}
        to={node.fields.slug}
      >
        { cover ? image : null }
        <header>
          <h3 className="mb-2">
            {title}
          </h3>
          <small>{node.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.excerpt,
            }}
          />
        </section>
      </Link>
    </article>
  );
}

export default ArticleCard;
