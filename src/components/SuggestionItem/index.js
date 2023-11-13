import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateSearchInputVal} = props
  const {suggestion} = suggestionItem
  const onClickingArraowBtn = () => {
    updateSearchInputVal(suggestion)
  }
  return (
    <li className="li-el">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="button" onClick={onClickingArraowBtn}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
