'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* Top Right Navigation Buttons */}
      <header style={{ textAlign: 'right', marginBottom: '2rem' }}>
        <Link href="/portfolio">
          <button className="button">Portfolio</button>
        </Link>
        <Link href="/blog">
          <button className="button">Blog</button>
        </Link>
      </header>

      {/* Center Section */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Photo */}
        <div style={{ 
          width: '200px', 
          height: '200px', 
          borderRadius: '50%', 
          overflow: 'hidden', 
          border: '4px solid black', 
          marginBottom: '1.5rem'
        }}>
          <Image 
            src="/media/headshot.jpg"
            alt="Elmira Kalhor"
            width={200}
            height={200}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            priority
          />
        </div>

        {/* Greeting Text */}
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Hi, welcome to my website, my name is Elmira Kalhor.
        </h1>

        {/* Short Description */}
        <p style={{ fontSize: '1.2rem', color: '#333', maxWidth: '600px', marginBottom: '1.5rem' }}>
          I am a quantitative researcher with a passion for machine learning and data science.
          I like to use generative AI to help with data journalism and storytelling.
        </p>

        {/* Resume Link */}
        <p style={{ fontSize: '1rem', color: '#555', fontStyle: 'italic' }}>
          Here you can find my <Link href="/media/ElmiraKalhor_R.pdf" target="_blank" style={{ textDecoration: 'underline', fontStyle: 'italic' }}>resume</Link>.
        </p>

      </section>

    </main>
  );
}
