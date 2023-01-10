import React from "react";
import "../styles/Feed.css";
import { Link } from "react-router-dom";
function AuthorPost(props, post) {
  // console.log(props)
  if (props.post) {
    return (
      <div>
      
            <div id="allposts">
                <Link key={post.id} className="postlink" to={`/posts/${props.post._id}`}>
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
        </Link>
        {props.author ? (
          <h1 className="author-name">Author: {props.author.name}</h1>
        ) : (
          ""
        )}
      </div>
      </div>
    );
  }
}

export default AuthorPost;