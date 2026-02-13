const CHAPTER_META = [
  { emoji: '👋', title: 'Welcome', subtitle: 'Your chapter begins' },
  { emoji: '📅', title: 'History', subtitle: 'One ship. One dream.' },
  { emoji: '🧭', title: 'Purpose & Values', subtitle: 'What drives us' },
  { emoji: '🚢', title: 'Activities', subtitle: 'What we do' },
  { emoji: '🤝', title: 'Foundation', subtitle: 'How we give back' },
]

export default function ChapterNav({ currentChapter, completedChapters, totalChapters, onSelect, onClose }) {
  return (
    <div className="chapter-nav-overlay" onClick={onClose}>
      <div className="chapter-nav" onClick={e => e.stopPropagation()}>
        <div className="chapter-nav-header">
          <h3>Discovery Journey</h3>
          <button className="chapter-nav-close" onClick={onClose}>✕</button>
        </div>
        <div className="chapter-nav-list">
          {CHAPTER_META.slice(0, totalChapters).map((ch, i) => {
            const isActive = i === currentChapter
            const isDone = completedChapters.includes(i)
            return (
              <button
                key={i}
                className={`chapter-nav-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
                onClick={() => onSelect(i)}
              >
                <div className="chapter-nav-emoji">{ch.emoji}</div>
                <div className="chapter-nav-info">
                  <div className="chapter-nav-title">Ch.{i + 1} — {ch.title}</div>
                  <div className="chapter-nav-sub">{ch.subtitle}</div>
                </div>
                <div className="chapter-nav-status">
                  {isDone ? '✓' : isActive ? '●' : '○'}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
