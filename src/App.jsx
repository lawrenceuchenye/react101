import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCounter] = useState(0);
  const [clicked, setClicked] = useState(false);

  const addCounter = () => {
    setCounter(count + 1);
  };

  useEffect(() => {
    addCounter();
  }, [clicked]);

  return (
    <div className="main-container">
      <h1>useEffect hook :{count}</h1>
      <h2>{clicked ? "Clicked" : "UnClicked"}</h2>
      <button className="btn" onClick={() => setClicked(!clicked)}>
        Tap
      </button>
    </div>
  );
};

export default App;
