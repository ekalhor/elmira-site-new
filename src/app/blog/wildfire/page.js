// src/app/blog/wildfire/page.js
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function WildfirePost() {
  return (
    <main>
      <figure>
        <Image
          src="/media/wildfire.jpg"
          alt="Wildfire risk"
          width={400}
          height={400}
          style={{ border: '1px solid black', borderRadius: '5px' }}
        />
      </figure>
      <figcaption>A home engulfed in flames, symbolizing wildfire threat in residential zones.</figcaption>

      <h1>Living with Fire: Understanding Risk, Behavior, and the Changing Wildfire Landscape in California</h1>

      <p>
        Some of the most beautiful places in California are also the most dangerous. Houses with forest views, tucked into the golden hills or shadowed by pine ridges, are prized for their peace and proximity to nature. But they also sit on the edge of a slow-moving, increasingly unignorable crisis.
      </p>
      <p>
        This is the Wildland–Urban Interface (WUI) — where human development and natural fuels collide. As of 2020, approximately 3.2 million housing units in California were located in WUI zones, out of a total of 14.4 million housing units reported in the April 2020 Census. These areas are not only at high risk of wildfire, but also at the center of one of the most complex land-use, climate, and equity challenges of our time.
      </p>

      <p>... (you can add more paragraphs if needed) ...</p>

      <Link href="/blog">
        <button>Back to Blog</button>
      </Link>
    </main>
  );
}
