import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { NextRequest } from 'next/server'


export async function POST(request: NextRequest) {  
  try {
    console.log("Request Body:", await request.json()); // Log the request body

    const data = await request.json() as { name: string, email: string, message: string }; // Type safety

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    console.log("Transporter Config:", transporter); 

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      subject: `New message from ${data.name} - ${data.email}`,
      text: data.message, 
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: unknown) {
    console.error("Server-side Error:", error); 
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
    }
  }
}
