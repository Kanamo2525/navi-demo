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
            <span>~25-30 minutes</span>
          </div>
          <div className="welcome-info-item">
            <span className="welcome-info-icon">💬</span>
            <span>Interactive conversation</span>
          </div>
          <div className="welcome-info-item">
            <span className="welcome-info-icon">🎯</span>
            <span>3 phases + 1 exploration branch</span>
          </div>
        </div>

        <div className="welcome-chapters">
          <div className="welcome-chapter">📅 My Story × Our Story</div>
          <div className="welcome-chapter">🧭 My Values in Action</div>
          <div className="welcome-chapter">🚢 The Group in Action</div>
          <div className="welcome-chapter">🔀 Explorer Branch</div>
          <div className="welcome-chapter">🎓 Your Discovery Capsule</div>
        </div>

        <button className="welcome-cta" onClick={onStart}>
          Start your journey
        </button>

        <p className="welcome-demo-badge">Interactive Demonstrator — v2.1</p>
      </div>
    </div>
  )
}
