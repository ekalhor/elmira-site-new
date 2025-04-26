'use client';
import Link from 'next/link';

export default function WildfirePost() {
  return (
    <main>
      <header style={{ textAlign: 'right', padding: '20px' }}>
        <Link href="/blog"><button>Back to Blog</button></Link>
      </header>

      {/* Your wildfire blog post content */}
    </main>
  );
}
