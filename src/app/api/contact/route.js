// src/app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    // tu logika zapisu/wysłania maila – np. do Netlify Functions, Supabase, Resend itp.
    // np. await sendEmail({ name, email, message });

    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: 'Failed to process form' },
      { status: 500 }
    );
  }
}
