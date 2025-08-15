export default function StatsCards({ posts, users, media }:{ posts:number; users:number; media:number }) {
  const items = [
    { t:'Posts', v: posts },
    { t:'Users', v: users },
    { t:'Media', v: media },
  ];
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {items.map(i => (
        <div key={i.t} className="p-4 rounded-lg ring-1 ring-white/10 bg-neutral-mid text-center">
          <div className="text-3xl font-bold text-text-base">{i.v}</div>
          <div className="text-sm text-text-muted">{i.t}</div>
        </div>
      ))}
    </div>
  );
}
