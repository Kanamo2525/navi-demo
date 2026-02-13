// Epilogue: Your Discovery Capsule
// Personalized recap of the entire onboarding journey

const CMA_EVENTS = [
  { start: 0,    end: 1977, year: 'Before 1978', text: "Jacques Saade dreamed of connecting the world by sea" },
  { start: 1978, end: 1982, year: '1978', text: "CMA founded in Marseille" },
  { start: 1983, end: 1991, year: '1983', text: "CMA's first vessel crossed Suez" },
  { start: 1992, end: 1998, year: '1992', text: "First China office (a hotel room!)" },
  { start: 1999, end: 2004, year: '1999', text: "CMA + CGM merger" },
  { start: 2005, end: 2007, year: '2005', text: "CMA CGM Foundation created" },
  { start: 2008, end: 2010, year: '2008', text: "Financial crisis — zero layoffs" },
  { start: 2011, end: 2016, year: '2011', text: "Global alliances consolidated" },
  { start: 2017, end: 2018, year: '2017', text: "Rodolphe Saade becomes CEO, LNG vessels ordered" },
  { start: 2019, end: 2019, year: '2019', text: "CEVA Logistics acquired" },
  { start: 2020, end: 2021, year: '2020', text: "Air Cargo created in 6 months" },
  { start: 2022, end: 2023, year: '2022', text: "CMA Media + AI division (€100M)" },
  { start: 2024, end: 2025, year: '2024', text: "Bollore acquired — global #1" },
]

function findEvent(year) {
  if (!year) return CMA_EVENTS[0]
  return CMA_EVENTS.find(e => year >= e.start && year <= e.end) || CMA_EVENTS[0]
}

export default {
  id: 'epilogue',
  title: 'Your Discovery Capsule',
  emoji: '🎓',
  subtitle: 'Your personalized recap',
  flow: [
    // ──────────────────────────────────────────────
    // OPENING
    // ──────────────────────────────────────────────
    {
      id: 'epilogue_open',
      sender: 'bot',
      type: 'text',
      text: "You made it. Let me put everything together for you.",
      typing: 1500,
      delay: 400,
    },
    {
      id: 'epilogue_divider1',
      sender: 'bot',
      type: 'divider',
      text: 'Your Discovery Capsule',
      delay: 500,
    },

    // ──────────────────────────────────────────────
    // SECTION 1 — YOUR TIMELINE x OUR TIMELINE
    // ──────────────────────────────────────────────
    {
      id: 'epilogue_timeline',
      sender: 'bot',
      type: 'highlight',
      text: (userData) => {
        const lines = []
        if (userData.birthYear) {
          const e = findEvent(userData.birthYear)
          lines.push(`📅 **${userData.birthYear}** — You were born → ${e.year}: ${e.text}`)
        }
        if (userData.tripYear && userData.tripDestination) {
          const e = findEvent(userData.tripYear)
          lines.push(`✈️ **${userData.tripYear}** — You traveled to ${userData.tripDestination} → ${e.year}: ${e.text}`)
        }
        if (userData.diplomaYear) {
          const e = findEvent(userData.diplomaYear)
          lines.push(`🎓 **${userData.diplomaYear}** — You earned your diploma → ${e.year}: ${e.text}`)
        }
        if (userData.aiYear) {
          const e = findEvent(userData.aiYear)
          lines.push(`🤖 **${userData.aiYear}** — You first used AI → ${e.year}: ${e.text}`)
        }
        return lines.length > 0
          ? '**Your Timeline × Our Timeline**\n\n' + lines.join('\n\n')
          : 'Your journey through time and ours — intertwined.'
      },
      typing: 2000,
      delay: 600,
    },

    // ──────────────────────────────────────────────
    // SECTION 2 — YOUR SIGNATURE VALUE
    // ──────────────────────────────────────────────
    {
      id: 'epilogue_value',
      sender: 'bot',
      type: 'quiz-result',
      text: (userData) => {
        const value = userData.signatureValue
        const map = {
          boldness:    { emoji: '🦁', title: 'Boldness',    desc: 'You dare to take bold steps. You act when others hesitate.' },
          imagination: { emoji: '💡', title: 'Imagination', desc: 'You find creative solutions where others see obstacles.' },
          excellence:  { emoji: '⭐', title: 'Excellence',  desc: 'You pursue the highest standards. Quality is non-negotiable.' },
          exemplarity: { emoji: '🤝', title: 'Exemplarity', desc: 'You lead by example. You put people first.' },
        }
        const d = map[value] || map.boldness
        return `**Your Signature Value**\n\n${d.emoji} **${d.title}**\n${d.desc}`
      },
      typing: 1800,
      delay: 600,
    },

    // ──────────────────────────────────────────────
    // SECTION 3 — YOUR MISSION RESULTS
    // ──────────────────────────────────────────────
    {
      id: 'epilogue_mission',
      sender: 'bot',
      type: 'text',
      text: "**Your Mission Results**\n\nYou coordinated Transport, Logistics, the Foundation, and Media to deliver school kits and solar panels to Senegal.\n\nShanghai 🚢→ Dakar 📦→ School 🏫\nRotterdam 📦→ Dakar → School",
      typing: 2000,
      delay: 600,
    },

    // ──────────────────────────────────────────────
    // SECTION 4 — YOUR EXPLORER PATH
    // ──────────────────────────────────────────────
    {
      id: 'epilogue_branch',
      sender: 'bot',
      type: 'text',
      text: (userData) => {
        const branchMap = {
          green:  { emoji: '🌱', title: 'Green Horizon',  desc: "You explored CMA CGM's sustainability journey — from LNG to methanol, from €1.5B invested to -80% emissions by 2040." },
          growth: { emoji: '📈', title: 'Growth Engine',  desc: "You discovered how CMA CGM grew from one ship to a global leader across Transport, Logistics, and Media." },
          ai:     { emoji: '🤖', title: 'AI Revolution',  desc: "You explored CMA CGM's AI journey — €100M invested, Kyutai, ZEBOX, and AI deployed across the Group." },
        }
        const b = branchMap[userData.chosenBranch] || branchMap.green
        return `**Your Explorer Path**\n\n${b.emoji} **${b.title}**\n${b.desc}\n\nExplore the other paths next time!`
      },
      typing: 2000,
      delay: 600,
    },

    // ──────────────────────────────────────────────
    // SECTION 5 — CLOSING
    // ──────────────────────────────────────────────
    {
      id: 'epilogue_divider2',
      sender: 'bot',
      type: 'divider',
      text: 'Your Chapter Begins',
      delay: 500,
    },
    {
      id: 'epilogue_purpose',
      sender: 'bot',
      type: 'highlight',
      text: "**\"Imagine better ways to serve a world in motion.\"**\n— CMA CGM Purpose",
      typing: 1800,
      delay: 500,
    },
    {
      id: 'epilogue_welcome',
      sender: 'bot',
      type: 'text',
      text: "This story isn't over. The next chapter is yours.\nWelcome to CMA CGM.",
      typing: 1500,
      delay: 400,
    },
    {
      id: 'epilogue_end',
      sender: 'bot',
      type: 'text',
      text: "🧭 Thank you for completing Discovery!",
      typing: 1500,
      delay: 300,
    },
    {
      id: 'epilogue_card',
      sender: 'bot',
      type: 'discovery-card',
      text: "Here's your personal Discovery Card — save it as a keepsake!",
      typing: 1500,
      delay: 500,
      complete: true,
    },
  ],
}
