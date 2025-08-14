'use client';
import { useEffect, useRef, useState } from 'react';

type Msg = { id: string; user: string; text: string; ts: number; system?: boolean };
type Typing = { user: string; ts: number };

const CH = typeof window !== 'undefined' ? new BroadcastChannel('nyxtrael-demo-chat') : null;

export default function ChatRoom() {
  const [name, setName] = useState<string>('Guest');
  const [messages, setMessages] = useState<Msg[]>([
    { id: 'm1', user: 'System', text: 'Welcome to the realtime demo 👋', ts: Date.now(), system: true },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState<Typing[]>([]);
  const listRef = useRef<HTMLDivElement | null>(null);
  const typingTimeout = useRef<number | null>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  // Listen for broadcast events
  useEffect(() => {
    if (!CH) return;
    const onMsg = (e: MessageEvent) => {
      const { type, payload } = e.data || {};
      if (type === 'message') setMessages(m => [...m, payload as Msg]);
      if (type === 'typing') {
        setTyping(t => {
          const others = t.filter(x => x.user !== payload.user);
          return [...others, { user: payload.user, ts: Date.now() }];
        });
      }
      if (type === 'presence-join') {
        setMessages(m => [...m, { id: crypto.randomUUID?.() || Math.random().toString(), user: 'System', text: `${payload.user} joined`, ts: Date.now(), system: true }]);
      }
    };
    CH.addEventListener('message', onMsg);
    // announce presence
    CH.postMessage({ type: 'presence-join', payload: { user: name } });
    return () => CH.removeEventListener('message', onMsg);
  }, [name]);

  // Cleanup typing indicators
  useEffect(() => {
    const iv = setInterval(() => {
      const now = Date.now();
      setTyping(t => t.filter(x => now - x.ts < 1500));
    }, 500);
    return () => clearInterval(iv);
  }, []);

  const send = (text: string) => {
    const msg: Msg = { id: crypto.randomUUID?.() || Math.random().toString(), user: name || 'Guest', text, ts: Date.now() };
    setMessages(m => [...m, msg]);
    CH?.postMessage({ type: 'message', payload: msg });
    // Simulated bot reply
    setTimeout(() => {
      const bot: Msg = { id: crypto.randomUUID?.() || Math.random().toString(), user: 'NyxtraelBot', text: replyTo(text), ts: Date.now() };
      setMessages(m => [...m, bot]);
      CH?.postMessage({ type: 'message', payload: bot });
      // Try to notify
      if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
        new Notification('NyxtraelBot', { body: bot.text });
      }
    }, 900 + Math.random() * 800);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      send(input.trim());
      setInput('');
    } else {
      // typing signal
      if (typingTimeout.current) window.clearTimeout(typingTimeout.current);
      CH?.postMessage({ type: 'typing', payload: { user: name || 'Guest' } });
      typingTimeout.current = window.setTimeout(() => {}, 1200);
    }
  };

  return (
    <div className="rounded-xl ring-1 ring-white/10 bg-neutral-mid p-4">
      <div className="flex items-center gap-2 mb-3">
        <label className="text-sm text-text-muted">Your name</label>
        <input value={name} onChange={e=>setName(e.target.value)} className="px-2 py-1 rounded bg-neutral-bg text-text-base ring-1 ring-white/10" placeholder="Your name" />
      </div>

      <div ref={listRef} className="h-[320px] overflow-y-auto rounded-lg bg-neutral-bg ring-1 ring-white/10 p-3 space-y-2">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.user===name ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] px-3 py-2 rounded-lg text-sm ${m.system ? 'bg-neutral-mid text-text-muted' : (m.user===name ? 'bg-gradient-cta text-neutral-900' : 'bg-white/5 text-text-base')}`}>
              {!m.system && <div className="text-[11px] opacity-75 mb-0.5">{m.user}</div>}
              <div>{m.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="Type a message and press Enter…"
          className="flex-1 px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent"
        />
        <button
          onClick={()=>{ if(input.trim()) { send(input.trim()); setInput(''); } }}
          className="px-4 py-2 bg-gradient-cta text-neutral-900 rounded-md font-semibold"
        >
          Send
        </button>
      </div>

      <div className="h-6 mt-1 text-xs text-text-muted">
        {typing.filter(t=>t.user!==name).length > 0 && <span>Someone is typing…</span>}
      </div>
    </div>
  );
}

function replyTo(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('cześć')) return 'Hi there! How can I help?';
  if (lower.includes('price') || lower.includes('cena')) return 'Check our Pricing page — we have monthly & yearly plans.';
  if (lower.includes('email')) return 'Drop your email and I will follow up.';
  return 'Got it! (This is a simulated reply.)';
}
