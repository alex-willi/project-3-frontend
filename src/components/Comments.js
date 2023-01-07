import { useState } from "react"
import "../styles/Comments.css"
function Comments() {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment])
  }
  const onChangeHandler = (e) => {
    setComment(e.target.value)
  }
  return (
    <div className="container">
      {comments.map((text) => (
        <div className="comment-container">{text}</div>
      ))}
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <button onClick={onClickHandler}
          className="comment-button">
          Submit
        </button>
      </div>
    </div>
  )
}

export default Comments