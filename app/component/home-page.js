// pages/index.js
import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-3xl font-semibold">Your Name</h1>
        <p>Web Developer & Designer</p>
      </header>
      <nav className="bg-blue-700">
        <ul className="flex justify-center space-x-4 p-4">
          <li>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#portfolio" className="text-white hover:text-gray-300">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
      <section id="about" className="p-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          Welcome to my portfolio website. I am a web developer and designer passionate about creating beautiful and functional websites. I have experience in...
        </p>
      </section>
      <section id="portfolio" className="p-8">
        <h2 className="text-2xl font-semibold">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Add your portfolio projects here */}
          <div className="bg-white rounded-lg shadow-md p-4">
            {/* <Image src="project1.jpg" alt="Project 1" className="w-full h-32 object-cover" width={200} height={200}/> */}
            
            <h3 className="text-xl font-semibold mt-2">Project Title 1</h3>
            <p>Project description goes here.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            {/* <Image src="project2.jpg" alt="Project 2" className="w-full h-32 object-cover" width={200} height={200} /> */}
            <h3 className="text-xl font-semibold mt-2">Project Title 2</h3>
            <p>Project description goes here.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="p-8">
        <h2 className="text-2xl font-semibold">Contact Me</h2>
        <p>If you like to get in touch, feel free to email me at your@email.com or connect with me on social media:</p>
        {/* Add social media icons and contact information here */}
      </section>
      <footer className="bg-blue-500 p-4 text-white text-center">
        <p>&copy; 20XX Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
