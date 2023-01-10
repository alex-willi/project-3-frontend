import React from "react";
import "../styles/Feed.css";
import { Link } from "react-router-dom";
function AuthorPost(props, post) {
  // console.log(props)
  if (props.post) {
    return (
      <div id="allposts">
        <form onSubmit={props.onDelete}>
          <div className="edit">
            <label htmlFor="name">
              Title{" "}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="enter a posts title"
                // value={editForm.name}
                // onChange={handleChange}
              />
            </label>
            <div>
              <label htmlFor="image">
                Image{" "}
                <input
                  type="text"
                  id="image"
                  name="image"
                  placeholder="enter a url image"
                  // value={editForm.image}
                  // onChange={handleChange}
                />
              </label>{" "}
            </div>{" "}
            <div>
              <label htmlFor="title">
                Body{" "}
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="enter the body of the post"
                  // value={editForm.title}
                  // onChange={handleChange}
                />
                <br> </br> <input type="submit" value="Edit post" />
              </label>{" "}
            </div>
            <br />
          </div>{" "}
          <br />
          <div className="delete">
            <span>
              {" "}
              {props.onDelete && (
                <button onClick={() => props.onDelete(props.post._id)}>
                  Delete Post{" "}
                </button>
              )}{" "}
            </span>{" "}
          </div>{" "}
        </form>{" "}
        <h1 className="post-title"> {props.post.title} </h1>{" "}
        <img className="feed-image" src={props.post.photo} alt="sports">
          {" "}
        </img>{" "}
        <h1 className="post-body"> {props.post.body} </h1>{" "}
        {props.author ? (
          <h1 className="author-name"> Author: {props.author.name} </h1>
        ) : (
          ""
        )}{" "}
      </div>
    );
  }
}

export default AuthorPost;
