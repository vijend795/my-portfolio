"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const description = project.description || "";
  const isLong = description.length > 150;
  const shownText =
    expanded || !isLong ? description : description.slice(0, 150).trimEnd() + "…";

  return (
    <div className="group mb-3 sm:mb-8 last:mb-0 mx-2 md:mx-0">
      <div className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden lg:pr-8 relative lg:min-h-[20rem] hover:bg-gray-200 transition lg:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* Mobile / tablet: full-width banner image on top of the card */}
        {project.imageUrl ? (
          <div className="relative lg:hidden w-full h-44 sm:h-56">
            <Image
              src={project.imageUrl}
              alt={`${project.title} preview`}
              quality={95}
              fill
              className="object-cover object-top"
            />
          </div>
        ) : null}

        <div className="pt-4 pb-7 px-5 lg:pl-10 lg:pr-2 lg:pt-10 lg:max-w-[50%] flex flex-col h-full lg:group-even:ml-[18rem] text-left">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <h3 className="text-sm font-semibold">{project.type}</h3>

          <div className="mt-2 text-sm text-gray-700 dark:text-white/70 text-left">
            {shownText}
            {isLong ? (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="ml-1 text-blue-500 underline hover:text-blue-700"
                aria-expanded={expanded}
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
            ) : null}
          </div>

          <div className="flex flex-col justify-center items-baseline">
            <ul className="flex flex-wrap py-3 gap-2 lg:mt-auto">
              {project.tags.map((tag, tagIndex) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={tagIndex}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap mb-2 gap-2 justify-end">
              {project.projectLink ? (
                <a
                  className="bg-white p-1.5 text-blue-600 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-green-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-green/10 dark:text-green/60"
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source on GitHub"
                >
                  <FaGithubSquare />
                </a>
              ) : null}
              {project.websiteLink ? (
                <a
                  className="bg-white p-2 text-blue-600 flex items-center gap-2 text-[1.05rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-green-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-green/10 dark:text-green/60"
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit live site"
                >
                  <FaExternalLinkAlt />
                </a>
              ) : null}
            </ul>
          </div>
        </div>

        {/* Desktop: image "peeks" from the side of the card */}
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} preview`}
            quality={95}
            className="absolute hidden lg:block top-8 -right-32 w-[28.25rem] rounded-t-lg shadow-2xl
                transition
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2

                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2

                group-even:right-[initial] group-even:-left-32"
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
