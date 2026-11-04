import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


function clean(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = clean(body.name, 100);
    const email = clean(body.email, 254);
    const service = clean(body.service, 100);
    const message = clean(body.message, 5000);

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !service || message.length < 10) {
      return NextResponse.json({ error: "Please complete all fields with valid information." }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
      return NextResponse.json(
        { error: "The enquiry service is being configured. Please try again shortly." },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"KEITIEM DIGITAL LABS Website" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Website enquiry: ${service}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "We could not send your enquiry. Please try again later." }, { status: 500 });
  }
}

