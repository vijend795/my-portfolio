"use client";

import React from "react";

import { experiencesData } from "../data/data_cv";
import LeftContainerTimeline from "./subComponent/leftContainerTimeline";
import RightContainerTimeline from "./subComponent/rightContainerTimeline";

export default function Experience() {
  return (
    <section className="">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My experience start
      </h2>
      {/* timeline */}
      <div className=" w-full bg-white-400 m-12 lg:m-2 relative after:absolute after:w-2 after:h-full after:bg-gray-400 after:top-0 after:left-8 lg:after:left-1/2 after:-ml-1 ">
        {experiencesData.map((item, index) => (
          <div key={index} className={`relative my-5 px-2 lg:w-1/2 w-full pl-[80px] pr-[25px]
          ${index % 2 === 0 ? "left-0 " : "lg:left-1/2 left-0"
        }`}>
            {/* container */}

            {/* content */}
            <p className={`absolute bg-red-300 items-center justify-center flex w-10 py-2  rounded-full text-2xl z-10 -right-5 top-8 ${index % 2 ===0 ? "left-2.5 lg:right bg-green-300 ":"lg:-left-5 left-3"} `}>{item.icon}</p>
            <div className="p-5 bg-sky-200 relative rounded-lg text-lg mx-5 ">
              <div>Title: {item.title}</div>
              <div>Location: {item.location}</div>
              <hr className="my-4" /> {/* Centered horizontal line */}
              <div>Description: {item.description}</div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
