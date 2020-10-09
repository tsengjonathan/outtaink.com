const path = require(`path`)

const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const postTemplate = path.resolve(`./src/templates/article.js`)

  // Query Ghost data
  const result = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  if (!result.data.allGhostPost) {
    return
  }

  // Create pages for each Ghost post
  const items = result.data.allGhostPost.edges
  items.forEach(({ node }) => {
    node.url = `${node.slug}`

    actions.createPage({
      path: node.url,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  if (
    node.internal.type === "GhostPost" &&
    node.feature_image !== null
  ) {
    let fileNode = await createRemoteFileNode({
      url: node.feature_image, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.cover_image___NODE = fileNode.id
    }
  } else if (node.internal.type === "GhostAuthor" && node.profile_image !== null) {
    let fileNode = await createRemoteFileNode({
      url: node.profile_image, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.image___NODE = fileNode.id
    }
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type GhostPost implements Node {
      cover_image: ParentImageSharp
    }

    type GhostAuthor implements Node {
      image: ParentImageSharp
    }

    type ParentImageSharp {
      childImageSharp: ImageSharp!
    }
  `
  createTypes(typeDefs)
}
