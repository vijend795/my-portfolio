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

const Projects = () => {
  return (
    <section
      id="projects"
      // className="flex flex-col justify-start items-center px-5 rounded-lg mb-6 mt-20"
      className='mb-28 p-6 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col justify-start items-center'
    >
      <Heading>My Projects</Heading>
      <div>
        {projectsData.map((project, index) => (
          <div key={project.title} className="group mb-3 sm:mb-8 last:mb-0 mx-2 md:mx-0">
            <div className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
              <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                {project.description.length > 150 ? (
                  
                  <>
                  <div className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                    {/* {project.description} */}
                  {project.description.slice(0, 150)} ... 
                    <button className="text-blue-500 underline">
                      Read More
                    </button>
                  </div>
                </>
                  
                ) : (
                  <>
                    <div className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                      {/* {project.description} */}
                      {project.description}
                     
                    </div>
                  </>
                )}

                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  {project.tags.map((tag, index) => (
                    <li
                      className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <Image
                src={project.imageUrl}
                alt="Project I worked on"
                quality={95}
                className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
