// src/app/blog/wildfire/page.js
'use client';
import Link from 'next/link';
import '../../../../globals.css'; // Import your global styles

export default function WildfirePost() {
  return (
    <main className="main">
      <div className="content">
        <h1>Living with Fire: Understanding Risk, Behavior, and the Changing Wildfire Landscape in California</h1>

        <p><strong>1. Introduction: The Beauty and the Burn</strong></p>
        <p>
          Some of the most beautiful places in California are also the most dangerous. Houses with forest views, tucked into
          the golden hills or shadowed by pine ridges, are prized for their peace and proximity to nature. But they also sit
          on the edge of a slow-moving, increasingly unignorable crisis.
        </p>
        <p>
          This is the Wildland–Urban Interface (WUI) — where human development and natural fuels collide. As of 2020,
          approximately 3.2 million housing units in California were located in WUI zones, out of a total of 14.4 million
          housing units reported in the April 2020 Census — meaning roughly one in five homes are exposed to heightened
          wildfire risk (Radeloff et al., 2023; U.S. Census Bureau, 2020).
        </p>
        <p>
          As wildfire seasons grow longer, fires start earlier, and suppression costs skyrocket, it’s becoming clear that
          we’re not just dealing with a "natural disaster." We’re confronting a system — one that includes fire, zoning laws,
          insurance markets, social behavior, and public policy.
        </p>
        <p>
          Because fire isn’t just a force to fight. It’s a natural reality to live with.
        </p>

        <p><strong>2. Fire Doesn’t Follow the Rules</strong></p>
        <p>
          Wildfire is often imagined as a single, rushing wall of flames. But its behavior is far more erratic and complex.
          Fires can start from a spark in a backyard, a campfire, a lightning strike, or a power line. Once ignited, fire
          responds to terrain, vegetation, wind, and weather in unpredictable ways.
        </p>
        <p>
          One of the most dangerous mechanisms of fire spread is ladder fuels — medium-height vegetation that connects
          surface brush to tree canopy. When a surface fire climbs these ladders, it becomes a crown fire, throwing embers
          miles ahead.
        </p>
        <p>
          Understanding fire behavior at this scale is essential. Because if we can’t predict where fire goes, we can’t
          plan to stay ahead of it.
        </p>

        <p><strong>3. Risk, Landscape, and the Hedonic Paradox</strong></p>
        <p>
          People are willing to pay more to live in places at higher risk of burning. Studies show that homes near forests
          or scenic views command premium prices despite being in fire-prone zones. This is the wildfire paradox: beauty
          brings danger.
        </p>
        <p>
          Sometimes, the so-called "miracle house" survives a neighborhood fire — due to defensible space, fire-resistant
          design, or pure luck. Fire doesn’t respect property lines. Risk management must be collective, not individual.
        </p>

        <p><strong>4. Defensible Space and the Limits of Individual Action</strong></p>
        <p>
          Defensible space — especially the first five feet around a home (Zone 0) — is vital. But even the best-protected
          home is vulnerable if neighbors neglect risk reduction. Firewise USA® programs show that collective action matters.
        </p>

        <p><strong>5. Insurance, Inequity, and the Price of Risk</strong></p>
        <p>
          Insurance markets are pulling out of high-risk areas. Premiums are rising. Public programs subsidize private risks.
          Wealthy homeowners sometimes hire private fire crews — a luxury unavailable to most residents.
        </p>

        <p><strong>6. What We’ve Learned — and Still Don’t Do</strong></p>
        <p>
          Fire suppression policies of the past worsened today’s fires. Climate change intensifies the threat. And despite
          better knowledge, development continues in wildfire-prone regions.
        </p>

        <p><strong>7. Closing Reflection: Fire Is a System, Not a Threat</strong></p>
        <p>
          Fire is not an invader. It’s a natural part of California’s ecology. The real disaster comes from ignoring
          systemic risk — where we build, how we insure, and how we govern. Living with fire requires collective readiness,
          not individual hope.
        </p>

        <div className="backButton">
          <Link href="/blog"><em>← Back to Blog</em></Link>
        </div>
      </div>
    </main>
  );
}
