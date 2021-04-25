import React from 'react';
import Img from 'gatsby-image';

export default function Member({ name, title, image, socials = {} }) {
  return (
    <div className="p-12">
      <div className="">
        <Img className="rounded-full" fluid={image.fluid} />
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-en text-default-50">{name}</h3>
        <p className="font-en font-bold text-default-400">{title}</p>
      </div>
    </div>
  );
}
