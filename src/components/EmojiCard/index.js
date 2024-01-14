// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmojiId} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const getActiveId = () => {
    onClickEmojiId(id)
  }

  return (
    <li className="emoji-card">
      <button className="button" type="button" onClick={getActiveId}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
