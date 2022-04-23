import React, { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { PrismicArticle } from '../types/cms'
import Colon from './Colon'
import Quote from './Quote'

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
      cover,
      quote
    }
  } = article

  const imageClasses = classNames(
    'relative',
    { 'h-72': equalHeight }
  )

  const wrapperClasses = classNames(
    'bg-white mx-6 mb-6 break-inside-avoid drop-shadow rounded',
    'md:mx-0 md:mb-10',
  )

  return (
    <div className={wrapperClasses}>
      <Link href={url}>
        <a className="relative grid">
          <div className="transition-opacity duration-500 opacity-100 md:hover:opacity-0 z-20 bg-white p-5">
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
          </div>
          <div className="hidden lg:flex flex-col items-center justify-center absolute w-full h-full">
            <div className="m-16 relative">
              <Quote className="w-12 absolute" />
              <Quote className="w-12 absolute rotate-180 right-0 bottom-0 mr-6" />
              <h2 className="relative text-2xl leading-relaxed font-mixed z-10 p-4">
                {quote}
              </h2>
            </div>
            <p className="font-mixed font-medium">
              {name}
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ArticleCard
