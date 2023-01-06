import { useState, useEffect } from "react";
import { useParams } from "react-router";
function Posts(props) {
  const [posts, setPosts] = useState();
  const { id } = useParams();
  const URL = `http://localhost:4000/authors/${id}`;
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      })
      .catch(console.err);
  }, [URL]);

  return posts.map((post) => {
    return (
      <div className="posts">
        <h1> {post.title} </h1>
        <img src={post.photo} alt="sports"></img>
        <h1> {post.body} </h1>
      </div>
    );
  });
}

export default Posts;
