/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({actions, graphql}) => {
  const { createPage } = actions;

  const az_pages = await graphql(`
   {
      allNodeAzGutenbergPage {
        nodes {
          id
          title
          path {
            alias
          }
          field_az_body {
            processed
            value
          }
          relationships {
            uid {
              relationships {
                file__file {
                  localFile {
                    publicURL
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  az_pages.data.allNodeAzGutenbergPage.nodes.map(page =>
      createPage({
        path: page.path.alias,
        component: path.resolve(`src/templates/azpage.js`),
        context: {
          PageId: page.id
        }
      })
    );
}
