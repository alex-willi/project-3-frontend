import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import AboutUs from "./pages/Aboutus";
import AuthorsDetails from "./components/AuthorsDetails";
import Feed from "./pages/Feed";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link id="home" to="/">
          <div> Home </div>
        </Link>
        <Link id="feed" to="/feed">
          <div> Feed </div>
        </Link>
        <Link id="authors" to="/authors">
          <div> Author 's</div>
        </Link>
        <Link id="aboutus" to="/aboutus">
          <div> About Us </div>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/:id" element={<AuthorsDetails />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
