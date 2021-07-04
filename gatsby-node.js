const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const postTemplate = path.resolve(`./src/templates/article.js`);

  // Query Prismic data
  const result = await graphql(`
    {
      allPrismicArticle(sort: { fields: data___date, order: DESC }) {
        edges {
          node {
            url
            lang
            data {
              title {
                text
              }
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  if (!result.data.allPrismicArticle) {
    return;
  }

  // Create pages for each Prismic article
  const items = result.data.allPrismicArticle.edges;
  items.forEach(({ node }, index) => {
    const previous = index === items.length - 1 ? null : items[index + 1].node;
    const next = index === 0 ? null : items[index - 1].node;

    actions.createPage({
      path: node.url,
      component: postTemplate,
      context: {
        url: node.url,
        lang: node.lang,
        previous,
        next,
      },
    });
  });
};
