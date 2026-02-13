export default function Sidebar({ sections, currentSection, completedSections, chosenBranch, onSectionSelect }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-left">
          <div className="sidebar-avatar">🧭</div>
          <span className="sidebar-brand">Navi</span>
        </div>
        <div className="sidebar-header-right">
          <span className="sidebar-badge">Discovery v2.1</span>
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-box">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span>Your journey</span>
        </div>
      </div>

      <div className="sidebar-chapters">
        {sections.map((sec, i) => {
          const isActive = i === currentSection
          const isDone = completedSections.includes(i)
          const isLocked = i > 0 && !completedSections.includes(i - 1) && !isActive
          const isClickable = !isLocked && (isDone || isActive)
          return (
            <div
              key={sec.id}
              className={`sidebar-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''} ${isLocked ? 'locked' : ''}`}
              onClick={() => isClickable && onSectionSelect && onSectionSelect(i)}
              style={{ cursor: isClickable ? 'pointer' : 'default' }}
            >
              <div className="sidebar-item-avatar">
                <span>{sec.emoji}</span>
              </div>
              <div className="sidebar-item-content">
                <div className="sidebar-item-top">
                  <span className="sidebar-item-name">{sec.title}</span>
                  <span className="sidebar-item-time">
                    {isDone ? '✓' : isActive ? 'now' : ''}
                  </span>
                </div>
                <div className="sidebar-item-preview">
                  {isDone ? 'Completed' : sec.subtitle || ''}
                </div>
              </div>
              {isActive && <div className="sidebar-item-unread">●</div>}
            </div>
          )
        })}
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-footer-progress">
          <div
            className="sidebar-footer-bar"
            style={{ width: `${(completedSections.length / sections.length) * 100}%` }}
          />
        </div>
        <span className="sidebar-footer-text">
          {completedSections.length}/{sections.length} sections completed
        </span>
      </div>
    </div>
  )
}
