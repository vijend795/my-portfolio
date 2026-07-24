import React from "react";
import { projectsData } from "../data/data_cv";
import Heading from "./subComponent/heading";
import ProjectCard from "./subComponent/projectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-28 p-6 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col justify-start items-center"
    >
      <Heading>My Projects</Heading>
      <div>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
