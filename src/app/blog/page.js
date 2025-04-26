// src/app/blog/page.js
'use client';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main>
      <figure>
        <video
          src="/media/blog-intro.mp4"
          autoPlay
          muted
          loop
          style={{ width: '200px', borderRadius: '10px' }}
        />
      </figure>
      <figcaption>Blog Introduction</figcaption>

      <h1>Welcome, here's what I'm writing about:</h1>
      <ul>
        <li>
          <Link href="/blog/wildfire"><em>Living with Fire</em></Link>
        </li>
      </ul>

      <Link href="/">
        <button>Home</button>
      </Link>
    </main>
  );
}
