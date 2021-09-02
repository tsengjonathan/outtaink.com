import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Colon from './Colon'

const Featured = ({ node }) => {
  const {
    url,
    data: {
      excerpt,
      name,
      title: {
        text: title
      },
      cover
    }
  } = node

  // TODO: Replace SVG with @heroicons/react once https://github.com/tailwindlabs/heroicons/pull/281 is merged
  return (
    <section className="flex max-w-screen-xl mx-auto grid grid-cols-featured">
      <GatsbyImage
        image={cover.gatsbyImageData}
        alt="Featured Cover"
      />
      <div className="flex flex-col">
        <div className="h-16" />
        <div className="bg-white">
          <div className="h-full pt-40 pb-10 px-10">
            <div className="flex items-center">
              <h1 className="font-mixed text-2xl mr-2">{name}</h1>
              <Colon />
            </div>
            <h1 className="font-mixed text-2xl mt-1">{title}</h1>
            <p className="font-mixed mt-10 font-light">{excerpt}</p>
            <div className="flex mt-6">
              <div className="flex-grow" />
              <Link className="flex" to={url}>
                <p className="font-light pr-1">了解更多</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-16" />
      </div>
    </section>
  )
}

export default Featured
