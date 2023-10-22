import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import projectImage2 from '@/public/images/projectPic/2/mobileView/1.png'
import wordanalyticsImg from "@/public/wordanalytics.png";

export const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Intro",
    link: "#intro",
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
    type:'College Project',
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    projectLink:'https://github.com/vijend795/Project1_HomeQuest.git',
  },
  {
    id: "2",
    title: "GoNZ -Travel Website",
    type:'College Project-Solo',
    date:'Q3 2023',
    description:
      " Developed a college project website using Django from the ground up, focused on travel. The site features a user-friendly navigation bar with dynamic icons that highlight the current page. Utilized Django's authentication and group permission functionalities to manage access to various details and pages.",
    tags: ["Django", "Python", "Tailwind", "sqlite3"],
    imageUrl: projectImage2,
    projectLink:'https://github.com/vijend795/Project2_GoNZ.git',
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