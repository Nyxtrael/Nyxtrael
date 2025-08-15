'use client';
export default function SettingsPanel({
  settings, onSave
}:{ settings:{ siteTitle:string; theme:'system'|'light'|'dark'; brand:string }; onSave:(s:any)=>void }) {
  return (
    <form onSubmit={(e)=>{ e.preventDefault(); const fd=new FormData(e.currentTarget); onSave({
      siteTitle: String(fd.get('title')||''),
      theme: String(fd.get('theme')||'system'),
      brand: String(fd.get('brand')||'#22d3ee'),
    })}} className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4 space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-text-muted">Site title</label>
          <input name="title" defaultValue={settings.siteTitle} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
        </div>
        <div>
          <label className="block text-sm text-text-muted">Theme</label>
          <select name="theme" defaultValue={settings.theme} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-text-muted">Brand color</label>
          <input name="brand" type="color" defaultValue={settings.brand} className="w-28 h-10 p-1 rounded bg-neutral-bg ring-1 ring-white/10" />
        </div>
      </div>
      <button type="submit" className="px-4 py-2 bg-gradient-cta text-neutral-900 rounded-md font-semibold">Save settings</button>
    </form>
  );
}
