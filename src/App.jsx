import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    </Router>
  );
};

export default App;
