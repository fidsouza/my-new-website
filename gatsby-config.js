require('dotenv').config({
  path: '.env.production',
})

const queries =  require("./src/utils/algolia-queries")

module.exports = {
  siteMetadata: {
    title: `Filipe Costa`,
    position:`Full StackDeveloper`,
    description: `Um blog sobre ser um desenvolvedor fullstack e sobre a vida.`,
    author: `@filipe`,
    siteUrl:`https://filipedacosta.com`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/Post`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Plugins configs
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options:{
              name:"uploads"
            },
          },
          {
            resolve:"gatsby-remark-images",
            options:{
              maxWidth:900,
              linkImagesToOriginal:false
          
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Filipe Costa`,
        short_name: `Filipe Costa`,
        start_url: `/`,
        background_color: `#3c1e57`,
        theme_color: `#3c1e57`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
     `gatsby-plugin-netlify-cms`,

  ],
}
