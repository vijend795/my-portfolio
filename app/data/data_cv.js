import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Contact",
    link: "#contact",
  },
] 

export const experiencesData = [
  {
    title: "Parking Enforcement Officer",
    company:'Wilson Parking NZ Limited',
    location: "Wellington, New Zealand",
    description:
      "As a initial start, start working with Wilson Parking as a parking Enforcement officer,currently working with automobile solution of parking enforcement which includes handling computer generated data on real time to enforce parking right .",
    icon: React.createElement(LuGraduationCap),
    date: "June 2022 - Present",
  },
  {
    title: "Real Estate Consultant",
    company:'Realty Redefine',
    location: "Gurgaon, India",
    description:
      "I worked as a Real Estate Consultant for commercial leasing also develop online search portal, social media manager and  data management system for the business in VBA ",
    icon: React.createElement(CgWorkAlt),
    date: "June 2018 - March 2022",
  },
  {
    title: "Associate Partner",
    company:'Transaction Point',
    location: "Gurgaon, India",
    description:
      "I Worked as Associate Partner for Sales and Marketing for commercial and residential project.",
    icon: React.createElement(FaReact),
    date: "July 2012 - June 2013",
  },
  {
    title: "Manager - Sales and Marketing",
    company:'Global Realty Ventures Limited',
    location: "Delhi, India",
    description:
      "I worked as a sales and marketing manager and managed commercial/retail properties across Delhi/NCR ",
    icon: React.createElement(FaReact),
    date: "March 2011 - July 2012",
  },
  {
    title: "Project Manager",
    company:'Global School of Animation and Games',
    location: "Delhi, India",
    description:
      "I worked as a property consultant for commercial leasing and Leased out commercial office space, warehouse, factory space in Gurgaon and worked with brand Like Kyocera, Havells , Dr, Batra , Call Health ,Third eyes, Connect Cue , Omni Vision , Now Flots , Footprints , Heithkamp , Nimbuzz etc",
    icon: React.createElement(FaReact),
    date: "July 2013 - May 2018",
  },
  {
    title: "Transaction Manager",
    company:'Leasing India private Limited',
    location: "Delhi, India",
    description:
      "I worked as a property consultant for commercial leasing and Leased out commercial office space, warehouse, factory space in Gurgaon and worked with brand Like Kyocera, Havells , Dr, Batra , Call Health ,Third eyes, Connect Cue , Omni Vision , Now Flots , Footprints , Heithkamp , Nimbuzz etc",
    icon: React.createElement(FaReact),
    date: "July 2013 - May 2018",
  },
  {
    title: "Transaction Manager",
    company:'Leasing India private Limited',
    location: "Delhi, India",
    description:
      "I worked as a property consultant for commercial leasing and Leased out commercial office space, warehouse, factory space in Gurgaon and worked with brand Like Kyocera, Havells , Dr, Batra , Call Health ,Third eyes, Connect Cue , Omni Vision , Now Flots , Footprints , Heithkamp , Nimbuzz etc",
    icon: React.createElement(FaReact),
    date: "July 2013 - May 2018",
  },
  {
    title: "Transaction Manager",
    company:'Leasing India private Limited',
    location: "Delhi, India",
    description:
      "I worked as a property consultant for commercial leasing and Leased out commercial office space, warehouse, factory space in Gurgaon and worked with brand Like Kyocera, Havells , Dr, Batra , Call Health ,Third eyes, Connect Cue , Omni Vision , Now Flots , Footprints , Heithkamp , Nimbuzz etc",
    icon: React.createElement(FaReact),
    date: "July 2013 - May 2018",
  },
  


] 
export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    projectLink:'',
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    projectLink:'',
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    projectLink:'',
  },
] 

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] 