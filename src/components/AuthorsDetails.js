import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function AuthorsDetails() {
  const { id } = useParams();
  const BASE_URL = `http://localhost:4000/${id}`;
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        setAuthor(json);
      })
      .catch(console.err);
  }, []);

  return <p className="authorname">{author.name}</p>;
}

export default AuthorsDetails;
