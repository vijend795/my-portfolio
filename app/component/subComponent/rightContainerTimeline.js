// pages/index.js
import React from "react";
import Image from "next/image";
import Link from "next/link";


import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const RightContainerTimeline = ({data}) => {
  return (
    <div className="justify-end w-[50%] p-5 flex flex-row">
    <div className="flex items-center ml-1 text-lg flex-col justify-center">
        {data.icon}
        {data.date}
    </div>
    <div className="flex flex-col bg-white p-5 ">
      <div>Title: {data.title}</div>
      <div>Location: {data.location}</div>
          <div>Description: {data.description}</div>
    </div>
          
     </div>
  );
};

export default RightContainerTimeline;
