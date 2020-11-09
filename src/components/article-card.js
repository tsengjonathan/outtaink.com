import React from 'react';

import { Link } from 'gatsby';
import Img from "gatsby-image"

function ArticleCard({ node }) {
  const data = node.data;
  const title = data.title.text || node.url;
  const cover = data.cover;
  const author = data.author.document.data;

  const hoverEffect = "transition duration-300 ease-in-out no-underline";

  const coverImage = cover ? (
    <div className="bg-white">
      <Img className={`mb-4 hover:opacity-75 ${hoverEffect}`} fluid={cover.fluid} />
    </div>
  ) : null  

  const authorImage = author.image.fixed ? (
    <Img className="h-4 rounded-full mr-2" fixed={author.image.fixed} />
  ) : null

  return (
    <article className="break-inside-avoid mb-4" key={node.url}>
      <Link
        className={`text-current hover:text-gray-700 ${hoverEffect}`}
        to={node.url}
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
              __html: node.data.excerpt,
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
