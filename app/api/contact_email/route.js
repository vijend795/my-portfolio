import { sendMailNodemailer } from "@/services/nodemailer";

export async function GET(request) {
    console.log("GET Request");
    return new Response(JSON.stringify({name:"get request "}))
}
 
export async function HEAD(request) {

}


export async function POST(request) {

  try {
    // Do some processing...
    const body = await request.json(); // Assuming the request body is JSON
    // console.log(body);
    const { name, email, remark } = body;
   
    // Assuming sendMailNodemailer returns a Promise
    await sendMailNodemailer(
      `Job Query send by ${name} from Portfolio Website `, 
      email, 
      remark
      );
    // console.log("Email send and response code generated ")
    // return new Response("Email sent successfully", { status: 200 });
    return new Response(JSON.stringify({ status: 'success', message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
    

}
 
export async function PUT(request) {

}
 
export async function DELETE(request) {

}
 
export async function PATCH(request) {

}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) {

}