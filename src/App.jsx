import { useState, useCallback } from 'react'
import Chat from './Chat'
import WelcomeScreen from './components/WelcomeScreen'
import Sidebar from './components/Sidebar'
import { chapters } from './data'

export default function App() {
  const [started, setStarted] = useState(false)
  const [currentChapter, setCurrentChapter] = useState(0)
  const [completedChapters, setCompletedChapters] = useState([])
  const [userData, setUserData] = useState({
    scores: { boldness: 0, imagination: 0, excellence: 0, exemplarity: 0 },
    answers: {},
  })

  const handleStart = useCallback(() => {
    setStarted(true)
    setCurrentChapter(0)
  }, [])

  const handleChapterComplete = useCallback(() => {
    setCompletedChapters(prev => [...new Set([...prev, currentChapter])])
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(prev => prev + 1)
    }
  }, [currentChapter])

  const handleSelectChapter = useCallback((index) => {
    setCurrentChapter(index)
  }, [])

  const handleScore = useCallback((value, points) => {
    setUserData(prev => ({
      ...prev,
      scores: {
        ...prev.scores,
        [value.toLowerCase()]: (prev.scores[value.toLowerCase()] || 0) + points,
      },
    }))
  }, [])

  if (!started) {
    return <WelcomeScreen onStart={handleStart} />
  }

  return (
    <div className="whatsapp-layout">
      <Sidebar
        currentChapter={currentChapter}
        completedChapters={completedChapters}
        onSelect={handleSelectChapter}
      />
      <Chat
        chapter={chapters[currentChapter]}
        chapterIndex={currentChapter}
        totalChapters={chapters.length}
        completedChapters={completedChapters}
        onChapterComplete={handleChapterComplete}
        onSelectChapter={handleSelectChapter}
        onScore={handleScore}
        userData={userData}
      />
    </div>
  )
}
