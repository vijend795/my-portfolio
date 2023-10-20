"use client";

import React from "react";

import { experiencesData } from "../data/data_cv";
import TimelineItem from "./subComponent/timeLine";

export default function Experience() {
  return (
    <section className="">
      
      <h1 className="text-3xl font-bold mb-6 flex justify-center py-6">Experience</h1>
      <div className="w-full bg-white-400 m-12 lg:m-2 relative after:absolute after:w-2 after:h-full after:bg-gray-400 after:top-0 after:left-8 lg:after:left-1/2 after:-ml-1 ">
        {experiencesData.map((experience, index) => (
          <TimelineItem key={index} {...experience} isLeft={index % 2 === 0} />
        ))}
      </div>
    
    </section>
  );
}
