import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Feed.css"
import Post from '../components/Post'
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
  const BASE_URL = `http://localhost:4000/posts`;

  useEffect(() => {
    fetchPosts();
  }, []);

  if (posts) {
    return (
      <>
        <h1 className="feedtitle">Feed Page</h1>
        <section className="all-feeds">
          {posts.map(post => {
            return (
              <Link
                key={post.id}
                className="postlink"
                to={`/posts/${post._id}`}
              >

                <Post key={post.id} post={post} />
              </Link>
            )
          })}
        </section>
      </>
    );
  }

  return <LoadingPlaceholder />
}
export default Feed;