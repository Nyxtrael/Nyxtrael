'use client';
import { useState } from 'react';

export default function BillingPortal() {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState<'starter'|'pro'|'enterprise'>('pro');
  const [status, setStatus] = useState<'active'|'canceled'>('active');

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="rounded-xl ring-1 ring-white/10 bg-neutral-mid p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-text-base">Billing portal (Demo)</h3>
            <p className="text-sm text-text-muted">Change plan, cancel subscription, update payment method.</p>
          </div>
          <button onClick={()=>setOpen(true)} className="px-4 py-2 bg-gradient-cta text-neutral-900 rounded-md">Open portal</button>
        </div>

        {open && (
          <div className="fixed inset-0 z-30 grid place-items-center bg-black/50 p-4">
            <div className="w-full max-w-lg rounded-xl ring-1 ring-white/10 bg-neutral-bg p-5">
              <div className="flex items-start justify-between">
                <h4 className="text-lg font-semibold text-text-base">Manage subscription</h4>
                <button onClick={()=>setOpen(false)} className="text-text-muted hover:text-text-base">✕</button>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg ring-1 ring-white/10">
                  <div className="text-sm text-text-muted">Current plan</div>
                  <div className="text-xl font-semibold text-text-base capitalize">{plan}</div>
                  <div className="text-xs mt-1">Status: <span className="capitalize">{status}</span></div>
                </div>
                <div className="p-4 rounded-lg ring-1 ring-white/10">
                  <label className="block text-sm text-text-muted">Change plan</label>
                  <select value={plan} onChange={e=>setPlan(e.target.value as any)} className="mt-1 w-full bg-neutral-mid ring-1 ring-white/10 rounded px-2 py-2">
                    <option value="starter">Starter</option>
                    <option value="pro">Pro</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                  <button className="mt-3 px-3 py-2 bg-gradient-cta text-neutral-900 rounded-md w-full">Update plan</button>
                </div>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg ring-1 ring-white/10">
                  <label className="block text-sm text-text-muted">Payment method</label>
                  <input className="mt-1 w-full bg-neutral-mid ring-1 ring-white/10 rounded px-2 py-2" placeholder="•••• 4242 · 12/34" />
                  <button className="mt-3 px-3 py-2 ring-1 ring-white/10 rounded-md w-full">Update card</button>
                </div>
                <div className="p-4 rounded-lg ring-1 ring-white/10">
                  <label className="block text-sm text-text-muted">Cancel subscription</label>
                  <button onClick={()=>setStatus('canceled')} className="mt-1 px-3 py-2 rounded-md w-full text-red-300 hover:text-red-200 ring-1 ring-white/10">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
