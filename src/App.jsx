import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//pages
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <div className="nb-container">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/contact">Contact</Link>
          </span>
          <span>
            <Link to="/about">About</Link>
          </span>
        </div>
        <h1>React Router</h1>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
