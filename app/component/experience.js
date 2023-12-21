// pages/index.js
import React from "react";
import Image from "next/image";
import profilepic from "@/public/profilePic.jpeg";
import Link from "next/link";
import { projectsData } from "../data/data_cv";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Heading from "./subComponent/heading";
import { experiencesData } from "../data/data_cv";

import ExperienceCard from "./subComponent/experienceCard";
const Experience = () => {
  return (
    <section
      id="experience"
      className=" mb-28 flex flex-col justify-start items-center px-5 rounded-lg  mt-20 scroll-mt-28 "
      // className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col justify-start items-center'
    >
      <Heading>Experience</Heading>
      <div  className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {experiencesData.map((item, index) => (
          <>
          <div
            key={index}
            className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active "
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 lg:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2">
              {item.icon}
            </div>

            <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow ">
              <div
                className={`flex items-center w-full ${
                  index % 2 == 0 ? "lg:justify-start" : "lg:justify-end "
                }  space-x-2 mb-1 `}
              >
                <span className="font-caveat font-medium text-indigo-500 ">
                  {item.date}
                </span>
              </div>
              {/* adding any data from this point cause problem detecting experience section while scrolling  */}
              {/* <ExperienceCard item={item} /> */}
               
                
              <div
                className={`flex flex-col  w-full  ${
                  index % 2 == 0 ? "lg:items-start " : "lg:items-end "
                }   mb-1 `}
              >
                <div className="font-bold text-slate-900">{item.title}</div>
                <div>{item.location}</div>
                <div className="text-slate-500 max-w-[1200px] text-justify">
                  {item.description}
                </div>
              </div>

            </div>
          </div>
          </>
        ))}
      </div>
      
    </section>
  );
};

export default Experience;
