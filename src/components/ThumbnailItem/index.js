// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, onChangeDisplayImg} = props
  const {thumbnailUrl, thumbnailAltText} = details
  const onChange = () => {
    onChangeDisplayImg(details)
  }

  return (
    <li className="thumbnail">
      <button type="button" onClick={onChange}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
