'use client';
type Matrix = Record<string, { admin: boolean; editor: boolean; viewer: boolean }>;

export default function RolesMatrix({ matrix, onChange }:{ matrix: Matrix; onChange: (m: Matrix)=>void }) {
  const toggle = (perm: string, role: 'admin'|'editor'|'viewer') => {
    const next: Matrix = JSON.parse(JSON.stringify(matrix));
    next[perm][role] = !next[perm][role];
    onChange(next);
  };

  const perms = Object.keys(matrix);

  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-text-muted border-b border-white/10">
            <th className="py-2 pr-3">Permission</th>
            <th className="py-2 pr-3">Admin</th>
            <th className="py-2 pr-3">Editor</th>
            <th className="py-2 pr-3">Viewer</th>
          </tr>
        </thead>
        <tbody>
          {perms.map(p => (
            <tr key={p} className="border-b border-white/5">
              <td className="py-2 pr-3 text-text-base">{p}</td>
              {(['admin','editor','viewer'] as const).map(r => (
                <td key={r} className="py-2 pr-3">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" checked={matrix[p][r]} onChange={()=>toggle(p, r)} className="accent-accent" />
                    <span className="text-xs text-text-muted">allow</span>
                  </label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-text-muted mt-3">Demo only — enforce these rules in your API layer.</p>
    </div>
  );
}
