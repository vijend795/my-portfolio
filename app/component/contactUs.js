"use client";
import React from "react";
import Heading from "./subComponent/heading";
import { useState ,useEffect} from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    remark: "",
  });
  const [successStatus, setSuccessStatus] = useState(null);
  const [isLoading,setIsLoading]=useState(false)
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const { name, email, remark } = formData;

    try {
      // Send form data to the server using the /api/contact_email route
      const response = await fetch("/api/contact_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, remark }),
      });

      const responseData = await response.json();
      alert(responseData.message);
  
      if (responseData.status=='success') {
        // alert("Form data submitted successfully");
        // Optionally, clear the form after successful submission
        setSuccessStatus("success")
       setFormData({
        name: "",
        email: "",
        remark: "",
        
      })
      
      } else {
        alert("Email services is not available right now !!! mail me at singh.vijendra05@gmail.com")
        console.error("Error submitting form data");
      }
    } catch (error) {
      alert("Email services is not available right now !!! singh.vijendra05@gmail.com")
      console.error("Error submitting form data:", error);
    }
    setIsLoading(false)
  };
  useEffect(() => {
    // Reload the page after a successful form submission
    if (successStatus === "success") {
      setFormData({
        name: "",
        email: "",
        remark: "",
      })
      window.location.reload();
      setSuccessStatus(null)
    }
  }, [successStatus]);
  return (
    <section
      id="contact"
      className="container mx-auto p-6 max-w-[53rem]"
      // className='container mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col justify-start items-center'
    >
      <Heading>Contact Me   
      </Heading>
      <p className="flex justify-center mb-5 text-xs no-underline">
          Please contact me directly at&nbsp;
          <a href="mailto:singh.vijendra05@gmail.com" className="underline text-blue-400">
            singh.vijendra05@gmail.com
          </a>
          &nbsp;or through this form
        </p>
      <form
        className="max-w-md mx-auto"
        // method="POST"
        // action="/api/contact_email"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            required
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
            onChange={handleChange}
            required
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
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 "
          >
            {isLoading? 'Submitting' : 'Submit' }
          </button>
        </div>
      </form>
    </section>
  );
}
