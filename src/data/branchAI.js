export default {
  id: 'branchAI',
  title: 'AI Revolution',
  emoji: '🤖',
  subtitle: 'Technology & Digital Transformation',
  flow: [
    // ── Intro ──────────────────────────────────────────────
    {
      id: 'ai_intro_1',
      sender: 'bot',
      type: 'text',
      text: 'Welcome to AI Revolution.',
      typing: 1200,
      delay: 300,
    },
    {
      id: 'ai_intro_2',
      sender: 'bot',
      type: 'text',
      text: (userData) =>
        `You told me earlier that you first used AI in ${userData.aiYear || 'recent years'}.\nFor CMA CGM, the AI journey started with a clear conviction:`,
      typing: 1800,
      delay: 500,
    },
    {
      id: 'ai_intro_quote',
      sender: 'bot',
      type: 'highlight',
      text: '"Artificial intelligence sparked a revolution. Rodolphe Saadé refused to stand by and watch it unfold. He chose to lead it."',
      typing: 2000,
      delay: 500,
    },

    // ── AI Timeline ────────────────────────────────────────
    {
      id: 'ai_timeline_intro',
      sender: 'bot',
      type: 'text',
      text: "Here's how it happened — fast.",
      typing: 1200,
      delay: 400,
    },
    {
      id: 'ai_timeline_1',
      sender: 'bot',
      type: 'highlight',
      text: "📅 **2018** — ZEBOX is born\nThe Group's innovation incubator launches in Marseille. Focus: transport, logistics, energy, and AI startups.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'ai_timeline_2',
      sender: 'bot',
      type: 'highlight',
      text: '📅 **2023** — Dedicated AI division created\n€100 million invested. A clear signal: AI is strategic.',
      typing: 1800,
      delay: 400,
    },
    {
      id: 'ai_timeline_3',
      sender: 'bot',
      type: 'highlight',
      text: "📅 **2023** — Kyutai launched\nEurope's first independent AI research lab. Open science. Fundamental research.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'ai_timeline_4',
      sender: 'bot',
      type: 'highlight',
      text: '📅 **2023-2024** — Strategic partnerships\nGoogle Cloud for infrastructure. Mistral AI for language solutions.',
      typing: 1800,
      delay: 400,
    },
    {
      id: 'ai_timeline_5',
      sender: 'bot',
      type: 'highlight',
      text: '📅 **2024-2025** — AI deployed across the Group\nShipping, logistics, media — every business unit benefits.',
      typing: 1800,
      delay: 400,
    },

    // ── ZEBOX Deep Dive ────────────────────────────────────
    {
      id: 'ai_zebox_intro',
      sender: 'bot',
      type: 'text',
      text: "Let me tell you about ZEBOX. It's not just an incubator — it's a philosophy.",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'ai_zebox_card',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '🏢',
        title: 'ZEBOX — Innovation Ecosystem',
        items: [
          'Born in Marseille, 2018',
          'Expanded to: Caribbean, West Africa, Singapore, UK, US',
          'Supports startups in transport, logistics, energy & AI',
          "Connects startups to CMA CGM's global network",
        ],
      },
      typing: 1400,
      delay: 500,
    },

    // ── AI in 3 Domains ────────────────────────────────────
    {
      id: 'ai_domains_intro',
      sender: 'bot',
      type: 'text',
      text: "AI at CMA CGM isn't theory. It's deployed across 3 domains:",
      typing: 1400,
      delay: 400,
    },
    {
      id: 'ai_domain_shipping',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '🚢',
        title: 'Shipping Intelligence',
        items: [
          'Route optimization',
          'Fuel consumption prediction',
          'Demand forecasting',
        ],
      },
      typing: 1400,
      delay: 400,
    },
    {
      id: 'ai_domain_logistics',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '📦',
        title: 'Logistics Automation',
        items: [
          'Warehouse optimization',
          'Predictive maintenance',
          'Supply chain visibility',
        ],
      },
      typing: 1400,
      delay: 400,
    },
    {
      id: 'ai_domain_media',
      sender: 'bot',
      type: 'info-card',
      text: '',
      infoCard: {
        emoji: '📺',
        title: 'Media & Customer Experience',
        items: [
          'Content personalization',
          'Audience analytics',
          'Virtual assistants',
        ],
      },
      typing: 1400,
      delay: 400,
    },

    // ── eSolutions ─────────────────────────────────────────
    {
      id: 'ai_esolutions',
      sender: 'bot',
      type: 'text',
      text: "**CMA CGM eSolutions** is the Group's digital platform for:\n— Online booking\n— Documentation\n— Real-time shipment tracking\n\nMaking global trade more transparent, faster, and smarter.",
      typing: 2000,
      delay: 500,
    },

    // ── Kyutai Spotlight ───────────────────────────────────
    {
      id: 'ai_kyutai',
      sender: 'bot',
      type: 'highlight',
      text: "**Kyutai — Europe's first independent AI research lab**\nFocused on open science. Fundamental AI research for everyone.\nCMA CGM isn't just USING AI — it's helping BUILD the future of AI.",
      typing: 2000,
      delay: 600,
    },

    // ── Mini-Challenge ─────────────────────────────────────
    {
      id: 'ai_challenge_intro',
      sender: 'bot',
      type: 'text',
      text: "Let's test what you've learned.\n\nIn what year did CMA CGM start reducing its emissions — long before creating the AI division?",
      typing: 1800,
      delay: 400,
      replies: [
        {
          text: '2017',
          goto: 'ai_q1_wrong',
          score: { engagement: 1 },
        },
        {
          text: '2023',
          goto: 'ai_q1_wrong',
          score: { engagement: 1 },
        },
        {
          text: '2003',
          goto: 'ai_q1_correct',
          score: { knowledge: 2, engagement: 1 },
        },
        {
          text: '2008',
          goto: 'ai_q1_wrong',
          score: { engagement: 1 },
        },
      ],
    },
    {
      id: 'ai_q1_correct',
      sender: 'bot',
      type: 'highlight',
      text: "✅ 2003 — that's the real answer. CMA CGM was a pioneer before sustainability was mainstream, and before AI was a buzzword.\nThe same DNA drives both: anticipate change, act early.",
      typing: 2200,
      delay: 500,
      goto: 'ai_q2',
    },
    {
      id: 'ai_q1_wrong',
      sender: 'bot',
      type: 'text',
      text: 'Not quite. Hint: it was long before anyone was talking about sustainability at all. Think earlier...',
      typing: 1500,
      delay: 400,
      goto: 'ai_challenge_intro',
    },

    // Question 2
    {
      id: 'ai_q2',
      sender: 'bot',
      type: 'text',
      text: 'One more:\nWhat is Kyutai?',
      typing: 1200,
      delay: 400,
      replies: [
        {
          text: 'A shipping route optimization tool',
          goto: 'ai_q2_wrong',
          score: { engagement: 1 },
        },
        {
          text: "Europe's first independent AI research lab",
          goto: 'ai_q2_correct',
          score: { knowledge: 2, engagement: 1 },
        },
        {
          text: 'A new vessel model',
          goto: 'ai_q2_wrong',
          score: { engagement: 1 },
        },
        {
          text: "CMA CGM's media platform",
          goto: 'ai_q2_wrong',
          score: { engagement: 1 },
        },
      ],
    },
    {
      id: 'ai_q2_correct',
      sender: 'bot',
      type: 'highlight',
      text: "✅ Exactly. Kyutai represents CMA CGM's commitment to fundamental AI research — open science for everyone.",
      typing: 1800,
      delay: 500,
      goto: 'ai_badge',
    },
    {
      id: 'ai_q2_wrong',
      sender: 'bot',
      type: 'text',
      text: "Not quite. Think about open science and fundamental research — it's bigger than any single product.",
      typing: 1500,
      delay: 400,
      goto: 'ai_q2',
    },

    // ── Badge & Close ──────────────────────────────────────
    {
      id: 'ai_badge',
      sender: 'bot',
      type: 'text',
      text: "€100M invested. Kyutai. Google. Mistral. ZEBOX worldwide.\nCMA CGM doesn't just adopt technology — it shapes it.\nThat's **Imagination** at its most powerful.",
      typing: 2200,
      delay: 500,
    },
    {
      id: 'ai_badge_unlock',
      sender: 'bot',
      type: 'badge',
      text: "You've mastered the AI story.",
      badge: {
        emoji: '🤖',
        title: 'AI Revolution Badge Unlocked!',
      },
      typing: 1200,
      delay: 300,
      complete: true,
    },
  ],
};
