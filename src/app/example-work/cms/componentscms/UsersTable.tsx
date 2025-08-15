'use client';
export default function UsersTable({
  rows, canManage, onAdd, onRemove, onRole, onStatus
}:{
  rows: { id:number; name:string; email:string; role:'admin'|'editor'|'viewer'; status:'active'|'suspended' }[];
  canManage: boolean;
  onAdd: (name:string, email:string)=>void;
  onRemove: (id:number)=>void;
  onRole: (id:number, role:'admin'|'editor'|'viewer')=>void;
  onStatus: (id:number, status:'active'|'suspended')=>void;
}) {
  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4">
      {canManage && (
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <button onClick={()=>onAdd('New User','new@demo.dev')} className="px-3 py-2 bg-gradient-cta text-neutral-900 rounded-md font-semibold">Add user</button>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-text-muted border-b border-white/10">
              <th className="py-2 pr-3">Name</th>
              <th className="py-2 pr-3">Email</th>
              <th className="py-2 pr-3">Role</th>
              <th className="py-2 pr-3">Status</th>
              <th className="py-2 pr-3 w-48">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(u => (
              <tr key={u.id} className="border-b border-white/5">
                <td className="py-2 pr-3 text-text-base">{u.name}</td>
                <td className="py-2 pr-3 text-text-muted">{u.email}</td>
                <td className="py-2 pr-3">
                  <select value={u.role} onChange={e=>onRole(u.id, e.target.value as any)} className="px-2 py-1 rounded bg-neutral-bg text-text-base ring-1 ring-white/10">
                    <option>admin</option>
                    <option>editor</option>
                    <option>viewer</option>
                  </select>
                </td>
                <td className="py-2 pr-3">
                  <select value={u.status} onChange={e=>onStatus(u.id, e.target.value as any)} className="px-2 py-1 rounded bg-neutral-bg text-text-base ring-1 ring-white/10">
                    <option>active</option>
                    <option>suspended</option>
                  </select>
                </td>
                <td className="py-2 pr-3">
                  <div className="flex gap-2">
                    {canManage && <button onClick={()=>onRemove(u.id)} className="px-3 py-1 rounded text-red-300 hover:text-red-200">Remove</button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
