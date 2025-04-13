'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PayContent() {
  const searchParams = useSearchParams();
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const priceParam = searchParams.get("price");
    if (priceParam) {
      setPrice(priceParam);
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1a0e2a] to-[#0c0f1e]">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">💳 Complete Your Payment</h1>
        <p className="text-neutral-400 mb-4">
  {"You're just one step away from confirming your order."}
</p>

        <div className="bg-[#1a1525] p-6 rounded-xl space-y-6">
          <h2 className="text-2xl font-semibold">
            Total: {price ? `${price}€` : '...'} 
          </h2>

          <p className="text-sm text-neutral-400">
            Once you click the button below, you will be redirected to PayPal to complete the payment.
          </p>

          {price && (
            <a
              href={`https://www.paypal.com/paypalme/Nyxtrael/${price}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition text-center"
            >
              🪙 Pay with PayPal
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
