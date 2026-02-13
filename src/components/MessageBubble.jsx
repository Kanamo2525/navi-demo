function parseFormatting(text) {
  if (!text) return text
  const parts = []
  const regex = /(\*\*.*?\*\*)/g
  let lastIndex = 0
  let match

  const str = String(text)
  const re = new RegExp(regex)
  while ((match = re.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(str.slice(lastIndex, match.index))
    }
    parts.push(<strong key={match.index}>{match[0].slice(2, -2)}</strong>)
    lastIndex = re.lastIndex
  }
  if (lastIndex < str.length) {
    parts.push(str.slice(lastIndex))
  }
  return parts.length > 0 ? parts : str
}

function formatText(text) {
  if (!text) return null
  const lines = String(text).split('\n')
  return lines.map((line, i) => (
    <span key={i}>
      {parseFormatting(line)}
      {i < lines.length - 1 && <br />}
    </span>
  ))
}

export default function MessageBubble({ message }) {
  const isUser = message.sender === 'user'
  const isSystem = message.sender === 'system'
  const isMedia = message.type === 'media'
  const isCard = message.type === 'card'
  const isQuiz = message.type === 'quiz-result'
  const isHighlight = message.type === 'highlight'
  const isBadge = message.type === 'badge'
  const isInfoCard = message.type === 'info-card'

  if (isSystem) {
    return (
      <div className="message-row system">
        <div className="system-message">
          {formatText(message.text)}
        </div>
      </div>
    )
  }

  // Badge unlock visual
  if (isBadge) {
    return (
      <div className="message-row system">
        <div className="badge-unlock">
          <div className="badge-icon">{message.badge?.emoji || '🏆'}</div>
          <div className="badge-title">{message.badge?.title || 'Badge Unlocked!'}</div>
          {message.text && <div className="badge-desc">{formatText(message.text)}</div>}
        </div>
      </div>
    )
  }

  return (
    <div className={`message-row ${isUser ? 'user' : 'bot'}`}>
      {!isUser && <div className="message-avatar">🧭</div>}
      <div className={`message-bubble ${isUser ? 'user' : 'bot'} ${isMedia ? 'media' : ''} ${isCard ? 'card' : ''} ${isQuiz ? 'quiz-result' : ''} ${isHighlight ? 'highlight' : ''} ${isInfoCard ? 'info-card' : ''}`}>
        {isMedia && message.media && (
          <div className="media-placeholder">
            <span className="media-emoji">{message.media.emoji || '📷'}</span>
            <span className="media-label">{message.media.alt || 'Media'}</span>
          </div>
        )}
        {isCard && message.card && (
          <div className="card-content">
            <div className="card-emoji">{message.card.emoji || '📋'}</div>
            <div className="card-title">{message.card.title}</div>
            {message.card.items && (
              <div className="card-items">
                {message.card.items.map((item, i) => (
                  <div key={i} className="card-item">{item}</div>
                ))}
              </div>
            )}
          </div>
        )}
        {isInfoCard && message.infoCard && (
          <div className="info-card-content">
            {message.infoCard.emoji && <div className="info-card-emoji">{message.infoCard.emoji}</div>}
            {message.infoCard.title && <div className="info-card-title">{formatText(message.infoCard.title)}</div>}
            {message.infoCard.items && (
              <div className="info-card-items">
                {message.infoCard.items.map((item, i) => (
                  <div key={i} className="info-card-item">{formatText(item)}</div>
                ))}
              </div>
            )}
          </div>
        )}
        {message.text && (
          <div className="message-text">{formatText(message.text)}</div>
        )}
        <div className="message-time">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  )
}
