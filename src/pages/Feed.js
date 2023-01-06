import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react"
import "../styles/Feed.css"

function Feed(props) {
  const [posts, setPosts] = useState(null);
  async function fetchPosts() {
    try {
      const response = await fetch(BASE_URL);
      const posts = await response.json();
      setPosts(posts);
      console.log(posts.title)
    } catch (err) {
      console.log(err);
    }
  }
  const BASE_URL = "http://localhost:4000/posts";
  useEffect(() => {
    fetchPosts();
  }, []);
  const loading = () => (
    <section className="user-list">
      <h1>Loading...</h1>
    </section>
  );
  const loaded = () => {
    return posts.map((posts) => {
      return (
        <div className="authors">
          <Link
            key={posts.id}
            className="authorslink"
            to={`/posts/${posts._id}`}
          >
            <h1>{posts.title}</h1>
            <img src={posts.photo} alt="sports"></img>
          </Link>
        </div>
      );
    });
  };
  
  return (
    <div>
    <h1>Feed Page</h1>
    <section>{posts && posts.length ? loaded() : loading()}</section>
    </div>
  )
}
export default Feed;