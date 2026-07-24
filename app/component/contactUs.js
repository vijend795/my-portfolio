"use client";
import React from "react";
import Heading from "./subComponent/heading";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    remark: "",
  });
  // status: null | "success" | "error"
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);
    setStatusMessage("");
    const { name, email, remark } = formData;

    try {
      const response = await fetch("/api/contact_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, remark }),
      });

      const responseData = await response.json().catch(() => ({}));

      if (response.ok && responseData.status === "success") {
        setStatus("success");
        setStatusMessage(responseData.message || "Your message has been sent. Thank you!");
        setFormData({ name: "", email: "", remark: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          responseData.message ||
            "Email service is not available right now. Please email me directly at singh.vijendra05@gmail.com"
        );
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      setStatus("error");
      setStatusMessage(
        "Email service is not available right now. Please email me directly at singh.vijendra05@gmail.com"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto p-6 max-w-[53rem]"
      // className='container mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col justify-start items-center'
    >
      <Heading>Contact Me</Heading>
      <p className="mb-5 px-2 text-sm text-center text-gray-700">
        Please contact me directly at{" "}
        <a
          href="mailto:singh.vijendra05@gmail.com"
          className="underline text-blue-500 break-words"
        >
          singh.vijendra05@gmail.com
        </a>{" "}
        or through this form
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
            value={formData.name}
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
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="remark" className="block text-gray-600 font-semibold">
            Message
          </label>
          <textarea
            id="remark"
            name="remark"
            rows="4"
            value={formData.remark}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting…" : "Submit"}
          </button>
        </div>

        {status && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 text-center text-sm ${
              status === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
}
