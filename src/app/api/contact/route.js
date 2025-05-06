import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return new NextResponse(
        JSON.stringify({ error: 'Please fill in all fields.' }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: 'nyxtrael@yourdomain.com',
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New contact request</h2>
        <p><strong>Name:</strong> ${escapeHTML(name)}</p>
        <p><strong>Email:</strong> ${escapeHTML(email)}</p>
        <p><strong>Service:</strong> ${escapeHTML(service)}</p>
        <p><strong>Message:</strong><br/>${escapeHTML(message).replace(/\n/g,'<br/>')}</p>
      `
    });

    return new NextResponse(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return new NextResponse(
      JSON.stringify({ error: 'Something went wrong. Please try again later.' }),
      { status: 500 }
    );
  }
}
