import { useState, useEffect } from "react";
import { useParams } from "react-router";

function AuthorsDetails() {
  const { id } = useParams();
  const URL = `http://localhost:4000/home/${id}`;
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setAuthor(json);
        console.log(author);
      })
      .catch(console.err);
  }, [URL]);

  return author ? (
    <>
      <p className="authorname">{author.name}</p>
      <form>
        <label htmlFor="image">Image</label>
        <input id="image" type="text" placeholder="image" />
        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder="title" />
        <button className="postbutton">Create New Post</button>
      </form>
    </>
  ) : (
    <p>LOADING...</p>
  );
}

export default AuthorsDetails;
