'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="home-container">
      
      {/* Headshot */}
      <Image
        src="/media/headshot.jpg"
        alt="Elmira Kalhor"
        width={300}
        height={300}
        className="profile-pic"
      />

      {/* Greeting Text */}
      <h1 style={{ marginTop: '1.5rem' }}>
        Hi, I'm Elmira Kalhor.
      </h1>

      <p style={{ marginTop: '1rem' }}>
        I am a quantitative researcher with a passion for data science and machine learning.
      </p>

      {/* Resume Button */}
      <div style={{ marginTop: '2rem' }}>
        <Link href="/media/ElmiraKalhor_R.pdf" target="_blank">
          <button className="menu-button">My Resume</button>
        </Link>
      </div>

    </div>
  );
}
