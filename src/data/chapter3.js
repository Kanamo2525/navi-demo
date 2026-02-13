export default {
  id: 'chapter3',
  title: 'Purpose & Values',
  emoji: '🧭',
  flow: [
    // =============================================
    // MOVEMENT 1 — THE WHY (PURPOSE)
    // =============================================
    {
      id: 'purpose_intro_1',
      sender: 'bot',
      type: 'text',
      text: "You've traveled through 47 years. The ships, the milestones, the bold decisions.",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'purpose_intro_2',
      sender: 'bot',
      type: 'text',
      text: "But what drives all of it? What gets 160,000 people moving in the same direction?",
      typing: 1600,
      delay: 500,
    },
    {
      id: 'purpose_reveal_1',
      sender: 'bot',
      type: 'text',
      text: "Nine words.",
      typing: 600,
      delay: 800,
    },
    {
      id: 'purpose_reveal_2',
      sender: 'bot',
      type: 'text',
      text: '**"We imagine better ways to serve a world in motion."**',
      typing: 1200,
      delay: 600,
    },
    {
      id: 'purpose_weight',
      sender: 'bot',
      type: 'text',
      text: "9 words. 160,000 people. 177 countries. Everything the Group does comes back to this.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'purpose_react',
      sender: 'bot',
      type: 'text',
      text: "How does that land for you?",
      typing: 800,
      delay: 200,
      replies: [
        { text: "Powerful \u{1F4AA}", goto: 'principles_intro' },
        { text: "What does it mean day-to-day?", goto: 'purpose_daytoday' },
        { text: "Keep going", goto: 'principles_intro' },
      ],
    },

    // --- Optional branch: day-to-day ---
    {
      id: 'purpose_daytoday',
      sender: 'bot',
      type: 'text',
      text: "It means every route planned, every innovation funded, every partnership built — it's tested against that sentence. Does this serve a world in motion?",
      typing: 2200,
      delay: 400,
    },
    {
      id: 'purpose_daytoday_2',
      sender: 'bot',
      type: 'text',
      text: "If yes, go. If not, rethink.",
      typing: 800,
      delay: 300,
      goto: 'principles_intro',
    },

    // --- Guiding Principles ---
    {
      id: 'principles_intro',
      sender: 'bot',
      type: 'text',
      text: "The purpose has four Guiding Principles that shape how CMA CGM acts on it.",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'principles_card',
      sender: 'bot',
      type: 'card',
      card: {
        emoji: '🧭',
        title: '4 Guiding Principles',
        items: [
          '🔥 Forever Bold — Take risks, move first',
          '⬆️ Faster, Higher, Better — Never stop improving',
          '💪 Where There Is a Will — Obstacles are invitations',
          '🏠 A Sense of Family — Loyalty, trust, long-term',
        ],
      },
      typing: 1400,
      delay: 500,
    },
    {
      id: 'principles_bridge',
      sender: 'bot',
      type: 'text',
      text: "These are the compass. But a compass doesn't do the work. That's where the values come in.",
      typing: 1600,
      delay: 400,
    },

    // =============================================
    // MOVEMENT 2 — THE 4 VALUES (STORIES)
    // =============================================
    {
      id: 'values_intro',
      sender: 'bot',
      type: 'text',
      text: "CMA CGM has four values. Not posters on a wall — decisions made under pressure.",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'values_muscle',
      sender: 'bot',
      type: 'text',
      text: "Principles are the compass. Values are the muscle. Let me show you what I mean.",
      typing: 1500,
      delay: 500,
    },

    // --- BOLDNESS ---
    {
      id: 'boldness_divider',
      sender: 'system',
      type: 'text',
      text: '1/4 — Boldness',
    },
    {
      id: 'boldness_hook',
      sender: 'bot',
      type: 'text',
      text: "**BOLDNESS** — \"Some wait for the right moment. Others create it.\"",
      typing: 1400,
      delay: 400,
    },
    {
      id: 'boldness_story',
      sender: 'bot',
      type: 'text',
      text: "1978. Jacques Saade is in a Shanghai hotel room. No fleet. No investors. Just a vision that containers will change global trade. He signs his first route — Marseille to Beirut.",
      typing: 2400,
      delay: 400,
    },
    {
      id: 'boldness_punchline',
      sender: 'bot',
      type: 'text',
      text: "That one bet became a $74 billion group. Boldness isn't recklessness — it's conviction when others hesitate.",
      typing: 1800,
      delay: 300,
    },
    {
      id: 'boldness_react',
      sender: 'bot',
      type: 'text',
      text: "What do you think?",
      typing: 600,
      delay: 200,
      replies: [
        { text: "That resonates", goto: 'imagination_divider' },
        { text: "Tell me more", goto: 'boldness_more' },
        { text: "Next value \u{27A1}\u{FE0F}", goto: 'imagination_divider' },
      ],
    },
    {
      id: 'boldness_more',
      sender: 'bot',
      type: 'text',
      text: "Boldness is in the DNA. Entering China early, acquiring ANL, launching CMA CGM Air Cargo — every leap started with someone saying \"why not now?\"",
      typing: 2000,
      delay: 300,
      goto: 'imagination_divider',
    },

    // --- IMAGINATION ---
    {
      id: 'imagination_divider',
      sender: 'system',
      type: 'text',
      text: '2/4 — Imagination',
    },
    {
      id: 'imagination_hook',
      sender: 'bot',
      type: 'text',
      text: "**IMAGINATION** — \"The best solutions haven't been invented yet.\"",
      typing: 1400,
      delay: 400,
    },
    {
      id: 'imagination_story',
      sender: 'bot',
      type: 'text',
      text: "2021. CMA CGM decides to launch a cargo airline. Most said it would take years. The team did it in 6 months. First flight: March 2021.",
      typing: 2000,
      delay: 400,
    },
    {
      id: 'imagination_punchline',
      sender: 'bot',
      type: 'text',
      text: "Imagination isn't dreaming — it's seeing a path nobody else sees, then walking it.",
      typing: 1500,
      delay: 300,
    },
    {
      id: 'imagination_react',
      sender: 'bot',
      type: 'text',
      text: "How about this one?",
      typing: 600,
      delay: 200,
      replies: [
        { text: "That resonates", goto: 'excellence_divider' },
        { text: "Tell me more", goto: 'imagination_more' },
        { text: "Next value \u{27A1}\u{FE0F}", goto: 'excellence_divider' },
      ],
    },
    {
      id: 'imagination_more',
      sender: 'bot',
      type: 'text',
      text: "ZEBOX, the startup accelerator. Kyutai, AI research. CMA CGM doesn't just transport goods — it invests in ideas that reshape the industry.",
      typing: 2000,
      delay: 300,
      goto: 'excellence_divider',
    },

    // --- EXCELLENCE ---
    {
      id: 'excellence_divider',
      sender: 'system',
      type: 'text',
      text: '3/4 — Excellence',
    },
    {
      id: 'excellence_hook',
      sender: 'bot',
      type: 'text',
      text: "**EXCELLENCE** — \"Anyone can promise quality. Excellence is delivering it every single time.\"",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'excellence_story',
      sender: 'bot',
      type: 'text',
      text: "2020. A major cyberattack hits the Group's IT systems. The Fleet Center — which monitors every vessel in real time — goes dark.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'excellence_story_2',
      sender: 'bot',
      type: 'text',
      text: "Teams worked around the clock. Full operations restored in 10 days. Not a single container was lost.",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'excellence_punchline',
      sender: 'bot',
      type: 'text',
      text: "Excellence isn't perfection — it's the refusal to drop the standard when things get hard.",
      typing: 1500,
      delay: 300,
    },
    {
      id: 'excellence_react',
      sender: 'bot',
      type: 'text',
      text: "Still with me?",
      typing: 600,
      delay: 200,
      replies: [
        { text: "That resonates", goto: 'exemplarity_divider' },
        { text: "Tell me more", goto: 'excellence_more' },
        { text: "Next value \u{27A1}\u{FE0F}", goto: 'exemplarity_divider' },
      ],
    },
    {
      id: 'excellence_more',
      sender: 'bot',
      type: 'text',
      text: "The Fleet Center in Marseille tracks 600+ vessels 24/7. Every route optimized, every delay anticipated. That's what operational excellence looks like at scale.",
      typing: 2200,
      delay: 300,
      goto: 'exemplarity_divider',
    },

    // --- EXEMPLARITY ---
    {
      id: 'exemplarity_divider',
      sender: 'system',
      type: 'text',
      text: '4/4 — Exemplarity',
    },
    {
      id: 'exemplarity_hook',
      sender: 'bot',
      type: 'text',
      text: "**EXEMPLARITY** — \"The strongest leadership is demonstrated, not spoken.\"",
      typing: 1400,
      delay: 400,
    },
    {
      id: 'exemplarity_story',
      sender: 'bot',
      type: 'text',
      text: "2008. The financial crisis hits shipping hard. Competitors lay off thousands. CMA CGM's decision? Zero layoffs. Protect every employee.",
      typing: 2000,
      delay: 400,
    },
    {
      id: 'exemplarity_story_2',
      sender: 'bot',
      type: 'text',
      text: "And when disasters strike — Beirut explosion, Turkey earthquake — the CMA CGM Foundation mobilizes ships to deliver aid. Not for PR. Because that's who they are.",
      typing: 2200,
      delay: 400,
    },
    {
      id: 'exemplarity_punchline',
      sender: 'bot',
      type: 'text',
      text: "Exemplarity means your actions speak before your words do.",
      typing: 1200,
      delay: 300,
    },
    {
      id: 'exemplarity_react',
      sender: 'bot',
      type: 'text',
      text: "Those are the four values. Which one hit different?",
      typing: 1000,
      delay: 200,
      replies: [
        { text: "Boldness \u{1F525}", goto: 'quiz_intro' },
        { text: "Imagination \u{1F4A1}", goto: 'quiz_intro' },
        { text: "Excellence / Exemplarity", goto: 'quiz_intro' },
      ],
    },

    // =============================================
    // MOVEMENT 3 — SIGNATURE VALUE QUIZ
    // =============================================
    {
      id: 'quiz_intro',
      sender: 'bot',
      type: 'text',
      text: "Good instinct. Now let's go deeper.",
      typing: 800,
      delay: 400,
    },
    {
      id: 'quiz_intro_2',
      sender: 'bot',
      type: 'text',
      text: "Time to find **your Signature Value**. 4 situations, no wrong answers. Just go with your gut.",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'quiz_ready',
      sender: 'bot',
      type: 'text',
      text: "Ready?",
      typing: 500,
      delay: 200,
      replies: [
        { text: "Let's do it", goto: 'scenario_1_intro' },
        { text: "What's a Signature Value?", goto: 'quiz_explain' },
      ],
    },
    {
      id: 'quiz_explain',
      sender: 'bot',
      type: 'text',
      text: "All four values matter. But we each have one that's most natural — the one we reach for first, instinctively. That's your Signature Value.",
      typing: 2000,
      delay: 300,
      goto: 'scenario_1_intro',
    },

    // --- SCENARIO 1: Client crisis ---
    {
      id: 'scenario_1_intro',
      sender: 'system',
      type: 'text',
      text: 'Scenario 1 of 4',
    },
    {
      id: 'scenario_1',
      sender: 'bot',
      type: 'text',
      text: "A key client's shipment is stuck. They need it in 48 hours or they lose the contract. What's your first move?",
      typing: 2000,
      delay: 400,
      replies: [
        { text: "Push every lever at once", goto: 'scenario_2_intro', score: { value: 'boldness', points: 1 } },
        { text: "Find a creative workaround", goto: 'scenario_2_intro', score: { value: 'imagination', points: 1 } },
        { text: "Track every step, zero margin for error", goto: 'scenario_2_intro', score: { value: 'excellence', points: 1 } },
      ],
    },

    // --- SCENARIO 2: Innovation project ---
    {
      id: 'scenario_2_intro',
      sender: 'system',
      type: 'text',
      text: 'Scenario 2 of 4',
    },
    {
      id: 'scenario_2',
      sender: 'bot',
      type: 'text',
      text: "You're invited to an innovation sprint. A new project, blank page. How do you contribute?",
      typing: 1800,
      delay: 400,
      replies: [
        { text: "Propose what nobody dares to say", goto: 'scenario_3_intro', score: { value: 'boldness', points: 1 } },
        { text: "Combine ideas nobody's connected before", goto: 'scenario_3_intro', score: { value: 'imagination', points: 1 } },
        { text: "Make sure it benefits everyone, not just us", goto: 'scenario_3_intro', score: { value: 'exemplarity', points: 1 } },
      ],
    },

    // --- SCENARIO 3: Colleague's mistake ---
    {
      id: 'scenario_3_intro',
      sender: 'system',
      type: 'text',
      text: 'Scenario 3 of 4',
    },
    {
      id: 'scenario_3',
      sender: 'bot',
      type: 'text',
      text: "A colleague makes a costly mistake on a project you're both on. How do you handle it?",
      typing: 1800,
      delay: 400,
      replies: [
        { text: "Face the consequences head-on together", goto: 'scenario_4_intro', score: { value: 'boldness', points: 1 } },
        { text: "Turn it into a learning opportunity", goto: 'scenario_4_intro', score: { value: 'imagination', points: 1 } },
        { text: "Support them publicly, address it privately", goto: 'scenario_4_intro', score: { value: 'exemplarity', points: 1 } },
      ],
    },

    // --- SCENARIO 4: Leading a team ---
    {
      id: 'scenario_4_intro',
      sender: 'system',
      type: 'text',
      text: 'Scenario 4 of 4',
    },
    {
      id: 'scenario_4',
      sender: 'bot',
      type: 'text',
      text: "It's your first day leading a new team. What's your priority?",
      typing: 1400,
      delay: 400,
      replies: [
        { text: "Set an ambitious vision from day one", goto: 'quiz_result_intro', score: { value: 'boldness', points: 1 } },
        { text: "Listen first, then co-create the plan", goto: 'quiz_result_intro', score: { value: 'imagination', points: 1 } },
        { text: "Understand the process, raise the bar", goto: 'quiz_result_intro', score: { value: 'excellence', points: 1 } },
      ],
    },

    // --- QUIZ RESULT ---
    {
      id: 'quiz_result_intro',
      sender: 'bot',
      type: 'text',
      text: "Interesting choices. Let me look at the pattern...",
      typing: 1200,
      delay: 800,
    },
    {
      id: 'quiz_result_reveal',
      sender: 'bot',
      type: 'quiz-result',
      text: "Your choices reveal something. Your Signature Value is...",
      typing: 1500,
      delay: 600,
    },
    {
      id: 'quiz_result_meaning',
      sender: 'bot',
      type: 'text',
      text: "This is the value you reach for naturally — your instinctive response when things get real.",
      typing: 1600,
      delay: 400,
    },
    {
      id: 'quiz_result_reassure',
      sender: 'bot',
      type: 'text',
      text: "It doesn't mean the others don't matter. It means this one is your anchor. The one that feels most like you.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'quiz_result_compass',
      sender: 'bot',
      type: 'text',
      text: "Your Signature Value isn't a label — it's a compass. Keep it close.",
      typing: 1400,
      delay: 500,
    },
    {
      id: 'quiz_result_react',
      sender: 'bot',
      type: 'text',
      text: "Does it feel right?",
      typing: 600,
      delay: 200,
      replies: [
        { text: "Spot on \u{1F3AF}", goto: 'transition_ch4' },
        { text: "Surprised, but I see it", goto: 'transition_ch4' },
        { text: "Let's keep going", goto: 'transition_ch4' },
      ],
    },

    // =============================================
    // TRANSITION TO CHAPTER 4
    // =============================================
    {
      id: 'transition_ch4',
      sender: 'bot',
      type: 'text',
      text: "Now you know the story, the purpose, and the values. But here's the thing — CMA CGM isn't just one business.",
      typing: 1800,
      delay: 400,
    },
    {
      id: 'transition_ch4_2',
      sender: 'bot',
      type: 'text',
      text: "Next up: the Group in action. Transport, logistics, media — and a hands-on mission. \u{1F30D}",
      typing: 1600,
      delay: 300,
    },

    // --- END ---
    {
      id: 'end',
      sender: 'system',
      type: 'text',
      text: 'Chapter 3 complete \u{2713}',
      complete: true,
    },
  ],
}
