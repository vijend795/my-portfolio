// pages/index.js
import React from 'react';
import Image from 'next/image';
import { navLinks } from '../data/data_cv';
import Link from 'next/link';
// import { motion } from "framer-motion";


export default function  Header () {
  return (
    <header className="z-[999] relative w-full bg-red-300 rounded-full">
      
      <nav className="flex fixed border-lg top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap items-center justify-center gap-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        

        {
            navLinks.map((link)=>(
                <li key={link.name} className="flex items-center  justify-center relative">
                    <Link href={link.link} className= "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"> 
                        {link.name}
                    </Link>
                </li>
                
            )
              
            )
        }
    </ul>
      </nav>
     
    </header>
  );
};

