import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'

import Heading from '../components/Heading'

const About = ({ data }) => {
  const {
    allInstaNode: instagramPosts
  } = data

  const instagramPostCount = instagramPosts.edges.length;
  
  console.log(instagramPostCount)
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto my-32">
      <StaticImage
        className="mx-auto mb-20"
        src="../../content/assets/we_are_outtaink.webp"
        alt="We Are Outtaink"
        width={580}
        layout="constrained"
      />
      <p className="font-hand text-3xl tracking-lihsianti mb-10">
        Outtaink is a community for students studying abroad to share their experiences as they embrace the challenges of living in a different culture. For people who have not lived abroad, the rite of passage and culture shock can bring a lot of fruitful stories that people are genuinely curious to learn more about. Outtaink is a platform for people to share these stories, and use this platform as a chance to related and reach out to those who are in similar positions.
      </p>
      <p className="font-hand text-3xl tracking-tight mb-20">
        我們是一群漂泊異鄉的留學生，出國追夢的我們想與你們分享在國外我們所碰到，聽到，看到最真實的感受。通過這個平臺分享我們看到的世界，記錄留學生在海外的點點滴滴...
      </p>
      <div className="mx-auto">
        <Heading name="Meet the Team" />
      </div>
    </div>
  )
}

export default About
