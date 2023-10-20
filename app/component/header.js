// pages/index.js
import React from "react";
import Image from "next/image";
import { navLinks } from "../data/data_cv";
import Link from "next/link";
// import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="z-[999] relative bg-green-400 flex justify-center">
      <nav className=" flex mt-10 fixed top-0  ">
        <ul className=" flex flex-row items-center gap-10 px-9 rounded-full py-3 bg-white">
          {navLinks.map((link) => (
            <li key={link.name} className=" ">
              <Link
                href={link.link}
                className="text-gray-400 text-xl font-semibold hover:text-black"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
