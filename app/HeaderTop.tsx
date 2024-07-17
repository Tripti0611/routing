"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import 'swiper/swiper-bundle.css';

const HeaderTop = () => {
   const [isClick, setIsClick] = useState(false);

   const toggleNavbar = (): void => {
      setIsClick(!isClick);
   }

   return (
      <div>
         <header className="bg-white-800 text-black p-4">
            <nav className="container mx-auto flex justify-between items-center">
               <div className="flex items-center space-x-2">
                  <Image src="/icon.png" alt="Logo" width={40} height={40} />
                  <span className="text-xl font-bold">
                     <Link href="/" legacyBehavior>
                        <a>Nexcent</a>
                     </Link>
                  </span>
               </div>
               <ul className={`hidden md:flex space-x-6`}>
                  <li>
                     <Link href="/" legacyBehavior>
                        <a className="hover:text-gray-400">Home</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/features" legacyBehavior>
                        <a className="hover:text-gray-400">Features</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/community" legacyBehavior>
                        <a className="hover:text-gray-400">Community</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/blog" legacyBehavior>
                        <a className="hover:text-gray-400">Blog</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/pricing" legacyBehavior>
                        <a className="hover:text-gray-400">Pricing</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/register" legacyBehavior>
                        <a className="bg-green text-white px-8 py-2 rounded hover:bg-green-700 flex items-center">
                           Register Now
                           <div className="header_top_icon_wrapper ml-2">
                              <FaLongArrowAltRight />
                           </div>
                        </a>
                     </Link>
                  </li>
               </ul>
               <div className="md:hidden flex items-center">
                  <button 
                     className="inline-flex p-2 rounded-md text-black hover:text-gray-400 focus:outline-none bg-bg focus:ring-2 focus:ring-inset focus:ring-white"
                     onClick={toggleNavbar} 
                  >
                     {isClick ? (
                        <svg 
                           className="h-6 w-6"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        > 
                           <path  
                              strokeLinecap="round"
                              strokeLinejoin="round" 
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12" 
                           />
                        </svg>
                     ) : (
                        <svg 
                           className="h-6 w-6"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        > 
                           <path  
                              strokeLinecap="round"
                              strokeLinejoin="round" 
                              strokeWidth={2}
                              d="M4 6h16M4 12h16m-7 6h7" 
                           />
                        </svg>
                     )}
                  </button>
               </div>
            </nav>
            {isClick && (
               <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                     <Link href="/" legacyBehavior>
                        <a className="hover:text-gray-400 block rounded-lg p-2">Home</a>
                     </Link>
                     <Link href="/features" legacyBehavior>
                        <a className="hover:text-gray-400 block rounded-lg p-2">Features</a>
                     </Link>
                     <Link href="/community" legacyBehavior>
                        <a className="hover:text-gray-400 block rounded-lg p-2">Community</a>
                     </Link>
                     <Link href="/blog" legacyBehavior>
                        <a className="hover:text-gray-400 block rounded-lg p-2">Blog</a>
                     </Link>
                     <Link href="/pricing" legacyBehavior>
                        <a className="hover:text-gray-400 block rounded-lg p-2">Pricing</a>
                     </Link>
                     <Link href="/register" legacyBehavior>
                        <a className="bg-green text-white px-8 py-2 block rounded hover:bg-green-700 flex items-center">
                           Register Now
                           <div className="header_top_icon_wrapper ml-2">
                              <FaLongArrowAltRight />
                           </div>
                        </a>
                     </Link>
                  </div>
               </div>
            )}
         </header>
      </div>
   );
};

export default HeaderTop;
