// VideoAddons.jsx
export default function VideoAddons({ selected = [], handleChange }) {
  const videoAddons = [
    { id: 'music', label: '🎵 Licensed Music Track (+15€)', tooltip: 'No copyright issues.' },
    { id: 'fx', label: '💥 Sound FX & Mixing (+15€)', tooltip: 'Punchier edits!' },
    { id: 'render4k', label: '📽️ 4K Render (+5€)', tooltip: 'Crispier footage.' },
    { id: 'socialcuts', label: '📱 Social Media Cuts (+10€)', tooltip: 'Perfect for reels.' },
    { id: 'rush', label: '⚡ Rush Delivery (+20€)', tooltip: 'You need it *yesterday*.' }
  ];

  return (
    <div className="bg-[#2d223e] p-4 rounded-xl text-neutral-200">
      <h3 className="text-lg font-semibold mb-2">Optional Add-ons</h3>
      <div className="space-y-2">
        {videoAddons.map(addon => (
          <label key={addon.id} className="flex items-start gap-2 p-2 border rounded-xl hover:border-purple-500 border-[#433055]">
            <input
              type="checkbox"
              name="videoAddons"
              value={addon.id}
              checked={selected.includes(addon.id)}
              onChange={handleChange}
              className="mt-1"
            />
            <div>
              <p>{addon.label}</p>
              <p className="text-sm text-neutral-400">{addon.tooltip}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
