'use client';
import Link from 'next/link';
import styles from '../../../globals.css'; 

export default function BlogPage() {
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
        
        {/* blogger ideo */}
        <div style={{
          width: '500px',
          height: '500px',
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
		{/* New Box starts here */}
		<div className="blog-links-box">
		  <ul>
		    <li>
		      <Link href="/blog/wildfire"><em>Living with Fire</em></Link>
		    </li>
		  {/* Add more posts here */}
		  </ul>
		</div>


      </section>

    </main>
  );
}
