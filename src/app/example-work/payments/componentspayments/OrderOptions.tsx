'use client';
import { useEffect, useMemo, useState } from 'react';
import type { Plan } from './Plans';

type Summary = {
  interval: 'mo'|'yr';
  seats: number;
  addons: { analytics: boolean; support: boolean };
  coupon: string | null;
  trialDays: number;
  country: 'US'|'PL'|'DE';
  vatId?: string;
  vatValid: boolean;
  taxRate: number; // e.g. 0.23
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
};

function validateVAT(country: 'PL'|'DE', vatId?: string) {
  if (!vatId) return false;
  const clean = vatId.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  if (country==='PL') return /^PL?[0-9]{10}$/.test(clean);
  if (country==='DE') return /^DE?[0-9]{9}$/.test(clean);
  return false;
}

export default function OrderOptions({
  plan, basePrice, interval, onChange
}:{ plan: Plan | null; basePrice: number; interval:'mo'|'yr'; onChange:(s:Summary)=>void }) {
  const [seats, setSeats] = useState(1);
  const [analytics, setAnalytics] = useState(false);
  const [support, setSupport] = useState(false);
  const [coupon, setCoupon] = useState<string>('');
  const [trialDays, setTrialDays] = useState(0);
  const [country, setCountry] = useState<'US'|'PL'|'DE'>('PL');
  const [vatId, setVatId] = useState('');
  const vatValid = useMemo(()=>validateVAT(country==='US'?'PL':country, vatId) && country!=='US', [country, vatId]);

  const addonCost = (analytics?9:0) + (support?19:0) + Math.max(0, seats-1)*5;
  let subtotal = Math.max(0, (basePrice || 0) + addonCost);

  // coupons
  let discount = 0;
  const code = coupon.trim().toUpperCase();
  if (code === 'SAVE20') discount = Math.round(subtotal * 0.20 * 100) / 100;
  if (code === 'START50' && plan?.id==='starter') discount = Math.min(50, subtotal);
  if (code === 'TRY14') { /* handled in trial calc */ }
  // trial
  const trial = Math.max(trialDays, code==='TRY14' ? 14 : 0);

  const taxRate = country==='US' ? 0 : (country==='PL' ? 0.23 : 0.19);
  const taxable = vatValid ? 0 : (subtotal - discount);
  const tax = Math.round(taxable * taxRate * 100) / 100;
  const total = Math.max(0, Math.round((subtotal - discount + tax) * 100) / 100);

  useEffect(()=>{
    onChange({
      interval, seats, addons:{ analytics, support }, coupon: code||null,
      trialDays: trial, country, vatId, vatValid, taxRate,
      subtotal, discount, tax, total,
    });
  }, [interval, seats, analytics, support, code, trial, country, vatId, vatValid, taxRate, subtotal, discount, tax, total, onChange]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Add-ons */}
        <div className="rounded-xl ring-1 ring-white/10 bg-neutral-mid p-5">
          <h3 className="text-lg font-semibold text-text-base">Add-ons</h3>
          <div className="mt-3 space-y-3 text-sm">
            <label className="flex items-center justify-between gap-3">
              <span className="text-text-base">Extra seats</span>
              <div className="flex items-center gap-2">
                <input type="number" min={1} value={seats} onChange={e=>setSeats(parseInt(e.target.value || '1', 10))}
                  className="w-20 px-2 py-1 rounded bg-neutral-bg ring-1 ring-white/10 text-text-base"/>
                <span className="text-text-muted">€5 / seat</span>
              </div>
            </label>
            <label className="flex items-center justify-between gap-3">
              <span className="text-text-base">Analytics pack</span>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)} className="accent-accent"/>
                <span className="text-text-muted">€9 / mo</span>
              </div>
            </label>
            <label className="flex items-center justify-between gap-3">
              <span className="text-text-base">Priority support</span>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={support} onChange={e=>setSupport(e.target.checked)} className="accent-accent"/>
                <span className="text-text-muted">€19 / mo</span>
              </div>
            </label>
          </div>
        </div>

        {/* Discounts / Trial */}
        <div className="rounded-xl ring-1 ring-white/10 bg-neutral-mid p-5">
          <h3 className="text-lg font-semibold text-text-base">Discounts & Trial</h3>
          <div className="mt-3 space-y-3 text-sm">
            <label className="block">
              <span className="text-text-base">Coupon</span>
              <input value={coupon} onChange={e=>setCoupon(e.target.value)} placeholder="SAVE20 / START50 / TRY14"
                     className="mt-1 w-full px-3 py-2 rounded bg-neutral-bg ring-1 ring-white/10 text-text-base"/>
            </label>
            <label className="block">
              <span className="text-text-base">Trial days</span>
              <input type="number" min={0} max={30} value={trialDays} onChange={e=>setTrialDays(parseInt(e.target.value||'0', 10))}
                     className="mt-1 w-28 px-3 py-2 rounded bg-neutral-bg ring-1 ring-white/10 text-text-base"/>
            </label>
            <p className="text-xs text-text-muted">Code <span className="font-mono">TRY14</span> sets a 14-day trial.</p>
          </div>
        </div>

        {/* Taxes */}
        <div className="rounded-xl ring-1 ring-white/10 bg-neutral-mid p-5">
          <h3 className="text-lg font-semibold text-text-base">Tax & VAT</h3>
          <div className="mt-3 space-y-3 text-sm">
            <label className="block">
              <span className="text-text-base">Country</span>
              <select value={country} onChange={e=>setCountry(e.target.value as any)}
                className="mt-1 w-full px-3 py-2 rounded bg-neutral-bg ring-1 ring-white/10 text-text-base">
                <option value="PL">Poland (23%)</option>
                <option value="DE">Germany (19%)</option>
                <option value="US">United States (0%)</option>
              </select>
            </label>
            {country!=='US' && (
              <label className="block">
                <span className="text-text-base">VAT ID</span>
                <input value={vatId} onChange={e=>setVatId(e.target.value)} placeholder="PL1234567890 / DE123456789"
                       className="mt-1 w-full px-3 py-2 rounded bg-neutral-bg ring-1 ring-white/10 text-text-base"/>
                <span className={`text-xs ${vatId ? (vatValid?'text-accent':'text-yellow-400'):'text-text-muted'}`}>
                  {vatId ? (vatValid ? 'Valid VAT — reverse charge applied' : 'Format looks invalid (demo check)') : 'Optional'}
                </span>
              </label>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 rounded-xl ring-1 ring-white/10 bg-neutral-mid p-5">
        <h3 className="text-lg font-semibold text-text-base">Order summary</h3>
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          <div className="p-3 rounded ring-1 ring-white/10">
            <div className="text-text-muted">Plan price</div>
            <div className="text-text-base font-semibold">€{basePrice.toFixed(2)} / {interval}</div>
          </div>
          <div className="p-3 rounded ring-1 ring-white/10">
            <div className="text-text-muted">Add-ons</div>
            <div className="text-text-base font-semibold">€{((analytics?9:0) + (support?19:0) + Math.max(0, seats-1)*5).toFixed(2)}</div>
          </div>
          <div className="p-3 rounded ring-1 ring-white/10">
            <div className="text-text-muted">Discount</div>
            <div className="text-text-base font-semibold">
              −€{(() => {
                const code = (typeof window === 'undefined' ? '' : (document.querySelector('input[placeholder^=SAVE20]') as HTMLInputElement)?.value || '').toUpperCase();
                const subtotal = (basePrice || 0) + ((analytics?9:0) + (support?19:0) + Math.max(0, seats-1)*5);
                if (code==='SAVE20') return (subtotal*0.20).toFixed(2);
                if (code==='START50' && plan?.id==='starter') return Math.min(50, subtotal).toFixed(2);
                return '0.00';
              })()}
            </div>
          </div>
          <div className="p-3 rounded ring-1 ring-white/10">
            <div className="text-text-muted">Tax</div>
            <div className="text-text-base font-semibold">Calculated</div>
          </div>
        </div>
      </div>
    </div>
  );
}
