import { useState, useEffect, useRef, useCallback } from 'react'
import ChatHeader from './components/ChatHeader'
import MessageBubble from './components/MessageBubble'
import TypingIndicator from './components/TypingIndicator'
import QuickReplies from './components/QuickReplies'

export default function Chat({
  section,
  sectionIndex,
  totalSections,
  completedSections,
  onSectionComplete,
  onScore,
  onInput,
  onBranchSelect,
  userData,
}) {
  const [displayedMessages, setDisplayedMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [currentReplies, setCurrentReplies] = useState(null)
  const [waitingForInput, setWaitingForInput] = useState(null) // { field, type, placeholder, validate }
  const [flowIndex, setFlowIndex] = useState(0)
  const [inputText, setInputText] = useState('')
  const [inputError, setInputError] = useState(null)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const flowRef = useRef(section.flow)
  const processingRef = useRef(false)
  const timeoutRef = useRef(null)
  const userDataRef = useRef(userData)
  const lastProcessedRef = useRef(-1)
  const sectionReadyRef = useRef(true) // Guards against stale flowIndex during section transitions

  // Keep userData ref in sync
  useEffect(() => {
    userDataRef.current = userData
  }, [userData])

  // Reset when section changes
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    processingRef.current = false
    flowRef.current = section.flow
    sectionReadyRef.current = false // Block stale processing until flowIndex resets to 0
    setDisplayedMessages([])
    setIsTyping(false)
    setCurrentReplies(null)
    setWaitingForInput(null)
    setFlowIndex(0)
    setInputText('')
    setInputError(null)
    lastProcessedRef.current = -1
  }, [section.id])

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [displayedMessages, isTyping])

  // Focus input when replies or input prompt appears
  useEffect(() => {
    if (currentReplies || waitingForInput) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [currentReplies, waitingForInput])

  // Resolve dynamic text
  const resolveText = useCallback((msg) => {
    if (typeof msg.text === 'function') {
      return msg.text(userDataRef.current)
    }
    return msg.text
  }, [])

  // Process next message
  const processMessage = useCallback((index) => {
    if (processingRef.current) return
    const flow = flowRef.current
    if (index >= flow.length) {
      onSectionComplete()
      return
    }

    const msg = flow[index]

    // Condition check — skip if condition returns false
    if (msg.condition && !msg.condition(userDataRef.current)) {
      setFlowIndex(index + 1)
      return
    }

    // Divider or system message — show instantly
    if (msg.type === 'divider' || msg.sender === 'system') {
      const text = resolveText(msg)
      setDisplayedMessages(prev => [...prev, { ...msg, text, key: `${section.id}_${index}` }])
      if (msg.complete) {
        onSectionComplete()
        return
      }
      if (msg.sender === 'system' && msg.type !== 'divider') {
        setTimeout(() => setFlowIndex(index + 1), 200)
      } else {
        setFlowIndex(index + 1)
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
        const text = resolveText(msg)
        const newMsg = { ...msg, text, key: `${section.id}_${index}` }
        setDisplayedMessages(prev => [...prev, newMsg])

        if (msg.score && msg.score.value) {
          onScore(msg.score.value, msg.score.points || 1)
        }

        // Input collection — wait for user text input
        if (msg.input) {
          setWaitingForInput(msg.input)
          processingRef.current = false
          return
        }

        // Quick replies
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
          onSectionComplete()
        } else {
          processingRef.current = false
          setFlowIndex(index + 1)
        }
      }, typingDelay)
    }, preDelay)
  }, [section.id, onSectionComplete, onScore, resolveText])

  // Trigger message processing when flowIndex changes
  useEffect(() => {
    // After a section change, wait for the batched setFlowIndex(0) to take effect
    // This prevents processing with a stale flowIndex from the previous section
    if (!sectionReadyRef.current) {
      if (flowIndex === 0) {
        sectionReadyRef.current = true
      } else {
        return // Skip — stale flowIndex from previous section
      }
    }

    if (flowIndex >= 0 && !currentReplies && !waitingForInput && flowIndex !== lastProcessedRef.current) {
      lastProcessedRef.current = flowIndex
      processMessage(flowIndex)
    }
  }, [flowIndex, processMessage, currentReplies, waitingForInput])

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

    if (reply.score && reply.score.value) {
      onScore(reply.score.value, reply.score.points || 1)
    }

    // Branch selection
    if (reply.branch) {
      onBranchSelect(reply.branch)
    }

    const flow = flowRef.current
    if (reply.goto) {
      const targetIndex = flow.findIndex(m => m.id === reply.goto)
      if (targetIndex !== -1) {
        setFlowIndex(targetIndex)
      } else {
        const nextIndex = (currentReplies?.messageIndex ?? flowIndex) + 1
        setFlowIndex(nextIndex)
      }
    } else {
      const nextIndex = (currentReplies?.messageIndex ?? flowIndex) + 1
      setFlowIndex(nextIndex)
    }
  }, [flowIndex, currentReplies, onScore, onBranchSelect])

  // Handle text submission
  const handleSendText = useCallback(() => {
    const text = inputText.trim()
    if (!text) return

    // Input collection mode
    if (waitingForInput) {
      const input = waitingForInput

      // Validate
      if (input.validate) {
        const value = input.type === 'year' ? parseInt(text, 10) : text
        if (!input.validate(value)) {
          setInputError(input.errorMessage || 'Please enter a valid value')
          return
        }
      }

      // Store value
      const value = input.type === 'year' ? parseInt(text, 10) : text
      onInput(input.field, value)

      // Show user message
      const userMsg = {
        type: 'user',
        sender: 'user',
        text: text,
        key: `user_${Date.now()}`,
      }
      setDisplayedMessages(prev => [...prev, userMsg])
      setWaitingForInput(null)
      setInputText('')
      setInputError(null)
      setFlowIndex(flowIndex + 1)
      return
    }

    // Quick reply matching mode
    if (currentReplies) {
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

      if (bestReply.score && bestReply.score.value) {
        onScore(bestReply.score.value, bestReply.score.points || 1)
      }
      if (bestReply.branch) {
        onBranchSelect(bestReply.branch)
      }

      const flow = flowRef.current
      if (bestReply.goto) {
        const targetIndex = flow.findIndex(m => m.id === bestReply.goto)
        if (targetIndex !== -1) {
          setFlowIndex(targetIndex)
        } else {
          const nextIndex = (currentReplies?.messageIndex ?? flowIndex) + 1
          setFlowIndex(nextIndex)
        }
      } else {
        const nextIndex = (currentReplies?.messageIndex ?? flowIndex) + 1
        setFlowIndex(nextIndex)
      }
    }
  }, [inputText, currentReplies, waitingForInput, flowIndex, onScore, onInput, onBranchSelect])

  // Find best matching reply for free text
  const findBestReply = (text, replies) => {
    const input = text.toLowerCase().trim()
    const exact = replies.find(r => r.text.toLowerCase().includes(input) || input.includes(r.text.toLowerCase()))
    if (exact) return exact
    for (const reply of replies) {
      const words = reply.text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/)
      for (const word of words) {
        if (word.length > 2 && input.includes(word)) return reply
      }
    }
    return replies[0]
  }

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendText()
    }
  }, [handleSendText])

  const hasText = inputText.trim().length > 0
  const isInputActive = !!waitingForInput || !!currentReplies

  return (
    <div className="chat-container">
      <ChatHeader
        section={section}
        sectionIndex={sectionIndex}
        totalSections={totalSections}
        completedSections={completedSections}
      />

      <div className="messages-area">
        <div className="messages-inner">
          <div className="chapter-divider">
            <span>{section.emoji} {section.title}</span>
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

      <div className={`input-area ${isInputActive ? 'input-active' : ''}`}>
        <input
          ref={inputRef}
          type="text"
          className="input-text-field"
          placeholder={
            waitingForInput
              ? waitingForInput.placeholder || 'Type your answer...'
              : currentReplies
              ? 'Type or pick a reply...'
              : 'Type a message'
          }
          value={inputText}
          onChange={e => { setInputText(e.target.value); setInputError(null) }}
          onKeyDown={handleKeyDown}
          disabled={!isInputActive}
        />
        {inputError && <div className="input-error">{inputError}</div>}
        {hasText ? (
          <button className="input-send-btn" onClick={handleSendText} aria-label="Send">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M1.101 21.757L23.8 12.028 1.101 2.243l.011 7.912 13.623 1.873-13.623 1.872-.011 7.857z"/>
            </svg>
          </button>
        ) : (
          <button className="input-icon-btn" aria-label="Waiting" tabIndex={-1}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.238 6.002s-6.238-2.471-6.238-6.002H4.261c0 4.001 3.178 7.297 7.061 7.885v3.884h1.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-1.5z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
