import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout'

const AZPage = ({ data }) => {
  const page = data.nodeAzGutenbergPage;

  var pageContent = page.field_az_body.processed;

  page.relationships.uid.relationships.file__file.forEach(file => {
      var pathname = new URL(file.localFile.url).pathname
      pageContent = pageContent.replace(`#${pathname}#g`, file.localFile.publicURL);
  });

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
