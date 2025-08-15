'use client';
import type { WebhookEvent } from './WebhookConsole';

export default function Receipts({ events }:{ events: WebhookEvent[] }) {
  const invoices = events.filter(e => e.type==='checkout.session.completed').map((e, idx) => ({
    id: e.id.slice(0,8).toUpperCase(),
    amount: e.payload.amount,
    currency: e.payload.currency || 'eur',
    plan: e.payload.plan,
    ts: e.ts,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="rounded-xl ring-1 ring-white/10 bg-neutral-mid p-6">
        <h3 className="text-xl font-semibold text-text-base mb-2">Receipts (mock)</h3>
        {invoices.length === 0 ? (
          <p className="text-text-muted text-sm">No receipts yet — finish a checkout.</p>
        ) : (
          <ul className="divide-y divide-white/5">
            {invoices.map(inv => (
              <li key={inv.id} className="py-3 flex items-center justify-between">
                <div>
                  <div className="text-text-base font-medium">INV-{inv.id}</div>
                  <div className="text-xs text-text-muted">{new Date(inv.ts).toLocaleString()} · Plan: {inv.plan}</div>
                </div>
                <div className="text-text-base font-semibold">€{Number(inv.amount).toFixed(2)}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
