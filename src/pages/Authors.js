import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Feed.css";
// import brandon from "../assets/brandontobin.jpeg";
// import alex from "../assets/alexwilliams.jpeg";
// import cagdas from "../assets/cagdaskalsen.jpeg";

function Authors(props) {
  const [authors, setAuthors] = useState(null);
  const BASE_URL = "https://project-3-sports.herokuapp.com/";
  const loaded = () => {
    return authors.map((author, index) => {
      return (
        <div key={index} className="authors">
          <Link className="authorslink" to={`/authors/${author._id}`}>
            <h1>{author.name} </h1>
          </Link>
        </div>
      );
    });
  };
  const loading = () => (
    <section className="user-list">
      <h1> Loading... </h1>
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
    <section className="user-list">
      {authors && authors.length ? loaded() : loading()}
      {/* <img className="alex-image" src={alex} />
      <img className="cagdas-image" src={cagdas} />
      <img className="brandon-image" src={brandon} /> */}
    </section>
  );
}

export default Authors;
