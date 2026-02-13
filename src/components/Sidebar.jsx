import { chapters } from '../data'

const CHAPTER_META = [
  { emoji: '👋', title: 'Welcome', preview: 'Your journey starts here' },
  { emoji: '📅', title: 'History', preview: 'One ship. One dream.' },
  { emoji: '🧭', title: 'Purpose & Values', preview: 'What drives us' },
  { emoji: '🚢', title: 'Activities', preview: 'What we do' },
  { emoji: '🤝', title: 'Foundation', preview: 'How we give back' },
]

export default function Sidebar({ currentChapter, completedChapters, onSelect }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-left">
          <div className="sidebar-avatar">🧭</div>
          <span className="sidebar-brand">Navi</span>
        </div>
        <div className="sidebar-header-right">
          <span className="sidebar-badge">Discovery</span>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-box">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Search chapters</span>
        </div>
      </div>

      <div className="sidebar-chapters">
        {CHAPTER_META.map((ch, i) => {
          const isActive = i === currentChapter
          const isDone = completedChapters.includes(i)
          const isLocked = i > 0 && !completedChapters.includes(i - 1) && i !== currentChapter
          return (
            <button
              key={i}
              className={`sidebar-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''} ${isLocked ? 'locked' : ''}`}
              onClick={() => !isLocked && onSelect(i)}
              disabled={isLocked}
            >
              <div className="sidebar-item-avatar">
                <span>{ch.emoji}</span>
              </div>
              <div className="sidebar-item-content">
                <div className="sidebar-item-top">
                  <span className="sidebar-item-name">Ch.{i + 1} — {ch.title}</span>
                  <span className="sidebar-item-time">
                    {isDone ? '✓' : isActive ? 'now' : ''}
                  </span>
                </div>
                <div className="sidebar-item-preview">
                  {isDone ? 'Completed' : ch.preview}
                </div>
              </div>
              {isActive && <div className="sidebar-item-unread">●</div>}
            </button>
          )
        })}
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-footer-progress">
          <div
            className="sidebar-footer-bar"
            style={{ width: `${(completedChapters.length / chapters.length) * 100}%` }}
          />
        </div>
        <span className="sidebar-footer-text">
          {completedChapters.length}/{chapters.length} chapters completed
        </span>
      </div>
    </div>
  )
}
