import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Member from '../components/member';

const About = ({ data, pageContext, location }) => {
  const members = data.allPrismicAuthor.nodes.map(node => node.data);
  return (
    <Layout location={location} title="About Us">
      <div className="my-10">
        <h1 className="text-center font-en text-5xl font-bold">About Us</h1>
      </div>
      <div className="mx-12">
        <p className="font-en my-2">
          Outtaink is a community for students studying abroad to share their
          experiences as they embrace the challenges of living in a different
          culture. For people who have not lived abroad, the rite of passage and
          culture shock can bring a lot of fruitful stories that people are
          genuinely curious to learn more about. Outtaink is a platform for
          people to share these stories, and use this platform as a chance to
          related and reach out to those who are in similar positions.
        </p>
        <p className="font-zh my-2">
          我們是一群漂泊異鄉的留學生，出國追夢的我們想與你們分享在國外我們所碰到，聽到，看到最真實的感受。通過這個平臺分享我們看到的世界，記錄留學生在海外的點點滴滴......
        </p>
      </div>
      <div className="mx-24 grid grid-cols-3 gap-6 my-8">
        {members.map(member => (
          <Member
            key={member.name}
            name={member.name}
            title={member.title}
            image={member.image}
          />
        ))}
      </div>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    allPrismicAuthor(sort: { fields: data___joined, order: ASC }) {
      nodes {
        data {
          name
          title
          image {
            fluid(maxWidth: 800) {
              ...GatsbyPrismicImageFluid
            }
          }
        }
      }
    }
  }
`;
