'use client';
import type { Post, MediaItem } from './types';

type StateDump = {
  posts: Post[];
  media: MediaItem[];
  users: { id: number; name: string; email: string; role: 'admin'|'editor'|'viewer'; status: 'active'|'suspended' }[];
  settings: { siteTitle: string; theme: 'system'|'light'|'dark'; brand: string };
};

export default function ImportExport({
  dump, onImport, onSeed
}:{ dump: StateDump; onImport:(d:StateDump)=>void; onSeed:()=>void }) {
  const download = () => {
    const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cms-demo-export.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const openFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(String(reader.result));
          onImport(json);
        } catch (e) {
          alert('Invalid JSON');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-base">Import / Export</h3>
        <div className="text-sm text-text-muted">Demo state only</div>
      </div>
      <div className="flex flex-wrap gap-2">
        <button onClick={download} className="px-4 py-2 bg-gradient-cta text-neutral-900 rounded-md font-semibold">Export JSON</button>
        <button onClick={openFile} className="px-4 py-2 ring-1 ring-white/10 rounded-md text-text-base">Import JSON</button>
        <button onClick={onSeed} className="px-4 py-2 ring-1 ring-white/10 rounded-md text-text-base">Seed sample content</button>
      </div>
      <p className="text-xs text-text-muted">In production, connect to a database and use server actions/APIs.</p>
    </div>
  );
}
