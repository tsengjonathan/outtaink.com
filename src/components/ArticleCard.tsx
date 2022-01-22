import React, { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { PrismicArticle } from '../types/cms'
import Colon from './Colon'

type ArticleCardProps = {
  article: PrismicArticle
  equalHeight?: boolean
}

const ArticleCard: FC<ArticleCardProps> = ({ article, equalHeight = false }: ArticleCardProps) => {
  const {
    url,
    data: {
      name,
      title,
      cover
    }
  } = article

  const imageClasses = classNames(
    'relative',
    { 'h-72': equalHeight }
  )

  return (
    <div className="bg-white p-5 mx-6 md:mx-0 mb-6 md:mb-10 break-inside-avoid drop-shadow rounded">
      <Link href={url}>
        <a>
          <div className={imageClasses}>
            <Image
              src={cover.url}
              alt={cover.alt}
              layout={equalHeight ? "fill" : "responsive"}
              objectFit="cover"
              { ...!equalHeight && { height: cover.dimensions.height }}
              { ...!equalHeight && { width: cover.dimensions.width }}
            />
          </div>
          <div className="mt-3 md:mt-4">
            <div className="flex items-center">
              <h1 className="font-mixed font-medium text-xl md:text-2xl mr-2">{name}</h1>
              <Colon width={8} />
            </div>
            <h1 className="font-mixed font-medium text-lg md:text-xl mt-1">
              { title.map(heading => heading.text) }
            </h1>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ArticleCard
