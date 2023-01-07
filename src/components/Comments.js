import { useState } from "react";
import "../styles/Comments.css";
function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = (e) => {
    e.preventDefault();
    setComments((comments) => [...comments, comment]);
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="container">
      {comments.map((text, index) => (
        <div key={index} className="comment-container">
          {text}
        </div>
      ))}
      <div className="comment-flexbox">
        <h3 className="comment-text">Comment</h3>
        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="input-box"
        />
        <div>
          <button onClick={onClickHandler} className="comment-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
