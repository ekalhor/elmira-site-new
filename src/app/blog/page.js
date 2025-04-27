'use client';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* Top Right Home Button */}
      <header style={{ textAlign: 'right', marginBottom: '2rem' }}>
        <Link href="/">
          <button style={{ padding: '0.5rem 1rem' }}>Home</button>
        </Link>
      </header>

      {/* Center Section */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Blog Intro Video */}
        <div style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid black',
          marginBottom: '1.5rem'
        }}>
          <video
            src="/media/blog-intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>

        {/* Blog Post Link */}
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Welcome! Here's what I'm writing about:
        </h1>

        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/blog/wildfire" style={{ fontStyle: 'italic', fontSize: '1.2rem', textDecoration: 'underline' }}>
              Living with Fire: Understanding Risk, Behavior, and the Changing Wildfire Landscape in California
            </Link>
          </li>
        </ul>

      </section>

    </main>
  );
}
