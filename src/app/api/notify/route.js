import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // użyj klucza z serwera, NIE publicznego
)

export async function POST(req) {
  const { email, series } = await req.json();

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ message: 'Invalid email' }), { status: 400 });
  }

  // Check for duplicates
  const { data: existing, error: dupError } = await supabase
    .from('notifications')
    .select('id')
    .eq('email', email)
    .single();

  if (existing) {
    return new Response(JSON.stringify({ message: 'Email already subscribed' }), { status: 409 });
  }

  const { error } = await supabase.from('notifications').insert([{ email, series }]);

  if (error) {
    console.error('Insert error:', error);
    return new Response(JSON.stringify({ message: 'Database error' }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: 'Subscribed' }), { status: 200 });
}
