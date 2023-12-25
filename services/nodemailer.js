var nodemailer = require("nodemailer");

export async function sendMailNodemailer(subject, toEmail, message) {
  // console.log("Email:", process.env.NODEMAILER_EMAIL);
  // console.log("Password:", process.env.NODEMAILER_PW);

  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    var mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: toEmail,
      subject: subject,
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending email:", error);
        reject(error); // Reject the Promise on error
      } else {
        console.log("Email Sent");
        resolve(true); // Resolve the Promise on success
      }
    });
  });
}
