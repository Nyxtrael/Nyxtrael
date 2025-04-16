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
      label: '✨ Subtle Animations – Scroll fades, hover sparkles, page transitions.',
      description: 'Your site, but with ✨magic✨. Movement without the migraine.',
      price: 20,
    },
    {
      key: 'cms',
      label: '🧠 CMS Integration – Add blogs, portfolios, or editable content.',
      description: 'Update your site without bugging your dev (aka me).',
      price: 50,
      tooltip: 'CMS = system do zarządzania treścią. Możesz samodzielnie dodawać wpisy, zmieniać teksty itd.'
    },
    {
      key: 'domain',
      label: '🌐 Custom Domain Setup – You.com, but like, real.',
      description: 'I’ll configure your domain, connect hosting, and polish your URL like a jewel.',
      price: 20,
    },
    {
      key: 'ecommerce',
      label: '🛒 E-commerce Ready – Everything you need to sell weird merch.',
      description: 'Stripe-ready storefront, shopping cart, product handling, and checkout.',
      price: 100,
      tooltip: 'Pełna obsługa sklepu internetowego – produkty, koszyk, płatności, checkout.'
    },
  ],
  image: [
    {
      key: 'revision',
      label: '✏️ Extra Revision – One more pass to refine your vision.',
      description: 'Need more control? Add one extra revision.',
      price: 3,
      allowedStyles: ['scene', 'divine']
    },
    {
      key: 'prompthelp',
      label: '🧠 Prompt Rewrite / Coaching',
      description: 'Stuck on the idea? I’ll help sculpt the concept.',
      price: 5,
      allowedStyles: ['scene', 'divine']
    },
    {
      key: 'colorgrading',
      label: '🎨 Custom Color Grading',
      description: 'Warm tone? Cinematic palette? I’ll tune the vibes.',
      price: 3,
      allowedStyles: ['mini', 'scene', 'divine']
    },
    {
      key: 'animatedexport',
      label: '🌀 Animated Detail Export',
      description: 'Subtle movement: parallax or breathing loop (MP4/WebM)',
      price: 10,
      allowedStyles: ['divine']
    },
    {
      key: 'sourceprompt',
      label: '📦 Full Source Prompt',
      description: 'You’ll receive the exact prompt + generation params.',
      price: 2,
      allowedStyles: ['mini', 'scene', 'divine']
    },
    {
      key: 'commercial',
      label: '🔮 Commercial License',
      description: 'Use in monetized projects or merch.',
      price: 15,
      allowedStyles: ['mini', 'scene', 'divine'],
      tooltip: 'Covers usage in commercial products or client work.'
    }
  ]
};

const availabilityRules = {
  onepager: ['animation', 'domain', 'rush'],
  portfolio: ['animation', 'cms', 'domain', 'rush'],
  magic: ['animation', 'cms', 'domain', 'ecommerce', 'rush'],
};

const popularBundles = {
  video: ['music', 'fx', 'socialcuts'],
  web: ['cms', 'animation', 'domain'],
  image: ['prompthelp', 'revision', 'commercial']
};

export function AddonsSelector({ type, selected, handleChange, webPackage, style }) {
  const data = addonsData[type];
  const bundle = popularBundles[type];
  const [tooltipKey, setTooltipKey] = useState(null);

  if (!data) return null;

  const allowedAddons =
    type === 'web' && webPackage
      ? availabilityRules[webPackage] || []
      : data.map(addon => addon.key);

  const visibleAddons = data.filter(addon => allowedAddons.includes(addon.key));

  const toggleBundle = () => {
    for (const addon of bundle) {
      if (!selected.includes(addon)) {
        handleChange({
          target: {
            name:
              type === 'video' ? 'videoAddons' : type === 'web' ? 'webOptions' : 'imageAddons',
            value: addon,
            type: 'checkbox',
            checked: true
          }
        });
      }
    }
  };

  return (
    <div className="space-y-4 mt-6">
      <h4 className="text-md font-bold text-purple-300 mb-2">📦 Optional Add-ons:</h4>
      {bundle && (
        <button
          type="button"
          onClick={toggleBundle}
          className="text-sm bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-xl text-white font-semibold mb-4"
        >
          ⭐ Apply Popular Setup
        </button>
      )}

      {visibleAddons.map(({ key, label, description, price, tooltip, allowedStyles }) => {
        const isDisabled =
          type === 'image' && style && allowedStyles && !allowedStyles.includes(style);

        return (
          <label
            key={key}
            className={`block cursor-pointer bg-[#1a1320] p-3 rounded-xl border border-[#2d223e] transition-all relative ${
              isDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:border-purple-400'
            }`}
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
                  name={
                    type === 'video'
                      ? 'videoAddons'
                      : type === 'web'
                      ? 'webOptions'
                      : 'imageAddons'
                  }
                  value={key}
                  checked={selected.includes(key)}
                  onChange={(e) => {
                    if (
                      (type === 'web' && webPackage && !allowedAddons.includes(e.target.value)) ||
                      (type === 'image' && isDisabled)
                    ) {
                      alert(
                        `${label} is only available for a different package or style. Maybe upgrade? 🧙‍♀️`
                      );
                      return;
                    }
                    handleChange(e);
                  }}
                  disabled={isDisabled}
                  className="accent-purple-500 h-5 w-5 disabled:opacity-30"
                />
              </div>
            </div>
          </label>
        );
      })}
    </div>
  );
}

export default AddonsSelector;
