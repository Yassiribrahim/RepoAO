import React from 'react'
import { getallnews , getnewsbyslug } from '../../services'
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import Newsdetail from '../../components/Newsdetail';

const NewsDetails = ({newsbyslug}) => {
  
  const router = useRouter();
  

  if (router.isFallback) {
    return <Loader />;
  }
      return (
        
        <>
         
        <div className="container mx-auto px-10 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              <Newsdetail newsbyslug={newsbyslug} />
             </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
               </div>
            </div>
          </div>
        </div>
      </>
       
    )
}

export default NewsDetails

// Fetch data at build time
export async function getStaticProps({ params }) {
    const data = await getnewsbyslug(params.aoSlug);
    return {
    props: {
      newsbyslug: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const allnews = await getallnews();
  return {
    paths: allnews.map(({ node: { aoSlug } }) => ({ params: { aoSlug } })),
    fallback: true,
  };
 }
