import React from 'react';

import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

function ArticleCard({ node }) {
  const title = node.frontmatter.title || node.fields.slug;
  return (
    <article key={node.fields.slug}>
      <Link
        className="text-current hover:text-gray-700 transition duration-300 ease-in-out"
        to={node.fields.slug}
      >
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
