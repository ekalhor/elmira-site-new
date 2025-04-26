'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function Layout({ children }) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isPortfolio = pathname.startsWith('/portfolio');
  const isBlog = pathname.startsWith('/blog');

  return (
    <main className="main">
      <nav className="menu-bar">
        {isHome && (
          <>
            <Link href="/portfolio">
              <button className="menu-button">Portfolio</button>
            </Link>
            <Link href="/blog">
              <button className="menu-button">Blog</button>
            </Link>
          </>
        )}
        {(isPortfolio || isBlog) && (
          <Link href="/">
            <button className="menu-button">Home</button>
          </Link>
        )}
      </nav>
      {children}
    </main>
  );
}
