'use client';
import { useMemo, useState } from 'react';

type Row = { id: number; name: string; email: string; role: 'admin'|'editor'|'viewer'; status: 'active'|'suspended' };

export default function UsersTable({
  rows, canManage, onAdd, onRemove, onRole, onStatus
}:{
  rows: Row[];
  canManage: boolean;
  onAdd: (name:string, email:string)=>void;
  onRemove: (id:number)=>void;
  onRole: (id:number, role:Row['role'])=>void;
  onStatus: (id:number, status:Row['status'])=>void;
}) {
  const [q, setQ] = useState('');
  const [sort, setSort] = useState<'name'|'email'>('name');

  const filtered = useMemo(() => {
    const res = rows.filter(r => (r.name.toLowerCase().includes(q.toLowerCase()) || r.email.toLowerCase().includes(q.toLowerCase())));
    return [...res].sort((a,b)=> sort==='name' ? a.name.localeCompare(b.name) : a.email.localeCompare(b.email));
  }, [rows, q, sort]);

  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4">
      <div className="flex flex-wrap items-center gap-3 justify-between mb-3">
        <div className="flex gap-2">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search users..." className="px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent" />
          <select value={sort} onChange={e=>setSort(e.target.value as any)} className="px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent">
            <option value="name">Sort by name</option>
            <option value="email">Sort by email</option>
          </select>
        </div>
        {canManage && <AddUser onAdd={onAdd} />}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-text-muted border-b border-white/10">
              <th className="py-2 pr-3">Name</th>
              <th className="py-2 pr-3">Email</th>
              <th className="py-2 pr-3">Role</th>
              <th className="py-2 pr-3">Status</th>
              <th className="py-2 pr-3 w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id} className="border-b border-white/5">
                <td className="py-2 pr-3 text-text-base">{r.name}</td>
                <td className="py-2 pr-3 text-text-muted">{r.email}</td>
                <td className="py-2 pr-3">
                  <select value={r.role} onChange={e=>onRole(r.id, e.target.value as any)} className="bg-neutral-bg text-text-base rounded px-2 py-1 ring-1 ring-white/10">
                    <option value="admin">admin</option>
                    <option value="editor">editor</option>
                    <option value="viewer">viewer</option>
                  </select>
                </td>
                <td className="py-2 pr-3">
                  <select value={r.status} onChange={e=>onStatus(r.id, e.target.value as any)} className="bg-neutral-bg text-text-base rounded px-2 py-1 ring-1 ring-white/10">
                    <option value="active">active</option>
                    <option value="suspended">suspended</option>
                  </select>
                </td>
                <td className="py-2 pr-3">
                  {canManage ? (
                    <button onClick={()=>onRemove(r.id)} className="px-3 py-1 rounded text-red-300 hover:text-red-200">Remove</button>
                  ) : <span className="text-text-muted">—</span>}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={5} className="py-6 text-center text-text-muted">No users found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AddUser({ onAdd }:{ onAdd:(name:string,email:string)=>void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div className="flex gap-2">
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
      <button onClick={()=>{ if(name && email) { onAdd(name,email); setName(''); setEmail(''); } }} className="px-3 py-2 bg-gradient-cta text-neutral-900 rounded-md">Add</button>
    </div>
  );
}
