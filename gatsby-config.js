require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

var linkResolver = require('./linkResolver');

module.exports = {
  siteMetadata: {
    title: `Outtaink`,
    author: {
      name: `Jonathan Tseng`,
    },
    description: `A community for students to voice their experiences and lessons as they embrace the challenges of studying abroad.`,
    siteUrl: `https://outtaink.com/`,
  },
  pathPrefix: '/outtaink.com',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_REPOSITORY_NAME}`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: linkResolver,
        schemas: {
          article: require('./src/schemas/article.json'),
          author: require('./src/schemas/author.json'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_REPOSITORY_NAME}`,
        accessToken: `${process.env.API_KEY}`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
  ],
};
