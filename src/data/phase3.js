// Phase 3: The Group in Action
// Mission simulation — learner coordinates Transport, Logistics, Foundation, and Media
// for a "Containers of Hope" humanitarian mission

export default {
  id: 'phase3',
  title: 'The Group in Action',
  emoji: '🚢',
  subtitle: 'Mission: Containers of Hope',
  flow: [
    // ──────────────────────────────────────────────
    // INTRODUCTION
    // ──────────────────────────────────────────────
    {
      id: 'intro1',
      sender: 'bot',
      type: 'text',
      text: "Time for your first mission as a CMA CGM team member.",
      typing: 1500,
      delay: 300,
    },
    {
      id: 'intro2',
      sender: 'bot',
      type: 'text',
      text: "Here's the brief:",
      typing: 800,
      delay: 400,
    },
    {
      id: 'mission_brief',
      sender: 'bot',
      type: 'card',
      card: {
        emoji: '🎯',
        title: 'MISSION: Containers of Hope',
        items: [
          '2,000 school kits (stored in Rotterdam)',
          '50 solar panels (manufactured near Shanghai)',
          'Destination: a school in Senegal',
          'Deadline: 3 weeks',
          'The event must be covered by media',
        ],
      },
      text: "You'll coordinate Transport, Logistics, the Foundation AND Media.\nLet's go step by step.",
      typing: 2500,
      delay: 500,
    },

    // ──────────────────────────────────────────────
    // STEP 1 — TRANSPORT MARITIME (Shanghai → Dakar)
    // ──────────────────────────────────────────────
    {
      id: 'step1_ask',
      sender: 'bot',
      type: 'text',
      text: "Step 1 — Transport\n\n50 solar panels need to travel from Shanghai to Dakar, Senegal.\nHow do you ship them?",
      typing: 2000,
      delay: 500,
      replies: [
        { text: "🚢 CMA CGM vessel — maritime route", goto: 'step1_correct' },
        { text: "✈️ Air Cargo", goto: 'step1_air' },
        { text: "🚛 Overland truck", goto: 'step1_truck' },
      ],
    },
    {
      id: 'step1_air',
      sender: 'bot',
      type: 'text',
      text: "Solar panels aren't urgent enough for air freight — maritime is the right call here.\n\nThat said, CMA CGM Air Cargo (France's #1 cargo airline) handles time-sensitive shipments with A330 and A350F freighters.",
      typing: 2500,
      delay: 300,
      goto: 'step1_correct',
    },
    {
      id: 'step1_truck',
      sender: 'bot',
      type: 'text',
      text: "From Shanghai? Trucks can't cross oceans!\n\nBut good thinking — CMA CGM does integrate inland transport with rail, barge, and road solutions.",
      typing: 2000,
      delay: 300,
      goto: 'step1_correct',
    },
    {
      id: 'step1_correct',
      sender: 'bot',
      type: 'highlight',
      text: "✅ Correct! CMA CGM serves Dakar via Asia-Africa maritime lines. The panels are loaded onto a vessel heading west.",
      typing: 2000,
      delay: 300,
    },
    {
      id: 'step1_info',
      sender: 'bot',
      type: 'info-card',
      infoCard: {
        emoji: '🚢',
        title: 'CMA CGM Maritime Transport',
        items: [
          '23.6M containers/year — 420 ports worldwide',
          'Fleet includes LNG-powered vessels like the Jacques Saadé (23,000 TEU)',
          '13,500 seafarers of 35 nationalities',
          'Brands: APL, ANL, CNC, Mercosul Line',
        ],
      },
      typing: 1500,
      delay: 400,
      goto: 'step2_ask',
    },

    // ──────────────────────────────────────────────
    // STEP 2 — LOGISTICS (Rotterdam → Dakar)
    // ──────────────────────────────────────────────
    {
      id: 'step2_ask',
      sender: 'bot',
      type: 'text',
      text: "Step 2 — Logistics\n\n2,000 school kits are sitting in a Rotterdam warehouse.\nHow do you ship them to Dakar efficiently?",
      typing: 2000,
      delay: 500,
      replies: [
        { text: "📦 CEVA Logistics — multimodal", goto: 'step2_correct' },
        { text: "🚛 Direct truck to Senegal", goto: 'step2_truck' },
        { text: "⏳ Consolidate in Shanghai first", goto: 'step2_shanghai' },
      ],
    },
    {
      id: 'step2_truck',
      sender: 'bot',
      type: 'text',
      text: "A direct truck from Rotterdam to Senegal would mean crossing the Sahara — not exactly efficient or practical!\n\nThere's a better option within the Group.",
      typing: 2000,
      delay: 300,
      goto: 'step2_correct',
    },
    {
      id: 'step2_shanghai',
      sender: 'bot',
      type: 'text',
      text: "Sending kits from Rotterdam all the way back to Shanghai just to ship them to Dakar? That's a massive detour.\n\nThe Group has a logistics arm that can handle this directly from Europe.",
      typing: 2500,
      delay: 300,
      goto: 'step2_correct',
    },
    {
      id: 'step2_correct',
      sender: 'bot',
      type: 'highlight',
      text: "✅ CEVA Logistics handles the end-to-end flow — warehousing, customs, and multimodal transport from Rotterdam to Dakar.",
      typing: 2000,
      delay: 300,
    },
    {
      id: 'step2_info',
      sender: 'bot',
      type: 'info-card',
      infoCard: {
        emoji: '📦',
        title: 'CEVA Logistics',
        items: [
          'Top-5 global logistics company',
          '27.2M tons of air and sea freight managed',
          '17,000 trucks on the road',
          '1,100+ sites in 170 countries',
          'Bolloré Logistics acquisition (2024) expanded reach across Africa',
        ],
      },
      typing: 1500,
      delay: 400,
      goto: 'step3_ask',
    },

    // ──────────────────────────────────────────────
    // STEP 3 — LAST MILE (Dakar → School)
    // ──────────────────────────────────────────────
    {
      id: 'step3_ask',
      sender: 'bot',
      type: 'text',
      text: "Step 3 — Last mile\n\nEverything has arrived at Dakar port. Now you need to deliver it to a rural school.\nHow do you handle the last mile?",
      typing: 2000,
      delay: 500,
      replies: [
        { text: "🚛 Bolloré Logistics ground network", goto: 'step3_correct' },
        { text: "⛵ Coastal shipping", goto: 'step3_wrong' },
        { text: "🤷 Let the NGO handle it", goto: 'step3_wrong2' },
      ],
    },
    {
      id: 'step3_wrong',
      sender: 'bot',
      type: 'text',
      text: "The school is inland — coastal shipping won't reach it. But the Group recently acquired a company with deep ground networks across Africa.",
      typing: 2000,
      delay: 300,
      goto: 'step3_correct',
    },
    {
      id: 'step3_wrong2',
      sender: 'bot',
      type: 'text',
      text: "CMA CGM doesn't leave the last mile to chance. The Group now has unmatched ground logistics in Africa thanks to a major 2024 acquisition.",
      typing: 2000,
      delay: 300,
      goto: 'step3_correct',
    },
    {
      id: 'step3_correct',
      sender: 'bot',
      type: 'highlight',
      text: "✅ Bolloré Logistics, acquired in 2024, gives the Group the strongest ground network in Africa. Kits and panels reach the school on time.",
      typing: 2500,
      delay: 300,
    },
    {
      id: 'step3_info',
      sender: 'bot',
      type: 'info-card',
      infoCard: {
        emoji: '🚛',
        title: 'Bolloré Logistics (2024 Acquisition)',
        items: [
          'Leader in African logistics infrastructure',
          'CEVA + Bolloré = global leader in e-commerce, automotive, and healthcare logistics',
          'Deep last-mile capabilities in emerging markets',
          'Integrated into the CMA CGM logistics ecosystem',
        ],
      },
      typing: 1500,
      delay: 400,
      goto: 'step4_ask',
    },

    // ──────────────────────────────────────────────
    // STEP 4 — FOUNDATION
    // ──────────────────────────────────────────────
    {
      id: 'step4_ask',
      sender: 'bot',
      type: 'text',
      text: "Step 4 — The Foundation\n\nThe school inauguration is approaching. What role does the CMA CGM Foundation play?",
      typing: 2000,
      delay: 500,
      replies: [
        { text: "💰 Funds the kits + coordinates with NGOs", goto: 'step4_correct' },
        { text: "🚫 Only intervenes in emergencies", goto: 'step4_wrong' },
      ],
    },
    {
      id: 'step4_wrong',
      sender: 'bot',
      type: 'text',
      text: "The Foundation does respond to emergencies — but that's only part of the picture. Education is one of its core pillars, and it actively funds and coordinates projects like this one.",
      typing: 2500,
      delay: 300,
      goto: 'step4_correct',
    },
    {
      id: 'step4_correct',
      sender: 'bot',
      type: 'highlight',
      text: "✅ The CMA CGM Foundation funds the school kits and coordinates with local NGOs to ensure delivery and installation. Solidarity is in the Group's DNA.",
      typing: 2500,
      delay: 300,
    },
    {
      id: 'step4_info',
      sender: 'bot',
      type: 'info-card',
      infoCard: {
        emoji: '❤️',
        title: 'CMA CGM Foundation',
        items: [
          '84,000 tons of humanitarian aid shipped',
          '550+ education projects supported',
          '55 partner associations worldwide',
          '3 pillars: Containers of Hope, Education for All, Social Innovation via Le Phare',
        ],
      },
      typing: 1500,
      delay: 400,
      goto: 'step5_ask',
    },

    // ──────────────────────────────────────────────
    // STEP 5 — MEDIA COVERAGE
    // ──────────────────────────────────────────────
    {
      id: 'step5_ask',
      sender: 'bot',
      type: 'text',
      text: "Step 5 — Media\n\nThe inauguration is a powerful story. How do you give it visibility?",
      typing: 2000,
      delay: 500,
      replies: [
        { text: "📺 CMA Media covers the event", goto: 'step5_correct' },
        { text: "🤷 Not the Group's role", goto: 'step5_wrong' },
      ],
    },
    {
      id: 'step5_wrong',
      sender: 'bot',
      type: 'text',
      text: "Actually, CMA CGM is now a major media player! The Group acquired several media outlets to amplify stories like this one — combining impact with visibility.",
      typing: 2500,
      delay: 300,
      goto: 'step5_correct',
    },
    {
      id: 'step5_correct',
      sender: 'bot',
      type: 'highlight',
      text: "✅ CMA Media deploys a crew to cover the inauguration — amplifying the story across TV, digital, and print.",
      typing: 2000,
      delay: 300,
    },
    {
      id: 'step5_info',
      sender: 'bot',
      type: 'info-card',
      infoCard: {
        emoji: '📺',
        title: 'CMA Media',
        items: [
          'Portfolio: BFM, RMC, La Tribune, Brut, M6, La Provence',
          '1,100 journalists across all platforms',
          '51 million people reached per month',
          'Combines storytelling with Group impact',
        ],
      },
      typing: 1500,
      delay: 400,
      goto: 'step6_ask',
    },

    // ──────────────────────────────────────────────
    // STEP 6 — SUSTAINABILITY BONUS
    // ──────────────────────────────────────────────
    {
      id: 'step6_ask',
      sender: 'bot',
      type: 'text',
      text: "Step 6 — Sustainability bonus\n\nOne more thing. Those solar panels were shipped on an LNG-powered vessel.\nWhat does that mean for emissions?",
      typing: 2500,
      delay: 500,
      replies: [
        { text: "🌿 -20% CO₂ vs conventional fuel", goto: 'step6_correct' },
        { text: "🔋 Runs on battery power", goto: 'step6_wrong' },
        { text: "⛽ Uses regular diesel", goto: 'step6_wrong2' },
      ],
    },
    {
      id: 'step6_wrong',
      sender: 'bot',
      type: 'text',
      text: "Not batteries — not yet at this scale! LNG (Liquefied Natural Gas) is the transition fuel CMA CGM chose to reduce emissions now, while investing in future zero-carbon solutions.",
      typing: 2500,
      delay: 300,
      goto: 'step6_correct',
    },
    {
      id: 'step6_wrong2',
      sender: 'bot',
      type: 'text',
      text: "Nope — diesel is exactly what LNG replaces! CMA CGM was one of the first shipping companies to bet big on LNG as a cleaner alternative.",
      typing: 2000,
      delay: 300,
      goto: 'step6_correct',
    },
    {
      id: 'step6_correct',
      sender: 'bot',
      type: 'highlight',
      text: "✅ LNG reduces CO₂ emissions by 20% compared to conventional fuel. CMA CGM is leading the maritime energy transition.",
      typing: 2000,
      delay: 300,
    },
    {
      id: 'step6_info',
      sender: 'bot',
      type: 'info-card',
      infoCard: {
        emoji: '🌿',
        title: 'CMA CGM Sustainability Strategy',
        items: [
          'LNG and methanol-powered fleet',
          '€1.5B invested in energy transition',
          'Target: -30% CO₂ by 2030',
          'Target: -80% CO₂ by 2040',
          '150+ vessels running on alternative fuels',
        ],
      },
      typing: 1500,
      delay: 400,
    },

    // ──────────────────────────────────────────────
    // MISSION RECAP
    // ──────────────────────────────────────────────
    {
      id: 'mission_complete',
      sender: 'bot',
      type: 'text',
      text: "Mission complete! 🎉",
      typing: 1500,
      delay: 500,
    },
    {
      id: 'mission_recap',
      sender: 'bot',
      type: 'card',
      card: {
        emoji: '🗺️',
        title: 'Mission Recap — Supply Chain',
        items: [
          'Shanghai 🚢→ Dakar (Maritime Transport)',
          'Rotterdam 📦→ Dakar (CEVA Logistics)',
          'Dakar 🚛→ School (Bolloré last mile)',
          'Foundation ❤️ NGO coordination',
          'CMA Media 📺 event coverage',
          'LNG vessel 🌿 -20% CO₂',
        ],
      },
      text: "You mobilized the full power of the Group:\n\n**Transport** | **Logistics** | **Foundation** | **Media** | **Sustainability**\n\nThat's what makes CMA CGM unique — an integrated ecosystem where every activity reinforces the others.",
      typing: 3000,
      delay: 500,
    },

    // ──────────────────────────────────────────────
    // BRANCH SELECTION
    // ──────────────────────────────────────────────
    {
      id: 'branch_intro1',
      sender: 'bot',
      type: 'text',
      text: "You've seen how CMA CGM's activities work together.\nBut there's so much more to discover about where the Group is heading.",
      typing: 2500,
      delay: 500,
    },
    {
      id: 'branch_intro2',
      sender: 'bot',
      type: 'text',
      text: "What interests you most right now?\n\nChoose the topic you'd like to explore deeper. Each path takes about 5 minutes.",
      typing: 2500,
      delay: 400,
      replies: [
        { text: "🌱 Green Horizon", goto: 'branch_chosen', branch: 'green' },
        { text: "📈 Growth Engine", goto: 'branch_chosen', branch: 'growth' },
        { text: "🤖 AI Revolution", goto: 'branch_chosen', branch: 'ai' },
      ],
    },
    {
      id: 'branch_chosen',
      sender: 'bot',
      type: 'text',
      text: "Great choice! Let's dive in.",
      typing: 1500,
      delay: 300,
      complete: true,
    },
  ],
}
