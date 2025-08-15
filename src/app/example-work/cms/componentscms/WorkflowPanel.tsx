'use client';
import type { Post } from './types';

export default function WorkflowPanel({
  posts, onUpdate, onRunScheduler
}:{
  posts: Post[];
  onUpdate: (id:number, patch: Partial<Post>)=>void;
  onRunScheduler: ()=>void;
}) {
  const lanes: Array<{ key: Post['status']; label: string }> = [
    { key: 'draft', label: 'Draft' },
    { key: 'scheduled', label: 'Scheduled' },
    { key: 'published', label: 'Published' },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {lanes.map(lane => (
        <div key={lane.key} className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-3">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-text-base">{lane.label}</h4>
            {lane.key==='scheduled' && <button onClick={onRunScheduler} className="text-xs px-2 py-1 rounded-md ring-1 ring-white/10 hover:bg-neutral-bg">Run scheduler</button>}
          </div>
          <ul className="space-y-2">
            {posts.filter(p=>p.status===lane.key).map(p => (
              <li key={p.id} className="p-3 rounded-lg ring-1 ring-white/10 bg-neutral-bg">
                <div className="font-medium text-text-base">{p.title}</div>
                <div className="text-xs text-text-muted">v{p.version} · updated {new Date(p.updatedAt).toLocaleString()}</div>
                <div className="mt-2 flex items-center gap-2">
                  {lane.key!=='draft' && <button onClick={()=>onUpdate(p.id, { status:'draft' })} className="text-xs underline text-text-muted hover:text-text-base">Move to Draft</button>}
                  {lane.key!=='scheduled' && <button onClick={()=>onUpdate(p.id, { status:'scheduled', scheduleAt: new Date(Date.now()+3600000).toISOString() })} className="text-xs underline text-text-muted hover:text-text-base">Schedule +1h</button>}
                  {lane.key!=='published' && <button onClick={()=>onUpdate(p.id, { status:'published', date: new Date().toISOString() })} className="text-xs underline text-accent">Publish now</button>}
                </div>
              </li>
            ))}
            {posts.filter(p=>p.status===lane.key).length===0 && (
              <li className="text-sm text-text-muted p-3">No items.</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
