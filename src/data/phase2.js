// Phase 2: My Values in Action
// 4 professional scenarios with hidden value scoring
// Values: boldness, imagination, excellence, exemplarity

const VALUE_DESCRIPTIONS = {
  boldness: {
    emoji: '\u{1F981}',
    title: 'Boldness',
    desc: 'You dare to take bold steps and invest in the future. You act when others hesitate.',
    example: "Like Jacques Saade opening CMA's China office from a single hotel room in 1992 -- 9 years before China joined the WTO.",
  },
  imagination: {
    emoji: '\u{1F4A1}',
    title: 'Imagination',
    desc: 'You find creative solutions where others see obstacles. You connect ideas that have never been associated.',
    example: 'Like CMA CGM launching Air Cargo in just 6 months during COVID -- when most said it would take years.',
  },
  excellence: {
    emoji: '\u{2B50}',
    title: 'Excellence',
    desc: 'You pursue the highest standards in everything you do. Details matter. Quality is non-negotiable.',
    example: 'Like CMA CGM restoring all systems in 10 days after a major ransomware attack -- when analysts expected months.',
  },
  exemplarity: {
    emoji: '\u{1F91D}',
    title: 'Exemplarity',
    desc: 'You act with integrity and lead by example. You put people first.',
    example: 'Like CMA CGM refusing mass layoffs during the 2008 financial crisis -- the company was saved WITH its people, not at their expense.',
  },
}

