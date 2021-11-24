import React, { FC } from 'react';
import { graphql, withPrefix } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet';

import { PrismicAboutUsPage, PrismicLinkType } from '../utils/types';
import Heading from '../components/Heading'
import SEO from '../components/SEO';
import { isPrismicAuthor } from '../utils/graphql'

const renderIllustration = (link: PrismicLinkType) => {
  const document = link.document
  if (!isPrismicAuthor(document)) {
    return null
  }

  const {
    id,
    data: {
      illustration: {
        gatsbyImageData, alt
      }
    }
  } = document
  return <GatsbyImage image={gatsbyImageData} alt={alt} key={id} />
}

type AboutUsPageProps = {
  data: {
    prismicAboutUsPage: PrismicAboutUsPage
  }
}

const About: FC<AboutUsPageProps> = ({ data }: AboutUsPageProps) => {
  const {
    header_image: headerImage,
    chinese,
    cofounders,
    english,
    members
  } = data.prismicAboutUsPage.data

  return (
    <>
      <SEO title="About Us" />
      <Helmet>
        <script src={withPrefix('justfont.js')}></script>
      </Helmet>
      <div className="flex flex-col max-w-screen-lg mx-auto my-32 p-8">
        <GatsbyImage className="mx-auto mb-20" image={headerImage.gatsbyImageData} alt={headerImage.alt} />
        <p className="font-hand text-3xl mb-10">
          {english}
        </p>
        <p className="font-hand text-3xl mb-20">
          {chinese}
        </p>
        <div className="mx-auto mb-24">
          <Heading name="Meet the Team" />
        </div>
        <div className="flex flex-col lg:flex-row">
          {cofounders.map(cofounder => renderIllustration(cofounder.cofounder))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {members.map(member => renderIllustration(member.member))}
        </div>
      </div>
    </>
  )
}

export default About

export const AboutUsPageQuery = graphql`
  query {
    prismicAboutUsPage {
      data {
        header_image {
          alt
          gatsbyImageData(width: 580)
        }
        chinese
        cofounders {
          cofounder {
            document {
              ... on PrismicAuthor {
                id
                data {
                  illustration {
                    alt
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
        english
        members {
          member {
            document {
              ... on PrismicAuthor {
                id
                data {
                  illustration {
                    alt
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
