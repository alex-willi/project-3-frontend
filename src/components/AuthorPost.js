import React from "react";
import "../styles/Feed.css";

function AuthorPost(props) {
  if (props.post) {
    return (
      <div id="allposts">
        <h1 className="post-title">
          {props.post.title}
          <span>
            {props.onDelete && (
              <button onClick={() => props.onDelete(props.post._id)}>Delete</button>
            )}
          </span>
        </h1>
        <img className="feed-image" src={props.post.photo} alt="sports"></img>
        <h1>{props.post.body}</h1>
        {props.author ? (
          <h1 className="author-name">Author: {props.author.name}</h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AuthorPost;