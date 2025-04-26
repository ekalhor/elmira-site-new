'use client';
import Link from 'next/link';
import styles from '../../home.module.css';

export default function WildfirePost() {
  return (
    <main className={styles.main}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>
        Living with Fire: Understanding Risk, Behavior, and the Changing Wildfire Landscape in California
      </h1>

      <img
        src="/media/wildfire.jpg"
        alt="A home engulfed in flames, symbolizing wildfire threat in residential zones"
        style={{
          display: 'block',
          margin: '2rem auto 0.5rem',
          border: '1px solid black',
          maxWidth: '30%',
        }}
      />
      <p
        style={{
          fontSize: '0.85rem',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        A home engulfed in flames, symbolizing wildfire threat in residential zones
      </p>

      <div
        style={{
          textAlign: 'justify',
          borderLeft: '2px solid lightgray',
          borderRight: '2px solid lightgray',
          padding: '0 1rem',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        {/* Insert your formatted blog post content here, from previous sections */}
        <p>
          Some of the most beautiful places in California are also the most dangerous. Houses with forest views, tucked into the golden hills...
        </p>
        {/* Keep appending other paragraphs as needed */}
      </div>

      <div style={{ marginTop: '3rem' }}>
        <Link href="/blog">
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
            ← Back to Blog
          </button>
        </Link>
      </div>
    </main>
  );
}
