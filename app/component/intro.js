
import React from "react";
import Image from "next/image";
import profilePic1 from "@/public/profilePic1.png";
import Link from "next/link";


import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
 
  return (
    <section
      id="intro"
      // className=" flex flex-col justify-start items-center px-5 rounded-lg py-3 max-w-6xl"
      className="mt-20 mb-28 w-full  md:max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col justify-start items-center "
    >
      <div>
        <Image
          src={profilePic1}
          alt="Vijendra Singh portrait"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="h-24 w-24 rounded-full object-cover border-[0.115rem] border-white shadow-xl"
        />
      </div>

      <div
        className="mb-10 mt-4 px-5 md:px-4 text-md md:text-xl font-medium !leading-[1.5] sm:text-sm rounded-full  text-center text-black"
      >
        <span className=" font-bold text-lg md:text-xl font-sans">Hi, I am Vijendra Singh</span>

        {/* <div className="flex text-lg text-gray-600 whitespace-pre-line rounded-full bg-red-100 text-center p-2 overflow-hidden text-wrap"> */}
          <p className="text-sm md:text-lg font-sans subpixel-antialiased text-gray-600 text-left py-0 md:p-4">
            a full-stack software developer based in Wellington, New Zealand. I
            have completed a Bachelor of Applied Information Technology and am
            now studying towards a Master of Information Technology (Level 9). I
            build full-stack web and mobile applications with Django, React,
            React Native and Next.js, backed by PostgreSQL. Most recently I
            launched Navya, a live, AI-powered learning platform that uses a
            self-hosted LLM (Ollama running Microsoft&apos;s Phi model) to
            personalise learning for students through quizzes and assignments. I
            also hold micro-credentials in Cyber Technician and Ethical Hacking.
            Alongside my technical skills, I bring 15+ years of professional
            experience across accounts, operations and client-facing roles,
            giving me strong analytical thinking, attention to detail and
            Excel/VBA automation skills. As a New Zealand permanent resident
            with a full NZ driver&apos;s licence, I am eligible to work here
            without restriction. Fuelled by a genuine passion for technology and
            continuous learning, my goal is to keep growing as a developer who
            ships practical, user-focused solutions.
          </p>
        {/* </div> */}
        
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV_Vijendra_Singh.pdf"
          download='CV_Vijendra_Singh.pdf'
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex flex-wrap flex-row gap-2">
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/Vijend795"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vijendra Singh on LinkedIn"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/vijend795"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vijendra Singh on GitHub"
        >
          <FaGithubSquare />
        </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
