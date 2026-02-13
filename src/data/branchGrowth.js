export default {
  id: 'branchGrowth',
  title: 'Growth Engine',
  emoji: '📈',
  subtitle: 'From One Ship to a Global Group',
  flow: [
    // ── Intro ──────────────────────────────────────────────
    {
      id: 'growth_intro_1',
      sender: 'bot',
      type: 'text',
      text: 'Welcome to Growth Engine.',
      typing: 1200,
      delay: 300,
    },
    {
      id: 'growth_intro_2',
      sender: 'bot',
      type: 'text',
      text: "In 1978, CMA CGM was one man, one ship, and a dream.\nToday? Let me show you the numbers.",
      typing: 1800,
      delay: 500,
    },

    // ── Scale Infographic ──────────────────────────────────
    {
      id: 'growth_scale',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '🚀',
        title: '1978 → 2025: The Transformation',
        items: [
          "1 vessel → one of the world's largest fleets",
          'Marseille → 420 ports, 160+ countries',
          'Shipping only → Transport + Logistics + Media',
          '23.6 million containers/year',
          '150,000+ employees worldwide',
        ],
      },
      typing: 1600,
      delay: 500,
    },

    // ── 3 Key Acquisitions ─────────────────────────────────
    {
      id: 'growth_acq_intro',
      sender: 'bot',
      type: 'text',
      text: 'Growth at CMA CGM comes from bold moves. Here are the ones that reshaped everything.',
      typing: 1600,
      delay: 400,
    },
    {
      id: 'growth_acq_ceva',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '📦',
        title: '2019 — CEVA Logistics',
        items: [
          'Contract logistics, freight management, end-to-end solutions',
          'Balance, resilience, and long-term stability',
          '27.2M tons/year, 17,000 trucks, 1,100 sites in 50+ countries',
          'More than diversification — it reshaped the Group',
        ],
      },
      typing: 1400,
      delay: 400,
    },
    {
      id: 'growth_acq_bollore',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '🌍',
        title: '2024 — Bolloré Logistics',
        items: [
          "Unique African ground network (last-mile where others can't reach)",
          'Expertise in automotive, healthcare, and e-commerce logistics',
          'Together with CEVA: top-3 global logistics player',
        ],
      },
      typing: 1400,
      delay: 400,
    },
    {
      id: 'growth_acq_media',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '📺',
        title: '2022-2023 — CMA Media',
        items: [
          'La Provence (2022) — local roots',
          'Altice Media: BFM, RMC, BFM Régions (2023)',
          'Brut, La Tribune, M6 partnerships',
          '1,100 journalists | 51M people reached monthly',
        ],
      },
      typing: 1400,
      delay: 400,
    },

    // ── 3 Strategic Axes ───────────────────────────────────
    {
      id: 'growth_axes_intro',
      sender: 'bot',
      type: 'text',
      text: "All of this fits into CMA CGM's 3 strategic axes:",
      typing: 1400,
      delay: 400,
    },
    {
      id: 'growth_axis_transport',
      sender: 'bot',
      type: 'highlight',
      text: "🚢 **TRANSPORT**\nMaritime (CMA CGM, APL, ANL, CNC, Mercosul Line) + Inland (rail, barge, road) + Air Cargo (France's #1 cargo airline)",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'growth_axis_logistics',
      sender: 'bot',
      type: 'highlight',
      text: '📦 **LOGISTICS**\nCEVA + Bolloré: supply chain management, contract logistics, e-commerce, automotive, healthcare, last-mile worldwide',
      typing: 1800,
      delay: 400,
    },
    {
      id: 'growth_axis_media',
      sender: 'bot',
      type: 'highlight',
      text: '📺 **MEDIA**\nCMA Media: BFM, RMC, La Tribune, Brut, M6, La Provence. Information, proximity, media diversity.',
      typing: 1800,
      delay: 400,
    },

    // ── Air Cargo Spotlight ────────────────────────────────
    {
      id: 'growth_aircargo_intro',
      sender: 'bot',
      type: 'text',
      text: 'Let me zoom in on one story that shows how fast CMA CGM can move.',
      typing: 1400,
      delay: 400,
    },
    {
      id: 'growth_aircargo',
      sender: 'bot',
      type: 'highlight',
      text: "**2020 — COVID hits. Supply chains collapse.**\nAirlines ground their fleets. But the world still needs cargo.\nCMA CGM creates Air Cargo in 6 months. SIX MONTHS.\nToday it's France's leading cargo airline.\n\nThat's **Imagination** turned into reality.",
      typing: 2200,
      delay: 600,
    },

    // ── Mini-Challenge: Matching Quiz ──────────────────────
    {
      id: 'growth_challenge_intro',
      sender: 'bot',
      type: 'text',
      text: 'Match each activity with its strategic axis:',
      typing: 1200,
      delay: 400,
    },

    // Question 1
    {
      id: 'growth_q1',
      sender: 'bot',
      type: 'text',
      text: '"Maritime transport, 23.6M TEU, 420 ports" — which axis?',
      typing: 1400,
      delay: 300,
      replies: [
        {
          text: '🚢 Transport',
          goto: 'growth_q1_correct',
          score: { knowledge: 1, engagement: 1 },
        },
        {
          text: '📦 Logistics',
          goto: 'growth_q1_wrong',
          score: { engagement: 1 },
        },
        {
          text: '📺 Media',
          goto: 'growth_q1_wrong',
          score: { engagement: 1 },
        },
      ],
    },
    {
      id: 'growth_q1_correct',
      sender: 'bot',
      type: 'text',
      text: '✅ Correct!',
      typing: 800,
      delay: 300,
      goto: 'growth_q2',
    },
    {
      id: 'growth_q1_wrong',
      sender: 'bot',
      type: 'text',
      text: "Not quite — that's Transport!",
      typing: 1000,
      delay: 300,
      goto: 'growth_q2',
    },

    // Question 2
    {
      id: 'growth_q2',
      sender: 'bot',
      type: 'text',
      text: '"CEVA, 1,450 electric trucks, 1,100 sites" — which axis?',
      typing: 1400,
      delay: 300,
      replies: [
        {
          text: '🚢 Transport',
          goto: 'growth_q2_wrong',
          score: { engagement: 1 },
        },
        {
          text: '📦 Logistics',
          goto: 'growth_q2_correct',
          score: { knowledge: 1, engagement: 1 },
        },
        {
          text: '📺 Media',
          goto: 'growth_q2_wrong',
          score: { engagement: 1 },
        },
      ],
    },
    {
      id: 'growth_q2_correct',
      sender: 'bot',
      type: 'text',
      text: '✅ Correct!',
      typing: 800,
      delay: 300,
      goto: 'growth_q3',
    },
    {
      id: 'growth_q2_wrong',
      sender: 'bot',
      type: 'text',
      text: "Not quite — that's Logistics!",
      typing: 1000,
      delay: 300,
      goto: 'growth_q3',
    },

    // Question 3
    {
      id: 'growth_q3',
      sender: 'bot',
      type: 'text',
      text: '"BFM, 1,100 journalists, 51M people/month" — which axis?',
      typing: 1400,
      delay: 300,
      replies: [
        {
          text: '🚢 Transport',
          goto: 'growth_q3_wrong',
          score: { engagement: 1 },
        },
        {
          text: '📦 Logistics',
          goto: 'growth_q3_wrong',
          score: { engagement: 1 },
        },
        {
          text: '📺 Media',
          goto: 'growth_q3_correct',
          score: { knowledge: 1, engagement: 1 },
        },
      ],
    },
    {
      id: 'growth_q3_correct',
      sender: 'bot',
      type: 'text',
      text: '✅ Correct!',
      typing: 800,
      delay: 300,
      goto: 'growth_key_unlocked',
    },
    {
      id: 'growth_q3_wrong',
      sender: 'bot',
      type: 'text',
      text: "Not quite — that's Media!",
      typing: 1000,
      delay: 300,
      goto: 'growth_key_unlocked',
    },

    // ── Quiz Result & Badge ────────────────────────────────
    {
      id: 'growth_key_unlocked',
      sender: 'bot',
      type: 'highlight',
      text: '✅ Growth Key unlocked!\nYou understand the 3 pillars that make CMA CGM more than a shipping company.',
      typing: 1800,
      delay: 500,
    },
    {
      id: 'growth_closing',
      sender: 'bot',
      type: 'text',
      text: "From one vessel to a global Group across Transport, Logistics and Media.\nEvery acquisition was a bet. Every bet was proven right.\nThat's **Boldness** at every scale.",
      typing: 2000,
      delay: 500,
    },
    {
      id: 'growth_badge_unlock',
      sender: 'bot',
      type: 'badge',
      text: "You've mastered the growth story.",
      badge: {
        emoji: '📈',
        title: 'Growth Engine Badge Unlocked!',
      },
      typing: 1200,
      delay: 300,
      complete: true,
    },
  ],
};
