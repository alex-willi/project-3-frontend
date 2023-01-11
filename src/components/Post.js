import React from "react";
import "../styles/Feed.css";

function Post(props) {
  if (props.post) {
    return (
<<<<<<< HEAD
      <div id="all-posts">
        <h1 className="posttitle">{props.post.title}</h1>
        <img className="feedimage" src={props.post.photo} alt="sports"></img>
=======
      <div id="allposts">
        <h1 className="post-title">{props.post.title}</h1>
        <img className="feed-image" src={props.post.photo} alt="sports"></img>
>>>>>>> dev
        {props.author ? (
          <h1 id="post-body"> Author: {props.author.name} </h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Post;
