import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import AuthorPost from "./AuthorPost";

import LoadingPlaceholder from "./LoadingPlaceholder";

function AuthorsDetails(props) {
  const { id } = useParams();
  const URL = `https://project-3-sports.herokuapp.com/authors/${id}`;
  const POST_URL =`https://project-3-sports.herokuapp.com/posts/${id}`
  const [author, setAuthor] = useState(null);
  const [newpost, setNewpost] = useState({
    title: "",
    photo: "",
    body: "",
    author: id,
  });
  const [editForm, setEditForm] = useState({
    name: "",
    image: "",
    title: "",
    post:id
})


const getPostsHTML = () => {
  if (author.posts) {
    return author.posts.map((post) => (
      
      <AuthorPost key={post.id} post={post} editPost={editForm}postId={post._id} onDelete={handleDelete} handleFormChange={handleFormChange} editForm={handleForm}/>
      
    ));
  }
  return "";
};

const handleDelete = async (id) => {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
          },
      };
      const response = await fetch(
        `https://project-3-sports.herokuapp.com/posts/${id}`,
        requestOptions
      );
      console.log(response);
      const deletedPost = await response.json();
      console.log(deletedPost)
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setNewpost({ ...newpost, [event.target.name]: event.target.value });
  };
  const handleFormChange = (e) => {
    // console.log(editForm)
    const userInput = { ...editForm }
    userInput[e.target.name] = e.target.value
    setEditForm(userInput)
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { ...newpost };
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      };
      const response = await fetch(
        `https://project-3-sports.herokuapp.com/posts`,
        requestOptions
      );
      const comments = await response.json();
      setAuthor({ ...author, posts: [...author.posts, comments] });
      setNewpost({
        title: "",
        photo: "",
        body: "",
        author: id,
      });
      
    } catch (err) {
      console.log(err);
    }
  };
  const handleForm = async (e, postId) => {
    console.log(postId)
    e.preventDefault()
    const currentState = {...editForm }
    console.log(currentState)
    try {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(currentState)
        }
        const response = await fetch(`https://project-3-sports.herokuapp.com/posts/${postId}`, requestOptions)
        console.log(response)
        const updatedPost = await response.json()
        setEditForm(updatedPost)
        console.log(postId)
    } catch (err) {
        console.log(err)
    }
}

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setAuthor(json);
      });
  }, [URL]);
 return author ? (
   <>
     <p className="authorname"> {author.name} </p>
     <form onSubmit={handleSubmit}>
       <div className="authorpost">
         <input
           type="text"
           name="title"
           placeholder="Title"
           value={newpost.title}
           onChange={handleChange}
         />
         <input
           name="photo"
           id="image"
           type="text"
           alt=""
           placeholder="image"
           value={newpost.image}
           onChange={handleChange}
         />
         <textarea
           name="body"
           cols="52"
           rows="6"
           type="text"
           id="textbox"
           placeholder="body"
           value={newpost.body}
           onChange={handleChange}
         ></textarea>
         <input type="submit" value="Create Post" />
       </div>
     </form>
     {getPostsHTML()}
   </>
 
 ) : (
   <LoadingPlaceholder />
 );
}
export default AuthorsDetails;

