import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, type, message, contact, images } = body;

    if (!email || !name || !type) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), {
        status: 400,
      });
    }

    const { data, error } = await supabase.from("orders").insert([
      {
        name,
        email,
        type,
        message,
        contact,
        images: parseInt(images),
        status: "pending",
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      return new Response(JSON.stringify({ message: "Database insert failed" }), {
        status: 500,
      });
    }

    const priceMap = [6, 10, 13, 18, 22, 25, 28, 30, 34, 37, 40, 43, 46, 48, 50];
    const price = priceMap[parseInt(images) - 1] || 10;

    const paypalRedirect = `https://www.paypal.com/paypalme/Nyxtrael/${price}`;

    return new Response(
      JSON.stringify({ success: true, redirectUrl: paypalRedirect }),
      { status: 200 }
    );

  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ message: "Unexpected error" }), {
      status: 500,
    });
  }
}
