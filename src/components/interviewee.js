import React from 'react';

export default function Interviewee({ name, bio }) {
  return (
    <div className="h-screen sticky top-12 mt-32 ml-12 mb-12">
      <p className="font-sans mb-4">{name}</p>
      <section
        className="font-sans font-extralight text-sm leading-5 text-gray-500"
        dangerouslySetInnerHTML={{ __html: bio }}
      />
    </div>
  );
}
