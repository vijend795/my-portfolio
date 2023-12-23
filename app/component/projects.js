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
      className="mb-28 p-6 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col justify-start items-center"
    >
      <Heading>My Projects</Heading>
      <div>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group mb-3 sm:mb-8 last:mb-0 mx-2 md:mx-0"
          >
            <div className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
              <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <div></div>
                <div></div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <h3 className="text-sm font-semibold">{project.type}</h3>

                <div className="mt-2 text-sm h-[120px]  text-gray-700 dark:text-white/70 text-justify">
                  {/* {project.description} */}
                  {project.description.slice(0, 150)}
                  {project.description.length > 150 ? (
                    <span>
                      ....
                      <button className="text-blue-500 underline">
                        Read More
                      </button>
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-col justify-center items-baseline  ">
                  <ul className="flex flex-wrap py-3 gap-2 sm:mt-auto">
                    {project.tags.map((tag, index) => (
                      <li
                        className="bg-black/[0.7]  px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                        key={index}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap mb-2 gap-2 sm:mt-auto  justify-end">
                    <a
                      className="bg-white p-1.5 text-blue-600 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-green-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-green/10 dark:text-green/60"
                      href={project.projectLink}
                      target="_blank"
                    >
                      <FaGithubSquare />
                    </a>
                  </ul>
                </div>
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
