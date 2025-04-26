'use client';

import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="portfolio-container">
      
      {/* Video */}
      <video autoPlay loop muted playsInline className="portfolio-video">
        <source src="/media/rotating-wheel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Portfolio Message */}
      <h1 style={{ marginTop: '2rem' }}>Portfolio is Coming Soon</h1>

      {/* Home Button */}
      <div style={{ marginTop: '1.5rem' }}>
        <Link href="/">
          <button className="menu-button">Home</button>
        </Link>
      </div>

    </div>
  );
}
