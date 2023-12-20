"use client";

import React, { useEffect, useState } from "react";
import { experiencesData } from "../data/data_cv";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Heading from "./subComponent/heading";
import ExperienceCard from "./subComponent/experienceCard";


export default function Experience() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  return (
    <section id ='experience' 
    className="scroll-mt-28 mb-28 sm:mb-40"
    >
     
      <Heading >Experience </Heading>

      {loading?(
        <p>Loading .......</p>
      ):(
        <VerticalTimeline lineColor="white">
        {experiencesData.map((item, index) => (
          
          < >
  
            <VerticalTimelineElement
              key={index}
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
              {/* test */}
              {/* {item.title} */}
              {/* <h3 className="font-semibold capitalize">{item.title}</h3> */}

              {/* <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p> */}
            </VerticalTimelineElement>
          </>
          
        ))}
      </VerticalTimeline>
      )}

     
   
    </section>
  );
}
