const path = require('path')
const {
  createFilePath
} = require(`gatsby-source-filesystem`)

// to add the slug field to each post

exports.onCreateNode = ({
  node,
  getNode,
  actions
}) => {
  const {
    createNodeField
  } = actions

  //Ensure we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {

    const slug = createFilePath({
      node,
      getNode,
      //directory to get the posts
      basePath: "pages",
    })
    //Creates new query'ablefield with name of 'slug'

    createNodeField({
      node,
      name: "slug",
      // Using slice to get only name from post, rip off the date
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }

      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({
      node
    }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
        }
      })
    })
  })
}