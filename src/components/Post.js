import React from "react";
import "../styles/Feed.css";
function Post(props) {
  if (props.post) {
    return (
      <div id="all-posts">
        <h1 className="posttitle">{props.post.title}</h1>
        <img className="feedimage" src={props.post.photo} alt="sports"></img>
        {props.author ? (
          <h1 className="author-name">Author: {props.author.name}</h1>
        ) : (
          ""
        )}
      </div>
    );
  }

}


export default Post;