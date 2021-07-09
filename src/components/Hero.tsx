import React from 'react';

import Colon from './Colon';

export type HeroProps = {

}

// eslint-disable-next-line no-empty-pattern
const Hero = ({ }: HeroProps) => {
  return (
    <div className="w-full h-96 relative flex items-center justify-center bg-default-900">
      <div className="h-full max-w-screen-md flex flex-col items-center justify-center font-mixed text-center">
        <h1 className="text-4xl mx-6 my-2 font-bold">
          A Voice for Students Studying Abroad
        </h1>
        <h3 className="text-xl mx-6 my-2 text-default-50">
          我們是一群漂泊異鄉的留學生，出國追夢的我們想與你們分享在國外我們所碰到，聽到，看到最真實的感受。通過這個平臺分享我們看到的世界，記錄留學生在海外的點點滴滴......
        </h3>
      </div>
      <Colon className="absolute bottom-4 right-4" />
    </div>
  )
}

export default Hero;
