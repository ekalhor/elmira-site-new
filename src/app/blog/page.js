// src/app/blog/page.js
'use client';
import Link from 'next/link';
import styles from './home.module.css';

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <video
        src="/media/blog-intro.mp4"
        autoPlay
        muted
        loop
        style={{ width: '200px', borderRadius: '10px' }}
      />
      <h1>Welcome, here's what I'm writing about:</h1>
      <ul>
        <li>
          <Link href="/blog/wildfire"><em>Living with Fire</em></Link>
        </li>
      </ul>
    </main>
  );
}
