"use strict";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();


    
   console.log("GMAIL_USER: ", process.env.GMAIL_USER ),
console.log("GMAIL_APP_PASSWORD:", !!process.env.GMAIL_APP_PASSWORD)

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_APP_PASSWORD,  // app password (not your real Gmail password)
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "nisansalagamchchige@gmail.com", // your email again
      subject: `New Message from ${name}`,
      text: message,
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
