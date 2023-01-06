import { useState, useEffect } from "react";
import { useParams } from "react-router";

function AuthorsDetails(props) {
  const { id } = useParams();
  const URL = `http://localhost:4000/home/${id}`;
  // const AUTHORS_URL = `http://localhost:4000/posts/${id}`;
  const [author, setAuthor] = useState(null);
  const [newpost, setNewpost] = useState({
    title: "",
    photo: "",
    body: "",
  });

  const handleChange = (event) => {
    setNewpost({ ...newpost, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { ...newpost };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      };
      const response = await fetch(
        `http://localhost:4000/posts/`,
        requestOptions
      );
      const comments = await response.json();
      setAuthor([...newpost, comments]);
      console.log(setNewpost);
      setNewpost({
        comments,
      });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(newpost);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setAuthor(json);
      })
      .catch(console.err);
  }, [URL]);

  return author ? (
    <>
      <p className="authorname"> {author.name} </p>
      <form onSubmit={handleSubmit}>
        <div className="authorpost">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newpost.title}
            onChange={handleChange}
          />
          <input
            name="photo"
            id="image"
            type="text"
            alt=""
            placeholder="image"
            value={newpost.image}
            onChange={handleChange}
          />
          <textarea
            name="body"
            cols="52"
            rows="6"
            type="text"
            id="textbox"
            placeholder="body"
            value={newpost.body}
            onChange={handleChange}
          ></textarea>
          <input type="submit" value="Create Post" />
        </div>
      </form>
    </>
  ) : (
    <p> LOADING... </p>
  );
}

export default AuthorsDetails;
