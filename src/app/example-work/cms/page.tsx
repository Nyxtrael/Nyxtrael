'use client';

import { useEffect, useState } from 'react';
import LoginPanel from './componentscms/LoginPanel';
import AdminShell, { AdminUser } from './componentscms/AdminShell';

export default function CMSPage() {
  const [user, setUser] = useState<AdminUser | null>(null);

  // Persist simple session in localStorage (demo only)
  useEffect(() => {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem('cms_demo_user') : null;
    if (raw) {
      try { setUser(JSON.parse(raw)); } catch {}
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (user) localStorage.setItem('cms_demo_user', JSON.stringify(user));
      else localStorage.removeItem('cms_demo_user');
    }
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {!user ? (
        <LoginPanel onLogin={(u) => setUser(u)} />
      ) : (
        <AdminShell user={user} onLogout={() => setUser(null)} />
      )}
    </div>
  );
}
