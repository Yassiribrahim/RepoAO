import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        aosNewsConnection {
          edges {
            node {
              aoTitle
              aoSlug
              aoText
              aoImage {
                url
              }
              aoCreatedDate
            }
          }
        }
      }
      `;
      const result = await request(graphqlAPI, query);
      return result.aosNewsConnection.edges;
    };