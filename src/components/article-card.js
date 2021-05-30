import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { CSSTransition } from 'react-transition-group';

import { sanitizeArticle } from '../utils/sanitize';

import Colon from '../../content/svg/colon.svg';

function ArticleCard({ node, imgClass, visible }) {
  const data = node.data;
  const title = data.title.text;
  const cover = data.cover;

  const hoverEffect = 'transition duration-300 ease-in-out no-underline';

  const [interviewee, headline] = title.split(/\s*[:：]\s*/);

  const renderedExcerpt = sanitizeArticle(node.data.excerpt);

  const coverImage = cover ? (
    <div className="bg-black">
      <Img
        className={`mb-4 article-card-img ${imgClass} ${hoverEffect}`}
        fluid={cover.fluid}
      />
    </div>
  ) : null;

  return (
    <CSSTransition in={visible} timeout={300} classNames="article-card-transition" unmountOnExit>
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
            <div className="header mb-2 inline-flex items-center">
              <h3 className="mb-0 pr-2 text-xl font-medium font-mixed">
                {interviewee}
              </h3>
              <div className="colon w-2">
                <Colon />
              </div>
              <h3 className="mb-0 pl-2 flex-1 text-xl font-medium font-mixed">
                {headline}
              </h3>
            </div>
          </header>
          <section>
            <p
              className="mb-2 font-zh font-light"
              dangerouslySetInnerHTML={{
                __html: renderedExcerpt,
              }}
            />
          </section>
        </Link>
      </article>
    </CSSTransition>
  );
}

export default ArticleCard;
