'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OrderForm({ prefill = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: prefill.type || '',
    message: '',
    contact: '',
    images: '0', // Test mode default
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const imagePrices = [
    0, 6, 10, 13, 18, 22, 25, 28, 30, 34, 37, 40, 43, 46, 48, 50,
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          images: parseInt(formData.images),
          price: imagePrices[parseInt(formData.images)],
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      router.push(data.redirectUrl || '/thanks');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const rawPrice = imagePrices[parseInt(formData.images)] || 0;
  const price = new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
  }).format(rawPrice);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#1a1525] p-6 rounded-xl space-y-4 max-w-2xl mx-auto"
    >
      <h2 className="text-pink-400 font-semibold text-center">
        Estimated price: {price}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Your name or brand"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded bg-[#2d223e] text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded bg-[#2d223e] text-white"
      />

      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 rounded bg-[#2d223e] text-white"
      >
        <option value="" disabled hidden>Select style / project type</option>
        <option value="sunroom">Sunroom Diaries</option>
        <option value="redrequiem">Red Requiem</option>
        <option value="divines">Astral Divines</option>
        <option value="custom">Custom</option>
      </select>

      <select
        name="images"
        value={formData.images}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-[#2d223e] text-white"
      >
        {imagePrices.map((price, index) => (
          <option key={index} value={index}>
            {index} Image{index !== 1 ? 's' : ''} – {price} PLN
          </option>
        ))}
      </select>

      <input
        type="text"
        name="contact"
        placeholder="Your Discord / Instagram / Alt contact"
        value={formData.contact}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded bg-[#2d223e] text-white"
      />

      <textarea
        name="message"
        placeholder="Describe your request, mood, themes..."
        value={formData.message}
        onChange={handleChange}
        minLength={10}
        rows={4}
        className="w-full px-4 py-2 rounded bg-[#2d223e] text-white"
      />

      <p className="text-sm text-neutral-400">
        💳 Payment options: PayPal, bank transfer, or card.<br />
        🔒 Your data is only used for order processing. We don’t share it.
      </p>

      {error && <p className="text-red-400 text-sm">❌ {error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition text-white"
      >
        {loading ? 'Sending...' : '✨ Submit and Pay'}
      </button>
    </form>
  );
}
