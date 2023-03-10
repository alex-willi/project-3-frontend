import { useState, useEffect } from "react";
import { useParams } from "react-router";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import Comments from "../components/Comments";
import AuthorPost from "../components/AuthorPost";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    image: "",
    title: "",
    post: id,
  });

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
    try {
      const response = await (
        await fetch(`https://project-3-sports.herokuapp.com/comments/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
      ).json();
      setComments([...comments, response]);
    } catch (err) {
      console.log(err);
    }
  }
  const handleFormChange = (e) => {
    const userInput = { ...editForm };
    userInput[e.target.name] = e.target.value;
    setEditForm(userInput);
  };
  const handleForm = async (e) => {
    e.preventDefault();
    const currentState = { ...editForm };

    try {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentState),
      };
      const response = await fetch(
        `https://project-3-sports.herokuapp.com/posts/${id}`,
        requestOptions
      );
      const updatedPost = await response.json();
      setEditForm(updatedPost);
      fetchPostData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  if (post) {
    return (
      <div>
        <form id="edit-form" onSubmit={(e) => handleForm(e, post._id)}>
          <div>
            <label id="label-name" htmlFor="name">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="enter a posts title"
                value={editForm.title}
                onChange={handleFormChange}
              />
            </label>
          </div>
          <div>
            <label id="label-image" htmlFor="image">
              Image
              <input
                type="text"
                id="photo"
                name="photo"
                placeholder="enter a url image"
                value={editForm.photo}
                onChange={handleFormChange}
              />
            </label>
          </div>
          <div>
            <label id="label-body" htmlFor="title">
              Body
              <input
                type="text"
                id="body"
                name="body"
                placeholder="enter the body of the post"
                value={editForm.body}
                onChange={handleFormChange}
              />
              <input type="submit" value="Edit post" />
            </label>
            <br />
          </div>
        </form>
        <AuthorPost post={post} author={author} />
        <Comments addComment={addComment} comments={comments} postId={id} />
      </div>
    );
  }

  return <LoadingPlaceholder />;
}

export default PostDetails;
