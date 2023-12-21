import React from "react";
import Heading from "./subComponent/heading";


    export default function ContactUs() {
  return (
    <section 
    id ='contact' 
    className="container mx-auto p-6 max-w-[53rem]"
    // className='container mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col justify-start items-center'
   
    >
      <Heading>Contact Me</Heading>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="remark" className="block text-gray-600 font-semibold">
            Remark
          </label>
          <textarea
            id="remark"
            name="remark"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 "
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

