import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { PrismicArticle, PrismicAuthor } from "../types/cms"
import Colon from "./Colon"
import NewDirectionArticleCard from "./NewDirectionArticleCard"

type NewDirectionArticleCardsProps = {
  articles: PrismicArticle[]
  authors: PrismicAuthor[]
}

const NewDirectionArticleCards = ({ articles, authors }: NewDirectionArticleCardsProps) => {
  const mainArticle = articles[0]
  const moreArticles = articles.slice(1, 4)

  const {
    url,
    data: {
      title,
      cover,
      author: {
        id
      }
    }
  } = mainArticle

  const author = authors.find(author => author.id === id)

  return (
    <section className="bg-default-50">
      <div className="flex flex-col max-w-screen-lg mx-auto py-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mx-6 md:mx-0">
          <div className="flex-1 rounded overflow-hidden">
            <Image
              src={cover.url}
              alt={cover.alt}
              layout="responsive"
              height={cover.dimensions.height}
              width={cover.dimensions.width}
              objectFit="cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center">
              <h3 className="text-white text-2xl font-en">{author?.data.name}</h3>
              <Colon className="ml-2" color="#FFFFFF" />
            </div>
            <h2 className="text-white font-mixed text-4xl md:text-6xl mt-4 mb-6 md:mt-8 md:mb-16">
              {title.map(heading => heading.text)}
            </h2>
            <Link href={url}>
              <a className="bg-default-300 flex items-center px-6 py-3 md:px-8 md:py-4 rounded-full mr-auto transition hover:shadow hover:scale-105">
                <span className="text-white font-mixed text-xl md:text-3xl mr-4">
                  前往閱讀
                </span>
                <ArrowRightIcon className="w-8" color="#FFFFFF" />
              </a>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 md:pt-8">
          {moreArticles.map(article => (
            <NewDirectionArticleCard
              article={article}
              key={article.id}
              author={authors.find(author => author.id === article.data.author.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewDirectionArticleCards
