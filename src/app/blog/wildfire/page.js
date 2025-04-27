'use client';
import '../../../globals.css';
import Link from 'next/link';

export default function WildfirePost() {
  return (
    <main className="main">
      <h1>Living with Fire: Understanding Risk, Behavior, and the Changing Wildfire Landscape in California</h1>
      <p>
        Some of the most beautiful places in California are also the most dangerous...
      </p>
      {/* Blog content continues here */}
      <Link href="/blog">
        <button>Back to Blog</button>
      </Link>
    </main>
  );
}
