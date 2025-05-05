// src/app/api/contact/route.js
export const runtime = 'edge'
// deklarujemy pola wymagane przez Netlify Forms
export const form = {
  require: ['name', 'email', 'service', 'message'],
}

export async function POST(request) {
  // Netlify automatycznie zbiera dane z form
  const formData = await request.formData()
  const payload = Object.fromEntries(formData.entries())

  // tu możesz dodać wysyłkę maila (Resend, Supabase, itp.)
  // przykładowo:
  // await resend.emails.send({ ... })

  return new Response(
    JSON.stringify({ success: true, data: payload }),
    { status: 200 }
  )
}