export default {
  id: 'phase2',
  title: 'My Values in Action',
  emoji: '\u{1F3AF}',
  subtitle: 'Discover your signature value',
  flow: [
    // ──────────────────────────────────────────────
    // INTRO
    // ──────────────────────────────────────────────
    {
      id: 'values_intro1',
      sender: 'bot',
      type: 'text',
      text: "Now for something different. I'm going to show you 4 real-world situations.",
      typing: 2000,
      delay: 300,
    },
    {
      id: 'values_intro2',
      sender: 'bot',
      type: 'text',
      text: "React instinctively -- there are no wrong answers.",
      typing: 1500,
      delay: 400,
    },

    // ──────────────────────────────────────────────
    // SCENARIO 1 — CLIENT IN CRISIS
    // ──────────────────────────────────────────────
    {
      id: 'scenario1_divider',
      sender: 'system',
      type: 'divider',
      text: 'Scenario 1 of 4',
      delay: 300,
    },
    {
      id: 'scenario1_ask',
      sender: 'bot',
      type: 'text',
      text: "Imagine this. A client calls -- their shipment is stuck, 48 hours from deadline. What's your instinct?",
      typing: 2500,
      delay: 400,
      replies: [
        {
          text: "I'd contact every intermediary -- push all levers",
          goto: 'ack1',
          score: { value: 'boldness', points: 1 },
        },
        {
          text: "I'd find a creative workaround nobody's tried",
          goto: 'ack1',
          score: { value: 'imagination', points: 1 },
        },
        {
          text: "I'd track every step hour by hour -- zero margin",
          goto: 'ack1',
          score: { value: 'excellence', points: 1 },
        },
        {
          text: "I'd be fully transparent AND commit to fix it",
          goto: 'ack1',
          score: { value: 'exemplarity', points: 1 },
        },
      ],
    },
    {
      id: 'ack1',
      sender: 'bot',
      type: 'text',
      text: "Interesting choice. That tells me something about you... Let's keep going.",
      typing: 2000,
      delay: 300,
    },

    // ──────────────────────────────────────────────
    // SCENARIO 2 — INNOVATION PROJECT
    // ──────────────────────────────────────────────
    {
      id: 'scenario2_divider',
      sender: 'system',
      type: 'divider',
      text: 'Scenario 2 of 4',
      delay: 300,
    },
    {
      id: 'scenario2_ask',
      sender: 'bot',
      type: 'text',
      text: "Your team is launching a new project. How do you contribute?",
      typing: 2000,
      delay: 400,
      replies: [
        {
          text: "I push for the most ambitious scope possible",
          goto: 'ack2',
          score: { value: 'boldness', points: 1 },
        },
        {
          text: "I brainstorm ideas from completely different industries",
          goto: 'ack2',
          score: { value: 'imagination', points: 1 },
        },
        {
          text: "I build the most detailed plan and timeline",
          goto: 'ack2',
          score: { value: 'excellence', points: 1 },
        },
        {
          text: "I make sure every voice on the team is heard",
          goto: 'ack2',
          score: { value: 'exemplarity', points: 1 },
        },
      ],
    },
    {
      id: 'ack2',
      sender: 'bot',
      type: 'text',
      text: "I see a pattern forming... One more scenario and I'll have a clear picture.",
      typing: 2000,
      delay: 300,
    },

    // ──────────────────────────────────────────────
    // SCENARIO 3 — DIFFICULT DECISION
    // ──────────────────────────────────────────────
    {
      id: 'scenario3_divider',
      sender: 'system',
      type: 'divider',
      text: 'Scenario 3 of 4',
      delay: 300,
    },
    {
      id: 'scenario3_ask',
      sender: 'bot',
      type: 'text',
      text: "A colleague makes a mistake that could cost the team. What do you do?",
      typing: 2000,
      delay: 400,
      replies: [
        {
          text: "I step up and take responsibility alongside them",
          goto: 'ack3',
          score: { value: 'boldness', points: 1 },
        },
        {
          text: "I reframe the mistake as a learning opportunity",
          goto: 'ack3',
          score: { value: 'imagination', points: 1 },
        },
        {
          text: "I analyze what went wrong and build a fix protocol",
          goto: 'ack3',
          score: { value: 'excellence', points: 1 },
        },
        {
          text: "I speak with them privately and help them own it",
          goto: 'ack3',
          score: { value: 'exemplarity', points: 1 },
        },
      ],
    },
    {
      id: 'ack3',
      sender: 'bot',
      type: 'text',
      text: "That says a lot. One last situation -- let's see how it plays out.",
      typing: 2000,
      delay: 300,
    },

    // ──────────────────────────────────────────────
    // SCENARIO 4 — NEW TEAM
    // ──────────────────────────────────────────────
    {
      id: 'scenario4_divider',
      sender: 'system',
      type: 'divider',
      text: 'Scenario 4 of 4',
      delay: 300,
    },
    {
      id: 'scenario4_ask',
      sender: 'bot',
      type: 'text',
      text: "It's your first day leading a new team. What's your priority?",
      typing: 2000,
      delay: 400,
      replies: [
        {
          text: "Set an audacious goal to rally everyone around",
          goto: 'ack4',
          score: { value: 'boldness', points: 1 },
        },
        {
          text: "Propose something unexpected to break the ice",
          goto: 'ack4',
          score: { value: 'imagination', points: 1 },
        },
        {
          text: "Understand every process before changing anything",
          goto: 'ack4',
          score: { value: 'excellence', points: 1 },
        },
        {
          text: "Meet each person one-on-one and really listen",
          goto: 'ack4',
          score: { value: 'exemplarity', points: 1 },
        },
      ],
    },
    {
      id: 'ack4',
      sender: 'bot',
      type: 'text',
      text: "Perfect. I've got everything I need.",
      typing: 1500,
      delay: 300,
    },

    // ──────────────────────────────────────────────
    // SIGNATURE VALUE REVEAL
    // ──────────────────────────────────────────────
    {
      id: 'reveal_intro',
      sender: 'bot',
      type: 'text',
      text: "Your choices reveal something powerful about who you are.",
      typing: 2500,
      delay: 500,
    },
    {
      id: 'reveal_result',
      sender: 'bot',
      type: 'quiz-result',
      text: (userData) => {
        const scores = userData.scores || {}
        const entries = Object.entries(scores)

        // If no scores yet, default to boldness
        if (entries.length === 0) {
          const d = VALUE_DESCRIPTIONS.boldness
          return `Your Signature Value is... **${d.title}** ${d.emoji}\n\n${d.desc}\n\nAt CMA CGM, this value is at the heart of who we are.\n${d.example}`
        }

        entries.sort((a, b) => b[1] - a[1])
        const top = entries[0][0]
        const d = VALUE_DESCRIPTIONS[top]

        return `Your Signature Value is... **${d.title}** ${d.emoji}\n\n${d.desc}\n\nAt CMA CGM, this value is at the heart of who we are.\n${d.example}`
      },
      typing: 3000,
      delay: 500,
    },
    {
      id: 'reveal_context',
      sender: 'bot',
      type: 'info-card',
      text: (userData) => {
        const scores = userData.scores || {}
        const entries = Object.entries(scores)

        if (entries.length === 0) {
          return 'Boldness, Imagination, Excellence, Exemplarity -- these are the 4 values that drive everything at CMA CGM. Each one matters. Yours simply shines the brightest.'
        }

        entries.sort((a, b) => b[1] - a[1])
        const ranked = entries.map(([key]) => {
          const d = VALUE_DESCRIPTIONS[key]
          return `${d.emoji} ${d.title}`
        })

        return `Your full value profile:\n${ranked.map((v, i) => `${i + 1}. ${v}`).join('\n')}\n\nBoldness, Imagination, Excellence, Exemplarity -- these are the 4 values that drive everything at CMA CGM. Each one matters. Yours simply shines the brightest.`
      },
      typing: 2500,
      delay: 400,
    },

    // ──────────────────────────────────────────────
    // TRANSITION
    // ──────────────────────────────────────────────
    {
      id: 'phase2_transition',
      sender: 'bot',
      type: 'text',
      text: "Now that you know your Signature Value, let me show you what CMA CGM actually DOES -- across the world, every day.",
      typing: 2500,
      delay: 500,
      complete: true,
    },
  ],
}
