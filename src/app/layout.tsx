import type { Metadata } from 'next';
import "../styles/globals.css";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NyxCorp - Modern Web Solutions',
  description: 'Professional front-end development specializing in sleek, high-performance web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}