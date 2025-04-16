// 🧩 WebAddons.jsx - NEW COMPONENT

export default function WebAddons({ selected = [], handleChange, webPackage }) {
  const isMiniPlus = webPackage === 'portfolio' || webPackage === 'magic';
  const isCustomOnly = webPackage === 'magic';

  const webAddons = [
    {
      id: 'animation',
      label: '✨ Subtle Animations (+20€)',
      tooltip: 'Scroll fades, hovers, parallax – for ✨ life ✨',
      disabled: false
    },
    {
      id: 'cms',
      label: '💬 CMS Integration (+50€)',
      tooltip: 'Blog, updates, content manager – no code needed',
      disabled: !isMiniPlus
    },
    {
      id: 'domain',
      label: '🌐 Custom Domain Setup (+20€)',
      tooltip: 'Setup, DNS config, email optional',
      disabled: false
    },
    {
      id: 'ecommerce',
      label: '🛒 E-commerce Ready (+100€)',
      tooltip: 'Checkout, product manager, secure payments',
      disabled: !isCustomOnly
    },
    {
      id: 'source',
      label: '📥 Source Files (+25€)',
      tooltip: 'Editable export: HTML/CSS or no-code backup',
      disabled: !isMiniPlus
    },
    {
      id: 'rush',
      label: '🚀 Rush Delivery (+30€)',
      tooltip: 'Need it yesterday? Say no more.',
      disabled: false
    },
    {
      id: 'branding',
      label: '🎨 Branding Pack (+40€)',
      tooltip: 'Moodboard + palette based on your brief',
      disabled: !isMiniPlus
    }
  ];

  return (
    <div className="bg-[#2d223e] p-4 rounded-xl text-neutral-200">
      <h3 className="text-lg font-semibold mb-2">Add-ons</h3>
      <p className="text-sm italic text-purple-300 mb-4">Want to fine-tune your vision? Add just what you need.</p>
      <div className="space-y-2">
        {webAddons.map(addon => (
          <label
            key={addon.id}
            className={`flex items-start gap-2 p-2 border rounded-xl cursor-pointer ${addon.disabled ? 'opacity-40 pointer-events-none' : 'hover:border-purple-500'} border-[#433055]`}
          >
            <input
              type="checkbox"
              name="webOptions"
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
