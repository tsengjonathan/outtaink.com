import React from 'react';

import { Link } from 'gatsby';
import Img from "gatsby-image"

function ArticleCard({ node }) {
  const title = node.title || node.slug;
  const cover = node.cover_image;
  const author = node.primary_author

  const hoverEffect = "transition duration-300 ease-in-out no-underline";

  const coverImage = cover ? (
    <div className="bg-white">
      <Img className={`mb-4 hover:opacity-75 ${hoverEffect}`} fluid={cover.childImageSharp.fluid} />
    </div>
  ) : null  

  const authorImage = author.image ? (
    <Img className="h-4 rounded-full mr-2" fixed={author.image.childImageSharp.fixed} />
  ) : null

  return (
    <article className="inline-block mb-4" key={node.slug}>
      <Link
        className={`text-current hover:text-gray-700 ${hoverEffect}`}
        to={node.slug}
      >
        { coverImage }
        <header>
          <h3 className="mb-2">
            {title}
          </h3>
          <small>{node.published_at}</small>
        </header>
        <section>
          <p
            className="mb-2"
            dangerouslySetInnerHTML={{
              __html: node.excerpt,
            }}
          />
          <div className="flex items-center">
            { authorImage }
            <small className="py-2">{author.name}</small>
          </div>
        </section>
      </Link>
    </article>
  );
}

export default ArticleCard;
