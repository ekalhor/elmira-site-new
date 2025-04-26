'use client';
import Link from 'next/link';
import styles from '../home.module.css';

export default function PortfolioPage() {
  return (
    <main className={styles.main}>
      <video
        src="/media/rotating-wheel.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '200px', borderRadius: '8px', marginBottom: '2rem' }}
      />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>
        Portfolio – Coming Soon
      </h1>

      <div style={{ position: 'absolute', top: '1.5rem', right: '2rem' }}>
        <Link href="/">
          <button
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Home
          </button>
        </Link>
      </div>
    </main>
  );
}
