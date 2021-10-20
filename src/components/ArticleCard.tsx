import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Colon from './Colon'

const ArticleCard = ({ node }) => {
  const {
    url,
    data: {
      name,
      title: {
        text: title
      },
      cover
    }
  } = node

  return (
    <div className="bg-white p-4 mx-6 md:mx-0 mb-6 md:mb-10 break-inside-avoid">
      <Link to={url}>
        <GatsbyImage
          image={cover.gatsbyImageData}
          alt={name}
        />
        <div className="mt-3 md:mt-4">
          <div className="flex items-center">
            <h1 className="font-mixed font-medium text-xl md:text-2xl mr-2">{name}</h1>
            <Colon width={8} />
          </div>
          <h1 className="font-mixed font-medium text-lg md:text-xl mt-1">{title}</h1>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCard
