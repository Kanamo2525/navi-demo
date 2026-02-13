// Phase 1: My Story x Our Story
// Connects the learner's personal timeline with CMA CGM's history

const CMA_EVENTS = [
  { start: 0,    end: 1977, year: 'Before 1978', text: "Before the Group was even born, Jacques Saade dreamed of connecting the world by sea." },
  { start: 1978, end: 1982, year: '1978', text: "Jacques Saade founded CMA in Marseille with a single vessel -- a family dream." },
  { start: 1983, end: 1991, year: '1983', text: "CMA's first vessel crossed Suez, opening bold new maritime routes." },
  { start: 1992, end: 1998, year: '1992', text: "CMA opened its first office in China -- a hotel room -- 9 years before China joined the WTO." },
  { start: 1999, end: 2004, year: '1999', text: "CMA and CGM merged, propelling the Group into the world's top shipping companies." },
  { start: 2005, end: 2007, year: '2005', text: "The CMA CGM Foundation was created -- solidarity in action since day one." },
  { start: 2008, end: 2010, year: '2008', text: "CMA CGM navigated the financial crisis -- refusing layoffs, saving the company WITH its people." },
  { start: 2011, end: 2016, year: '2011', text: "The Group consolidated global alliances and prepared a historic leadership transition." },
  { start: 2017, end: 2018, year: '2017', text: "Rodolphe Saade became CEO. He ordered the largest LNG-powered vessels ever built. ZEBOX was born." },
  { start: 2019, end: 2019, year: '2019', text: "CEVA Logistics joined the Group -- transforming CMA CGM beyond shipping." },
  { start: 2020, end: 2021, year: '2020', text: "Air Cargo was created in 6 months during COVID. A cyberattack was overcome in 10 days." },
  { start: 2022, end: 2023, year: '2022', text: "CMA Media was born. A dedicated AI division was created -- EUR 100M invested. Kyutai launched." },
  { start: 2024, end: 2025, year: '2024', text: "Bollore Logistics joined. CMA CGM became the world's leading integrated logistics player." },
]

function findEvent(year) {
  return CMA_EVENTS.find(e => year >= e.start && year <= e.end) || CMA_EVENTS[0]
}

