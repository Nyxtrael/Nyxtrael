import { redirect } from 'next/navigation';

// Index for SEO + i18n Showcase
// Redirects to the default locale (EN)
export default function Page() {
  redirect('/example-work/seo-i18n/en');
}
