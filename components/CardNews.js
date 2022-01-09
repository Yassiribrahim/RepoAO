import React from 'react'
import Link from 'next/link'
import moment from 'moment';
import Image from 'next/image'
const CardNews = ({post}) => {
    console.log(post)
    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
           <div className="relative overflow-hidden shadow-md pb-20 mb-2">
           <Image
            src={post.node.aoImage.url}
                alt="News Pic"
                width={600}
                height={400}
            className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
           
         </div>
        
        
         
         <div className="transition duration-700 text-green-600 text-center mb-4 cursor-pointer">
             <Link href={`/post/${post.node.aoslug}`}>
             { post.node.aoTitle } 
            </Link>
            
         </div>
         <div className="text-center mb-2  ">
          {moment(post.node.aoCreatedDate).format("MMM DD, YYYY")}
         </div>
         
         <div className="text-center ">
         { post.node.aoText } 

         </div>
         <div className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20">
             <div className="text-center">
             <Link href={`/post/${post.node.aoslug}`} passHref>
             <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-green-500 font-small rounded-full text-white mt-8 px-4 py-1 cursor-pointer">قراءة المزيد</span>
            </Link>
            </div>
            
         </div>
         
       
         </div>

         
    )
}

export default CardNews
