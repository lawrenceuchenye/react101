import "./App.css";
import { useState } from "react";

const App = () => {
  let [count, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(count + 1);
  };

  return (
    <div className="main-container">
      <h1>Counter: {count}</h1>
      <button className="btn" onClick={() => addCounter()}>
        Click me!
      </button>
    </div>
  );
};

export default App;
