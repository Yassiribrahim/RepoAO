import React from 'react'
import Link from 'next/link'
const menus = [{name:'Contact Us',slug:'ContactUs'},{name:'Ads',slug:'Ads'},{name:'News',slug:'News'},{name:'Home',slug:'Home'}]
const Header = () => {
    return (
        <div className="Container mx-auto px-10 mb-8 bg-gradient-to-l from-green-500 to-green-900">
            <div className="border-b w-full inline-block py-4">
                <div className="md:fload-left block">
                 <Link href="/" passHref>
                     <span className="cursor-pointer font-bold text-3xl text-white">
                         AO
                     </span>
                 </Link>
                </div>
            <div className="hidden md:float-left md:contents">
                {menus.map((menu) => (
                    <span key={menu.slug} className="md:float-right mt-1 text-white ml-4 text-lg  hover:text-yellow-400  rounded-lg transition duration-500 ease transform hover:-translate-y-1 inline-block ">
                      <Link key={menu.slug} href={`/menu/${menu.slug}`}>  
                      {menu.name}
                      </Link>
                    </span>
                ))}

            </div>

            </div>
    

            
        </div>
    )
}

export default Header
