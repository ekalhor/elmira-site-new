'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <header style={{ textAlign: 'right', padding: '20px' }}>
        <Link href="/portfolio"><button>Portfolio</button></Link>{' '}
        <Link href="/blog"><button>Blog</button></Link>
      </header>

      {/* Your home page content */}
    </main>
  );
}
