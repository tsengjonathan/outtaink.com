import React from 'react';

import { PrismicArticleDataBioGroup } from '../../graphql';

type IntervieweeProps = {
  name: string
  bio: PrismicArticleDataBioGroup[]
  links: string
}

export default function Interviewee({ name, bio, links }: IntervieweeProps) {
  return (
    <div className="mb-8 sticky lg:top-24 lg:mt-44 lg:ml-12 lg:mb-12">
      <p className="font-zh mb-4 font-medium">{name}</p>
      {
        bio.map(({text}) => (
          <p className="font-zh mb-4 text-sm font-light text-left leading-5 text-gray-600">
            {text}
          </p>
        ))
      }
      <section
        className="font-zh text-sm font-light leading-6 interviewee-links"
        dangerouslySetInnerHTML={{ __html: links }}
      />
    </div>
  );
}
