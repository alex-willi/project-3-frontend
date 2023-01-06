import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import "../styles/Feed.css";
import Authors from "./Authors";

function Feed(props) {
  const [posts, setPosts] = useState(null);
  async function fetchPosts() {
    try {
      const response = await fetch(BASE_URL);
      const posts = await response.json();
      setPosts(posts);
      console.log(posts.title);
    } catch (err) {
      console.log(err);
    }
  }
  const BASE_URL = `http://localhost:4000/posts`;
  useEffect(() => {
    fetchPosts();
  }, []);
  const loading = () => (
    <section className="user-list">
      <h1>Loading...</h1>
    </section>
  );
  const loaded = () => {
    return posts.map((posts, index) => {
      return (
        <div key={index} className="feedlist">
          <h1 className="post-title">{posts.title}</h1>
          <img className="feed-image" src={posts.photo} alt="sports"></img>
          <h1 className="author-name">{posts.body}</h1>
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className="feedtitle">Feed Page</h1>
      <section className="all-feeds">{posts && posts.length ? loaded() : loading()}</section>
    </div>
  );
}
export default Feed;