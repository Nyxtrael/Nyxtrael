import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, plan, honeypot } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Check honeypot
    if (honeypot) {
      return NextResponse.json({ success: false, error: 'Invalid submission' }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'hello@nyxtrael.com',
      to: process.env.RESEND_TO_EMAIL || 'nyxtrael@gmail.com',
      subject: `New Contact Form Submission${plan ? ` (${plan} Plan)` : ''}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        ${plan ? `Plan: ${plan}` : ''}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${plan ? `<p><strong>Plan:</strong> ${plan}</p>` : ''}
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error('[RESEND_ERROR]', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('[RESEND_ERROR]', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}