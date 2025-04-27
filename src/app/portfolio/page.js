'use client';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* Top Right Home Button */}
      <header style={{ textAlign: 'right', marginBottom: '2rem' }}>
        <Link href="/">
          <button className="button">Home</button>
        </Link>
      </header>

      {/* Center Section */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Rotating Wheel Video */}
        <div style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid black',
          marginBottom: '1.5rem'
        }}>
          <video
            src="/media/rotating-wheel.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>

        {/* Coming Soon Text */}
        <h1 style={{ fontSize: '1.75rem' }}>
          Coming soon :)
        </h1>

      </section>

    </main>
  );
}
