'use client'
// pages/index.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "../data/data_cv";
import Link from "next/link";
// import { motion } from "framer-motion";

export default function Header() {
  const [activeSection,setActiveSection]=useState(null)
  let dynamicThreshold = 0.2; // Default threshold
  useEffect(()=>{
    const observer= new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if (entry.isIntersecting){
            const sectionId = entry.target.id;
            if (sectionId) {
              setActiveSection(`#${sectionId}`);
            }
          }
        })
      },
      {root:null,rootMargin:'0px',threshold:dynamicThreshold}
    );
    document.querySelectorAll('section').forEach((section)=>{
      observer.observe(section)
    });
    return () => {
      observer.disconnect();
    };
  },[dynamicThreshold])

  return (
    <header className="fixed top-0 z-[999] w-full flex justify-center ">

      <nav className=" w-full md:flex mt-0 md:mt-10 fixed top-0 justify-center  ">
        <ul className=" flex flex-row items-center justify-center gap-4 md:gap-10 px-2 md:px-9 rounded md:rounded-full py-3 bg-white shadow-md">
          {navLinks.map((link) => (
            <li key={link.name} className=" ">
              <Link
                href={link.link}
                
                className={`  text-md md:text-xl font-semibold hover:text-black ${
                  activeSection === `${link.link}`? 'text-blue-400': 'text-gray-400'
                  // activeSection === 'contact'? 'text-blue-300': 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
