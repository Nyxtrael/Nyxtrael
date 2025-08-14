'use client';

import ChatRoom from './componentsrealtime/ChatRoom';
import PresencePill from './componentsrealtime/PresencePill';
import NotificationBell from './componentsrealtime/NotificationBell';

export default function RealtimePage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] grid place-items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]" />
        <div className="relative z-10 space-y-3 px-6">
          <p className="uppercase tracking-widest text-accent/90 text-xs">Demo • Realtime</p>
          <h1 className="text-5xl font-serif font-bold text-text-base">Chat, Presence & Notifications</h1>
          <p className="text-text-muted">BroadcastChannel, typing indicators, and desktop notifications — no backend required.</p>
          <a href="#demo" className="inline-block mt-2 px-6 py-3 bg-gradient-cta text-neutral-900 font-semibold rounded-md">Open chat</a>
        </div>
      </section>

      <section id="demo" className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-3">
          <PresencePill />
          <NotificationBell />
        </div>
        <ChatRoom />
      </section>

      <section id="faq" className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-text-base mb-3">FAQ</h3>
        <ul className="space-y-3">
          <li className="p-4 bg-neutral-mid rounded-lg ring-1 ring-white/10">
            <p className="font-semibold text-text-base">Is this a real socket server?</p>
            <p className="text-sm text-text-muted">This demo uses <code>BroadcastChannel</code> to sync across tabs and a simulated bot. In production you would use WebSockets/SSE/Ably/Pusher.</p>
          </li>
          <li className="p-4 bg-neutral-mid rounded-lg ring-1 ring-white/10">
            <p className="font-semibold text-text-base">Are notifications real?</p>
            <p className="text-sm text-text-muted">Yes — the browser Notification API. Click the bell to grant permission.</p>
          </li>
        </ul>
      </section>
    </>
  );
}
