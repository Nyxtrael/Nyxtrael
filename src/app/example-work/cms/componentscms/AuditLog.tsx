export default function AuditLog({ items }:{ items:{ time:string; message:string }[] }) {
  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-text-muted border-b border-white/10">
            <th className="py-2 pr-3">Time</th>
            <th className="py-2 pr-3">Event</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i, idx) => (
            <tr key={idx} className="border-b border-white/5">
              <td className="py-2 pr-3 text-text-muted">{new Date(i.time).toLocaleString()}</td>
              <td className="py-2 pr-3 text-text-base">{i.message}</td>
            </tr>
          ))}
          {items.length === 0 && <tr><td colSpan={2} className="py-6 text-center text-text-muted">No audit entries yet.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
