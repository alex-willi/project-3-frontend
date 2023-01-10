import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Post from "../components/Post";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import Comments from "../components/Comments";
import Delete from "../components/Delete.js";
import "../styles/Feed.css";
function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState(null);

  async function fetchPostData() {
    try {
      const response = await (
        await fetch(`https://project-3-sports.herokuapp.com/posts/${id}`)
      ).json();

      setPost(response.post);
      setAuthor(response.author);
      setComments(response.comments);
    } catch (err) {
      console.log(err);
    }
  }

  async function addComment(data) {
    console.log(data);
    try {
      const response = await (
        await fetch(`http://localhost:4000/comments/`, {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
      ).json();
      console.log(response);
      setComments([...comments, response]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPostData();
  }, []);
  console.log(comments);

  if (post) {
    return (
      <>
        <Post id="details-pic" post={post} author={author} />
        <Comments addComment={addComment} comments={comments} postId={id} />
        <Delete />
      </>
    );
  }

  return <LoadingPlaceholder />;
}

export default PostDetails;
