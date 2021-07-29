import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Colon from '../../../content/svg/colon.svg';
import { sanitizeArticle } from '../../utils/sanitize';

export default function FeaturedCard({ node, index }) {
  const data = node.data;
  const cover = data.cover;

  const interviewee = data.name;
  const headline = data.title.text;

  const renderedExcerpt = sanitizeArticle(node.data.excerpt);

  return (
    <Link to={node.url}>
      <div className="relative h-full">
        <div className="h-full">
          <Img
            className="h-full featured-img"
            imgStyle={{ 'objectFit': 'contain', 'objectPosition': 'right' }}
            fluid={cover.fluid}
          />
        </div>
        <div className="flex flex-col h-full w-2/5 absolute top-0 left-16 justify-center z-10">
          <h3 className="font-en font-bold text-xl text-default-50 mb-2">
            Story {index + 1}.
          </h3>
          <div className="flex items-center">
            <h1 className="font-en font-medium text-4xl mr-2">{interviewee}</h1>
            <Colon className="h-5" />
          </div>
          <h1 className="font-zh font-medium text-4xl mt-2 mb-6">{headline}</h1>
          <p
            className="font-zh font-light"
            dangerouslySetInnerHTML={{
              __html: renderedExcerpt,
            }}
          />
        </div>
      </div>
    </Link>
  );
}
