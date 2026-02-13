export default function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="welcome-logo">
          <div className="welcome-icon">🧭</div>
          <div className="welcome-brand">CMA CGM</div>
        </div>

        <h1 className="welcome-title">Discovery</h1>
        <p className="welcome-subtitle">Your onboarding journey starts here</p>

        <div className="welcome-info">
          <div className="welcome-info-item">
            <span className="welcome-info-icon">⏱</span>
            <span>~25 minutes</span>
          </div>
          <div className="welcome-info-item">
            <span className="welcome-info-icon">💬</span>
            <span>Interactive conversation</span>
          </div>
          <div className="welcome-info-item">
            <span className="welcome-info-icon">🎯</span>
            <span>5 chapters to explore</span>
          </div>
        </div>

        <div className="welcome-chapters">
          <div className="welcome-chapter">👋 Welcome</div>
          <div className="welcome-chapter">📅 History</div>
          <div className="welcome-chapter">🧭 Purpose & Values</div>
          <div className="welcome-chapter">🚢 Activities</div>
          <div className="welcome-chapter">🤝 Foundation</div>
        </div>

        <button className="welcome-cta" onClick={onStart}>
          Start your journey
        </button>

        <p className="welcome-demo-badge">Interactive Demonstrator</p>
      </div>
    </div>
  )
}
