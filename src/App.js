import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import AboutUs from "./pages/Aboutus";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link id="home" to="/">
          <div> Home </div>
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
        <Route path="/authors" element={<Authors authors={[1, 2, 3]} />} />
        <Route path="/authors/:id" element={<Authors />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
