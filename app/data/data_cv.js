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

export const experienceTags=[
  {
    name:"education",
    icon:React.createElement(LuGraduationCap)
  },
  {
    name:"job",
    icon:React.createElement(CgWorkAlt)
  },
  {
    name:"",
    icon:React.createElement(LuGraduationCap)
  },
  {
    name:"",
    icon:React.createElement(LuGraduationCap)
  },
  {
    name:"",
    icon:React.createElement(LuGraduationCap)
  },
  {
    name:"",
    icon:React.createElement(LuGraduationCap)
  },
  {
    name:"",
    icon:React.createElement(LuGraduationCap)
  },
]
export const experiencesData = [
  {
    title: "Diploma in software Development (Level 6)",
    company:'Whitecliffe, School of Information Technology',
    location: "Wellington, New Zealand",
    description:
    `Completed a comprehensive Level 6 Diploma in Software Development at Whitecliffe,.
    Worked on various project during my studies with framework like Next.js, React Native and Django.
    Acquired expertise in technologies including Node.js, API's, Tailwind, Postgres, Express, etc `,
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2023 - December 2023",
    experienceType:'education',
    skilledLearned:['Django','React Native',"Tailwind","Postgres","Express","Node.js","Redux","MongoDb","Data Structure","MicroServices","Agile Project Management","GitHub","API's"],
    status:"completed",
  },
  {
    title: "Parking Enforcement Officer",
    company:'Wilson Parking NZ Limited',
    location: "Wellington, New Zealand",
    description:
      `Currently working full time as a Parking Enforcement Officer at Wilson Parking NZ Limited.
      Entrusted with the responsibility of enforcing parking regulations using cutting-edge automobile solutions, involving real-time data handling for effective parking enforcement`,
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Present",
    experienceType:'job',
    status:"OnGoing",
  },
  {
    title: "Certification in Information Technology (Level 5)",
    company:'Whitecliffe, School of Information Technology',
    location: "Wellington, New Zealand",
    description:
      `Successfully completed a 6-month Certification in Information Technology at Whitecliffe.
      Learned proficiency in HTML, CSS, Next.js, Figma, Python, and React, laying a solid foundation for a career in IT`,
    icon: React.createElement(LuGraduationCap),
    date: "May 2022 - December 2022",
    experienceType:'education',
    skilledLearned:['HTML','CSS',"Next.Js","Figma","Python","React"],
    status:"completed",
  },
  {
    title: "Real Estate Consultant",
    company:'Realty Redefine',
    location: "Gurgaon, India",
    description:
     `Contributed as a Real Estate Consultant at Realty Redefine.
     Specialized in commercial leasing and played a pivotal role in developing an online search portal, managing social media, and implementing a data management system using VBA`,
    icon: React.createElement(CgWorkAlt),
    date: "June 2018 - March 2022",
    status:"completed",
  },
  
  
  {
    title: 'Transaction Manager',
    company: 'Leasing India Private Limited',
    location: 'Delhi, India',
    description: 
    `Worked as a Transaction Manager at Leasing India Private Limited.
    Successfully facilitated commercial leasing deals, leasing out office space, warehouses, and factory spaces in Gurgaon.
    Collaborated with renowned brands such as Kyocera, Havells, Dr. Batra, Call Health, and more`,
    icon: React.createElement(CgWorkAlt),
    date: 'July 2013 - May 2018',
    experienceType: 'job',
    status: 'completed',
  },
  {
    title: 'Associate Partner',
    company: 'Transaction Point',
    location: 'Gurgaon, India',
    description: 
    `Contributed as an Associate Partner at Transaction Point.
    Played a key role in Sales and Marketing for commercial and residential projects, successfully selling residential projects of Avalon in Bhiwadi.`,
    icon: React.createElement(CgWorkAlt),
    date: 'July 2012 - June 2013',
    experienceType: 'job',
    status: 'completed',
  },
  {
    title: 'Manager - Sales and Marketing',
    company: 'Global Realty Ventures Limited',
    location: 'Delhi, India',
    description: 'Worked as a Sales and Marketing Manager and managed commercial/retail properties across Delhi/NCR. Sold and leased out properties to various retail and commercial brands.',
    icon: React.createElement(CgWorkAlt),
    date: 'March 2011 - July 2012',
    experienceType: 'job',
    status: 'completed',
  },
  {
    title: 'Project Manager',
    company: 'Global School of Animation and Games',
    location: 'Delhi, India',
    description: 
    `Held the position of Project Manager at Global School of Animation and Games.
    Managed the leasing of commercial office space, warehouses, and factory spaces in Gurgaon, working with brands such as BO Concept, Jindal Lifestyle, Korea Tourism Organization, BHPC, Samsung , TYCO, Medrix and more.`,
    icon: React.createElement(CgWorkAlt),
    date: 'June 2009 - Feb 2011',
    experienceType: 'job',
    status: 'completed',
  },
  {
    title: 'Admin and Accounts Manager',
    company: 'g2 Solution India Pvt. Ltd',
    location: 'Noida, India',
    description: 
    `Worked as an Admin and Accounts Manager at g2 Solution India Pvt.
    Directed financial management functions, including the development of financial statements, forecasts, and budgets.
    Oversaw general accounting functions, account reconciliation, and cash management`,
    icon: React.createElement(CgWorkAlt),
    date: 'June 2007 - April 2009',
    experienceType: 'job',
    status: 'completed',
  },
  {
    title: 'Accounts Executive (Core Team Member)',
    company: 'Academy of Animation and Gaming (AAG)',
    location: 'Noida, India',
    description: 
    `Acted as an Accounts Executive (Core Team Member) at the Academy of Animation and Gaming (AAG).
    Prepared financial reports, developed budgets, and performed variance analysis.
    Led teams in carrying out special projects and internal audits to ensure regulatory compliance.`,
    icon: React.createElement(CgWorkAlt),
    date: 'Aug 2006 - May 2007',
    experienceType: 'job',
    status: 'completed',
  },
  {
    title: 'Accountant',
    company: 'Asasa Video Pvt. Ltd.',
    location: 'New Delhi, India',
    description: 
    `Served as an Accountant at Asasa Video Pvt. Ltd.
    Closed and prepared monthly financial statements and audit reports.
    Monitored general ledger transactions and collaborated with the controller to ensure the accuracy of financial information`,
    icon: React.createElement(CgWorkAlt),
    date: 'Nov 2004 - July 2006',
    experienceType: 'job',
    status: 'completed',
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
  {
    name: "HTML",
    status:"Active"
  },
  {
    name: "CSS",
    status:"Active"
  },
  {
    name: "JavaScript",
    status:"Active"
  },
  {
    name: "TypeScript",
    status:"Not Active"
  },
  {
    name: "React",
    status:"Active"
  },
  {
    name: "Next.js",
    status:"Active"
  },
  {
    name: "GitHub",
    status:"Active"
  },
  {
    name: "Express",
    status:"Active"
  },
  {
    name: "Apollo",
    status:"not Active"
  },
  {
    name: "GraphQL",
    status:"Not Active"
  },
  {
    name: "Redux",
    status:"Active"
  },
  {
    name: "MongoDB",
    status:"Active"
  },
  {
    name: "Prisma",
    status:"Active"
  },
  {
    name: "Tailwind",
    status:"Active"
  },
  {
    name: "PostgreSQL",
    status:"Active"
  },
  {
    name: "Python",
    status:"Active"
  },
  {
    name: "Django",
    status:"Active"
  },
 
 
  
] 