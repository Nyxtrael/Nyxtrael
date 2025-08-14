'use client';
export default function Subnav() {
  const items = [
    { href:'#features', label:'Features' },
    { href:'#dashboard', label:'Dashboard' },
    { href:'#integrations', label:'Integrations' },
    { href:'#security', label:'Security' },
    { href:'#pricing', label:'Pricing' },
  ];
  return (
    <div className="sticky top-30 z-10 bg-neutral-bg/80 backdrop-blur border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <ul className="flex gap-4 py-3 text-sm">
          {items.map(item => (
            <li key={item.href}>
              <a href={item.href} className="px-3 py-1 rounded-full ring-1 ring-white/10 hover:ring-white/20 text-text-muted hover:text-text-base">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
