// app/api/send-email/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Contact from ${body.name}`,
      replyTo: body.email,
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage:\n${body.message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('[RESEND_ERROR]', error);
    return NextResponse.json({ success: false, error });
  }
}
