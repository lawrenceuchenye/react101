import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="main-container">
      {show ? <h1>Twitter</h1> : <h1> Secret Text</h1>}
      <div>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? "Btn Clicked" : "Click Me!"}
        </button>
      </div>
    </div>
  );
};

export default App;
