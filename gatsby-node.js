const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });

    const dataForSearch = {
      title: node.frontmatter.title,
      content: node.rawMarkdownBody,
      categories: node.frontmatter.categories,
      description: node.frontmatter.description,
      slug
    };

    const dataForCategory = {
      title: node.frontmatter.title,
      categories: node.frontmatter.categories,
      description: node.frontmatter.description,
      slug
    };

    createNodeField({
      node,
      name: "slug",
      value: slug
    });

    createNodeField({
      node,
      name: "index",
      value: JSON.stringify(dataForSearch)
    });

    createNodeField({
      node,
      name: "categories",
      value: JSON.stringify(dataForCategory)
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
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
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `post${node.fields.slug}`,
      component: path.resolve(`./src/components/templates/Post.jsx`),
      context: {
        slug: node.fields.slug
      }
    });
  });
};
