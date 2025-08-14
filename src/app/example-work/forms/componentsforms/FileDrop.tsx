'use client';
import { useCallback, useRef, useState } from 'react';

export type FileItem = { id: string; file: File; preview?: string };

export default function FileDrop({ value, onChange }:{ value: FileItem[]; onChange:(v: FileItem[])=>void }) {
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const arr = Array.from(files).slice(0, 10); // safety
    const next: FileItem[] = arr.map((f) => ({
      id: crypto.randomUUID?.() || String(Math.random()),
      file: f,
      preview: f.type.startsWith('image/') ? URL.createObjectURL(f) : undefined,
    }));
    onChange([ ...value, ...next ]);
  }, [value, onChange]);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    addFiles(e.dataTransfer.files);
  };

  return (
    <div
      onDragOver={(e)=>{ e.preventDefault(); setDrag(true); }}
      onDragLeave={()=>setDrag(false)}
      onDrop={onDrop}
      className={`p-4 rounded-lg ring-2 ${drag ? 'ring-accent' : 'ring-white/10'} bg-neutral-mid text-center cursor-pointer`}
      onClick={()=>inputRef.current?.click()}
      role="button"
      aria-label="Upload files"
      tabIndex={0}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e)=>addFiles(e.target.files)}
        accept=".png,.jpg,.jpeg,.webp,.pdf,.zip,.doc,.docx"
      />
      <p className="text-text-base font-medium">Drag & drop files here, or click to browse</p>
      <p className="text-xs text-text-muted">Images, PDF, ZIP — up to 10 files (each &lt; 10MB).</p>

      {value.length > 0 && (
        <ul className="text-left mt-3 grid sm:grid-cols-2 gap-3">
          {value.map(item => (
            <li key={item.id} className="flex items-center gap-3 p-2 rounded bg-neutral-bg ring-1 ring-white/10">
              {item.preview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.preview} alt={item.file.name} className="h-12 w-12 object-cover rounded" />
              ) : (
                <div className="h-12 w-12 rounded grid place-items-center bg-neutral-mid text-xs">FILE</div>
              )}
              <div className="flex-1 min-w-0">
                <div className="truncate text-sm text-text-base">{item.file.name}</div>
                <div className="text-xs text-text-muted">{(item.file.size/1024/1024).toFixed(2)} MB</div>
              </div>
              <button
                className="text-xs underline text-text-muted hover:text-accent"
                onClick={(e)=>{ e.stopPropagation(); onChange(value.filter(v => v.id !== item.id)); }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
