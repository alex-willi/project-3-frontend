import { useState, useEffect } from "react";
import { useParams } from "react-router";

function AuthorsDetails(props) {
  const { id } = useParams();
  const URL = `http://localhost:4000/home/${id}`;
  const [author, setAuthor] = useState(null);
  const [newpost, setNewpost] = useState({
    title: "",
    image: "",
    body: "",
  });
  const handleChange = (event) => {
    const prevInput = { ...newpost };
    prevInput[event.target.name] = event.target.value;
    setNewpost(prevInput);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = { ...newpost };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      };
      const response = await fetch(URL, requestOptions);
      const comments = await response.json();
      setAuthor([...author, comments]);
      setNewpost({
        title: "",
        image: "",
        body: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
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
      <p className="authorname">{author.name}</p>
      <form onSubmit={handleSubmit}>
        <div className="authorpost">
          <input
            type="text"
            name="name"
            placeholder="Title"
            value={newpost.title}
            onChange={handleChange}
          />
          <input
            id="image"
            type="text"
            alt=""
            placeholder="image"
            value={newpost.image}
            onChange={handleChange}
          />
          <textarea
            cols="52"
            rows="6"
            type="text"
            id="textbox"
            placeholder="Your Comment"
            value={newpost.body}
            onChange={handleChange}
          ></textarea>

          <input type="submit" value="Create Post" />
        </div>
      </form>
    </>
  ) : (
    <p>LOADING...</p>
  );
}

export default AuthorsDetails;
