// pages/index.js
import React from "react";
import Image from "next/image";
import profilepic from "@/public/profilePic.jpeg";
import Link from "next/link";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section
      id="intro"
      // className=" flex flex-col justify-start items-center px-5 rounded-lg py-3 max-w-6xl"
      className="mt-4 mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col justify-start items-center"
    >
      <div>
        <Image
          src={profilepic}
          alt="Ricardo portrait"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
        />
      </div>

      <div
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-sm rounded-full  text-center text-black"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-xl font-serif">Hi, I am Vijendra Singh </span>

        {/* <div className="flex text-lg text-gray-600 whitespace-pre-line rounded-full bg-red-100 text-center p-2 overflow-hidden text-wrap"> */}
          <p className="text-lg font-sans text-ellipsis  subpixel-antialiased text-gray-600 whitespace-pre-line text-wrap text-justify p-4 rounded-full">
            a newly minted software developer embarking on an exciting journey
            in the world of technology. Having recently relocated to the
            picturesque landscapes of New Zealand, I am eager to establish a new
            chapter in my life in this vibrant and welcoming community. My
            passion for programming and technology led me to pursue a career in
            Software Development. Currently finish my Diploma in Software
            Development(Level 6), I am honing my skills in various languages and
            frameworks such as Django, React Native,Next.js, HTML, and CSS. The
            prospect of settling in New Zealand and contributing to its dynamic
            IT landscape is an exciting venture for me. I am enthusiastic about
            leveraging my diverse background, which includes roles such as a
            Real Estate Consultant and Sales and Marketing Manager, to bring a
            unique perspective to the field. As I navigate this new phase of my
            life, my ultimate goal is to become a proficient full-stack
            developer, crafting innovative websites and mobile applications. I
            am fueled by a genuine passion for technology and a commitment to
            continuous learning. Here's to the adventures that await in this
            beautiful land as I build a fulfilling career in Information
            Technology!
          </p>
        {/* </div> */}
        
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
};

export default Intro;
