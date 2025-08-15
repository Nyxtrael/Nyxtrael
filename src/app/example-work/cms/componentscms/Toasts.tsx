'use client';
import { useEffect, useState } from 'react';

type Toast = { id: string; text: string };

export default function Toasts({ queue }:{ queue: Toast[] }) {
  const [items, setItems] = useState<Toast[]>(queue);

  useEffect(() => setItems(queue), [queue]);

  useEffect(() => {
    const timers = items.map(t => setTimeout(() => {
      setItems(cur => cur.filter(x => x.id !== t.id));
    }, 2500));
    return () => { timers.forEach(clearTimeout); };
  }, [items]);

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {items.map(t => (
        <div key={t.id} className="px-4 py-2 rounded-lg bg-neutral-mid ring-1 ring-white/10 shadow">
          <span className="text-sm text-text-base">{t.text}</span>
        </div>
      ))}
    </div>
  );
}
