// /app/api/contact/route.js  (or /pages/api/contact.js)
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validation: check if all fields are provided
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Optional: validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid email format!" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Create transporter with hardcoded email and password
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "hazrat17780@gmail.com",  // Your Gmail
        pass: "xlgrjghcpthnqloi",       // Gmail App Password
      },
    });

    // Mail options
    const mailOptions = {
      from: "hazrat17780@gmail.com",
      to: "hazratusman17880@gmail.com",
      subject: `📩 New Contact Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #1a73e8;">You have a new message!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="padding: 10px; background-color: #f4f4f4; border-left: 4px solid #1a73e8;">${message}</p>
          <hr />
          <p style="font-size: 12px; color: #777;">This email was sent from your website contact form.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
