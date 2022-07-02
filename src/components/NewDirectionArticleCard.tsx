import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { PrismicArticle } from '../types/cms'
import Colon from './Colon'

type NewDirectionArticleCardProps = {
  article: PrismicArticle
}

const NewDirectionArticleCard = ({ article }: NewDirectionArticleCardProps) => {
  const {
    url,
    data: {
      name,
      title,
      cover
    }
  } = article

  const wrapperClasses = classNames(
    'bg-white mx-6 break-inside-avoid drop-shadow rounded overflow-hidden',
    'md:mx-0',
  )

  return (
    <div className={wrapperClasses}>
      <Link href={url}>
        <a className="relative grid">
          <div className={classNames(
            "transition-opacity duration-500 opacity-100 z-20 bg-white",
          )}>
            <div className="relative">
              <Image
                src={cover.url}
                alt={cover.alt}
                layout="responsive"
                height={cover.dimensions.height}
                width={cover.dimensions.width}
                objectFit="cover"
              />
            </div>
            <div className="px-5 pb-5">
              <div className="flex items-center">
                <h1 className="font-mixed font-medium mr-2">{name}</h1>
                <Colon width={6} />
              </div>
              <h1 className="font-mixed font-medium text-lg md:text-xl mt-1">
                { title.map(heading => heading.text) }
              </h1>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default NewDirectionArticleCard
