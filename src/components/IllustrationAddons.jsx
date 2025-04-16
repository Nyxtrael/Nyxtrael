'use client';
import { motion } from 'framer-motion';

const addonsData = [
  {
    key: 'revision',
    label: '✏️ Extra Revision (+3€)',
    description: 'Need more control? Add one extra revision.',
    availableFor: ['scene', 'divine'],
  },
  {
    key: 'grading',
    label: '🎨 Custom Color Grading (+3€)',
    description: 'Extra polish? Let’s enhance your palette.',
    availableFor: ['mini', 'scene', 'divine'],
  },
  {
    key: 'animation',
    label: '🌀 Animated Detail Export (+10€)',
    description: 'Breathing artwork loop – 5s animation (MP4/WebM)',
    availableFor: ['divine'],
  },
  {
    key: 'promptfile',
    label: '📦 Full Source Prompt (+2€)',
    description: 'For future nerds. Includes raw prompt + params.',
    availableFor: ['mini', 'scene', 'divine'],
  },
  {
    key: 'commercial',
    label: '🔮 Commercial License (+15€)',
    description: 'Use in monetized projects or merch.',
    availableFor: ['mini', 'scene', 'divine'],
  },
];

export default function IllustrationAddons({ selected = [], handleChange, style }) {
  return (
    <div className="bg-[#2d223e] p-4 rounded-xl text-neutral-200 mt-4">
      <h3 className="text-lg font-semibold mb-3">✨ Add-ons</h3>
      <p className="text-sm text-purple-300 mb-2 italic">
        🧾 Want to fine-tune your vision? Add just what you need.
      </p>
      <div className="space-y-3">
        {addonsData.map((addon) => {
          const isDisabled = !addon.availableFor.includes(style);
          return (
            <label
              key={addon.key}
              className={`flex items-start gap-2 p-2 rounded border ${
                isDisabled
                  ? 'border-neutral-700 text-neutral-500 opacity-50 cursor-not-allowed'
                  : 'border-purple-700 hover:bg-purple-900 cursor-pointer'
              }`}
            >
              <input
                type="checkbox"
                name="illustrationAddons"
                value={addon.key}
                checked={selected?.includes(addon.key)}
                onChange={handleChange}
                disabled={isDisabled}
                className="mt-1 accent-purple-500"
              />
              <div>
                <span className="font-medium">{addon.label}</span>
                <div className="text-xs text-neutral-400">{addon.description}</div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
