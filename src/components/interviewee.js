import React from 'react';

export default function Interviewee({ name, bio, links }) {
  return (
    <div className="h-screen sticky top-12 mt-32 ml-12 mb-12">
      <p className="font-sans mb-4">{name}</p>
      <p className="font-sans mb-4 font-extralight text-sm leading-5 text-gray-600">{bio}</p>
      <section
        className="font-sans font-extralight text-sm leading-6"
        dangerouslySetInnerHTML={{ __html: links }}
      />
    </div>
  );
}
