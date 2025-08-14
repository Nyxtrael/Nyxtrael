'use client';

import { useState } from 'react';
import HeroPayments from './componentspayments/HeroPayments';
import Plans, { Plan } from './componentspayments/Plans';
import CheckoutDemo from './componentspayments/CheckoutDemo';
import WebhookConsole, { WebhookEvent } from './componentspayments/WebhookConsole';
import BillingPortal from './componentspayments/BillingPortal';
import FAQPayments from './componentspayments/FAQPayments';

export default function PaymentsPage() {
  const [selected, setSelected] = useState<Plan | null>(null);
  const [events, setEvents] = useState<WebhookEvent[]>([]);

  return (
    <>
      <HeroPayments />
      <section id="overview" className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Built for subs', value: 'Stripe-like flow' },
            { label: 'Checkout', value: 'Hosted / Inline (demo)' },
            { label: 'Webhooks', value: 'Event log (mock)' },
          ].map((c) => (
            <div key={c.label} className="p-4 bg-neutral-mid rounded-lg ring-1 ring-white/10">
              <div className="text-sm text-text-muted">{c.label}</div>
              <div className="text-xl font-semibold text-text-base">{c.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="py-6">
        <Plans selected={selected} onSelect={setSelected} />
      </section>

      <section id="checkout" className="py-6">
        <CheckoutDemo
          plan={selected}
          onEvent={(e)=> setEvents(prev => [e, ...prev])}
        />
      </section>

      <section id="webhooks" className="py-6">
        <WebhookConsole items={events} />
      </section>

      <section id="billing" className="py-6">
        <BillingPortal />
      </section>

      <section id="faq" className="py-6">
        <FAQPayments />
      </section>
    </>
  );
}
