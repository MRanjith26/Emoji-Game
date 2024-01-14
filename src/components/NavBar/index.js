// Write your code here.
import './index.css'

const NavBar = props => {
  const {TopScore, isGameStarted, realScore} = props
  return (
    <nav className="Nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="app-logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {isGameStarted ? (
        <div className="score-container">
          <p className="score-count">Score: {realScore}</p>
          <p className="score-count">Top Score: {TopScore}</p>
        </div>
      ) : null}
    </nav>
  )
}
export default NavBar
