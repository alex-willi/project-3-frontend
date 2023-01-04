import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Authors(props) {
  const [users, setUser] = useState(null);
  const BASE_URL = "http://localhost:4000/";
  const loaded = () => {
    return users?.map((user) => {
      return (
        <div key={user._id}>
          <Link className="authorslink">
            <h1>{user.name}</h1>
          </Link>
        </div>
      );
    });
  };
  const loading = () => (
    <section className="user-list">
      <h1>
        Loading...
        <span>
          <h2>Loading...</h2>
        </span>
      </h1>
    </section>
  );
  async function fetchUser() {
    try {
      const response = await fetch(BASE_URL);
      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <section className="user-list">
      {users && users.length ? loaded() : loading()}
    </section>
  );
}
export default Authors;
