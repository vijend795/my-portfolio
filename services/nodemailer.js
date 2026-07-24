var nodemailer = require("nodemailer");


export async function sendMailNodemailer(subject, senderEmail, message) {


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
      // Gmail requires the authenticated account as the sender.
      from: process.env.NODEMAILER_EMAIL,
      // Deliver the message to the site owner, not the visitor.
      to: process.env.NODEMAILER_EMAIL,
      // So hitting "Reply" replies to the visitor who filled the form.
      replyTo: senderEmail,
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
