// src/app/page.js
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <figure>
        <Image
          src="/media/headshot.jpg"
          alt="Elmira Kalhor"
          width={200}
          height={200}
          style={{ borderRadius: '50%' }}
        />
      </figure>
      <figcaption>Elmira Kalhor</figcaption>

      <h1>Hi, I'm Elmira.</h1>
      <p>
        I'm a quantitative researcher with a passion for data science and machine learning.
        You can view my <Link href="/media/ElmiraKalhor_R.pdf" target="_blank"><em>Resume here</em></Link>.
      </p>
    </main>
  );
}
