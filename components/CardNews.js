import React from 'react'
import Link from 'next/link'
import moment from 'moment';
import Image from 'next/image'
const CardNews = ({ allnew }) => {
   
     return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
           <div className="relative overflow-hidden shadow-md pb-20 mb-2">
           <Image
            src={allnew.node.aoImage.url}
                alt="News Pic"
                width={600}
                height={400}
            className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
           
         </div>
        
        
         
         <h1 className="transition duration-700 text-green-600 text-center mb-4 cursor-pointer hover:text-yellow-400">
             <Link href={`/news/${allnew.node.aoSlug}`}>
                 { allnew.node.aoTitle } 
             </Link>
            
         </h1>
         <div className="text-center mb-2  ">
          {moment(allnew.node.aoCreatedDate).format("MMM DD, YYYY")}
         </div>
         
         <div className="text-center ">
         { allnew.node.aoText } 

         </div>
         <div className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20">
             <div className="text-center">
                    <Link href={`/news/${allnew.node.aoSlug}`}>
                    <span className="transition duration-500 ease transform hover:-translate-y-1 hover:text-yellow-700 inline-block bg-green-500 font-small rounded-full text-white mt-8 px-4 py-1 cursor-pointer">قراءة المزيد</span>
                    </Link>
             </div>
            
         </div>
         
       
        </div>

         
    )
   
}

export default CardNews
