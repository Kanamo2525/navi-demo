export default function QuickReplies({ replies, onSelect }) {
  return (
    <div className="quick-replies">
      {replies.map((reply, i) => (
        <button
          key={i}
          className="quick-reply-btn"
          onClick={() => onSelect(reply)}
        >
          {reply.text}
        </button>
      ))}
    </div>
  )
}
