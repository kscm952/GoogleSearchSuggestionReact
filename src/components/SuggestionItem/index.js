// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, suggestionDisplay} = props
  const {suggestion} = suggestionDetails

  const suggestionClick = () => {
    suggestionDisplay(suggestion)
  }

  return (
    <li className="suggestion-item">
      <div>
        <p className="suggestion-text">{suggestion}</p>
      </div>
      <div>
        <img
          className="arrow-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          onClick={suggestionClick}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
