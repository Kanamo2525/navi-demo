export default {
  id: 'branchGreen',
  title: 'Green Horizon',
  emoji: '🌱',
  subtitle: 'Sustainability & CSR',
  flow: [
    // ── Intro ──────────────────────────────────────────────
    {
      id: 'green_intro_1',
      sender: 'bot',
      type: 'text',
      text: 'Welcome to Green Horizon.',
      typing: 1200,
      delay: 300,
    },
    {
      id: 'green_intro_2',
      sender: 'bot',
      type: 'text',
      text: "Most people think sustainability in shipping started recently. They're wrong.\n\nLet me take you back to 2003.",
      typing: 2000,
      delay: 500,
    },

    // ── Green Timeline ─────────────────────────────────────
    {
      id: 'green_timeline_1',
      sender: 'bot',
      type: 'highlight',
      text: '📅 **2003** — Long before sustainability became a global priority, CMA CGM began cutting emissions. Quietly. Deliberately.',
      typing: 1800,
      delay: 400,
    },
    {
      id: 'green_timeline_2',
      sender: 'bot',
      type: 'highlight',
      text: '📅 **2017** — Rodolphe Saadé ordered the largest LNG-powered container ships ever built. At the time, LNG was still new to shipping.',
      typing: 1800,
      delay: 400,
    },
    {
      id: 'green_timeline_3',
      sender: 'bot',
      type: 'highlight',
      text: '📅 **2020** — The Jacques Saadé vessel launched: 23,000 TEU, -20% CO₂. Named after the founder. A symbol.',
      typing: 1800,
      delay: 400,
    },
    {
      id: 'green_timeline_4',
      sender: 'bot',
      type: 'highlight',
      text: '📅 **2025** — First methanol-powered vessels delivered. Aiming for carbon neutrality in the long run.',
      typing: 1800,
      delay: 400,
    },

    // ── 3 Pillars ──────────────────────────────────────────
    {
      id: 'green_pillars_intro',
      sender: 'bot',
      type: 'text',
      text: "CMA CGM's sustainability strategy rests on 3 pillars. Let me show you.",
      typing: 1500,
      delay: 500,
    },
    {
      id: 'green_pillar_1',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '🚢',
        title: 'Cleaner Assets & Fuels',
        items: [
          'LNG vessels (fleet leader worldwide)',
          'Methanol-ready vessels (18 dual-fuel ordered)',
          'CEVA low-carbon trucks: 1,450 electric by 2025',
          'Renewable-powered warehouses',
        ],
      },
      typing: 1400,
      delay: 400,
    },
    {
      id: 'green_pillar_2',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '⚙️',
        title: 'Smarter Operations',
        items: [
          'Route optimization (AI-powered)',
          'Eco-speed programs (slower = cleaner)',
          'E-documents (less paper, faster processing)',
          'Network planning for fewer empty trips',
        ],
      },
      typing: 1400,
      delay: 400,
    },
    {
      id: 'green_pillar_3',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '💡',
        title: 'Open Innovation — ZEBOX',
        items: [
          'Incubator for startups in transport, logistics, energy & AI',
          'Born in Marseille (2018), expanded worldwide',
          'Co-developed sustainability projects with startups',
        ],
      },
      typing: 1400,
      delay: 400,
    },

    // ── Key Figures ────────────────────────────────────────
    {
      id: 'green_figures',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '📊',
        title: 'The Big Picture',
        items: [
          '**€1.5 billion** invested in energy transition',
          '**-30%** greenhouse gas emissions by 2030 (vs. 2008)',
          '**-80%** by 2040',
          '**150+** ships equipped for low-carbon energies by 2029',
        ],
      },
      typing: 1400,
      delay: 500,
    },

    // ── Foundation ──────────────────────────────────────────
    {
      id: 'green_foundation',
      sender: 'bot',
      type: 'text',
      text: "Sustainability isn't just about emissions. It's also about people.\n\nThe CMA CGM Foundation runs programs for:\n— Food security in crisis zones (Containers of Hope)\n— Education access worldwide (550+ projects since 2005)\n— Social innovation through Le Phare lab (55 associations & startups)\n\nAnd 84,000 tons of humanitarian aid shipped.",
      typing: 2500,
      delay: 600,
    },

    // ── Mini-Challenge ─────────────────────────────────────
    {
      id: 'green_challenge',
      sender: 'bot',
      type: 'text',
      text: "Quick challenge. Let's see if you got it.\n\nYou're planning a sustainable shipping route. Pick the best combination:",
      typing: 1800,
      delay: 400,
      replies: [
        {
          text: '🌿 LNG vessel + Shore power + Eco-speed',
          goto: 'green_correct',
          score: { knowledge: 2, engagement: 1 },
        },
        {
          text: '🔧 Standard vessel + Fast delivery + Paper',
          goto: 'green_wrong',
          score: { engagement: 1 },
        },
        {
          text: '⚡ Electric truck + Air freight + Manual',
          goto: 'green_wrong',
          score: { engagement: 1 },
        },
      ],
    },
    {
      id: 'green_correct',
      sender: 'bot',
      type: 'highlight',
      text: "✅ Green Key unlocked!\nLNG vessel reduces CO₂ by 20%. Shore power cuts port emissions. Eco-speed optimizes fuel consumption.\nThat's exactly how CMA CGM approaches it.",
      typing: 2000,
      delay: 500,
      goto: 'green_badge',
    },
    {
      id: 'green_wrong',
      sender: 'bot',
      type: 'text',
      text: 'Not quite. Think about it: cleaner ship + low-impact port practice + eco-speed.',
      typing: 1500,
      delay: 400,
      goto: 'green_challenge',
    },

    // ── Badge & Close ──────────────────────────────────────
    {
      id: 'green_badge',
      sender: 'bot',
      type: 'text',
      text: "CMA CGM started reducing emissions in 2003 — before it was a trend.\nThat's not just sustainability. That's **Boldness** and **Exemplarity** in action.",
      typing: 2000,
      delay: 500,
    },
    {
      id: 'green_badge_unlock',
      sender: 'bot',
      type: 'badge',
      text: "You've mastered the sustainability story.",
      badge: {
        emoji: '🌱',
        title: 'Green Horizon Badge Unlocked!',
      },
      typing: 1200,
      delay: 300,
      complete: true,
    },
  ],
};
