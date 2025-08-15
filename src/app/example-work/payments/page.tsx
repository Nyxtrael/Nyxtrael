'use client';

import { useMemo, useState } from 'react';
import HeroPayments from './componentspayments/HeroPayments';
import Plans, { Plan } from './componentspayments/Plans';
import CheckoutDemo from './componentspayments/CheckoutDemo';
import WebhookConsole, { WebhookEvent } from './componentspayments/WebhookConsole';
import BillingPortal from './componentspayments/BillingPortal';
import FAQPayments from './componentspayments/FAQPayments';
import OrderOptions from './componentspayments/OrderOptions';
import Receipts from './componentspayments/Receipts';

export default function PaymentsPage() {
  const [selected, setSelected] = useState<Plan | null>(null);
  const [price, setPrice] = useState<number>(0);
  const [interval, setInterval] = useState<'mo'|'yr'>('mo');
  const [events, setEvents] = useState<WebhookEvent[]>([]);
  const [summary, setSummary] = useState<any | null>(null);

  const adjustedPlan = useMemo<Plan | null>(()=> selected ? ({ ...selected, monthly: Number((summary?.total ?? price).toFixed(2)), yearly: selected.yearly }) : null, [selected, summary, price]);

  return (
    <>
      <HeroPayments />

      <section id="overview" className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4">
          {['Subscriptions','Checkout','Webhooks'].map((label) => (
            <div key={label} className="p-4 bg-neutral-mid rounded-lg ring-1 ring-white/10">
              <div className="text-sm text-text-muted">Capability</div>
              <div className="text-xl font-semibold text-text-base">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="py-6">
        <Plans
          selected={selected}
          onSelect={setSelected}
          onPrice={(p, i)=>{ setPrice(p); setInterval(i); }}
        />
      </section>

      <section id="config" className="py-6">
        <OrderOptions
          plan={selected}
          basePrice={price}
          interval={interval}
          onChange={setSummary}
        />
      </section>

      <section id="checkout" className="py-6">
        <CheckoutDemo
          plan={adjustedPlan}
          onEvent={(e)=> setEvents(prev => [e, ...prev])}
        />
      </section>

      <section id="webhooks" className="py-6">
        <WebhookConsole items={events} />
      </section>

      <section id="billing" className="py-6">
        <BillingPortal />
      </section>

      <section id="receipts" className="py-6">
        <Receipts events={events} />
      </section>

      <section id="faq" className="py-6">
        <FAQPayments />
      </section>
    </>
  );
}
