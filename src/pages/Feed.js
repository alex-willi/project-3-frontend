import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Feed.css";
import Post from "../components/Post";
import LoadingPlaceholder from "../components/LoadingPlaceholder";
function Feed(props) {
  const [posts, setPosts] = useState([]);
  async function fetchPosts() {
    try {
      const response = await fetch(BASE_URL);
      const posts = await response.json();
      setPosts(posts);
    } catch (err) {
      console.log(err);
    }
  }
  const BASE_URL = `https://project-3-sports.herokuapp.com/posts`;

  useEffect(() => {
    fetchPosts();
  }, []);

  if (posts) {
    return (
      <>
        <h1 className="feedtitle">... Dive In ... </h1>
        <div className="feeds-flex">
          {posts.map((post) => {
            return (
              <Link
                key={post.id}
                className="postlink"
                to={`/posts/${post._id}`}
              >
                <Post className="posts" key={post.id} post={post} />
              </Link>
            );
          })}
        </div>
      </>
    );
  }

  return <LoadingPlaceholder />;
}
export default Feed;
