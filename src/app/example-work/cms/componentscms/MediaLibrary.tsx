'use client';
import type { MediaItem } from './types';

export default function MediaLibrary({ items, onUpload, onRemove }:{ items:MediaItem[]; onUpload:(files: FileList)=>void; onRemove:(id:number)=>void; }) {
  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-text-base">Upload</h3>
        <input type="file" multiple onChange={e=>{ if(e.target.files) onUpload(e.target.files); }} className="text-sm" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map(m => (
          <div key={m.id} className="bg-neutral-bg rounded-lg ring-1 ring-white/10 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.url} alt={m.name} className="w-full h-32 object-cover" />
            <div className="p-2 text-xs text-text-base flex items-center justify-between">
              <span className="truncate max-w-[70%]" title={m.name}>{m.name}</span>
              <span className="text-text-muted">{m.sizeKB} KB</span>
            </div>
            <button onClick={()=>onRemove(m.id)} className="w-full text-sm py-1 text-red-300 hover:text-red-200">Remove</button>
          </div>
        ))}
        {items.length === 0 && <div className="text-text-muted">No media uploaded yet.</div>}
      </div>
    </div>
  );
}
