import { useState, useEffect, useRef, useCallback } from 'react'
import ChatHeader from './components/ChatHeader'
import MessageBubble from './components/MessageBubble'
import TypingIndicator from './components/TypingIndicator'
import QuickReplies from './components/QuickReplies'
import ChapterNav from './components/ChapterNav'

export default function Chat({
  chapter,
  chapterIndex,
  totalChapters,
  completedChapters,
  onChapterComplete,
  onSelectChapter,
  onScore,
  userData,
}) {
  const [displayedMessages, setDisplayedMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentReplies, setCurrentReplies] = useState(null)
  const [flowIndex, setFlowIndex] = useState(0)
  const [showNav, setShowNav] = useState(false)
  const [inputText, setInputText] = useState('')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const flowRef = useRef(chapter.flow)
  const processingRef = useRef(false)
  const timeoutRef = useRef(null)

  // Reset when chapter changes
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    processingRef.current = false
    flowRef.current = chapter.flow
    setDisplayedMessages([])
    setIsTyping(false)
    setCurrentReplies(null)
    setFlowIndex(0)
    setInputText('')
  }, [chapter.id])

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [displayedMessages, isTyping])

  // Focus input when replies appear
  useEffect(() => {
    if (currentReplies) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [currentReplies])

  // Process next message
  const processMessage = useCallback((index) => {
    if (processingRef.current) return
    const flow = flowRef.current
    if (index >= flow.length) {
      onChapterComplete()
      return
    }

    const msg = flow[index]

    // Divider or system message — show instantly, no typing
    if (msg.type === 'divider' || msg.sender === 'system') {
      setDisplayedMessages(prev => [...prev, { ...msg, key: `${chapter.id}_${index}` }])
      const nextIndex = index + 1
      if (msg.complete) {
        onChapterComplete()
        return
      }
      if (msg.sender === 'system' && msg.type !== 'divider') {
        setTimeout(() => setFlowIndex(nextIndex), 200)
      } else {
        setFlowIndex(nextIndex)
      }
      return
    }

    processingRef.current = true
    const typingDelay = msg.typing || 1500
    const preDelay = msg.delay || 300

    timeoutRef.current = setTimeout(() => {
      setIsTyping(true)

      timeoutRef.current = setTimeout(() => {
        setIsTyping(false)
        const newMsg = { ...msg, key: `${chapter.id}_${index}` }
        setDisplayedMessages(prev => [...prev, newMsg])

        if (msg.score) {
          onScore(msg.score.value, msg.score.points || 1)
        }

        if (msg.replies && msg.replies.length > 0) {
          setCurrentReplies({ replies: msg.replies, messageIndex: index })
          processingRef.current = false
        } else if (msg.goto) {
          const targetIndex = flow.findIndex(m => m.id === msg.goto)
          processingRef.current = false
          if (targetIndex !== -1) {
            setFlowIndex(targetIndex)
          } else {
            setFlowIndex(index + 1)
          }
        } else if (msg.complete) {
          processingRef.current = false
          onChapterComplete()
        } else {
          processingRef.current = false
          setFlowIndex(index + 1)
        }
      }, typingDelay)
    }, preDelay)
  }, [chapter.id, onChapterComplete, onScore])

  // Trigger message processing when flowIndex changes
  useEffect(() => {
    if (flowIndex >= 0 && !currentReplies) {
      processMessage(flowIndex)
    }
  }, [flowIndex, processMessage, currentReplies])

  // Find the best matching reply for free text input
  const findBestReply = useCallback((text, replies) => {
    const input = text.toLowerCase().trim()
    // Try exact-ish match first
    const exact = replies.find(r => r.text.toLowerCase().includes(input) || input.includes(r.text.toLowerCase()))
    if (exact) return exact
    // Try keyword matching
    for (const reply of replies) {
      const words = reply.text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/)
      for (const word of words) {
        if (word.length > 2 && input.includes(word)) return reply
      }
    }
    // Default to first reply
    return replies[0]
  }, [])

  // Handle reply selection (from quick reply button)
  const handleReply = useCallback((reply) => {
    const userMsg = {
      type: 'user',
      sender: 'user',
      text: reply.text,
      key: `user_${Date.now()}`,
    }
    setDisplayedMessages(prev => [...prev, userMsg])
    setCurrentReplies(null)
    setInputText('')

    if (reply.score) {
      onScore(reply.score.value, reply.score.points || 1)
    }

    const flow = flowRef.current
    if (reply.goto) {
      const targetIndex = flow.findIndex(m => m.id === reply.goto)
      if (targetIndex !== -1) {
        setTimeout(() => setFlowIndex(targetIndex), 400)
      }
    } else {
      const nextIndex = (currentReplies?.messageIndex ?? flowIndex) + 1
      setTimeout(() => setFlowIndex(nextIndex), 400)
    }
  }, [flowIndex, currentReplies, onScore])

  // Handle free text submission
  const handleSendText = useCallback(() => {
    const text = inputText.trim()
    if (!text) return

    if (currentReplies) {
      // Match typed text to best reply and follow that path
      const bestReply = findBestReply(text, currentReplies.replies)
      const userMsg = {
        type: 'user',
        sender: 'user',
        text: text,
        key: `user_${Date.now()}`,
      }
      setDisplayedMessages(prev => [...prev, userMsg])
      setCurrentReplies(null)
      setInputText('')

      if (bestReply.score) {
        onScore(bestReply.score.value, bestReply.score.points || 1)
      }

      const flow = flowRef.current
      if (bestReply.goto) {
        const targetIndex = flow.findIndex(m => m.id === bestReply.goto)
        if (targetIndex !== -1) {
          setTimeout(() => setFlowIndex(targetIndex), 400)
        }
      } else {
        const nextIndex = (currentReplies?.messageIndex ?? flowIndex) + 1
        setTimeout(() => setFlowIndex(nextIndex), 400)
      }
    } else {
      // No replies available — just echo the message (bot is busy)
      const userMsg = {
        type: 'user',
        sender: 'user',
        text: text,
        key: `user_${Date.now()}`,
      }
      setDisplayedMessages(prev => [...prev, userMsg])
      setInputText('')
    }
  }, [inputText, currentReplies, flowIndex, findBestReply, onScore])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendText()
    }
  }, [handleSendText])

  const hasText = inputText.trim().length > 0

  return (
    <div className="chat-container">
      <ChatHeader
        chapter={chapter}
        chapterIndex={chapterIndex}
        totalChapters={totalChapters}
        onMenuClick={() => setShowNav(!showNav)}
      />

      {showNav && (
        <ChapterNav
          currentChapter={chapterIndex}
          completedChapters={completedChapters}
          totalChapters={totalChapters}
          onSelect={(i) => { onSelectChapter(i); setShowNav(false) }}
          onClose={() => setShowNav(false)}
        />
      )}

      <div className="messages-area">
        <div className="messages-inner">
          <div className="chapter-divider">
            <span>{chapter.emoji} {chapter.title}</span>
          </div>

          {displayedMessages.map((msg) => {
            if (msg.type === 'divider') {
              return (
                <div key={msg.key} className="chapter-divider">
                  <span>{msg.text}</span>
                </div>
              )
            }
            return <MessageBubble key={msg.key} message={msg} />
          })}

          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {currentReplies && (
        <div className="replies-bar">
          <QuickReplies
            replies={currentReplies.replies}
            onSelect={handleReply}
          />
        </div>
      )}

      <div className="input-area">
        <button className="input-icon-btn" aria-label="Emoji" tabIndex={-1}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm5.603 0c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm4.5-5.5c-.186 0-.372-.07-.516-.208a7.06 7.06 0 00-3.984-1.637 7.06 7.06 0 00-3.984 1.637.75.75 0 01-1.032-1.09 8.56 8.56 0 014.832-1.987 8.56 8.56 0 014.832 1.987.75.75 0 01-.148 1.298z"/>
          </svg>
        </button>
        <button className="input-icon-btn" aria-label="Attach" tabIndex={-1}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 003.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.501.501 1.171.79 1.783.79.544 0 1.069-.228 1.472-.631l4.872-4.872a.75.75 0 00-1.06-1.06l-4.872 4.871a.81.81 0 01-.543.218c-.208 0-.507-.155-.762-.41-.547-.548-.573-1.18-.14-1.613l7.916-7.916c.849-.849 2.443-.764 3.457.25.556.556.843 1.159.887 1.746.052.648-.209 1.293-.734 1.818l-9.547 9.549a4.08 4.08 0 01-2.913 1.205 4.08 4.08 0 01-2.913-1.205 4.08 4.08 0 01-1.205-2.911 4.08 4.08 0 011.205-2.913l7.11-7.11a.75.75 0 10-1.06-1.06l-7.11 7.11A5.58 5.58 0 001.816 15.556z"/>
          </svg>
        </button>
        <input
          ref={inputRef}
          type="text"
          className="input-text-field"
          placeholder="Type a message"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {hasText ? (
          <button className="input-send-btn" onClick={handleSendText} aria-label="Send">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M1.101 21.757L23.8 12.028 1.101 2.243l.011 7.912 13.623 1.873-13.623 1.872-.011 7.857z"/>
            </svg>
          </button>
        ) : (
          <button className="input-icon-btn" aria-label="Voice message" tabIndex={-1}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.238 6.002s-6.238-2.471-6.238-6.002H4.261c0 4.001 3.178 7.297 7.061 7.885v3.884h1.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-1.5z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
