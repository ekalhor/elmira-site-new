// src/app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Elmira Kalhor',
  description: 'Quantitative Researcher | Data Science & Machine Learning Enthusiast',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', padding: '1rem' }}>
          <Link href="/portfolio">
            <button>Portfolio</button>
          </Link>
          <Link href="/blog">
            <button>Blog</button>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
