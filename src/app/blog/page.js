'use client';
import Link from 'next/link';
import styles from '../../globals.css'; // Or wherever your globals are

export default function BlogPage() {
  return (
    <main>
      <video
        src="/media/blog-intro.mp4"
        autoPlay
        muted
        loop
        style={{ width: '200px', borderRadius: '10px', marginBottom: '2rem' }}
      />
      <h1>Welcome, here's what I'm writing about:</h1>

      {/* New Box starts here */}
      <div className="blog-links-box">
        <ul>
          <li>
            <Link href="/blog/wildfire"><em>Living with Fire</em></Link>
          </li>
          {/* Add more posts here */}
        </ul>
      </div>
    </main>
  );
}
