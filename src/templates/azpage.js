import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout'

const AZPage = ({ data }) => {
  // Convenience object
  const page = data.nodeAzGutenbergPage;

  // Copy the page content into a mutable variable
  var pageContent = page.field_az_body.processed;

  // Replace the hardcoded path to files with the proper gatsby path
  page.relationships.uid.relationships.file__file.forEach(file => {
      var pathname = new URL(file.localFile.url).pathname;
      var re = new RegExp(pathname, "g");
      pageContent = pageContent.replace(re, file.localFile.publicURL);
  });

  // Build the page component
  return (
    <Layout>
      <h1>{page.title}</h1>
      <div key={page.title} dangerouslySetInnerHTML={{ __html: pageContent }}></div>
    </Layout>
  )
}

AZPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query($PageId: String!) {
    nodeAzGutenbergPage(id: { eq: $PageId }) {
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
`;

export default AZPage;
