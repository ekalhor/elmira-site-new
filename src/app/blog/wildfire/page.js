'use client';
import '../../../../globals.css';
import Link from 'next/link';

export default function WildfirePost() {
  return (
    <main className="main">
      <div style={{
        border: '1px solid black',
        padding: '2rem',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        <h1>Living with Fire: Understanding Risk, Behavior, and the Changing Wildfire Landscape in California</h1>
        <p>Some of the most beautiful places in California are also the most dangerous...</p>
        {/* continue the entire blog content here */}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/blog">
          <button>Back to Blog</button>
        </Link>
      </div>
    </main>
  );
}
