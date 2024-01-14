/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import EmojiCard from '../EmojiCard/index'
import NavBar from '../NavBar/index'
import WinOrLossCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {TopScore: 0, clickedEmojisList: [], isGameStarted: true}

  endGameAndSetScore = realScore => {
    const {TopScore} = this.state
    let newTopScore = TopScore

    if (realScore > TopScore) {
      newTopScore = realScore
    }

    this.setState({TopScore: newTopScore, isGameStarted: false})
  }

  onClickEmojiId = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const clickedEmojisListLength = clickedEmojisList.length
    const isEmojiInclude = clickedEmojisList.includes(id)

    if (isEmojiInclude) {
      this.endGameAndSetScore(clickedEmojisListLength)
    } else if (emojisList.length - 1 === clickedEmojisListLength) {
      this.endGameAndSetScore(emojisList.length)
    }
    this.setState(prevState => ({
      clickedEmojisList: [...prevState.clickedEmojisList, id],
    }))
  }

  onResetGame = () => {
    this.setState({clickedEmojisList: [], isGameStarted: true})
  }

  onRenderScoreCard = () => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    const isSuccess = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLossCard
        totalScore={clickedEmojisList.length}
        isSuccess={isSuccess}
        onPlayAgain={this.onResetGame}
      />
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onShuffleEmojisList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="emoji-card-container">
        {shuffledEmojisList.map(EachEmoji => (
          <EmojiCard
            emojiDetails={EachEmoji}
            key={EachEmoji.id}
            onClickEmojiId={this.onClickEmojiId}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {TopScore, isGameStarted, clickedEmojisList} = this.state

    return (
      <div className="bg-container">
        <NavBar
          TopScore={TopScore}
          isGameStarted={isGameStarted}
          realScore={clickedEmojisList.length}
        />
        <div className="emoji-game">
          {isGameStarted
            ? this.onShuffleEmojisList()
            : this.onRenderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
