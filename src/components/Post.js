import React from "react";
import "../styles/Feed.css";

function Post(props) {
  if (props.post) {
    return (
      <div id="allposts">
        <h1 className="post-title">{props.post.title}</h1>
        <img className="feed-image" src={props.post.photo} alt="sports"></img>
        {/* <h1>{props.author.name}</h1> */}
        <h1 id="post-body">{props.post.body}</h1>
        {props.author ? (
          <h1 className="author-name"> Author: {props.author.name} </h1>
        ) : (
          ""
        )}{" "}
      </div>
    );
  }
}

export default Post;
