export default function AuditLog({ items }:{ items:{ time:string; message:string }[] }) {
  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4">
      <h3 className="text-lg font-semibold text-text-base mb-2">Audit log</h3>
      <ul className="space-y-2">
        {items.map((e,i)=>(
          <li key={i} className="text-sm text-text-muted">
            <span className="text-text-base">{new Date(e.time).toLocaleString()}</span> — {e.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
