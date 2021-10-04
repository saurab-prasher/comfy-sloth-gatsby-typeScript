const path = require(`path`)
const fetch = require("node-fetch")
const PRODUCT_NODE_TYPE = `Products`

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions
  try {
    const response = await fetch(process.env.GATSBY_PRODUCTS_URL)
    const data = await response.json()

    data.forEach(product =>
      createNode({
        ...product,
        id: product.id,
        parent: null,
        children: [],
        internal: {
          type: PRODUCT_NODE_TYPE,
          mediaType: `application/javascript`,
          content: JSON.stringify(product),
          contentDigest: createContentDigest(product),
        },
      })
    )
  } catch (error) {
    Promise.reject(error)
    console.error(error)
  }

  return
}

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      query {
        allProducts {
          edges {
            node {
              id
            }
          }
        }
      }
    `)

    data.allProducts.edges.forEach(node => {
      createPage({
        path: `/product/${node.node.id}`,
        component: path.resolve(`./src/templates/SinglePageTemplate.tsx`),
        context: {
          ...node,
        },
      })
    })
  } catch (error) {
    console.log(errors)
    Promise.reject(errors)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
