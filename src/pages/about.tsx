import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import Image from 'next/image'
import { PrismicAboutUsPage, PrismicAuthor } from '../types/cms'
import Heading from '../components/Heading'
import SEO from '../components/SEO';
import { fetchAboutUsPage, fetchAuthors } from '../utils/queries'

const renderIllustration = (author: PrismicAuthor) => {
  const {
    id,
    data: {
      illustration: {
        url, alt, dimensions
      }
    }
  } = author

  return (
    <Image
      src={url}
      alt={alt}
      key={id}
      layout="responsive"
      height={dimensions.height}
      width={dimensions.width}
    />
  )
}

type AboutUsPageProps = {
  page: PrismicAboutUsPage
  authors: { [id: string]: PrismicAuthor }
}

const About: FC<AboutUsPageProps> = ({ page, authors }: AboutUsPageProps) => {
  const {
    header_image,
    chinese,
    cofounders,
    english,
    members
  } = page.data

  return (
    <>
      <SEO title="About Us" />
      <Helmet>
        <script src={'justfont.js'}></script>
      </Helmet>
      <div className="flex flex-col max-w-screen-lg mx-auto my-32 p-8">
        <div className="mx-auto mb-20">
          <Image
            src={header_image.url}
            alt={header_image.alt}
            layout="fixed"
            height={header_image.dimensions.height}
            width={header_image.dimensions.width}
          />
        </div>
        <p className="font-hand text-3xl mb-10">
          {english}
        </p>
        <p className="font-hand text-3xl mb-20">
          {chinese}
        </p>
        <div className="mx-auto mb-24">
          <Heading name="Meet the Team" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {cofounders.map(({ cofounder }) => renderIllustration(authors[cofounder.id]))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {members.map(({ member }) => renderIllustration(authors[member.id]))}
        </div>
      </div>
    </>
  )
}

export default About

export const getStaticProps = async () => {
  const pages = await fetchAboutUsPage()
  const authors = await fetchAuthors()

  if (pages.length > 1) { console.warn('More than one About Us Page found') }

  const authorById: {[id: string]: PrismicAuthor} = authors.reduce((obj, author) => {
    return {...obj, [author.id]: author}
  }, {})

  return {
    props: {
      page: pages[0],
      authors: authorById,
    }
  }
}
