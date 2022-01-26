import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getallnews= async () => {
    const query = gql`
    query MyQuery {
        aosNewsConnection (orderBy: aoCreatedDate_DESC) {
          edges {
            node {
              aoTitle
              aoSlug
              aoText
              aoImage {
                url
              }
              content {
               raw
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

   
    
export const getnewsbyslug = async ( aoSlug ) => {
     const query = gql`
          query Getnewsbyslug($aoSlug : String!) {
          aosNews(where: {aoSlug: $aoSlug }) {
              aoTitle
              aoSlug
              aoText
              aoImage {
                url
              }
              content {
               raw
                }
                aoCreatedDate
          
          }
          }

          `;
const result = await request(graphqlAPI, query, { aoSlug });
return result.aosNews;
};

// export const getnewsbyaoSlug = async (aoSlug) =>{
//   const query = `{
//     getnewsbyslug(where: {aoslug: "excslug009"}) {
//       aoTitle
//     }
//   }`;
  
//   const response = await fetch(
//     `https://api-eu-west-2.graphcms.com/v2/ckxfxhhpl0mbk01zdhwt320rb/master`,
//     {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer %ACCESS_TOKEN%`,
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({ query }),
//     },
//   ).then((response) => response.json());
  
//   console.log(response);
// }



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
