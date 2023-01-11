// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import brandon from "../assets/brandontobin.jpeg";
// import alex from "../assets/alexwilliams.jpeg";
// import cagdas from "../assets/cagdaskalsen.jpeg";
// // import "../styles/Feed.css";
// function Authors(props) {
//   const [authors, setAuthors] = useState(null);
//   const BASE_URL = "https://project-3-sports.herokuapp.com/";
//   const loaded = () => {
//     return authors.map((author, index) => {
//       return (
//         <div key={index} className="authors">
//           <Link className="authorslink" to={`/authors/${author._id}`}>
//             <h1 id="authorname">{author.name} </h1>
//           </Link>
//         </div>
//       );
//     });
//   };
//   const loading = () => (
//     <section className="user-list">
//       <h1> Loading... </h1>
//     </section>
//   );
//   async function fetchUser() {
//     try {
//       const response = await fetch(BASE_URL);
//       const author = await response.json();
//       setAuthors(author);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   return (
//     <>
//       <div id="authorsname">
//         {authors && authors.length ? loaded() : loading()}
//       </div>
//       <section className="user-list">
//         <img className="alex-image" alt="alex" src={alex} />
//         <img className="cagdas-image" alt="cagdas" src={cagdas} />
//         <img className="brandon-image" alt="brandon" src={brandon} />
//       </section>
//     </>
//   );
// }

// export default Authors;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import brandon from "../assets/brandontobin.jpeg";
import alex from "../assets/alexwilliams.jpeg";
import cagdas from "../assets/cagdaskalsen.jpeg";

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
      <img className="alex-image" src={alex} />
      <img className="cagdas-image" src={cagdas} />
      <img className="brandon-image" src={brandon} />
    </section>
  );
}

export default Authors;
