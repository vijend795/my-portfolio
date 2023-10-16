// pages/index.js
import React from 'react';
import Image from 'next/image';
import { navLinks } from '../data/data_cv';
import Link from 'next/link';
// import { motion } from "framer-motion";


export default function  Header () {
  return (
    <header className="">
      
      <nav className=" flex my-4 justify-center ">
        <ul className=" flex flex-row items-center gap-10 px-5 rounded-full py-2 bg-white">

        {
            navLinks.map((link)=>(
                <li key={link.name} className=" ">
                    <Link href={link.link} className= "text-gray-400 font-semibold hover:text-black"> 
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