export default {
  id: 'phase1',
  title: 'My Story x Our Story',
  emoji: '\u{1F4C5}',
  subtitle: 'Your timeline meets ours',
  flow: [
    // ──────────────────────────────────────────────
    // WELCOME
    // ──────────────────────────────────────────────
    {
      id: 'welcome1',
      sender: 'bot',
      type: 'text',
      text: "Hey! I'm Navi, your guide for this journey.",
      typing: 1500,
      delay: 300,
    },
    {
      id: 'welcome2',
      sender: 'bot',
      type: 'text',
      text: "Before we explore CMA CGM together, I'd like to know a bit about YOU.",
      typing: 2000,
      delay: 400,
    },
    {
      id: 'welcome3',
      sender: 'bot',
      type: 'text',
      text: "Your story and the Group's story are more connected than you think...",
      typing: 2000,
      delay: 500,
    },

    // ──────────────────────────────────────────────
    // Q1 — BIRTH YEAR
    // ──────────────────────────────────────────────
    {
      id: 'q1_ask',
      sender: 'bot',
      type: 'text',
      text: "Let's start simple. What year were you born?",
      typing: 1500,
      delay: 400,
      input: {
        field: 'birthYear',
        type: 'year',
        placeholder: 'Type a year (e.g. 1990)',
        validate: (v) => v >= 1960 && v <= 2008,
        errorMessage: 'Please enter a year between 1960 and 2008',
      },
    },
    {
      id: 'q1_response',
      sender: 'bot',
      type: 'highlight',
      text: (userData) => {
        const e = findEvent(userData.birthYear)
        return `${userData.birthYear} -- great year to enter the world!\n\u{1F4C5} ${e.year} -- ${e.text}`
      },
      typing: 2500,
      delay: 300,
    },

    // ──────────────────────────────────────────────
    // Q2 — FIRST TRIP ABROAD (two-part)
    // ──────────────────────────────────────────────
    {
      id: 'q2_year_ask',
      sender: 'bot',
      type: 'text',
      text: "Now think about your first big trip abroad. What year was it?",
      typing: 2000,
      delay: 500,
      input: {
        field: 'tripYear',
        type: 'year',
        placeholder: 'e.g. 2005',
        validate: (v) => v >= 1970 && v <= 2025,
        errorMessage: 'Please enter a valid year',
      },
    },
    {
      id: 'q2_dest_ask',
      sender: 'bot',
      type: 'text',
      text: "And where did you go?",
      typing: 1500,
      delay: 300,
      input: {
        field: 'tripDestination',
        type: 'text',
        placeholder: 'e.g. London, Tokyo, New York...',
      },
    },
    {
      id: 'q2_response',
      sender: 'bot',
      type: 'highlight',
      text: (userData) => {
        const e = findEvent(userData.tripYear)
        return `${userData.tripDestination} in ${userData.tripYear} -- what a journey!\n\u{1F4C5} ${e.year} -- ${e.text}\nWhile you were discovering ${userData.tripDestination}, CMA CGM was connecting the world.`
      },
      typing: 3000,
      delay: 300,
    },

    // ──────────────────────────────────────────────
    // Q3 — DIPLOMA YEAR
    // ──────────────────────────────────────────────
    {
      id: 'q3_ask',
      sender: 'bot',
      type: 'text',
      text: "What year did you earn your most important diploma or degree?",
      typing: 2000,
      delay: 500,
      input: {
        field: 'diplomaYear',
        type: 'year',
        placeholder: 'e.g. 2012',
        validate: (v) => v >= 1975 && v <= 2025,
        errorMessage: 'Please enter a valid year',
      },
    },
    {
      id: 'q3_response',
      sender: 'bot',
      type: 'highlight',
      text: (userData) => {
        const e = findEvent(userData.diplomaYear)
        return `${userData.diplomaYear} -- the year you proved what you're capable of!\n\u{1F4C5} ${e.year} -- ${e.text}\nYou were building your future. So was CMA CGM.`
      },
      typing: 2500,
      delay: 300,
    },

    // ──────────────────────────────────────────────
    // Q4 — FIRST AI USE
    // ──────────────────────────────────────────────
    {
      id: 'q4_ask',
      sender: 'bot',
      type: 'text',
      text: "Last one for this part. When did you first use AI? ChatGPT counts!",
      typing: 2000,
      delay: 500,
      input: {
        field: 'aiYear',
        type: 'year',
        placeholder: 'e.g. 2023',
        validate: (v) => v >= 2010 && v <= 2025,
        errorMessage: 'Please enter a valid year',
      },
    },
    {
      id: 'q4_response',
      sender: 'bot',
      type: 'highlight',
      text: (userData) => {
        const e = findEvent(userData.aiYear)
        return `${userData.aiYear} -- welcome to the AI era!\n\u{1F4C5} ${e.year} -- ${e.text}\nCMA CGM has invested EUR 100M in AI, launched Kyutai, and built ZEBOX to accelerate innovation. You're right on time.`
      },
      typing: 3000,
      delay: 300,
    },

    // ──────────────────────────────────────────────
    // RECAP — DYNAMIC MINI-TIMELINE
    // ──────────────────────────────────────────────
    {
      id: 'recap_intro',
      sender: 'bot',
      type: 'text',
      text: "Look at this -- your timeline and CMA CGM's timeline, side by side.",
      typing: 2000,
      delay: 500,
    },
    {
      id: 'recap_timeline',
      sender: 'bot',
      type: 'card',
      text: (userData) => {
        const birthEvent = findEvent(userData.birthYear)
        const tripEvent = findEvent(userData.tripYear)
        const diplomaEvent = findEvent(userData.diplomaYear)
        const aiEvent = findEvent(userData.aiYear)

        return [
          '\u{1F9ED} Your Journey x CMA CGM',
          '',
          `\u{1F476} ${userData.birthYear} -- You were born`,
          `\u{1F4C5} ${birthEvent.year} -- ${birthEvent.text}`,
          '',
          `\u{2708}\u{FE0F} ${userData.tripYear} -- You traveled to ${userData.tripDestination}`,
          `\u{1F4C5} ${tripEvent.year} -- ${tripEvent.text}`,
          '',
          `\u{1F393} ${userData.diplomaYear} -- You earned your diploma`,
          `\u{1F4C5} ${diplomaEvent.year} -- ${diplomaEvent.text}`,
          '',
          `\u{1F916} ${userData.aiYear} -- You first used AI`,
          `\u{1F4C5} ${aiEvent.year} -- ${aiEvent.text}`,
          '',
          'Two timelines. One shared momentum.',
        ].join('\n')
      },
      typing: 3000,
      delay: 400,
    },

    // ──────────────────────────────────────────────
    // TRANSITION
    // ──────────────────────────────────────────────
    {
      id: 'phase1_transition',
      sender: 'bot',
      type: 'text',
      text: "Your story and CMA CGM's story have been running in parallel all along. Now let me learn something else about you...",
      typing: 2500,
      delay: 500,
      complete: true,
    },
  ],
}
