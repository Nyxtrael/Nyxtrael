'use client';
import type { MediaItem } from './types';

export default function MediaLibrary({
  items, onUpload, onRemove
}:{
  items: MediaItem[];
  onUpload: (files: FileList) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-text-base">Media Library</h3>
        <label className="px-3 py-2 ring-1 ring-white/10 rounded-md cursor-pointer">
          <input type="file" multiple className="hidden" onChange={e=>{ if(e.target.files) onUpload(e.target.files); }} />
          Upload
        </label>
      </div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {items.map(m => (
          <li key={m.id} className="p-3 rounded-lg ring-1 ring-white/10 bg-neutral-bg">
            <div className="text-sm text-text-base truncate">{m.name}</div>
            <div className="text-xs text-text-muted">{m.sizeKB} KB</div>
            <button onClick={()=>onRemove(m.id)} className="mt-2 text-xs underline text-red-300 hover:text-red-200">Remove</button>
          </li>
        ))}
        {items.length===0 && <li className="text-sm text-text-muted">No media yet.</li>}
      </ul>
    </div>
  );
}
