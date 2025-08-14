'use client';
import { useMemo, useState } from 'react';
import type { Post } from './types';

export default function ContentManager({
  posts, onCreate, onUpdate, onDelete,
}:{
  posts: Post[];
  onCreate: (title: string) => void;
  onUpdate: (id: number, data: Partial<Post>) => void;
  onDelete: (id: number) => void;
}) {
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'all'|'draft'|'published'>('all');
  const [title, setTitle] = useState('');

  const filtered = useMemo(()=>{
    return posts.filter(p =>
      (status==='all' || p.status===status) &&
      (q.trim()? p.title.toLowerCase().includes(q.toLowerCase()) : true)
    );
  }, [posts, q, status]);

  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4">
      {/* Create */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="New post title..." className="px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent flex-1 min-w-[220px]" />
        <button onClick={()=>{ if(title.trim()) { onCreate(title.trim()); setTitle(''); } }} className="px-4 py-2 bg-gradient-cta text-neutral-900 font-semibold rounded-md">Create</button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..." className="px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent" />
        <select value={status} onChange={e=>setStatus(e.target.value as any)} className="px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent">
          <option value="all">All</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-text-muted border-b border-white/10">
              <th className="py-2 pr-3">Title</th>
              <th className="py-2 pr-3">Status</th>
              <th className="py-2 pr-3">Author</th>
              <th className="py-2 pr-3">Date</th>
              <th className="py-2 pr-3 w-48">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id} className="border-b border-white/5">
                <td className="py-2 pr-3 text-text-base">
                  <input defaultValue={p.title} onBlur={e=>onUpdate(p.id, { title: e.target.value })} className="w-full bg-transparent ring-1 ring-transparent focus:ring-white/10 rounded px-1" />
                </td>
                <td className="py-2 pr-3">
                  <select defaultValue={p.status} onChange={e=>onUpdate(p.id, { status: e.target.value as any })} className="bg-neutral-bg text-text-base rounded px-2 py-1 ring-1 ring-white/10">
                    <option value="draft">draft</option>
                    <option value="published">published</option>
                  </select>
                </td>
                <td className="py-2 pr-3 text-text-muted">{p.author}</td>
                <td className="py-2 pr-3 text-text-muted">{p.date}</td>
                <td className="py-2 pr-3">
                  <div className="flex gap-2">
                    <button onClick={()=>onUpdate(p.id, { status: p.status==='draft'?'published':'draft' })} className="px-3 py-1 rounded ring-1 ring-white/10">{p.status==='draft'?'Publish':'Unpublish'}</button>
                    <button onClick={()=>onDelete(p.id)} className="px-3 py-1 rounded text-red-300 hover:text-red-200">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={5} className="py-6 text-center text-text-muted">No posts found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
