'use client';
import { useEffect, useState } from 'react';

export default function PresencePill() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const ch = new BroadcastChannel('nyxtrael-demo-presence');
    const id = Math.random().toString(36).slice(2);
    const ping = () => ch.postMessage({ type: 'ping', id });
    const onMsg = (e: MessageEvent) => {
      if (e.data?.type === 'ping') {
        // ignore self
      }
    };
    ch.addEventListener('message', onMsg);
    const iv = setInterval(ping, 1000);
    // naive presence = count tabs on same origin using visibility
    const update = () => {
      const tabs = Number(localStorage.getItem('demo_tabs') || '0');
      const next = document.visibilityState === 'visible' ? tabs + 1 : Math.max(1, tabs - 1);
      localStorage.setItem('demo_tabs', String(next));
      setCount(next);
    };
    update();
    const vis = () => update();
    document.addEventListener('visibilitychange', vis);
    return () => { clearInterval(iv); document.removeEventListener('visibilitychange', vis); };
  }, []);

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 text-sm">
      <span className="h-2 w-2 rounded-full bg-green-400" />
      <span className="text-text-base">{count} online</span>
    </span>
  );
}
