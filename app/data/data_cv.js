import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import projectImage2 from '@/public/images/projectPic/2/mobileView/1.png'
import projectImage1 from '@/public/images/projectPic/Portfoliowebsite/PortfolioWebsiteMain.png'
import projectImage3 from "@/public/images/projectPic/SonoAmore/codebasesnippet.png"
import projectImage4 from "@/public/images/projectPic/kiwifeeds/projectImage1.png"
import navyaImg from "@/public/images/projectPic/navya/navya.png"

export const navLinks = [
  // {
  //   name: "Home",
  //   link: "#home",
  // },
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
    title: "Master of Information Technology (Level 9)",
    company:'Whitecliffe, School of Information Technology',
    location: "Wellington, New Zealand",
    description:
    `Pursuing a Level 9 Master of Information Technology (commencing July 2026), specialising in cyber security, to deepen my expertise in securing modern systems and emerging technologies.`,
    icon: React.createElement(LuGraduationCap),
    date: "July 2026 - Present",
    experienceType:'education',
    skilledLearned:['Cyber Security','Network Security','Research'],
    status:"OnGoing",
  },
  {
    title: "Bachelor of Applied Information Technology",
    company:'Whitecliffe, School of Information Technology',
    location: "Wellington, New Zealand",
    description:
    `Completed a Bachelor of Applied Information Technology in 2026. Built strong full-stack development skills and delivered Navya, a live AI-powered learning platform using a self-hosted LLM (Ollama / Phi), Django and PostgreSQL.`,
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2026",
    experienceType:'education',
    skilledLearned:['Django','React','Next.js','PostgreSQL','AI Integration','Ollama','Docker','Git'],
    status:"completed",
  },
  {
    title: "Micro-credentials: Cyber Technician & Ethical Hacking",
    company:'',
    location: "New Zealand",
    description:
    `Completed industry micro-credentials in Cyber Technician and Ethical Hacking, building foundational skills in cyber security, networking and penetration-testing concepts.`,
    icon: React.createElement(LuGraduationCap),
    date: "2024",
    experienceType:'education',
    skilledLearned:['Cyber Security','Ethical Hacking','Networking'],
    status:"completed",
  },
  {
    title: "Internship - Django Developer",
    company:'Whitecliffe, School of Information Technology',
    location: "Wellington, New Zealand",
    description:
    `Building a student attendance system for the institute to manage student records and track progress, giving different user roles a tailored interface for accessing and updating information.`,
    icon: React.createElement(CgWorkAlt),
    date: "December 2023 - Present",
    experienceType:'job',
    skilledLearned:['Django',"Tailwind","Postgres","Data Structure","MicroServices","Agile Project Management","GitHub","API's"],
    status:"OnGoing",
  },
  {
    title: "Diploma in Software Development (Level 6)",
    company:'Whitecliffe, School of Information Technology',
    location: "Wellington, New Zealand",
    description:
    `Completed a Level 6 Diploma in Software Development at Whitecliffe, building projects with Next.js, React Native and Django, and gaining hands-on experience with Node.js, REST APIs, Tailwind, PostgreSQL and Express.`,
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
      `Enforcing parking regulations across sites using in-vehicle enforcement technology and real-time data handling for accurate, efficient operations.`,
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
      `Completed a six-month Certification in Information Technology at Whitecliffe, gaining proficiency in HTML, CSS, Next.js, Figma, Python and React — a solid foundation for a career in IT.`,
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
     `Specialised in commercial leasing while helping build an online property search portal, managing social media, and implementing a VBA-based data management system.`,
    icon: React.createElement(CgWorkAlt),
    date: "June 2018 - March 2022",
    status:"completed",
  },
  
  
  {
    title: 'Transaction Manager',
    company: 'Leasing India Private Limited',
    location: 'Delhi, India',
    description: 
    `Facilitated commercial leasing deals for office, warehouse and factory space in Gurgaon, working with brands including Kyocera, Havells, Dr. Batra and Call Health.`,
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
    `Drove sales and marketing for commercial and residential projects, including the successful sale of Avalon's residential development in Bhiwadi.`,
    icon: React.createElement(CgWorkAlt),
    date: 'July 2012 - June 2013',
    experienceType: 'job',
    status: 'completed',
  },
  {
    title: 'Manager - Sales and Marketing',
    company: 'Global Realty Ventures Limited',
    location: 'Delhi, India',
    description: 'Managed commercial and retail properties across Delhi/NCR, selling and leasing space to a range of retail and commercial brands.',
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
    `Managed the leasing of office, warehouse and factory space in Gurgaon, working with brands such as BO Concept, Jindal Lifestyle, Korea Tourism Organization, BHPC, Samsung, TYCO and Medrix.`,
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
    `Directed financial management functions — financial statements, forecasts and budgets — and oversaw general accounting, account reconciliation and cash management.`,
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
    `Prepared financial reports, developed budgets and performed variance analysis, while leading teams on special projects and internal audits to ensure regulatory compliance.`,
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
    `Prepared and closed monthly financial statements and audit reports, monitored general-ledger transactions, and worked with the controller to ensure the accuracy of financial information.`,
    icon: React.createElement(CgWorkAlt),
    date: 'Nov 2004 - July 2006',
    experienceType: 'job',
    status: 'completed',
  },


] 
export const projectsData = [
  {
    id:'0',
    title: "Navya — AI Learning Platform",
    type:'Live Product',
    date:'2026',
    description:
      `A live, AI-powered learning platform for students. It uses a self-hosted LLM (Ollama running Microsoft's Phi model) for student profiling and personalised learning, delivering interactive quizzes and assignments across subjects such as maths, science, coding and English. Built with a Django backend and a PostgreSQL database.`,
    tags: ["Django", "PostgreSQL", "Ollama", "Phi LLM", "AI"],
    imageUrl: navyaImg,
    projectLink:'',
    websiteLink:'https://education.vestudio.dev',
  },
  {
    id:'1',
    title: "Portfolio Website",
    type:'Personal Project',
    description:
      `A personal portfolio built with Next.js 13 and Tailwind CSS to showcase my work, deployed live on Vercel.`,
    tags: ["Next.js 13", "Tailwind"],
    imageUrl: projectImage1,
    projectLink:'https://github.com/vijend795/my-portfolio.git',
    websiteLink:'https://my-portfolio-s7ob.vercel.app',
  },
  {
    id: "2",
    title: "GoNZ — Travel Website",
    type:'College Project · Individual',
    date:'Q3 2023',
    description:
      "A travel website built from the ground up with Django. It features a dynamic navigation bar that highlights the current page, and uses Django's authentication and group permissions to control access to pages and content.",
    tags: ["Django", "Python", "Tailwind", "sqlite3"],
    imageUrl: projectImage2,
    projectLink:'https://github.com/vijend795/Project2_GoNZ.git',
    websiteLink:'',
  },
  {
    id: "3",
    title: "Sono Amore — Music App",
    type:'College Project · Individual',
    date:'Q4 2023',
    description:
      "A music application built with Node.js, Express and MongoDB, featuring authentication and permissions, with CRUD operations tested through Postman.",
    tags: ["Node.js", "Mongodb", "Express", "yaml"],
    imageUrl: projectImage3,
    projectLink:'https://github.com/vijend795/SonoAmoreMusicApp.git',
    websiteLink:'',
  },
  {
    id: "4",
    title: "KiwiFeeds — Restaurant Ratings",
    type:'College Project · Group',
    date:'Q3 2023',
    description:
      "A restaurant rating platform built with Django, featuring user authentication and role-based permissions. Developed as a group project.",
    tags: ["Django", "Python", "Tailwind", "sqlite3"],
    imageUrl: projectImage4,
    projectLink:'https://github.com/AMarieP/IT6006_Development_of_an_Enterprise_Web_Application.git',
    websiteLink:'',
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
  {
    name: "Node.js",
    status:"Active"
  },
  {
    name: "Docker",
    status:"Active"
  },
  {
    name: "DigitalOcean",
    status:"Active"
  },
  {
    name: "Vercel",
    status:"Active"
  },
  {
    name: "Ollama",
    status:"Active"
  },
  {
    name: "AI Integration",
    status:"Active"
  },
  {
    name: "Claude Code",
    status:"Active"
  },
  {
    name: "Cyber Security",
    status:"Active"
  },
  {
    name: "Ethical Hacking",
    status:"Active"
  },
  {
    name: "Microsoft Excel",
    status:"Active"
  },
  {
    name: "Microsoft Word",
    status:"Active"
  },
  {
    name: "Visual Basic Application",
    status:"Active"
  },
 
 
  
] 