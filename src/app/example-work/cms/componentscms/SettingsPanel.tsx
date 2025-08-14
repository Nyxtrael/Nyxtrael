'use client';
export default function SettingsPanel({ settings, onSave }:{ settings:{ siteTitle:string; theme:'system'|'light'|'dark'; brand:string }; onSave:(s:{ siteTitle:string; theme:'system'|'light'|'dark'; brand:string })=>void }) {
  return (
    <form onSubmit={(e)=>{ e.preventDefault(); onSave(settings); }} className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4 space-y-3">
      <div>
        <label className="block text-sm text-text-muted">Site Title</label>
        <input value={settings.siteTitle} onChange={e=>onSave({ ...settings, siteTitle:e.target.value })} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
      </div>
      <div className="flex gap-3">
        <div className="flex-1">
          <label className="block text-sm text-text-muted">Theme</label>
          <select value={settings.theme} onChange={e=>onSave({ ...settings, theme:e.target.value as any })} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm text-text-muted">Brand Color</label>
          <input type="color" value={settings.brand} onChange={e=>onSave({ ...settings, brand:e.target.value })} className="w-full h-[42px] rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 p-1" />
        </div>
      </div>
      <button className="px-4 py-2 bg-gradient-cta text-neutral-900 rounded-md font-semibold">Save</button>
      <p className="text-xs text-text-muted">Demo only — persist settings to DB in a real app.</p>
    </form>
  );
}
