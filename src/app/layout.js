// src/app/layout.js

import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Elmira Kalhor',
  description: 'Quantitative Researcher | Data Science & Machine Learning',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="menu-bar">
          <Link href="/portfolio" className="menu-button">Portfolio</Link>
          <Link href="/blog" className="menu-button">Blog</Link>
        </header>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
