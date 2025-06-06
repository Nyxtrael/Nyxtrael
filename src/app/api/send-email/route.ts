import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: 'Missing fields' }), {
        status: 400,
      });
    }

    const response = await resend.emails.send({
      from: process.env.RESEND_FROM || 'no-reply@nyxtrael.com',
      to: 'nyxtrael@gmail.com', // <-- zmień na Twój adres docelowy
      subject: `Nowa wiadomość z formularza kontaktowego`,
      reply_to: email,
      text: `
Imię: ${name}
Email: ${email}
Wiadomość:
${message}
      `,
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: 'Failed to send email' });
  }
}
