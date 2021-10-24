import React, { FC } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import { PrismicArticle } from '../../graphql'
import Colon from './Colon'
import LearnMore from './LearnMore'

type FeaturedProps = {
  node: PrismicArticle
}

const Featured: FC<FeaturedProps> = ({ node }: FeaturedProps) => {
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
    <section className="flex max-w-screen-page mx-auto grid grid-cols-1 md:grid-cols-featured">
      <GatsbyImage
        image={cover.gatsbyImageData}
        alt="Featured Cover"
        className="m-6 md:m-0 z-10"
      />
      <div className="flex flex-col">
        <div className="hidden md:block h-36" />
        <div className="bg-white mr-14 md:mr-0 transform -translate-y-10 -mb-10 md:mb-0">
          <div className="h-full mt-8 md:pt-40 pb-4 md:pb-10 px-6 md:pl-10 md:pr-16">
            <div className="flex items-center">
              <h1 className="font-mixed font-medium text-3xl md:text-4xl mr-2">{name}</h1>
              <Colon />
            </div>
            <h1 className="font-mixed font-medium text-3xl mt-1">{title}</h1>
            <p className="font-mixed mt-6 md:mt-10 font-light text-xl">{excerpt}</p>
            <div className="flex mt-6">
              <div className="flex-grow" />
              <LearnMore className="text-xl text-black" url={url} text="了解更多" />
            </div>
          </div>
        </div>
        <div className="hidden md:block h-16" />
      </div>
    </section>
  )
}

export default Featured
