import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import FeaturedCard from './featured-card';

import PrevIcon from '../../../content/svg/prev.svg';
import NextIcon from '../../../content/svg/next.svg';

const borderStyle = "border-0 border-black border-solid"

export default function Featured({ articles }) {
  return (
    <CarouselProvider
      naturalSlideWidth={300}
      naturalSlideHeight={100}
      totalSlides={articles.length}
    >
      <div className="flex">
        <ButtonBack className={`w-20 ${borderStyle} border-r`}>
          <PrevIcon className="mx-auto" />
        </ButtonBack>
        <div className="w-full">
          <Slider>
            {articles.map(({ node }, idx) => (
              <Slide index={idx}>
                <FeaturedCard node={node} index={idx} />
              </Slide>
            ))}
          </Slider>
        </div>
        <ButtonNext className={`w-20 ${borderStyle} border-l`}>
          <NextIcon className="mx-auto" />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}
