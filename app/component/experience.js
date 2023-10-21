"use client";

import React from "react";
import { experiencesData } from "../data/data_cv";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Heading from "./subComponent/heading";
import ExperienceCard from "./subComponent/experienceCard";


export default function Experience() {
  return (
    <section id ='experience' className="scroll-mt-28 mb-28 sm:mb-40">
     
      <Heading >Experience </Heading>

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
              <ExperienceCard item={item}/>
              {/* {item.title} */}
              {/* <h3 className="font-semibold capitalize">{item.title}</h3> */}

              {/* <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p> */}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
   
    </section>
  );
}
