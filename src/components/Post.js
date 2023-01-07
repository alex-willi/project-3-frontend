import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Posts(props) {
  const [posts, setPosts] = useState();
  const { id } = useParams();
  const URL = `http://localhost:4000/posts/${id}`;
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
        console.log(json);
      })
      .catch(console.err);
  }, [URL]);



  return (
    <h1>hi</h1>
  )
}
export default Posts;
