import React from 'react';

export default function Interviewee({ name, bio, links }) {
  return (
    <div className="h-screen sticky lg:top-12 lg:mt-32 lg:ml-12 lg:mb-12">
      <p className="font-sans mb-4 font-medium">{name}</p>
      <p className="font-sans mb-4 font-light text-left leading-5 text-gray-600">{bio}</p>
      <section
        className="font-sans font-light leading-6"
        dangerouslySetInnerHTML={{ __html: links }}
      />
    </div>
  );
}
