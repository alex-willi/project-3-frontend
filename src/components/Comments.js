import { useEffect, useState } from "react";
import "../styles/Comments.css";

function Comments(props) {
  console.log(props)
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = (e) => {
    e.preventDefault();
    props.addComment({
      name: 'test-person',
      comment: comment,
      post: props.postId
    })
    setComment('')
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    setComments(props.comments);
  }, []);
  console.log(comments);

  return (
    <div className="container">
      {comments.map((comment, index) => (
        <div key={index} className="comment-container">
          {comment.comment}
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