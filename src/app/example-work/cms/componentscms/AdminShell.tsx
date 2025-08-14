'use client';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import StatsCards from './StatsCards';
import ContentManager from './ContentManager';
import MediaLibrary from './MediaLibrary';
import UsersTable from './UsersTable';
import SettingsPanel from './SettingsPanel';
import AuditLog from './AuditLog';
import type { Post, MediaItem } from './types';

export type AdminUser = { name: string; email: string; role: 'admin' | 'editor' };

export default function AdminShell({ user, onLogout }: { user: AdminUser; onLogout: () => void }) {
  const [tab, setTab] = useState<'overview'|'content'|'media'|'users'|'settings'|'audit'>('overview');

  // demo state
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'Welcome post', status: 'published', author: 'Admin', date: '2025-07-01' },
    { id: 2, title: 'Roadmap Q3', status: 'draft', author: 'Editor', date: '2025-07-21' },
  ]);
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [users, setUsers] = useState<{ id: number; name: string; email: string; role: 'admin'|'editor'|'viewer'; status: 'active'|'suspended' }[]>([
    { id:1, name:'Alice Johnson', email:'alice@demo.dev', role:'admin', status:'active' },
    { id:2, name:'Bob Lee', email:'bob@demo.dev', role:'editor', status:'active' },
    { id:3, name:'Carla Gomez', email:'carla@demo.dev', role:'viewer', status:'suspended' },
  ]);
  const [settings, setSettings] = useState<{ siteTitle: string; theme: 'system'|'light'|'dark'; brand: string }>({
    siteTitle: 'CMS Demo',
    theme: 'system',
    brand: '#22d3ee',
  });
  const [audit, setAudit] = useState<{ time: string; message: string }[]>([
    { time: new Date().toISOString(), message: 'Signed in' },
  ]);

  const log = (message: string) => setAudit(a => [{ time: new Date().toISOString(), message }, ...a]);

  const tabs = useMemo(() => ([
    { key:'overview', label:'Overview' },
    { key:'content', label:'Content' },
    { key:'media', label:'Media' },
    { key:'users', label:'Users' },
    { key:'settings', label:'Settings' },
    { key:'audit', label:'Audit Log' },
  ] as const), []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6">
      {/* Sidebar */}
      <aside className="lg:sticky lg:top-[calc(var(--site-nav-h)+16px)] h-fit bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4">
        <div className="mb-4">
          <p className="text-sm text-text-muted">Signed in as</p>
          <p className="font-semibold text-text-base">{user.name}</p>
          <p className="text-xs text-text-muted">{user.email}</p>
          <span className={`inline-block mt-2 px-2 py-0.5 text-xs rounded ${user.role==='admin'?'bg-accent/20 text-accent':'bg-white/10 text-text-muted'}`}>{user.role}</span>
        </div>

        <nav className="space-y-1">
          {tabs.map(t => (
            <button key={t.key}
              onClick={()=>setTab(t.key as any)}
              className={`w-full text-left px-3 py-2 rounded-md transition ${tab===t.key?'bg-gradient-cta text-neutral-900':'hover:bg-neutral-bg text-text-base'}`}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <button onClick={onLogout} className="mt-4 w-full px-3 py-2 rounded-md ring-1 ring-white/10 text-text-base hover:bg-neutral-bg">
          Log out
        </button>
      </aside>

      {/* Main */}
      <section className="space-y-6">
        {/* Topbar */}
        <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4 flex items-center justify-between">
          <h2 id={tab} className="text-xl font-bold text-text-base capitalize">{tab.replace('-', ' ')}</h2>
          <div className="text-sm text-text-muted">Demo panel — no backend</div>
        </div>

        {tab === 'overview' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <StatsCards posts={posts.length} users={users.length} media={media.length} />
          </motion.div>
        )}

        {tab === 'content' && (
          <motion.div id="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <ContentManager
              posts={posts}
              onCreate={(title)=>{ const p={ id: Math.max(0,...posts.map(x=>x.id))+1, title, status:'draft' as const, author:user.name, date: new Date().toISOString().slice(0,10) }; setPosts([p,...posts]); log(`Created post "${title}"`); }}
              onUpdate={(id,data)=>{ setPosts(ps=>ps.map(p=>p.id===id?{...p,...data}:p)); log(`Updated post #${id}`); }}
              onDelete={(id)=>{ setPosts(ps=>ps.filter(p=>p.id!==id)); log(`Deleted post #${id}`); }}
            />
          </motion.div>
        )}

        {tab === 'media' && (
          <motion.div id="media" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <MediaLibrary
              items={media}
              onUpload={(files)=>{
                const mapped = Array.from(files).map((f,i)=>({ id: Math.max(0,...media.map(m=>m.id))+i+1, name: f.name, url: URL.createObjectURL(f), sizeKB: Math.round(f.size/1024)}));
                setMedia([...mapped, ...media]);
                log(`Uploaded ${mapped.length} files`);
              }}
              onRemove={(id)=>{ setMedia(ms=>ms.filter(m=>m.id!==id)); log(`Removed media #${id}`); }}
            />
          </motion.div>
        )}

        {tab === 'users' && (
          <motion.div id="users" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <UsersTable
              rows={users}
              canManage={user.role==='admin'}
              onAdd={(name,email)=>{ const id=Math.max(0,...users.map(u=>u.id))+1; setUsers([{ id, name, email, role:'viewer', status:'active' }, ...users]); log(`Added user ${name}`); }}
              onRemove={(id)=>{ setUsers(us=>us.filter(u=>u.id!==id)); log(`Removed user #${id}`); }}
              onRole={(id,role)=>{ setUsers(us=>us.map(u=>u.id===id?{...u,role}:u)); log(`Changed role for user #${id} -> ${role}`); }}
              onStatus={(id,status)=>{ setUsers(us=>us.map(u=>u.id===id?{...u,status}:u)); log(`Changed status for user #${id} -> ${status}`); }}
            />
          </motion.div>
        )}

        {tab === 'settings' && (
          <motion.div id="settings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <SettingsPanel
              settings={settings}
              onSave={(s)=>{ setSettings(s); log('Updated settings'); }}
            />
          </motion.div>
        )}

        {tab === 'audit' && (
          <motion.div id="audit" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <AuditLog items={audit} />
          </motion.div>
        )}
      </section>
    </div>
  );
}
