import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { name, email, message, service } = body;

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['Nyxtrael@gmail.com'], // <-- <-- <-- tutaj wpisz swój adres
      subject: `💌 New contact from ${name}`,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ status: 'ok', data });
  } catch (err) {
    return NextResponse.json({ status: 'error', error: err.message }, { status: 500 });
  }
}
