export default function ChatHeader({ section, sectionIndex, totalSections, completedSections }) {
  return (
    <div className="chat-header">
      <div className="header-left">
        <div className="header-avatar">{section.emoji}</div>
        <div className="header-info">
          <div className="header-name">Navi</div>
          <div className="header-status">{section.title}</div>
        </div>
      </div>
      <div className="header-right">
        <div className="header-progress">
          {Array.from({ length: totalSections }, (_, i) => (
            <div
              key={i}
              className={`progress-dot ${i === sectionIndex ? 'active' : ''} ${completedSections.includes(i) ? 'done' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
