export default function FAQPayments() {
  const items = [
    { q:'How do I test payments?', a:'Use card 4242 4242 4242 4242 with any future date, any CVC and any ZIP. This demo simulates Stripe events.' },
    { q:'Can I use real Stripe here?', a:'Yes. Swap the demo modal for a real Checkout call and add a webhook route. I can wire this to Stripe in minutes when you provide keys.' },
    { q:'Do you support invoices & VAT?', a:'Yes — typical setup covers invoices, VAT ID validation, tax rates and credit notes.' },
    { q:'What about SCA / 3D Secure?', a:'Stripe handles SCA automatically. In this demo it is skipped for simplicity.' },
  ];
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h3 className="text-2xl font-bold text-text-base mb-4">FAQ</h3>
      <ul className="space-y-3">
        {items.map(it => (
          <li key={it.q} className="p-4 bg-neutral-mid rounded-lg ring-1 ring-white/10">
            <p className="font-semibold text-text-base">{it.q}</p>
            <p className="text-text-muted text-sm mt-1">{it.a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
