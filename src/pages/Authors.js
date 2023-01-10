import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Feed.css";
function Authors(props) {
  const [authors, setAuthors] = useState(null);
  const BASE_URL = "https://project-3-sports.herokuapp.com/";
  const loaded = () => {
    return authors.map((author, index) => {
      return (
        <div key={index} className="authors">
          <Link className="authorslink" to={`/authors/${author._id}`}>
            <h1> {author.name} </h1>{" "}
          </Link>
        </div>
      );
    });
  };
  const loading = () => (
    <section className="user-list">
      <h1> Loading... </h1>{" "}
    </section>
  );
  async function fetchUser() {
    try {
      const response = await fetch(BASE_URL);
      const author = await response.json();
      setAuthors(author);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div id="authorsinfo">
      <section className="user-list">
        {" "}
        {authors && authors.length ? loaded() : loading()}{" "}
      </section>
      <div id="pics">
        <div id="pic-alex">
          <img
            src="https://media.licdn.com/dms/image/D5603AQHaf1AATzG9EA/profile-displayphoto-shrink_200_200/0/1669903290075?e=1678924800&v=beta&t=j9tKMS7siwoxmWqliC4lMSog_8fZsRiC7UpwdaWlTSw"
            alt=""
          />
        </div>
        <div id="pic-cagdas">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQGugarVN3zn2g/profile-displayphoto-shrink_200_200/0/1672529138321?e=1678924800&v=beta&t=AXVGiSo6vWFIJG3c34ARCK4AZs-6_ffid45IHk3kxVY"
            alt=""
          />
        </div>
        <div id="pic-brandon">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQGsGIMyNwxk0Q/profile-displayphoto-shrink_200_200/0/1631978161970?e=1678924800&v=beta&t=zrDDRgQmyfNp96a7oFafT4hJEt4Gp6c5rBvhb40zjqw"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Authors;
