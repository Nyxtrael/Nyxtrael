export default function FeaturesList() {
  const items = [
    { t: 'Multi-step UX', d: 'Clear progress, fewer drop-offs, better conversion rates.' },
    { t: 'Conditional fields', d: 'Dynamic questions based on previous answers.' },
    { t: 'Drag & drop upload', d: 'Multiple files, size/type validation, previews.' },
    { t: 'Save draft', d: 'Local draft with auto-save and resume later.' },
    { t: 'A11y & keyboard', d: 'Labels, focus rings, skip logic — accessible by default.' },
    { t: 'API-ready', d: 'Easy to connect to any backend (mock API included).' },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((i) => (
        <div key={i.t} className="p-4 rounded-lg ring-1 ring-white/10 bg-neutral-mid">
          <div className="text-lg font-semibold text-text-base">{i.t}</div>
          <p className="text-sm text-text-muted">{i.d}</p>
        </div>
      ))}
    </div>
  );
}
