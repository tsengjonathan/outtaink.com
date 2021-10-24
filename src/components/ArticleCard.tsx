import React, { FC } from 'react'
import classNames from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Colon from './Colon'
import { PrismicArticle } from '../../graphql'

type ArticleCardProps = {
  node: PrismicArticle
  equalHeight?: boolean
}

const ArticleCard: FC<ArticleCardProps> = ({ node, equalHeight = false }: ArticleCardProps) => {
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

  const imageClasses = classNames(
    { 'h-72': equalHeight }
  )

  return (
    <div className="bg-white p-4 mx-6 md:mx-0 mb-6 md:mb-10 break-inside-avoid">
      <Link to={url}>
        <GatsbyImage
          image={cover.gatsbyImageData}
          alt={name}
          className={imageClasses}
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
