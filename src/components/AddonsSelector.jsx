'use client';

import React, { useState } from 'react';
import { Info } from 'lucide-react';

const addonsData = {
  video: [
    {
      key: 'music',
      label: '🎵 Licensed Music Track',
      description: 'Handpicked soundtrack with commercial license. No copyright issues.',
      price: 15,
    },
    {
      key: 'fx',
      label: '🔊 Sound FX & Mixing',
      description: 'Enhance impact with whooshes, punches, or subtle ambiance.',
      price: 15,
      tooltip: 'Professional audio design that matches your video’s mood and motion.'
    },
    {
      key: 'render4k',
      label: '📈 4K Render',
      description: 'Future-proof sharpness. Looks crispy on any screen.',
      price: 5,
    },
    {
      key: 'socialcuts',
      label: '📱 Social Media Cuts',
      description: 'Extra versions: 15s / 30s edits perfect for Instagram, TikTok, YouTube Shorts.',
      price: 10,
    },
    {
      key: 'rush',
      label: '⚡ Rush Delivery (24h)',
      description: 'Need it yesterday? I’ll jump the queue and make it happen.',
      price: 20,
    },
  ],
  web: [
    {
      key: 'animation',
      label: '✨ Subtle Animations',
      description: 'Smooth scrolls, hover effects, fades – brings your site to life without being flashy.',
      price: 20,
    },
    {
      key: 'cms',
      label: '🧠 CMS Integration',
      description: 'Add a blog, portfolio manager or dynamic content. Update content without touching code.',
      price: 50,
      tooltip: 'CMS = system do zarządzania treścią. Możesz samodzielnie dodawać wpisy, zmieniać teksty itd.'
    },
    {
      key: 'domain',
      label: '🌐 Custom Domain Setup',
      description: 'I’ll configure your domain, connect hosting, and polish your URL like a jewel.',
      price: 20,
    },
    {
      key: 'ecommerce',
      label: '🛒 E-commerce Ready',
      description: 'Stripe-ready storefront, shopping cart, and product handling. Yes, even checkout.',
      price: 100,
      tooltip: 'Pełna obsługa sklepu internetowego – produkty, koszyk, płatności, checkout.'
    },
  ],
};

const popularBundles = {
  video: ['music', 'fx', 'socialcuts'],
  web: ['cms', 'animation', 'domain']
};

export function AddonsSelector({ type, selected, handleChange }) {
  const data = addonsData[type];
  const bundle = popularBundles[type];
  const [tooltipKey, setTooltipKey] = useState(null);

  if (!data) return null;

  const toggleBundle = () => {
    for (const addon of bundle) {
      if (!selected.includes(addon)) {
        handleChange({ target: { name: type === 'video' ? 'videoAddons' : 'webOptions', value: addon, type: 'checkbox', checked: true } });
      }
    }
  };

  return (
    <div className="space-y-4 mt-6">
      <h4 className="text-md font-bold text-purple-300 mb-2">📦 Optional Add-ons:</h4>
      <button
        type="button"
        onClick={toggleBundle}
        className="text-sm bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-xl text-white font-semibold mb-4"
      >
        ⭐ Apply Popular Setup
      </button>

      {data.map(({ key, label, description, price, tooltip }) => (
        <label
          key={key}
          className="block cursor-pointer bg-[#1a1320] p-3 rounded-xl hover:border-purple-400 border border-[#2d223e] transition-all relative"
          onMouseEnter={() => setTooltipKey(key)}
          onMouseLeave={() => setTooltipKey(null)}
        >
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="text-white font-medium flex items-center gap-2">
                {label}
                {tooltip && <Info size={14} className="text-purple-300" />}
              </span>
              <span className="text-sm text-neutral-400">{description}</span>
              {tooltipKey === key && tooltip && (
                <div className="absolute left-0 mt-1 text-xs bg-black text-white p-2 rounded shadow-lg w-64 z-10">
                  {tooltip}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-300 font-semibold">+{price}€</span>
              <input
                type="checkbox"
                name={type === 'video' ? 'videoAddons' : 'webOptions'}
                value={key}
                checked={selected.includes(key)}
                onChange={handleChange}
                className="accent-purple-500 h-5 w-5"
              />
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}

export default AddonsSelector;
