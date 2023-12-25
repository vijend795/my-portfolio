"use server";

import React from "react";
import { Resend } from "resend";

import ContactFormEmail from "@/app/component/subComponent/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderName = formData.get("name");
  const senderEmail = formData.get("email");
  const message = formData.get("remark");

  
  let data;
  try {
    data = await resend.emails.send({
      from: `${senderName} <onboarding@resend.dev>`,
      to: "bytegrad@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
