import { useState, useCallback, useMemo } from 'react'
import Chat from './Chat'
import WelcomeScreen from './components/WelcomeScreen'
import Sidebar from './components/Sidebar'
import { phase1, phase2, phase3, branchGreen, branchGrowth, branchAI, epilogue } from './data'

// Compute signature value from scores
function computeSignatureValue(scores) {
  const entries = Object.entries(scores)
  if (entries.every(([, v]) => v === 0)) return null
  entries.sort((a, b) => b[1] - a[1])
  return entries[0][0] // highest scoring value
}

const BRANCH_MAP = {
  green: branchGreen,
  growth: branchGrowth,
  ai: branchAI,
}

export default function App() {
  const [started, setStarted] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState([])
  const [chosenBranch, setChosenBranch] = useState(null)
  const [userData, setUserData] = useState({
    birthYear: null,
    tripYear: null,
    tripDestination: null,
    diplomaYear: null,
    aiYear: null,
    scores: { boldness: 0, imagination: 0, excellence: 0, exemplarity: 0 },
    signatureValue: null,
    missionScore: 0,
    chosenBranch: null,
    branchBadge: false,
  })

  // Build sections array dynamically based on branch choice
  const sections = useMemo(() => {
    const base = [phase1, phase2, phase3]
    if (chosenBranch && BRANCH_MAP[chosenBranch]) {
      base.push(BRANCH_MAP[chosenBranch])
    }
    base.push(epilogue)
    return base
  }, [chosenBranch])

  const handleStart = useCallback(() => {
    setStarted(true)
    setCurrentSection(0)
  }, [])

  const handleSectionComplete = useCallback(() => {
    setCompletedSections(prev => [...new Set([...prev, currentSection])])

    // Compute signature value when Phase 2 completes
    if (currentSection === 1) { // Phase 2 index
      setUserData(prev => ({
        ...prev,
        signatureValue: computeSignatureValue(prev.scores),
      }))
    }

    // If Phase 3 completes and no branch yet, wait for branch selection
    // The branch selection is handled by the flow via onBranchSelect
    // The section auto-advances once branch is set

    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1)
    }
  }, [currentSection, sections.length])

  const handleScore = useCallback((value, points) => {
    setUserData(prev => ({
      ...prev,
      scores: {
        ...prev.scores,
        [value.toLowerCase()]: (prev.scores[value.toLowerCase()] || 0) + points,
      },
    }))
  }, [])

  const handleInput = useCallback((field, value) => {
    setUserData(prev => ({ ...prev, [field]: value }))
  }, [])

  const handleBranchSelect = useCallback((branch) => {
    setChosenBranch(branch)
    setUserData(prev => ({ ...prev, chosenBranch: branch }))
  }, [])

  if (!started) {
    return <WelcomeScreen onStart={handleStart} />
  }

  return (
    <div className="whatsapp-layout">
      <Sidebar
        sections={sections}
        currentSection={currentSection}
        completedSections={completedSections}
        chosenBranch={chosenBranch}
      />
      <Chat
        section={sections[currentSection]}
        sectionIndex={currentSection}
        totalSections={sections.length}
        completedSections={completedSections}
        onSectionComplete={handleSectionComplete}
        onScore={handleScore}
        onInput={handleInput}
        onBranchSelect={handleBranchSelect}
        userData={userData}
      />
    </div>
  )
}
