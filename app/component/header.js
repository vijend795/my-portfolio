'use client'
// pages/index.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "../data/data_cv";
import Link from "next/link";
// import { motion } from "framer-motion";

export default function Header() {
  const [activeSection,setActiveSection]=useState(null)
  useEffect(()=>{
    const observer= new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if (entry.isIntersecting){
            const sectionId = entry.target.id;
           
            console.log("Active Section:", sectionId);
            
            if (sectionId) {
              setActiveSection(`#${sectionId}`);
            }
          }
        })
      },
      {root:null,rootMargin:'0px',threshold:0.7}
    );
    document.querySelectorAll('section').forEach((section)=>{
      observer.observe(section)
    });
    return () => {
      observer.disconnect();
    };
  },[])

  return (
    <header className="z-[999] relative bg-green-400 flex justify-center">
      <nav className=" flex mt-10 fixed top-0  ">
        <ul className=" flex flex-row items-center gap-10 px-9 rounded-full py-3 bg-white">
          {navLinks.map((link) => (
            <li key={link.name} className=" ">
              <Link
                href={link.link}
                
                className={` text-xl font-semibold hover:text-black ${
                  activeSection === `${link.link}`? 'text-blue-300': 'text-gray-400'
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
