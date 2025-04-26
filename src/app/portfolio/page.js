// src/app/portfolio/page.js
'use client';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main>
      <figure>
        <video
          src="/media/rotating-wheel.mp4"
          autoPlay
          muted
          loop
          style={{ width: '200px', borderRadius: '10px' }}
        />
      </figure>
      <figcaption>Portfolio Preview</figcaption>

      <h1>Portfolio</h1>
      <p>Coming soon!</p>

      <Link href="/">
        <button>Home</button>
      </Link>
    </main>
  );
}
