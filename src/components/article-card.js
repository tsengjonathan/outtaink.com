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
    <article className="inline-block mb-4" key={node.fields.slug}>
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
            className="mb-2"
            dangerouslySetInnerHTML={{
              __html: node.excerpt,
            }}
          />
          <div className="flex items-center">
            <Img className="h-4 rounded-full mr-2" fixed={node.frontmatter.author.img.childImageSharp.fixed} />
            <small className="py-2">{node.frontmatter.author.name}</small>
          </div>
        </section>
      </Link>
    </article>
  );
}

export default ArticleCard;
