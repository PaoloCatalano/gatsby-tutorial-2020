/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

//node syntax for hiding the accessToken
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here
  Gatsby configuration accepts just exact options 
  (list on: https://www.gatsbyjs.org/docs/gatsby-config/)
  */
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "cool description",
    author: "@pauldoe",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: 32 },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        //per recuperare un file specifico, nel GraphiQL si selezional il filtro del sourceInstanceName: {eg: "posts"}
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      //from https://github.com/john-smilga/gatsby-tutorial-2020/blob/master/gatsby-config.js
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3o2914b2zflq`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
