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
    <div className="bg-white p-4 m-6 md:mb-10 break-inside-avoid">
      <Link to={url}>
        <GatsbyImage
          image={cover.gatsbyImageData}
          alt={name}
          className="max-h-112"
        />
        <div className="mt-4">
          <div className="flex items-center">
            <h1 className="font-mixed font-medium text-2xl mr-2">{name}</h1>
            <Colon />
          </div>
          <h1 className="font-mixed font-medium text-xl mt-1">{title}</h1>
        </div>
      </Link>
    </div>
  )
}

export default ArticleCard
