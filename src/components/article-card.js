import React from 'react';

import { Link } from 'gatsby';
import Img from "gatsby-image"

function ArticleCard({ node }) {
  const data = node.data;
  const title = data.title.text || node.url;
  const cover = data.cover;

  const hoverEffect = "transition duration-300 ease-in-out no-underline";

  const coverImage = cover ? (
    <div className="bg-white">
      <Img className={`mb-4 hover:opacity-75 ${hoverEffect}`} fluid={cover.fluid} />
    </div>
  ) : null  

  return (
    <article className="pb-4 mb-8 border-0 border-b border-solid border-gray-500" key={node.url}>
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
        </section>
      </Link>
    </article>
  );
}

export default ArticleCard;
