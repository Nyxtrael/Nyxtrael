'use client';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import StatsCards from './StatsCards';
import ContentManager from './ContentManager';
import MediaLibrary from './MediaLibrary';
import UsersTable from './UsersTable';
import SettingsPanel from './SettingsPanel';
import AuditLog from './AuditLog';
import PostEditor from './PostEditor';
import WorkflowPanel from './WorkflowPanel';
import RolesMatrix from './RolesMatrix';
import ImportExport from './ImportExport';
import Toasts from './Toasts';
import type { Post, MediaItem } from './types';

export type AdminUser = { name: string; email: string; role: 'admin' | 'editor' };

export default function AdminShell({ user, onLogout }: { user: AdminUser; onLogout: () => void }) {
  const [tab, setTab] = useState<'overview'|'content'|'editor'|'workflow'|'media'|'users'|'settings'|'roles'|'data'|'audit'>('overview');

  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'Welcome post', slug: 'welcome-post', status: 'published', author: 'Admin', date: '2025-07-01', updatedAt: '2025-07-01T10:00:00.000Z', summary: 'First entry', content: 'Hello world', tags:['intro'], version:1, history: [] },
    { id: 2, title: 'Roadmap Q3', slug: 'roadmap-q3', status: 'draft', author: 'Editor', date: '2025-07-21', updatedAt: '2025-07-21T12:00:00.000Z', summary: 'Plans for Q3', content: '...', tags:['roadmap'], version:1, history: [] },
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
  const [toasts, setToasts] = useState<{ id: string; text: string }[]>([]);

  const [matrix, setMatrix] = useState<Record<string, { admin: boolean; editor: boolean; viewer: boolean }>>({
    'content.read': { admin:true, editor:true, viewer:true },
    'content.write': { admin:true, editor:true, viewer:false },
    'content.publish': { admin:true, editor:false, viewer:false },
    'media.manage': { admin:true, editor:true, viewer:false },
    'users.manage': { admin:true, editor:false, viewer:false },
    'settings.manage': { admin:true, editor:false, viewer:false },
  });

  const can = {
    publish: user.role==='admin' || matrix['content.publish'].editor,
    manageUsers: user.role==='admin',
    manageSettings: user.role==='admin',
    manageRoles: user.role==='admin',
  };

  const log = (message: string) => setAudit(a => [{ time: new Date().toISOString(), message }, ...a ]);
  const toast = (text: string) => setToasts(q => [{ id: Math.random().toString(36).slice(2), text }, ...q].slice(0,4));

  const tabs = useMemo(() => ([
    { key:'overview', label:'Overview' },
    { key:'content', label:'Content' },
    { key:'editor', label:'Editor' },
    { key:'workflow', label:'Workflow' },
    { key:'media', label:'Media' },
    ...(can.manageUsers ? [{ key:'users', label:'Users' } as const] : []),
    ...(can.manageSettings ? [{ key:'settings', label:'Settings' } as const] : []),
    ...(can.manageRoles ? [{ key:'roles', label:'Roles' } as const] : []),
    { key:'data', label:'Import/Export' },
    { key:'audit', label:'Audit Log' },
  ] as const), [can.manageUsers, can.manageSettings, can.manageRoles]);

  const [selectedId, setSelectedId] = useState<number | null>(posts[0]?.id ?? null);

  const createPost = (title: string) => {
    const id = Math.max(0, ...posts.map(p => p.id)) + 1;
    const now = new Date().toISOString();
    const p: Post = {
      id, title, slug: title.toLowerCase().replace(/\s+/g,'-'), status: 'draft',
      author: user.name, date: now.slice(0,10), updatedAt: now, tags: [], version: 1, history: []
    };
    setPosts(cur => [p, ...cur]);
    setSelectedId(p.id);
    log(`Created post "${title}"`);
    toast('Post created');
  };

  const createSkeleton = () => {
    const id = Math.max(0, ...posts.map(p => p.id)) + 1;
    const now = new Date().toISOString();
    const p: Post = {
      id, title: 'Untitled', slug: 'untitled-' + id, status: 'draft',
      author: user.name, date: now.slice(0,10), updatedAt: now, tags: [], version: 1, history: []
    };
    setPosts(cur => [p, ...cur]);
    setSelectedId(p.id);
    log('Created new draft');
    toast('Draft created');
    return p;
  };

  const updatePost = (id: number, data: Partial<Post>) => {
    setPosts(ps => ps.map(p => p.id===id ? { ...p, ...data, updatedAt: new Date().toISOString() } : p));
  };

  const savePost = (post: Post) => {
    setPosts(ps => ps.map(p => p.id===post.id ? post : p));
    log(`Saved post #${post.id}`);
    toast('Post saved');
  };

  const deletePost = (id:number) => {
    setPosts(ps => ps.filter(p => p.id !== id));
    if (selectedId === id) setSelectedId(null);
    log(`Deleted post #${id}`);
    toast('Post deleted');
  };

  const runScheduler = () => {
    const now = new Date();
    let count = 0;
    setPosts(ps => ps.map(p => {
      if (p.status === 'scheduled' && p.scheduleAt && new Date(p.scheduleAt) <= now) {
        count += 1;
        return { ...p, status: 'published', date: now.toISOString(), scheduleAt: undefined, updatedAt: now.toISOString() };
      }
      return p;
    }));
    if (count) { log(`Scheduler published ${count} post(s)`); toast(`Published ${count} scheduled post(s)`); }
    else { toast('No scheduled posts due'); }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px,1fr] gap-6">
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
      <section className="space-y-6 pb-16">
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
              onCreate={createPost}
              onUpdate={updatePost}
              onDelete={deletePost}
            />
          </motion.div>
        )}

        {tab === 'editor' && (
          <motion.div id="editor" className="space-y-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="flex items-center gap-2">
              <label className="text-sm text-text-muted">Select post</label>
              <select
                value={selectedId ?? ''}
                onChange={e=>setSelectedId(Number(e.target.value) || null)}
                className="px-2 py-1 rounded bg-neutral-mid text-text-base ring-1 ring-white/10"
              >
                <option value="">—</option>
                {posts.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
              </select>
            </div>
            <PostEditor
              post={posts.find(p=>p.id===selectedId) || null}
              onSave={savePost}
              onCreate={createSkeleton}
              canPublish={can.publish}
            />
          </motion.div>
        )}

        {tab === 'workflow' && (
          <motion.div id="workflow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <WorkflowPanel posts={posts} onUpdate={updatePost} onRunScheduler={runScheduler} />
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
                toast('Upload complete');
              }}
              onRemove={(id)=>{ setMedia(ms=>ms.filter(m=>m.id!==id)); log(`Removed media #${id}`); }}
            />
          </motion.div>
        )}

        {tab === 'users' && can.manageUsers && (
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

        {tab === 'settings' && can.manageSettings && (
          <motion.div id="settings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <SettingsPanel
              settings={settings}
              onSave={(s)=>{ setSettings(s); log('Updated settings'); toast('Settings saved'); }}
            />
          </motion.div>
        )}

        {tab === 'roles' && can.manageRoles && (
          <motion.div id="roles" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <RolesMatrix matrix={matrix} onChange={(m)=>{ setMatrix(m); log('Updated roles matrix'); toast('Roles updated'); }} />
          </motion.div>
        )}

        {tab === 'data' && (
          <motion.div id="data" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <ImportExport
              dump={{ posts, media, users, settings }}
              onImport={(d)=>{ setPosts(d.posts||[]); setMedia(d.media||[]); setUsers(d.users||[]); setSettings(d.settings||settings); log('Imported JSON state'); toast('State imported'); }}
              onSeed={()=>{
                const now = new Date().toISOString();
                setPosts([
                  { id: 101, title:'Sample Post', slug:'sample-post', status:'draft', author:user.name, date: now.slice(0,10), updatedAt: now, summary:'Example...', content:'# Hello', tags:['sample'], version:1, history:[] },
                  { id: 102, title:'Scheduled Post', slug:'scheduled-post', status:'scheduled', author:user.name, date: now.slice(0,10), updatedAt: now, summary:'Will publish', content:'Soon…', tags:['schedule'], scheduleAt: new Date(Date.now()+3600000).toISOString(), version:1, history:[] },
                ]);
                setMedia([]);
                setUsers([
                  { id:1, name:'Admin', email:'admin@demo.dev', role:'admin', status:'active' },
                  { id:2, name:'Editor', email:'editor@demo.dev', role:'editor', status:'active' },
                ]);
                log('Seeded demo content');
                toast('Seeded with sample content');
              }}
            />
          </motion.div>
        )}

        {tab === 'audit' && (
          <motion.div id="audit" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <AuditLog items={audit} />
          </motion.div>
        )}
      </section>

      <Toasts queue={toasts} />
    </div>
  );
}
