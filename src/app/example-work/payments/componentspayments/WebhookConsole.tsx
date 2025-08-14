'use client';
export type WebhookEvent = { id: string; type: string; payload: Record<string, any>; ts: number };

export default function WebhookConsole({ items }:{ items:WebhookEvent[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="rounded-xl ring-1 ring-white/10 bg-neutral-mid p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-text-base">Webhook events (mock)</h3>
          <span className="text-xs text-text-muted">{items.length} events</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-text-muted border-b border-white/10">
                <th className="py-2 pr-3">Time</th>
                <th className="py-2 pr-3">Type</th>
                <th className="py-2 pr-3">Payload</th>
              </tr>
            </thead>
            <tbody>
              {items.map(e => (
                <tr key={e.id} className="border-b border-white/5">
                  <td className="py-2 pr-3 text-text-muted">{new Date(e.ts).toLocaleTimeString()}</td>
                  <td className="py-2 pr-3 text-text-base">{e.type}</td>
                  <td className="py-2 pr-3 text-xs">
                    <pre className="whitespace-pre-wrap text-text-muted">{JSON.stringify(e.payload, null, 2)}</pre>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr><td colSpan={3} className="py-6 text-center text-text-muted">No events yet — complete a demo checkout.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
