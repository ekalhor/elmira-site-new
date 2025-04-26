'use client';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main>
      <header style={{ textAlign: 'right', padding: '20px' }}>
        <Link href="/"><button>Home</button></Link>
      </header>

      {/* Your blog landing page content */}
    </main>
  );
}
