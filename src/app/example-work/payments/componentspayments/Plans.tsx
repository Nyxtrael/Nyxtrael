'use client';
import { useEffect, useMemo, useState } from 'react';

export type Plan = {
  id: 'starter'|'pro'|'enterprise';
  name: string;
  monthly: number;
  yearly: number;
  features: string[];
};

const PLANS: Plan[] = [
  { id:'starter', name:'Starter', monthly:9, yearly:90, features:['1 project','Basic analytics','Email support'] },
  { id:'pro', name:'Pro', monthly:29, yearly:290, features:['Unlimited projects','Advanced analytics','Priority support'] },
  { id:'enterprise', name:'Enterprise', monthly:99, yearly:990, features:['SLA & SSO','Audit logs','Dedicated manager'] },
];

export default function Plans({
  selected, onSelect, onPrice,
}:{ selected: Plan | null; onSelect: (p: Plan)=>void; onPrice?:(price:number, interval:'mo'|'yr', plan:Plan|null)=>void }) {
  const [interval, setInterval] = useState<'mo'|'yr'>('mo');
  const plans = useMemo(()=>PLANS, []);

  useEffect(()=>{
    if (onPrice) {
      const price = selected ? (interval==='mo' ? selected.monthly : selected.yearly) : 0;
      onPrice(price, interval, selected);
    }
  }, [interval, selected, onPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-text-base">Pricing plans</h2>
        <div className="inline-flex bg-neutral-mid rounded-md p-1 ring-1 ring-white/10">
          <button onClick={()=>setInterval('mo')} className={`px-3 py-1 rounded ${interval==='mo'?'bg-gradient-cta text-neutral-900':'text-text-base hover:bg-neutral-bg'}`}>Monthly</button>
          <button onClick={()=>setInterval('yr')} className={`px-3 py-1 rounded ${interval==='yr'?'bg-gradient-cta text-neutral-900':'text-text-base hover:bg-neutral-bg'}`}>Yearly</button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(p => {
          const price = interval==='mo' ? p.monthly : p.yearly;
          const isSel = selected?.id === p.id;
          return (
            <div key={p.id} className={`rounded-xl ring-1 ring-white/10 bg-neutral-mid p-6 shadow-[0_8px_24px_rgba(0,0,0,0.25)] ${isSel?'outline outline-2 outline-accent':''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-text-base">{p.name}</h3>
                {p.id==='pro' && <span className="text-xs px-2 py-1 rounded-full bg-gradient-cta text-neutral-900">Most Popular</span>}
              </div>
              <div className="mt-2 text-3xl font-bold text-text-base">€{price}<span className="text-sm text-text-muted">/{interval==='mo'?'mo':'yr'}</span></div>
              <ul className="mt-4 space-y-2 text-sm text-text-base">
                {p.features.map(f => <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />{f}</li>)}
              </ul>
              <button onClick={()=>onSelect(p)} className="mt-6 w-full text-center bg-gradient-cta text-neutral-900 font-semibold py-2 rounded-md">
                {isSel ? 'Selected' : 'Select plan'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
