import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      type,
      message,
      contact,
      images,
      style,
      prompt,
      specialIdea,
      commercial,
      videoPackage,
      videoDescription,
      videoAddons,
      webPackage,
      webOptions,
      webBrief
    } = body;

    if (!email || !name || !type) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), {
        status: 400,
      });
    }

    let price = 0;

    if (type === 'image') {
      const imgCount = parseInt(images);
      const basePrices = {
        1: 3, 2: 5, 4: 9, 8: 16, 10: 20, 12: 23, 15: 27
      };
      price = basePrices[imgCount] || imgCount * 3;
      if (specialIdea) price += 2.5;
      if (commercial) price += price * 0.3;
    } else if (type === 'video') {
      const basePrices = {
        shortspark: 30,
        narrative: 60,
        feature: 95
      };
      const addonPrices = {
        music: 15,
        fx: 15,
        render4k: 5,
        social: 10,
        rush: 20
      };
      price = basePrices[videoPackage] || 0;
      if (Array.isArray(videoAddons)) {
        for (const addon of videoAddons) {
          price += addonPrices[addon] || 0;
        }
      }
    } else if (type === 'web') {
      const basePrices = {
        onepager: 90,
        portfolio: 140,
        magic: 220
      };
      const optionPrices = {
        animation: 20,
        cms: 50,
        domain: 20,
        ecommerce: 100
      };
      price = basePrices[webPackage] || 0;
      if (Array.isArray(webOptions)) {
        for (const opt of webOptions) {
          price += optionPrices[opt] || 0;
        }
      }
    }

    const { data, error } = await supabase.from("orders").insert([
      {
        name,
        email,
        type,
        message: message || prompt || videoDescription || webBrief,
        contact,
        images: type === 'image' ? parseInt(images) : null,
        style: style || null,
        special_idea: specialIdea || false,
        commercial: commercial || false,
        video_package: videoPackage || null,
        video_addons: videoAddons || [],
        web_package: webPackage || null,
        web_options: webOptions || [],
        status: "pending"
      }
    ]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      return new Response(JSON.stringify({ message: "Database insert failed" }), {
        status: 500,
      });
    }

    const paypalRedirect = `https://www.paypal.com/paypalme/Nyxtrael/${price.toFixed(2)}`;

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
