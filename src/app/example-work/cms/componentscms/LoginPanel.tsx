'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

type Props = { onLogin: (u: { name: string; email: string; role: 'admin' | 'editor' }) => void };

export default function LoginPanel({ onLogin }: Props) {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('admin@demo.dev');
  const [password, setPassword] = useState('demo123');
  const [role, setRole] = useState<'admin' | 'editor'>('admin');
  const [error, setError] = useState<string | null>(null);
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password || (tab === 'register' && !name)) {
      setError('Please fill in all required fields.');
      return;
    }
    // Simple credential check (demo only)
    if (tab === 'login' && !(email === 'admin@demo.dev' && password === 'demo123')) {
      setError('Invalid demo credentials. Use admin@demo.dev / demo123');
      return;
    }
    onLogin({ name: name || 'Demo Admin', email, role });
  };

  const copyCreds = () => {
    navigator.clipboard?.writeText('admin@demo.dev / demo123');
  };

  return (
    <motion.section
      className="mx-auto max-w-2xl bg-neutral-mid rounded-2xl ring-1 ring-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 border-b border-white/10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text-base">Secure Portal</h1>
        <div className="inline-flex bg-neutral-bg rounded-md p-1 ring-1 ring-white/10">
          <button onClick={()=>setTab('login')} className={`px-3 py-1 rounded ${tab==='login'?'bg-gradient-cta text-neutral-900':'text-text-base hover:bg-neutral-mid'}`}>Login</button>
          <button onClick={()=>setTab('register')} className={`px-3 py-1 rounded ${tab==='register'?'bg-gradient-cta text-neutral-900':'text-text-base hover:bg-neutral-mid'}`}>Register</button>
        </div>
      </div>

      <div className="px-6 pt-4 text-sm text-text-muted">
        <div className="flex items-center justify-between bg-neutral-bg rounded-md p-3 ring-1 ring-white/10">
          <span>Demo credentials: <strong className="text-text-base">admin@demo.dev / demo123</strong></span>
          <button onClick={copyCreds} className="text-accent hover:opacity-90">Copy</button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-3">
        {tab === 'register' && (
          <div>
            <label className="block text-sm text-text-muted">Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent" placeholder="Your name" />
          </div>
        )}
        <div>
          <label className="block text-sm text-text-muted">Email</label>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm text-text-muted">Password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent" placeholder="••••••••" />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="inline-flex items-center gap-2 text-sm text-text-muted">
            <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} className="accent-accent" />
            Remember me
          </label>

          <div className="ml-auto text-sm">
            <span className="text-text-muted mr-2">Role:</span>
            <select value={role} onChange={e=>setRole(e.target.value as any)} className="px-2 py-1 rounded bg-neutral-bg text-text-base ring-1 ring-white/10">
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
          </div>
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <div className="flex items-center justify-between pt-2">
          <button type="submit" className="px-5 py-2.5 bg-gradient-cta text-neutral-900 font-semibold rounded-md hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)]">
            {tab === 'login' ? 'Sign in' : 'Create account'}
          </button>
          <button type="button" className="text-sm underline text-text-muted hover:text-accent">Forgot password?</button>
        </div>
      </form>

      <div className="px-6 pb-6 text-xs text-text-muted">
        Demo only — no real authentication wired. Replace with NextAuth / Auth.js / custom API.
      </div>
    </motion.section>
  );
}
