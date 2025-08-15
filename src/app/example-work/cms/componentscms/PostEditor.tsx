'use client';
import { useEffect, useMemo, useState } from 'react';
import type { Post } from './types';

type Props = {
  post: Post | null;
  onSave: (post: Post) => void;
  onCreate: () => Post;
  canPublish: boolean;
};

export default function PostEditor({ post, onSave, onCreate, canPublish }: Props) {
  const [p, setP] = useState<Post | null>(post);
  useEffect(() => setP(post), [post]);

  const working = useMemo<Post>(() => {
    if (p) return p;
    const skel = onCreate();
    return skel;
  }, [p, onCreate]);

  const [preview, setPreview] = useState(false);

  const update = (patch: Partial<Post>) => {
    const next: Post = { ...working, ...patch, updatedAt: new Date().toISOString() };
    setP(next);
  };

  const save = () => {
    const version = (p?.version ?? 1) + 1;
    const hist = p?.history ?? [];
    const next: Post = {
      ...working,
      version,
      updatedAt: new Date().toISOString(),
      history: [
        { version, title: working.title, summary: working.summary, content: working.content, updatedAt: new Date().toISOString(), editor: 'You' },
        ...hist,
      ],
    };
    onSave(next);
  };

  const publishNow = () => onSave({ ...working, status: 'published', date: new Date().toISOString(), scheduleAt: undefined });
  const schedule = () => {
    if (!working.scheduleAt) return alert('Pick a schedule date/time first');
    onSave({ ...working, status: 'scheduled' });
  };

  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-base">{p ? `Editing: ${working.title}` : 'New Post'}</h3>
        <div className="flex items-center gap-2">
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={preview} onChange={e=>setPreview(e.target.checked)} className="accent-accent" />
            Preview
          </label>
          <button onClick={save} className="px-3 py-1.5 rounded-md bg-gradient-cta text-neutral-900 font-semibold">Save</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr,360px] gap-4">
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-text-muted">Title</label>
              <input value={working.title} onChange={e=>update({ title: e.target.value, slug: slugify(e.target.value) })} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
            </div>
            <div>
              <label className="block text-sm text-text-muted">Slug</label>
              <input value={working.slug} onChange={e=>update({ slug: e.target.value })} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 font-mono" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-text-muted">Summary</label>
            <textarea value={working.summary || ''} onChange={e=>update({ summary: e.target.value })} rows={3} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
          </div>

          <div>
            <label className="block text-sm text-text-muted">Content (Markdown)</label>
            <textarea value={working.content || ''} onChange={e=>update({ content: e.target.value })} rows={10} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 font-mono" />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-text-muted">Tags (comma separated)</label>
              <input
                value={(working.tags || []).join(', ')}
                onChange={e=>update({ tags: e.target.value.split(',').map(t=>t.trim()).filter(Boolean) })}
                className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10"
              />
            </div>
            <div>
              <label className="block text-sm text-text-muted">Schedule at (optional)</label>
              <input type="datetime-local" value={toLocalDT(working.scheduleAt)} onChange={e=>update({ scheduleAt: fromLocalDT(e.target.value) })} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-text-muted">SEO Title</label>
              <input value={working.seoTitle || ''} onChange={e=>update({ seoTitle: e.target.value })} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
            </div>
            <div>
              <label className="block text-sm text-text-muted">SEO Description</label>
              <input value={working.seoDesc || ''} onChange={e=>update({ seoDesc: e.target.value })} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="p-3 rounded-lg ring-1 ring-white/10 bg-neutral-bg">
            <div className="text-sm text-text-muted">Status</div>
            <div className="text-text-base font-semibold capitalize">{working.status}</div>
            <div className="text-xs text-text-muted">Updated: {new Date(working.updatedAt).toLocaleString()}</div>
            {working.status==='published' && <div className="text-xs text-text-muted">Published: {new Date(working.date).toLocaleString()}</div>}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {canPublish && <button onClick={publishNow} className="px-3 py-2 rounded-md bg-gradient-cta text-neutral-900 font-semibold">Publish now</button>}
            <button onClick={schedule} className="px-3 py-2 rounded-md ring-1 ring-white/10">Schedule</button>
          </div>

          <div className="p-3 rounded-lg ring-1 ring-white/10 bg-neutral-bg">
            <div className="text-sm font-semibold text-text-base mb-1">History</div>
            <ul className="space-y-2 max-h-48 overflow-y-auto">
              {(working.history || []).map(h => (
                <li key={h.version} className="text-xs text-text-muted">
                  <span className="text-text-base">v{h.version}</span> — {new Date(h.updatedAt).toLocaleString()} by {h.editor}
                </li>
              ))}
              {(working.history || []).length===0 && <li className="text-xs text-text-muted">No history yet.</li>}
            </ul>
          </div>

          {preview && (
            <div className="p-3 rounded-lg ring-1 ring-white/10 bg-neutral-bg">
              <div className="text-sm font-semibold text-text-base mb-1">Preview</div>
              <h4 className="text-lg font-bold text-text-base">{working.title}</h4>
              <p className="text-text-muted">{working.summary}</p>
              <div className="mt-2 whitespace-pre-wrap text-sm">{working.content}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function slugify(v: string) {
  return v.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-');
}
function toLocalDT(iso?: string) {
  if (!iso) return '';
  const d = new Date(iso);
  const off = d.getTimezoneOffset();
  const local = new Date(d.getTime() - off*60000);
  return local.toISOString().slice(0,16);
}
function fromLocalDT(local: string) {
  if (!local) return undefined;
  const d = new Date(local);
  const off = d.getTimezoneOffset();
  const utc = new Date(d.getTime() + off*60000);
  return utc.toISOString();
}
