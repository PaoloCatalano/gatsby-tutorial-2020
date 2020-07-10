//https://youtu.be/5Mam9NuxwQc?list=PLnHJACx3NwAdCmDDPdCt6W6BJfRbatfnc&t=17118
//Why SLUG: https://yoast.com/slug/

const path = require("path")

//create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.products.nodes.forEach(prod => {
    createPage({
      path: `/products/${prod.slug}`,
      component: path.resolve(`src/templates/product-templates.js`),
      context: {
        slug: prod.slug,
      },
    })
  })
}
