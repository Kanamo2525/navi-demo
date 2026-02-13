export default {
  id: 'chapter5',
  title: 'Foundation',
  emoji: '🤝',
  flow: [
    // =========================================
    // MOVEMENT 1 — THE THREAD
    // =========================================
    {
      id: 'hook',
      sender: 'bot',
      type: 'text',
      text: "In the last chapter, you coordinated a humanitarian delivery. But who makes all of that possible?",
      typing: 2000,
      delay: 400,
    },
    {
      id: 'foundation_intro',
      sender: 'bot',
      type: 'text',
      text: "The **CMA CGM Foundation.** Since 2005.",
      typing: 1200,
      delay: 400,
    },
    {
      id: 'tanya',
      sender: 'bot',
      type: 'text',
      text: "Chaired by Tanya Saade Zeenny. Born from a conviction: a company that connects the world has a responsibility to the people in it.",
      typing: 2200,
      delay: 300,
    },
    {
      id: 'action',
      sender: 'bot',
      type: 'text',
      text: "Not charity. Not communication. **Action.**",
      typing: 1000,
      delay: 500,
    },
    {
      id: 'key_figures_card',
      sender: 'bot',
      type: 'card',
      card: {
        emoji: '🌍',
        title: 'Foundation — Key Figures',
        items: [
          '📦 43,000+ tons of humanitarian aid transported',
          '🌐 88 countries reached',
          '📚 550+ education projects supported',
        ],
      },
      typing: 1400,
      delay: 400,
    },

    // =========================================
    // MOVEMENT 2 — THREE PILLARS
    // =========================================
    {
      id: 'pillars_intro',
      sender: 'bot',
      type: 'text',
      text: "Three pillars. Three ways to make an impact.",
      typing: 1200,
      delay: 500,
    },

    // --- PILLAR 1: CONTAINERS OF HOPE ---
    {
      id: 'pillar1_divider',
      sender: 'system',
      type: 'divider',
      text: '— Containers of Hope —',
    },
    {
      id: 'containers_1',
      sender: 'bot',
      type: 'text',
      text: "A 40-foot container can carry 20 tons of consumer goods. Or it can carry medicine for **15,000 children.**",
      typing: 2000,
      delay: 400,
    },
    {
      id: 'pharmabox_media',
      sender: 'bot',
      type: 'media',
      media: { emoji: '📦', alt: 'PharmaBox — Mobile pharmacy container' },
      typing: 800,
      delay: 300,
    },
    {
      id: 'pharmabox_story',
      sender: 'bot',
      type: 'text',
      text: "Meet the **PharmaBox** — a standard container converted into a fully autonomous mobile pharmacy. Solar-powered. First one left Marseille in December 2024, now operational in Bangui, Central African Republic.",
      typing: 2800,
      delay: 300,
    },
    {
      id: 'pharmabox_impact',
      sender: 'bot',
      type: 'text',
      text: "15,000 children treated for undernutrition. Nine more PharmaBoxes being deployed across Africa.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'pillar1_choice',
      sender: 'bot',
      type: 'text',
      text: "What do you think?",
      typing: 800,
      delay: 300,
      replies: [
        { text: "Incredible 🙌", goto: 'pillar1_react' },
        { text: "Tell me about Education", goto: 'pillar1_react' },
      ],
    },
    {
      id: 'pillar1_react',
      sender: 'bot',
      type: 'text',
      text: "Right? When you rethink what a container can do, you rethink what a shipping company can be.",
      typing: 1800,
      delay: 400,
    },

    // --- PILLAR 2: EDUCATION FOR ALL ---
    {
      id: 'pillar2_divider',
      sender: 'system',
      type: 'divider',
      text: '— Education for All —',
    },
    {
      id: 'education_1',
      sender: 'bot',
      type: 'text',
      text: "A container carries goods across the ocean. Education carries people across their lifetime.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'education_card',
      sender: 'bot',
      type: 'card',
      card: {
        emoji: '📚',
        title: 'Education for All',
        items: [
          '550+ education projects worldwide',
          'Partnership with OM Fondation in Marseille — 1,300+ students',
          'Salvation Army: 500,000+ meals, 200 CMA CGM volunteers, 5 US cities',
        ],
      },
      typing: 1400,
      delay: 300,
    },
    {
      id: 'education_2',
      sender: 'bot',
      type: 'text',
      text: "From classrooms in Marseille to food banks in the US — the Foundation shows up where it matters.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'pillar2_choice',
      sender: 'bot',
      type: 'text',
      text: "Ready for the third pillar?",
      typing: 1000,
      delay: 300,
      replies: [
        { text: "What else? 👀", goto: 'pillar3_divider' },
        { text: "Next pillar →", goto: 'pillar3_divider' },
      ],
    },

    // --- PILLAR 3: LE PHARE ---
    {
      id: 'pillar3_divider',
      sender: 'system',
      type: 'divider',
      text: '— Le Phare —',
    },
    {
      id: 'phare_1',
      sender: 'bot',
      type: 'text',
      text: "What if a shipping company could incubate not just startups — but **social change?**",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'phare_2',
      sender: 'bot',
      type: 'text',
      text: "That's **Le Phare** — the Foundation's social innovation lab. 55 associations and startups backed since 2021.",
      typing: 1800,
      delay: 300,
    },
    {
      id: 'phare_3',
      sender: 'bot',
      type: 'text',
      text: "Focus areas: inclusion, skills development, and community resilience. Concrete support for people building a better world.",
      typing: 2000,
      delay: 400,
    },
    {
      id: 'pillar3_choice',
      sender: 'bot',
      type: 'text',
      text: "That's the three pillars. What now?",
      typing: 1000,
      delay: 300,
      replies: [
        { text: "How does it all connect?", goto: 'pillars_synthesis' },
        { text: "Quiz time! 🧠", goto: 'quiz_intro' },
      ],
    },

    // --- PILLARS SYNTHESIS (optional path) ---
    {
      id: 'pillars_synthesis',
      sender: 'bot',
      type: 'text',
      text: "Containers of Hope moves what's urgent. Education builds what lasts. Le Phare sparks what's next. Together, they turn global reach into global responsibility.",
      typing: 2400,
      delay: 400,
      goto: 'quiz_intro',
    },

    // =========================================
    // MOVEMENT 3 — QUICK QUIZ
    // =========================================
    {
      id: 'quiz_intro',
      sender: 'bot',
      type: 'text',
      text: "Quick check — let's see what you remember! 🧠",
      typing: 1200,
      delay: 500,
    },

    // --- Quiz Q1 ---
    {
      id: 'quiz_q1',
      sender: 'bot',
      type: 'text',
      text: "How many tons of humanitarian cargo has the Foundation transported?",
      typing: 1400,
      delay: 300,
      replies: [
        { text: "43,000+", goto: 'quiz_q1_correct' },
        { text: "84,000", goto: 'quiz_q1_wrong' },
        { text: "10,000", goto: 'quiz_q1_wrong' },
      ],
    },
    {
      id: 'quiz_q1_correct',
      sender: 'bot',
      type: 'text',
      text: "**Correct!** 43,000+ tons across 88 countries. That's a lot of impact in a metal box. ✅",
      typing: 1600,
      delay: 400,
      goto: 'quiz_q2',
    },
    {
      id: 'quiz_q1_wrong',
      sender: 'bot',
      type: 'text',
      text: "Not quite — it's **43,000+ tons** across 88 countries. An incredible number.",
      typing: 1400,
      delay: 400,
      goto: 'quiz_q2',
    },

    // --- Quiz Q2 ---
    {
      id: 'quiz_q2',
      sender: 'bot',
      type: 'text',
      text: "What is **Le Phare?**",
      typing: 1000,
      delay: 400,
      replies: [
        { text: "A training center", goto: 'quiz_q2_wrong' },
        { text: "A social innovation lab", goto: 'quiz_q2_correct' },
        { text: "A shipping route", goto: 'quiz_q2_wrong' },
      ],
    },
    {
      id: 'quiz_q2_correct',
      sender: 'bot',
      type: 'text',
      text: "**Nailed it!** Le Phare is the Foundation's social innovation lab — 55 projects backed since 2021. ✅",
      typing: 1800,
      delay: 400,
      goto: 'quiz_q3',
    },
    {
      id: 'quiz_q2_wrong',
      sender: 'bot',
      type: 'text',
      text: "Close, but no — Le Phare is the Foundation's **social innovation lab.** 55 projects backed since 2021.",
      typing: 1800,
      delay: 400,
      goto: 'quiz_q3',
    },

    // --- Quiz Q3 ---
    {
      id: 'quiz_q3',
      sender: 'bot',
      type: 'text',
      text: "Last one. What is a **PharmaBox?**",
      typing: 1200,
      delay: 400,
      replies: [
        { text: "Mobile pharmacy in a container", goto: 'quiz_q3_correct' },
        { text: "A medicine brand", goto: 'quiz_q3_wrong' },
        { text: "A shipping service", goto: 'quiz_q3_wrong' },
      ],
    },
    {
      id: 'quiz_q3_correct',
      sender: 'bot',
      type: 'text',
      text: "**Yes!** A solar-powered mobile pharmacy in a shipping container. Healthcare delivered where roads don't go. ✅",
      typing: 2000,
      delay: 400,
      goto: 'finale_start',
    },
    {
      id: 'quiz_q3_wrong',
      sender: 'bot',
      type: 'text',
      text: "Not quite — a PharmaBox is a **mobile pharmacy built inside a shipping container.** Solar-powered and fully autonomous.",
      typing: 2000,
      delay: 400,
      goto: 'finale_start',
    },

    // =========================================
    // MOVEMENT 4 — GRAND FINALE
    // =========================================
    {
      id: 'finale_start',
      sender: 'bot',
      type: 'text',
      text: "Since 2005, the Foundation has turned CMA CGM's global reach into a force for solidarity.",
      typing: 1800,
      delay: 500,
    },
    {
      id: 'finale_pillars',
      sender: 'bot',
      type: 'text',
      text: "Containers of Hope moves what matters most. Education builds futures. Le Phare sparks change.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'finale_message',
      sender: 'bot',
      type: 'text',
      text: "**Connecting the world means caring for the people in it.**",
      typing: 1600,
      delay: 600,
    },
    {
      id: 'discovery_complete',
      sender: 'system',
      type: 'text',
      text: '🎉 Discovery Complete',
    },
    {
      id: 'finale_reflect_1',
      sender: 'bot',
      type: 'text',
      text: "You've just explored the story, values, activities, and heart of CMA CGM.",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'finale_reflect_2',
      sender: 'bot',
      type: 'text',
      text: "From one ship in 1978 to a global force for trade, innovation, and solidarity.",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'finale_welcome',
      sender: 'bot',
      type: 'text',
      text: "And now — your chapter begins. Welcome aboard. 🚢",
      typing: 1400,
      delay: 500,
    },
    {
      id: 'celebration_media',
      sender: 'bot',
      type: 'media',
      media: { emoji: '🎊', alt: 'Celebration — Discovery journey complete' },
      typing: 800,
      delay: 400,
    },
    {
      id: 'finale_choice',
      sender: 'bot',
      type: 'text',
      text: "It's been a pleasure. Any last words?",
      typing: 1200,
      delay: 400,
      replies: [
        { text: "Thank you, Navi! 🙏", goto: 'farewell' },
        { text: "Restart from beginning", goto: 'farewell' },
      ],
    },
    {
      id: 'farewell',
      sender: 'bot',
      type: 'text',
      text: "It was a pleasure guiding you. See you on board! 🧭",
      typing: 1400,
      delay: 300,
    },

    // --- END ---
    {
      id: 'end',
      sender: 'system',
      type: 'text',
      text: 'Chapter 5 complete ✓',
      complete: true,
    },
  ],
}
