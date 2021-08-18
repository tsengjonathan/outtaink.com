import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CSSTransition } from 'react-transition-group';

import { sanitizeArticle } from '../utils/sanitize';

import Colon from '../../content/svg/colon.svg';

function ArticleCard({ node, imgClass, visible = true }) {
  const data = node.data;
  const cover = data.cover;

  const interviewee = data.name;
  const headline = data.title.text;

  const hoverEffect = 'transition duration-300 ease-in-out no-underline';

  const renderedExcerpt = sanitizeArticle(node.data.excerpt);

  const coverImage = cover ? (
    <div className="bg-black">
      <GatsbyImage
        className={`mb-4 article-card-img ${imgClass} ${hoverEffect}`}
        image={cover.gatsbyImageData}
        alt="Article Cover"
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
