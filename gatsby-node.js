const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD [de] MMMM [de] YYYY ", locale: "pt-BR")
            description
            category
            background
          }
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
  
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMarkdownRemark.edges
    // Create blog post pages.
    posts.forEach(({node}) => {
      createPage({
        // Path for this page — required
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
            slug:node.fields.slug
        },
      })
    })
    const postsPerPage = 2 
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({length:numPages}).forEach((_,index)=>{
      createPage({
        path:index === 0 ? `/` : `page/${index + 1}`,
        component:path.resolve(`src/templates/blog-list.tsx`),
        context:{
          limit:postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage:index + 1,
        }
      })
    })

  })
}