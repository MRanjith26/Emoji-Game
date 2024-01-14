// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {totalScore, isSuccess, onPlayAgain} = props
  const scoreTitle = isSuccess ? 'You Won' : 'You Lose '
  const bestTopScore = isSuccess ? 'Best Score' : 'Score'
  const scoreImage = isSuccess
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="score-card">
      <div className="score-details">
        <h1 className="score-title">{scoreTitle}</h1>
        <p className="score-text">{bestTopScore}</p>
        <p className="total-score">{totalScore}/12</p>
        <button className="play-btn" type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-details">
        <img src={scoreImage} className="score-img" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLossCard
