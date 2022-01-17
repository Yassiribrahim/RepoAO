import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getallnews= async () => {
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

   

export const getnewsbyslug = async (aoSlug) => {
     const query = gql`
          query getnewsbyslug($aoSlug : String!) {
          Latestnews(where: {aoSlug: $aoSlug }) {
          aoTitle
          aoSlug
          aoText
          aoImage {
                    url
                  }
          }
          }

          `;
const result = await request(graphqlAPI, query, { aoSlug });
return result.Latestnews;
};



// export const getnewsbydate = async () => {
// const query = gql`
// query getnewsdetails() {
// Latestnews(
// orderBy: aoCreatedDate_ASC
// last: 3
// ) {
// aoTitle
// aoSlug
// aoText
// aoImage {
//           url
//         }
// aoCreatedDate
// aoSlug

// }

// }

// `;
// const result = await request(graphqlAPI, query);
// return result.Latestnews;
// };
