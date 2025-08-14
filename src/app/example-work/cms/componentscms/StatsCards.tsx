export default function StatsCards({ posts, users, media }:{ posts:number; users:number; media:number; }) {
  const cards = [
    { title:'Posts', value:String(posts), delta:'+2 this week' },
    { title:'Users', value:String(users), delta:'+1 today' },
    { title:'Media items', value:String(media), delta:'+5 this month' },
    { title:'Uptime', value:'99.98%', delta:'+0.01%' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map(c => (
        <div key={c.title} className="p-4 bg-neutral-mid rounded-xl ring-1 ring-white/10">
          <div className="text-sm text-text-muted">{c.title}</div>
          <div className="mt-1 text-2xl font-bold text-text-base">{c.value}</div>
          <div className="text-xs text-accent">{c.delta}</div>
        </div>
      ))}
    </div>
  );
}
