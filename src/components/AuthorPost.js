import React from "react";
import "../styles/Feed.css";
import { Link } from "react-router-dom";

function AuthorPost(props) {
  // destructure `post` property from `props` object
  const { post } = props;

  // check if the post data is present
  if (post) {
    return (
      <div id="allposts">
        {/* create a link to navigate to the post details page */}
        <Link key={post.id} className="postlink" to={`/posts/${post._id}`}>
          <h1 className="post-title">
            {post.title}
            {props.onDelete && (
              <button onClick={() => props.onDelete(post._id)}>Delete</button>
            )}
          </h1>
          <img className="feed-image" src={post.photo} alt="sports"></img>
          <h1>{post.body}</h1>
        </Link>

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
