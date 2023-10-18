// pages/index.js
import React from 'react';
import Image from 'next/image';
import profilepic from "@/public/profilePic.jpeg"
import Link from 'next/link';

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-gray-100 min-h-screen px-5 rounded-lg py-3vsc">
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
      <div className='mb-10 mt-4 px-4 text-sm font-medium !leading-[1.5] sm:text-sm rounded-full text-center text-gray-500'> Brief Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugiat quidem soluta libero quaerat saepe sed voluptas iure doloribus commodi non, laborum qui aliquam eius placeat enim quam temporibus nostrum id ratione nisi quos architecto. Totam ullam inventore atque iusto ad laboriosam tempora beatae, laborum labore et cum aliquam facere nihil possimus aspernatur reprehenderit aperiam eum impedit doloribus fuga expedita rerum repudiandae neque debitis! Voluptatibus, nisi? Perspiciatis repellendus nulla facere facilis temporibus impedit aliquam accusantium culpa commodi cupiditate animi ut alias, obcaecati, ab nisi suscipit iste corporis incidunt quaerat. Quasi, voluptas quod unde beatae illum iure quam consequuntur voluptatibus. At?</div>
    <div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'> 
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
    </div>
  );
};

export default Intro;
