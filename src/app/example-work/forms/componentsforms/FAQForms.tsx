export default function FAQForms() {
  const items = [
    { q: 'Can I resume later?', a: 'Yes. The form saves a local draft automatically and restores it when you return.' },
    { q: 'Is validation included?', a: 'Yes. Required fields, email format, file size/type limits and more.' },
    { q: 'How do you handle uploads?', a: 'This demo keeps files in memory for preview. In production, send to S3/Supabase/Cloud Storage before final submit.' },
    { q: 'How to integrate backend?', a: 'Call your API from the final step. This demo includes a mock /api/advanced-forms endpoint.' },
  ];
  return (
    <div>
      <h3 className="text-2xl font-bold text-text-base mb-4">FAQ</h3>
      <ul className="space-y-3">
        {items.map(i => (
          <li key={i.q} className="p-4 bg-neutral-mid rounded-lg ring-1 ring-white/10">
            <p className="font-semibold text-text-base">{i.q}</p>
            <p className="text-sm text-text-muted">{i.a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
