import React from "react";
import { Link } from "react-router-dom";
import bannerimage from "../assets/bannerimage.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bannerimage})` }}>
      <div className="headerContainer">
        <h1> Sports Posts </h1> <p> Dive into everything sports! </p>{" "}
        <Link to="/feed">
          <button> See Posts </button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}

export default Home;
