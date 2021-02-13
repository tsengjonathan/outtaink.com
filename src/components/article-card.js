import React from 'react';

import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Colon from '../../content/svg/colon.svg';

function ArticleCard({ node }) {
  const data = node.data;
  const title = data.title.text;
  const cover = data.cover;

  const hoverEffect = 'transition duration-300 ease-in-out no-underline';

  const [interviewee, headline] = title.split(/\s*[:：]\s*/);

  const coverImage = cover ? (
    <div className="bg-white">
      <Img
        className={`mb-4 article-card-img ${hoverEffect}`}
        fluid={cover.fluid}
      />
    </div>
  ) : null;

  return (
    <article
      className="pb-4 mb-8 border-0 border-b border-solid border-gray-500"
      key={node.url}
    >
      <Link
        className={`text-current article-card ${hoverEffect}`}
        to={node.url}
      >
        {coverImage}
        <header>
          <div className="mb-2 inline-flex items-center">
            <h3 className={`mb-0 pr-2`}>{interviewee}</h3>
            <div className="colon w-2"><Colon /></div>
            <h3 className={`mb-0 pl-2 flex-1`}>{headline}</h3>
          </div>
        </header>
        <section>
          <p
            className="mb-2 font-sans font-extralight"
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
