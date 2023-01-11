import React from "react";
import "../styles/Authors.css";
import { Link } from "react-router-dom";
function AuthorPost(props) {
  const { post } = props;
  if (post) {
    return (
      <>
        <Link to={`/feed/`}>
          {props.onDelete && (
            <button id="delete-btn" onClick={() => props.onDelete(post._id)}>
              Delete Post
            </button>
          )}
        </Link>
        <div id="allposts">
          <Link key={post.id} className="postlink" to={`/posts/${post._id}`}>
            <h1 className="post-title">{post.title}</h1>
            <img className="feed-image" src={post.photo} alt="sports"></img>
            <h1>{post.body}</h1>
          </Link>
        </div>
      </>
    );
  }
}
export default AuthorPost;