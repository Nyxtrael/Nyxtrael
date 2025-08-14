'use client';
import { useState } from 'react';
import type { Plan } from './Plans';

export type WebhookEvent = { id: string; type: string; payload: Record<string, any>; ts: number };

export default function CheckoutDemo({ plan, onEvent }:{ plan: Plan | null; onEvent: (e: WebhookEvent)=>void }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle'|'creating'|'redirecting'|'success'|'canceled'>('idle');

  const start = () => {
    if (!plan) { alert('Select a plan first'); return; }
    setOpen(true);
    setStatus('creating');
    // Simulate creating checkout session
    setTimeout(()=>{
      setStatus('redirecting');
      // Simulate completed payment
      setTimeout(()=>{
        setStatus('success');
        onEvent({ id: crypto.randomUUID?.() || String(Math.random()), type: 'checkout.session.completed', ts: Date.now(), payload: { plan: plan.id, amount: plan.monthly, currency: 'eur' } });
        onEvent({ id: crypto.randomUUID?.() || String(Math.random()), type: 'customer.subscription.created', ts: Date.now(), payload: { plan: plan.id, status: 'active' } });
      }, 1200);
    }, 900);
  };

  const cancel = () => {
    setStatus('canceled');
    onEvent({ id: crypto.randomUUID?.() || String(Math.random()), type: 'checkout.session.canceled', ts: Date.now(), payload: { reason: 'user_cancel' } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="rounded-xl ring-1 ring-white/10 bg-neutral-mid p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-text-base">Checkout (Demo)</h3>
            <p className="text-text-muted text-sm">Test card: <span className="font-mono">4242 4242 4242 4242</span>, any future date, any CVC.</p>
          </div>
          <button onClick={start} className="px-6 py-2 bg-gradient-cta text-neutral-900 font-semibold rounded-md">Start checkout</button>
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 z-30 grid place-items-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-xl ring-1 ring-white/10 bg-neutral-bg p-5">
              <div className="flex items-start justify-between">
                <h4 className="text-lg font-semibold text-text-base">Checkout — {plan?.name}</h4>
                <button onClick={()=>setOpen(false)} className="text-text-muted hover:text-text-base">✕</button>
              </div>
              <div className="mt-3 text-sm text-text-muted">
                {status==='creating'   && <p>Creating session…</p>}
                {status==='redirecting'&& <p>Redirecting to payment…</p>}
                {status==='success'    && <p className="text-accent">Payment succeeded! Subscription is active.</p>}
                {status==='canceled'   && <p className="text-yellow-400">Checkout canceled.</p>}
              </div>
              <div className="mt-4 flex items-center justify-end gap-2">
                {status==='idle' && <button onClick={()=>setOpen(false)} className="px-3 py-1 rounded ring-1 ring-white/10">Close</button>}
                {status==='creating' || status==='redirecting' ? (
                  <button className="px-3 py-1 rounded bg-neutral-mid text-text-muted" disabled>Processing…</button>
                ) : status==='success' ? (
                  <a href="/example-work/payments/success" className="px-3 py-1 rounded bg-gradient-cta text-neutral-900">Continue</a>
                ) : (
                  <button onClick={cancel} className="px-3 py-1 rounded ring-1 ring-white/10">Cancel</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
