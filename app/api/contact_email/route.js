import { sendMailNodemailer } from "@/services/nodemailer";

export async function POST(request) {

  try {
    const body = await request.json();
    const { name, email, remark } = body;

    // Basic server-side validation.
    if (!name || !email || !remark) {
      return new Response(
        JSON.stringify({ status: "error", message: "Please fill in all fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const subject = `Portfolio contact from ${name}`;
    const emailBody =
      `You received a new message from your portfolio contact form.\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${remark}`;

    await sendMailNodemailer(subject, email, emailBody);

    return new Response(
      JSON.stringify({ status: "success", message: "Your message has been sent. Thank you!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({
        status: "error",
        message: "Email service is unavailable right now. Please email me directly at singh.vijendra05@gmail.com",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

}