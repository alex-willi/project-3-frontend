import { useState, useEffect } from "react";
import { useParams } from "react-router";

function AuthorsDetails(props) {
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
        <div className="authorpost">
          <input type="text" placeholder="Title" />
          <input id="image" type="text" alt="" placeholder="image" />
          <textarea
            cols="52"
            rows="6"
            type="text"
            id="textbox"
            placeholder="Your Comment"
          ></textarea>

          <button className="postbutton">Create New Post</button>
        </div>
      </form>
    </>
  ) : (
    <p>LOADING...</p>
  );
}

export default AuthorsDetails;
