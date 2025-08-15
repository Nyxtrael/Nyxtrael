'use client';

import { useState } from 'react';
import LoginPanel from './componentscms/LoginPanel';
import AdminShell from './componentscms/AdminShell';

export default function CMSPage() {
  const [user, setUser] = useState<{ name: string; email: string; role: 'admin'|'editor' } | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {!user ? (
        <section aria-labelledby="login">
          <h1 id="login" className="sr-only">Login</h1>
          <LoginPanel onSuccess={(u)=>setUser(u)} />
        </section>
      ) : (
        <section aria-labelledby="cms">
          <h1 id="cms" className="sr-only">CMS</h1>
          <AdminShell user={user} onLogout={()=>setUser(null)} />
        </section>
      )}
    </div>
  );
}
