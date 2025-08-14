import { ShieldCheckIcon, LockClosedIcon, EyeDropperIcon } from '@heroicons/react/24/outline';

export default function Security() {
  const items = [
    { icon: ShieldCheckIcon, title:'Encryption', text:'Data encrypted in transit (TLS) and at rest.' },
    { icon: LockClosedIcon, title:'Access Control', text:'Least-privileged roles and SSO (SAML/OAuth).' },
    { icon: EyeDropperIcon, title:'Audit Trails', text:'Every change tracked with detailed logs.' },
  ];
  return (
    <section id="security" className="py-16 px-4 bg-neutral-bg">
      <h2 className="text-3xl font-bold text-center text-text-base">Security & Compliance</h2>
      <p className="text-center text-text-muted mt-2">Enterprise-grade controls to keep your data safe.</p>
      <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(({icon:Icon, title, text}) => (
          <div key={title} className="p-6 bg-neutral-mid rounded-lg ring-1 ring-white/10">
            <Icon className="h-10 w-10 text-accent" />
            <h3 className="mt-3 text-lg font-semibold text-text-base">{title}</h3>
            <p className="text-text-muted">{text}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-center text-text-muted mt-4">Note: Demo site. Replace with your actual security documentation.</p>
    </section>
  );
}
