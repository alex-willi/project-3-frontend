import React from "react";
import "../styles/Feed.css";
function Post(props) {
  if (props.post) {
    return (
      <>
        <h1 className="post-title">{props.post.title}</h1>
        <img className="feed-image" src={props.post.photo} alt="sports"></img>
        {/* <h1>{props.author.name}</h1> */}
        {/* <h1>{props.post.body}</h1> */}
        {props.author ? (
          <h1 className="author-name">Author: {props.author.name}</h1>
        ) : (
          ""
        )}
      </>
    );
  }
  
}

<<<<<<< HEAD
export default Post;
=======

export default Post;
>>>>>>> main
