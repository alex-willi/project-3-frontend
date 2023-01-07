import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Post from "../components/Post";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import Comments from "../components/Comments";

function PostDetails() {
  const { id } = useParams()
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);

  async function fetchPostData() {
    try {
      const response = await (await fetch(`http://localhost:4000/posts/${id}`)).json();

      setPost(response.post)
      setAuthor(response.author);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPostData();
  }, [])

  if (post) {
    return <div>
      <Post post={post} author={author} />
      <Comments />
    </div>
  }

  return <LoadingPlaceholder />
}

export default PostDetails;