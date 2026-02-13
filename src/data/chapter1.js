export default {
  id: 'chapter1',
  title: 'Welcome',
  emoji: '👋',
  flow: [
    // --- CEO VIDEO ---
    {
      id: 'ceo_video',
      sender: 'bot',
      type: 'media',
      media: { emoji: '🎬', alt: 'CEO Welcome Video — Rodolphe Saade' },
      typing: 800,
    },
    {
      id: 'journey_starts',
      sender: 'system',
      type: 'text',
      text: 'Your journey starts here',
    },

    // --- NAVI INTRO ---
    {
      id: 'navi_intro_1',
      sender: 'bot',
      type: 'text',
      text: "Hey! I'm Navi 🧭",
      typing: 800,
      delay: 600,
    },
    {
      id: 'navi_intro_2',
      sender: 'bot',
      type: 'text',
      text: "I'll be your guide through Discovery — a journey into CMA CGM's story, purpose, and what makes this group tick.",
      typing: 1800,
      delay: 300,
    },

    // --- ROADMAP CARD ---
    {
      id: 'roadmap_card',
      sender: 'bot',
      type: 'card',
      card: {
        emoji: '🗺️',
        title: 'Your Discovery Roadmap',
        items: [
          '👋 Welcome & Introduction',
          '📜 History — The CMA CGM Story',
          '🧭 Purpose & Values',
          '🌍 Activities & Business Lines',
          '🚀 Your Role in the Adventure',
        ],
      },
      typing: 1200,
      delay: 400,
    },

    // --- TONE SETTER ---
    {
      id: 'not_a_lecture',
      sender: 'bot',
      type: 'text',
      text: "This isn't a lecture. I'll ask you questions, share stories, and let you explore at your own pace.",
      typing: 1800,
      delay: 300,
    },
    {
      id: 'no_wrong_answers',
      sender: 'bot',
      type: 'text',
      text: "There are no wrong answers — just discoveries. Ready?",
      typing: 1200,
      delay: 300,
    },

    // --- FIRST CHOICE ---
    {
      id: 'ready_choice',
      sender: 'bot',
      type: 'text',
      text: "What do you say?",
      typing: 800,
      delay: 200,
      replies: [
        { text: "Let's go! 🚀", goto: 'stats_intro' },
        { text: "Tell me more first", goto: 'more_info_1' },
      ],
    },

    // --- TELL ME MORE BRANCH ---
    {
      id: 'more_info_1',
      sender: 'bot',
      type: 'text',
      text: "Sure! Here's how it works:",
      typing: 800,
    },
    {
      id: 'more_info_2',
      sender: 'bot',
      type: 'card',
      card: {
        emoji: '💡',
        title: 'How Discovery Works',
        items: [
          '1️⃣ Short chapters you can do at your own pace',
          '2️⃣ I ask questions — you pick answers or explore',
          '3️⃣ Videos, stories, and a few surprises along the way',
        ],
      },
      typing: 1400,
      delay: 300,
    },
    {
      id: 'more_info_3',
      sender: 'bot',
      type: 'text',
      text: "Think of it like a conversation, not a training module. We good?",
      typing: 1400,
      delay: 300,
      goto: 'stats_intro',
    },

    // --- CMA CGM STATS ---
    {
      id: 'stats_intro',
      sender: 'bot',
      type: 'text',
      text: "One last thing before we dive in. Let me put something in perspective for you.",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'stats_1978',
      sender: 'bot',
      type: 'text',
      text: "**1978:** 1 man. 1 ship. 4 employees. A single route between Marseille and Beirut.",
      typing: 1600,
      delay: 300,
    },
    {
      id: 'stats_today',
      sender: 'bot',
      type: 'text',
      text: "**Today:** 160,000 people. 420 ports. 177 countries. One of the world's largest shipping & logistics groups.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'stats_reaction',
      sender: 'bot',
      type: 'text',
      text: "That's the journey you're about to discover — and the one you're now part of.",
      typing: 1500,
      delay: 500,
    },

    // --- FINAL READY CHECK ---
    {
      id: 'chapter_ready',
      sender: 'bot',
      type: 'text',
      text: "Your chapter starts now. Ready?",
      typing: 1000,
      delay: 400,
      replies: [
        { text: "Let's go! 🚀", goto: 'transition' },
      ],
    },

    // --- TRANSITION ---
    {
      id: 'transition',
      sender: 'bot',
      type: 'text',
      text: "First stop: the story. CMA CGM started in 1978 with a bold bet on containers.",
      typing: 1600,
      delay: 300,
    },
    {
      id: 'transition_2',
      sender: 'bot',
      type: 'text',
      text: "Let's travel back. 🕰️",
      typing: 800,
      delay: 300,
    },

    // --- END ---
    {
      id: 'end',
      sender: 'system',
      type: 'text',
      text: 'Chapter 1 complete ✓',
      complete: true,
    },
  ],
}
