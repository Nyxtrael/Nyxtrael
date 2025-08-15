'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LanguageSwitcher(){
  const params = useParams<{ lang: string }>();
  const lang = (params?.lang as string) || 'en';
  return (
    <div className="inline-flex bg-neutral-mid rounded-md p-1 ring-1 ring-white/10">
      <Link href="/example-work/seo-i18n/en" className={`px-3 py-1 rounded ${lang==='en'?'bg-gradient-cta text-neutral-900':'text-text-base hover:bg-neutral-bg'}`}>EN</Link>
      <Link href="/example-work/seo-i18n/pl" className={`px-3 py-1 rounded ${lang==='pl'?'bg-gradient-cta text-neutral-900':'text-text-base hover:bg-neutral-bg'}`}>PL</Link>
    </div>
  );
}
