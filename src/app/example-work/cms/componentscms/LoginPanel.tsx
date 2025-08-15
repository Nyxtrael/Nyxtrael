'use client';
import { useState } from 'react';

export default function LoginPanel({ onSuccess }:{ onSuccess:(u:{ name:string; email:string; role:'admin'|'editor'})=>void }) {
  const [email, setEmail] = useState('admin@demo.dev');
  const [password, setPassword] = useState('demo123');
  const [role, setRole] = useState<'admin'|'editor'>('admin');
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || password.length < 3) return setError('Invalid credentials (demo)');
    onSuccess({ name: role==='admin'?'Admin':'Editor', email, role });
  };

  return (
    <div className="max-w-md mx-auto bg-neutral-mid rounded-xl ring-1 ring-white/10 p-6">
      <h2 className="text-2xl font-bold text-text-base mb-2">CMS Login (Demo)</h2>
      <p className="text-sm text-text-muted mb-4">Use any email + password. Choose role to see permissions.</p>
      {error && <p className="text-sm text-red-400 mb-2">{error}</p>}
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-sm text-text-muted">Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
        </div>
        <div>
          <label className="block text-sm text-text-muted">Password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
        </div>
        <div>
          <label className="block text-sm text-text-muted">Role</label>
          <select value={role} onChange={e=>setRole(e.target.value as any)} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10">
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-gradient-cta text-neutral-900 rounded-md font-semibold">Sign in</button>
      </form>
    </div>
  );
}
