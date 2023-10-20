"use client";

import React from "react";
import { experiencesData } from "../data/data_cv";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


export default function Experience() {
  return (
    <section className="scroll-mt-28 mb-28 sm:mb-40">
      <h1 className="text-3xl font-bold mb-6 flex justify-center py-6">
        Experience
      </h1>
      {/* <div className="w-full bg-white-400 m-12 lg:m-2 relative after:absolute after:w-2 after:h-full after:bg-gray-400 after:top-0 after:left-8 lg:after:left-1/2 after:-ml-1 ">
        {experiencesData.map((experience, index) => (
          <TimelineItem key={index} {...experience} isLeft={index % 2 === 0} />
        ))}
      </div> */}
      <VerticalTimeline lineColor="white">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "f3f4f6",
                // color: '#fff',
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
            
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      
    </section>
  );
}
