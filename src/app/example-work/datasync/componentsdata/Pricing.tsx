import Link from 'next/link';

const tiers = [
  {
    name:'Starter',
    price:'€49',
    desc:'For small teams getting started.',
    features:['Up to 3 dashboards','Email support','CSV imports'],
  },
  {
    name:'Growth',
    price:'€149',
    desc:'For growing teams and startups.',
    features:['Unlimited dashboards','Database connectors','Slack alerts','Role-based access'],
    popular:true,
  },
  {
    name:'Enterprise',
    price:'Custom',
    desc:'Advanced security and support.',
    features:['SAML/SSO','VPC/On-prem options','Priority support','Audit logs'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 bg-neutral-bg">
      <h2 className="text-3xl font-bold text-center text-text-base">Pricing</h2>
      <p className="text-center text-text-muted mt-2">Simple plans that scale with you.</p>
      <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className={`rounded-xl ring-1 ring-white/10 ${t.popular?'bg-gradient-to-b from-neutral-mid to-neutral-bg':''} bg-neutral-mid p-6 shadow-[0_8px_24px_rgba(0,0,0,0.25)]`}>
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold text-text-base">{t.name}</h3>
              {t.popular && <span className="text-xs px-2 py-1 rounded-full bg-gradient-cta text-neutral-900">Most Popular</span>}
            </div>
            <div className="mt-2 text-3xl font-bold text-text-base">{t.price}<span className="text-sm text-text-muted">{t.price==='Custom'?'':'/mo'}</span></div>
            <p className="text-text-muted">{t.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-text-base">
              {t.features.map(f => <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />{f}</li>)}
            </ul>
            <Link href="/contact" className="mt-6 inline-block w-full text-center bg-gradient-cta text-neutral-900 font-semibold py-2 rounded-md">Get started</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
