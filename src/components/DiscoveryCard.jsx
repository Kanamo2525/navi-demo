import { forwardRef } from 'react'

const CMA_EVENTS = [
  { start: 0,    end: 1977, year: 'Before 1978', text: "Jacques Saade's dream" },
  { start: 1978, end: 1982, year: '1978', text: "CMA founded in Marseille" },
  { start: 1983, end: 1991, year: '1983', text: "First vessel crossed Suez" },
  { start: 1992, end: 1998, year: '1992', text: "First China office" },
  { start: 1999, end: 2004, year: '1999', text: "CMA + CGM merger" },
  { start: 2005, end: 2007, year: '2005', text: "Foundation created" },
  { start: 2008, end: 2010, year: '2008', text: "Financial crisis — zero layoffs" },
  { start: 2011, end: 2016, year: '2011', text: "Global alliances" },
  { start: 2017, end: 2018, year: '2017', text: "R. Saade CEO, LNG ordered" },
  { start: 2019, end: 2019, year: '2019', text: "CEVA Logistics acquired" },
  { start: 2020, end: 2021, year: '2020', text: "Air Cargo launched" },
  { start: 2022, end: 2023, year: '2022', text: "AI division (€100M)" },
  { start: 2024, end: 2025, year: '2024', text: "Bollore acquired — #1" },
]

function findEvent(year) {
  if (!year) return null
  return CMA_EVENTS.find(e => year >= e.start && year <= e.end) || null
}

const VALUE_MAP = {
  boldness:    { emoji: '🦁', title: 'Boldness' },
  imagination: { emoji: '💡', title: 'Imagination' },
  excellence:  { emoji: '⭐', title: 'Excellence' },
  exemplarity: { emoji: '🤝', title: 'Exemplarity' },
}

const BRANCH_MAP = {
  green:  { emoji: '🌱', title: 'Green Horizon' },
  growth: { emoji: '📈', title: 'Growth Engine' },
  ai:     { emoji: '🤖', title: 'AI Revolution' },
}

const DiscoveryCard = forwardRef(function DiscoveryCard({ userData }, ref) {
  const now = new Date()
  const month = now.toLocaleString('en-US', { month: 'long', year: 'numeric' })

  // Build timeline entries
  const timeline = []
  if (userData.birthYear) {
    const e = findEvent(userData.birthYear)
    timeline.push({ emoji: '👶', year: userData.birthYear, event: e ? `${e.year}: ${e.text}` : '' })
  }
  if (userData.tripYear && userData.tripDestination) {
    const e = findEvent(userData.tripYear)
    timeline.push({ emoji: '✈️', year: userData.tripYear, event: e ? `${e.year}: ${e.text}` : '' })
  }
  if (userData.diplomaYear) {
    const e = findEvent(userData.diplomaYear)
    timeline.push({ emoji: '🎓', year: userData.diplomaYear, event: e ? `${e.year}: ${e.text}` : '' })
  }
  if (userData.aiYear) {
    const e = findEvent(userData.aiYear)
    timeline.push({ emoji: '🤖', year: userData.aiYear, event: e ? `${e.year}: ${e.text}` : '' })
  }

  const value = VALUE_MAP[userData.signatureValue] || VALUE_MAP.boldness
  const branch = BRANCH_MAP[userData.chosenBranch] || BRANCH_MAP.green

  return (
    <div ref={ref} className="discovery-card">
      {/* Header */}
      <div className="dc-header">
        <div className="dc-header-icon">🧭</div>
        <div className="dc-header-text">
          <div className="dc-title">DISCOVERY CAPSULE</div>
          <div className="dc-date">{month}</div>
        </div>
      </div>

      <div className="dc-divider" />

      {/* Timeline */}
      {timeline.length > 0 && (
        <div className="dc-section">
          <div className="dc-section-label">YOUR TIMELINE × OURS</div>
          <div className="dc-timeline">
            {timeline.map((t, i) => (
              <div key={i} className="dc-timeline-row">
                <span className="dc-timeline-emoji">{t.emoji}</span>
                <span className="dc-timeline-year">{t.year}</span>
                <span className="dc-timeline-arrow">→</span>
                <span className="dc-timeline-event">{t.event}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="dc-divider" />

      {/* Signature Value */}
      <div className="dc-section">
        <div className="dc-section-label">YOUR SIGNATURE VALUE</div>
        <div className="dc-value-badge">
          <span className="dc-value-emoji">{value.emoji}</span>
          <span className="dc-value-title">{value.title}</span>
        </div>
      </div>

      <div className="dc-divider" />

      {/* Explorer Path */}
      <div className="dc-section">
        <div className="dc-section-label">YOUR EXPLORER PATH</div>
        <div className="dc-value-badge">
          <span className="dc-value-emoji">{branch.emoji}</span>
          <span className="dc-value-title">{branch.title}</span>
        </div>
      </div>

      <div className="dc-divider" />

      {/* Footer */}
      <div className="dc-footer">
        <div className="dc-quote">
          "Imagine better ways to serve a world in motion."
        </div>
        <div className="dc-brand">
          <span className="dc-brand-icon">🧭</span>
          <span className="dc-brand-text">Navi · Discovery v2.1</span>
        </div>
      </div>
    </div>
  )
})

export default DiscoveryCard
