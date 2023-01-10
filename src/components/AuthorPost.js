import React from "react";
import "../styles/Feed.css";
import { Link } from "react-router-dom";
function AuthorPost(props, post) {
  console.log(props)
  if (props.post) {
    return (
      <div>
      <form onSubmit={props.update}>
         <input type="submit" value="Edit post" />
                    <div>
                        <label htmlFor='name'>
                            Title
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="enter a posts title"
                                value={props.editForm.title}
                                onChange={props.update}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor='image'>
                            Image
                            <input
                                type="text"
                                id="photo"
                                name="photo"
                                placeholder="enter a url image"
                                // value={editForm.image}
                                // onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor='title'>
                            Body
                            <input
                                type="text"
                                id="body"
                                name="body"
                                placeholder="enter the body of the post"
                                // value={editForm.title}
                                // onChange={handleChange}
                            />
                        </label>
                        <br />
                       
                    </div>
                </form>
            <div id="allposts">
                <Link key={post.id} className="postlink" to={`/posts/${post._id}`}>
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